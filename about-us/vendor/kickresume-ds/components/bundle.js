/* @ds-bundle: {"format":4,"namespace":"KickresumeDesignSystem_6ee106","components":[{"name":"AppTopbar","sourcePath":"ui_kits/builder/AppTopbar.jsx"},{"name":"EditorCanvas","sourcePath":"ui_kits/builder/EditorCanvas.jsx"},{"name":"EditorSidebar","sourcePath":"ui_kits/builder/EditorSidebar.jsx"},{"name":"ResumePreview","sourcePath":"ui_kits/builder/ResumePreview.jsx"},{"name":"Toolbar","sourcePath":"ui_kits/builder/Toolbar.jsx"},{"name":"Button","sourcePath":"ui_kits/marketing/Button.jsx"},{"name":"Eyebrow","sourcePath":"ui_kits/marketing/Eyebrow.jsx"},{"name":"FeatureRow","sourcePath":"ui_kits/marketing/FeatureRow.jsx"},{"name":"Footer","sourcePath":"ui_kits/marketing/Footer.jsx"},{"name":"Hero","sourcePath":"ui_kits/marketing/Hero.jsx"},{"name":"HoldedBy","sourcePath":"ui_kits/marketing/HoldedBy.jsx"},{"name":"Navbar","sourcePath":"ui_kits/marketing/Navbar.jsx"},{"name":"SampleCarousel","sourcePath":"ui_kits/marketing/SampleCarousel.jsx"},{"name":"SocialRating","sourcePath":"ui_kits/marketing/SocialRating.jsx"},{"name":"StarRow","sourcePath":"ui_kits/marketing/StarRow.jsx"},{"name":"TestimonialGrid","sourcePath":"ui_kits/marketing/TestimonialGrid.jsx"}],"sourceHashes":{"ui_kits/builder/AppTopbar.jsx":"61737270dd57","ui_kits/builder/EditorCanvas.jsx":"03acc152c450","ui_kits/builder/EditorSidebar.jsx":"8ba787fe23e8","ui_kits/builder/ResumePreview.jsx":"c015d1dd5f61","ui_kits/builder/Toolbar.jsx":"9d7a1fded92d","ui_kits/marketing/Button.jsx":"05c1847bbb9c","ui_kits/marketing/Eyebrow.jsx":"d81c3d65b38a","ui_kits/marketing/FeatureRow.jsx":"5b86235694df","ui_kits/marketing/Footer.jsx":"88f7578e26e8","ui_kits/marketing/Hero.jsx":"2dfcc2a50b66","ui_kits/marketing/HoldedBy.jsx":"a74f4959a7f3","ui_kits/marketing/Navbar.jsx":"74e072fbaee8","ui_kits/marketing/SampleCarousel.jsx":"7343e216ac25","ui_kits/marketing/SocialRating.jsx":"ca448de9cbce","ui_kits/marketing/StarRow.jsx":"07c9ce026e18","ui_kits/marketing/TestimonialGrid.jsx":"8770eb790aab"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KickresumeDesignSystem_6ee106 = window.KickresumeDesignSystem_6ee106 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/builder/AppTopbar.jsx
try { (() => {
/* Builder UI kit — Top app bar */

