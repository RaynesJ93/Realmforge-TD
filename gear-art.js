/* V178. Original modular low-poly meshes shared by item icons and equipped towers.
   Render once per loadout/frame; no 3D library, network art or save migrations. */
(function(){
'use strict';
const palettes={
 cloth:['#81755d','#a4977b','#4b4338'],leather:['#755034','#ac7c4e','#443021'],rust:['#796352','#af9874','#4a3c33'],
 bronze:['#a77340','#d1a46b','#64472d'],iron:['#78878f','#bec8c9','#424f58'],ash:['#564c51','#da8340','#302d36'],
 frost:['#83abb9','#d8eef0','#4e707e'],green:['#526f42','#9fc66d','#344c32'],crypt:['#55547b','#a1d9ee','#302f4c'],
 blue:['#4b6089','#90a4c5','#2d3e5d'],gold:['#b89a4b','#f1d585','#706037']};
function descriptor(name,cls){
 const db=typeof itemDB!=='undefined'?itemDB:{};const it=db[name]||{};
 const slot=it.slot||(/Robe|Tunic/.test(name)?'body':'weapon');
 let tier=/Crypt|Soulfrost/.test(name)?'crypt':/Frost|Glaci|Winter|Wyrm/.test(name)?'frost':/Ember|Cinder|Ash/.test(name)?'ash':/Bronze/.test(name)?'bronze':/Ironvale/.test(name)?'iron':/Verdant|Thorn|Root|Greenvale/.test(name)?'green':/Warlord/.test(name)?'iron':/Leather|Oak/.test(name)?'leather':/Apprentice|Cloth Hood|Cloth Robe|Cloth Boots|Cloth Gloves|Cloth Legwraps/.test(name)?'blue':/Rusty|Cracked|Old /.test(name)?'rust':'cloth';
 if(/Signet|Pendant/.test(name))tier='gold';
 let kind=slot;
 if(slot==='weapon')kind=/Bow|bow|Recurve/.test(name)?'bow':/Staff|Sceptre/.test(name)?'staff':'sword';
 if(slot==='head')kind=/Crown|Crest/.test(name)?'crown':/Hood|Cowl/.test(name)?'hood':'helm';
 if(slot==='body')kind=/Robe/.test(name)?'robe':/Armour/.test(name)?'armour':'tunic';
 if(slot==='offhand')kind=/Shield/.test(name)?'shield':/Arrow|Quiver/.test(name)?'quiver':/Spellbook/.test(name)?'book':/Orb/.test(name)?'orb':/Ward/.test(name)?'ward':'charm';
 return {name,slot,kind,tier,p:palettes[tier],rare:/Warlord|Emberfang|Verdant|Thornshot|Rootbinder|Wyrmfrost|Glacier|Wintercore|Crypt|Glacial|Soulfrost/.test(name),cls:it.class||cls};
}
function shade(hex,n){const a=hex.match(/\w\w/g).map(x=>parseInt(x,16));return '#'+a.map(v=>Math.max(0,Math.min(255,Math.round(v*n))).toString(16).padStart(2,'0')).join('')}
class Mesh{
 constructor(){this.faces=[];this.transforms=[]}
 point(p){for(let i=this.transforms.length-1;i>=0;i--)p=this.transforms[i](p);return p}
 face(points,color){this.faces.push({p:points.map(p=>this.point(p)),c:color})}
 group(fn,body){this.transforms.push(fn);body();this.transforms.pop()}
 at(x,y,z,body,angle=0){const c=Math.cos(angle),s=Math.sin(angle);this.group(p=>[x+p[0]*c-p[1]*s,y+p[0]*s+p[1]*c,z+p[2]],body)}
 box(x,y,z,w,h,d,color){const a=[x-w/2,y-h/2,z-d/2],b=[x+w/2,y+h/2,z+d/2];const p=[[a[0],a[1],a[2]],[b[0],a[1],a[2]],[b[0],b[1],a[2]],[a[0],b[1],a[2]],[a[0],a[1],b[2]],[b[0],a[1],b[2]],[b[0],b[1],b[2]],[a[0],b[1],b[2]]];[[[0,1,2,3],.65],[[4,5,6,7],1],[[0,4,7,3],.76],[[1,5,6,2],.87],[[3,2,6,7],1.2],[[0,1,5,4],.6]].forEach(([f,s])=>this.face(f.map(i=>p[i]),shade(color,s)))}
 cone(x,y,z,rx,rz,h,top,color,n=6){const a=[],b=[];for(let i=0;i<n;i++){const t=i/n*Math.PI*2+Math.PI/6;a.push([x+Math.cos(t)*rx,y,z+Math.sin(t)*rz]);b.push([x+Math.cos(t)*rx*top,y+h,z+Math.sin(t)*rz*top]);}for(let i=0;i<n;i++)this.face([a[i],a[(i+1)%n],b[(i+1)%n],b[i]],shade(color,.72+(i%3)*.16));this.face(b,shade(color,1.18));this.face(a,shade(color,.6))}
 beam(a,b,r,color){const d=b.map((v,i)=>v-a[i]),len=Math.hypot(...d),u=d.map(v=>v/len);let side=Math.abs(u[1])<.9?[0,1,0]:[1,0,0];const cross=(x,y)=>[x[1]*y[2]-x[2]*y[1],x[2]*y[0]-x[0]*y[2],x[0]*y[1]-x[1]*y[0]];let v=cross(u,side),vl=Math.hypot(...v);v=v.map(x=>x/vl);const w=cross(u,v);this.group(p=>a.map((x,i)=>x+v[i]*p[0]+u[i]*p[1]+w[i]*p[2]),()=>this.cone(0,0,0,r,r,len,1,color,5))}
}
function crystal(m,x,y,z,size,color){m.cone(x,y-size*.4,z,size*.42,size*.34,size*.55,1,color,5);m.cone(x,y+size*.15,z,size*.42,size*.34,size*.8,0,color,5)}
function weapon(m,d){const [c,hi,dark]=d.p;
 if(d.kind==='sword'){
  if(/Cleaver/.test(d.name)){
   m.cone(0,-.30,0,.075,.065,.43,1,'#68372d',6);m.cone(0,-.39,0,.10,.085,.10,.8,'#4f5358');
   m.box(0,.065,0,.36,.09,.15,'#55565a');
   const outline=[[-.19,.12,.025],[.22,.12,.025],[.34,1.10,.025],[.14,1.31,.025],[-.25,1.22,.025]];
   m.face(outline,'#606165');m.face([[-.19,.12,.04],[-.12,.19,.07],[-.17,1.16,.07],[-.25,1.22,.04]],'#bbc1c3');
   m.face([[-.25,1.22,.04],[-.17,1.16,.07],[.13,1.22,.07],[.14,1.31,.04]],'#979fa4');return;
  }

  const dagger=/Dagger/.test(d.name),great=/Greatsword/.test(d.name),cleaver=/Cleaver/.test(d.name),len=dagger?.65:great?1.7:1.22,w=cleaver?.24:great?.17:.115;
  m.cone(0,-.26,0,.065,.06,.34,1,'#65442c',6);m.box(0,.05,0,.42,.075,.13,d.rare?hi:dark);m.cone(0,-.35,0,.095,.09,.1,.8,c);
  m.face([[-w,.12,0],[0,.12,.065],[0,len+.3,0],[-w,len*.83+.15,0]],hi);
  m.face([[0,.12,.065],[w,.12,0],[w,len*.83+.15,0],[0,len+.3,0]],c);
  m.face([[-w,.12,0],[w,.12,0],[w,len*.83+.15,0],[0,len+.3,0],[-w,len*.83+.15,0]],dark);
  if(d.rare){crystal(m,0,.055,.08,.16,/Ember/.test(d.name)?'#ed934c':hi);if(/Wyrm|Crypt/.test(d.name))for(let i=0;i<3;i++)m.face([[w,.4+i*.25,0],[w+.11,.51+i*.25,0],[w,.58+i*.25,0]],hi);}
 }else if(d.kind==='bow'){
  const len=/Longbow|Recurve|Glaci/.test(d.name)?1.05:/Oakheart|Frostpine/.test(d.name)?.92:/Old/.test(d.name)?.7:.8,curve=/Recurve|Thorn/.test(d.name)?.47:.32;
  const pts=[[-.08,-len,0],[curve*.65,-len*.73,0],[curve,-len*.32,0],[curve,0,0],[curve,len*.32,0],[curve*.65,len*.73,0],[-.08,len,0]];
  for(let i=1;i<pts.length;i++)m.beam(pts[i-1],pts[i],.043,c);
  m.beam(pts[0],pts[6],.008,'#d5cbb3');m.box(curve,0,0,.11,.26,.12,dark);
  if(d.rare){for(const y of [-len*.65,len*.65])crystal(m,curve*.8,y,0,.15,hi);}
 }else{
  const plain=/Cracked/.test(d.name);m.cone(0,-.83,0,.053,.055,2,1,/Frost|Crypt/.test(d.name)?dark:'#725036',6);
  if(plain){m.beam([0,1.1,0],[.11,1.35,0],.06,'#886b44');}else{m.cone(0,1.13,0,.13,.11,.17,.7,c);crystal(m,0,1.48,0,d.rare?.5:.32,hi);if(d.rare)for(const x of [-.19,.19])m.beam([0,1.18,0],[x,1.48,0],.045,c);}
 }
}
function legacyHeadwear(m,d,worn=false){const [c,hi,dark]=d.p;
 if(d.kind==='hood'){
  m.cone(0,-.26,0,.32,.29,.54,.75,c);m.box(0,-.06,.258,.36,.3,.05,worn?'#b79a6c':dark);if(worn)for(const x of [-.10,.10])m.box(x,-.01,.29,.05,.035,.02,'#30291f');
  if(d.cls==='mage'){m.cone(0,.17,0,.45,.35,.06,.94,c);m.cone(0,.23,0,.29,.24,.5,.04,c);}
 }else if(d.kind==='crown'){
  m.cone(0,-.05,0,.34,.29,.16,1,c,8);for(let i=0;i<7;i++){const a=i*Math.PI*2/7; m.cone(Math.cos(a)*.3,.09,Math.sin(a)*.255,.073,.063,.2+(i%2)*.07,0,hi,4);}crystal(m,0,.04,.31,.12,hi);
 }else{
  m.cone(0,-.21,0,.33,.3,.5,.75,c);m.face([[-.21,.04,.305],[.21,.04,.305],[.19,-.23,.305],[-.19,-.23,.305]],'#b3976c');m.box(0,-.05,.32,.065,.37,.05,hi);if(worn)for(const x of [-.10,.10])m.box(x,-.01,.335,.05,.035,.02,'#30291f');
  m.box(-.235,-.15,.23,.09,.25,.14,c);m.box(.235,-.15,.23,.09,.25,.14,c);
  if(/Ashguard/.test(d.name))m.cone(0,.23,0,.08,.17,.34,.3,hi,4);
 }
}
// Sculpted helmet shells leave a dark visor instead of a mannequin face.
function headwear(m,d,worn=false){const [c,hi,dark]=d.p;
 if(d.kind==='crown'){legacyHeadwear(m,d,worn);return;}
 if(d.kind==='hood'){
  m.cone(0,-.29,-.035,.39,.32,.56,.77,c,8);
  m.face([[-.25,.16,.28],[0,.29,.30],[.25,.16,.28],[.26,-.25,.30],[0,-.30,.33],[-.26,-.25,.30]],dark);
  if(worn){m.face([[-.15,.08,.34],[.15,.08,.34],[.13,-.19,.34],[0,-.25,.35],[-.13,-.19,.34]],'#bc936b');for(const x of [-.085,.085])m.box(x,.01,.355,.042,.023,.012,'#30291f');}
  m.face([[-.3,.17,.30],[0,.35,.14],[.3,.17,.30],[.23,.12,.34],[0,.26,.29],[-.23,.12,.34]],hi);
  return;
 }
 m.cone(0,-.3,-.02,.38,.32,.56,.85,c,8);
 m.cone(0,.26,-.02,.32,.275,.18,.35,c,8);
 m.face([[-.31,.09,.295],[0,.135,.35],[.31,.09,.295],[.27,-.06,.32],[0,-.105,.37],[-.27,-.06,.32]],'#171b1c');
 m.face([[-.31,.07,.315],[-.19,-.07,.365],[-.17,-.33,.32],[-.34,-.36,.25]],c);
 m.face([[.31,.07,.315],[.19,-.07,.365],[.17,-.33,.32],[.34,-.36,.25]],dark);
 m.face([[-.19,-.08,.365],[0,-.105,.385],[0,-.35,.35],[-.17,-.33,.32]],hi);
 m.face([[.19,-.08,.365],[0,-.105,.385],[0,-.35,.35],[.17,-.33,.32]],c);
 if(/Ashguard/.test(d.name))m.cone(0,.38,-.06,.09,.23,.27,.7,'#984d30',4);
}
function torso(m,d){const [c,hi,dark]=d.p;
 m.cone(0,-.45,0,.45,.25,.82,1.15,c,6);
 if(d.kind==='armour'){
  m.face([[-.37,.3,.27],[0,.39,.33],[.37,.3,.27],[.3,-.3,.26],[0,-.41,.34],[-.3,-.3,.26]],c);
  m.face([[-.37,.3,.27],[0,.39,.33],[0,-.41,.34],[-.3,-.3,.26]],hi);
  for(const x of [-.6,.6])m.cone(x,.05,0,.24,.26,.28,.7,c,5);
 }else if(d.kind==='robe')m.cone(0,-1.4,0,.7,.34,1.1,.63,c,7);
 m.box(0,-.36,.02,.87,.105,.54,dark);m.box(0,-.36,.31,.13,.13,.055,hi);if(/Apprentice|Ashweave|Frostweave/.test(d.name)){m.box(0,.03,.27,.055,.57,.03,hi);}
}
function accessory(m,d){const [c,hi,dark]=d.p;
 if(d.kind==='shield'){
  const edge=[[-.39,.47,0],[0,.57,0],[.39,.47,0],[.32,-.20,0],[0,-.57,0],[-.32,-.20,0]];
  m.face(edge,dark);const rim=edge.map(p=>[p[0]*.88,p[1]*.88,.05]);
  for(let i=0;i<6;i++)m.face([edge[i],edge[(i+1)%6],rim[(i+1)%6],rim[i]],hi);
  for(let i=0;i<6;i++)m.face([rim[i],rim[(i+1)%6],[0,.04,.19]],i<3?c:shade(c,.8));
 }else if(d.kind==='book'){
  m.box(0,0,0,.48,.64,.15,dark);m.box(0,0,.08,.42,.56,.045,'#c1b48f');m.box(0,0,.12,.49,.65,.05,c);crystal(m,0,.03,.18,.17,hi);
 }else if(d.kind==='orb'){crystal(m,0,.08,0,.54,hi);m.cone(0,-.2,0,.17,.15,.13,.75,c);}
 else if(d.kind==='cape') {m.face([[-.43,.6,0],[.43,.6,0],[.65,-.9,.15],[0,-1.1,.22],[-.65,-.9,.15]],c);m.face([[-.43,.6,0],[0,.55,.03],[0,-1.1,.22],[-.65,-.9,.15]],hi);}
 else if(d.kind==='ring'){for(let i=0;i<10;i++){const a=i*Math.PI/5,b=(i+1)*Math.PI/5;m.beam([Math.cos(a)*.2,Math.sin(a)*.2,0],[Math.cos(b)*.2,Math.sin(b)*.2,0],.055,c);}crystal(m,0,.21,0,.19,hi);}
 else if(d.kind==='amulet'||d.kind==='charm'){m.beam([-.2,.45,0],[0,0,0],.015,c);m.beam([.2,.45,0],[0,0,0],.015,c);crystal(m,0,0,0,.35,hi);}
 else if(d.kind==='quiver'){m.cone(0,-.4,0,.15,.12,.65,1,'#725437');for(const x of [-.08,0,.08]){m.beam([x,-.1,0],[x,.57,.04],.013,'#b89e6d');m.face([[x,.57,0],[x-.06,.43,0],[x+.06,.43,0]],hi);}}
 else {m.face([[-.3,.4,0],[.3,.4,0],[.25,-.1,0],[0,-.4,0],[-.25,-.1,0]],c);m.box(0,.07,.02,.09,.55,.08,hi);}
}
function itemMesh(name,cls){const m=new Mesh(),d=descriptor(name,cls);if(['sword','bow','staff'].includes(d.kind))weapon(m,d);else if(['helm','hood','crown'].includes(d.kind))headwear(m,d);else if(['tunic','robe','armour'].includes(d.kind))torso(m,d);else accessory(m,d);return m}
function characterMesh(cls,eq,phase=0){
 const m=new Mesh(),body=descriptor(eq.body||'Cloth Tunic',cls),skin='#bb9067',pants='#484538';
 const equipped=slot=>eq[slot]&&eq[slot]!=='None';
 const leg=equipped('legs')?descriptor(eq.legs,cls):null,boot=equipped('boots')?descriptor(eq.boots,cls):null,glove=equipped('gloves')?descriptor(eq.gloves,cls):null;
 const plate=body.kind==='armour',robe=body.kind==='robe',swing=Math.sin(phase*Math.PI);
 m.cone(0,-.055,0,.89,.57,.10,1,'#686b5d',10);
 if(equipped('cape'))m.group(p=>[p[0]*1.1,1.46+p[1],-.31+p[2]*.25],()=>accessory(m,descriptor(eq.cape,cls)));
 // Broad hips join bent thighs and calves; no exposed gaps between equipment slots.
 m.cone(0,.99,0,.37,.23,.35,1.1,leg?leg.p[0]:pants,8);
 for(const side of [-1,1]){
  const x=side*.25,z=side===-1?.06:-.03,col=leg?leg.p[0]:pants;
  m.beam([x,1.14,z],[x*1.14,.69,z+.045],.215,col);
  m.beam([x*1.14,.69,z+.045],[x*1.25,.20,z],.173,col);
  if(leg&&/Platelegs/.test(leg.name)){
   m.cone(x*1.14,.57,z+.105,.205,.19,.24,.85,leg.p[1],6);
   m.face([[x-.13,.54,z+.185],[x+.15,.54,z+.185],[x+.13,.22,z+.17],[x-.12,.22,z+.17]],leg.p[0]);
  }
  const bc=boot?boot.p[0]:'#57412d';
  m.cone(x*1.25,.09,z+.10,.225,.32,.21,.84,bc,6);
  m.cone(x*1.25,.23,z,.183,.18,.17,1.07,bc,6);
 }
 // Tailored body shape: wide shoulders, tapered waist, overlapping fauld and belt.
 m.cone(0,1.19,0,.37,.245,.72,1.40,body.p[0],8);
 if(plate){
  m.face([[-.43,1.83,.24],[0,1.97,.31],[.43,1.83,.24],[.31,1.28,.25],[0,1.19,.31],[-.31,1.28,.25]],body.p[0]);
  m.face([[-.43,1.83,.245],[0,1.97,.315],[0,1.19,.315],[-.31,1.28,.255]],shade(body.p[0],1.16));
  m.cone(0,1.00,0,.45,.28,.27,.83,body.p[0],8);
 }else if(robe){m.cone(0,.34,0,.52,.32,.99,.72,body.p[0],8);m.face([[-.055,1.77,.32],[.055,1.77,.32],[.09,.35,.325],[-.09,.35,.325]],body.p[1]);}
 m.box(0,1.20,.025,.77,.115,.54,'#42372c');m.box(0,1.20,.312,.14,.14,.04,plate?body.p[1]:'#b5a27d');
 m.cone(0,1.89,0,.16,.14,.20,1,skin,6);
 m.cone(0,2.02,0,.285,.25,.47,.92,skin,8);
 m.box(0,2.19,.25,.09,.12,.07,skin);for(const x of [-.11,.11])m.box(x,2.28,.245,.045,.025,.018,'#30291f');
 m.cone(0,2.40,-.015,.29,.255,.15,.85,'#513b28',8);
 if(equipped('head'))m.at(0,2.32,0,()=>headwear(m,descriptor(eq.head,cls),true));
 const left=cls==='ranger'?[-.24-swing*.18,1.43,.47]:[-.70+swing*(cls==='warrior'?.36:0),1.27+swing*(cls==='warrior'?.35:.06),.28];
 const right=[.70,1.30+swing*(cls==='ranger'?.15:0),.28];
 for(const [side,hand] of [[-1,left],[1,right]]){
  const elbow=[side*.65,1.49,cls==='ranger'&&side===-1?.28:.10];m.beam([side*.46,1.83,0],elbow,.20,body.p[0]);m.beam(elbow,hand,.155,plate?body.p[0]:skin);
  if(plate)m.cone(side*.51,1.68,0,.28,.29,.31,.67,body.p[0],6);
  else m.cone(side*.50,1.64,0,.23,.235,.23,.9,body.p[0],6);
  m.cone(hand[0],hand[1]-.105,hand[2],.135,.13,.22,.9,glove?glove.p[0]:skin,6);
 }
 const wd=descriptor(eq.weapon||({warrior:'Rusty Sword',ranger:'Old Shortbow',mage:'Cracked Staff'})[cls],cls);
 if(wd.kind==='bow'){
  m.at(.71,1.38,.42,()=>weapon(m,wd),-.12+swing*.09);
  // A nocked arrow and drawing hand give the bow a readable firing pose.
  m.beam([-.28-swing*.14,1.40,.45],[.91,1.40,.45],.012,'#c4ae7d');
 }else if(wd.kind==='staff')m.at(-.72,1.09,.34,()=>weapon(m,wd),-.10+swing*.10);
 else m.at(left[0],left[1]+.13,.40,()=>weapon(m,wd),.24-swing*1.5);
 if(equipped('offhand')){const d=descriptor(eq.offhand,cls);if(d.kind==='quiver')m.at(-.47,1.85,-.26,()=>accessory(m,d),-.28);else m.at(.69,1.29,.49,()=>accessory(m,d),-.05);}
 if(equipped('amulet'))m.group(p=>[p[0]*.40,1.65+p[1]*.40,.33+p[2]*.40],()=>accessory(m,descriptor(eq.amulet,cls)));
 if(equipped('ring'))m.group(p=>[right[0]+p[0]*.19,right[1]+p[1]*.19,.43+p[2]*.19],()=>accessory(m,descriptor(eq.ring,cls)));
 return m;
}

function render(mesh,width,height,character=false){
 const canvas=document.createElement('canvas');canvas.width=width;canvas.height=height;const c=canvas.getContext('2d');
 const project=p=>[p[0]*.91+p[2]*.42,-p[1]*.94+p[2]*.29-p[0]*.10];
 const all=mesh.faces.flatMap(f=>f.p.map(project));const minX=character?-1.65:Math.min(...all.map(p=>p[0])),maxX=character?1.65:Math.max(...all.map(p=>p[0])),minY=character?-3.0:Math.min(...all.map(p=>p[1])),maxY=character?.38:Math.max(...all.map(p=>p[1]));
 const scale=Math.min((width-12)/(maxX-minX),(height-12)/(maxY-minY)),ox=width/2-(minX+maxX)*scale/2,oy=height/2-(minY+maxY)*scale/2;
 mesh.faces.map(f=>({...f,depth:f.p.reduce((n,p)=>n+p[2]*.85-p[0]*.4+p[1]*.32,0)/f.p.length})).sort((a,b)=>a.depth-b.depth).forEach(f=>{c.fillStyle=f.c;c.beginPath();f.p.map(project).forEach((p,i)=>i?c.lineTo(ox+p[0]*scale,oy+p[1]*scale):c.moveTo(ox+p[0]*scale,oy+p[1]*scale));c.closePath();c.fill();});
 return canvas;
}
// Approved illustrated equipment icons; unillustrated items retain their existing art.
const equipmentArtwork={
  "Rusty Sword": "assets/equipment/rusty-sword.webp",
  "Bronze Sword": "assets/equipment/bronze-sword.webp",
  "Bronze Dagger": "assets/equipment/bronze-dagger.webp",
  "Warlord Cleaver": "assets/equipment/warlord-cleaver.webp",
  "Ironvale Sword": "assets/equipment/ironvale-sword.webp",
  "Emberfang Blade": "assets/equipment/emberfang-blade.webp",
  "Verdant Edge": "assets/equipment/verdant-edge.webp",
  "Frostsilver Sword": "assets/equipment/frostsilver-sword.webp",
  "Wyrmfrost Blade": "assets/equipment/wyrmfrost-blade.webp",
  "Cryptfang Greatsword": "assets/equipment/cryptfang-greatsword.webp",
  "Bronze Helm": "assets/equipment/bronze-helm.webp",
  "Warlord Crest": "assets/equipment/warlord-crest.webp",
  "Ironvale Helm": "assets/equipment/ironvale-helm.webp",
  "Ashguard Helm": "assets/equipment/ashguard-helm.webp",
  "Frostsilver Helm": "assets/equipment/frostsilver-helm.webp",
  "Wyrmscale Crown": "assets/equipment/wyrmscale-crown.webp",
  "Bronze Armour": "assets/equipment/bronze-armour.webp",
  "Ironvale Armour": "assets/equipment/ironvale-armour.webp",
  "Frostsilver Armour": "assets/equipment/frostsilver-armour.webp",
  "Old Shortbow": "assets/equipment/old-shortbow.webp",
  "Oak Shortbow": "assets/equipment/oak-shortbow.webp",
  "Cinderbow": "assets/equipment/cinderbow.webp",
  "Oakheart Bow": "assets/equipment/oakheart-bow.webp",
  "Ironvale Longbow": "assets/equipment/ironvale-longbow.webp",
  "Greenvale Shortbow": "assets/equipment/greenvale-shortbow.webp",
  "Thornshot Bow": "assets/equipment/thornshot-bow.webp",
  "Frostpine Bow": "assets/equipment/frostpine-bow.webp",
  "Glacier Bow": "assets/equipment/glacier-bow.webp",
  "Glacial Recurve": "assets/equipment/glacial-recurve.webp",
  "Leather Hood": "assets/equipment/leather-hood.webp",
  "Ashweave Hood": "assets/equipment/ashweave-hood.webp",
  "Frostweave Hood": "assets/equipment/frostweave-hood.webp",
  "Cracked Staff": "assets/equipment/cracked-staff.webp",
  "Apprentice Staff": "assets/equipment/apprentice-staff.webp",
  "Ember Staff": "assets/equipment/ember-staff.webp",
  "Oakheart Staff": "assets/equipment/oakheart-staff.webp",
  "Ironvale Focus Staff": "assets/equipment/ironvale-focus-staff.webp",
  "Rootbinder Staff": "assets/equipment/rootbinder-staff.webp",
  "Frostpine Staff": "assets/equipment/frostpine-staff.webp",
  "Wintercore Staff": "assets/equipment/wintercore-staff.webp",
  "Soulfrost Sceptre": "assets/equipment/soulfrost-sceptre.webp",
  "Cloth Hood": "assets/equipment/cloth-hood.webp",
  "Ashweave Cowl": "assets/equipment/ashweave-cowl.webp",
  "Apprentice Robe": "assets/equipment/apprentice-robe.webp",
  "Ashweave Robe": "assets/equipment/ashweave-robe.webp",
  "Frostweave Robe": "assets/equipment/frostweave-robe.webp",
  "Leather Body": "assets/equipment/leather-body.webp",
  "Ashweave Body": "assets/equipment/ashweave-body.webp",
  "Crown of the Crypt": "assets/equipment/crown-of-the-crypt.webp",
  "Training Arrow Bundle": "assets/equipment/training-arrow-bundle.webp",
  "Greenvale Charm": "assets/equipment/greenvale-charm.webp",
  "Scrap Ward": "assets/equipment/scrap-ward.webp",
  "Greenvale Signet": "assets/equipment/greenvale-signet.webp",
  "Ashen Pendant": "assets/equipment/ashen-pendant.webp",
  "Frostbound Cape": "assets/equipment/frostbound-cape.webp",
  "Bronze Shield": "assets/equipment/bronze-shield.webp",
  "Ironvale Shield": "assets/equipment/ironvale-shield.webp",
  "Frostsilver Shield": "assets/equipment/frostsilver-shield.webp",
  "Greenvale Quiver": "assets/equipment/greenvale-quiver.webp",
  "Ironvale Quiver": "assets/equipment/ironvale-quiver.webp",
  "Frostpine Quiver": "assets/equipment/frostpine-quiver.webp",
  "Apprentice Spellbook": "assets/equipment/apprentice-spellbook.webp",
  "Ashen Spellbook": "assets/equipment/ashen-spellbook.webp",
  "Wintercore Orb": "assets/equipment/wintercore-orb.webp",
  "Bronze Boots": "assets/equipment/bronze-boots.webp",
  "Bronze Gauntlets": "assets/equipment/bronze-gauntlets.webp",
  "Ironvale Boots": "assets/equipment/ironvale-boots.webp",
  "Ironvale Gauntlets": "assets/equipment/ironvale-gauntlets.webp",
  "Frostsilver Boots": "assets/equipment/frostsilver-boots.webp",
  "Frostsilver Gauntlets": "assets/equipment/frostsilver-gauntlets.webp",
  "Leather Boots": "assets/equipment/leather-boots.webp",
  "Leather Gloves": "assets/equipment/leather-gloves.webp",
  "Ashweave Boots": "assets/equipment/ashweave-boots.webp",
  "Ashweave Gloves": "assets/equipment/ashweave-gloves.webp",
  "Frostweave Boots": "assets/equipment/frostweave-boots.webp",
  "Frostweave Gloves": "assets/equipment/frostweave-gloves.webp",
  "Cloth Boots": "assets/equipment/cloth-boots.webp",
  "Cloth Gloves": "assets/equipment/cloth-gloves.webp",
  "Ashweave Slippers": "assets/equipment/ashweave-slippers.webp",
  "Ashweave Handwraps": "assets/equipment/ashweave-handwraps.webp",
  "Frostweave Slippers": "assets/equipment/frostweave-slippers.webp",
  "Frostweave Handwraps": "assets/equipment/frostweave-handwraps.webp",
  "Bronze Platelegs": "assets/equipment/bronze-platelegs.webp",
  "Ironvale Platelegs": "assets/equipment/ironvale-platelegs.webp",
  "Frostsilver Platelegs": "assets/equipment/frostsilver-platelegs.webp",
  "Leather Chaps": "assets/equipment/leather-chaps.webp",
  "Ashweave Chaps": "assets/equipment/ashweave-chaps.webp",
  "Frostweave Chaps": "assets/equipment/frostweave-chaps.webp",
  "Cloth Legwraps": "assets/equipment/cloth-legwraps.webp",
  "Ashweave Legwraps": "assets/equipment/ashweave-legwraps.webp",
  "Frostweave Legwraps": "assets/equipment/frostweave-legwraps.webp",
  "Cloth Tunic": "assets/equipment/cloth-tunic.webp",
  "Cloth Robe": "assets/equipment/cloth-robe.webp"
};
Object.assign(equipmentArtwork,{"Bogiron Sword":"assets/equipment/bogiron-sword-v240.webp","Bogiron Helm":"assets/equipment/bogiron-helm-v240.webp","Bogiron Armour":"assets/equipment/bogiron-armour-v240.webp","Rotwood Bow":"assets/equipment/rotwood-bow-v240.webp","Mireweave Hood":"assets/equipment/mireweave-hood-v240.webp","Mireweave Body":"assets/equipment/mireweave-body-v240.webp","Rotwood Staff":"assets/equipment/rotwood-staff-v240.webp","Mireweave Cowl":"assets/equipment/mireweave-cowl-v240.webp","Mireweave Robe":"assets/equipment/mireweave-robe-v240.webp","Mirefang Greatblade":"assets/equipment/mirefang-greatblade-v240.webp","Venomwood Bow":"assets/equipment/venomwood-bow-v240.webp","Plaguebloom Staff":"assets/equipment/plaguebloom-staff-v240.webp","Mire Queen Crown":"assets/equipment/mire-queen-crown-v240.webp","Colossus Cleaver":"assets/equipment/colossus-cleaver-v240.webp","Drowned Recurve":"assets/equipment/drowned-recurve-v240.webp","Temple Hexstaff":"assets/equipment/temple-hexstaff-v240.webp","Bogheart Talisman":"assets/equipment/bogheart-talisman-v240.webp","Copper Band":"assets/equipment/copper-band-v240.webp","Ironvale Signet":"assets/equipment/ironvale-signet-v240.webp","Frostsilver Ring":"assets/equipment/frostsilver-ring-v240.webp","Greenvale Amulet":"assets/equipment/greenvale-amulet-v240.webp","Ashen Amulet":"assets/equipment/ashen-amulet-v240.webp","Frostheart Amulet":"assets/equipment/frostheart-amulet-v240.webp","Greenvale Cloak":"assets/equipment/greenvale-cloak-v240.webp","Ashen Mantle":"assets/equipment/ashen-mantle-v240.webp","Frostmere Cape":"assets/equipment/frostmere-cape-v240.webp","Hunter Ring":"assets/equipment/hunter-ring-v240.webp","Hunter Gloves":"assets/equipment/hunter-gloves-v240.webp","Master Hunter Amulet":"assets/equipment/master-hunter-amulet-v240.webp","Hunter Cape":"assets/equipment/hunter-cape-v240.webp","Master Hunter Armour":"assets/equipment/master-hunter-armour-v240.webp"});
Object.assign(equipmentArtwork,{"Infernal Greatblade":"assets/equipment/infernal-greatblade-v241.webp","Ashfall Recurve":"assets/equipment/ashfall-recurve-v241.webp","Cinderheart Staff":"assets/equipment/cinderheart-staff-v241.webp","Infernal Warden Mask":"assets/equipment/infernal-warden-mask-v241.webp"});
const icons=new Map(),towerCache=new Map();
function icon(name,cls){if(Object.hasOwn(equipmentArtwork,name))return equipmentArtwork[name];const key=name+'|'+(cls||'');if(!icons.has(key))icons.set(key,render(itemMesh(name,cls),96,96).toDataURL('image/png'));return icons.get(key)}
function signature(cls){return JSON.stringify(save.equipment[cls]||{})}
function tower(cls,phase=0){const key=signature(cls);let entry=towerCache.get(cls);if(!entry||entry.key!==key){entry={key,frames:new Map()};towerCache.set(cls,entry)}const frame=Math.max(0,Math.min(8,Math.round(phase*8)));if(!entry.frames.has(frame))entry.frames.set(frame,render(characterMesh(cls,save.equipment[cls]||{},frame/8),256,320,true));return entry.frames.get(frame)}
function portrait(cls){tower(cls);const entry=towerCache.get(cls);if(!entry.url)entry.url=entry.frames.get(0).toDataURL('image/png');return entry.url}
function drawTower(t){const a=t.attackVisual,phase=a?1-a.life/a.duration:0;const art=tower(t.type,phase);const h=103,w=h*art.width/art.height;ctx.drawImage(art,Math.max(0,Math.min(canvas.width-w,t.x-w/2)),Math.max(0,Math.min(canvas.height-h,t.y+17-h)),w,h)}
function decorate(){
 // Text labels and all existing controls remain authoritative and accessible.
 for(const root of ['bankGrid','craftGrid','artisanGrid','collectionGrid','hunterShop','generalStoreGrid','blacksmithStoreGrid','merchantStoreGrid','enhancementGrid']){
  const el=document.getElementById(root);if(!el)continue;
  el.querySelectorAll('.card').forEach(card=>{const b=card.querySelector('b');if(!b)return;let name=b.textContent.replace(/ \+\d+$/,'');if(root==='hunterShop'){const reward=hunterShop.find(x=>x.name===name);if(reward&&reward.item)name=reward.item;}const resource=skillingArtwork[name];if((!itemDB[name]&&!resource)||card.querySelector('.gearIcon')||card.querySelector('.menuItemIcon')||card.querySelector('img'))return;const im=document.createElement('img');im.className='gearIcon';im.width=48;im.height=48;im.alt='';im.src=resource||icon(name);card.insertBefore(im,card.firstChild);});
 }
 for(const root of ['craftingGrid','fletchingGrid']){
  const el=document.getElementById(root);if(!el)continue;
  el.querySelectorAll('.card > b').forEach(label=>{const name=label.textContent;if(!itemDB[name]||label.querySelector('.gearRecipeIcon'))return;const im=document.createElement('img');im.className='gearRecipeIcon';im.width=32;im.height=32;im.alt='';im.src=icon(name);label.insertBefore(im,label.firstChild);});
 }
 const grid=document.getElementById('equipmentGrid');
 if(grid)Array.from(grid.children).forEach((card,i)=>{
  const cls=['warrior','ranger','mage'][i];if(!cls)return;
  const preview=document.createElement('img');preview.className='equippedPreview';preview.alt=cls+' wearing currently equipped items';preview.width=160;preview.height=200;preview.src=portrait(cls);card.insertBefore(preview,card.children[1]||null);
  card.querySelectorAll(':scope > div').forEach(row=>{const label=row.querySelector('b');if(!label)return;const slot=label.textContent.replace(':','').trim(),name=save.equipment[cls][slot];row.classList.add('equipmentSlot');if(!name||name==='None')return;const img=document.createElement('img');img.className='gearSlotIcon';img.width=32;img.height=32;img.alt='';img.src=icon(name,cls);row.insertBefore(img,row.firstChild);});
 });
 document.querySelectorAll('.tower[data-type]').forEach(button=>{const cls=button.dataset.type,img=button.querySelector('img');if(img){const key=signature(cls);if(img.dataset.gear!==key){img.src=portrait(cls);img.dataset.gear=key;}}});
}
window.RealmforgeGear={descriptor,itemMesh,characterMesh,render,icon,tower,portrait,drawTower,decorate};
})();



