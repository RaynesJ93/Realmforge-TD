/* V179: approved Greenvale artwork with distance-driven four-pose walk cycles.
   Visual state is kept outside enemy/save objects and cannot affect combat. */
(function(){
 const config={ashsentinel:{size:94,height:120,stride:35,version:226,source:'flameguard'},lavabeast:{size:108,height:120,stride:40,version:226,source:'ashgolem'},infernalwarden:{size:142,height:120,stride:42,version:226,source:'tyrant'},icecrawler:{size:60,height:80,stride:30,version:227},frostwolf:{size:82,height:88,stride:46,version:227},iceraider:{size:80,height:120,stride:35,version:227},frozengolem:{size:90,height:116,stride:40,version:227},frostguard:{size:90,height:120,stride:36,version:227},frostwyrm:{size:130,height:120,stride:46,version:227},emberling:{size:60,height:120,stride:30,version:226},cinderhound:{size:82,height:98,stride:46,version:226},ashgolem:{size:88,height:111,stride:40,version:226},flameguard:{size:83,height:105,stride:35,version:226},tyrant:{size:122,height:120,stride:42,version:226},rat:{size:58,height:63,stride:25},wolf:{size:74,height:78,stride:44},goblin:{size:61,height:120,stride:31},scout:{size:64,height:120,stride:35},brute:{size:80,height:117,stride:38},cave:{size:88,height:91,stride:39},warlord:{size:105,height:120,stride:33},rootwarden:{size:116,height:120,stride:36}};
 const sheets={},motion=new WeakMap();let seed=0;
 for(const kind of Object.keys(config)){const img=new Image();const source=config[kind].source||kind;img.src='assets/enemy-'+source+'-walk-v'+(config[kind].version||179)+'.webp';sheets[kind]=img;}
 function walkState(e){
   let s=motion.get(e);
   if(!s){s={x:e.x,y:e.y,distance:(seed++%7)*4,facing:-1};motion.set(e,s);}
   const dx=e.x-s.x,dy=e.y-s.y,travel=Math.hypot(dx,dy);
   s.distance+=travel;
   if(Math.abs(dx)>.01)s.facing=dx>0?-1:1; // Artwork faces left; mirror when moving right.
   s.x=e.x;s.y=e.y;
   return s;
 }
 function draw(e,c){
   const cfg=config[e.kind],img=sheets[e.kind];
   if(!cfg||!img||!img.complete||!img.naturalWidth)return 0;
   const s=walkState(e),phase=(s.distance%cfg.stride)/cfg.stride,frame=Math.floor(phase*4),size=cfg.size;
   const bob=Math.abs(Math.sin(phase*Math.PI*2))*(e.kind==='rootwarden'?.9:.6);
   c.save();c.fillStyle='rgba(20,27,18,.22)';c.beginPath();c.ellipse(e.x,e.y+1,size*.20,Math.max(3,size*.065),0,0,Math.PI*2);c.fill();
   c.translate(e.x,e.y-bob);c.scale(s.facing,1);
   // Packed frames share a planted-foot baseline at source pixel 124.
   c.drawImage(img,frame*128,0,128,128,-size/2,-size*124/128,size,size);c.restore();
   return cfg.height/128*size+bob;
 }
 window.GreenvaleEnemies={draw,config,walkState};
})();