function AppTopbar() {
  const tabs = [{
    id: "edit",
    label: "Edit",
    icon: "pencil-line",
    active: true
  }, {
    id: "customize",
    label: "Customize",
    icon: "paintbrush"
  }, {
    id: "improve",
    label: "Improve",
    icon: "sparkles",
    badge: "35/100"
  }, {
    id: "tailor",
    label: "Tailor",
    icon: "target"
  }];
  return /*#__PURE__*/React.createElement("header", {
    className: "bd-topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bd-topbar__left"
  }, /*#__PURE__*/React.createElement("button", {
    className: "bd-iconbtn",
    "aria-label": "Home"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "home",
    width: "22",
    height: "22"
  })), /*#__PURE__*/React.createElement("button", {
    className: "bd-iconbtn bd-iconbtn--plain",
    "aria-label": "Save"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "save",
    width: "22",
    height: "22"
  })), /*#__PURE__*/React.createElement("span", {
    className: "bd-topbar__divider"
  }), /*#__PURE__*/React.createElement("button", {
    className: "bd-iconbtn bd-iconbtn--plain",
    "aria-label": "Undo"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "undo-2",
    width: "22",
    height: "22"
  })), /*#__PURE__*/React.createElement("button", {
    className: "bd-iconbtn bd-iconbtn--plain",
    "aria-label": "Redo"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "redo-2",
    width: "22",
    height: "22"
  }))), /*#__PURE__*/React.createElement("nav", {
    className: "bd-tabs"
  }, tabs.map(t => /*#__PURE__*/React.createElement("a", {
    key: t.id,
    href: "#",
    className: "bd-tab " + (t.active ? "is-active" : "")
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": t.icon,
    width: "20",
    height: "20"
  }), /*#__PURE__*/React.createElement("span", null, t.label), t.badge && /*#__PURE__*/React.createElement("span", {
    className: "bd-tab__badge"
  }, t.badge)))), /*#__PURE__*/React.createElement("div", {
    className: "bd-topbar__right"
  }, /*#__PURE__*/React.createElement("button", {
    className: "bd-download"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "download",
    width: "20",
    height: "20"
  }), /*#__PURE__*/React.createElement("span", null, "Download"))));
}
Object.assign(__ds_scope, { AppTopbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/builder/AppTopbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/builder/EditorCanvas.jsx
try { (() => {
/* Builder UI kit — Editor canvas (form sections) */

function PremiumBanner() {
  return /*#__PURE__*/React.createElement("div", {
    className: "bd-premium"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bd-premium__text"
  }, "This resume uses 5 premium features."), /*#__PURE__*/React.createElement("button", {
    className: "bd-premium__chev",
    "aria-label": "Expand"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-down",
    width: "24",
    height: "24"
  })));
}
function DocLine() {
  return /*#__PURE__*/React.createElement("div", {
    className: "bd-docline"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bd-docline__l"
  }, /*#__PURE__*/React.createElement("b", null, "Document:"), " Senior Developer at Microsoft"), /*#__PURE__*/React.createElement("span", {
    className: "bd-docline__save"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "cloud-check",
    width: "22",
    height: "22"
  }), "Saved"));
}
function ProfileCard() {
  return /*#__PURE__*/React.createElement("div", {
    className: "bd-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bd-card__head"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "user",
    width: "26",
    height: "26",
    className: "bd-card__lead"
  }), /*#__PURE__*/React.createElement("h2", {
    className: "bd-card__title"
  }, "Profile")));
}
function ExperienceCard() {
  return /*#__PURE__*/React.createElement("div", {
    className: "bd-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bd-card__head"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "briefcase",
    width: "26",
    height: "26",
    className: "bd-card__lead"
  }), /*#__PURE__*/React.createElement("h2", {
    className: "bd-card__title"
  }, "Work Experience"), /*#__PURE__*/React.createElement("div", {
    className: "bd-card__actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "bd-card__action",
    "aria-label": "Reorder"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-up-down",
    width: "22",
    height: "22"
  })), /*#__PURE__*/React.createElement("button", {
    className: "bd-card__action",
    "aria-label": "Help"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "circle-help",
    width: "22",
    height: "22"
  })), /*#__PURE__*/React.createElement("button", {
    className: "bd-card__action bd-card__action--danger",
    "aria-label": "Delete"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "trash-2",
    width: "22",
    height: "22"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "bd-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bd-item__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bd-item__name"
  }, "Microsoft Corp."), /*#__PURE__*/React.createElement("div", {
    className: "bd-item__head-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "bd-card__action bd-card__action--danger",
    "aria-label": "Delete"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "trash-2",
    width: "20",
    height: "20"
  })), /*#__PURE__*/React.createElement("button", {
    className: "bd-card__action",
    "aria-label": "Collapse"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-up",
    width: "22",
    height: "22"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "bd-item__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bd-grid-2"
  }, /*#__PURE__*/React.createElement("input", {
    className: "bd-input",
    defaultValue: "Microsoft Corp."
  }), /*#__PURE__*/React.createElement("input", {
    className: "bd-input",
    placeholder: "Job title"
  }), /*#__PURE__*/React.createElement("input", {
    className: "bd-input",
    defaultValue: "Washington DC"
  }), /*#__PURE__*/React.createElement("input", {
    className: "bd-input",
    defaultValue: "United States"
  })), /*#__PURE__*/React.createElement("div", {
    className: "bd-dates"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bd-daterange"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bd-datefield"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "calendar",
    width: "18",
    height: "18"
  }), /*#__PURE__*/React.createElement("input", {
    className: "bd-input",
    placeholder: "From"
  })), /*#__PURE__*/React.createElement("span", {
    className: "bd-dates__dash"
  }, "\u2013"), /*#__PURE__*/React.createElement("div", {
    className: "bd-datefield"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "calendar",
    width: "18",
    height: "18"
  }), /*#__PURE__*/React.createElement("input", {
    className: "bd-input",
    placeholder: "To"
  }))), /*#__PURE__*/React.createElement("label", {
    className: "bd-check"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox"
  }), " I currently work here")), /*#__PURE__*/React.createElement("div", {
    className: "bd-flabel"
  }, "Description"), /*#__PURE__*/React.createElement("div", {
    className: "bd-rte"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bd-rte__bar"
  }, /*#__PURE__*/React.createElement("button", {
    className: "bd-rte__btn",
    "aria-label": "Bold"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "bold",
    width: "18",
    height: "18"
  })), /*#__PURE__*/React.createElement("button", {
    className: "bd-rte__btn",
    "aria-label": "Italic"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "italic",
    width: "18",
    height: "18"
  })), /*#__PURE__*/React.createElement("button", {
    className: "bd-rte__btn",
    "aria-label": "Underline"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "underline",
    width: "18",
    height: "18"
  })), /*#__PURE__*/React.createElement("button", {
    className: "bd-rte__btn",
    "aria-label": "Align"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "align-left",
    width: "18",
    height: "18"
  })), /*#__PURE__*/React.createElement("button", {
    className: "bd-rte__btn",
    "aria-label": "List"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "list",
    width: "18",
    height: "18"
  }))), /*#__PURE__*/React.createElement("textarea", {
    className: "bd-rte__area",
    placeholder: "Describe your role, responsibilities, and achievements\u2026"
  }), /*#__PURE__*/React.createElement("div", {
    className: "bd-rte__foot"
  }, /*#__PURE__*/React.createElement("button", {
    className: "bd-aiwriter"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "sparkles",
    width: "18",
    height: "18"
  }), " AI Writer"), /*#__PURE__*/React.createElement("div", {
    className: "bd-lang"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bd-lang__ok"
  }, "OK"), /*#__PURE__*/React.createElement("button", {
    className: "bd-lang__sel"
  }, "EN-US ", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-down",
    width: "16",
    height: "16"
  }))))))));
}
function EditorCanvas() {
  return /*#__PURE__*/React.createElement("main", {
    className: "bd-editor"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bd-editor__inner"
  }, /*#__PURE__*/React.createElement(PremiumBanner, null), /*#__PURE__*/React.createElement(DocLine, null), /*#__PURE__*/React.createElement(ProfileCard, null), /*#__PURE__*/React.createElement(ExperienceCard, null)));
}
Object.assign(__ds_scope, { EditorCanvas });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/builder/EditorCanvas.jsx", error: String((e && e.message) || e) }); }

