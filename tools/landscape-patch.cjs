const fs = require('node:fs');
const path = require('node:path');
function replaceOnce(code, before, after) {
  if (code.split(before).length !== 2) throw new Error('Expected one verified graphics fragment: ' + before.slice(0,80));
  return code.replace(before, after);
}
function patchMobileGraphics(code) {
  const helper = `function mobileGraphicsPixelRatio(pixelRatio,width,height,level){const area=Math.max(1,width*height),maximum=Math.min(pixelRatio,2,Math.sqrt(1500000/area));return Math.max(Math.min(pixelRatio,1),maximum*[.75,.875,1][level])}`;
  code = replaceOnce(code, 'class t0{constructor(', helper + 'class t0{constructor(');
  code = replaceOnce(code, 'this.basePixelRatio=Math.min(window.devicePixelRatio||1,1.15)', 'this.isTouch=matchMedia("(any-pointer: coarse)").matches||navigator.maxTouchPoints>0,this.basePixelRatio=Math.min(window.devicePixelRatio||1,1.15)');
  code = replaceOnce(code, 'g=Math.max(.6,this.basePixelRatio*A.pixelScale)', 'g=this.isTouch?mobileGraphicsPixelRatio(window.devicePixelRatio||1,window.innerWidth,window.innerHeight,this.level):Math.max(.6,this.basePixelRatio*A.pixelScale)');
  code = replaceOnce(code, 'resize(){this.renderer.setSize(window.innerWidth,window.innerHeight,!0)}sample(', 'resize(){if(this.isTouch)this.renderer.setPixelRatio(mobileGraphicsPixelRatio(window.devicePixelRatio||1,window.innerWidth,window.innerHeight,this.level));this.renderer.setSize(window.innerWidth,window.innerHeight,!0)}sample(');
  code = replaceOnce(code, 'createActivityLabel(A,g){const B=document.createElement("canvas");B.width=256,B.height=64;const I=B.getContext("2d");', 'createActivityLabel(A,g){const B=document.createElement("canvas");B.width=512,B.height=128;const I=B.getContext("2d");I.scale(2,2);');
  code = replaceOnce(code, 'I.fillText(A,128,33);const C=new iQ', 'I.fillText(A,128,33,232);const C=new iQ');
  code = replaceOnce(code, 'const hA=new JB(jA);hA.colorSpace=vg;', 'const hA=new JB(jA);hA.colorSpace=vg;hA.anisotropy=4;');
  return code;
}
module.exports = { patchMobileGraphics };
if (require.main === module) {
  const root = process.argv[2] || '.';
  const htmlPath = path.join(root, 'index.html');
  const html = fs.readFileSync(htmlPath, 'utf8');
  const entry = html.match(/<script type="module" crossorigin src="\.\/(assets\/[^"<>]+\.js)"><\/script>/);
  if (!entry) throw new Error('Game entry script not found');
  const output = 'assets/index-mobile-landscape-20261008.js';
  if (entry[1] === output) { console.log('Mobile clarity release already applied'); process.exit(0); }
  const input = fs.readFileSync(path.join(root, entry[1]), 'utf8');
  let code = input.includes('function mobileGraphicsPixelRatio(') ? input : patchMobileGraphics(input);
  code = replaceOnce(code, 'new ef(document.querySelector("#game"));', 'const openPlanetGame=new ef(document.querySelector("#game"));globalThis.openPlanetOrientationGuard(openPlanetGame);');
  fs.writeFileSync(path.join(root, output), code);
  let updatedHtml = html.replace(entry[1], output);
  if (!updatedHtml.includes('orientation-guard-20261008.js')) updatedHtml = updatedHtml.replace('<script type="module"', '<script src="./assets/orientation-guard-20261008.js"></script>\n    <script type="module"');
  fs.writeFileSync(htmlPath, updatedHtml);
  console.log('Updated mobile resolution and readable labels');
}