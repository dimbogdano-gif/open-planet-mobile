const fs = require('node:fs');
const path = require('node:path');

// The repository contains a built release, not the original application sources.
// Patch only its verified character section; refuse unknown releases.
function patchAvatar(code) {
  const begin = code.indexOf('const Ck=new qw,mo=new Map;');
  const end = code.indexOf('const nI=new n;', begin);
  if (begin < 0 || end < 0) throw new Error('Unknown character section: release was not changed.');
  const replacement = `
const Ck=new qw,mo=new Map;
function Qk(){const url=new URL('./models/characters/urban-human.glb',document.baseURI).href;
if(!mo.has(url)){const promise=Ck.loadAsync(url).catch(error=>{mo.delete(url);throw error});mo.set(url,promise)}return mo.get(url)}
function yD(clips,name){return clips.find(clip=>clip.name.toLowerCase()===name.toLowerCase()||clip.name.toLowerCase().endsWith('|'+name.toLowerCase()))}
function Ek(person,visible){person.userData.fallbackBody?.forEach(part=>{part.visible=visible})}
const wk={Hips:[-.32,0,0],LeftUpLeg:[-1.28,.08,.08],RightUpLeg:[-1.28,-.08,-.08],LeftLeg:[1.58,0,0],RightLeg:[1.58,0,0],LeftFoot:[-.25,0,0],RightFoot:[-.25,0,0],LeftArm:[-.72,.12,.22],RightArm:[-.72,-.12,-.22],LeftForeArm:[-.52,0,.08],RightForeArm:[-.52,0,-.08]};
function as(person,riding){const avatar=person.userData.avatar?.avatar;if(!avatar)return;
Object.entries(wk).forEach(([name,rotation])=>{const bone=avatar.getObjectByName(name);if(!bone)return;
if(!bone.userData.standingQuaternion)bone.userData.standingQuaternion=bone.quaternion.clone();
bone.quaternion.copy(bone.userData.standingQuaternion);if(riding)bone.quaternion.multiply(new tB().setFromEuler(new EI(...rotation)))})}
function avatarClothes(avatar,skin){
const palette={top:0x51697b,bottom:0x242b35,accent:0xd8e6ec,skin:0xd8aa7b,hair:0x35261d,shoes:0xe9ece4,...skin?.palette};
avatar.updateMatrixWorld(true);
avatar.traverse(part=>{if(!part.isSkinnedMesh)return;
part.geometry=part.geometry.clone();
const positions=part.geometry.attributes.position,joints=part.geometry.attributes.skinIndex,weights=part.geometry.attributes.skinWeight;
if(!joints||!weights)return;
const colors=positions.clone(),boneNames=part.skeleton.bones.map(b=>b.name);
const head=avatar.getObjectByName('Head'),neck=avatar.getObjectByName('Neck'),top=avatar.getObjectByName('HeadTop_End');
const headOrigin=head?.getWorldPosition(new n())||new n();
const headAxis=top&&neck?top.getWorldPosition(new n()).sub(neck.getWorldPosition(new n())).normalize():new n(0,1,0);
let headMin=Infinity,headMax=-Infinity;
const regions=[],heights=[];
for(let i=0;i<positions.count;i++){let strongest=0,index=0;
for(let k=0;k<4;k++){const weight=weights.getComponent(i,k);if(weight>strongest){strongest=weight;index=joints.getComponent(i,k)}}
const name=boneNames[index]||'';
const region=/Head|Neck/.test(name)?'skin':/Hand|Thumb|Index|ForeArm/.test(name)?'skin':/Foot|Toe/.test(name)?'shoes':/Leg|Hips/.test(name)?'bottom':'top';
regions.push(region);
const height=new n().fromBufferAttribute(positions,i).applyMatrix4(part.matrixWorld).sub(headOrigin).dot(headAxis);heights.push(height);
if(/Head/.test(name)){headMin=Math.min(headMin,height);headMax=Math.max(headMax,height)}}
for(let i=0;i<positions.count;i++){let region=regions[i];
if(region==='skin'&&heights[i]>headMin+(headMax-headMin)*.77)region='hair';
const color=new Qg(palette[region]);colors.setXYZ(i,color.r,color.g,color.b)}
part.geometry.setAttribute('color',colors);part.material=part.material.clone();
part.material.color.set(0xffffff);part.material.vertexColors=true;part.material.metalness=0;part.material.roughness=.85;part.material.needsUpdate=true;
part.userData.clothingPalette={...palette};
});
}
function avatarAccessories(avatar,skin){
const head=avatar.getObjectByName('Head');if(!head)return;
const bounds=new dg();const point=new n();
avatar.updateMatrixWorld(true);
avatar.traverse(part=>{if(!part.isSkinnedMesh)return;
const joints=part.geometry.attributes.skinIndex,weights=part.geometry.attributes.skinWeight;
for(let i=0;i<joints.count;i++){let weight=0,index=0;for(let k=0;k<4;k++){if(weights.getComponent(i,k)>weight){weight=weights.getComponent(i,k);index=joints.getComponent(i,k)}}
if(!/Head/.test(part.skeleton.bones[index]?.name||''))continue;
part.getVertexPosition(i,point);point.applyMatrix4(part.matrixWorld);bounds.expandByPoint(point)}});
if(bounds.isEmpty())return;
const size=bounds.getSize(new n()),center=bounds.getCenter(new n());
const boneScale=head.getWorldScale(new n());
const add=(geometry,material,position)=>{const item=new iA(geometry,material);item.position.copy(head.worldToLocal(position));item.scale.set(1/boneScale.x,1/boneScale.y,1/boneScale.z);item.castShadow=true;head.add(item);return item};
const accent=new p({color:skin?.palette?.accent??0xd8e6ec,roughness:.7});
if(skin?.accessory==='cap'){
const cap=add(new cB(1,18,10,0,Math.PI*2,0,Math.PI/2),accent,new n(center.x,bounds.max.y-size.y*.2,center.z));
cap.scale.multiply(new n(size.x*.58,size.y*.33,size.z*.59));
add(new LG(size.x*.85,size.y*.055,size.z*.65),accent,new n(center.x,bounds.max.y-size.y*.2,bounds.max.z+size.z*.12));
}
if(skin?.accessory==='glasses'||skin?.accessory==='sunglasses'){
const glowing=skin.accessory==='glasses';
const material=new p({color:glowing?skin.palette.accent:0x111820,emissive:glowing?skin.palette.accent:0,emissiveIntensity:glowing?.6:0,roughness:.3});
for(const side of [-1,1])add(new LG(size.x*.34,size.y*.14,size.z*.07),material,new n(center.x+side*size.x*.23,center.y+size.y*.06,bounds.max.z+size.z*.015));
add(new LG(size.x*.18,size.y*.045,size.z*.075),material,new n(center.x,center.y+size.y*.06,bounds.max.z+size.z*.015));
}
}
function lt(person,skin){
if(person.userData.avatar)return Promise.resolve();
if(person.userData.avatarLoading)return person.userData.avatarLoading;
const promise=Qk().then(gltf=>{if(!person.parent)return;
const avatar=Ik(gltf.scene);avatar.name='realistic-human-avatar';
avatarClothes(avatar,skin);
avatar.traverse(part=>{if(part.isMesh){part.castShadow=true;part.receiveShadow=true;part.frustumCulled=false}});
const mixer=new za(avatar);
const clips={idle:yD(gltf.animations,'Idle'),walk:yD(gltf.animations,'Walk'),run:yD(gltf.animations,'Run'),jump:yD(gltf.animations,'Jump')};
const actions=Object.fromEntries(Object.entries(clips).filter(([,clip])=>clip).map(([name,clip])=>[name,mixer.clipAction(clip)]));
const first=actions.idle||actions.walk||actions.run;if(first)first.play();mixer.update(.001);
avatar.updateMatrixWorld(true);avatar.traverse(part=>{if(part.isSkinnedMesh){part.skeleton.update();part.computeBoundingBox()}});
const bounds=new dg().setFromObject(avatar),size=bounds.getSize(new n());
avatar.scale.multiplyScalar(2.52/Math.max(size.y,.001));avatar.updateMatrixWorld(true);
const fitted=new dg().setFromObject(avatar),center=fitted.getCenter(new n());avatar.position.set(-center.x,-fitted.min.y,-center.z);
avatar.updateMatrixWorld(true);avatarAccessories(avatar,skin);person.add(avatar);
person.userData.avatar={avatar,mixer,actions,active:first,activeName:'idle'};
Ek(person,false);if(person.userData.ridingMotorcycle)as(person,true);
}).catch(error=>console.warn('Could not load the detailed player model; keeping the rounded character.',error));
person.userData.avatarLoading=promise;
promise.finally(()=>{delete person.userData.avatarLoading});return promise;
}
function Dk(person,dt,motion=0,grounded=true){const state=person.userData.avatar;if(!state)return;
const name=!grounded&&state.actions.jump?'jump':motion>.78?'run':motion>.05?'walk':'idle';
const next=state.actions[name]||state.actions.walk||state.actions.idle||state.actions.run;
if(next&&state.active!==next){state.active?.fadeOut(.16);next.reset().fadeIn(.16).play();state.active=next;state.activeName=name}
state.mixer.update(dt);
}
`;
  // Geometry alias is verified against the shipped constructor, not guessed.
  const box = code.match(/class (\w+) extends \w+\{constructor\(\w+=1,\w+=1,\w+=1,\w+=1,\w+=1,\w+=1\)\{super\(\),this\.type="BoxGeometry"/);
  if (!box) throw new Error('BoxGeometry constructor not found.');
  let patched=code.slice(0, begin) + replacement.replace(/\bLG\b/g, box[1]) + code.slice(end);
  const skinStart=patched.indexOf('setSkin(A){const g=this.object.position.clone()');
  const skinEnd=patched.indexOf('beginParachuteJump(A){',skinStart);
  if(skinStart<0||skinEnd<0)throw new Error('Unknown wardrobe controller.');
  patched=patched.slice(0,skinStart)+`setSkin(skin){
  const previous=this.object,parent=previous.parent||this.scene;
  const position=previous.position.clone(),rotation=previous.rotation.clone(),scale=previous.scale.clone();
  const visible=previous.visible,riding=previous.userData.ridingMotorcycle;
  const parachuteVisible=previous.userData.parachuteVisual?.visible;
  parent.remove(previous);
  previous.userData.avatar?.mixer.stopAllAction();
  previous.userData.avatar?.avatar.traverse(part=>{if(part.isMesh){part.geometry.dispose();const materials=Array.isArray(part.material)?part.material:[part.material];materials.forEach(material=>material.dispose())}});
  this.object=sQ(skin);this.object.userData.parachuteVisual=yt();
  this.object.userData.parachuteVisual.visible=!!parachuteVisible;
  this.object.userData.ridingMotorcycle=riding;
  this.object.add(this.object.userData.parachuteVisual);
  this.object.position.copy(position);this.object.rotation.copy(rotation);this.object.scale.copy(scale);this.object.visible=visible;
  parent.add(this.object);lt(this.object,skin);
  }`+patched.slice(skinEnd);
  return patched;
}

module.exports = { patchAvatar };
if (require.main === module) {
  const root=process.argv[2] || '.';
  const file=path.join(root,'assets/index-CaYBkeo1.js');
  fs.writeFileSync(path.join(root,'assets/index-avatar-20261007.js'),patchAvatar(fs.readFileSync(file,'utf8')));
  const html=path.join(root,'index.html');
  const original=fs.readFileSync(html,'utf8');
  if(!original.includes('./assets/index-CaYBkeo1.js')&&!original.includes('./assets/index-avatar-20261007.js'))throw new Error('Unknown entry page.');
  fs.writeFileSync(html,original.replace('./assets/index-CaYBkeo1.js','./assets/index-avatar-20261007.js'));
}

