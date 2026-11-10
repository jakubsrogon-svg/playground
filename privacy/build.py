"""Build index.html from src/index.src.html and the vendored Kickresume Design System.

Inlines the design system's tokens.css, components/bundle.css and
components/bundle.js, and turns every font and asset path they use (plus the
page's {{asset:...}} placeholders) into data: URIs, so index.html is one
self-contained file that also works as a claude.ai artifact.

    python3 build.py            -> index.html
    python3 build.py --artifact -> build/artifact.html (no doctype/head wrapper)
"""
import base64, mimetypes, pathlib, re, sys

ROOT = pathlib.Path(__file__).parent
DS = ROOT / "vendor" / "kickresume-ds"
MIME = {".svg": "image/svg+xml", ".png": "image/png", ".woff2": "font/woff2", ".woff": "font/woff", ".otf": "font/otf"}


def data_uri(path):
    mime = MIME.get(path.suffix) or mimetypes.guess_type(path.name)[0]
    return f"data:{mime};base64," + base64.b64encode(path.read_bytes()).decode()


def inline_assets(text):
    # "../../assets/<path>" as used by bundle.css / bundle.js (written relative to components/<Comp>/)
    def asset(m):
        p = DS / "assets" / m.group(1)
        return data_uri(p) if p.is_file() else m.group(0)
    text = re.sub(r"\.\./\.\./assets/([\w./-]+\.(?:svg|png))", asset, text)
    # url("fonts/<file>") in tokens.css. Only the font files the page needs are
    # vendored; an @font-face whose file isn't vendored is dropped (another
    # face of the same family/weight covers it, e.g. Henk-Work Regular .woff).
    text = re.sub(r'@font-face \{[^}]*url\("fonts/([\w.-]+)"\)[^}]*\}\n?',
                  lambda m: m.group(0) if (DS / "fonts" / m.group(1)).is_file() else "", text)
    text = re.sub(r'url\("fonts/([\w.-]+)"\)', lambda m: f'url("{data_uri(DS / "fonts" / m.group(1))}")', text)
    return text


def build():
    src = (ROOT / "src" / "index.src.html").read_text()
    src = re.sub(r"\{\{css:([\w./-]+)\}\}", lambda m: inline_assets((DS / m.group(1)).read_text()), src)
    src = re.sub(r"\{\{js:([\w./-]+)\}\}", lambda m: inline_assets((DS / m.group(1)).read_text()).replace("</script", "<\\/script"), src)
    src = re.sub(r"\{\{asset:([\w./-]+)\}\}", lambda m: data_uri(DS / "assets" / m.group(1)), src)
    missing = re.findall(r"\{\{(?:css|js|asset):[^}]+\}\}", src)
    assert not missing, missing
    return src


if __name__ == "__main__":
    out = build()
    if "--artifact" in sys.argv:
        head = re.search(r"<head>(.*?)</head>", out, re.S).group(1)
        body = re.search(r"<body>(.*)</body>", out, re.S).group(1)
        head = re.sub(r'<meta (charset|name="viewport")[^>]*>\n?', "", head)
        (ROOT / "build").mkdir(exist_ok=True)
        (ROOT / "build" / "artifact.html").write_text(head + body)
    else:
        (ROOT / "index.html").write_text(out)
