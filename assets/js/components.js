/* =====================================================================
   Reusable components.
   Each function takes data from content.js and returns HTML.
   You normally never need to edit this file. Edit content.js instead.
   ===================================================================== */
(function () {
  "use strict";

  var SITE = window.SITE || {};
  var settings = SITE.settings || {};

  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function showPlaceholders() {
    return settings.showPlaceholders !== false;
  }

  function isWebUrl(href) {
    return /^https?:\/\//i.test(href || "");
  }

  function projectById(id) {
    return (SITE.projects || []).filter(function (p) {
      return p.id === id;
    })[0];
  }

  function projectUrl(id) {
    return "project.html?id=" + encodeURIComponent(id);
  }

  /* [BRACKETED] marker for content that hasn't been provided yet. */
  function Placeholder(label, hint) {
    if (!showPlaceholders()) return "";
    return (
      '<span class="ph" title="' +
      esc(hint || "Placeholder: fill this in content.js") +
      '">[' +
      esc(label) +
      "]</span>"
    );
  }

  /* Link. Web links open in a new tab with safe rel attributes. */
  function ExternalLink(opts) {
    var href = opts.href;
    var web = isWebUrl(href);
    var newTab = web || opts.newTab;
    var attrs = newTab ? ' target="_blank" rel="noopener noreferrer"' : "";
    var cls = opts.className ? ' class="' + esc(opts.className) + '"' : "";
    var label = opts.html != null ? opts.html : esc(opts.label);
    var icon = web && opts.icon !== false ? '<span class="ext-icon" aria-hidden="true">↗</span>' : "";
    var sr = newTab ? '<span class="visually-hidden"> (opens in a new tab)</span>' : "";
    return "<a" + cls + ' href="' + esc(href) + '"' + attrs + ">" + label + icon + sr + "</a>";
  }

  function LinkOrPlaceholder(url, label, placeholderLabel, className) {
    if (url) return ExternalLink({ href: url, label: label, className: className });
    return Placeholder(placeholderLabel || label + " link");
  }

  function Button(opts) {
    var cls = "btn" + (opts.primary ? " btn--primary" : "");
    if (opts.href) {
      return ExternalLink({ href: opts.href, label: opts.label, className: cls, icon: false, newTab: opts.newTab });
    }
    if (!showPlaceholders()) return "";
    return (
      '<span class="btn btn--ph" title="' +
      esc(opts.hint || "Placeholder: add this in content.js") +
      '">' +
      esc(opts.label) +
      ' <span class="ph-tag">[to add]</span></span>'
    );
  }

  function SectionHeading(opts) {
    return '<div class="section-heading"><h2 id="' + esc(opts.id) + '-heading">' + esc(opts.title) + "</h2></div>";
  }

  function Tags(list, max) {
    if (!list || !list.length) return "";
    var items = max ? list.slice(0, max) : list;
    return (
      '<ul class="tags" aria-label="Topics">' +
      items
        .map(function (t) {
          return '<li class="tag">' + esc(t) + "</li>";
        })
        .join("") +
      "</ul>"
    );
  }

  function Stats(list, max) {
    if (!list || !list.length) return "";
    var items = max ? list.slice(0, max) : list;
    return (
      '<ul class="stats">' +
      items
        .map(function (s) {
          return (
            '<li class="stat"><span class="stat-value">' +
            esc(s.value) +
            '</span><span class="stat-label">' +
            sci(s.label) +
            "</span></li>"
          );
        })
        .join("") +
      "</ul>"
    );
  }

  /* Escape text, then show χ_para / χ_dia with real subscripts. */
  function sci(text) {
    return esc(text)
      .replace(/χ_([a-z]+)/g, "χ<sub>$1</sub>")
      .replace(/\b(in vitro|in vivo|ex vivo)\b/gi, "<em>$1</em>");
  }

  function Bullets(list) {
    if (!list || !list.length) return "";
    return (
      '<ul class="bullets">' +
      list
        .map(function (t) {
          return "<li>" + sci(t) + "</li>";
        })
        .join("") +
      "</ul>"
    );
  }

  /* Bold your name in an author list. */
  function formatAuthors(authors) {
    var html = esc(authors);
    (settings.highlightAuthor || []).forEach(function (name) {
      var n = esc(name);
      html = html.split(n).join('<strong class="me">' + n + "</strong>");
    });
    return html;
  }

  function citationText(pub) {
    var authors = String(pub.authors).replace(/\.?\s*$/, ".");
    var text = authors + " " + pub.title + ". " + pub.venue + ". " + pub.year + ".";
    if (pub.doi) text += " https://doi.org/" + pub.doi;
    return text;
  }

  function sep() {
    return '<span class="sep" aria-hidden="true">·</span>';
  }

  /* --------------------------------------------------------------- */

  function ProjectCard(p) {
    var extraLinks = (p.links || [])
      .filter(function (l) {
        return l.url;
      })
      .map(function (l) {
        return ExternalLink({ href: l.url, label: l.label, newTab: true });
      })
      .join("");

    return (
      '<article class="project" id="project-' +
      esc(p.id) +
      '">' +
      '<p class="project-meta"><span class="dates">' +
      esc(p.dates) +
      "</span> " +
      sep() +
      " " +
      esc(p.institution) +
      "</p>" +
      '<h4 class="project-title"><a href="' +
      projectUrl(p.id) +
      '">' +
      esc(p.title) +
      "</a></h4>" +
      (p.status ? '<p class="project-status">' + esc(p.status) + "</p>" : "") +
      '<p class="project-sub">' +
      esc(p.role) +
      (p.advisor ? " " + sep() + " Advisor: " + esc(p.advisor) : "") +
      "</p>" +
      '<p class="project-desc">' +
      esc(p.description) +
      "</p>" +
      Stats(p.stats, 4) +
      Tags(p.tags, 4) +
      '<p class="project-links"><a class="more-link" href="' +
      projectUrl(p.id) +
      '">Project details<span class="visually-hidden">: ' +
      esc(p.title) +
      '</span> <span class="arrow" aria-hidden="true">→</span></a>' +
      extraLinks +
      "</p>" +
      "</article>"
    );
  }

  function PublicationItem(pub, opts) {
    opts = opts || {};
    var link = pub.url || (pub.doi ? "https://doi.org/" + pub.doi : null);
    var title = link ? ExternalLink({ href: link, label: pub.title, icon: false }) : esc(pub.title);

    var actions = [];
    if (pub.doi) actions.push(ExternalLink({ href: "https://doi.org/" + pub.doi, label: "DOI" }));
    else if (pub.url) actions.push(ExternalLink({ href: pub.url, label: "Publisher page" }));
    else actions.push(Placeholder("DOI / publication link", "Add doi or url for this publication in content.js"));
    if (pub.pdf) actions.push(ExternalLink({ href: pub.pdf, label: "PDF", newTab: true }));
    var proj = pub.project && projectById(pub.project);
    if (proj && opts.showProject !== false) {
      actions.push('<a href="' + projectUrl(proj.id) + '">Related project</a>');
    }
    actions.push(
      '<button type="button" class="copy-btn" data-cite="' +
        esc(citationText(pub)) +
        '" aria-live="polite">Copy citation</button>'
    );

    return (
      '<li class="pub">' +
      '<div class="pub-year">' +
      esc(pub.year) +
      "</div>" +
      '<div class="pub-body">' +
      '<p class="pub-title">' +
      title +
      "</p>" +
      '<p class="pub-authors">' +
      formatAuthors(pub.authors) +
      "</p>" +
      '<p class="pub-venue"><em>' +
      esc(pub.venue) +
      "</em>" +
      (pub.role ? ' <span class="pub-role">' + esc(pub.role) + "</span>" : "") +
      "</p>" +
      '<p class="pub-actions">' +
      actions.filter(Boolean).join("") +
      "</p>" +
      "</div></li>"
    );
  }

  function PresentationItem(pr, opts) {
    opts = opts || {};
    if (pr.placeholder) {
      if (!showPlaceholders()) return "";
      return (
        '<li class="pres pres--ph"><div class="pres-year"></div><div class="pres-body">' +
        Placeholder("Presentation: conference, year, type, and title to add") +
        "</div></li>"
      );
    }

    var proj = pr.project ? projectById(pr.project) : null;
    var head =
      '<p class="pres-head"><span class="pres-conf">' +
      esc(pr.conference) +
      (pr.year ? " " + esc(pr.year) : "") +
      "</span>" +
      (pr.type ? '<span class="pres-type">' + esc(pr.type) + "</span>" : "") +
      "</p>";
    var confLine = [pr.conferenceFull, pr.location].filter(Boolean).map(esc).join(" " + sep() + " ");
    var full = confLine ? '<p class="pres-conf-full">' + confLine + "</p>" : "";

    var title = pr.title
      ? '<p class="pres-title">' + esc(pr.title) + "</p>"
      : Placeholder("Presentation title")
        ? '<p class="pres-title">' + Placeholder("Presentation title") + "</p>"
        : "";
    var authors = pr.authors ? '<p class="pres-authors">' + formatAuthors(pr.authors) + "</p>" : "";

    var note = pr.note ? '<p class="pres-note">' + esc(pr.note) + "</p>" : "";

    var actions = [];
    if (pr.url) actions.push(ExternalLink({ href: pr.url, label: pr.linkLabel || "Abstract" }));
    else if (pr.linkLabel) actions.push(Placeholder(pr.linkLabel + " link"));
    if (pr.poster) actions.push(ExternalLink({ href: pr.poster, label: "Poster (PDF)", newTab: true }));
    if (proj && opts.showProject !== false) {
      actions.push('<a href="' + projectUrl(proj.id) + '">Related project</a>');
    }
    actions = actions.filter(Boolean);
    var actionsHtml = actions.length ? '<p class="pres-actions">' + actions.join("") + "</p>" : "";

    return (
      '<li class="pres">' +
      '<div class="pres-year">' +
      (pr.year ? esc(pr.year) : Placeholder("Year")) +
      "</div>" +
      '<div class="pres-body">' +
      head +
      title +
      authors +
      full +
      note +
      actionsHtml +
      "</div></li>"
    );
  }

  window.UI = {
    esc: esc,
    sep: sep,
    sci: sci,
    showPlaceholders: showPlaceholders,
    projectById: projectById,
    projectUrl: projectUrl,
    Placeholder: Placeholder,
    ExternalLink: ExternalLink,
    LinkOrPlaceholder: LinkOrPlaceholder,
    Button: Button,
    SectionHeading: SectionHeading,
    Tags: Tags,
    Stats: Stats,
    Bullets: Bullets,
    formatAuthors: formatAuthors,
    citationText: citationText,
    ProjectCard: ProjectCard,
    PublicationItem: PublicationItem,
    PresentationItem: PresentationItem,
  };
})();