// ui_kits/builder/EditorSidebar.jsx
try { (() => {
/* Builder UI kit — Sidebar (section list) */

const SECTIONS = [{
  id: "profile",
  label: "Profile",
  icon: "icon-friendly.svg",
  filled: true
}, {
  id: "experience",
  label: "Work Experience",
  icon: "icon-award.svg",
  filled: true
}, {
  id: "education",
  label: "Education",
  icon: "icon-file-text.svg",
  filled: true
}, {
  id: "skills",
  label: "Skills",
  icon: "icon-target.svg",
  filled: true
}, {
  id: "languages",
  label: "Languages",
  icon: "icon-language.svg",
  filled: false
}, {
  id: "projects",
  label: "Projects",
  icon: "icon-heart.svg",
  filled: false
}, {
  id: "awards",
  label: "Awards",
  icon: "icon-gift.svg",
  filled: false
}];
function EditorSidebar({
  activeId,
  onSelect
}) {
  return /*#__PURE__*/React.createElement("aside", {
    className: "bd-side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bd-side__group-title"
  }, "Sections"), /*#__PURE__*/React.createElement("nav", {
    className: "bd-side__list"
  }, SECTIONS.map(s => /*#__PURE__*/React.createElement("button", {
    key: s.id,
    className: "bd-side__item " + (activeId === s.id ? "is-active" : ""),
    onClick: () => onSelect(s.id)
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icons/" + s.icon,
    className: "bd-side__icon",
    width: "20",
    height: "20",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    className: "bd-side__label"
  }, s.label), s.filled && /*#__PURE__*/React.createElement("span", {
    className: "bd-side__dot"
  }))), /*#__PURE__*/React.createElement("button", {
    className: "bd-side__item bd-side__item--add"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icons/icon-plus.svg",
    width: "14",
    height: "14",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    className: "bd-side__label"
  }, "Add section"))), /*#__PURE__*/React.createElement("div", {
    className: "bd-side__group-title"
  }, "More"), /*#__PURE__*/React.createElement("nav", {
    className: "bd-side__list"
  }, /*#__PURE__*/React.createElement("button", {
    className: "bd-side__item"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icons/stars.svg",
    width: "20",
    height: "20",
    alt: "",
    className: "bd-side__icon"
  }), /*#__PURE__*/React.createElement("span", {
    className: "bd-side__label kr-text-premium-gradient",
    style: {
      fontWeight: 600
    }
  }, "AI Rewrite")), /*#__PURE__*/React.createElement("button", {
    className: "bd-side__item"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icons/icon-check-green-circle.svg",
    width: "20",
    height: "20",
    alt: "",
    className: "bd-side__icon"
  }), /*#__PURE__*/React.createElement("span", {
    className: "bd-side__label"
  }, "Resume Check"), /*#__PURE__*/React.createElement("span", {
    className: "bd-side__score"
  }, "82")), /*#__PURE__*/React.createElement("button", {
    className: "bd-side__item"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icons/icon-target.svg",
    width: "20",
    height: "20",
    alt: "",
    className: "bd-side__icon"
  }), /*#__PURE__*/React.createElement("span", {
    className: "bd-side__label"
  }, "Tailor for a job"))));
}
Object.assign(__ds_scope, { EditorSidebar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/builder/EditorSidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/builder/ResumePreview.jsx
try { (() => {
/* Builder UI kit — Resume preview pane (timeline template) */

function ResumePreview() {
  return /*#__PURE__*/React.createElement("div", {
    className: "bd-preview"
  }, /*#__PURE__*/React.createElement("button", {
    className: "bd-preview__scan",
    "aria-label": "Zoom"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "scan-search",
    width: "22",
    height: "22"
  })), /*#__PURE__*/React.createElement("div", {
    className: "cv-page"
  }, /*#__PURE__*/React.createElement("header", {
    className: "cv-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cv-avatar"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "user",
    width: "60",
    height: "60"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "cv-name"
  }, "EMMA SOUTH"), /*#__PURE__*/React.createElement("div", {
    className: "cv-role"
  }, "Marketing Manager"))), /*#__PURE__*/React.createElement("div", {
    className: "cv-contact"
  }, /*#__PURE__*/React.createElement("b", null, "PHONE:"), " 00 0123 456 789 ", /*#__PURE__*/React.createElement("span", null, "EMAIL:"), " emma.south@email.com"), /*#__PURE__*/React.createElement("div", {
    className: "cv-timeline"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cv-row cv-row--head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cv-meta"
  }), /*#__PURE__*/React.createElement("div", {
    className: "cv-marker"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cv-badge"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "user"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "cv-content"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "cv-h"
  }, "PROFILE / SUMARY"))), /*#__PURE__*/React.createElement("div", {
    className: "cv-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cv-meta"
  }), /*#__PURE__*/React.createElement("div", {
    className: "cv-marker"
  }), /*#__PURE__*/React.createElement("div", {
    className: "cv-content"
  }, /*#__PURE__*/React.createElement("p", {
    className: "cv-text"
  }, "In my current role, I am a Marketing Manager with multiple years of experience in SaaS oriented business. I work with large enterprise clients on managing solutions for global video production runways."))), /*#__PURE__*/React.createElement("div", {
    className: "cv-row cv-row--head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cv-meta"
  }), /*#__PURE__*/React.createElement("div", {
    className: "cv-marker"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cv-badge"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "briefcase"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "cv-content"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "cv-h"
  }, "WORK EXPERIENCE"))), /*#__PURE__*/React.createElement("div", {
    className: "cv-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cv-meta"
  }, "05/2016 - PRESENT", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", null, "Japan")), /*#__PURE__*/React.createElement("div", {
    className: "cv-marker"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cv-dot"
  })), /*#__PURE__*/React.createElement("div", {
    className: "cv-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cv-role"
  }, "Marketing Manager"), /*#__PURE__*/React.createElement("div", {
    className: "cv-org"
  }, "Netflix Japan"), /*#__PURE__*/React.createElement("ul", {
    className: "cv-bullets"
  }, /*#__PURE__*/React.createElement("li", null, "Campaign creation and management - launching unique campaigns for our content, managing relations with the different agencies and studios we partnered with"), /*#__PURE__*/React.createElement("li", null, "Cultural Ambassador in Japan")))), /*#__PURE__*/React.createElement("div", {
    className: "cv-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cv-meta"
  }, "11/2015 - 04/2016", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", null, "United Kingdom")), /*#__PURE__*/React.createElement("div", {
    className: "cv-marker"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cv-dot"
  })), /*#__PURE__*/React.createElement("div", {
    className: "cv-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cv-role"
  }, "Marketing Assistant"), /*#__PURE__*/React.createElement("div", {
    className: "cv-org"
  }, "Accenture"), /*#__PURE__*/React.createElement("ul", {
    className: "cv-bullets"
  }, /*#__PURE__*/React.createElement("li", null, "Delivering and supporting various digital projects in automotive industry worldwide"), /*#__PURE__*/React.createElement("li", null, "Leading a design team in the area of content management, platform support and website quality")))), /*#__PURE__*/React.createElement("div", {
    className: "cv-row cv-row--head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cv-meta"
  }), /*#__PURE__*/React.createElement("div", {
    className: "cv-marker"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cv-badge"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "graduation-cap"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "cv-content"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "cv-h"
  }, "EDUCATION"))), /*#__PURE__*/React.createElement("div", {
    className: "cv-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cv-meta"
  }, "2013 - 06/2015", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", null, "Philadelphia, Pennsylvania")), /*#__PURE__*/React.createElement("div", {
    className: "cv-marker"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cv-dot"
  })), /*#__PURE__*/React.createElement("div", {
    className: "cv-content cv-eduspace"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cv-role"
  }, "Marketing and Operations Management"), /*#__PURE__*/React.createElement("div", {
    className: "cv-org"
  }, "University of Pennsylvania"))))));
}
Object.assign(__ds_scope, { ResumePreview });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/builder/ResumePreview.jsx", error: String((e && e.message) || e) }); }

