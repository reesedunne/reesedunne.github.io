/* =====================================================================
   "Story" homepage: the research told as a sequence of chapters.
   All facts come from content.js; the chapter framing lives in STORY below.
   ===================================================================== */
(function () {
  "use strict";

  var SITE = window.SITE;
  var UI = window.UI;
  var esc = UI.esc;
  var sci = UI.sci;
  var P = SITE.person;

  /* Chapter framing for the research section. Projects are referenced by id. */
  var STORY = {
    chapters: [
      {
        id: "chemistry",
        kicker: "Chemistry",
        question: "Can an MRI scanner see iron building up in a brain with Alzheimer’s disease?",
        body:
          "Iron is invisible to the eye but not to the magnet. With ultra-high-field 7T MRI and source-separated quantitative susceptibility mapping, I measure iron- and myelin-sensitive signals in the memory- and smell-related regions of the brain, and test how they change from healthy aging to mild cognitive impairment and Alzheimer’s disease.",
        projects: ["alzheimers-7t", "alzheimers-petmr"],
        stats: [
          { value: "7T", label: "ultra-high-field MRI" },
          { value: "66", label: "participants at 3T PET-MR" },
          { value: "5", label: "clinical and amyloid-biomarker groups" },
        ],
        finding: { project: "alzheimers-7t", index: 0 },
      },
      {
        id: "change",
        kicker: "Change",
        question: "What do years of head impacts do to a young athlete’s brain?",
        body:
          "Following collegiate football and volleyball athletes for up to four years, I model how iron-, myelin-, and microstructure-related MRI measures change over time, and how those trajectories relate to impact exposure, position, and concussion history.",
        projects: ["head-impacts"],
        stats: [
          { value: "74", label: "collegiate athletes" },
          { value: "262", label: "MRI examinations" },
          { value: "4 yrs", label: "of longitudinal follow-up" },
        ],
        badge: "Oral presentation · ISMRM 2026 · Cape Town",
      },
      {
        id: "mechanics",
        kicker: "Mechanics",
        question: "How does brain tissue behave when it is pushed, pulled, and sheared?",
        body:
          "Imaging shows what tissue is made of; mechanics shows how it responds to force. In Stanford’s Living Matter Laboratory, I initiated and lead rheological testing of fresh human brain tissue under compression, tension, shear, stress relaxation, and cyclic loading, building on my first-author study of plant-based and animal meats.",
        projects: ["brain-tissue", "meat-mechanics"],
        stats: [
          { value: "157", label: "tension, compression, and shear tests" },
          { value: "8", label: "meat products characterized" },
          { value: "10", label: "mechanical properties quantified" },
        ],
        image: {
          src: "images/featured/meat-article-web.jpg",
          alt: "Plant-based and animal meat samples prepared for mechanical testing",
          caption: "Featured in the Stanford Report, Nov. 2024",
          url: "https://news.stanford.edu/stories/2024/11/can-ai-help-improve-plant-based-meats",
        },
      },
    ],
  };

  var ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

  function $(id) {
    return document.getElementById(id);
  }

  function link(href, html, cls) {
    var web = /^https?:\/\//.test(href);
    return (
      '<a href="' +
      esc(href) +
      '"' +
      (cls ? ' class="' + cls + '"' : "") +
      (web ? ' target="_blank" rel="noopener noreferrer"' : "") +
      ">" +
      html +
      (web ? '<span class="visually-hidden"> (opens in a new tab)</span>' : "") +
      "</a>"
    );
  }

  function kicker(n, label) {
    return (
      '<p class="s-kicker"><span class="s-kicker-n">Chapter ' +
      ROMAN[n] +
      '</span><span class="s-kicker-line" aria-hidden="true"></span>' +
      esc(label) +
      "</p>"
    );
  }

  function startYear(p) {
    var m = String(p.dates || "").match(/(\d{4})/);
    return m ? +m[1] : 0;
  }

  /* ------------------------------------------------------------------ */
  function renderHeader() {
    var nav = [
      ["story", "Story"],
      ["research", "Research"],
      ["publications", "Work"],
      ["honors", "Recognition"],
      ["leadership", "Beyond the lab"],
    ];
    $("s-header").innerHTML =
      '<div class="s-wrap s-header-inner">' +
      '<a class="s-brand" href="#top">Reese Dunne</a>' +
      '<nav aria-label="Primary"><ul class="s-nav">' +
      nav
        .map(function (n) {
          return '<li><a href="#' + n[0] + '">' + n[1] + "</a></li>";
        })
        .join("") +
      '<li><a href="cv.html">CV</a></li>' +
      "</ul></nav>" +
      '<a class="s-btn s-btn-small" href="#contact">Get in touch</a>' +
      "</div>";

    var header = $("s-header");
    var onScroll = function () {
      header.classList.toggle("is-solid", window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function renderHero() {
    $("hero").innerHTML =
      '<div class="s-hero-glow" aria-hidden="true"></div>' +
      '<div class="s-wrap s-hero-grid">' +
      '<div class="s-hero-copy">' +
      '<p class="s-eyebrow">PhD Candidate · Mechanical Engineering · Stanford University</p>' +
      '<h1 class="s-display">I turn MRI signals and tissue mechanics into <em>measurements</em> of brain health.</h1>' +
      '<p class="s-lede">Using ultra-high-field MRI, statistical models, and experimental mechanics, I study how iron, myelin, and microstructure change in Alzheimer’s disease and after repetitive head impacts.</p>' +
      '<div class="s-actions">' +
      '<a class="s-btn" href="#story">Read the story <span aria-hidden="true">↓</span></a>' +
      link(P.links.cv, "Resume", "s-btn s-btn-ghost") +
      "</div>" +
      '<ul class="s-hero-meta">' +
      "<li><span>Labs</span>Zeineh Lab, Radiology · Living Matter Lab, Mechanical Engineering</li>" +
      "<li><span>Fellowships</span>Stanford Graduate Fellowship · NSF GRFP</li>" +
      "</ul>" +
      "</div>" +
      '<figure class="s-portrait">' +
      '<svg class="s-rings" viewBox="0 0 400 400" aria-hidden="true">' +
      [190, 160, 130, 100].map(function (r, i) {
        return '<circle cx="200" cy="200" r="' + r + '" style="opacity:' + (0.1 + i * 0.07) + '"/>';
      }).join("") +
      "</svg>" +
      '<div class="s-portrait-frame"><img src="' +
      esc(P.headshot) +
      '" alt="' +
      esc(P.headshotAlt) +
      '" width="800" height="1120" /></div>' +
      "<figcaption>Radiological Sciences Laboratory<br />Stanford University</figcaption>" +
      "</figure>" +
      "</div>" +
      '<a class="s-scroll-cue" href="#story" aria-label="Scroll to the story"><span></span></a>';
  }

  function renderPrologue() {
    $("story").innerHTML =
      '<div class="s-wrap s-prologue-grid">' +
      '<div class="reveal">' +
      kicker(0, "Why the brain") +
      "</div>" +
      '<div class="s-prologue-body">' +
      '<p class="s-statement reveal">My research began with a person, <em>not a scan.</em></p>' +
      '<div class="s-prose reveal">' +
      "<p>My grandmother had Alzheimer’s disease. In 2016 I founded <strong>Nonnie’s Notes</strong>, a service organization that brings student musical performances to assisted-living and memory-care facilities. It grew to more than 50 volunteers and became a 501(c)(3) nonprofit in 2022.</p>" +
      "<p>Today I approach the same disease as an engineer: through the physics of MRI, the statistics of change over time, and the mechanics of the tissue itself. The chapters below are the questions I’m working on now.</p>" +
      "</div>" +
      "</div>" +
      "</div>";
  }

  function renderChapters() {
    var html = STORY.chapters
      .map(function (c, i) {
        var projects = c.projects.map(UI.projectById).filter(Boolean);
        var finding = "";
        if (c.finding) {
          var fp = UI.projectById(c.finding.project);
          var text = fp && fp.keyFindings && fp.keyFindings[c.finding.index];
          if (text)
            finding =
              '<blockquote class="s-finding"><p class="s-finding-label">Key finding</p><p>' +
              sci(text) +
              "</p></blockquote>";
        }
        var visual = c.image
          ? '<figure class="s-chapter-figure reveal"><img src="' +
            esc(c.image.src) +
            '" alt="' +
            esc(c.image.alt) +
            '" loading="lazy" /><figcaption>' +
            link(c.image.url, esc(c.image.caption) + ' <span aria-hidden="true">↗</span>') +
            "</figcaption></figure>"
          : "";
        return (
          '<article class="s-chapter s-research s-research--' +
          c.id +
          '" id="research-' +
          c.id +
          '">' +
          '<div class="s-wrap">' +
          '<div class="reveal">' +
          kicker(i + 1, c.kicker) +
          "</div>" +
          '<h2 class="s-question reveal">' +
          esc(c.question) +
          "</h2>" +
          '<div class="s-research-grid">' +
          '<div class="s-research-copy reveal">' +
          '<p class="s-body">' +
          esc(c.body) +
          "</p>" +
          (c.badge ? '<p class="s-badge"><span aria-hidden="true">●</span> ' + esc(c.badge) + "</p>" : "") +
          finding +
          '<ul class="s-projects">' +
          projects
            .map(function (p) {
              return (
                "<li>" +
                '<a href="' +
                UI.projectUrl(p.id) +
                '">' +
                '<span class="s-projects-title">' +
                esc(p.title) +
                "</span>" +
                '<span class="s-projects-meta">' +
                esc(p.status || p.manuscriptStatus || p.dates) +
                " · " +
                esc(p.advisor) +
                "</span>" +
                '<span class="s-projects-arrow" aria-hidden="true">→</span>' +
                "</a></li>"
              );
            })
            .join("") +
          "</ul>" +
          "</div>" +
          '<div class="s-research-side">' +
          '<dl class="s-stats reveal">' +
          c.stats
            .map(function (s) {
              return "<div><dt>" + esc(s.value) + "</dt><dd>" + esc(s.label) + "</dd></div>";
            })
            .join("") +
          "</dl>" +
          visual +
          "</div>" +
          "</div>" +
          "</div>" +
          "</article>"
        );
      })
      .join("");
    $("research").innerHTML = html;
  }

  function renderThread() {
    var projects = (SITE.projects || []).slice().sort(function (a, b) {
      return startYear(a) - startYear(b);
    });
    var items = projects.map(function (p) {
      return (
        '<li class="reveal">' +
        '<span class="s-tl-year">' +
        startYear(p) +
        "</span>" +
        '<span class="s-tl-dot" aria-hidden="true"></span>' +
        '<a class="s-tl-card" href="' +
        UI.projectUrl(p.id) +
        '">' +
        '<span class="s-tl-inst">' +
        esc(p.institution) +
        "</span>" +
        '<span class="s-tl-title">' +
        esc(p.title) +
        "</span>" +
        '<span class="s-tl-desc">' +
        sci(p.description) +
        "</span>" +
        "</a></li>"
      );
    });

    $("path").innerHTML =
      '<div class="s-wrap">' +
      '<div class="s-thread-head">' +
      '<div class="reveal">' +
      kicker(4, "The thread") +
      "</div>" +
      '<p class="s-statement reveal">Eight projects, three institutions, <em>one approach.</em></p>' +
      '<p class="s-body s-thread-lede reveal">From photoacoustic simulation at Johns Hopkins to implant modeling at Mississippi State to MRI and tissue mechanics at Stanford, the common thread is building quantitative methods (imaging pipelines, statistical models, and physics-based and machine-learning models) and applying them to biomedical problems.</p>' +
      "</div>" +
      '<ol class="s-timeline">' +
      items.join("") +
      "</ol>" +
      "</div>";
  }

  function renderWork() {
    var pubs = (SITE.publications || []).slice().sort(function (a, b) {
      return b.year - a.year;
    });
    var pres = (SITE.presentations || []).slice().sort(function (a, b) {
      return b.year - a.year;
    });

    $("publications").innerHTML =
      '<div class="s-wrap">' +
      '<div class="reveal">' +
      kicker(5, "On the record") +
      "</div>" +
      '<dl class="s-numbers reveal">' +
      (SITE.outputSummary || [])
        .map(function (s) {
          return "<div><dt>" + esc(s.value) + "</dt><dd>" + esc(s.label) + "</dd></div>";
        })
        .join("") +
      "</dl>" +
      '<div class="s-work-grid">' +
      '<div class="reveal"><h2 class="s-h2">Publications</h2><ol class="s-pubs">' +
      pubs
        .map(function (p) {
          var href = p.doi ? "https://doi.org/" + p.doi : p.url;
          return (
            "<li>" +
            '<span class="s-pubs-year">' +
            p.year +
            "</span>" +
            "<div>" +
            '<p class="s-pubs-title">' +
            (href ? link(href, sci(p.title)) : sci(p.title)) +
            "</p>" +
            '<p class="s-pubs-meta"><em>' +
            esc(p.venue) +
            "</em> · " +
            esc(p.role) +
            "</p>" +
            "</div></li>"
          );
        })
        .join("") +
      "</ol></div>" +
      '<div class="reveal"><h2 class="s-h2">International presentations</h2><ul class="s-talks">' +
      pres
        .map(function (p) {
          return (
            "<li>" +
            '<p class="s-talks-where"><strong>' +
            esc(p.conference) +
            " " +
            p.year +
            "</strong> · " +
            esc(p.location) +
            "</p>" +
            '<p class="s-talks-title">' +
            (p.url ? link(p.url, sci(p.title)) : sci(p.title)) +
            "</p>" +
            '<p class="s-talks-type">' +
            esc(p.type) +
            "</p>" +
            "</li>"
          );
        })
        .join("") +
      "</ul></div>" +
      "</div>" +
      "</div>";
  }

  function renderHonors() {
    var groups = SITE.honors || [];
    var major = groups.filter(function (g) {
      return !g.collapsed;
    });
    var minor = groups.filter(function (g) {
      return g.collapsed;
    });
    $("honors").innerHTML =
      '<div class="s-wrap">' +
      '<div class="reveal">' +
      kicker(6, "Recognition") +
      "</div>" +
      '<p class="s-statement reveal">Supported by the nation’s most competitive <em>fellowships and scholarships.</em></p>' +
      '<div class="s-honors">' +
      major
        .map(function (g) {
          return g.items
            .map(function (h) {
              return (
                '<article class="s-honor reveal">' +
                '<p class="s-honor-date">' +
                esc(h.date) +
                "</p>" +
                '<h3 class="s-honor-name">' +
                (h.article ? link(h.article, esc(h.name)) : esc(h.name)) +
                "</h3>" +
                '<p class="s-honor-desc">' +
                esc(h.description) +
                "</p>" +
                "</article>"
              );
            })
            .join("");
        })
        .join("") +
      "</div>" +
      minor
        .map(function (g) {
          return (
            '<div class="s-honors-minor reveal"><h3>' +
            esc(g.title) +
            "</h3><ul>" +
            g.items
              .map(function (h) {
                return "<li>" + esc(h.name) + " <span>" + esc(h.date) + "</span></li>";
              })
              .join("") +
            "</ul></div>"
          );
        })
        .join("") +
      "</div>";
  }

  function renderBeyond() {
    var groups = SITE.leadership || [];
    $("leadership").innerHTML =
      '<div class="s-wrap">' +
      '<div class="reveal">' +
      kicker(7, "Beyond the lab") +
      "</div>" +
      '<div class="s-beyond-grid">' +
      '<figure class="s-beyond-photo reveal"><img src="images/featured/track-web.jpg" alt="Reese Dunne competing in track and field for Mississippi State" loading="lazy" />' +
      "<figcaption>NCAA Division I track &amp; field, Mississippi State, 2018–2023</figcaption></figure>" +
      '<div class="s-beyond-copy">' +
      '<p class="s-statement reveal">The same discipline, <em>off the clock.</em></p>' +
      groups
        .map(function (g) {
          return (
            '<div class="s-beyond-group reveal"><h3 class="s-h3">' +
            esc(g.title) +
            "</h3><ul>" +
            g.items
              .map(function (it) {
                return (
                  "<li><p class=\"s-beyond-title\">" +
                  esc(it.title) +
                  ' <span class="s-beyond-dates">' +
                  esc(it.dates) +
                  "</span></p>" +
                  '<p class="s-beyond-desc">' +
                  esc(it.description) +
                  "</p></li>"
                );
              })
              .join("") +
            "</ul></div>"
          );
        })
        .join("") +
      "</div>" +
      "</div>" +
      "</div>";
  }

  function renderContact() {
    $("contact").innerHTML =
      '<div class="s-wrap s-contact-inner reveal">' +
      '<p class="s-eyebrow">What’s next</p>' +
      '<h2 class="s-display s-display-sm">Let’s talk about the future of <em>medical imaging.</em></h2>' +
      '<p class="s-lede">I’m particularly interested in bringing quantitative imaging, statistical modeling, and machine learning to medical imaging and health technology.</p>' +
      '<div class="s-actions s-actions-center">' +
      '<a class="s-btn" href="mailto:' +
      esc(P.email) +
      '">' +
      esc(P.email) +
      "</a>" +
      link(P.links.linkedin, "LinkedIn", "s-btn s-btn-ghost") +
      link(P.links.scholar, "Google Scholar", "s-btn s-btn-ghost") +
      link(P.links.cv, "Resume (PDF)", "s-btn s-btn-ghost") +
      "</div>" +
      "</div>";
  }

  function renderFooter() {
    $("s-footer").innerHTML =
      '<div class="s-wrap s-footer-inner">' +
      "<p>© " +
      new Date().getFullYear() +
      " " +
      esc(P.name) +
      " · Stanford University</p>" +
      '<p><a href="#top">Back to top ↑</a></p>' +
      "</div>";
  }

  function initReveal() {
    if (!document.documentElement.classList.contains("motion")) return;
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    document.querySelectorAll(".reveal").forEach(function (el) {
      io.observe(el);
    });
  }

  renderHeader();
  renderHero();
  renderPrologue();
  renderChapters();
  renderThread();
  renderWork();
  renderHonors();
  renderBeyond();
  renderContact();
  renderFooter();
  initReveal();
})();
