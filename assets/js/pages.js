/* =====================================================================
   Page rendering and small interactions.
   Builds each page from content.js using the components in components.js.
   ===================================================================== */
(function () {
  "use strict";

  var SITE = window.SITE;
  var UI = window.UI;
  var esc = UI.esc;
  var page = document.body.getAttribute("data-page");

  var NAV = [
    ["story", "Story"],
    ["research", "Research"],
    ["publications", "Work"],
    ["honors", "Recognition"],
    ["leadership", "Beyond the lab"],
    ["cv.html", "CV"],
  ];

  var STYLES = { editorial: "Editorial", minimal: "Minimal", sidebar: "Sidebar" };

  function visiblePublications() {
    return (SITE.publications || [])
      .filter(function (p) {
        return !p.placeholder;
      })
      .sort(function (a, b) {
        return (b.year || 0) - (a.year || 0);
      });
  }

  function realPresentations() {
    return (SITE.presentations || [])
      .filter(function (p) {
        return !p.placeholder;
      })
      .sort(function (a, b) {
        return (b.year || 0) - (a.year || 0);
      });
  }

  function contactLinks() {
    var p = SITE.person;
    return [
      UI.ExternalLink({ href: "mailto:" + p.email, label: "Email" }),
      p.links.linkedin ? UI.ExternalLink({ href: p.links.linkedin, label: "LinkedIn" }) : "",
      UI.LinkOrPlaceholder(p.links.scholar, "Google Scholar", "Google Scholar URL"),
    ].filter(Boolean);
  }

  /* ------------------------------------------------------------------
     Shared header and footer
     ------------------------------------------------------------------ */
  function renderHeader() {
    var p = SITE.person;
    var el = document.getElementById("site-header");
    if (!el) return;
    var navHref = function (id) {
      if (/\.html$/.test(id)) return id;
      return page === "home" ? "#" + id : "index.html#" + id;
    };
    var items = NAV.map(function (n) {
      return '<li><a href="' + navHref(n[0]) + '" data-nav="' + n[0] + '">' + n[1] + "</a></li>";
    }).join("");

    el.innerHTML =
      '<div class="container header-inner">' +
      '<div class="brand-wrap"><a class="brand" href="' +
      (page === "home" ? "#top" : "index.html") +
      '">' +
      esc(p.name) +
      '</a><p class="brand-sub">' +
      esc(p.sidebarLine) +
      "</p></div>" +
      '<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">Menu</button>' +
      '<nav class="site-nav" id="site-nav" aria-label="Primary"><ul>' +
      items +
      "</ul></nav>" +
      '<div class="header-extra">' +
      contactLinks().join("") +
      "</div>" +
      "</div>";
  }

  function renderFooter() {
    var el = document.getElementById("site-footer");
    if (!el) return;
    el.innerHTML =
      '<div class="container footer-inner">' +
      '<div><p class="footer-name">' +
      esc(SITE.person.name) +
      '</p><p class="footer-affil">Stanford University</p></div>' +
      '<ul class="footer-links">' +
      contactLinks()
        .map(function (l) {
          return "<li>" + l + "</li>";
        })
        .join("") +
      "</ul></div>";
  }

  /* ------------------------------------------------------------------
     Home page
     ------------------------------------------------------------------ */
  function fillSection(id, title, body) {
    var el = document.getElementById(id);
    if (!el) return;
    el.innerHTML =
      '<div class="container section-inner">' +
      UI.SectionHeading({ id: id, title: title }) +
      '<div class="section-body reveal">' +
      body +
      "</div></div>";
  }

  function renderHero() {
    var p = SITE.person;
    var l = p.links;
    var el = document.getElementById("hero");
    var photo = "";
    if (p.headshot) {
      photo = '<img class="headshot" src="' + esc(p.headshot) + '" alt="' + esc(p.headshotAlt || p.name) + '">';
    } else if (UI.showPlaceholders()) {
      photo =
        '<div class="headshot-ph" title="Placeholder: add your photo to images/ and set person.headshot in content.js">' +
        "<span>[HEADSHOT]</span><span>images/headshot.jpg</span></div>";
    }

    var actions = [
      UI.Button({
        href: l.cv,
        label: "Resume",
        primary: true,
        newTab: true,
        hint: "Placeholder: put your PDF in files/ and set links.cv in content.js",
      }),
      '<a class="btn" href="cv.html">Printable CV</a>',
      UI.Button({ href: l.scholar, label: "Google Scholar", hint: "Placeholder: add links.scholar in content.js" }),
      UI.Button({ href: l.linkedin, label: "LinkedIn" }),
      UI.Button({ href: "mailto:" + p.email, label: "Email" }),
    ].join("");

    el.innerHTML =
      '<div class="container hero-inner' +
      (photo ? "" : " hero-inner--solo") +
      '">' +
      '<div class="hero-text">' +
      '<h1 class="hero-name">' +
      esc(p.name) +
      "</h1>" +
      '<p class="hero-role">' +
      esc(p.title) +
      "</p>" +
      '<p class="hero-affil">' +
      esc(p.affiliation) +
      "</p>" +
      '<ul class="hero-focus" aria-label="Research areas">' +
      p.focusAreas
        .map(function (f) {
          return "<li>" + esc(f) + "</li>";
        })
        .join("") +
      "</ul>" +
      '<p class="hero-bio">' +
      esc(p.shortBio) +
      "</p>" +
      '<div class="hero-actions">' +
      actions +
      "</div>" +
      "</div>" +
      (photo ? '<div class="hero-photo">' + photo + "</div>" : "") +
      "</div>";
  }

  function studyAbroadHtml() {
    var list = SITE.studyAbroad || [];
    if (!list.length) return "";
    return (
      '<h3 class="sub-heading">Study Abroad</h3><ul class="edu-list">' +
      list
        .map(function (e) {
          return (
            '<li class="edu-item"><p class="edu-school">' +
            esc(e.school) +
            '</p><p class="edu-degree">' +
            esc(e.program) +
            '</p><p class="edu-meta">' +
            esc(e.dates) +
            (e.location ? " " + UI.sep() + " " + esc(e.location) : "") +
            "</p>" +
            (e.details ? '<p class="edu-meta">' + esc(e.details) + "</p>" : "") +
            "</li>"
          );
        })
        .join("") +
      "</ul>"
    );
  }

  function courseName(i) {
    var name = typeof i === "string" ? i : i.name;
    var prog = typeof i === "string" ? false : i.inProgress;
    return esc(name) + (prog ? ' <span class="skill-level">in progress</span>' : "");
  }

  function courseGroup(g) {
    return (
      '<div class="honor-group"><p class="honor-title">' +
      esc(g.title) +
      '</p><ul class="honor-list course-list">' +
      g.items
        .map(function (i) {
          return "<li>" + courseName(i) + "</li>";
        })
        .join("") +
      "</ul></div>"
    );
  }

  function coursework() {
    var groups = SITE.coursework || [];
    if (!groups.length) return "";
    var head = '<h3 class="sub-heading sub-heading--spaced">Relevant Coursework</h3>';
    var n = SITE.settings.courseworkPreviewGroups;
    if (n == null || n >= groups.length) return head + groups.map(courseGroup).join("");
    var rest = groups.slice(n);
    var more = rest.reduce(function (sum, g) {
      return sum + g.items.length;
    }, 0);
    var showLabel = "Show " + more + " more course" + (more === 1 ? "" : "s");
    return (
      head +
      groups.slice(0, n).map(courseGroup).join("") +
      '<div class="course-rest" id="course-rest" hidden>' +
      rest.map(courseGroup).join("") +
      "</div>" +
      '<button type="button" class="honor-toggle more-toggle" aria-expanded="false" aria-controls="course-rest"' +
      ' data-show="' +
      esc(showLabel) +
      '" data-hide="Show fewer courses">' +
      esc(showLabel) +
      "</button>"
    );
  }

  function renderAbout() {
    var p = SITE.person;
    var bio = p.longBio
      .map(function (para) {
        return "<p>" + esc(para) + "</p>";
      })
      .join("");

    var edu = (SITE.education || [])
      .map(function (e) {
        return (
          '<li class="edu-item"><p class="edu-school">' +
          esc(e.school) +
          '</p><p class="edu-degree">' +
          esc(e.degree) +
          '</p><p class="edu-meta">' +
          esc(e.dates) +
          (e.details ? " " + UI.sep() + " " + esc(e.details) : "") +
          "</p></li>"
        );
      })
      .join("");


    fillSection(
      "about",
      "About",
      '<div class="about-grid">' +
        '<div class="prose">' +
        bio +
        UI.Stats(SITE.outputSummary) +
        "</div>" +
        '<div class="about-aside">' +
        '<h3 class="sub-heading">Education</h3><ul class="edu-list">' +
        edu +
        "</ul>" +
        studyAbroadHtml() +
        coursework() +
        "</div>" +
        "</div>"
    );
  }

  function renderResearch() {
    var groups = [
      { key: "doctoral", label: "Doctoral research" },
      { key: "prior", label: "Prior research" },
    ];
    var body = groups
      .map(function (g) {
        var items = SITE.projects.filter(function (p) {
          return p.group === g.key;
        });
        if (!items.length) return "";
        return (
          '<div class="project-group"><h3 class="sub-heading">' +
          esc(g.label) +
          "</h3>" +
          items.map(UI.ProjectCard).join("") +
          "</div>"
        );
      })
      .join("");
    fillSection("research", "Research", body);
  }

  function renderPublications() {
    var list = visiblePublications().map(function (p) {
      return UI.PublicationItem(p);
    });
    var pending = (SITE.publications || []).filter(function (p) {
      return p.placeholder;
    });
    var scholar = SITE.person.links.scholar;
    var intro =
      '<p class="section-intro">Journal articles and conference proceedings.' +
      (scholar ? " Full list on " + UI.ExternalLink({ href: scholar, label: "Google Scholar" }) + "." : "") +
      "</p>";
    var note =
      pending.length && UI.showPlaceholders()
        ? '<p class="list-note">' +
          UI.Placeholder(pending.length + " conference proceeding: full citation to add (hidden until filled in)") +
          "</p>"
        : "";
    fillSection("publications", "Publications", intro + '<ol class="pub-list" reversed>' + list.join("") + "</ol>" + note);
  }

  function renderPresentations() {
    var real = realPresentations();
    var pending = (SITE.presentations || []).filter(function (p) {
      return p.placeholder;
    });
    var items = real.concat(pending).map(function (p) {
      return UI.PresentationItem(p);
    });
    var intro = '<p class="section-intro">International conference presentations.</p>';
    var more = (SITE.otherPresentations || []).length
      ? '<p class="list-note"><a class="more-link" href="cv.html#cv-presentations">Full list of presentations on my CV <span class="arrow" aria-hidden="true">→</span></a></p>'
      : "";
    fillSection("presentations", "Presentations", intro + '<ul class="pres-list">' + items.join("") + "</ul>" + more);
  }

  function renderHonors() {
    var groups = SITE.honors || [];
    if (!groups.length) return;
    var body = groups
      .map(function (g) {
        var rows = g.items
          .map(function (h) {
            var links = [];
            if (h.article) links.push(UI.ExternalLink({ href: h.article, label: "Read article", className: "more-link" }));
            if (h.project && UI.projectById(h.project)) {
              links.push(
                '<a class="more-link" href="' +
                  UI.projectUrl(h.project) +
                  '">Related research<span class="visually-hidden">: ' +
                  esc(UI.projectById(h.project).title) +
                  '</span> <span class="arrow" aria-hidden="true">→</span></a>'
              );
            }
            return (
              '<article class="honor-row">' +
              '<p class="honor-date">' +
              esc(h.date) +
              "</p>" +
              '<div class="honor-body">' +
              '<h4 class="honor-name">' +
              esc(h.name) +
              (h.org ? ' <span class="honor-org">' + UI.sep() + " " + esc(h.org) + "</span>" : "") +
              "</h4>" +
              (h.description ? '<p class="honor-desc">' + esc(h.description) + "</p>" : "") +
              (links.length ? '<p class="project-links honor-links">' + links.join("") + "</p>" : "") +
              "</div></article>"
            );
          })
          .join("");
        if (g.collapsed) {
          return (
            '<details class="project-group honor-more">' +
            '<summary class="honor-toggle">' +
            '<span class="when-closed">Show ' +
            esc(g.title.charAt(0).toLowerCase() + g.title.slice(1)) +
            " (" +
            g.items.length +
            ")</span>" +
            '<span class="when-open">Hide ' +
            esc(g.title.charAt(0).toLowerCase() + g.title.slice(1)) +
            "</span></summary>" +
            '<h3 class="sub-heading">' +
            esc(g.title) +
            "</h3>" +
            rows +
            "</details>"
          );
        }
        return '<div class="project-group"><h3 class="sub-heading">' + esc(g.title) + "</h3>" + rows + "</div>";
      })
      .join("");
    fillSection("honors", "Honors", body);
  }

  function renderFeatured() {
    var list = SITE.featured || [];
    if (!list.length) return;
    var body =
      '<ul class="featured-grid">' +
      list
        .map(function (a) {
          return (
            '<li class="featured-card' + (a.image ? " featured-card--image" : "") + '">' +
            '<a class="featured-link" href="' +
            esc(a.url) +
            '" target="_blank" rel="noopener noreferrer">' +
            (a.image
              ? '<span class="featured-thumb"><img src="' + esc(a.image) + '" alt="" loading="lazy"' + (a.imagePosition ? ' style="object-position: ' + esc(a.imagePosition) + '"' : "") + '></span>'
              : "") +
            '<span class="featured-text">' +
            '<p class="featured-outlet">' +
            esc(a.outlet) +
            '</p><p class="featured-title">' +
            esc(a.title) +
            "</p>" +
            (a.summary ? '<p class="featured-summary">' + esc(a.summary) + "</p>" : "") +
            '<p class="featured-foot"><span class="featured-date">' +
            esc(a.date) +
            '</span><span class="featured-read">Read article <span aria-hidden="true">↗</span></span></p>' +
            "</span>" +
            '<span class="visually-hidden"> (opens in a new tab)</span>' +
            "</a></li>"
          );
        })
        .join("") +
      "</ul>";
    fillSection("featured", "Featured", body);
  }

  function renderSkills() {
    var body =
      '<div class="skills-grid">' +
      SITE.skills
        .map(function (g) {
          return (
            '<div class="skill-group"><h3 class="sub-heading">' +
            esc(g.title) +
            '</h3><ul class="skill-list">' +
            g.items
              .map(function (i) {
                var name = typeof i === "string" ? i : i.name;
                var level = typeof i === "string" ? null : i.level;
                return (
                  "<li>" + esc(name) + (level ? ' <span class="skill-level">' + esc(level) + "</span>" : "") + "</li>"
                );
              })
              .join("") +
            "</ul></div>"
          );
        })
        .join("") +
      "</div>";
    fillSection("skills", "Skills", body);
  }

  function leadItem(item) {
    return (
      '<article class="honor-row">' +
      '<p class="honor-date">' +
      esc(item.dates) +
      "</p>" +
      '<div class="honor-body">' +
      '<h4 class="honor-name">' +
      esc(item.title) +
      (item.organization ? ' <span class="honor-org">' + UI.sep() + " " + esc(item.organization) + "</span>" : "") +
      "</h4>" +
      (item.description ? '<p class="honor-desc">' + esc(item.description) + "</p>" : "") +
      (item.article
        ? '<p class="project-links honor-links">' + UI.ExternalLink({ href: item.article, label: "Read article", className: "more-link" }) + "</p>"
        : "") +
      "</div></article>"
    );
  }

  function renderLeadership() {
    var body = (SITE.leadership || [])
      .map(function (g) {
        return (
          '<div class="project-group"><h3 class="sub-heading">' +
          esc(g.title) +
          "</h3>" +
          g.items.map(leadItem).join("") +
          "</div>"
        );
      })
      .join("");
    fillSection("leadership", "Leadership & Activities", body);
  }

  function renderCvSection() {
    var cv = SITE.person.links.cv;
    var body =
      '<p class="section-intro">' +
      (cv ? "Download a PDF of my resume, or view a printable web version of my CV." : "A printable web version of my CV is available below.") +
      "</p>" +
      '<div class="cv-actions">' +
      UI.Button({
        href: cv,
        label: "Download Resume (PDF)",
        primary: true,
        newTab: true,
        hint: "Placeholder: put your PDF in files/ and set links.cv in content.js",
      }) +
      '<a class="btn" href="cv.html">Printable CV</a>' +
      "</div>";
    fillSection("cv", "CV", body);
  }

  /* ------------------------------------------------------------------
     Project detail page
     ------------------------------------------------------------------ */
  function detailBlock(title, content) {
    if (!content) return "";
    var id = "d-" + title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    return (
      '<section class="detail-section section-inner reveal" aria-labelledby="' +
      id +
      '">' +
      '<div class="section-heading"><h2 id="' +
      id +
      '">' +
      esc(title) +
      "</h2></div>" +
      '<div class="detail-content">' +
      content +
      "</div></section>"
    );
  }

  /* Caption: bold "Figure N: title", then text. **x** = bold, χ_para = subscript. */
  function captionHtml(text) {
    return esc(text)
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/χ_([a-z]+)/g, "χ<sub>$1</sub>")
      .replace(/\b(in vitro|in vivo|ex vivo)\b/gi, "<em>$1</em>");
  }

  // On the page: just the bold "Figure N: title". The full caption appears when enlarged.
  function figureCaption(f, i) {
    if (!f.captionTitle && !f.caption) return "";
    var title = "Figure " + (i + 1) + (f.captionTitle ? ": " + f.captionTitle : ":");
    var full = "<strong>" + captionHtml(title) + "</strong>" + (f.caption ? " " + captionHtml(f.caption) : "");
    return (
      '<figcaption><strong>' +
      captionHtml(title) +
      "</strong>" +
      '<template class="caption-full">' +
      full +
      "</template>" +
      "</figcaption>"
    );
  }

  function renderProjectPage() {
    var root = document.getElementById("project-root");
    var id = new URLSearchParams(window.location.search).get("id");
    var p = UI.projectById(id);
    var back = '<p><a class="back-link" href="index.html#research"><span aria-hidden="true">←</span> All research</a></p>';

    if (!p) {
      root.innerHTML =
        '<div class="container detail-header">' +
        back +
        '<h1 class="detail-title">Project not found</h1><p>This project does not exist. Return to the research list to choose another.</p></div>';
      return;
    }

    document.title = p.title + " | Reese Dunne";
    var ph = UI.Placeholder;

    var pubs = visiblePublications().filter(function (x) {
      return x.project === p.id;
    });
    var pres = realPresentations().filter(function (x) {
      return x.project === p.id;
    });

    var studies = (p.studies || [])
      .map(function (s) {
        return '<div class="study"><h3 class="study-title">' + esc(s.name) + "</h3>" + UI.Bullets(s.items) + "</div>";
      })
      .join("");

    var figures = (p.figures || []).length
      ? '<div class="figures">' +
        p.figures
          .map(function (f, i) {
            return (
              '<figure class="figure">' +
              '<button type="button" class="figure-zoom" data-index="' +
              i +
              '" aria-label="Enlarge figure ' +
              (i + 1) +
              '">' +
              '<img src="' +
              esc(f.src) +
              '" alt="' +
              esc(f.alt || "") +
              '" loading="lazy">' +
              "</button>" +
              figureCaption(f, i) +
              "</figure>"
            );
          })
          .join("") +
        "</div>" +
        '<p class="figures-hint">Click a figure to enlarge</p>' +
        (p.figureCredit
          ? '<p class="figures-credit">' +
            (p.figureCredit.url
              ? UI.ExternalLink({ href: p.figureCredit.url, label: p.figureCredit.text })
              : esc(p.figureCredit.text)) +
            "</p>"
          : "")
      : ph("Figures: add images to images/projects/" + p.id + "/ and list them under figures in content.js");

    var links = (p.links || []).length
      ? '<ul class="link-list">' +
        p.links
          .map(function (l) {
            return "<li>" + UI.LinkOrPlaceholder(l.url, l.label) + "</li>";
          })
          .join("") +
        "</ul>"
      : "";

    var blocks = [
      detailBlock("Overview", '<p class="lead">' + UI.sci(p.description) + "</p>"),
      detailBlock("Research question", p.researchQuestion ? "<p>" + UI.sci(p.researchQuestion) + "</p>" : ph("Research question")),
      detailBlock("Key numbers", UI.Stats(p.stats)),
      detailBlock("Studies", studies),
      (p.contributions || []).length
        ? detailBlock("My contributions", UI.Bullets(p.contributions))
        : detailBlock("Highlights", UI.Bullets(p.highlights)),
      detailBlock("Key findings", (p.keyFindings || []).length ? UI.Bullets(p.keyFindings) : ph("Key findings")),
      detailBlock(p.datasetLabel || "Study cohort", p.dataset ? "<p>" + UI.sci(p.dataset) + "</p>" : ph(p.datasetLabel || "Study cohort")),
      detailBlock("Methods", UI.Tags(p.methods)),
      detailBlock("Figures", figures),
      detailBlock(
        "Publications",
        (pubs.length
          ? '<ol class="pub-list">' +
            pubs
              .map(function (x) {
                return UI.PublicationItem(x, { showProject: false });
              })
              .join("") +
            "</ol>"
          : "") +
          (p.manuscriptStatus ? '<p class="manuscript-status">' + esc(p.manuscriptStatus) + "</p>" : "")
      ),
      detailBlock(
        "Presentations",
        pres.length
          ? '<ul class="pres-list">' +
              pres
                .map(function (x) {
                  return UI.PresentationItem(x, { showProject: false });
                })
                .join("") +
              "</ul>"
          : ""
      ),
      detailBlock("Links", links),
    ].join("");

    root.innerHTML =
      '<div class="container">' +
      '<header class="detail-header">' +
      back +
      '<p class="project-meta"><span class="dates">' +
      esc(p.dates) +
      "</span> " +
      UI.sep() +
      " " +
      esc(p.institution) +
      "</p>" +
      '<h1 class="detail-title">' +
      esc(p.title) +
      "</h1>" +
      (p.status ? '<p class="project-status">' + esc(p.status) + "</p>" : "") +
      '<p class="project-sub">' +
      esc(p.role) +
      (p.advisor ? " " + UI.sep() + " Advisor: " + esc(p.advisor) : "") +
      "</p>" +
      UI.Tags(p.tags, 4) +
      "</header>" +
      blocks +
      "</div>";
  }

  /* ------------------------------------------------------------------
     Printable CV page
     ------------------------------------------------------------------ */
  function cvEntry(title, date, sub, desc) {
    return (
      '<div class="cv-entry">' +
      '<p class="cv-entry-title">' +
      title +
      "</p>" +
      '<p class="cv-entry-date">' +
      (date || "") +
      "</p>" +
      (sub ? '<p class="cv-entry-sub">' + sub + "</p>" : "") +
      (desc ? '<p class="cv-entry-desc">' + desc + "</p>" : "") +
      "</div>"
    );
  }

  function cvSection(title, body) {
    return '<section class="cv-section"><h2>' + esc(title) + "</h2>" + body + "</section>";
  }

  function renderCvPage() {
    var root = document.getElementById("cv-root");
    var p = SITE.person;
    var l = p.links;
    var linkedinLabel = l.linkedin ? l.linkedin.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "") : "";
    var contact = [
      UI.ExternalLink({ href: "mailto:" + p.email, label: p.email }),
      l.linkedin ? UI.ExternalLink({ href: l.linkedin, label: linkedinLabel, icon: false }) : "",
      UI.LinkOrPlaceholder(l.scholar, "Google Scholar", "Google Scholar URL"),
    ]
      .filter(Boolean)
      .join(" " + UI.sep() + " ");

    var education = SITE.education
      .map(function (e) {
        return cvEntry(esc(e.school), esc(e.dates), esc(e.degree) + (e.details ? " " + UI.sep() + " " + esc(e.details) : ""));
      })
      .join("");

    var honors = SITE.honors
      .map(function (g) {
        return (
          '<h3 class="cv-subhead">' +
          esc(g.title.replace(/(^|\s)([a-z])/g, function (m, s, c) { return s + c.toUpperCase(); })) +
          "</h3>" +
          g.items
            .map(function (h) {
              return cvEntry(esc(h.name), esc(h.date), esc(h.org), h.description ? esc(h.description) : "");
            })
            .join("")
        );
      })
      .join("");

    var researchGroups = [
      { key: "doctoral", label: "Doctoral Research" },
      { key: "prior", label: "Prior Research" },
    ];
    var research = researchGroups
      .map(function (g) {
        var items = SITE.projects.filter(function (pr) {
          return pr.group === g.key;
        });
        if (!items.length) return "";
        return (
          '<h3 class="cv-subhead">' +
          g.label +
          "</h3>" +
          items
            .map(function (pr) {
              return cvEntry(
                esc(pr.title),
                esc(pr.dates),
                esc(pr.role) + " " + UI.sep() + " " + esc(pr.institution) + (pr.advisor ? " " + UI.sep() + " Advisor: " + esc(pr.advisor) : ""),
                esc(pr.description)
              );
            })
            .join("")
        );
      })
      .join("");

    var pubs =
      '<ol class="cv-pubs">' +
      visiblePublications()
        .map(function (x) {
          var authors = UI.formatAuthors(String(x.authors).replace(/\.?\s*$/, "."));
          return (
            "<li>" + authors + " " + esc(x.title) + ". <em>" + esc(x.venue) + "</em>, " + esc(x.year) + "." +
            (x.doi ? " doi:" + esc(x.doi) : "") +
            "</li>"
          );
        })
        .join("") +
      "</ol>";

    var pres =
      '<ul class="cv-list">' +
      realPresentations()
        .map(function (x) {
          var label = x.title ? esc(x.title) : UI.Placeholder("Title");
          // CV style: more than 3 authors becomes "First Author et al."
          var names = x.authors ? String(x.authors).split(/\s*,\s*/) : [];
          var short = names.length > 3 ? names[0] + " et al." : names.join(", ");
          var authors = short ? UI.formatAuthors(short.replace(/\.?\s*$/, ".")) + " " : "";
          return (
            "<li>" +
            authors +
            label +
            ". " +
            esc(x.conferenceFull || x.conference) +
            (x.conferenceFull && x.conferenceFull !== x.conference ? " (" + esc(x.conference) + ")" : "") +
            (x.year ? " " + esc(x.year) : " " + UI.Placeholder("Year")) +
            (x.location ? ", " + esc(x.location) : "") +
            (x.type ? ". " + esc(x.type) : "") +
            "." +
            "</li>"
          );
        })
        .join("") +
      "</ul>";

    var skills =
      '<ul class="cv-list">' +
      SITE.skills
        .map(function (g) {
          return (
            "<li><strong>" +
            esc(g.title) +
            ":</strong> " +
            g.items
              .map(function (i) {
                return typeof i === "string" ? esc(i) : esc(i.name) + (i.level ? " (" + esc(i.level) + ")" : "");
              })
              .join(", ") +
            "</li>"
          );
        })
        .join("") +
      "</ul>";

    var leadership = SITE.leadership
      .map(function (g) {
        return (
          '<h3 class="cv-subhead">' +
          esc(g.title) +
          "</h3>" +
          g.items
            .map(function (x) {
              return cvEntry(esc(x.title), esc(x.dates), x.organization ? esc(x.organization) : "", x.description ? esc(x.description) : "");
            })
            .join("")
        );
      })
      .join("");

    root.innerHTML =
      '<div class="cv-doc">' +
      '<div class="cv-toolbar"><a class="btn" href="index.html"><span aria-hidden="true">←</span> Back to site</a>' +
      '<button class="btn btn--primary" type="button" id="print-btn">Print / Save as PDF</button></div>' +
      '<header class="cv-head"><h1 class="cv-name">' +
      esc(p.name) +
      '</h1><p class="cv-position">' +
      esc(p.position) +
      '</p><p class="cv-contact">' +
      contact +
      "</p></header>" +
      cvSection("Education", education) +
      ((SITE.studyAbroad || []).length
        ? cvSection(
            "Study Abroad",
            SITE.studyAbroad
              .map(function (e) {
                return cvEntry(
                  esc(e.school),
                  esc(e.dates),
                  esc(e.program) + (e.location ? " " + UI.sep() + " " + esc(e.location) : ""),
                  e.details ? esc(e.details) : ""
                );
              })
              .join("")
          )
        : "") +
      cvSection("Skills", skills) +
      ((SITE.coursework || []).length
        ? cvSection(
            "Relevant Coursework",
            '<ul class="cv-list">' +
              SITE.coursework
                .map(function (g) {
                  return "<li><strong>" + esc(g.title) + ":</strong> " + g.items.map(function (i) { return typeof i === "string" ? esc(i) : esc(i.name) + (i.inProgress ? " (in progress)" : ""); }).join("; ") + "</li>";
                })
                .join("") +
              "</ul>"
          )
        : "") +
      cvSection("Research Experience", research) +
      cvSection("Publications", pubs) +
      '<section class="cv-section" id="cv-presentations"><h2>Presentations</h2>' +
      '<h3 class="cv-subhead">International Conference Presentations</h3>' +
      pres +
      ((SITE.otherPresentations || []).length
        ? '<h3 class="cv-subhead">Regional &amp; University Presentations</h3><ul class="cv-list">' +
          SITE.otherPresentations
            .map(function (x) {
              var authors = esc(x.authors).replace(/^Dunne R\b/, "<strong>Dunne R</strong>");
              return (
                "<li>" + authors + ". “" + esc(x.title) + ".” " + esc(x.type) + ", " + esc(x.venue) + ", " +
                esc(x.location) + ", " + esc(x.date) + ".</li>"
              );
            })
            .join("") +
          "</ul>"
        : "") +
      "</section>" +
      cvSection("Honors & Fellowships", honors) +
      cvSection("Leadership & Activities", leadership) +
      "</div>";

    document.getElementById("print-btn").addEventListener("click", function () {
      window.print();
    });
  }

  /* ------------------------------------------------------------------
     Interactions
     ------------------------------------------------------------------ */
  function initNavToggle() {
    var header = document.getElementById("site-header");
    if (!header) return;
    var btn = header.querySelector(".nav-toggle");
    if (!btn) return;
    function set(open) {
      header.setAttribute("data-open", open ? "true" : "false");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.textContent = open ? "Close" : "Menu";
    }
    btn.addEventListener("click", function () {
      set(btn.getAttribute("aria-expanded") !== "true");
    });
    header.querySelectorAll(".site-nav a").forEach(function (a) {
      a.addEventListener("click", function () {
        set(false);
      });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") set(false);
    });
  }

  function initActiveNav() {
    if (page !== "home" || !("IntersectionObserver" in window)) return;
    var links = {};
    document.querySelectorAll("[data-nav]").forEach(function (a) {
      links[a.getAttribute("data-nav")] = a;
    });
    function setActive(id) {
      Object.keys(links).forEach(function (k) {
        links[k].classList.toggle("is-active", k === id);
      });
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-35% 0px -60% 0px" }
    );
    ["hero"].concat(NAV.map(function (n) { return n[0]; })).forEach(function (id) {
      var s = document.getElementById(id);
      if (s) io.observe(s);
    });
    // The last section is too short to reach the trigger line, so mark it at the bottom of the page.
    window.addEventListener(
      "scroll",
      function () {
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
          setActive(NAV[NAV.length - 1][0]);
        }
      },
      { passive: true }
    );
  }

  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!document.documentElement.classList.contains("motion")) return;
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach(function (el) {
      // Content already on screen when the page opens appears right away.
      if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
        el.classList.add("is-visible");
        return;
      }
      io.observe(el);
    });
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).catch(function () {
        return legacyCopy(text);
      });
    }
    return legacyCopy(text);
  }

  function legacyCopy(text) {
    return new Promise(function (resolve, reject) {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy") ? resolve() : reject();
      } catch (err) {
        reject(err);
      }
      document.body.removeChild(ta);
    });
  }

  // "Show more / Show fewer" buttons that reveal a hidden block (e.g. coursework)
  function initMoreToggles() {
    document.addEventListener("click", function (e) {
      var btn = e.target.closest(".more-toggle");
      if (!btn) return;
      var target = document.getElementById(btn.getAttribute("aria-controls"));
      if (!target) return;
      var open = btn.getAttribute("aria-expanded") !== "true";
      target.hidden = !open;
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.textContent = open ? btn.getAttribute("data-hide") : btn.getAttribute("data-show");
    });
  }

  function initCopyButtons() {
    document.addEventListener("click", function (e) {
      var btn = e.target.closest && e.target.closest(".copy-btn");
      if (!btn) return;
      var original = "Copy citation";
      copyText(btn.getAttribute("data-cite")).then(
        function () {
          btn.textContent = "Copied";
          setTimeout(function () {
            btn.textContent = original;
          }, 1800);
        },
        function () {
          // Clipboard blocked: show the citation selected so it can be copied by hand.
          var shown = btn.parentNode.querySelector(".cite-text");
          if (!shown) {
            shown = document.createElement("span");
            shown.className = "cite-text";
            shown.textContent = btn.getAttribute("data-cite");
            btn.parentNode.appendChild(shown);
          }
          var range = document.createRange();
          range.selectNodeContents(shown);
          var sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
          btn.textContent = "Press ⌘C / Ctrl+C to copy";
          setTimeout(function () {
            btn.textContent = original;
          }, 3000);
        }
      );
    });
  }

  /* Figures: size each one in the row by its shape, and enlarge on click. */
  function initFigures() {
    var row = document.querySelector(".figures");
    if (!row) return;
    var buttons = Array.prototype.slice.call(row.querySelectorAll(".figure-zoom"));

    // Same height across the row: each figure gets width in proportion to its aspect ratio.
    buttons.forEach(function (btn) {
      var img = btn.querySelector("img");
      img.loading = "eager";
      function size() {
        if (img.naturalWidth) btn.parentNode.style.flexGrow = (img.naturalWidth / img.naturalHeight).toFixed(3);
      }
      if (img.complete) size();
      else img.addEventListener("load", size);
    });

    var box = document.createElement("dialog");
    box.className = "lightbox";
    box.setAttribute("aria-label", "Enlarged figure");
    box.innerHTML =
      '<button type="button" class="lightbox-close" aria-label="Close">Close <span aria-hidden="true">×</span></button>' +
      '<button type="button" class="lightbox-nav lightbox-prev" aria-label="Previous figure"><span aria-hidden="true">‹</span></button>' +
      '<figure class="lightbox-figure"><img alt=""><figcaption></figcaption></figure>' +
      '<button type="button" class="lightbox-nav lightbox-next" aria-label="Next figure"><span aria-hidden="true">›</span></button>';
    document.body.appendChild(box);

    var bigImg = box.querySelector("img");
    var bigCap = box.querySelector("figcaption");
    var current = 0;

    function show(i) {
      current = (i + buttons.length) % buttons.length;
      var src = buttons[current].querySelector("img");
      var cap = buttons[current].parentNode.querySelector("figcaption");
      bigImg.src = src.getAttribute("src");
      bigImg.alt = src.getAttribute("alt");
      var full = cap ? cap.querySelector(".caption-full") : null;
      bigCap.innerHTML = full ? full.innerHTML : cap ? cap.innerHTML : "";
      bigCap.hidden = !cap;
    }

    buttons.forEach(function (btn, i) {
      btn.addEventListener("click", function () {
        show(i);
        box.showModal();
      });
    });

    var multi = buttons.length > 1;
    box.querySelectorAll(".lightbox-nav").forEach(function (n) {
      n.hidden = !multi;
    });
    box.querySelector(".lightbox-prev").addEventListener("click", function () { show(current - 1); });
    box.querySelector(".lightbox-next").addEventListener("click", function () { show(current + 1); });
    box.querySelector(".lightbox-close").addEventListener("click", function () { box.close(); });
    // Click on the dark background (not the image or buttons) closes it.
    box.addEventListener("click", function (e) {
      if (e.target === box || e.target.classList.contains("lightbox-figure")) box.close();
    });
    box.addEventListener("keydown", function (e) {
      if (!multi) return;
      if (e.key === "ArrowRight") show(current + 1);
      if (e.key === "ArrowLeft") show(current - 1);
    });
  }

  /* When previewing a layout via ?style=..., keep it while clicking around. */
  function initStylePreview() {
    var style = new URLSearchParams(window.location.search).get("style");
    if (!STYLES[style]) return;
    document.querySelectorAll("a[href]").forEach(function (a) {
      var h = a.getAttribute("href");
      if (!h || h.charAt(0) === "#" || /^(https?:|mailto:)/i.test(h) || !/\.html(\?|#|$)/.test(h)) return;
      var u = new URL(h, window.location.href);
      u.searchParams.set("style", style);
      a.setAttribute("href", u.href);
    });
    var badge = document.createElement("div");
    badge.className = "preview-badge";
    badge.innerHTML =
      "<span>Previewing <strong>" + STYLES[style] + '</strong> layout</span><a href="design-options.html">All options</a>';
    document.body.appendChild(badge);
  }

  /* ------------------------------------------------------------------ */
  renderHeader();
  if (page === "home") {
    renderHero();
    renderAbout();
    renderResearch();
    renderPublications();
    renderPresentations();
    renderHonors();
    renderFeatured();
    renderSkills();
    renderLeadership();
    renderCvSection();
  } else if (page === "project") {
    renderProjectPage();
  } else if (page === "cv") {
    renderCvPage();
  }
  renderFooter();

  initNavToggle();
  initActiveNav();
  initReveal();
  initCopyButtons();
  initMoreToggles();
  initFigures();
  initStylePreview();

  if (window.location.hash) {
    var target = document.getElementById(window.location.hash.slice(1));
    if (target) target.scrollIntoView();
  }
})();