// ui_kits/builder/Toolbar.jsx
try { (() => {
/* Builder UI kit — Floating template / accent / spacing controls */

const ACCENTS = ["#ff5e59", "#514eea", "#056640", "#ffa101", "#0196a2", "#0077b5", "#3f3f3f"];
function Toolbar({
  accent,
  onAccent
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "bd-toolbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bd-toolbar__group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bd-toolbar__label"
  }, "Template"), /*#__PURE__*/React.createElement("div", {
    className: "bd-toolbar__tiles"
  }, ["Aquino", "Berlin", "Helsinki", "Boston"].map((t, i) => /*#__PURE__*/React.createElement("button", {
    key: t,
    className: "bd-tile " + (i === 0 ? "is-active" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "bd-tile__thumb",
    style: {
      background: ["#16213D", "#fafafa", "#3f3f3f", "#fff2dc"][i]
    }
  }), /*#__PURE__*/React.createElement("span", null, t))))), /*#__PURE__*/React.createElement("div", {
    className: "bd-toolbar__group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bd-toolbar__label"
  }, "Accent"), /*#__PURE__*/React.createElement("div", {
    className: "bd-toolbar__swatches"
  }, ACCENTS.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    className: "bd-swatch " + (c === accent ? "is-active" : ""),
    style: {
      background: c
    },
    onClick: () => onAccent(c),
    "aria-label": c
  })))), /*#__PURE__*/React.createElement("div", {
    className: "bd-toolbar__group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bd-toolbar__label"
  }, "Spacing"), /*#__PURE__*/React.createElement("div", {
    className: "bd-toolbar__segments"
  }, /*#__PURE__*/React.createElement("button", null, "Tight"), /*#__PURE__*/React.createElement("button", {
    className: "is-active"
  }, "Default"), /*#__PURE__*/React.createElement("button", null, "Roomy"))), /*#__PURE__*/React.createElement("div", {
    className: "bd-toolbar__group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bd-toolbar__label"
  }, "Font"), /*#__PURE__*/React.createElement("div", {
    className: "bd-toolbar__segments"
  }, /*#__PURE__*/React.createElement("button", {
    className: "is-active"
  }, "Graphik"), /*#__PURE__*/React.createElement("button", {
    style: {
      fontFamily: "var(--kr-font-display)"
    }
  }, "Henk"), /*#__PURE__*/React.createElement("button", null, "Source"))));
}
Object.assign(__ds_scope, { Toolbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/builder/Toolbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Marketing UI kit — Button */

const KR_BTN_ALIAS = {
  primary: "coral",
  "outline-primary": "coral-ol",
  "outline-dark": "dark-ol",
  secondary: "gradient",
  upgrade: "gradient-glow"
};
function Button({
  variant = "coral",
  size = "md",
  outline = false,
  ghost = false,
  children,
  href,
  className = "",
  ...rest
}) {
  let v = KR_BTN_ALIAS[variant] || variant;
  if (outline && !v.endsWith("-ol")) v = v + "-ol";
  const cls = ["kr-btn", `kr-btn--${v}`, ghost && "kr-btn--ghost", `kr-btn--${size}`, className].filter(Boolean).join(" ");
  if (href) return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    className: cls
  }, rest), children);
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Button.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Eyebrow.jsx
try { (() => {
/* Marketing UI kit — Eyebrow */

function Eyebrow({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "kr-eyebrow"
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/FeatureRow.jsx
try { (() => {
/* Marketing UI kit — Feature row (image + text, alternating sides) */

function FeatureRow({
  eyebrow,
  title,
  body,
  bullets = [],
  cta,
  image,
  reverse = false,
  dark = false
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "kr-feature " + (reverse ? "is-reverse " : "") + (dark ? "is-dark" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "kr-container kr-container--wide kr-feature__row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kr-feature__art"
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "kr-feature__col"
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "kr-h2"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "kr-body"
  }, body), /*#__PURE__*/React.createElement("hr", null), bullets.length > 0 && /*#__PURE__*/React.createElement("ul", {
    className: "kr-checked"
  }, bullets.map((b, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, b))), cta && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: dark ? "primary" : "primary"
  }, cta))));
}
Object.assign(__ds_scope, { FeatureRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/FeatureRow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/HoldedBy.jsx
try { (() => {
/* Marketing UI kit — "Hired at" logo strip */

function HoldedBy({
  tone = "dark"
}) {
  const map = ["logo-google.svg", "logo-apple-charcoal.svg", "logo-facebook-charcoal.svg", "logo-nasa-charcoal.svg", "logo-nike-charcoal.svg"];
  return /*#__PURE__*/React.createElement("div", {
    className: "kr-hired"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kr-hired__label"
  }, "Their resumes got them hired at"), /*#__PURE__*/React.createElement("ul", {
    className: "kr-hired__list"
  }, map.map((f, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/" + f,
    alt: ""
  })))));
}
Object.assign(__ds_scope, { HoldedBy });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/HoldedBy.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Navbar.jsx
try { (() => {
/* Marketing UI kit — Navbar */

function Navbar() {
  const [open, setOpen] = React.useState(null);
  const items = [{
    id: "features",
    label: "Features",
    badge: "NEW"
  }, {
    id: "resume",
    label: "Resume"
  }, {
    id: "coverletter",
    label: "Cover Letter"
  }, {
    id: "ats",
    label: "ATS Checker",
    noCaret: true
  }, {
    id: "pricing",
    label: "Pricing",
    noCaret: true
  }];
  return /*#__PURE__*/React.createElement("nav", {
    className: "kr-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kr-container kr-container--wide kr-nav__row"
  }, /*#__PURE__*/React.createElement("a", {
    className: "kr-nav__brand",
    href: "#"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/kickresume-black.svg",
    alt: "Kickresume",
    height: "26"
  })), /*#__PURE__*/React.createElement("ul", {
    className: "kr-nav__list"
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it.id,
    className: "kr-nav__item " + (open === it.id ? "is-open" : ""),
    onMouseEnter: () => setOpen(it.id),
    onMouseLeave: () => setOpen(null)
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "kr-nav__link"
  }, it.label, it.badge && /*#__PURE__*/React.createElement("span", {
    className: "kr-nav__badge"
  }, it.badge), !it.noCaret && /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "6",
    viewBox: "0 0 10 6",
    style: {
      marginLeft: 6
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l4 4 4-4",
    stroke: "currentColor",
    strokeWidth: "1.5",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))))), /*#__PURE__*/React.createElement("div", {
    className: "kr-nav__cta"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline-primary",
    size: "sm"
  }, "Log In"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm"
  }, "Sign Up For Free"))));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Navbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/SampleCarousel.jsx
try { (() => {
/* Marketing UI kit — Sample carousel ("Resumes that got hired") */

const SAMPLES = [{
  name: "Aisha N.",
  role: "Senior Product Designer",
  company: "Apple",
  logo: "logo-apple-charcoal.svg"
}, {
  name: "Marcus T.",
  role: "Software Engineer",
  company: "Google",
  logo: "logo-google.svg"
}, {
  name: "Elena R.",
  role: "Marketing Manager",
  company: "Facebook",
  logo: "logo-facebook-charcoal.svg"
}, {
  name: "Jin P.",
  role: "Data Scientist",
  company: "NASA",
  logo: "logo-nasa-charcoal.svg"
}];
function SampleCarousel() {
  return /*#__PURE__*/React.createElement("section", {
    className: "kr-samples"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kr-container kr-container--wide"
  }, /*#__PURE__*/React.createElement("header", {
    className: "kr-section-title"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "kr-h1"
  }, "Learn from successful", /*#__PURE__*/React.createElement("br", null), "resume examples."), /*#__PURE__*/React.createElement("p", {
    className: "kr-body"
  }, "Search 1,500+ resumes of our customers who got hired. They're our heroes. They can help.")), /*#__PURE__*/React.createElement("div", {
    className: "kr-samples__row"
  }, SAMPLES.map((s, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    className: "kr-sample-card",
    href: "#"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kr-sample-card__thumb"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustrations/cover-resume.png",
    alt: s.name
  })), /*#__PURE__*/React.createElement("div", {
    className: "kr-sample-card__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kr-sample-card__pre"
  }, s.name), /*#__PURE__*/React.createElement("h3", {
    className: "kr-sample-card__title"
  }, s.role), /*#__PURE__*/React.createElement("span", {
    className: "kr-sample-card__cta"
  }, "View Resume ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("div", {
    className: "kr-sample-card__hired"
  }, /*#__PURE__*/React.createElement("span", null, "Hired by"), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/" + s.logo,
    alt: s.company
  })))))), /*#__PURE__*/React.createElement("div", {
    className: "kr-section-footer"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline-primary"
  }, "See All Examples"))));
}
Object.assign(__ds_scope, { SampleCarousel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/SampleCarousel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/StarRow.jsx
try { (() => {
/* Marketing UI kit — Star rating row */

function StarRow({
  value = 4.6
}) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return /*#__PURE__*/React.createElement("span", {
    className: "kr-stars"
  }, Array.from({
    length: full
  }).map((_, i) => /*#__PURE__*/React.createElement("img", {
    key: "f" + i,
    src: "../../assets/icons/icon-star-full.svg",
    alt: ""
  })), half && /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icons/icon-star-half.svg",
    alt: ""
  }), Array.from({
    length: empty
  }).map((_, i) => /*#__PURE__*/React.createElement("img", {
    key: "e" + i,
    src: "../../assets/icons/icon-star-empty.svg",
    alt: ""
  })));
}
Object.assign(__ds_scope, { StarRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/StarRow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Footer.jsx
try { (() => {
/* Marketing UI kit — Footer */

const FOOTER_NAV = [{
  group: "Product",
  items: ["Resume Builder", "Cover Letter Builder", "Website Builder", "Career Map", "Job Tracker", "ATS Checker"]
}, {
  group: "Templates",
  items: ["Resume Templates", "Cover Letter Templates", "Creative", "Professional", "Simple", "ATS-friendly"]
}, {
  group: "Resources",
  items: ["Resume Examples", "Cover Letter Examples", "Career Center", "Blog", "Career Guides", "Help Center"]
}, {
  group: "Company",
  items: ["About Us", "Press", "Contact", "Affiliate", "For Schools", "Privacy"]
}];
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "kr-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kr-container kr-container--wide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kr-footer__top"
  }, FOOTER_NAV.map(group => /*#__PURE__*/React.createElement("nav", {
    key: group.group,
    className: "kr-footer__nav"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "kr-footer__heading"
  }, group.group), /*#__PURE__*/React.createElement("ul", null, group.items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, it)))))), /*#__PURE__*/React.createElement("div", {
    className: "kr-footer__nav"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "kr-footer__heading"
  }, "Ratings"), /*#__PURE__*/React.createElement("div", {
    className: "kr-footer__ratings"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/logo-google-colored.svg",
    height: "20",
    alt: "Google"
  }), /*#__PURE__*/React.createElement("div", {
    className: "kr-footer__rating-row"
  }, /*#__PURE__*/React.createElement(__ds_scope.StarRow, {
    value: 4.7
  }), /*#__PURE__*/React.createElement("span", null, "4.7 / 5"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/logo-app-store.svg",
    height: "22",
    alt: "App Store"
  }), /*#__PURE__*/React.createElement("div", {
    className: "kr-footer__rating-row"
  }, /*#__PURE__*/React.createElement(__ds_scope.StarRow, {
    value: 4.5
  }), /*#__PURE__*/React.createElement("span", null, "4.5 / 5")))))), /*#__PURE__*/React.createElement("div", {
    className: "kr-footer__bottom"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/kickresume-white.svg",
    height: "22",
    alt: "Kickresume"
  }), /*#__PURE__*/React.createElement("span", {
    className: "kr-footer__copy"
  }, "\xA9 2026 Kickresume. Made with \u2665 in Bratislava."), /*#__PURE__*/React.createElement("div", {
    className: "kr-footer__socials"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icons/icon-facebook.svg",
    alt: "",
    width: "20",
    height: "20"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icons/icon-twitter.svg",
    alt: "",
    width: "20",
    height: "20"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icons/icon-instagram.svg",
    alt: "",
    width: "20",
    height: "20"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icons/icon-linkedin.svg",
    alt: "",
    width: "20",
    height: "20"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icons/icon-youtube.svg",
    alt: "",
    width: "20",
    height: "20"
  }))))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Hero.jsx
