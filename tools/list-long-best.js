/* Lists decisions where the best option is the longest, with a length target for rewriting. Usage: node tools/list-long-best.js [dayN ...] */
const fs=require('fs'),path=require('path');const WWW=path.resolve(__dirname,'../www');
const days=process.argv.slice(2).length?process.argv.slice(2).map(Number):[2,3,4,5,6,7];
let n=0,tot=0;
days.forEach(d=>{const f=path.join(WWW,'day'+d+'.js');if(!fs.existsSync(f))return;global.window={DAYDATA:[]};delete require.cache[f];require(f);
 window.DAYDATA[0].cases.forEach(c=>{const sets=[];c.S.forEach((s,i)=>sets.push(['S'+(i+1),s[1]]));(c.R||[]).forEach((r,i)=>sets.push(['R'+(i+1),r[1]]));
  sets.forEach(([nm,o])=>{tot++;const b=o.map(x=>x[1]).indexOf(Math.max(...o.map(x=>x[1])));const L=o.map(x=>x[0].length);const m2=Math.max(...L.filter((_,i)=>i!==b));
   if(L[b]>=m2){n++;console.log(c.id+' '+nm+' ['+L[b]+' vs '+m2+'] '+o[b][0]);}});});});
console.log('best longest:',n,'/',tot);
