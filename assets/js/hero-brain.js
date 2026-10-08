/* Faint, static brain line drawing behind the homepage hero (no animation).
   Drawn in code (no image file); styles are under "Hero brain" in style.css. */
(function () {
  var hero = document.getElementById("hero");
  if (!hero) return;

  var NS = "http://www.w3.org/2000/svg";
  var INK = "var(--text)";
  var BG = "var(--bg)";

  /* ---------- helpers ---------- */
  function rng(seed) {
    return function () {
      seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
      var t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  // 2D gradient noise (Perlin-style), seeded
  function makeNoise(seed) {
    var r = rng(seed), perm = [], i;
    for (i = 0; i < 256; i++) perm[i] = i;
    for (i = 255; i > 0; i--) { var j = Math.floor(r() * (i + 1)); var t = perm[i]; perm[i] = perm[j]; perm[j] = t; }
    for (i = 0; i < 256; i++) perm[256 + i] = perm[i];
    var gx = [], gy = [];
    for (i = 0; i < 256; i++) { var a = r() * Math.PI * 2; gx[i] = Math.cos(a); gy[i] = Math.sin(a); }
    function fade(t) { return t * t * t * (t * (t * 6 - 15) + 10); }
    return function (x, y) {
      var X = Math.floor(x), Y = Math.floor(y), xf = x - X, yf = y - Y;
      X &= 255; Y &= 255;
      function g(ix, iy, dx, dy) { var h = perm[perm[ix] + iy]; return gx[h] * dx + gy[h] * dy; }
      var u = fade(xf), w = fade(yf);
      var n00 = g(X, Y, xf, yf), n10 = g(X + 1, Y, xf - 1, yf);
      var n01 = g(X, Y + 1, xf, yf - 1), n11 = g(X + 1, Y + 1, xf - 1, yf - 1);
      return (n00 + u * (n10 - n00)) + w * ((n01 + u * (n11 - n01)) - (n00 + u * (n10 - n00)));
    };
  }

  // Catmull-Rom spline -> SVG path, and -> dense polygon (for inside tests)
  function seg(p0, p1, p2, p3) {
    return [p1,
      [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6],
      [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6],
      p2];
  }
  function segs(pts, closed) {
    var n = pts.length, out = [], last = closed ? n : n - 1;
    for (var i = 0; i < last; i++) {
      var p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n], p3 = pts[(i + 2) % n];
      if (!closed) { if (i === 0) p0 = p1; if (i + 2 >= n) p3 = p2; }
      out.push(seg(p0, p1, p2, p3));
    }
    return out;
  }
  function f1(n) { return n.toFixed(1); }
  function smoothPath(pts, closed) {
    var s = segs(pts, closed), d = "M" + f1(pts[0][0]) + " " + f1(pts[0][1]);
    s.forEach(function (b) { d += "C" + f1(b[1][0]) + " " + f1(b[1][1]) + " " + f1(b[2][0]) + " " + f1(b[2][1]) + " " + f1(b[3][0]) + " " + f1(b[3][1]); });
    return d + (closed ? "Z" : "");
  }
  function densify(pts, closed, per) {
    var out = [];
    segs(pts, closed).forEach(function (b) {
      for (var k = 0; k < per; k++) {
        var t = k / per, mt = 1 - t;
        out.push([
          mt * mt * mt * b[0][0] + 3 * mt * mt * t * b[1][0] + 3 * mt * t * t * b[2][0] + t * t * t * b[3][0],
          mt * mt * mt * b[0][1] + 3 * mt * mt * t * b[1][1] + 3 * mt * t * t * b[2][1] + t * t * t * b[3][1],
        ]);
      }
    });
    return out;
  }
  function inPoly(x, y, poly) {
    var c = false;
    for (var i = 0, j = poly.length - 1; i < poly.length; j = i++) {
      var xi = poly[i][0], yi = poly[i][1], xj = poly[j][0], yj = poly[j][1];
      if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) c = !c;
    }
    return c;
  }
  function el(name, attrs, parent) {
    var e = document.createElementNS(NS, name);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  function polyline(pts) {
    var d = "M" + f1(pts[0][0]) + " " + f1(pts[0][1]);
    for (var i = 1; i < pts.length; i++) d += "L" + f1(pts[i][0]) + " " + f1(pts[i][1]);
    return d;
  }

  /* ---------- anatomy (lateral view, frontal lobe on the left; viewBox units) ---------- */
  var CEREBRUM = [
    [110, 400], [118, 328], [150, 254], [205, 190], [280, 140], [370, 108], [470, 92], [570, 92],
    [670, 108], [760, 140], [835, 190], [890, 255], [918, 330], [922, 395], [905, 445], [870, 478],
    [810, 490], [745, 492], [690, 502], [630, 528], [560, 552], [480, 562], [405, 556], [345, 536],
    [306, 506], [292, 472], [302, 446], [270, 449], [220, 456], [165, 449], [128, 430],
  ];
  var CEREBELLUM = [[702, 500], [782, 486], [862, 492], [906, 530], [906, 588], [866, 632], [790, 652], [714, 634], [670, 590], [668, 538]];
  var STEM = [[588, 520], [690, 516], [688, 580], [680, 636], [676, 690], [674, 748], [628, 748], [618, 690], [594, 644], [572, 590]];

  var cerebrumPoly = densify(CEREBRUM, true, 12);
  var cerebellumPoly = densify(CEREBELLUM, true, 12);

  var svg = el("svg", { viewBox: "90 70 850 720", "aria-hidden": "true", focusable: "false" });
  var defs = el("defs", {}, svg);
  el("path", { d: smoothPath(CEREBRUM, true) }, el("clipPath", { id: "hb-cerebrum" }, defs));
  el("path", { d: smoothPath(CEREBELLUM, true) }, el("clipPath", { id: "hb-cerebellum" }, defs));

  function shape(pts, fill, sw, op, parent) {
    return el("path", { d: smoothPath(pts, true), fill: fill, stroke: INK, "stroke-width": sw, "stroke-opacity": op, "stroke-linejoin": "round" }, parent);
  }

  // Cerebellar folia: concentric arcs around the peduncle, clipped to the cerebellum
  function folia(parent, op, gap) {
    var g = el("g", { "clip-path": "url(#hb-cerebellum)", fill: "none", stroke: INK, "stroke-width": 1.3, "stroke-opacity": op, "stroke-linecap": "round" }, parent);
    // Roughly horizontal folia that bow more toward the bottom, following the lower edge
    for (var y0 = 500; y0 < 660; y0 += gap) {
      var k = 10 + (y0 - 500) * 0.42, d = "";
      for (var i = 0; i <= 48; i++) {
        var u = i / 48, x = 650 + u * 270;
        var y = y0 + k * Math.sin(Math.PI * u) - 18 * u + 1.5 * Math.sin(i * 1.3 + y0);
        d += (i ? "L" : "M") + f1(x) + " " + f1(y);
      }
      el("path", { d: d }, g);
    }
  }

  var root = el("g", {}, svg);

  /* ---------- FOLDS: evenly spaced streamlines of a warped noise field ---------- */
  var DSEP = 19, DTEST = DSEP * 0.55, STEP = 2, CELL = DTEST;
  var grid = {};
  function key(x, y) { return Math.floor(x / CELL) + "," + Math.floor(y / CELL); }
  function add(p) { var k = key(p[0], p[1]); (grid[k] = grid[k] || []).push(p); }
  function clear(x, y, d, ignore) {
    var cx = Math.floor(x / CELL), cy = Math.floor(y / CELL), rad = Math.ceil(d / CELL);
    for (var i = -rad; i <= rad; i++) for (var j = -rad; j <= rad; j++) {
      var list = grid[(cx + i) + "," + (cy + j)];
      if (!list) continue;
      for (var m = 0; m < list.length; m++) {
        var p = list[m];
        if (ignore && ignore.has(p)) continue;
        var dx = p[0] - x, dy = p[1] - y;
        if (dx * dx + dy * dy < d * d) return false;
      }
    }
    return true;
  }

  var n1 = makeNoise(4), n2 = makeNoise(9), n3 = makeNoise(15);
  function angle(x, y) {
    var wx = x + 60 * n2(x / 210, y / 210), wy = y + 60 * n3(x / 210 + 5, y / 210 + 5);
    return n1(wx / 165, wy / 165) * 5.2 + 0.4 * n2(x / 60, y / 60);
  }

  function trace(x, y, dir, own) {
    var pts = [], px = x, py = y, prevA = null;
    for (var s = 0; s < 700; s++) {
      var a = angle(px, py) + (dir < 0 ? Math.PI : 0);
      if (prevA !== null) {
        var da = Math.atan2(Math.sin(a - prevA), Math.cos(a - prevA));
        if (Math.abs(da) > 0.9) break;
      }
      prevA = a;
      var nx = px + Math.cos(a) * STEP, ny = py + Math.sin(a) * STEP;
      if (!inPoly(nx, ny, cerebrumPoly)) break;
      if (!clear(nx, ny, DTEST, own)) break;
      px = nx; py = ny;
      pts.push([px, py]);
    }
    return pts;
  }

  // Landmark fissures first, so the folds flow around them
  var LANDMARKS = [
    { pts: [[300, 452], [370, 434], [440, 418], [505, 404], [565, 392], [612, 368], [650, 336], [676, 300]], w: 2.6, op: 0.12 }, // Sylvian fissure
    { pts: [[566, 96], [552, 150], [560, 196], [538, 246], [546, 296], [522, 346], [512, 392]], w: 2.2, op: 0.1 }, // central sulcus
  ];
  var lines = [];
  LANDMARKS.forEach(function (L) {
    var dense = densify(L.pts, false, 20);
    dense.forEach(add);
    lines.push({ d: smoothPath(L.pts, false), w: L.w, op: L.op });
  });

  var r = rng(21), tries = 0;
  var seeds = [];
  for (var sx = 120; sx < 920; sx += DSEP * 0.7) for (var sy = 95; sy < 565; sy += DSEP * 0.7) seeds.push([sx + (r() - 0.5) * 10, sy + (r() - 0.5) * 10]);
  seeds.sort(function () { return r() - 0.5; });

  seeds.forEach(function (sd) {
    if (!inPoly(sd[0], sd[1], cerebrumPoly) || !clear(sd[0], sd[1], DSEP, null)) return;
    var own = new Set();
    var fw = trace(sd[0], sd[1], 1, own), bw = trace(sd[0], sd[1], -1, own);
    var pts = bw.reverse().concat([sd], fw);
    if (pts.length < 22) return;
    pts.forEach(add);
    // simplify: keep every 3rd point for a smooth curve
    var simp = pts.filter(function (_, i) { return i % 3 === 0 || i === pts.length - 1; });
    lines.push({ d: smoothPath(simp, false), w: 1.8, op: 0.065 });
    tries++;
  });

  // Draw: brainstem, cerebellum, cerebrum (each filled with the page colour to hide what's behind)
  shape(STEM, BG, 2, 0.1, root);
  shape(CEREBELLUM, BG, 2, 0.1, root);
  folia(root, 0.06, 9);
  shape(CEREBRUM, BG, 2.4, 0.12, root);
  var gl = el("g", { "clip-path": "url(#hb-cerebrum)", fill: "none", stroke: INK, "stroke-linecap": "round", "stroke-linejoin": "round" }, root);
  lines.forEach(function (L) { el("path", { d: L.d, "stroke-width": L.w, "stroke-opacity": L.op }, gl); });

  var wrap = document.createElement("div");
  wrap.className = "hero-brain";
  wrap.appendChild(svg);
  hero.insertBefore(wrap, hero.firstChild);
  // Darker top arc: an unfilled copy layered on top, masked to the top of the brain
  var top = wrap.cloneNode(true);
  top.className = "hero-brain hero-brain--top";
  top.querySelectorAll("[fill]").forEach(function (n) { if (n.getAttribute("fill") !== "none") n.setAttribute("fill", "none"); });
  top.querySelectorAll("clipPath").forEach(function (c) { c.id = c.id + "-top"; });
  top.querySelectorAll("[clip-path]").forEach(function (n) { n.setAttribute("clip-path", n.getAttribute("clip-path").replace(")", "-top)")); });
  hero.insertBefore(top, wrap.nextSibling);
})();
