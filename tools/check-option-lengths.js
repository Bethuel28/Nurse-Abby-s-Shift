/* Option-length bias check: run after adding any cases (regular and rescue decisions). */
global.window = {};
const D = require(process.argv[2] || require('path').resolve(__dirname, '../www/cases.js'));
let longest = 0, n = 0, bad = [];
D.cases.forEach(c => c.stages.forEach((s, i) => {
  [['s' + (i + 1), s.o], s.rescue ? ['rescue' + (i + 1), s.rescue.o] : null].filter(Boolean).forEach(([nm, o]) => {
    n++;
    const L = o.map(x => x[0].length), sp = Math.max(...L) - Math.min(...L);
    const b = o.map(x => x[1]).indexOf(Math.max(...o.map(x => x[1])));
    if (L[b] === Math.max(...L)) longest++;
    if (sp > 16) bad.push(c.id + ' ' + nm + ' spread ' + sp);
  });
}));
console.log('best is longest in', longest, '/', n, '(target <= ' + Math.ceil(n * .35) + ')', '; wide spreads:', bad.join(', ') || 'none');
process.exit(longest > Math.ceil(n * .35) || bad.length ? 1 : 0);
