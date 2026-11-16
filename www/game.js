/* Abby's Shift — visual, prioritization-driven version */
(function () {
  'use strict';
  var DAYS = window.DAYS, D = DAYS[0], M = window.META, $app = document.getElementById('app'), $toasts = document.getElementById('toasts');
  var TIER_NAMES = ['Best', 'Partial', 'Poor', 'Deadly'];
  var KEY = 'abbyshift.v5', S, ui = { screen: 'home' }, rafId = 0, minis = [];

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function clock(t) { var m = 7 * 60 + t; return ('0' + Math.floor(m / 60) % 24).slice(-2) + ':' + ('0' + m % 60).slice(-2); }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { } }
  function load() { try { return JSON.parse(localStorage.getItem(KEY)); } catch (e) { return null; } }
  function prog() { try { return JSON.parse(localStorage.getItem(KEY + '.prog')) || {}; } catch (e) { return {}; } }
  function setDay(i) { D = DAYS[i] || DAYS[0]; }
  function arrived(c) { return !M[c.id].arr || S.t >= M[c.id].arr; }
  function initial() { return D.cases.filter(function (c) { return !M[c.id].arr; }); }
  function pending() { return D.cases.filter(function (c) { return !S.done[c.id] && !arrived(c); }); }
  function unlocked(i) { return i === 0 || !!prog()[DAYS[i - 1].id]; }
  function byId(id) { return D.cases.filter(function (c) { return c.id === id; })[0]; }
  function toast(txt, lvl) {
    var d = document.createElement('div'); d.className = 'toast ' + (lvl || ''); d.textContent = txt; $toasts.appendChild(d);
    while ($toasts.children.length > 2) $toasts.removeChild($toasts.firstChild);
    setTimeout(function () { if (d.parentNode) d.parentNode.removeChild(d); }, 6500);
  }
  /* stability drains while a patient waits (rate per minute in META) */
  function stab(c, t) { var m = M[c.id]; if (m.arr && t < m.arr) return 100; var loss = (S && S.loss && S.loss[c.id]) || 0; return Math.max(0, Math.round(100 - (t - (m.arr || 0)) * m.r - loss)); }
  function tierOf(d) { return d > 0 ? 0 : d >= -25 ? 1 : d >= -40 ? 2 : 3; }
  function seeded(str) { var h = 2166136261; for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); } return function () { h ^= h << 13; h ^= h >>> 17; h ^= h << 5; return ((h >>> 0) % 100000) / 100000; }; }
  function order4(c, stage) { var r = seeded(c.id + stage + 'x'), a = [0, 1, 2, 3]; for (var i = 3; i > 0; i--) { var j = Math.floor(r() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function moodOf(st, dead) { return dead || st <= 0 ? 'dead' : st >= 60 ? 'ok' : st >= 35 ? 'worry' : 'crit'; }
  function col(st) { return st >= 60 ? 'var(--good)' : st >= 35 ? 'var(--warn)' : 'var(--bad)'; }
  function unseen() { return D.cases.filter(function (c) { return !S.done[c.id] && arrived(c); }); }

  /* ---------- avatar (SVG) ---------- */
  function avatar(c, mood, bigger) {
    var m = M[c.id], baby = m.style === 'baby', k = baby ? 0.78 : 1, hr = baby ? 15 : 20;
    var skin = mood === 'dead' ? '#9aa7ab' : mood === 'crit' ? '#c9b8a6' : m.skin;
    var hx = 52, hy = 60;
    var eyes, mouth;
    if (mood === 'dead') { eyes = '<path d="M44 56l6 6M50 56l-6 6M56 56l6 6M62 56l-6 6" stroke="#222" stroke-width="2"/>'; mouth = '<path d="M46 72h12" stroke="#222" stroke-width="2"/>'; }
    else if (mood === 'crit') { eyes = '<path d="M44 59q3 3 6 0M56 59q3 3 6 0" stroke="#222" stroke-width="2" fill="none"/>'; mouth = '<ellipse cx="52" cy="72" rx="4" ry="5" fill="#5a1a1a"/>'; }
    else if (mood === 'worry') { eyes = '<circle cx="46" cy="58" r="2.4" fill="#222"/><circle cx="58" cy="58" r="2.4" fill="#222"/><path d="M42 52l8 2M62 52l-8 2" stroke="#222" stroke-width="1.6"/>'; mouth = '<path d="M46 73q6-4 12 0" stroke="#222" stroke-width="2" fill="none"/>'; }
    else { eyes = '<circle cx="46" cy="58" r="2.4" fill="#222"/><circle cx="58" cy="58" r="2.4" fill="#222"/>'; mouth = '<path d="M46 71q6 5 12 0" stroke="#222" stroke-width="2" fill="none"/>'; }
    if (m.prop === 'droop' && mood !== 'dead') mouth = '<path d="M46 71q6 2 12 6" stroke="#222" stroke-width="2" fill="none"/>';
    var hair = '';
    if (m.style === 'short') hair = '<path d="M31 56a21 21 0 0 1 42 0q-8-9-21-9t-21 9z" fill="' + m.hair + '"/>';
    else if (m.style === 'long') hair = '<path d="M31 60a21 21 0 0 1 42 0v14q-4-10-4-20q-17-8-34 0q0 10-4 20z" fill="' + m.hair + '"/>';
    else if (m.style === 'bald') hair = '';
    else if (m.style === 'bun') hair = '<circle cx="52" cy="36" r="8" fill="' + m.hair + '"/><path d="M31 56a21 21 0 0 1 42 0q-8-8-21-8t-21 8z" fill="' + m.hair + '"/>';
    else hair = '<path d="M40 44q12-8 24 0q-12-3-24 0z" fill="' + m.hair + '"/>';
    var props = '';
    if (m.prop === 'sweat' && mood !== 'dead') props = '<path d="M32 50q-3 5 0 7q3-2 0-7M74 52q-3 5 0 7q3-2 0-7M52 40q-3 5 0 7q3-2 0-7" fill="#7fd1ff"/><path d="M105 78l18-14" stroke="' + skin + '" stroke-width="7" stroke-linecap="round"/>';
    if (m.prop === 'blood') props = '<ellipse cx="160" cy="78" rx="22" ry="9" fill="#c4122f"/><ellipse cx="172" cy="84" rx="10" ry="5" fill="#8f0c22"/>';
    if (m.prop === 'flush' && mood !== 'dead') props = '<circle cx="40" cy="66" r="4.5" fill="#ff8aa0" opacity=".7"/><circle cx="64" cy="66" r="4.5" fill="#ff8aa0" opacity=".7"/>';
    if (m.prop === 'bandage') props = '<rect x="33" y="44" width="38" height="7" rx="2" fill="#f4f4f4"/><circle cx="60" cy="47" r="2.5" fill="#d33"/>';
    if (m.prop === 'bruise') props = '<circle cx="64" cy="64" r="5" fill="#7a4a8c" opacity=".7"/>';
    if (m.prop === 'tears' && mood !== 'dead') props = '<path d="M44 62q-2 5 0 7M60 62q2 5 0 7" stroke="#7fd1ff" stroke-width="2" fill="none"/>';
    if (m.prop === 'cough' && mood !== 'dead') props = '<circle cx="78" cy="68" r="3" fill="#bfe9ff"/><circle cx="84" cy="62" r="2" fill="#bfe9ff"/><circle cx="86" cy="72" r="2.4" fill="#bfe9ff"/>';
    if (m.prop === 'cramp') props = '<path d="M112 78q14-8 28 0" stroke="' + skin + '" stroke-width="7" stroke-linecap="round" fill="none"/>';
    var scaleG = baby ? 'transform="translate(24 24) scale(.78)"' : '';
    var svg = '<svg viewBox="0 0 240 130" xmlns="http://www.w3.org/2000/svg">' +
      '<rect x="8" y="40" width="9" height="72" rx="3" fill="#35566a"/><rect x="14" y="94" width="214" height="14" rx="4" fill="#2b4a5a"/><rect x="20" y="106" width="8" height="16" fill="#35566a"/><rect x="208" y="106" width="8" height="16" fill="#35566a"/>' +
      '<rect x="20" y="82" width="204" height="14" rx="6" fill="#e8f3f5"/>' +
      '<g ' + scaleG + '><ellipse cx="48" cy="72" rx="30" ry="10" fill="#fff"/>' +
      '<rect x="72" y="58" width="150" height="30" rx="14" fill="' + m.gown + '"/><rect x="110" y="62" width="112" height="26" rx="10" fill="#8fd3e8" opacity=".9"/><rect x="110" y="62" width="112" height="6" rx="3" fill="#6bbcd6"/>' +
      '<circle cx="' + hx + '" cy="' + hy + '" r="' + hr + '" fill="' + skin + '"/>' + hair + eyes + mouth + props + '</g>' +
      '<line x1="226" y1="20" x2="226" y2="104" stroke="#9fb7bf" stroke-width="2"/><rect x="216" y="22" width="20" height="26" rx="6" fill="#bfe9ff" opacity=".85"/><path d="M226 48q-6 24-30 44" stroke="#bfe9ff" stroke-width="1.5" fill="none"/>' +
      '</svg>';
    return svg;
  }

  /* ---------- ECG drawing ---------- */
  function gs(x, mu, sg, a) { var d = (x - mu) / sg; return a * Math.exp(-d * d); }
  function beat(ph) { return gs(ph, .12, .03, .12) + gs(ph, .27, .008, -.12) + gs(ph, .295, .009, 1) + gs(ph, .32, .01, -.22) + gs(ph, .52, .05, .22); }
  function registerCanvas(cv, hr, mode, color) {
    var W = cv.width, buf = []; for (var i = 0; i < W; i++) buf.push(.5);
    minis.push({ cv: cv, ctx: cv.getContext('2d'), hr: hr, mode: mode, color: color, buf: buf, ph: 0, last: performance.now() });
  }
  function startEcg() {
    cancelAnimationFrame(rafId);
    if (!minis.length) return;
    function frame(now) {
      minis.forEach(function (m) {
        if (!document.body.contains(m.cv)) return;
        var W = m.cv.width, H = m.cv.height, dt = Math.min(.05, (now - m.last) / 1000), steps = Math.round(dt * 150);
        m.last = now;
        for (var i = 0; i < steps; i++) {
          var y;
          if (m.mode === 'flat') y = .5;
          else if (m.mode === 'chaos') y = .5 + (Math.random() - .5) * .8 * Math.sin(now / 60 + i);
          else { m.ph += (m.hr / 60) / 150; if (m.ph >= 1) m.ph -= 1; y = .66 - beat(m.ph) * .5; }
          m.buf.shift(); m.buf.push(y);
        }
        m.ctx.clearRect(0, 0, W, H); m.ctx.strokeStyle = m.color; m.ctx.lineWidth = 2; m.ctx.beginPath();
        for (var x = 0; x < W; x++) { var yy = m.buf[x] * H; if (x === 0) m.ctx.moveTo(x, yy); else m.ctx.lineTo(x, yy); }
        m.ctx.stroke();
      });
      rafId = requestAnimationFrame(frame);
    }
    rafId = requestAnimationFrame(frame);
  }
  function hrOf(vs) { var m = /HR (\d+)/.exec(vs); return m ? +m[1] : 80; }
  function vitalsAt(c, h) {
    var a = c.v, b = M[c.id].v2, f = Math.max(0, Math.min(1, (100 - h) / 65));
    var nb = b.match(/\d+(\.\d+)?/g) || [], i = 0;
    return a.replace(/\d+(\.\d+)?/g, function (x) {
      var y = nb[i++]; if (y === undefined) return x;
      var v = +x + (+y - +x) * f, dec = (x.indexOf('.') >= 0 || y.indexOf('.') >= 0);
      return dec ? v.toFixed(1) : String(Math.round(v));
    });
  }
  function miniCanvas(c, st, d) {
    var dead = d && d.score < 0, m = moodOf(st, dead), hr = hrOf(vitalsAt(c, st));
    var mode = d ? (dead ? 'flat' : 'sinus') : m === 'crit' ? 'chaos' : 'sinus';
    if (d && !dead) hr = 72;
    var color = d ? (dead ? '#ff4d5e' : '#52d98a') : m === 'crit' ? '#ff4d5e' : m === 'worry' ? '#ffb347' : '#19e07a';
    return '<canvas class="mini" width="260" height="52" data-id="' + c.id + '" data-hr="' + hr + '" data-mode="' + mode + '" data-color="' + color + '"></canvas>';
  }
  function bindCanvases() {
    minis = [];
    var list = document.querySelectorAll('canvas[data-hr]');
    for (var i = 0; i < list.length; i++) registerCanvas(list[i], +list[i].getAttribute('data-hr'), list[i].getAttribute('data-mode'), list[i].getAttribute('data-color'));
    startEcg();
  }
  function monitor(c, h, dead) {
    var vs = dead ? 'HR 0 · BP — · RR 0 · SpO₂ 0%' : vitalsAt(c, h), parts = vs.split(' · ');
    var tiles = parts.map(function (p) {
      var k = p.split(' ')[0], v = p.substring(k.length + 1), cls = '', n = parseFloat(v);
      if (k === 'HR' && (n > 120 || n < 50)) cls = 'r'; else if (k === 'HR' && n > 100) cls = 'w';
      if (k.indexOf('SpO') === 0 && n < 90) cls = 'r'; else if (k.indexOf('SpO') === 0 && n < 94) cls = 'w';
      if (k === 'BP' && (n < 90 || n > 180)) cls = 'r';
      if (k === 'RR' && (n > 28)) cls = 'r'; else if (k === 'RR' && n > 22) cls = 'w';
      if (k === 'GCS' && n < 13) cls = 'r';
      if (k === 'T' && n >= 39) cls = 'w';
      return '<div class="tile ' + cls + '"><b>' + esc(v) + '</b><span>' + esc(k) + '</span></div>';
    }).join('');
    var bad = h < 35, mode = dead ? 'flat' : bad ? 'chaos' : 'sinus', color = dead || bad ? '#ff4d5e' : h < 60 ? '#ffb347' : '#19e07a', hr = hrOf(vs);
    return '<div class="mon"><div class="flat" style="background:#031017;border-color:var(--line)"><canvas class="mini" style="height:84px" width="300" height="100" data-hr="' + hr + '" data-mode="' + mode + '" data-color="' + color + '"></canvas></div><div class="tiles">' + tiles + '</div></div>';
  }

  /* ---------- screens ---------- */
  function hud() {
    var n = unseen().length;
    return '<div class="hud"><div class="hudrow"><div class="clock">' + clock(S.t) + '</div><div class="meters" style="margin:0"><span class="pill">' + Object.keys(S.done).length + '/' + D.cases.length + ' seen</span></div></div></div>';
  }
  function label(sc) { return sc < 0 ? '☠ Died' : sc >= 85 ? 'Great outcome!' : sc >= 50 ? 'Survived — with problems' : 'Survived, barely'; }
  var OUT = function (sc) { return sc < 0 ? 'bad' : sc >= 85 ? 'good' : 'warn'; };

  function vHome() {
    var s0 = load(), pr = prog();
    var cont = s0 && s0.plan && s0.plan.length && Object.keys(s0.done).length < (DAYS[s0.day || 0].cases.length);
    var h = '<div style="padding-top:22px"><div class="mut sm">🏥 De La Cruz Memorial Hospital · Emergency Department</div><h1>Abby\'s Shift</h1>' +
      '<p class="mut">Six beds. One nurse. Decide who is sickest — then save them.</p><div class="scene">' + avatar(byId('stemi') || DAYS[0].cases[0], 'worry') + '</div>';
    if (cont) h += '<div class="card"><b>' + esc(DAYS[s0.day || 0].title) + '</b><div class="mut sm">In progress · ' + clock(s0.t) + '</div><button class="btn" data-a="cont">▶ Continue</button></div>';
    DAYS.forEach(function (d, i) {
      var ok = unlocked(i), p = pr[d.id];
      h += '<button class="card bed" data-a="' + (ok ? 'new' : 'lock') + '" data-i="' + i + '"' + (ok ? '' : ' style="opacity:.5"') + '><div class="nm" style="padding-right:0">' + (ok ? '' : '🔒 ') + esc(d.title) + '</div><div class="mut sm">' + (ok ? (p ? 'Best: <b style="color:var(--acc)">' + p.rank + '</b> (' + p.pct + '%) · tap to replay' : 'Tap to clock in') : 'Finish the previous day first') + '</div></button>';
    });
    return h + '<div class="card sm mut">Clinical content follows Philippine references (DOH, PHA, PSH, PAPP); always check your hospital\'s protocol.</div></div>';
  }
  function vBrief() {
    return '<div style="padding-top:16px"><div class="brett"><span class="face">🧑‍⚕️</span><div><b>' + esc(D.aide) + ':</b> "' + esc(D.intro) + '"</div></div><h2>' + esc(D.title) + '</h2>' +
      '<h2>How it works</h2><p><b>1. Triage.</b> Look at the patients on the board and rank them from sickest (1) to least sick. Anything can happen during a shift.</p>' +
      '<p><b>2. See them.</b> You pick who is next. Each patient takes four decisions (about 20 minutes) — and everyone waiting keeps losing stability. A patient at 0% dies.</p>' +
      '<p><b>3. Decide.</b> Four decisions per patient, four options each, plus rescue decisions when things go wrong. Some are right, some are half-right, some are deadly. Stability carries over. A poor or dangerous call causes a complication you must rescue, and every mistake permanently lowers how healthy the patient can ever get. Unfixed problems keep draining him. Two or three bad calls can kill.</p>' +
      '<button class="btn" data-a="triage">Start triage</button></div>';
  }
  function vTriage() {
    var h = '<div style="padding-top:8px"><h2>Triage</h2><p class="mut sm">Tap patients in the order you will see them: sickest first. Tap again to undo. Triage tags are only a guess.</p>';
    h += initial().map(function (c) {
      var m = M[c.id], i = ui.rank.indexOf(c.id);
      return '<button class="card bed" data-a="rank" data-id="' + c.id + '" style="' + (i >= 0 ? 'border-color:var(--acc)' : '') + '"><div class="bedc"><div class="av">' + avatar(c, 'ok') + '</div><div><div class="nm" style="padding-right:0">' + esc(c.name) + '</div><div class="mut xs">' + c.age + c.sex + ' · ' + esc(c.tri) + '</div><div class="sm" style="margin:4px 0">' + esc(c.look) + '</div><div class="xs mut">' + esc(c.v) + '</div></div></div><span class="bn" style="top:8px"><span class="rk' + (i >= 0 ? '' : ' empty') + '">' + (i >= 0 ? i + 1 : '·') + '</span></span></button>';
    }).join('');
    h += '<div class="fixed"><div><button class="btn" data-a="startshift" style="text-align:center"' + (ui.rank.length === initial().length ? '' : ' disabled') + '>' + (ui.rank.length === initial().length ? '🚑 Start the shift' : 'Rank all patients (' + ui.rank.length + '/' + initial().length + ')') + '</button></div></div></div>';
    return h;
  }
  function brettLine() {
    var u = unseen(); if (!u.length) return '';
    var worst = u.slice().sort(function (a, b) { return stab(a, S.t) - stab(b, S.t); })[0], st = stab(worst, S.t);
    var msg = st < 35 ? 'Ma\'am, Bed ' + worst.bed + ' (' + worst.name.split(' ')[0].replace('"', '') + ') looks really bad — he/she\'s getting worse!' : st < 60 ? 'Bed ' + worst.bed + ' is starting to look off, Nurse Abby…' : S.t === 0 ? 'Whoever you pick, I\'ve got the cuffs ready!' : 'Everyone\'s holding steady for now. Who\'s next?';
    return '<div class="brett"><span class="face">🧑‍⚕️</span><div><b>' + esc(D.aide) + ':</b> "' + esc(msg) + '"</div></div>';
  }
  function vBoard() {
    var h = hud() + brettLine();
    D.cases.filter(arrived).forEach(function (c) {
      var d = S.done[c.id], st = d ? (d.score < 0 ? 0 : 100) : stab(c, S.t), mood = moodOf(st, d && d.score < 0), plan = S.plan.indexOf(c.id) + 1;
      var chips = d ? '<span class="chip ' + OUT(d.score) + '">' + (d.score < 0 ? '☠ Died' : 'Done · ' + d.score) + '</span>' : (st < 35 ? '<span class="chip bad">⚠ deteriorating</span>' : '') + (plan ? '<span class="chip">plan #' + plan + '</span>' : '<span class="chip bad">🆕 new arrival</span>');
      h += '<button class="card bed' + (!d && st < 35 ? ' alert crit' : '') + '" data-a="see" data-id="' + c.id + '"' + (d ? ' disabled style="opacity:.75"' : '') + '><span class="bn">BED ' + c.bed + '</span><div class="bedc"><div class="av">' + avatar(c, mood) + '</div><div><div class="nm" style="padding-right:40px">' + esc(c.name) + '</div><div class="mut xs">' + c.age + c.sex + ' · ' + esc(c.tri.split('·')[0]) + '</div>' +
        (d ? '<div class="sm" style="margin-top:4px">' + esc(d.text.slice(0, 90)) + (d.text.length > 90 ? '…' : '') + '</div>' : '<div class="meter"><i style="width:' + st + '%;background:' + col(st) + '"></i></div>') + miniCanvas(c, st, d) + '<div class="chips">' + chips + '</div></div></div></button>';
    });
    return h;
  }
  function meterCap(h, cap) {
    return '<div class="meter" style="margin:4px 6px;position:relative"><i style="width:' + h + '%;background:' + col(h) + '"></i>' + (cap < 100 ? '<b style="position:absolute;top:-2px;bottom:-2px;left:' + cap + '%;width:3px;background:#fff;border-radius:2px" title="Maximum stability after damage"></b>' : '') + '</div>';
  }
  function vCase() {
    var cur = S.cur, c = byId(cur.id), h = cur.h, mood = moodOf(h), late = cur.late, hh = hud();
    hh += '<div class="top">' + (cur.stage === 0 && !cur.log.length ? '<button class="btn sec" data-a="back" style="width:auto">← Board</button>' : '<span></span>') + '<div class="mut sm">BED ' + c.bed + '</div></div>';
    hh += '<h2>' + esc(c.name) + '</h2><div class="mut sm">' + c.age + c.sex + ' · ' + esc(c.tri) + '</div>';
    hh += '<div class="scene' + (h < 35 ? ' crit' : '') + '">' + avatar(c, mood) + meterCap(h, cur.cap) + '</div>';
    hh += (cur.rescue ? '<div class="card sm" style="border-color:var(--bad)"><b style="color:var(--bad)">⚠ Complication.</b> ' + esc(cur.lastBad) + '</div>' : '') + '<div class="chips" style="margin:6px 0">' + [0, 1, 2, 3].map(function (i) { return '<span class="chip' + (i === cur.stage ? ' good' : '') + '">' + (i < cur.stage ? '✓ ' : '') + 'Decision ' + (i + 1) + '/4</span>'; }).join('') + '<span class="chip">Stability ' + h + '%</span>' + (cur.cap < 100 ? '<span class="chip bad">Max ' + cur.cap + '%</span>' : '') + (cur.drain ? '<span class="chip bad">↓ −' + cur.drain + '%/decision</span>' : '') + (cur.rescue ? '<span class="chip bad">⚠ Rescue</span>' : '') + '</div>';
    hh += monitor(c, h) + '<div class="card sm">' + esc(h < 35 || late ? c.lateLook : c.look) + (late && !cur.log.length ? '<div style="margin-top:6px;color:var(--bad)">⚠ You reached this patient late — they started worse.</div>' : '') + '</div>';
    var st = cur.rescue ? c.stages[cur.stage].rescue : c.stages[cur.stage], ord = order4(c, cur.stage + (cur.rescue ? 'r' : ''));
    hh += '<h3>' + esc(st.q) + '</h3>' + ord.map(function (oi, k) {
      return '<button class="sel fact" data-a="pick" data-i="' + oi + '"><span class="g" style="width:30px">' + 'ABCD'[k] + '</span>' + esc(st.o[oi][0]) + '</button>';
    }).join('');
    return hh;
  }
  function vWork() {
    var cur = S.cur, c = byId(cur.id), o = (cur.rescue ? c.stages[cur.stage].rescue : c.stages[cur.stage]).o[ui.pickIdx];
    return '<div class="pop"><div class="big">⏱</div><h2>' + esc(o[0]) + '<span class="dots"></span></h2><p class="mut">' + esc(D.aide) + ': "On it, Nurse Abby!"</p></div>';
  }
  function vRes() {
    var cur = S.cur, c = byId(cur.id), r = ui.res, dead = cur.h <= 0, mood = moodOf(cur.h, dead), t = r.tier;
    var cls = t === 0 ? 'good' : t === 1 ? 'warn' : 'bad', last = dead || (cur.stage >= 3 && !cur.pend);
    var h = hud() + '<div class="top"><span></span><div class="mut sm">BED ' + c.bed + '</div></div><h2>' + esc(c.name) + '</h2>';
    h += '<div class="scene' + (cur.h < 35 ? ' crit' : '') + '">' + avatar(c, mood) + meterCap(cur.h, cur.cap) + '</div>';
    h += monitor(c, cur.h, dead);
    h += '<div class="card"><p class="mut sm">You chose: ' + esc(r.text) + '</p><h3 class="out ' + cls + '">' + ['✔ Best call', '◐ Partly right', '✖ Poor choice', '☠ Dangerous'][t] + ' <span class="mut sm">' + (r.delta > 0 ? '+' : '') + r.delta + ' → ' + cur.h + '%</span></h3><p>' + esc(r.result) + '</p>' + (r.tick ? '<p class="sm" style="color:var(--bad)">The earlier problem kept draining him: −' + r.tick + '%.</p>' : '') + (r.drain ? '<p class="sm" style="color:var(--warn)">Unresolved problem: he will lose ' + r.drain + '% every decision until it is fixed.</p>' : '') + (r.capLoss ? '<p class="sm" style="color:var(--bad)">Damage done: maximum stability is now ' + cur.cap + '% (−' + r.capLoss + ').</p>' : '') + (dead ? '<p style="color:var(--bad)"><b>Stability reached 0%.</b></p>' : '') + (cur.pend && !dead ? '<p style="color:var(--bad)"><b>⚠ This caused a complication — you must deal with it now.</b></p>' : '') + '</div>';
    h += '<button class="btn" data-a="cont2">' + (cur.pend && !dead ? 'Handle the complication' : last ? (dead ? 'Continue' : 'See outcome') : 'Next decision') + '</button>';
    return h;
  }
  function confetti() {
    var cols = ['#19c3b0', '#52d98a', '#ffb347', '#6aa9ff', '#ff8aa0'];
    for (var i = 0; i < 36; i++) {
      var s = document.createElement('span'); s.className = 'conf'; s.style.left = Math.random() * 100 + 'vw'; s.style.background = cols[i % 5]; s.style.animationDelay = Math.random() * .6 + 's';
      document.body.appendChild(s); (function (x) { setTimeout(function () { if (x.parentNode) x.parentNode.removeChild(x); }, 3500); })(s);
    }
  }
  function vOutcome() {
    var d = S.done[ui.id], c = byId(ui.id), left = unseen().length, dead = d.score < 0, mood = dead ? 'dead' : d.score >= 85 ? 'ok' : 'worry';
    var h = hud() + '<div style="padding-top:6px"><div class="mut sm">BED ' + c.bed + ' · ' + esc(c.name) + '</div><h2 class="out ' + (dead ? 'died' : 'good') + '">' + label(d.score) + '</h2>';
    h += '<div class="scene">' + avatar(c, mood) + '</div>';
    h += dead ? '<div class="flat"><canvas class="mini" style="height:60px" width="300" height="70" data-hr="0" data-mode="flat" data-color="#ff4d5e"></canvas></div>' : '<div class="stars">' + (d.score >= 85 ? '⭐⭐⭐' : d.score >= 50 ? '⭐⭐' : '⭐') + '</div>';
    h += '<div class="card"><p>' + esc(d.text) + '</p>' + (d.late ? '<p class="sm" style="color:var(--bad)">You reached this patient late — they started at ' + d.h0 + '% stability.</p>' : '') + (d.picks ? '<p class="sm">Your calls: ' + d.picks + '</p>' : '') + '<p class="mut sm">Final stability: ' + Math.max(d.score, 0) + '</p></div>';
    h += '<button class="btn" data-a="next">' + (left ? 'Next patient' : 'Shift change →') + '</button></div>';
    return h;
  }
  function triageAcc() {
    var ini = initial().sort(function (a, b) { return M[a.id].rank - M[b.id].rank; }), n = ini.length, sum = 0;
    ini.forEach(function (c, k) { sum += Math.abs(S.plan.indexOf(c.id) - k); });
    return Math.round((1 - sum / Math.floor(n * n / 2)) * 100);
  }
  function report() {
    var tot = 0, deaths = 0, order = S.order || [];
    D.cases.forEach(function (c) { var d = S.done[c.id]; tot += Math.max(d.score, 0); if (d.score < 0) deaths++; });
    var casePct = Math.round(tot / (D.cases.length * 100) * 100), ta = triageAcc(), pct = Math.round(.85 * casePct + .15 * ta);
    return { pct: pct, casePct: casePct, ta: ta, deaths: deaths, rank: deaths === 0 && pct >= 90 ? 'S' : pct >= 75 && deaths <= 1 ? 'A' : pct >= 55 ? 'B' : pct >= 35 ? 'C' : 'D' };
  }
  function vReport() {
    var r = report(), ideal = initial().sort(function (a, b) { return M[a.id].rank - M[b.id].rank; });
    D.cases.forEach(function (c) { if (M[c.id].arr) ideal.push(c); });
    var h = '<div style="padding-top:12px"><div class="mut sm">Shift change · ' + D.title + '</div><div class="rank">' + r.rank + '</div><div class="stars">' + (r.rank === 'S' ? '⭐⭐⭐' : r.rank === 'A' ? '⭐⭐' : r.rank === 'B' ? '⭐' : '') + '</div>' +
      '<p style="text-align:center" class="mut">' + r.pct + '% · ' + r.deaths + ' death' + (r.deaths === 1 ? '' : 's') + '</p>' +
      '<div class="card"><div class="kv"><span>Patient care</span><b>' + r.casePct + '%</b></div><div class="kv"><span>Prioritization (triage vs. ideal)</span><b>' + r.ta + '%</b></div></div>' +
      '<h3>Who was sickest?</h3>'+'<div class="card sm">' + ideal.map(function (c, i) {
        var mine = S.plan.indexOf(c.id) + 1 || 'new', seen = S.order.indexOf(c.id) + 1; seen = seen || '—';
        return '<div style="margin:8px 0"><b>' + (M[c.id].arr ? '🆕' : (i + 1) + '.') + ' Bed ' + c.bed + ' — ' + esc(c.name.split(' (')[0]) + '</b> <span class="mut xs">(you ranked #' + mine + ', saw #' + seen + ')</span><div class="mut xs">' + esc(M[c.id].why) + '</div></div>';
      }).join('') + '</div>';
    D.cases.forEach(function (c) {
      var d = S.done[c.id], bp = c.stages.map(function (st, i) { var b = st.o.slice().sort(function (x, y) { return y[1] - x[1]; })[0]; return (i + 1) + '. ' + b[0]; }).join(' | ');
      h += '<div class="card"><div class="kv"><b>Bed ' + c.bed + ' — ' + esc(c.name) + '</b><span class="mut sm">' + d.score + '</span></div><p class="out ' + (d.score < 0 ? 'died' : 'good') + '">' + label(d.score) + ' <span class="mut sm">(' + (d.waiting ? 'died waiting at ' : 'seen ') + clock(d.t) + (d.late ? ', late' : '') + ')</span></p>' +
        '<p class="sm">Your calls: ' + (d.picks || (d.waiting ? 'never reached' : '—')) + '</p><details><summary>Best call at each step</summary><p class="sm hit">' + esc(bp) + '</p></details><details><summary>What the guidelines say</summary><ul class="sm">' + c.debrief.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul></details></div>';
    });
    return h + '' + (S.day < DAYS.length - 1 ? '<button class="btn" data-a="new" data-i="' + (S.day + 1) + '">Next day →</button><div style="height:8px"></div>' : '') + '<button class="btn sec" data-a="new" data-i="' + S.day + '">↺ Replay this day</button><div style="height:8px"></div><button class="btn sec" data-a="home">Home</button></div>';
  }
  function render() {
    cancelAnimationFrame(rafId);
    var f = { home: vHome, brief: vBrief, triage: vTriage, board: vBoard, case: vCase, out: vOutcome, report: vReport, res: vRes, work: function () { return vCase() + vWork(); } }[ui.screen];
    $app.innerHTML = f();
    window.scrollTo(0, 0);
    bindCanvases();
  }
  function advance(mins) {
    S.t += mins;
    (D.events || []).forEach(function (ev) {
      if (S.t >= ev.t && !S.fired['e' + ev.t]) {
        S.fired['e' + ev.t] = 1; toast(ev.text, 'alarm'); if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
        unseen().forEach(function (x) { if (!(S.cur && S.cur.id === x.id)) S.loss[x.id] = (S.loss[x.id] || 0) + ev.drain; });
      }
    });
    D.cases.forEach(function (x) {
      if (M[x.id].arr && S.t >= M[x.id].arr && !S.fired['a' + x.id]) { S.fired['a' + x.id] = 1; toast('🚨 NEW ARRIVAL — Bed ' + x.bed + ': ' + x.tri, 'alarm'); if (navigator.vibrate) navigator.vibrate([300, 100, 300]); }
    });
    unseen().forEach(function (x) {
      if (S.cur && S.cur.id === x.id) return;
      var st = stab(x, S.t);
      if (st <= 0) { S.done[x.id] = { score: -100, text: x.end.dead + ' (They died while waiting.)', t: S.t, waiting: true, late: false, h0: 0, picks: '' }; toast('💀 Bed ' + x.bed + ' — ' + x.name.split(' ')[0].replace('"', '') + ' died while waiting.', 'alarm'); if (navigator.vibrate) navigator.vibrate(300); }
      else if (st < 35 && !S.warned[x.id]) { S.warned[x.id] = 1; toast('🔔 Bed ' + x.bed + ': ' + x.lateLook, 'alarm'); if (navigator.vibrate) navigator.vibrate(150); }
    });
  }
  function finish() {
    var cur = S.cur, c = byId(cur.id), dead = cur.h <= 0, h = Math.max(0, cur.h);
    var txt = c.end[dead ? 'dead' : h >= 85 ? 'great' : h >= 50 ? 'ok' : 'poor'];
    S.done[c.id] = { score: dead ? -100 : h, text: txt, late: cur.late, h0: cur.h0, t: cur.t0, picks: cur.log.map(function (l) { return (l.rescue ? 'Rescue ' : '') + TIER_NAMES[l.tier]; }).join(' · ') };
    S.order.push(c.id); S.cur = null;
    save(); ui = { screen: 'out', id: c.id }; render();
    if (!dead && h >= 85) confetti();
  }
  document.addEventListener('click', function (ev) {
    var el = ev.target.closest('[data-a]'); if (!el || el.disabled) return;
    var a = el.getAttribute('data-a'), i = +el.getAttribute('data-i'), id = el.getAttribute('data-id');
    switch (a) {
      case 'new': setDay(i || 0); S = { day: i || 0, t: 0, done: {}, warned: {}, plan: [], order: [], cur: null, loss: {}, fired: {} }; save(); ui = { screen: 'brief' }; render(); break;
      case 'lock': toast('Finish the previous day first.', ''); break;
      case 'cont': S = load(); setDay(S.day || 0); ui = { screen: S.cur ? 'case' : 'board' }; render(); break;
      case 'home': ui = { screen: 'home' }; render(); break;
      case 'triage': ui = { screen: 'triage', rank: [] }; render(); break;
      case 'rank': var k = ui.rank.indexOf(id); if (k >= 0) ui.rank.splice(k, 1); else ui.rank.push(id); var y = window.scrollY; render(); window.scrollTo(0, y); break;
      case 'startshift': S.plan = ui.rank.slice(); save(); ui = { screen: 'board' }; render(); break;
      case 'see': if (!S.cur) { var cc = byId(id), s0 = stab(cc, S.t); S.cur = { id: id, h: Math.max(s0, 25), h0: s0, late: s0 < 60, stage: 0, log: [], t0: S.t, cap: 100, drain: 0, rescue: false, pend: false, lastBad: '' }; save(); } ui = { screen: 'case' }; render(); break;
      case 'back': S.cur = null; save(); ui = { screen: 'board' }; render(); break;
      case 'pick': ui.pickIdx = i; ui.screen = 'work'; render(); setTimeout(function () {
        var c = byId(S.cur.id), cu = S.cur, sg = c.stages[cu.stage], o = (cu.rescue ? sg.rescue : sg).o[i], d = o[1], t = tierOf(d);
        var loss = t === 1 ? 7 : t >= 2 ? 18 : 0;
        cu.cap = Math.max(10, cu.cap - loss);
        var tick = cu.drain || 0;
        cu.h = Math.min(cu.cap, cu.h - tick + d);
        if (cu.rescue) cu.drain = t === 0 ? 0 : t === 1 ? Math.max(0, tick - 2) : tick + 3;
        else if (t >= 2) cu.drain = tick + 5; else if (t === 1) cu.drain = tick + 2; cu.log.push({ stage: cu.stage, idx: i, tier: t, rescue: !!cu.rescue });
        if (t >= 2) cu.lastBad = o[2];
        cu.pend = (t >= 2 && !cu.rescue && cu.stage < 3 && !!sg.rescue && cu.h > 0);
        ui.res = { text: o[0], result: o[2], delta: d, tier: t, capLoss: loss, tick: tick, drain: cu.drain || 0 };
        advance(5); save(); ui.screen = 'res'; render();
      }, 800); break;
      case 'cont2':
        if (S.cur.h <= 0) finish();
        else if (S.cur.pend) { S.cur.pend = false; S.cur.rescue = true; save(); ui.screen = 'case'; render(); }
        else if (S.cur.stage >= 3) finish();
        else { S.cur.rescue = false; S.cur.stage++; save(); ui.screen = 'case'; render(); }
        break;
      case 'next':
        if (!unseen().length && pending().length) { var nx = pending().sort(function (a, b) { return M[a.id].arr - M[b.id].arr; })[0]; advance(Math.max(0, M[nx.id].arr - S.t)); save(); ui = { screen: 'board' }; }
        else if (!unseen().length) {
          var r = report();
          try { var pr = prog(), old = pr[D.id]; if (!old || r.pct > old.pct) pr[D.id] = { pct: r.pct, rank: r.rank }; else pr[D.id] = old; localStorage.setItem(KEY + '.prog', JSON.stringify(pr)); } catch (e) { }
          ui = { screen: 'report' };
        } else ui = { screen: 'board' };
        render(); break;
    }
  });
  render();
})();
