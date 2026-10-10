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
        id: "biomarkers",
        kicker: "Biomarkers",
        question: "Can an MRI scanner see iron building up in a brain with Alzheimer’s disease?",
        body: [
          "The brain naturally contains iron, but levels may be abnormally high in Alzheimer’s disease. Using ultra-high-field 7T MRI and an advanced technique called source-separated quantitative susceptibility mapping, I measure iron- and myelin-sensitive signals in the hippocampus, the brain’s memory center, and test how they differ across healthy aging, mild cognitive impairment, and Alzheimer’s disease.",
          "Beyond the hippocampus, I extend this approach to the brain’s smell and memory network in a larger cohort, comparing iron and myelin across the stages of Alzheimer’s disease.",
        ],
        projects: ["alzheimers-7t", "alzheimers-petmr"],
        /* Two studies shown side by side instead of single stats */
        studies: [
          {
            project: "alzheimers-7t",
            name: "7T MRI",
            value: "20",
            unit: "participants",
            rows: [
              ["Regions", "Hippocampal subfields (subiculum, CA1)"],
              ["Groups", "Healthy, MCI, Alzheimer’s"],
              ["Metrics", "R2*, QSM, χ_para, χ_dia"],
            ],
          },
          {
            project: "alzheimers-petmr",
            name: "3T PET-MR",
            value: "66",
            unit: "participants",
            rows: [
              ["Regions", "Smell and memory network (4 regions)"],
              ["Groups", "5 clinical and amyloid-biomarker groups"],
              ["Metrics", "QSM, χ_para, χ_dia"],
            ],
          },
        ],
        stats: [],
      },
      {
        id: "change",
        kicker: "Change",
        question: "What do years of head impacts do to a young athlete’s brain?",
        body:
          "Following collegiate football and volleyball athletes for up to four years, I model how iron-, myelin-, and microstructure-related MRI measures change over time, and how those trajectories relate to impact exposure, position, and concussion history.",
        projects: ["head-impacts"],
        // To add a figure to the right of the card:
        // figure: { src: "images/projects/head-impacts/fig1-web.jpg", alt: "…", caption: "…" },
        studies: [
          {
            project: "head-impacts",
            name: "Longitudinal MRI",
            value: "74",
            unit: "collegiate athletes",
            rows: [
              ["Follow-up", "Up to 4 years, 262 MRI exams"],
              ["Groups", "Football vs. volleyball athletes"],
              ["Metrics", "4 susceptibility + 8 diffusion MRI metrics"],
            ],
          },
        ],
        stats: [],
      },
      {
        id: "mechanics",
        kicker: "Mechanics",
        question: "How do soft tissues, from meat to the human brain, respond to force?",
        body: [
          "Imaging shows what tissue is made of; mechanics shows how it responds to force. In Stanford’s Living Matter Laboratory, I led a first-author study of eight plant-based and animal meats, using texture profile analysis and rheology to set quantitative targets for more realistic plant-based meat. I also ran the 157 mechanical tests behind a collaborative study that used AI to discover each product’s 3D material model.",
          "Now I apply the same toolkit to one of the softest tissues in the body – the brain. I initiated and currently lead rheological testing of fresh human brain tissue to build better models of how the brain deforms.",
        ],
        projects: ["meat-mechanics", "brain-tissue"],
        studies: [
          {
            project: "meat-mechanics",
            name: "Food mechanics",
            status: "Published 2025",
            value: "8",
            unit: "meat products",
            rows: [
              ["Tests", "157 tension, compression & shear tests"],
              ["Published in", "Food Research International (first author) · npj Science of Food"],
              ["Featured in", "Stanford Report, Nov. 2024"],
            ],
          },
          {
            project: "brain-tissue",
            name: "Brain mechanics",
            status: "Ongoing",
            value: "5",
            unit: "loading modes",
            rows: [
              ["Tissue", "Fresh human brain"],
              ["Loading", "Compression, tension, shear, relaxation, cyclic"],
              ["Method", "Rheometry"],
              ["Goal", "Better constitutive models of brain mechanics"],
            ],
          },
        ],
        stats: [],
        image: {
          src: "images/featured/meat-article-web.jpg",
          alt: "Plant-based and animal meat samples prepared for mechanical testing",
          caption: "Featured in the Stanford Report, Nov. 2024",
          url: "https://news.stanford.edu/stories/2024/11/can-ai-help-improve-plant-based-meats",
        },
      },
    ],
  };

  /* Globe: coordinates for each presentation location (must match "location" in content.js) */
  var PLACES = {
    "Cape Town, South Africa": { city: "Cape Town", lat: -33.92, lon: 18.42 },
    "London, United Kingdom": { city: "London", lat: 51.51, lon: -0.13 },
    "Honolulu, Hawaii, USA": { city: "Honolulu", lat: 21.31, lon: -157.86 },
    "Toronto, Canada": { city: "Toronto", lat: 43.65, lon: -79.38 },
    "Zürich, Switzerland": { city: "Zürich", lat: 47.37, lon: 8.54 },
    "San Francisco, California, USA": { city: "San Francisco", lat: 37.77, lon: -122.42 },
  };
  var HOME = { city: "Stanford", lat: 37.43, lon: -122.17 };

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

  /* Start date as a sortable number (year * 12 + month), from e.g. "May 2020 – July 2021" */
  function startDate(p) {
    var m = String(p.dates || "").match(/^\s*([A-Za-z]+)\.?\s+(\d{4})/);
    var months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
    if (!m) return startYear(p) * 12;
    var month = months.indexOf(m[1].slice(0, 3).toLowerCase());
    return +m[2] * 12 + (month < 0 ? 0 : month);
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
      '<h1 class="s-display">I turn MRI signals and tissue mechanics into <em>measurements</em> of the human brain.</h1>' +
      '<p class="s-lede">I combine quantitative MRI, statistical modeling, and experimental mechanics to study the brain: how iron, myelin, and microstructure change in Alzheimer’s disease and after repetitive head impacts, and how its tissue responds\u00a0to\u00a0force.</p>' +
      '<div class="s-actions">' +
      '<a class="s-btn" href="#story">Read my story <span aria-hidden="true">↓</span></a>' +
      link(P.links.cv, "Resume", "s-btn s-btn-ghost") +
      '<a class="s-btn s-btn-ghost" href="cv.html">CV</a>' +
      link(P.links.scholar, "Google Scholar", "s-btn s-btn-ghost") +
      link(P.links.linkedin, "LinkedIn", "s-btn s-btn-ghost") +
      "</div>" +
      '<div class="s-hero-meta">' +
      '<dl class="s-hero-numbers">' +
      (SITE.outputSummary || [])
        .map(function (s) {
          var label = s.label.replace("international conference presentations", "international talks");
          return "<div><dt>" + esc(s.value) + "</dt><dd>" + esc(label) + "</dd></div>";
        })
        .join("") +
      "</dl>" +
      '<ul class="s-hero-honors" aria-label="Selected honors">' +
      ["Stanford Graduate Fellow", "NSF GRFP", "Rhodes Scholarship Finalist", "Goldwater Scholar"]
        .map(function (h) {
          return "<li>" + esc(h) + "</li>";
        })
        .join("") +
      "</ul>" +
      "</div>" +
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
      "<figcaption>Stanford Radiology &amp; Mechanical Engineering</figcaption>" +
      "</figure>" +
      "</div>" +
      '<a class="s-scroll-cue" href="#story" aria-label="Scroll to the story"><span></span></a>';
  }

  function renderPrologue() {
    $("story").innerHTML =
      '<div class="s-wrap s-prologue-grid">' +
      '<div class="s-prologue-side">' +
      '<div class="reveal">' +
      kicker(0, "Why the brain") +
      "</div>" +
      '<figure class="s-clipping reveal">' +
      '<div class="s-clipping-paper"><img src="images/featured/nonnies-notes-clipping-web.jpg" alt="Newspaper clipping headlined Nonnie’s Notes return to Claiborne, with a photo of the student singers performing at an assisted living facility" width="1100" height="1093" loading="lazy" /></div>' +
      "<figcaption>Front page, <em>Starkville Daily News</em>, Dec. 7, 2021. Photo by Cal Brown.</figcaption>" +
      "</figure>" +
      "</div>" +
      '<div class="s-prologue-body">' +
      '<p class="s-statement reveal">My research began <em>with a person</em>, not a scan.</p>' +
      '<div class="s-prose reveal">' +
      "<p>It started with playing the piano for my grandmother, Nonnie, who had Alzheimer’s disease. At 16, I founded <strong>Nonnie’s Notes</strong>, a service organization that brings student musical performances to assisted-living and memory-care facilities. It grew to more than 50 volunteers and became a <span class=\"s-nowrap\">501(c)(3)</span> nonprofit in 2022.</p>" +
      "<p>Today I study the brain as an engineer, using imaging, computation, and experiment to understand how it changes with disease and injury. The chapters below are the questions driving my work now.</p>" +
      "</div>" +
      "</div>" +
      "</div>";
  }

  /* Large clickable card for one study in a chapter */
  function StudyCard(st, n, total) {
    var p = UI.projectById(st.project);
    if (!p) return "";
    var talks = (SITE.presentations || [])
      .filter(function (t) {
        return t.project === p.id;
      })
      .sort(function (a, b) {
        return a.year - b.year;
      })
      .map(function (t) {
        return esc(t.conference) + " " + t.year + (/oral/i.test(t.type) ? " (oral)" : "");
      });
    return (
      '<a class="s-studycard reveal" href="' +
      UI.projectUrl(p.id) +
      '">' +
      '<p class="s-studycard-top"><span class="s-studycard-tag">' +
      (total > 1 ? "Study " + n + " · " : "") +
      esc(st.name) +
      '</span><span class="s-studycard-status">' +
      esc(st.status || p.manuscriptStatus || p.status || p.dates) +
      "</span></p>" +
      '<h3 class="s-studycard-title">' +
      sci(p.title) +
      "</h3>" +
      '<div class="s-studycard-body">' +
      '<p class="s-studycard-n"><span>' +
      esc(st.value) +
      "</span>" +
      esc(st.unit) +
      "</p>" +
      "<dl>" +
      st.rows
        .map(function (r) {
          return "<div><dt>" + esc(r[0]) + "</dt><dd>" + sci(r[1]) + "</dd></div>";
        })
        .join("") +
      (talks.length ? "<div><dt>Presented at</dt><dd>" + talks.join(" · ") + "</dd></div>" : "") +
      "</dl>" +
      "</div>" +
      '<span class="s-studycard-go">Read the study <span aria-hidden="true">→</span></span>' +
      "</a>"
    );
  }

  function renderChapters() {
    var html = STORY.chapters
      .map(function (c, i) {
        var projects = c.projects.map(UI.projectById).filter(Boolean);

        var copy =
          [].concat(c.body)
            .map(function (para) {
              return '<p class="s-body">' + esc(para) + "</p>";
            })
            .join("") +
          (c.badge ? '<p class="s-badge"><span aria-hidden="true">●</span> ' + esc(c.badge) + "</p>" : "");

        var list =
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
          "</ul>";

        // The whole figure (photo and caption) links to the article
        var visual = c.image
          ? '<figure class="s-chapter-figure reveal">' +
            link(
              c.image.url,
              '<span class="s-chapter-figure-img"><img src="' +
                esc(c.image.src) +
                '" alt="' +
                esc(c.image.alt) +
                '" loading="lazy" /></span>' +
                '<span class="s-chapter-figure-cap">' +
                esc(c.image.caption) +
                ' <span aria-hidden="true">↗</span></span>',
              "s-chapter-figure-link"
            ) +
            "</figure>"
          : "";

        var side =
          '<dl class="s-stats reveal">' +
          (c.stats || [])
            .map(function (s) {
              return "<div><dt>" + esc(s.value) + "</dt><dd>" + esc(s.label) + "</dd></div>";
            })
            .join("") +
          "</dl>" +
          visual;

        // Chapters with several studies: text, then one large card per study
        var content = c.studies
          ? (visual ? '<div class="s-studyintro">' : "") +
            '<div class="s-research-copy s-research-copy--wide reveal">' +
            copy +
            "</div>" +
            (visual ? visual + "</div>" : "") +
            '<div class="s-studycards' +
            '">' +
            c.studies
              .map(function (st, k) {
                return StudyCard(st, k + 1, c.studies.length);
              })
              .join("") +
            (c.figure
              ? '<figure class="s-studyfigure reveal"><img src="' +
                esc(c.figure.src) +
                '" alt="' +
                esc(c.figure.alt) +
                '" loading="lazy" />' +
                (c.figure.caption ? "<figcaption>" + sci(c.figure.caption) + "</figcaption>" : "") +
                "</figure>"
              : "") +
            "</div>"
          : '<div class="s-research-grid">' +
            '<div class="s-research-copy reveal">' +
            copy +
            list +
            "</div>" +
            '<div class="s-research-side">' +
            side +
            "</div>" +
            "</div>";

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
          content +
          "</div>" +
          "</article>"
        );
      })
      .join("");
    $("research").innerHTML = html;
  }

  function renderThread() {
    var projects = (SITE.projects || []).slice().sort(function (a, b) {
      return startDate(a) - startDate(b);
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
        sci(p.timelineDescription || p.description) +
        "</span>" +
        (p.thumbnail
          ? '<span class="s-tl-thumb"><img src="' + esc(p.thumbnail) + '" alt="" loading="lazy" /></span>'
          : "") +
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
      '<div class="s-record">' +
      '<div class="s-record-lists">' +
      '<div class="reveal"><h2 class="s-h2">Publications</h2><ol class="s-pubs">' +
      pubs
        .map(function (p, i) {
          var href = p.doi ? "https://doi.org/" + p.doi : p.url;
          return (
            '<li tabindex="0" data-paper="' +
            i +
            '">' +
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
      '<div class="reveal s-talks-wrap"><h2 class="s-h2">International conference presentations</h2><ul class="s-talks">' +
      pres
        .map(function (p) {
          return (
            '<li tabindex="0" data-place="' +
            esc(p.location) +
            '">' +
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
      // Right-hand panel: paper covers (for publications) or the globe (for presentations)
      '<div class="s-stage-col"><div class="s-stage is-papers" id="record-stage" aria-hidden="true">' +
      '<div class="s-papers">' +
      pubs
        .map(function (p, i) {
          return (
            '<div class="s-paper' +
            (i === 0 ? " is-front" : "") +
            '" data-paper="' +
            i +
            '">' +
            (p.cover
              ? '<img src="' + esc(p.cover) + '" alt="" loading="lazy" />'
              : '<div class="s-paper-blank"><p class="s-paper-venue">' +
                esc(p.venue) +
                " · " +
                p.year +
                '</p><p class="s-paper-title">' +
                sci(p.title) +
                '</p><p class="s-paper-authors">' +
                UI.formatAuthors(p.authors) +
                "</p></div>") +
            "</div>"
          );
        })
        .join("") +
      "</div>" +
      '<figure class="s-globe-wrap">' +
      '<div class="s-globe" id="talk-globe"></div>' +
      '<figcaption class="s-globe-label" id="globe-label">Hover a presentation to visit it</figcaption>' +
      "</figure>" +
      "</div></div>" +
      "</div>" +
      "</div>";
  }

  /* Right-hand panel: show the hovered paper's first page, or switch to the globe for presentations */
  function initStage() {
    var stage = $("record-stage");
    if (!stage) return;
    var papers = [].slice.call(stage.querySelectorAll(".s-paper"));
    var n = papers.length;
    // Fan all covers out; the active one comes to the front and the rest shift back by distance
    var lists = document.querySelector(".s-record-lists");
    var current = 0;
    function layout(active) {
      // Where the text column ends, relative to the panel's center (covers past this get see-through)
      var sr = stage.getBoundingClientRect();
      var textRight = lists ? lists.getBoundingClientRect().right : -Infinity;
      var center = sr.left + sr.width / 2;
      papers.forEach(function (el, i) {
        var d = i - active;
        var a = Math.abs(d);
        var front = d === 0;
        var scale = front ? 1 : 1 - a * 0.07;
        var w = el.offsetWidth;
        var h = el.offsetHeight;
        // left-most point of the tilted card (it rotates around its bottom center)
        var tilt = (Math.abs(d) * 2.5 * Math.PI) / 180;
        var cardLeft = center + d * 0.1 * w - (w * scale) / 2 - (d < 0 ? h * scale * Math.sin(tilt) : 0);
        var overText = cardLeft < textRight + 16;
        el.classList.toggle("is-front", front);
        el.style.zIndex = String(n - a);
        el.style.transform = front
          ? "translate(-50%, 0) scale(1)"
          : "translate(calc(-50% + " + d * 10 + "%), " + -a * 4 + "%) scale(" + scale + ") rotate(" + d * 2.5 + "deg)";
        el.style.filter = front ? "brightness(0.9)" : "brightness(" + Math.max(0.35, 0.72 - a * 0.1) + ")";
        el.style.opacity = overText ? "0.12" : "1";
      });
    }
    window.addEventListener("resize", function () {
      layout(current);
    });
    function showPaper(i) {
      stage.classList.add("is-papers");
      stage.classList.remove("is-globe");
      current = +i;
      layout(current);
    }
    layout(0);
    function showGlobe() {
      stage.classList.add("is-globe");
      stage.classList.remove("is-papers");
    }
    [].forEach.call(document.querySelectorAll(".s-pubs li[data-paper]"), function (li) {
      var i = li.getAttribute("data-paper");
      li.addEventListener("mouseenter", function () {
        showPaper(i);
      });
      li.addEventListener("focus", function () {
        showPaper(i);
      });
    });
    [].forEach.call(document.querySelectorAll(".s-talks li[data-place]"), function (li) {
      li.addEventListener("mouseenter", showGlobe);
      li.addEventListener("focus", showGlobe);
    });
    // While scrolling (no hover), follow whichever list is in the middle of the screen
    if ("IntersectionObserver" in window) {
      var talks = document.querySelector(".s-talks-wrap");
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (e) {
            if (e.isIntersecting) showGlobe();
            else if (e.boundingClientRect.top > 0) showPaper(current);
          });
        },
        { rootMargin: "-45% 0px -45% 0px" }
      );
      if (talks) io.observe(talks);
    }
  }

  /* Spinning globe that turns to each presentation's city on hover (d3 + world-atlas from a CDN) */
  function initGlobe() {
    var el = $("talk-globe");
    var label = $("globe-label");
    if (!el) return;
    if (!window.d3 || !window.topojson) {
      el.parentNode.classList.add("is-unavailable");
      return;
    }
    var d3 = window.d3;
    var reduce = !document.documentElement.classList.contains("motion");
    var S = 440;
    var proj = d3.geoOrthographic().scale(S / 2 - 12).translate([S / 2, S / 2]).clipAngle(90).rotate([100, -25]);
    var path = d3.geoPath(proj);
    var svg = d3.select(el).append("svg").attr("viewBox", "0 0 " + S + " " + S);

    var defs = svg.append("defs");
    var g = defs.append("radialGradient").attr("id", "globe-shade").attr("cx", "38%").attr("cy", "32%");
    g.append("stop").attr("offset", "0%").attr("stop-color", "#232733");
    g.append("stop").attr("offset", "100%").attr("stop-color", "#101217");

    svg.append("circle").attr("class", "g-glow").attr("cx", S / 2).attr("cy", S / 2).attr("r", S / 2 - 6);
    var sphere = svg.append("path").datum({ type: "Sphere" }).attr("class", "g-sphere").attr("fill", "url(#globe-shade)");
    var grat = svg.append("path").datum(d3.geoGraticule10()).attr("class", "g-grat");
    var land = svg.append("path").attr("class", "g-land");
    var arc = svg.append("path").attr("class", "g-arc");
    var outline = svg.append("path").datum({ type: "Sphere" }).attr("class", "g-outline");

    var keys = Object.keys(PLACES).filter(function (k) {
      return document.querySelector('.s-talks li[data-place="' + k + '"]');
    });
    var dots = svg
      .append("g")
      .selectAll("g")
      .data(keys)
      .enter()
      .append("g")
      .attr("class", "g-city");
    dots.append("circle").attr("class", "g-pulse").attr("r", 9);
    dots.append("circle").attr("class", "g-dot").attr("r", 3.6);
    var home = svg.append("circle").attr("class", "g-home").attr("r", 3);

    var active = null;
    var arcT = 0;

    function visible(lon, lat) {
      var r = proj.rotate();
      return d3.geoDistance([lon, lat], [-r[0], -r[1]]) < Math.PI / 2 - 0.02;
    }

    function render() {
      sphere.attr("d", path);
      outline.attr("d", path);
      grat.attr("d", path);
      if (land.datum()) land.attr("d", path);
      dots
        .attr("transform", function (k) {
          var p = PLACES[k];
          var xy = proj([p.lon, p.lat]);
          return "translate(" + xy[0] + "," + xy[1] + ")";
        })
        .attr("display", function (k) {
          return visible(PLACES[k].lon, PLACES[k].lat) ? null : "none";
        })
        .classed("is-active", function (k) {
          return k === active;
        });
      var hxy = proj([HOME.lon, HOME.lat]);
      home.attr("cx", hxy[0]).attr("cy", hxy[1]).attr("display", visible(HOME.lon, HOME.lat) ? null : "none");
      if (active) {
        var p = PLACES[active];
        var interp = d3.geoInterpolate([HOME.lon, HOME.lat], [p.lon, p.lat]);
        var pts = d3.range(0, 1.0001, 0.02).filter(function (t) {
          return t <= arcT;
        }).map(interp);
        arc.datum({ type: "LineString", coordinates: pts.length > 1 ? pts : [interp(0), interp(0.001)] }).attr("d", path);
      } else {
        arc.attr("d", null);
      }
    }

    d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json").then(
      function (world) {
        land.datum(window.topojson.feature(world, world.objects.land));
        render();
      },
      function () {
        render();
      }
    );

    // Gentle spin while idle
    var idle = true;
    var resumeAt = 0;
    if (!reduce) {
      d3.timer(function (elapsed) {
        if (!idle || elapsed < resumeAt) return;
        var r = proj.rotate();
        proj.rotate([r[0] + 0.06, r[1], r[2]]);
        render();
      });
    }

    function turnTo(key) {
      var p = PLACES[key];
      if (!p) return;
      idle = false;
      active = key;
      var talks = [].slice.call(document.querySelectorAll('.s-talks li[data-place="' + key + '"]')).map(function (li) {
        return li.querySelector("strong").textContent;
      });
      label.innerHTML = "<strong>" + esc(p.city) + "</strong> · " + esc(talks.join(" · "));
      var r0 = proj.rotate();
      var target = [-p.lon, -p.lat + 12, 0];
      // take the short way around
      var d = ((target[0] - r0[0] + 540) % 360) - 180;
      var r1 = [r0[0] + d, target[1], 0];
      var ri = d3.interpolate(r0, r1);
      svg
        .interrupt()
        .transition()
        .duration(reduce ? 0 : 1100)
        .ease(d3.easeCubicInOut)
        .tween("turn", function () {
          return function (t) {
            proj.rotate(ri(t));
            arcT = Math.max(0, (t - 0.35) / 0.65);
            render();
          };
        });
    }

    function release() {
      idle = true;
    }

    [].forEach.call(document.querySelectorAll(".s-talks li[data-place]"), function (li) {
      var key = li.getAttribute("data-place");
      li.addEventListener("mouseenter", function () {
        turnTo(key);
      });
      li.addEventListener("focus", function () {
        turnTo(key);
      });
    });
    var list = document.querySelector(".s-talks");
    if (list) list.addEventListener("mouseleave", release);

    render();
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
  initGlobe();
  initStage();
})();
