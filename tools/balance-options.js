/* Evens out option lengths so length does not give away the answer.
   Trims the best option (drops one list item) when it is the longest; falls back to rare padding of wrong options.
   Usage: node tools/balance-options.js [--write]   (edits www/dayN.js in place when --write) */
const fs = require('fs'), path = require('path');
const WWW = path.resolve(__dirname, '../www'), write = process.argv.includes('--write');
const esc = s => s.replace(/'/g, "\\'");
function clip(t) {
  const bits = t.split(/(, |; | and |: )/); let out = '';
  for (let i = 0; i < bits.length; i += 2) { const next = out + (out ? bits[i - 1] : '') + bits[i]; out = next; if (out.length >= 26) break; }
  out = out.replace(/[:;,] $/, ''); return out.length < t.length - 3 ? out : null;
}
function trim(t) {
  let parts = t.split(', ');
  if (parts.length >= 3) { const last = parts.pop(); parts.splice(parts.length - 1, 1); let r = parts.join(', ') + ', ' + last; return r.replace(/, and /, ' and '); }
  if (parts.length === 2 && / and /.test(parts[1])) { return parts[0]; }
  const sc = t.split('; '); if (sc.length >= 2) return sc[0];
  const co = t.split(': '); if (co.length === 2 && co[1].length > 12) return co[0] + ': ' + co[1].split(', ')[0];
  const per = t.replace(/ (per order|now|right now|at once|STAT)$/, ''); if (per !== t) return per;
  return null;
}
const SUF = [' for now', ' right away', ' as a first step', ' to start with', ' while waiting', ' for the moment', ' in the meantime', ' at the bedside'];
let st = { sets: 0, trimmed: 0, padded: 0, longest: 0 };
for (let d = 2; d <= 7; d++) {
  const f = path.join(WWW, 'day' + d + '.js'); if (!fs.existsSync(f)) continue;
  let src = fs.readFileSync(f, 'utf8');
  global.window = { DAYDATA: [] }; delete require.cache[f]; require(f);
  const data = window.DAYDATA[0], sets = [];
  data.cases.forEach(c => { c.S.forEach(s => sets.push(s[1])); (c.R || []).forEach(r => sets.push(r[1])); });
  let k = 0, sj = 0;
  const setText = (o, i, nt) => { const t = o[i][0]; if (src.includes("['" + esc(t) + "',")) src = src.replace("['" + esc(t) + "',", "['" + esc(nt) + "',"); o[i][0] = nt; };
  sets.forEach(o => {
    st.sets++;
    const b = o.map(x => x[1]).indexOf(Math.max(...o.map(x => x[1])));
    const L = () => o.map(x => x[0].length), isLong = () => { const l = L(); return l[b] >= Math.max(...l.filter((_, i) => i !== b)); };
    if (isLong()) { k++; if (k % 4 !== 0) { let g = 0; while (isLong() && g++ < 6) { const nt = trim(o[b][0]) || clip(o[b][0]); if (!nt || nt.length < 20 || nt.length < Math.min(...L().filter((_, i) => i !== b)) - 4) break; setText(o, b, nt); st.trimmed++; } } }
    // still long? pad wrong options (longest first), a few times
    let pg = 0; while (isLong() && k % 4 !== 0 && pg++ < 6) { const l = L(); let w = -1, wl = -1; l.forEach((x, i) => { if (i !== b && x > wl && !/[.?!]$/.test(o[i][0]) && !SUF.some(s => o[i][0].endsWith(s))) { wl = x; w = i; } }); if (w < 0) break; setText(o, w, o[w][0] + SUF[sj++ % SUF.length]); st.padded++; }
    if (isLong()) st.longest++;
  });
  if (write) fs.writeFileSync(f, src);
}
console.log(JSON.stringify(st), write ? '(written)' : '(dry run)');
