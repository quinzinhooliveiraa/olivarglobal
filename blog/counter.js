(function () {
  if (typeof IntersectionObserver === "undefined") return;

  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

  function run(el) {
    var target   = parseFloat(el.dataset.counter);
    var prefix   = el.dataset.prefix  || "";
    var suffix   = el.dataset.suffix  || "";
    var decimals = (el.dataset.counter.indexOf(".") !== -1) ? 1 : 0;
    var duration = target >= 200 ? 2000
                 : target >= 50  ? 1600
                 : target >= 10  ? 1200
                 :                  900;
    var start = null;

    function tick(ts) {
      if (!start) start = ts;
      var p   = Math.min((ts - start) / duration, 1);
      var cur = easeOutCubic(p) * target;
      el.textContent = prefix + (decimals ? cur.toFixed(1) : Math.floor(cur)) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  var seen = new WeakSet();
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting && !seen.has(entry.target)) {
        seen.add(entry.target);
        run(entry.target);
      }
    });
  }, { threshold: 0.7 });

  document.querySelectorAll("[data-counter]").forEach(function (el) {
    io.observe(el);
  });
})();