try { (() => {
/* Marketing UI kit — Hero */

function ProductMock() {
  const tabs = [{
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "7",
      height: "7",
      rx: "1.5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "3",
      width: "7",
      height: "7",
      rx: "1.5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "14",
      width: "7",
      height: "7",
      rx: "1.5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "14",
      width: "7",
      height: "7",
      rx: "1.5"
    })),
    label: "Build Resumes",
    active: true
  }, {
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 3l1.9 5.8L20 10l-5.8 2.1L12 18l-2.1-5.9L4 10l6.1-1.2z"
    })),
    label: "Optimize for ATS"
  }, {
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
    })),
    label: "Interview Planning"
  }];
  const rail = [/*#__PURE__*/React.createElement("svg", {
    key: "a",
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 3l1.9 5.8L20 10l-5.8 2.1L12 18l-2.1-5.9L4 10l6.1-1.2z"
  })), /*#__PURE__*/React.createElement("svg", {
    key: "b",
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 12a9 9 0 1 1-3-6.7L21 8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 3v5h-5"
  })), /*#__PURE__*/React.createElement("svg", {
    key: "c",
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 3v5h5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 15l2 2 4-4"
  }))];
  return /*#__PURE__*/React.createElement("div", {
    className: "kr-mock"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kr-mock__bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kr-mock__dots"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("div", {
    className: "kr-mock__tabs"
  }, tabs.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "kr-mock__tab " + (t.active ? "is-active" : "")
  }, t.icon, /*#__PURE__*/React.createElement("span", null, t.label))))), /*#__PURE__*/React.createElement("div", {
    className: "kr-mock__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kr-mock__rail"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kr-mock__score"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kr-mock__score-ring"
  }, "0"), /*#__PURE__*/React.createElement("div", {
    className: "kr-mock__score-label"
  }, "ATS", /*#__PURE__*/React.createElement("br", null), "SCORE")), /*#__PURE__*/React.createElement("div", {
    className: "kr-mock__rail-icons"
  }, rail.map((r, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, r)))), /*#__PURE__*/React.createElement("div", {
    className: "kr-mock__canvas"
  })));
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "kr-hero kr-hero--center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kr-container kr-container--wide"
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, "Best AI Resume Builder"), /*#__PURE__*/React.createElement("h1", {
    className: "kr-h1 kr-hero__title"
  }, "Build a resume. Land a job."), /*#__PURE__*/React.createElement("p", {
    className: "kr-hero__sub"
  }, "Create a resume that's professional, ATS-friendly, and tailored to a job description.", /*#__PURE__*/React.createElement("br", null), "It's fast, easy, and free to try."), /*#__PURE__*/React.createElement("div", {
    className: "kr-hero__cta"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "lg"
  }, "Sign Up For Free")), /*#__PURE__*/React.createElement("div", {
    className: "kr-hero__proof"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kr-proof__group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kr-proof__avatars"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kr-proof__av",
    style: {
      background: "#f8aca7"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "kr-proof__av",
    style: {
      background: "#9795f2"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "kr-proof__av",
    style: {
      background: "#1da36e"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "kr-proof__count"
  }, "8M+")), /*#__PURE__*/React.createElement("div", {
    className: "kr-proof__text"
  }, /*#__PURE__*/React.createElement(__ds_scope.StarRow, {
    value: 5
  }), /*#__PURE__*/React.createElement("span", null, "Trusted by 8+ million job seekers."))), /*#__PURE__*/React.createElement("div", {
    className: "kr-proof__forbes"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kr-proof__forbes-mark"
  }, "F"), /*#__PURE__*/React.createElement("div", {
    className: "kr-proof__text"
  }, /*#__PURE__*/React.createElement("strong", null, "Forbes"), /*#__PURE__*/React.createElement("span", null, "Best Resume Builder")))), /*#__PURE__*/React.createElement(ProductMock, null)));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/SocialRating.jsx
