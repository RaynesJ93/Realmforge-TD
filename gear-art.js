/* V178. Original modular low-poly meshes shared by item icons and equipped towers.
   Render once per loadout/frame; no 3D library, network art or save migrations. */
(function(){
'use strict';
const palettes={
 cloth:['#81755d','#a4977b','#4b4338'],leather:['#526b39','#829153','#393f27'],rust:['#796352','#af9874','#4a3c33'],
 bronze:['#a77340','#d1a46b','#64472d'],iron:['#78878f','#bec8c9','#424f58'],ash:['#564c51','#da8340','#302d36'],
 frost:['#83abb9','#d8eef0','#4e707e'],green:['#526f42','#9fc66d','#344c32'],crypt:['#55547b','#a1d9ee','#302f4c'],
 blue:['#354fa1','#839bd1','#283660'],gold:['#b89a4b','#f1d585','#706037']};
function descriptor(name,cls){
 const db=typeof itemDB!=='undefined'?itemDB:{};const it=db[name]||{};
 const slot=it.slot||(/Robe|Tunic/.test(name)?'body':'weapon');
 let tier=/Crypt|Soulfrost/.test(name)?'crypt':/Frost|Glaci|Winter|Wyrm/.test(name)?'frost':/Ember|Cinder|Ash/.test(name)?'ash':/Bronze/.test(name)?'bronze':/Ironvale/.test(name)?'iron':/Verdant|Thorn|Root|Greenvale/.test(name)?'green':/Warlord/.test(name)?'iron':/Leather|Oak/.test(name)?'leather':/Apprentice|Cloth Hood|Cloth Robe/.test(name)?'blue':/Rusty|Cracked|Old /.test(name)?'rust':'cloth';
 if(/Signet|Pendant/.test(name))tier='gold';
 let kind=slot;
 if(slot==='weapon')kind=/Bow|bow|Recurve/.test(name)?'bow':/Staff|Sceptre/.test(name)?'staff':'sword';
 if(slot==='head')kind=/Crown|Crest/.test(name)?'crown':/Hood|Cowl/.test(name)?'hood':'helm';
 if(slot==='body')kind=/Robe/.test(name)?'robe':/Armour/.test(name)?'armour':'tunic';
 if(slot==='offhand')kind=/Arrow/.test(name)?'quiver':/Ward/.test(name)?'ward':'charm';
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
function headwear(m,d,worn=false){const [c,hi,dark]=d.p;
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
 if(d.kind==='cape') {m.face([[-.43,.6,0],[.43,.6,0],[.65,-.9,.15],[0,-1.1,.22],[-.65,-.9,.15]],c);m.face([[-.43,.6,0],[0,.55,.03],[0,-1.1,.22],[-.65,-.9,.15]],hi);}
 else if(d.kind==='ring'){for(let i=0;i<10;i++){const a=i*Math.PI/5,b=(i+1)*Math.PI/5;m.beam([Math.cos(a)*.2,Math.sin(a)*.2,0],[Math.cos(b)*.2,Math.sin(b)*.2,0],.055,c);}crystal(m,0,.21,0,.19,hi);}
 else if(d.kind==='amulet'||d.kind==='charm'){m.beam([-.2,.45,0],[0,0,0],.015,c);m.beam([.2,.45,0],[0,0,0],.015,c);crystal(m,0,0,0,.35,hi);}
 else if(d.kind==='quiver'){m.cone(0,-.4,0,.15,.12,.65,1,'#725437');for(const x of [-.08,0,.08]){m.beam([x,-.1,0],[x,.57,.04],.013,'#b89e6d');m.face([[x,.57,0],[x-.06,.43,0],[x+.06,.43,0]],hi);}}
 else {m.face([[-.3,.4,0],[.3,.4,0],[.25,-.1,0],[0,-.4,0],[-.25,-.1,0]],c);m.box(0,.07,.02,.09,.55,.08,hi);}
}
function itemMesh(name,cls){const m=new Mesh(),d=descriptor(name,cls);if(['sword','bow','staff'].includes(d.kind))weapon(m,d);else if(['helm','hood','crown'].includes(d.kind))headwear(m,d);else if(['tunic','robe','armour'].includes(d.kind))torso(m,d);else accessory(m,d);return m}
function characterMesh(cls,eq,phase){const m=new Mesh();const body=descriptor(eq.body||'Cloth Tunic',cls),skin='#b79a6c',pants='#514a3d';
 // Low stone placement pad; actual empty slots show plain clothing, not invented armour.
 m.cone(0,-.1,0,.94,.62,.13,1,'#7a7b67',10);
 if(eq.cape&&eq.cape!=='None')m.at(0,1.66,-.38,()=>accessory(m,descriptor(eq.cape,cls)));
 for(const s of [-1,1]){
  m.beam([s*.25,.2,.02],[s*.22,1.25,0],.155,eq.legs&&eq.legs!=='None'?descriptor(eq.legs,cls).p[0]:pants);
  m.box(s*.26,.13,.18,.32,.24,.5,eq.boots&&eq.boots!=='None'?descriptor(eq.boots,cls).p[0]:'#614b35');
 }
 m.at(0,1.92,0,()=>torso(m,body));
 m.cone(0,2.39,0,.125,.12,.23,1,skin);
 m.cone(0,2.61,0,.26,.23,.47,.92,skin,6);m.box(0,2.81,.249,.12,.15,.10,skin);
 for(const x of [-.12,.12])m.box(x,2.89,.23,.055,.035,.025,'#30291f');
 m.cone(0,2.99,-.015,.268,.236,.17,.8,'#5a4430');
 if(eq.head&&eq.head!=='None')m.at(0,2.96,0,()=>headwear(m,descriptor(eq.head,cls),true));
 // Hands remain fixed to weapon grips; attack phases articulate the weapon arm.
 const swing=cls==='warrior'?Math.sin(phase*Math.PI)*1.6:0;
 const lx=-.72+Math.sin(swing)*.25,ly=1.62+Math.sin(swing)*.27;
 for(const [s,hx,hy] of [[-1,lx,ly],[1,.72,1.63]]){
  m.beam([s*.54,2.19,0],[s*.69,1.92,.1],.16,body.p[0]);
  m.beam([s*.69,1.92,.1],[hx,hy,.23],.12,/Armour/.test(eq.body||'')?body.p[0]:skin);
  m.box(hx,hy,.24,.2,.22,.19,eq.gloves&&eq.gloves!=='None'?descriptor(eq.gloves,cls).p[0]:skin);
 }
 const wd=descriptor(eq.weapon||({warrior:'Rusty Sword',ranger:'Old Shortbow',mage:'Cracked Staff'})[cls],cls);
 if(wd.kind==='bow')m.at(.74,1.72,.41,()=>weapon(m,wd),-.10+Math.sin(phase*Math.PI)*.1);
 else if(wd.kind==='staff')m.at(-.77,1.35,.3,()=>weapon(m,wd),-.06+Math.sin(phase*Math.PI)*.06);
 else m.at(lx,ly,.36,()=>weapon(m,wd),.4-swing);
 if(eq.offhand&&eq.offhand!=='None')m.at(.83,1.63,.4,()=>accessory(m,descriptor(eq.offhand,cls)));
 if(eq.amulet&&eq.amulet!=='None')m.group(p=>[p[0]*.45,2.04+p[1]*.45,.32+p[2]*.45],()=>accessory(m,descriptor(eq.amulet,cls)));
 if(eq.ring&&eq.ring!=='None')m.group(p=>[.73+p[0]*.21,1.6+p[1]*.21,.36+p[2]*.21],()=>accessory(m,descriptor(eq.ring,cls)));
 return m;
}
function render(mesh,width,height,character=false){
 const canvas=document.createElement('canvas');canvas.width=width;canvas.height=height;const c=canvas.getContext('2d');
 const project=p=>[p[0]*.91+p[2]*.42,-p[1]*.94+p[2]*.29-p[0]*.10];
 const all=mesh.faces.flatMap(f=>f.p.map(project));const minX=character?-1.65:Math.min(...all.map(p=>p[0])),maxX=character?1.65:Math.max(...all.map(p=>p[0])),minY=character?-3.6:Math.min(...all.map(p=>p[1])),maxY=character?.38:Math.max(...all.map(p=>p[1]));
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
const icons=new Map(),towerCache=new Map();
function icon(name,cls){if(Object.hasOwn(equipmentArtwork,name))return equipmentArtwork[name];const key=name+'|'+(cls||'');if(!icons.has(key))icons.set(key,render(itemMesh(name,cls),96,96).toDataURL('image/png'));return icons.get(key)}
function signature(cls){return JSON.stringify(save.equipment[cls]||{})}
function tower(cls,phase=0){const key=signature(cls);let entry=towerCache.get(cls);if(!entry||entry.key!==key){entry={key,frames:new Map()};towerCache.set(cls,entry)}const frame=Math.max(0,Math.min(8,Math.round(phase*8)));if(!entry.frames.has(frame))entry.frames.set(frame,render(characterMesh(cls,save.equipment[cls]||{},frame/8),256,320,true));return entry.frames.get(frame)}
function portrait(cls){tower(cls);const entry=towerCache.get(cls);if(!entry.url)entry.url=entry.frames.get(0).toDataURL('image/png');return entry.url}
function drawTower(t){const a=t.attackVisual,phase=a?1-a.life/a.duration:0;const art=tower(t.type,phase);const h=103,w=h*art.width/art.height;ctx.drawImage(art,Math.max(0,Math.min(canvas.width-w,t.x-w/2)),Math.max(0,Math.min(canvas.height-h,t.y+17-h)),w,h)}
function decorate(){
 // Text labels and all existing controls remain authoritative and accessible.
 for(const root of ['bankGrid','craftGrid','artisanGrid','collectionGrid']){
  const el=document.getElementById(root);if(!el)continue;
  el.querySelectorAll('.card').forEach(card=>{const b=card.querySelector('b');if(!b||!itemDB[b.textContent]||card.querySelector('.gearIcon'))return;const im=document.createElement('img');im.className='gearIcon';im.width=48;im.height=48;im.alt='';im.src=icon(b.textContent);card.insertBefore(im,card.firstChild);});
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

