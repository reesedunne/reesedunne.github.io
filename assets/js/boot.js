/* Runs in <head>: picks the layout style before the page is drawn. */
(function () {
  var allowed = ["editorial", "minimal", "sidebar"];
  var fromUrl = null;
  try {
    fromUrl = new URLSearchParams(window.location.search).get("style");
  } catch (e) {}
  var settings = (window.SITE && window.SITE.settings) || {};
  var style =
    allowed.indexOf(fromUrl) > -1
      ? fromUrl
      : allowed.indexOf(settings.defaultStyle) > -1
        ? settings.defaultStyle
        : "editorial";

  var root = document.documentElement;
  root.setAttribute("data-style", style);

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduceMotion && "IntersectionObserver" in window) root.classList.add("motion");
})();