try { (() => {
/* Marketing UI kit — Social rating bar */

function SocialRating() {
  return /*#__PURE__*/React.createElement("section", {
    className: "kr-rating"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kr-container kr-container--narrow kr-rating__row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kr-rating__item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kr-rating__label"
  }, "Trustpilot"), /*#__PURE__*/React.createElement("div", {
    className: "kr-rating__stars"
  }, /*#__PURE__*/React.createElement(__ds_scope.StarRow, {
    value: 4.5
  }), /*#__PURE__*/React.createElement("span", {
    className: "kr-rating__num"
  }, "4.5 / 5"))), /*#__PURE__*/React.createElement("div", {
    className: "kr-rating__item"
  }, /*#__PURE__*/React.createElement("img", {
    className: "kr-rating__logo",
    src: "../../assets/logos/logo-google-colored.svg",
    alt: "Google",
    height: "28"
  }), /*#__PURE__*/React.createElement("div", {
    className: "kr-rating__stars"
  }, /*#__PURE__*/React.createElement(__ds_scope.StarRow, {
    value: 4.7
  }), /*#__PURE__*/React.createElement("span", {
    className: "kr-rating__num"
  }, "4.7 / 5"))), /*#__PURE__*/React.createElement("div", {
    className: "kr-rating__item"
  }, /*#__PURE__*/React.createElement("img", {
    className: "kr-rating__logo",
    src: "../../assets/logos/logo-app-store.svg",
    alt: "App Store",
    height: "30"
  }), /*#__PURE__*/React.createElement("div", {
    className: "kr-rating__stars"
  }, /*#__PURE__*/React.createElement(__ds_scope.StarRow, {
    value: 4.5
  }), /*#__PURE__*/React.createElement("span", {
    className: "kr-rating__num"
  }, "4.5 / 5")))));
}
Object.assign(__ds_scope, { SocialRating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/SocialRating.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/TestimonialGrid.jsx
try { (() => {
/* Marketing UI kit — Forbes quote card + Testimonial grid */

function ForbesCard() {
  return /*#__PURE__*/React.createElement("div", {
    className: "kr-forbes"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kr-forbes__quote"
  }, "\"We named ", /*#__PURE__*/React.createElement("strong", null, "Kickresume"), " our ", /*#__PURE__*/React.createElement("strong", null, "top choice"), " for most job seekers thanks to its simple interface, worthwhile AI tools and sizable template library.\""), /*#__PURE__*/React.createElement("div", {
    className: "kr-forbes__byline"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/logo-forbes-symbol-white.svg",
    alt: "Forbes",
    width: "64",
    height: "64"
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "kr-forbes__link"
  }, "Reviewed by Forbes")));
}
const TESTIMONIALS = [{
  name: "Patricia M.",
  body: "Got me callbacks within 48 hours of sending out the resume. Worth every cent.",
  source: "Trustpilot"
}, {
  name: "Henrik L.",
  body: "The AI writer saved me hours of staring at a blank page. It just gets it.",
  source: "Google Play"
}, {
  name: "Sofia K.",
  body: "Beautiful templates. Recruiters actually commented on how the resume looked.",
  source: "App Store"
}, {
  name: "Devon W.",
  body: "Bounced between 6 builders. This one is the only one I'd recommend to a friend.",
  source: "Trustpilot"
}];
function TestimonialGrid() {
  return /*#__PURE__*/React.createElement("section", {
    className: "kr-testi"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kr-container kr-container--wide"
  }, /*#__PURE__*/React.createElement("header", {
    className: "kr-section-title"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "kr-h1"
  }, "Kickresume loves you back."), /*#__PURE__*/React.createElement("p", {
    className: "kr-body"
  }, "Your five-star reviews keep us going. All the others help us improve.")), /*#__PURE__*/React.createElement(ForbesCard, null), /*#__PURE__*/React.createElement("div", {
    className: "kr-testi__grid"
  }, TESTIMONIALS.map((t, i) => /*#__PURE__*/React.createElement("div", {
    className: "kr-testi-card",
    key: i
  }, /*#__PURE__*/React.createElement("h5", {
    className: "kr-testi-card__name"
  }, t.name), /*#__PURE__*/React.createElement("p", {
    className: "kr-testi-card__body"
  }, "\"", t.body, "\""), /*#__PURE__*/React.createElement("div", {
    className: "kr-testi-card__footer"
  }, /*#__PURE__*/React.createElement(__ds_scope.StarRow, {
    value: 5
  }), /*#__PURE__*/React.createElement("span", {
    className: "kr-testi-card__source"
  }, "Reviewed via ", t.source))))), /*#__PURE__*/React.createElement("div", {
    className: "kr-section-footer"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline-dark"
  }, "View More"))));
}
Object.assign(__ds_scope, { TestimonialGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/TestimonialGrid.jsx", error: String((e && e.message) || e) }); }

__ds_ns.AppTopbar = __ds_scope.AppTopbar;

__ds_ns.EditorCanvas = __ds_scope.EditorCanvas;

__ds_ns.EditorSidebar = __ds_scope.EditorSidebar;

__ds_ns.ResumePreview = __ds_scope.ResumePreview;

__ds_ns.Toolbar = __ds_scope.Toolbar;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.FeatureRow = __ds_scope.FeatureRow;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.HoldedBy = __ds_scope.HoldedBy;

__ds_ns.Navbar = __ds_scope.Navbar;

__ds_ns.SampleCarousel = __ds_scope.SampleCarousel;

__ds_ns.SocialRating = __ds_scope.SocialRating;

__ds_ns.StarRow = __ds_scope.StarRow;

__ds_ns.TestimonialGrid = __ds_scope.TestimonialGrid;

})();
