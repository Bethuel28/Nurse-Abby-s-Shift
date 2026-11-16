/* Builds window.DAYS from Day 1 (cases.js + meta.js) and the compact day files (day2.js ... day7.js). */
(function () {
  var RATE = { 1: 2.5, 2: 1.4, 3: 0.7, 4: 0.5, 5: 0.35, 6: 0.28 };
  function stage(a) { return { q: a[0], o: a[1] }; }
  function build(day) {
    var cases = day.cases.map(function (k) {
      var stages = k.S.map(stage);
      (k.R || []).forEach(function (r, i) { if (stages[i]) stages[i].rescue = stage(r); });
      window.META[k.id] = { r: k.arr ? k.arr.r : RATE[k.rank], arr: k.arr ? k.arr.t : 0, skin: k.sk, hair: k.hr, style: k.st, gown: k.gw, prop: k.pr, rank: k.arr ? 0 : k.rank, v2: k.v2, why: k.why };
      return { id: k.id, bed: k.bed, name: k.name, age: k.age, sex: k.sex, tri: k.tri, look: k.look, v: k.v, lateLook: k.late, stages: stages, end: { great: k.end[0], ok: k.end[1], poor: k.end[2], dead: k.end[3] }, debrief: k.deb };
    });
    return { id: day.id, title: day.title, hospital: 'De La Cruz Memorial Hospital', intro: day.intro, aide: day.aide || 'Brett', events: day.events || [], cases: cases, mins: 20 };
  }
  var d1 = window.CASES; d1.intro = 'Your first shift. Six beds, all full. Take a breath, Nurse Abby.'; d1.aide = 'Brett'; d1.events = [];
  window.DAYS = [d1];
  (window.DAYDATA || []).forEach(function (d) { window.DAYS.push(build(d)); });
})();
