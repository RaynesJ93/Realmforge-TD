const skillingArtwork={"Bronze bar":"assets/skilling/bronze-bar.webp","Ironvale bar":"assets/skilling/ironvale-bar.webp","Frostsilver bar":"assets/skilling/frostsilver-bar.webp","Raw Minnow":"assets/skilling/raw-minnow.webp","Raw Trout":"assets/skilling/raw-trout.webp","Raw Pike":"assets/skilling/raw-pike.webp","Cooked Minnow":"assets/skilling/cooked-minnow.webp","Cooked Trout":"assets/skilling/cooked-trout.webp","Cooked Pike":"assets/skilling/cooked-pike.webp"};
const KEY='realmforge_v01',BACKUP_KEY='realmforge_backup',TEST_KEY='realmforge_test_v01',SAVE_VERSION=16;
let testMode=false;
const itemDB={'Rusty Sword':{slot:'weapon',class:'warrior',damage:0},'Bronze Sword':{slot:'weapon',class:'warrior',damage:3,req:{Attack:5}},'Bronze Dagger':{slot:'weapon',class:'warrior',damage:2,speed:.08,req:{Attack:3}},'Bronze Helm':{slot:'head',class:'warrior',damage:1,defence:2,req:{Defence:3}},'Bronze Armour':{slot:'body',class:'warrior',damage:2,defence:4,req:{Defence:5}},'Old Shortbow':{slot:'weapon',class:'ranger',damage:0},'Oak Shortbow':{slot:'weapon',class:'ranger',damage:2,range:12},'Leather Hood':{slot:'head',class:'ranger',range:5},'Leather Body':{slot:'body',class:'ranger',damage:1},'Cracked Staff':{slot:'weapon',class:'mage',damage:0},'Apprentice Staff':{slot:'weapon',class:'mage',damage:4},'Cloth Hood':{slot:'head',class:'mage',range:5},'Apprentice Robe':{slot:'body',class:'mage',damage:2},'Warlord Cleaver':{slot:'weapon',class:'warrior',damage:7,speed:.06,req:{Attack:20}},'Warlord Crest':{slot:'head',class:'warrior',damage:3,range:5,defence:8,req:{Defence:15}},'Ironvale Sword':{slot:'weapon',class:'warrior',damage:6,req:{Attack:15}},'Ironvale Helm':{slot:'head',class:'warrior',damage:2,defence:6,req:{Defence:12}},'Ironvale Armour':{slot:'body',class:'warrior',damage:4,defence:10,req:{Defence:18}},'Emberfang Blade':{slot:'weapon',class:'warrior',damage:11,speed:.08,req:{Attack:25}},'Ashguard Helm':{slot:'head',class:'warrior',damage:4,defence:12,req:{Defence:22}},'Cinderbow':{slot:'weapon',class:'ranger',damage:7,range:18,req:{Ranged:22}},'Ember Staff':{slot:'weapon',class:'mage',damage:10,range:10,req:{Magic:22}},'Oakheart Bow':{slot:'weapon',class:'ranger',damage:4,range:15,req:{Ranged:10}},'Ironvale Longbow':{slot:'weapon',class:'ranger',damage:6,range:20,req:{Ranged:16}},'Ashweave Hood':{slot:'head',class:'ranger',damage:2,range:10,req:{Ranged:14}},'Ashweave Body':{slot:'body',class:'ranger',damage:3,defence:4,req:{Ranged:18}},'Oakheart Staff':{slot:'weapon',class:'mage',damage:6,range:8,req:{Magic:10}},'Ironvale Focus Staff':{slot:'weapon',class:'mage',damage:8,range:12,req:{Magic:16}},'Ashweave Cowl':{slot:'head',class:'mage',damage:3,range:6,req:{Magic:14}},'Ashweave Robe':{slot:'body',class:'mage',damage:5,defence:3,req:{Magic:18}},'Greenvale Shortbow':{slot:'weapon',class:'ranger',damage:2,range:7,req:{Ranged:1}},'Training Arrow Bundle':{slot:'offhand',class:'ranger',damage:1,req:{Ranged:3}},'Greenvale Charm':{slot:'offhand',class:'mage',range:3,req:{Magic:1}},'Scrap Ward':{slot:'offhand',class:'mage',damage:1,defence:2,req:{Magic:3}},'Verdant Edge':{slot:'weapon',class:'warrior',damage:9,defence:3,req:{Attack:18}},'Thornshot Bow':{slot:'weapon',class:'ranger',damage:7,range:24,req:{Ranged:18}},'Rootbinder Staff':{slot:'weapon',class:'mage',damage:9,range:16,req:{Magic:18}},'Frostsilver Sword':{slot:'weapon',class:'warrior',damage:10,defence:2,req:{Attack:28}},'Frostsilver Helm':{slot:'head',class:'warrior',damage:3,defence:14,req:{Defence:26}},'Frostsilver Armour':{slot:'body',class:'warrior',damage:5,defence:20,req:{Defence:30}},'Frostpine Bow':{slot:'weapon',class:'ranger',damage:9,range:28,req:{Ranged:28}},'Frostweave Hood':{slot:'head',class:'ranger',damage:3,range:12,defence:5,req:{Ranged:26}},'Frostpine Staff':{slot:'weapon',class:'mage',damage:12,range:18,req:{Magic:28}},'Frostweave Robe':{slot:'body',class:'mage',damage:7,defence:7,req:{Magic:30}},'Wyrmfrost Blade':{slot:'weapon',class:'warrior',damage:16,defence:4,speed:.06,req:{Attack:35}},'Glacier Bow':{slot:'weapon',class:'ranger',damage:13,range:36,req:{Ranged:35}},'Wintercore Staff':{slot:'weapon',class:'mage',damage:17,range:24,req:{Magic:35}},'Wyrmscale Crown':{slot:'head',class:'warrior',damage:5,defence:20,req:{Defence:34}},'Greenvale Signet':{slot:'ring',class:'all',damage:2,defence:3},'Ashen Pendant':{slot:'amulet',class:'all',damage:3,range:5,defence:4},'Frostbound Cape':{slot:'cape',class:'all',damage:4,range:8,defence:8},'Cryptfang Greatsword':{slot:'weapon',class:'warrior',damage:20,defence:6,speed:.06,req:{Attack:40}},'Glacial Recurve':{slot:'weapon',class:'ranger',damage:16,range:44,req:{Ranged:40}},'Soulfrost Sceptre':{slot:'weapon',class:'mage',damage:21,range:30,req:{Magic:40}},'Crown of the Crypt':{slot:'head',class:'all',damage:7,range:12,defence:24,req:{Defence:40}},
'Bronze Boots':{slot:'boots',class:'warrior',defence:2,req:{Defence:5}},'Bronze Gauntlets':{slot:'gloves',class:'warrior',damage:1,defence:2,req:{Defence:5}},
'Ironvale Boots':{slot:'boots',class:'warrior',defence:6,req:{Defence:18}},'Ironvale Gauntlets':{slot:'gloves',class:'warrior',damage:2,defence:5,req:{Defence:18}},
'Frostsilver Boots':{slot:'boots',class:'warrior',defence:12,req:{Defence:30}},'Frostsilver Gauntlets':{slot:'gloves',class:'warrior',damage:4,defence:10,req:{Defence:30}},
'Leather Boots':{slot:'boots',class:'ranger',range:4,defence:1,req:{Ranged:5}},'Leather Gloves':{slot:'gloves',class:'ranger',damage:1,range:3,req:{Ranged:5}},
'Ashweave Boots':{slot:'boots',class:'ranger',range:8,defence:3,req:{Ranged:18}},'Ashweave Gloves':{slot:'gloves',class:'ranger',damage:2,range:7,req:{Ranged:18}},
'Frostweave Boots':{slot:'boots',class:'ranger',range:14,defence:6,req:{Ranged:30}},'Frostweave Gloves':{slot:'gloves',class:'ranger',damage:4,range:12,defence:4,req:{Ranged:30}},
'Cloth Boots':{slot:'boots',class:'mage',range:3,req:{Magic:5}},'Cloth Gloves':{slot:'gloves',class:'mage',damage:1,range:2,req:{Magic:5}},
'Ashweave Slippers':{slot:'boots',class:'mage',range:7,defence:2,req:{Magic:18}},'Ashweave Handwraps':{slot:'gloves',class:'mage',damage:3,range:5,req:{Magic:18}},
'Frostweave Slippers':{slot:'boots',class:'mage',range:12,defence:5,req:{Magic:30}},'Frostweave Handwraps':{slot:'gloves',class:'mage',damage:5,range:9,defence:3,req:{Magic:30}},
'Bronze Platelegs':{slot:'legs',class:'warrior',defence:3,req:{Defence:7}},'Ironvale Platelegs':{slot:'legs',class:'warrior',damage:1,defence:9,req:{Defence:20}},'Frostsilver Platelegs':{slot:'legs',class:'warrior',damage:3,defence:17,req:{Defence:32}},
'Leather Chaps':{slot:'legs',class:'ranger',range:5,defence:2,req:{Ranged:7}},'Ashweave Chaps':{slot:'legs',class:'ranger',damage:2,range:10,defence:4,req:{Ranged:20}},'Frostweave Chaps':{slot:'legs',class:'ranger',damage:3,range:17,defence:8,req:{Ranged:32}},
'Cloth Legwraps':{slot:'legs',class:'mage',range:4,defence:1,req:{Magic:7}},'Ashweave Legwraps':{slot:'legs',class:'mage',damage:2,range:9,defence:3,req:{Magic:20}},'Frostweave Legwraps':{slot:'legs',class:'mage',damage:4,range:15,defence:7,req:{Magic:32}},
'Bronze Shield':{slot:'offhand',class:'warrior',defence:4,req:{Defence:6}},'Ironvale Shield':{slot:'offhand',class:'warrior',damage:1,defence:10,req:{Defence:20}},'Frostsilver Shield':{slot:'offhand',class:'warrior',damage:3,defence:18,req:{Defence:32}},
'Greenvale Quiver':{slot:'offhand',class:'ranger',damage:1,range:5,req:{Ranged:5}},'Ironvale Quiver':{slot:'offhand',class:'ranger',damage:3,range:11,req:{Ranged:20}},'Frostpine Quiver':{slot:'offhand',class:'ranger',damage:5,range:18,defence:3,req:{Ranged:32}},
'Apprentice Spellbook':{slot:'offhand',class:'mage',damage:1,range:5,req:{Magic:5}},'Ashen Spellbook':{slot:'offhand',class:'mage',damage:4,range:10,defence:2,req:{Magic:20}},'Wintercore Orb':{slot:'offhand',class:'mage',damage:6,range:17,defence:4,req:{Magic:32}},
'Copper Band':{slot:'ring',class:'all',damage:1,defence:1},'Ironvale Signet':{slot:'ring',class:'all',damage:2,range:3,defence:3,req:{Defence:15}},'Frostsilver Ring':{slot:'ring',class:'all',damage:4,range:6,defence:6,req:{Defence:28}},
'Greenvale Amulet':{slot:'amulet',class:'all',range:3,defence:2},'Ashen Amulet':{slot:'amulet',class:'all',damage:3,range:5,defence:3,req:{Defence:18}},'Frostheart Amulet':{slot:'amulet',class:'all',damage:5,range:8,defence:7,req:{Defence:30}},
'Greenvale Cloak':{slot:'cape',class:'all',range:3,defence:3},'Ashen Mantle':{slot:'cape',class:'all',damage:2,range:6,defence:6,req:{Defence:20}},'Frostmere Cape':{slot:'cape',class:'all',damage:4,range:10,defence:10,req:{Defence:32}},'Hunter Ring':{slot:'ring',class:'all',damage:3,range:5,defence:4},'Hunter Gloves':{slot:'gloves',class:'all',damage:5,defence:5},'Master Hunter Amulet':{slot:'amulet',class:'all',damage:7,range:10,defence:8},'Hunter Cape':{slot:'cape',class:'all',damage:10,range:15,defence:12},'Master Hunter Armour':{slot:'body',class:'all',damage:12,range:18,defence:20},'Mirefang Greatblade':{slot:'weapon',class:'warrior',damage:24,defence:8,req:{Attack:45}},'Venomwood Bow':{slot:'weapon',class:'ranger',damage:19,range:52,req:{Ranged:45}},'Plaguebloom Staff':{slot:'weapon',class:'mage',damage:25,range:38,req:{Magic:45}},'Mire Queen Crown':{slot:'head',class:'all',damage:8,range:14,defence:28,req:{Defence:42}},'Colossus Cleaver':{slot:'weapon',class:'warrior',damage:27,defence:10,req:{Attack:48}},'Drowned Recurve':{slot:'weapon',class:'ranger',damage:21,range:58,req:{Ranged:48}},'Temple Hexstaff':{slot:'weapon',class:'mage',damage:28,range:42,req:{Magic:48}},'Bogheart Talisman':{slot:'amulet',class:'all',damage:9,range:16,defence:16,req:{Defence:45}},'Bogiron Sword':{slot:'weapon',class:'warrior',damage:15,defence:4,req:{Attack:40}},'Bogiron Helm':{slot:'head',class:'warrior',damage:5,defence:18,req:{Defence:38}},'Bogiron Armour':{slot:'body',class:'warrior',damage:7,defence:26,req:{Defence:42}},'Rotwood Bow':{slot:'weapon',class:'ranger',damage:14,range:38,req:{Ranged:40}},'Mireweave Hood':{slot:'head',class:'ranger',damage:5,range:16,defence:8,req:{Ranged:38}},'Mireweave Body':{slot:'body',class:'ranger',damage:8,range:10,defence:10,req:{Ranged:42}},'Rotwood Staff':{slot:'weapon',class:'mage',damage:18,range:26,req:{Magic:40}},'Mireweave Cowl':{slot:'head',class:'mage',damage:6,range:12,defence:7,req:{Magic:38}},'Mireweave Robe':{slot:'body',class:'mage',damage:10,range:10,defence:10,req:{Magic:42}}};
const recipes={dagger:{name:'Bronze Dagger',resource:'Bronze bar',bars:1,level:1,xp:15,time:2200},helm:{name:'Bronze Helm',resource:'Bronze bar',bars:2,level:3,xp:25,time:2600},sword:{name:'Bronze Sword',resource:'Bronze bar',bars:3,level:5,xp:40,time:3000},body:{name:'Bronze Armour',resource:'Bronze bar',bars:5,level:8,xp:70,time:3800},ihelm:{name:'Ironvale Helm',resource:'Ironvale bar',bars:2,level:15,xp:45,time:3200},isword:{name:'Ironvale Sword',resource:'Ironvale bar',bars:3,level:20,xp:70,time:3600},ibody:{name:'Ironvale Armour',resource:'Ironvale bar',bars:5,level:25,xp:110,time:4500},fshelm:{name:'Frostsilver Helm',resource:'Frostsilver bar',bars:2,level:28,xp:90,time:3800},fssword:{name:'Frostsilver Sword',resource:'Frostsilver bar',bars:3,level:32,xp:135,time:4200},fsbody:{name:'Frostsilver Armour',resource:'Frostsilver bar',bars:5,level:36,xp:210,time:5200},bboots:{name:'Bronze Boots',resource:'Bronze bar',bars:2,level:6,xp:30,time:2600},bgloves:{name:'Bronze Gauntlets',resource:'Bronze bar',bars:2,level:8,xp:35,time:2800},iboots:{name:'Ironvale Boots',resource:'Ironvale bar',bars:2,level:22,xp:80,time:3600},igloves:{name:'Ironvale Gauntlets',resource:'Ironvale bar',bars:2,level:24,xp:90,time:3800},fsboots:{name:'Frostsilver Boots',resource:'Frostsilver bar',bars:2,level:34,xp:150,time:4400},fsgloves:{name:'Frostsilver Gauntlets',resource:'Frostsilver bar',bars:2,level:36,xp:165,time:4600},blegs:{name:'Bronze Platelegs',resource:'Bronze bar',bars:3,level:10,xp:55,time:3200},ilegs:{name:'Ironvale Platelegs',resource:'Ironvale bar',bars:3,level:27,xp:125,time:4200},fslegs:{name:'Frostsilver Platelegs',resource:'Frostsilver bar',bars:3,level:38,xp:230,time:5400},bshield:{name:'Bronze Shield',resource:'Bronze bar',bars:3,level:9,xp:50,time:3100},ishield:{name:'Ironvale Shield',resource:'Ironvale bar',bars:3,level:26,xp:120,time:4100},fsshield:{name:'Frostsilver Shield',resource:'Frostsilver bar',bars:3,level:37,xp:220,time:5200},bihelm:{name:'Bogiron Helm',resource:'Bogiron bar',bars:2,level:40,xp:280,time:5600},bisword:{name:'Bogiron Sword',resource:'Bogiron bar',bars:3,level:42,xp:340,time:5900},bibody:{name:'Bogiron Armour',resource:'Bogiron bar',bars:5,level:46,xp:480,time:6800}};
const starterEquip=()=>({warrior:{head:'None',body:'Cloth Tunic',weapon:'Rusty Sword'},ranger:{head:'None',body:'Cloth Tunic',weapon:'Old Shortbow'},mage:{head:'None',body:'Cloth Robe',weapon:'Cracked Staff'}});
const maps=[
{name:'Greenvale Outskirts',desc:'Rats and goblins threaten the outer road.',mult:1,start:100,kinds:['rat','goblin']},
{name:'Old Farm Road',desc:'Wolves join the raiders. Faster enemies test your coverage.',mult:1.18,start:110,kinds:['rat','wolf','goblin']},
{name:'Goblin Trail',desc:'Goblin scouts and armoured brutes patrol the trail.',mult:1.38,start:120,kinds:['goblin','scout','brute']},
{name:'Greenvale Mine',desc:'Cave beasts and goblin miners guard valuable ore.',mult:1.62,start:130,kinds:['cave','goblin','brute'],ore:true},
{name:'Goblin Stronghold',desc:'Break the stronghold. The Goblin Warlord arrives on wave 10.',mult:1.9,start:145,kinds:['goblin','scout','brute'],boss:'warlord'},
{name:'Ashen Foothills',desc:'Combat Lv 6 • Emberlings descend from the burning slopes.',mult:2.05,start:155,kinds:['emberling','wolf','scout'],region:'ashen',req:6},
{name:'Cinder Pass',desc:'Combat Lv 7 • Fast cinder hounds race through the pass.',mult:2.25,start:165,kinds:['emberling','cinderhound','scout'],region:'ashen',req:7},
{name:'Scorched Quarry',desc:'Combat Lv 8 • Ash golems guard mineral-rich volcanic ground.',mult:2.5,start:175,kinds:['ashgolem','emberling','cinderhound'],region:'ashen',req:8,ashOre:true},
{name:'Molten Causeway',desc:'Combat Lv 9 • Elite ash creatures defend the road to the summit.',mult:2.8,start:185,kinds:['cinderhound','ashgolem','flameguard'],region:'ashen',req:9},
{name:'Ember Citadel',desc:'Combat Lv 10 • Defeat the Ember Tyrant on wave 10.',mult:3.15,start:200,kinds:['emberling','ashgolem','flameguard'],region:'ashen',req:10,boss:'tyrant'},
{name:'Frozen Crossing',desc:'Combat Lv 12 • Ice Crawlers and Frost Wolves stalk the frozen road.',mult:3.45,start:215,kinds:['icecrawler','frostwolf','cinderhound'],region:'frost',req:12},
{name:'Snowbound Pass',desc:'Combat Lv 14 • Frost Wolves and Ice Raiders descend from the ridge.',mult:3.75,start:225,kinds:['frostwolf','iceraider','icecrawler'],region:'frost',req:14},
{name:'Glacial Caverns',desc:'Combat Lv 16 • Frozen Golems guard the deep caverns.',mult:4.1,start:235,kinds:['icecrawler','frozengolem','iceraider'],region:'frost',req:16},
{name:'Winterhold Approach',desc:'Combat Lv 18 • Frost Guardians defend the road to the citadel.',mult:4.5,start:245,kinds:['iceraider','frozengolem','frostguard'],region:'frost',req:18},
{name:'Citadel of Ice',desc:'Combat Lv 20 • Defeat the Frost Wyrm on wave 10.',mult:5,start:260,kinds:['frostwolf','frozengolem','frostguard'],region:'frost',req:20,boss:'frostwyrm'},
{name:'Murkwater Crossing',desc:'Combat Lv 23 • Boglings and Swamp Crawlers infest the drowned road.',mult:5.5,start:275,kinds:['bogling','swampcrawler','frostguard'],region:'blackfen',req:23},
{name:'Rotwood Trail',desc:'Combat Lv 26 • Venomfangs hunt beneath the twisted Rotwood trees. Venomous leaks cost an extra life.',mult:6.05,start:290,kinds:['bogling','venomfang','swampcrawler'],region:'blackfen',req:26},
{name:'Sunken Ruins',desc:'Combat Lv 29 • Ancient Bog Guardians rise from the flooded ruins.',mult:6.65,start:305,kinds:['swampcrawler','venomfang','bogguardian'],region:'blackfen',req:29},
{name:'Witchfen Approach',desc:'Combat Lv 32 • Blackfen elites defend the path into the heart of the mire. Mire Witches poison the base if they escape.',mult:7.3,start:320,kinds:['venomfang','bogguardian','mirewitch'],region:'blackfen',req:32},
{name:'Heart of Blackfen',desc:'Combat Lv 35 • Defeat the Mire Queen on wave 10. She resists damage above 50% HP, then enrages.',mult:8,start:340,kinds:['venomfang','bogguardian','mirewitch'],region:'blackfen',req:35,boss:'mirequeen'}
];
const enemyDB={rat:{hp:25,speed:55,reward:5,color:'#5b514c'},goblin:{hp:45,speed:42,reward:8,color:'#4e7338'},wolf:{hp:38,speed:78,reward:8,color:'#77736a'},scout:{hp:55,speed:68,reward:10,color:'#668b45'},brute:{hp:115,speed:34,reward:15,color:'#35562e'},cave:{hp:80,speed:46,reward:12,color:'#56546b'},warlord:{hp:900,speed:25,reward:150,color:'#923c2d'},emberling:{hp:70,speed:60,reward:14,color:'#c45a32'},cinderhound:{hp:90,speed:88,reward:17,color:'#7d3527'},ashgolem:{hp:190,speed:30,reward:24,color:'#5e514d'},flameguard:{hp:260,speed:38,reward:30,color:'#a04428'},tyrant:{hp:1500,speed:22,reward:300,color:'#d04a24'},rootwarden:{hp:1200,speed:24,reward:220,color:'#315b3b'},icecrawler:{hp:150,speed:72,reward:28,color:'#8cc7d9'},frostwolf:{hp:190,speed:92,reward:34,color:'#b8d7e5'},iceraider:{hp:280,speed:48,reward:42,color:'#668ba4'},frozengolem:{hp:440,speed:28,reward:55,color:'#86aebf'},frostguard:{hp:560,speed:36,reward:68,color:'#52768d'},frostwyrm:{hp:3200,speed:20,reward:600,color:'#b9e6f4'},cryptking:{hp:5200,speed:18,reward:850,color:'#7fa8c4'},bogling:{hp:520,speed:68,reward:72,color:'#5f7b4a'},swampcrawler:{hp:680,speed:82,reward:82,color:'#466d58'},venomfang:{hp:760,speed:96,reward:94,color:'#769447'},bogguardian:{hp:1150,speed:30,reward:120,color:'#3d5b45'},mirewitch:{hp:900,speed:48,reward:135,color:'#6c4b78'},mirequeen:{hp:6500,speed:19,reward:1100,color:'#81558d'},templelurker:{hp:1050,speed:74,reward:150,color:'#436c58'},drownedguard:{hp:1600,speed:34,reward:185,color:'#385b55'},bogcolossus:{hp:9000,speed:17,reward:1600,color:'#526b3f'}};
const base=()=>({saveVersion:SAVE_VERSION,coins:0,bestWave:0,skills:{Attack:{lvl:1,xp:0},Strength:{lvl:1,xp:0},Defence:{lvl:1,xp:0},Ranged:{lvl:1,xp:0},Magic:{lvl:1,xp:0},Hitpoints:{lvl:10,xp:0},Mining:{lvl:1,xp:0},Smithing:{lvl:1,xp:0},Woodcutting:{lvl:1,xp:0},'Monster Hunter':{lvl:1,xp:0},Fletching:{lvl:1,xp:0},Crafting:{lvl:1,xp:0},Fishing:{lvl:1,xp:0},Cooking:{lvl:1,xp:0}},bank:{'Copper ore':0,'Tin ore':0,'Bronze bar':0,'Logs':0,'Goblin scrap':0,'Oakheart logs':0,'Ironvale ore':0,'Ironvale bar':0,'Golem Core':0,'Flameguard Sigil':0,'Ashweave Cloth':0,'Raw Minnow':0,'Raw Trout':0,'Raw Pike':0,'Cooked Minnow':0,'Cooked Trout':0,'Cooked Pike':0,'Frostsilver ore':0,'Frostsilver bar':0,'Frostpine logs':0,'Frostweave Cloth':0},items:{},equipment:starterEquip(),drops:[],campaign:{unlocked:1,cleared:[],bossKills:0,ashenBossKills:0,frostBossKills:0},collection:{},bossHunt:{best:{warlord:null,tyrant:null,frostwyrm:null},milestones:{warlord:[],tyrant:[],frostwyrm:[]}},hunter:{points:0,task:null,unlocks:{elite:false,cache:false,materials:false}},quests:{started:[],completed:[],kills:{},crafted:{}},dungeon:{completions:0,best:null,supplies:{'Cooked Minnow':0,'Cooked Trout':0,'Cooked Pike':0},frozenCrypt:{completions:0,best:null,milestones:[]}}});
function safeParse(raw){try{return raw?JSON.parse(raw):null}catch(e){return null}}
function validSave(s){return !!(s&&typeof s==='object'&&s.skills&&s.bank)}
function writeSave(makeBackup=true){save.saveVersion=SAVE_VERSION;if(testMode){localStorage.setItem(TEST_KEY,JSON.stringify(save));return}const current=localStorage.getItem(KEY);if(makeBackup&&current){const parsed=safeParse(current);if(validSave(parsed))localStorage.setItem(BACKUP_KEY,current)}localStorage.setItem(KEY,JSON.stringify(save))}
// V226 Cloud Save foundation. Local saves remain authoritative until a cloud backend is configured.
const CLOUD_CONFIG={url:'https://pvdvtnnmyveywyrpixhs.supabase.co',anonKey:'sb_publishable_Hh9aRCXB5g3-E_QhLdG6JQ_V1QYnFYR'};
const CLOUD_DEVICE_KEY='realmforge_cloud_device_v01';
let cloudSession=null,cloudBusy=false,cloudLastSync=localStorage.getItem('realmforge_cloud_last_sync')||'';
function cloudConfigured(){return !!(CLOUD_CONFIG.url&&CLOUD_CONFIG.anonKey)}
function cloudStatus(text,state){var e=document.querySelector('#cloudStatus');if(e){e.textContent=text;e.className='cloudStatus '+(state||'')};var t=document.querySelector('#cloudLastSync');if(t)t.textContent=cloudLastSync?new Date(cloudLastSync).toLocaleString():'Never'}
function cloudHeaders(token){var h={'apikey':CLOUD_CONFIG.anonKey,'Content-Type':'application/json'};if(token)h.Authorization='Bearer '+token;return h}
async function cloudRequest(path,options){options=options||{};options.headers=Object.assign(cloudHeaders(cloudSession&&cloudSession.access_token),options.headers||{});var r=await fetch(CLOUD_CONFIG.url+path,options);var body=null;try{body=await r.json()}catch(e){}if(!r.ok)throw new Error(body&&body.msg||body&&body.message||('Cloud error '+r.status));return body}
async function cloudSignIn(){
 if(!cloudConfigured()){cloudStatus('Cloud backend not connected yet','offline');alert('Realmforge Cloud is ready in the game, but the secure cloud database still needs to be connected.');return}
 var email=(document.querySelector('#cloudEmail')||{}).value||'',password=(document.querySelector('#cloudPassword')||{}).value||'';
 if(!email||!password){alert('Enter your email and password.');return}
 try{cloudBusy=true;cloudStatus('Signing in…','working');cloudSession=await cloudRequest('/auth/v1/token?grant_type=password',{method:'POST',body:JSON.stringify({email:email,password:password})});if((document.querySelector('#cloudStaySignedIn')||{}).checked){localStorage.setItem('realmforge_cloud_session',JSON.stringify(cloudSession));localStorage.setItem('realmforge_cloud_stay_signed_in','1')}else{sessionStorage.setItem('realmforge_cloud_session',JSON.stringify(cloudSession));localStorage.removeItem('realmforge_cloud_session');localStorage.removeItem('realmforge_cloud_stay_signed_in')}cloudStatus('Cloud connected','online');await cloudPullInternal(false)}catch(e){cloudStatus('Sign in failed','offline');alert(e.message)}finally{cloudBusy=false}
}
async function cloudSignUp(){
 if(!cloudConfigured()){cloudStatus('Cloud backend not connected yet','offline');alert('Realmforge Cloud is ready in the game, but the secure cloud database still needs to be connected.');return}
 var email=(document.querySelector('#cloudEmail')||{}).value||'',password=(document.querySelector('#cloudPassword')||{}).value||'';
 if(!email||password.length<6){alert('Enter an email and a password of at least 6 characters.');return}
 try{cloudStatus('Creating account…','working');await cloudRequest('/auth/v1/signup',{method:'POST',body:JSON.stringify({email:email,password:password})});cloudStatus('Account created — sign in','online');alert('Cloud account created. Sign in to sync this save.')}catch(e){cloudStatus('Account creation failed','offline');alert(e.message)}
}
async function cloudPushInternal(showMessage){
 if(testMode||cloudBusy||!cloudConfigured()||!cloudSession||!cloudSession.user)return;
 try{cloudBusy=true;cloudStatus('Saving to cloud…','working');var payload={user_id:cloudSession.user.id,save_data:save,updated_at:new Date().toISOString()};await cloudRequest('/rest/v1/realmforge_saves?on_conflict=user_id',{method:'POST',headers:{'Prefer':'resolution=merge-duplicates'},body:JSON.stringify(payload)});cloudLastSync=payload.updated_at;localStorage.setItem('realmforge_cloud_last_sync',cloudLastSync);cloudStatus('Cloud save up to date','online');if(showMessage)alert('Realmforge saved to the cloud.')}catch(e){cloudStatus('Cloud sync failed — local save is safe','offline');if(showMessage)alert(e.message)}finally{cloudBusy=false}
}
async function cloudPullInternal(showMessage){
 if(!cloudConfigured()||!cloudSession||!cloudSession.user)return;
 try{cloudBusy=true;cloudStatus('Checking cloud save…','working');var rows=await cloudRequest('/rest/v1/realmforge_saves?user_id=eq.'+encodeURIComponent(cloudSession.user.id)+'&select=save_data,updated_at&limit=1');if(rows&&rows[0]&&validSave(rows[0].save_data)){var remote=rows[0].save_data;if(progressScore(remote)>=progressScore(save)){localStorage.setItem(BACKUP_KEY,JSON.stringify(save));save=remote;migrateSave();writeSave(false);resetBattle();renderUI()}cloudLastSync=rows[0].updated_at||new Date().toISOString();localStorage.setItem('realmforge_cloud_last_sync',cloudLastSync);cloudStatus('Cloud save up to date','online');if(showMessage)alert('Cloud save checked and synced.')}else{cloudBusy=false;await cloudPushInternal(false);if(showMessage)alert('Your current save is now stored in the cloud.')}}catch(e){cloudStatus('Cloud sync failed — local save is safe','offline');if(showMessage)alert(e.message)}finally{cloudBusy=false}
}
function cloudSignOut(){cloudSession=null;localStorage.removeItem('realmforge_cloud_session');localStorage.removeItem('realmforge_cloud_stay_signed_in');cloudStatus(cloudConfigured()?'Signed out':'Cloud backend not connected yet','offline')}
function initCloudSave(){var stay=localStorage.getItem('realmforge_cloud_stay_signed_in')==='1',stored=safeParse(stay?localStorage.getItem('realmforge_cloud_session'):sessionStorage.getItem('realmforge_cloud_session'));var remember=document.querySelector('#cloudStaySignedIn');if(remember)remember.checked=stay;if(stored&&stored.access_token&&stored.user)cloudSession=stored;cloudStatus(!cloudConfigured()?'Cloud backend not connected yet':cloudSession?'Cloud connected':'Signed out',cloudSession&&cloudConfigured()?'online':'offline');if(cloudSession&&cloudConfigured())setTimeout(function(){cloudPullInternal(false)},700)}
window.cloudSignIn=cloudSignIn;window.cloudSignUp=cloudSignUp;window.cloudPush=function(){return cloudPushInternal(true)};window.cloudPull=function(){return cloudPullInternal(true)};window.cloudSignOut=cloudSignOut;
function restoreBackup(){const b=safeParse(localStorage.getItem(BACKUP_KEY));if(!validSave(b)){alert('No valid backup save was found.');return}if(!confirm('Restore the automatic backup? Your current save will be replaced.'))return;save=b;migrateSave();writeSave(false);resetBattle();renderUI();alert('Backup restored.')}
window.restoreBackup=restoreBackup;
function migrateSave(){const skillDefaults=base().skills;save.skills=save.skills||{};Object.entries(skillDefaults).forEach(([name,def])=>{if(!save.skills[name])save.skills[name]={...def};else{save.skills[name].lvl=Math.max(def.lvl,Number(save.skills[name].lvl)||def.lvl);save.skills[name].xp=Math.max(0,Number(save.skills[name].xp)||0)}});save.items=save.items||{};save.drops=save.drops||[];save.bank=save.bank||{};['Copper ore','Tin ore','Bronze bar','Logs','Goblin scrap','Oakheart logs','Ironvale ore','Ironvale bar','Golem Core','Flameguard Sigil','Ashweave Cloth','Raw Minnow','Raw Trout','Raw Pike','Cooked Minnow','Cooked Trout','Cooked Pike','Frostsilver ore','Frostsilver bar','Frostpine logs','Frostweave Cloth','Bogiron ore','Bogiron bar','Rotwood logs','Mireweave Cloth'].forEach(x=>save.bank[x]=Math.max(0,Number(save.bank[x])||0));if(!save.equipment||!save.equipment.warrior)save.equipment=starterEquip();['warrior','ranger','mage'].forEach(function(c){['offhand','legs','boots','gloves','ring','amulet','cape'].forEach(function(slot){if(save.equipment[c][slot]===undefined)save.equipment[c][slot]='None'})});save.campaign=save.campaign||{unlocked:1,cleared:[],bossKills:0};save.campaign.cleared=save.campaign.cleared||[];save.campaign.unlocked=Math.max(1,save.campaign.unlocked||1);if(save.campaign.cleared.includes(14))save.campaign.unlocked=Math.max(save.campaign.unlocked,16);save.campaign.bossKills=save.campaign.bossKills||0;save.campaign.ashenBossKills=save.campaign.ashenBossKills||0;save.campaign.frostBossKills=save.campaign.frostBossKills||0;save.campaign.mireBossKills=save.campaign.mireBossKills||0;save.collection=save.collection||{};save.bossHunt=save.bossHunt||{best:{warlord:null,tyrant:null},milestones:{warlord:[],tyrant:[]}};save.bossHunt.best=save.bossHunt.best||{warlord:null,tyrant:null};save.bossHunt.best.frostwyrm=save.bossHunt.best.frostwyrm||null;save.bossHunt.milestones=save.bossHunt.milestones||{warlord:[],tyrant:[]};save.bossHunt.milestones.warlord=save.bossHunt.milestones.warlord||[];save.bossHunt.milestones.tyrant=save.bossHunt.milestones.tyrant||[];save.bossHunt.milestones.frostwyrm=save.bossHunt.milestones.frostwyrm||[];save.hunter=save.hunter||{points:0,task:null,unlocks:{elite:false,cache:false,materials:false}};save.hunter.points=Number(save.hunter.points)||0;save.hunter.unlocks=save.hunter.unlocks||{elite:false,cache:false,materials:false};['supply','hunterring','veteran','huntergloves','tracker','master','masteramulet','trophy','huntercape','crest','masterarmour'].forEach(function(k){if(typeof save.hunter.unlocks[k]!=='boolean')save.hunter.unlocks[k]=false});save.quests=save.quests||{started:[],completed:[],kills:{},crafted:{}};save.quests.started=save.quests.started||[];save.quests.completed=save.quests.completed||[];save.quests.kills=save.quests.kills||{};save.quests.crafted=save.quests.crafted||{};save.dungeon=save.dungeon||{completions:0,best:null};save.dungeon.completions=Number(save.dungeon.completions)||0;save.dungeon.best=save.dungeon.best||null;save.dungeon.frozenCrypt=save.dungeon.frozenCrypt||{completions:0,best:null,milestones:[]};save.dungeon.frozenCrypt.completions=Number(save.dungeon.frozenCrypt.completions)||0;save.dungeon.frozenCrypt.best=save.dungeon.frozenCrypt.best||null;save.dungeon.frozenCrypt.milestones=save.dungeon.frozenCrypt.milestones||[];save.dungeon.drownedTemple=save.dungeon.drownedTemple||{completions:0,best:null,milestones:[]};save.dungeon.drownedTemple.completions=Number(save.dungeon.drownedTemple.completions)||0;save.dungeon.drownedTemple.best=save.dungeon.drownedTemple.best||null;save.dungeon.drownedTemple.milestones=save.dungeon.drownedTemple.milestones||[];save.market=save.market||{merchantDay:'',merchantStock:[]};save.market.merchantDay=save.market.merchantDay||'';save.market.merchantStock=Array.isArray(save.market.merchantStock)?save.market.merchantStock:[];save.salvagePoints=Math.max(0,Number(save.salvagePoints)||0);save.enhancements=save.enhancements||{};Object.keys(save.enhancements).forEach(function(n){save.enhancements[n]=Math.max(0,Math.min(5,Number(save.enhancements[n])||0))});save.perks=save.perks||{level:1,xp:0,points:0,unlocked:[],equipped:[],day:'',tasks:[],progress:{}};save.perks.points=Math.max(0,Number(save.perks.points)||0);save.perks.level=Math.max(1,Number(save.perks.level)||1);save.perks.xp=Math.max(0,Number(save.perks.xp)||0);save.perks.unlocked=Array.isArray(save.perks.unlocked)?save.perks.unlocked:[];save.perks.equipped=Array.isArray(save.perks.equipped)?save.perks.equipped:[];save.perks.tasks=Array.isArray(save.perks.tasks)?save.perks.tasks:[];save.perks.progress=save.perks.progress||{};save.perks.completedToday=Array.isArray(save.perks.completedToday)?save.perks.completedToday:[];save.dungeon.supplies=save.dungeon.supplies||{'Cooked Minnow':0,'Cooked Trout':0,'Cooked Pike':0};['Cooked Minnow','Cooked Trout','Cooked Pike'].forEach(function(n){save.dungeon.supplies[n]=Math.max(0,Number(save.dungeon.supplies[n])||0)});if(save.campaign.cleared.includes(4))save.campaign.unlocked=Math.max(save.campaign.unlocked,6);if(save.campaign.cleared.includes(9))save.campaign.unlocked=Math.max(save.campaign.unlocked,11);save.saveVersion=SAVE_VERSION}
let forcedRecovery=safeParse(localStorage.getItem('realmforge_active_override'));let primary=validSave(forcedRecovery)?forcedRecovery:safeParse(localStorage.getItem(KEY)),backup=validSave(forcedRecovery)?forcedRecovery:safeParse(localStorage.getItem(BACKUP_KEY));
function progressScore(x){if(!validSave(x))return -1;let levels=Object.values(x.skills||{}).reduce((n,v)=>n+(Number(v&&v.lvl)||0),0),clears=(x.campaign&&Array.isArray(x.campaign.cleared)?x.campaign.cleared.length:0),coins=Number(x.coins)||0,items=Object.values(x.items||{}).reduce((n,v)=>n+(Number(v)||0),0);return levels*10000+clears*1000000+items*100+Math.min(coins,99999)}
let save;if(validSave(primary)&&validSave(backup)){save=progressScore(backup)>progressScore(primary)?backup:primary}else save=validSave(primary)?primary:validSave(backup)?backup:base();var normalRecovery=validSave(primary)&&validSave(backup)&&progressScore(backup)>progressScore(primary);
migrateSave();if(validSave(forcedRecovery)){localStorage.setItem(KEY,JSON.stringify(save));localStorage.setItem(BACKUP_KEY,JSON.stringify(save));localStorage.removeItem('realmforge_active_override')}const skillDefaults=base().skills;save.skills=save.skills||{};Object.entries(skillDefaults).forEach(([name,def])=>{if(!save.skills[name])save.skills[name]={...def};else{save.skills[name].lvl=Math.max(def.lvl,Number(save.skills[name].lvl)||def.lvl);save.skills[name].xp=Math.max(0,Number(save.skills[name].xp)||0)}});
const canvas=document.querySelector('#game'),ctx=canvas.getContext('2d');let towers=[],enemies=[],shots=[],selected=null,wave=0,lives=20,battleCoins=100,waveRunning=false,last=0,lastSpawnCheck=0,currentMap=0,spawnPending=0,mapFinished=false,bossMode=null,bossStart=0,bossKilled=false,dungeonMode=false,dungeonType='greenvale',dungeonStart=0,dungeonBossKilled=false,autoWave=false,battleSpeed=1,blackfenPoison=0,mireQueenEnraged=false;
const path=[[-30,270],[130,270],[130,120],[350,120],[350,400],[600,400],[600,210],[930,210]],types={warrior:{cost:40,range:75,damage:10,rate:650,skill:'Attack'},ranger:{cost:55,range:145,damage:8,rate:500,skill:'Ranged'},mage:{cost:70,range:120,damage:17,rate:900,skill:'Magic'}};
function xpNeed(l){return Math.floor(80*Math.pow(l,1.55))}function combatLevel(){let sk=save.skills,melee=(sk.Attack.lvl+sk.Strength.lvl)/2,style=Math.max(melee,sk.Ranged.lvl,sk.Magic.lvl);return Math.max(3,Math.floor((sk.Defence.lvl+sk.Hitpoints.lvl)*.25+style*.325))}function totalDefence(){return ['warrior','ranger','mage'].reduce((n,c)=>n+bonus(c,'defence'),0)}function addXP(skill,n){let s=save.skills[skill];const oldLevel=s.lvl;const combatSkills=['Attack','Strength','Defence','Ranged','Magic','Hitpoints'];const xpMultiplier=combatSkills.includes(skill)?3.5:3;const perkXpBoost=(hasPerk('experienced')?.05:0)+(hasPerk('realmforged')?.05:0);const gained=Math.max(1,Math.round(n*xpMultiplier*(1+perkXpBoost)));s.xp+=gained;window._lastXpGain={skill:skill,base:n,gained:gained,multiplier:xpMultiplier};while(s.lvl<99&&s.xp>=xpNeed(s.lvl)){s.xp-=xpNeed(s.lvl);s.lvl++}writeSave(false);window.dispatchEvent(new CustomEvent('realmforge:xp',{detail:{skill,gained,oldLevel,level:s.lvl}}))}let cloudSaveTimer=null;function scheduleCloudSave(){if(!cloudConfigured()||!cloudSession||testMode)return;clearTimeout(cloudSaveTimer);cloudSaveTimer=setTimeout(function(){cloudPushInternal(false)},1800)}function persist(){writeSave(true);renderUI();scheduleCloudSave()}const generalStore=[
 {name:'Copper ore',price:35},{name:'Tin ore',price:35},{name:'Logs',price:45},{name:'Cooked Minnow',price:90},
 {name:'Oakheart logs',price:180},{name:'Ironvale ore',price:240},{name:'Cooked Trout',price:220},{name:'Cooked Pike',price:480}
];
const blacksmithStore=[
 {name:'Bronze bar',price:160},{name:'Ironvale bar',price:650},{name:'Frostsilver bar',price:1800}
];
const merchantPool=[
 {name:'Ashweave Cloth',price:950},{name:'Golem Core',price:8500},{name:'Flameguard Sigil',price:11000},
 {name:'Frostsilver ore',price:1200},{name:'Frostpine logs',price:1350},{name:'Frostweave Cloth',price:1750}
];
function merchantDayKey(){var d=new Date();return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()}
function refreshMerchant(){
 var day=merchantDayKey();if(save.market.merchantDay===day&&save.market.merchantStock.length)return;
 var pool=merchantPool.slice(),stock=[];while(pool.length&&stock.length<3){var i=Math.floor(Math.random()*pool.length);stock.push(pool.splice(i,1)[0].name)}
 save.market.merchantDay=day;save.market.merchantStock=stock;writeSave(false)
}
function buyMarketItem(shop,name,amount){
 var list=shop==='general'?generalStore:shop==='blacksmith'?blacksmithStore:merchantPool;
 var entry=list.find(function(x){return x.name===name});if(!entry)return;
 if(shop==='merchant'&&!save.market.merchantStock.includes(name))return;
 amount=Math.max(1,Math.floor(Number(amount)||1));
 var total=entry.price*amount;
 if(save.coins<total){alert('You need '+total.toLocaleString()+' coins to buy '+amount+' × '+name+'.');return}
 save.coins-=total;save.bank[name]=(save.bank[name]||0)+amount;
 save.drops.push('Marketplace: bought '+amount+' × '+name+' for '+total.toLocaleString()+' coins');persist()
}
function marketBuySelected(shop,name){
 var id='marketQty-'+shop+'-'+name.replace(/[^a-z0-9]/gi,'_'),el=document.getElementById(id);
 buyMarketItem(shop,name,el?el.value:1)
}
function renderMarketplace(){
 var g=document.querySelector('#generalStoreGrid'),b=document.querySelector('#blacksmithStoreGrid'),m=document.querySelector('#merchantStoreGrid'),c=document.querySelector('#marketCoins');if(!g||!b||!m)return;
 refreshMerchant();if(c)c.textContent=save.coins.toLocaleString();
 function cards(list,shop){return list.map(function(x){
  var locked=shop==='merchant'&&!save.market.merchantStock.includes(x.name);if(locked)return '';
  var max=Math.floor(save.coins/x.price),id='marketQty-'+shop+'-'+x.name.replace(/[^a-z0-9]/gi,'_');
  return '<div class="card marketItem"><b>'+x.name+'</b><div class="marketPrice">'+x.price.toLocaleString()+' coins each</div><small>Owned: '+(save.bank[x.name]||0)+'</small><div class="marketBulk"><label>Qty</label><input id="'+id+'" type="number" inputmode="numeric" min="1" value="1"><button '+(max<1?'disabled':'')+' data-market-shop="'+shop+'" data-market-name="'+x.name+'">Buy</button></div><div class="marketQuick"><button '+(max<5?'disabled':'')+' data-market-quick="5" data-market-shop="'+shop+'" data-market-name="'+x.name+'">x5</button><button '+(max<10?'disabled':'')+' data-market-quick="10" data-market-shop="'+shop+'" data-market-name="'+x.name+'">x10</button><button '+(max<50?'disabled':'')+' data-market-quick="50" data-market-shop="'+shop+'" data-market-name="'+x.name+'">x50</button><button '+(max<1?'disabled':'')+' data-market-quick="'+max+'" data-market-shop="'+shop+'" data-market-name="'+x.name+'">MAX</button></div></div>'
 }).join('')}
 g.innerHTML=cards(generalStore,'general');b.innerHTML=cards(blacksmithStore,'blacksmith');m.innerHTML=cards(merchantPool.filter(function(x){return save.market.merchantStock.includes(x.name)}),'merchant');
 [g,b,m].forEach(function(grid){
  grid.querySelectorAll('[data-market-name]:not([data-market-quick])').forEach(function(btn){btn.onclick=function(){marketBuySelected(btn.dataset.marketShop,btn.dataset.marketName)}});
  grid.querySelectorAll('[data-market-quick]').forEach(function(btn){btn.onclick=function(){buyMarketItem(btn.dataset.marketShop,btn.dataset.marketName,btn.dataset.marketQuick)}})
 });
 var day=document.querySelector('#merchantRefresh');if(day)day.textContent='Stock changes daily • '+save.market.merchantDay
}
window.buyMarketItem=buyMarketItem;window.marketBuySelected=marketBuySelected;
const perkTaskPool=[
{id:'mine100',name:'Rock Solid',desc:'Mine 100 ores',type:'mine',amount:100,xp:12,tier:'Standard',points:1},
{id:'mine250',name:'Deep Delver',desc:'Mine 250 ores',type:'mine',amount:250,xp:25,tier:'Hard',points:2},
{id:'fish150',name:'River Worker',desc:'Catch 150 fish',type:'fish',amount:150,xp:18,tier:'Standard',points:1},
{id:'cook100',name:'Camp Cook',desc:'Successfully cook 100 fish',type:'cook',amount:100,xp:18,tier:'Standard',points:1},
{id:'smith40',name:'Forge Duty',desc:'Smith 40 pieces of equipment',type:'smith',amount:40,xp:25,tier:'Hard',points:2},
{id:'kills250',name:'Monster Sweep',desc:'Defeat 250 enemies',type:'kill',amount:250,xp:20,tier:'Hard',points:2},
{id:'maps3',name:'Campaign Patrol',desc:'Complete 3 normal maps',type:'map',amount:3,xp:20,tier:'Hard',points:2},
{id:'boss3',name:'Boss Breaker',desc:'Defeat 3 campaign or hunt bosses',type:'boss',amount:3,xp:40,tier:'Elite',points:4},
{id:'depths2',name:'Into the Depths',desc:'Complete Greenvale Depths twice',type:'depths',amount:2,xp:40,tier:'Elite',points:4},
{id:'crypt2',name:'Frozen Trial',desc:'Complete the Frozen Crypt twice',type:'crypt',amount:2,xp:75,tier:'Legendary',points:8,req:'Frozen Crypt unlocked'}
];
function perkDayKey(){var d=new Date();return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()}
function perkXpNeed(l){return Math.floor(60*Math.pow(l,1.5))}
function perkSlots(){var l=save.perks.level;return l>=99?5:l>=75?4:l>=50?3:l>=20?2:1}
function refreshPerkTasks(){var day=perkDayKey();if(save.perks.day===day)return;var pool=perkTaskPool.slice(),out=[];while(pool.length&&out.length<5)out.push(pool.splice(Math.floor(Math.random()*pool.length),1)[0].id);save.perks.day=day;save.perks.tasks=out;save.perks.progress={};save.perks.completedToday=[];writeSave(false)}
function addPerkProgress(type,n){refreshPerkTasks();save.perks.tasks.forEach(function(id){var t=perkTaskPool.find(function(x){return x.id===id});if(t&&t.type===type){save.perks.progress[id]=Math.min(t.amount,(save.perks.progress[id]||0)+(n||1))}});writeSave(false)}
function claimPerkTask(id){var t=perkTaskPool.find(function(x){return x.id===id});if(!t||!save.perks.tasks.includes(id)||(save.perks.progress[id]||0)<t.amount)return;save.perks.tasks=save.perks.tasks.filter(function(x){return x!==id});save.perks.completedToday.push(id);save.perks.xp+=t.xp;save.perks.points+=(t.points||0);while(save.perks.level<99&&save.perks.xp>=perkXpNeed(save.perks.level)){save.perks.xp-=perkXpNeed(save.perks.level);save.perks.level++}persist()}
const perkShop={
 pickaxe:{name:'Reinforced Pickaxe',cost:25,category:'Skilling',icon:'⛏',desc:'15% chance when Mining to receive double ore and full XP.'},
 lumberjack:{name:'Lumberjack',cost:25,category:'Skilling',icon:'🪓',desc:'15% chance when Woodcutting to receive double logs and full XP.'},
 angler:{name:'Master Angler',cost:30,category:'Skilling',icon:'🎣',desc:'15% chance when Fishing to catch two fish and receive full XP.'},
 cook:{name:'Perfect Cook',cost:35,category:'Skilling',icon:'🔥',desc:'Reduces your remaining burn chance by 50%.'},
 smith:{name:'Efficient Smith',cost:40,category:'Skilling',icon:'🔨',desc:'10% chance when Smithing equipment to save the materials.'},
 fletcher:{name:"Fletcher's Touch",cost:40,category:'Skilling',icon:'🏹',desc:'15% chance to create an extra Fletching item.'},
 crafter:{name:'Careful Crafter',cost:40,category:'Skilling',icon:'🧵',desc:'15% chance to save Crafting materials.'},
 quickhands:{name:'Quick Hands',cost:60,category:'Skilling',icon:'⚡',desc:'Gathering, cooking, smithing, fletching and crafting actions are 10% faster.'},
 sharp:{name:'Sharpened Weapons',cost:50,category:'Combat',icon:'⚔',desc:'+5% damage for every tower.'},
 eagleeye:{name:'Eagle Eye',cost:50,category:'Combat',icon:'🎯',desc:'+8% tower range.'},
 rapid:{name:'Rapid Assault',cost:75,category:'Combat',icon:'⚡',desc:'+5% tower attack speed.'},
 scavenger:{name:'Battle Scavenger',cost:60,category:'Combat',icon:'💰',desc:'+10% battle coins from defeated enemies.'},
 laststand:{name:'Last Stand',cost:100,category:'Combat',icon:'🛡',desc:'+15% tower damage while you have 5 lives or fewer.'},
 bossslayer:{name:'Boss Slayer',cost:125,category:'Combat',icon:'👹',desc:'+10% damage against bosses.'},
 delver:{name:'Dungeon Delver',cost:125,category:'Combat',icon:'🏰',desc:'+10% tower damage inside dungeons.'},
 coins:{name:'Coin Collector',cost:50,category:'Loot',icon:'🪙',desc:'+10% permanent coins from enemy kills.'},
 resourceful:{name:'Resourceful',cost:75,category:'Loot',icon:'🎒',desc:'10% chance for a defeated enemy to give an extra basic resource.'},
 lucky:{name:'Lucky Adventurer',cost:125,category:'Loot',icon:'💎',desc:'+10% relative bonus to rare equipment drop chances.'},
 hoarder:{name:'Dungeon Hoarder',cost:150,category:'Loot',icon:'📦',desc:'+10% resources from dungeon completion chests.'},
 bounty:{name:'Bounty Hunter',cost:175,category:'Loot',icon:'👑',desc:'+20% coins from defeated bosses.'},
 experienced:{name:'Experienced',cost:200,category:'Master',icon:'📚',desc:'+5% XP from every skill.'},
 veteranwarrior:{name:'Veteran Warrior',cost:250,category:'Master',icon:'⚔',desc:'Warrior towers deal +8% damage.'},
 veteranranger:{name:'Veteran Ranger',cost:250,category:'Master',icon:'🏹',desc:'Ranger towers deal +8% damage.'},
 veteranmage:{name:'Veteran Mage',cost:250,category:'Master',icon:'🔮',desc:'Mage towers deal +8% damage.'},
 executioner:{name:'Executioner',cost:350,category:'Master',icon:'💀',desc:'+15% damage against bosses below 25% health.'},
 mastergatherer:{name:'Master Gatherer',cost:400,category:'Master',icon:'🌟',desc:'+10% gathering speed and +10 percentage points to double-resource chances.'},
 realmforged:{name:'Realmforged',cost:750,category:'Master',icon:'🏆',desc:'+5% tower damage, +5% tower range and +5% XP.'}
};
function buyPerk(id){var p=perkShop[id];if(!p||save.perks.unlocked.includes(id))return;if(save.perks.points<p.cost){alert('You need '+p.cost+' Perk Points.');return}save.perks.points-=p.cost;save.perks.unlocked.push(id);save.drops.push('PERK UNLOCKED: '+p.name);persist()}
window.buyPerk=buyPerk;
function togglePerk(id){if(!save.perks.unlocked.includes(id))return;var i=save.perks.equipped.indexOf(id);if(i>=0)save.perks.equipped.splice(i,1);else if(save.perks.equipped.length<perkSlots())save.perks.equipped.push(id);else{alert('All perk slots are full.');return}persist()}
function hasPerk(id){return save.perks.equipped.includes(id)}
function renderPerks(){
 var g=document.querySelector('#perkTaskGrid'),stats=document.querySelector('#perkStats'),owned=document.querySelector('#perkOwned');if(!g)return;
 refreshPerkTasks();var need=save.perks.level>=99?0:perkXpNeed(save.perks.level);
 stats.innerHTML='<b>Perk Level '+save.perks.level+'</b> • '+save.perks.xp+(need?' / '+need:' MAX')+' XP<br><b>Perk Points: '+save.perks.points+'</b><br>Daily Tasks: '+(save.perks.completedToday.length||0)+' / 5 completed<br>Slots: '+save.perks.equipped.length+' / '+perkSlots();
 g.innerHTML=save.perks.tasks.length?save.perks.tasks.map(function(id){var t=perkTaskPool.find(function(x){return x.id===id}),p=save.perks.progress[id]||0;return '<div class="card"><b>'+t.name+'</b> <small>'+t.tier+'</small><p>'+t.desc+'</p>'+(t.req?'<small>Requirement: '+t.req+' (tasks can roll before you meet it)</small><br>':'')+'<strong>'+p+' / '+t.amount+'</strong><br><small>Reward: '+t.xp+' Perk XP + '+t.points+' Perk Point'+(t.points===1?'':'s')+'</small><br><button '+(p<t.amount?'disabled':'')+' onclick="claimPerkTask(\''+id+'\')">Claim Reward</button></div>'}).join(''):'<div class="card"><b>All daily Perk Tasks completed!</b><p>You have completed all 5 tasks for today. A fresh set will generate tomorrow.</p></div>';
 function perkCard(id,p){var unlocked=save.perks.unlocked.includes(id);return '<div class="card"><b>'+p.icon+' '+p.name+'</b><p>'+p.desc+'</p><small>'+(unlocked?'Unlocked':p.cost+' Perk Points')+'</small><br>'+(unlocked?'<button data-perk-toggle="'+id+'">'+(hasPerk(id)?'Unequip':'Equip')+'</button>':'<button '+(save.perks.points<p.cost?'disabled':'')+' data-perk-buy="'+id+'">Unlock • '+p.cost+' Points</button>')+'</div>'}
 var categories=['Skilling','Combat','Loot','Master'];
 owned.innerHTML=categories.map(function(cat){var cards=Object.entries(perkShop).filter(function(e){return e[1].category===cat}).map(function(e){return perkCard(e[0],e[1])}).join('');return '<details class="bankCategory" '+(cat==='Skilling'?'open':'')+'><summary><b>'+cat+' Perks</b></summary><div class="grid">'+cards+'</div></details>'}).join('');
 owned.querySelectorAll('[data-perk-buy]').forEach(function(btn){btn.onclick=function(){buyPerk(btn.getAttribute('data-perk-buy'))}});
 owned.querySelectorAll('[data-perk-toggle]').forEach(function(btn){btn.onclick=function(){togglePerk(btn.getAttribute('data-perk-toggle'))}})
}
window.claimPerkTask=claimPerkTask;window.togglePerk=togglePerk;
const enhancementCosts=[0,250,750,1750,4000,9000];
const salvageUniqueNames=['Warlord Cleaver','Warlord Crest','Emberfang Blade','Ashguard Helm','Cinderbow','Ember Staff','Wyrmfrost Blade','Glacier Bow','Wintercore Staff','Wyrmscale Crown','Cryptfang Greatsword','Glacial Recurve','Soulfrost Sceptre','Crown of the Crypt','Mirefang Greatblade','Venomwood Bow','Plaguebloom Staff','Mire Queen Crown','Colossus Cleaver','Drowned Recurve','Temple Hexstaff','Bogheart Talisman'];
function enhancementLevel(name){return Math.max(0,Math.min(5,Number(save.enhancements&&save.enhancements[name])||0))}
function enhancementCost(name){var l=enhancementLevel(name);return l>=5?0:enhancementCosts[l+1]}
function enhancementBonus(name,key){
 var it=itemDB[name],lvl=enhancementLevel(name);if(!it||!lvl)return 0;
 if(key==='damage'&&(it.damage||0)>0)return lvl;
 if(key==='range'&&(it.range||0)>0)return lvl*2;
 if(key==='defence'&&(it.defence||0)>0)return lvl*2;
 return 0
}
function salvageValue(name){
 var it=itemDB[name];if(!it)return 0;
 if(salvageUniqueNames.includes(name))return 150;
 var req=it.req?Math.max.apply(null,Object.values(it.req).map(function(v){return Number(v)||0})):0;
 var power=(Number(it.damage)||0)*3+(Number(it.defence)||0)+(Number(it.range)||0)*.35+(Number(it.speed)||0)*30;
 if(req>=30||power>=28)return 75;
 if(req>=15||power>=14)return 30;
 if(req>=5||power>=6)return 12;
 return 5
}
function equippedCopies(name){
 var n=0;Object.values(save.equipment||{}).forEach(function(eq){Object.values(eq||{}).forEach(function(x){if(x===name)n++})});return n
}
function salvageAvailable(name){return Math.max(0,(Number(save.items[name])||0)-equippedCopies(name))}
function salvageItem(name,all){
 var qty=salvageAvailable(name),value=salvageValue(name);if(!qty||!value){alert('No unequipped copies of '+name+' are available to salvage.');return}
 var amount=all?qty:1,total=value*amount;
 if(salvageUniqueNames.includes(name)&&!confirm('Salvage '+amount+' × '+name+' for '+total+' Salvage Points? This rare item will be permanently destroyed.'))return;
 save.items[name]-=amount;save.salvagePoints+=total;save.drops.push('Salvaged '+amount+' × '+name+' for '+total+' Salvage Points');persist()
}
function enhanceItem(name){
 var it=itemDB[name],lvl=enhancementLevel(name);if(!it||!(save.items[name]>0)){alert('You need to own '+name+' before it can be enhanced.');return}
 if(lvl>=5){alert(name+' is already +5.');return}
 var cost=enhancementCosts[lvl+1];if(save.salvagePoints<cost){alert('You need '+cost.toLocaleString()+' Salvage Points for the next enhancement.');return}
 save.salvagePoints-=cost;save.enhancements[name]=lvl+1;save.drops.push('Blacksmith: '+name+' enhanced to +'+(lvl+1)+' for '+cost+' Salvage Points');persist()
}
function renderSalvage(){
 var g=document.querySelector('#salvageGrid'),wallet=document.querySelector('#salvagePoints');if(wallet)wallet.textContent=(save.salvagePoints||0).toLocaleString();if(!g)return;
 var owned=Object.keys(save.items).filter(function(n){return salvageAvailable(n)>0&&itemDB[n]});
 if(!owned.length){g.innerHTML='<div class="card">No unequipped equipment is available to salvage. Equipped gear is protected.</div>';return}
 g.innerHTML=owned.map(function(n){var qty=salvageAvailable(n),v=salvageValue(n),rare=salvageUniqueNames.includes(n);return '<div class="card marketItem"><b>'+n+'</b><div>'+itemDB[n].class+' • '+itemDB[n].slot+'</div><small>Available: '+qty+' • '+v+' Salvage Points each'+(rare?' • RARE':'')+'</small><div class="marketQuick"><button data-salvage-one="'+encodeURIComponent(n)+'">Salvage 1</button><button data-salvage-all="'+encodeURIComponent(n)+'">Salvage All</button></div></div>'}).join('');g.querySelectorAll('[data-salvage-one]').forEach(function(b){b.onclick=function(){salvageItem(decodeURIComponent(b.dataset.salvageOne),false)}});g.querySelectorAll('[data-salvage-all]').forEach(function(b){b.onclick=function(){salvageItem(decodeURIComponent(b.dataset.salvageAll),true)}})
}
function renderEnhancements(){
 var g=document.querySelector('#enhancementGrid'),wallet=document.querySelector('#enhanceSalvagePoints');if(wallet)wallet.textContent=(save.salvagePoints||0).toLocaleString();if(!g)return;
 var owned=Object.keys(save.items).filter(function(n){return (save.items[n]||0)>0&&itemDB[n]});
 if(!owned.length){g.innerHTML='<div class="card">Own equipment to unlock Blacksmith enhancements.</div>';return}
 g.innerHTML=owned.map(function(n){var it=itemDB[n],lvl=enhancementLevel(n),cost=enhancementCost(n),bits=[];if(it.damage)bits.push('+'+lvl+' damage');if(it.range)bits.push('+'+(lvl*2)+' range');if(it.defence)bits.push('+'+(lvl*2)+' defence');return '<div class="card marketItem"><b>'+n+(lvl?' +'+lvl:'')+'</b><div>'+it.class+' • '+it.slot+'</div><small>'+(lvl?bits.join(' • '):'Not enhanced yet')+'</small><br><button '+(lvl>=5||save.salvagePoints<cost?'disabled':'')+' data-enhance="'+encodeURIComponent(n)+'">'+(lvl>=5?'MAX +5':'Enhance to +'+(lvl+1)+' • '+cost.toLocaleString()+' Salvage Points')+'</button></div>'}).join('');g.querySelectorAll('[data-enhance]').forEach(function(b){b.onclick=function(){enhanceItem(decodeURIComponent(b.dataset.enhance))}})
}
window.enhanceItem=enhanceItem;window.salvageItem=salvageItem;

function bonus(cls,key){return Object.values(save.equipment[cls]).reduce(function(n,name){return n+(itemDB[name]?.[key]||0)+enhancementBonus(name,key)},0)}
function msg(t){let e=document.querySelector('#skillMessage');if(e)e.textContent=t}
const gatherDB={copper:{name:'Copper Rock',item:'Copper ore',skill:'Mining',xp:10,time:2500,level:1,verb:'Mining Copper'},tin:{name:'Tin Rock',item:'Tin ore',skill:'Mining',xp:10,time:2500,level:1,verb:'Mining Tin'},logs:{name:'Greenvale Tree',item:'Logs',skill:'Woodcutting',xp:25,time:3000,level:1,verb:'Chopping Greenvale Tree'},oak:{name:'Oakheart Tree',item:'Oakheart logs',skill:'Woodcutting',xp:60,time:4000,level:10,verb:'Chopping Oakheart'},bronze:{name:'Bronze Bar',skill:'Smithing',xp:12,time:3000,level:1,verb:'Smelting Bronze'},ironore:{name:'Ironvale Vein',item:'Ironvale ore',skill:'Mining',xp:28,time:4200,level:10,verb:'Mining Ironvale'},ironbar:{name:'Ironvale Bar',skill:'Smithing',xp:30,time:3800,level:12,verb:'Smelting Ironvale'},minnow:{name:'Greenvale Minnow',item:'Raw Minnow',skill:'Fishing',xp:10,time:2400,level:1,verb:'Fishing Greenvale Minnow'},trout:{name:'River Trout',item:'Raw Trout',skill:'Fishing',xp:24,time:3300,level:8,verb:'Fishing River Trout'},pike:{name:'Deepwater Pike',item:'Raw Pike',skill:'Fishing',xp:42,time:4300,level:18,verb:'Fishing Deepwater Pike'},frostsilver:{name:'Frostsilver Vein',item:'Frostsilver ore',skill:'Mining',xp:55,time:5200,level:25,verb:'Mining Frostsilver'},frostpine:{name:'Frostpine Tree',item:'Frostpine logs',skill:'Woodcutting',xp:99,time:5000,level:25,verb:'Chopping Frostpine'},frostbar:{name:'Frostsilver Bar',skill:'Smithing',xp:65,time:4800,level:27,verb:'Smelting Frostsilver'},bogiron:{name:'Bogiron Vein',item:'Bogiron ore',skill:'Mining',xp:82,time:6000,level:38,verb:'Mining Bogiron'},rotwood:{name:'Rotwood Tree',item:'Rotwood logs',skill:'Woodcutting',xp:135,time:5800,level:38,verb:'Chopping Rotwood'},bogbar:{name:'Bogiron Bar',skill:'Smithing',xp:95,time:5500,level:40,verb:'Smelting Bogiron'}};
const cookDB={minnow:{raw:'Raw Minnow',cooked:'Cooked Minnow',level:1,xp:12,time:2200,burn:.18},trout:{raw:'Raw Trout',cooked:'Cooked Trout',level:8,xp:28,time:3000,burn:.15},pike:{raw:'Raw Pike',cooked:'Cooked Pike',level:18,xp:50,time:3900,burn:.12}};
let cookingKey=null,cookingTimer=null,cookingStart=0;
function startCooking(key){var r=cookDB[key];if(!r)return;if(save.skills.Cooking.lvl<r.level){msg('You need Cooking level '+r.level+'.');return}if((save.bank[r.raw]||0)<1){msg('You need '+r.raw+'.');return}stopCooking(false);stopGathering(false);cookingKey=key;cookingStart=performance.now();var an=document.querySelector('#activityName'),at=document.querySelector('#activityText'),sb=document.querySelector('#stopGather');if(an)an.textContent='Cooking '+r.cooked;if(at)at.textContent='Cooking automatically until you run out...';if(sb)sb.disabled=false;cookingTimer=setInterval(function(){completeCooking(key)},r.time*(hasPerk('quickhands')?.9:1));renderCookingProgress()}
function completeCooking(key){if(cookingKey!==key)return;var r=cookDB[key];if((save.bank[r.raw]||0)<1){msg('Cooking stopped: you ran out of '+r.raw+'.');stopCooking();renderUI();return}save.bank[r.raw]--;var chance=Math.max(.02,r.burn-save.skills.Cooking.lvl*.004);if(hasPerk('cook'))chance*=.5;if(Math.random()<chance){addXP('Cooking',Math.ceil(r.xp*.25));msg('The fish burns.')}else{save.bank[r.cooked]=(save.bank[r.cooked]||0)+1;addXP('Cooking',r.xp);addPerkProgress('cook',1);msg('You cook 1 '+r.cooked+'.')}cookingStart=performance.now();renderUI()}
function stopCooking(show){if(show===undefined)show=true;if(cookingTimer)clearInterval(cookingTimer);cookingTimer=null;cookingKey=null;if(show){var an=document.querySelector('#activityName'),at=document.querySelector('#activityText'),sb=document.querySelector('#stopGather'),ap=document.querySelector('#activityProgress i');if(an)an.textContent='Not currently gathering';if(at)at.textContent='Cooking stopped.';if(sb)sb.disabled=true;if(ap)ap.style.width='0%'}}
function renderCookingProgress(){if(!cookingKey)return;var r=cookDB[cookingKey],ap=document.querySelector('#activityProgress i');if(ap)ap.style.width=Math.min(100,(performance.now()-cookingStart)/r.time*100)+'%';requestAnimationFrame(renderCookingProgress)}
window.startCooking=startCooking;
let gathering=null,gatherStart=0,gatherTimer=null;
function startGathering(type){let g=gatherDB[type];if(!g)return;if(save.skills[g.skill].lvl<g.level){msg('You need '+g.skill+' level '+g.level+'.');return}if(type==='bronze'&&(save.bank['Copper ore']<1||save.bank['Tin ore']<1)){msg('You need Copper and Tin ore to start smelting.');return}if(type==='frostbar'&&save.bank['Frostsilver ore']<2){msg('You need 2 Frostsilver ore to start smelting.');return}if(type==='ironbar'&&save.bank['Ironvale ore']<2){msg('You need 2 Ironvale ore to start smelting.');return}if(type==='bogbar'&&save.bank['Bogiron ore']<2){msg('You need 2 Bogiron ore to start smelting.');return}stopGathering(false);gathering=type;gatherStart=performance.now();activityName.textContent=g.verb;activityText.textContent='Gathering automatically...';stopGather.disabled=false;gatherTimer=setInterval(()=>completeGather(type),g.time*(hasPerk('quickhands')||hasPerk('mastergatherer')?.9:1));renderGatherProgress()}
function completeGather(type){if(gathering!==type)return;let g=gatherDB[type];if(type==='bronze'){if(save.bank['Copper ore']<1||save.bank['Tin ore']<1){msg('Smelting stopped: you ran out of Copper or Tin ore.');stopGathering();renderUI();return}save.bank['Copper ore']--;save.bank['Tin ore']--;save.bank['Bronze bar']++;addXP('Smithing',12);gatherStart=performance.now();msg('You smelt 1 Bronze bar.');renderUI();return}if(type==='frostbar'){if(save.bank['Frostsilver ore']<2){msg('Smelting stopped: you need 2 Frostsilver ore.');stopGathering();renderUI();return}save.bank['Frostsilver ore']-=2;save.bank['Frostsilver bar']++;addXP('Smithing',65);gatherStart=performance.now();msg('You smelt 1 Frostsilver bar.');renderUI();return}if(type==='ironbar'){if(save.bank['Ironvale ore']<2){msg('Smelting stopped: you need 2 Ironvale ore.');stopGathering();renderUI();return}save.bank['Ironvale ore']-=2;save.bank['Ironvale bar']++;addXP('Smithing',30);gatherStart=performance.now();msg('You smelt 1 Ironvale bar.');renderUI();return}if(type==='bogbar'){if(save.bank['Bogiron ore']<2){msg('Smelting stopped: you need 2 Bogiron ore.');stopGathering();renderUI();return}save.bank['Bogiron ore']-=2;save.bank['Bogiron bar']=(save.bank['Bogiron bar']||0)+1;addXP('Smithing',95);gatherStart=performance.now();msg('You smelt 1 Bogiron bar.');renderUI();return}var qty=1;var doubleChance=hasPerk('mastergatherer')?.10:0;if(g.skill==='Mining'&&hasPerk('pickaxe'))doubleChance+=.15;if(g.skill==='Woodcutting'&&hasPerk('lumberjack'))doubleChance+=.15;if(g.skill==='Fishing'&&hasPerk('angler'))doubleChance+=.15;if(Math.random()<doubleChance)qty=2;save.bank[g.item]=(save.bank[g.item]||0)+qty;addXP(g.skill,g.xp*qty);if(g.skill==='Mining')addPerkProgress('mine',qty);else if(g.skill==='Fishing')addPerkProgress('fish',qty);gatherStart=performance.now();msg(qty===2?'PICKAXE PERK! Double ore + double XP.':'You gather 1 '+g.item+'.');renderUI()}
function stopGathering(show=true){if(gatherTimer)clearInterval(gatherTimer);gatherTimer=null;gathering=null;if(window.activityName)activityName.textContent='Not currently gathering';if(window.activityText)activityText.textContent=show?'Gathering stopped.':'Choose a resource below.';if(window.stopGather)stopGather.disabled=true;if(window.activityProgress)activityProgress.querySelector('i').style.width='0%'}
function renderGatherProgress(){if(!gathering)return;let g=gatherDB[gathering],pct=Math.min(100,(performance.now()-gatherStart)/g.time*100);if(window.activityProgress)activityProgress.querySelector('i').style.width=pct+'%';requestAnimationFrame(renderGatherProgress)}
window.startGathering=startGathering;window.stopGathering=stopGathering;
let smithingKey=null,smithTimer=null,smithStart=0;
function startSmithing(key){let r=recipes[key];if(!r)return;if(save.skills.Smithing.lvl<r.level){msg('You need Smithing level '+r.level+'.');return}if((save.bank[r.resource]||0)<r.bars){msg('You need '+r.bars+' '+r.resource+(r.bars>1?'s':'')+'.');return}stopGathering(false);stopSmithing(false);smithingKey=key;smithStart=performance.now();activityName.textContent='Smithing '+r.name;activityText.textContent='Producing automatically...';stopGather.disabled=false;smithTimer=setInterval(()=>completeSmithing(key),r.time*(hasPerk('quickhands')?.9:1));renderSmithProgress()}
function completeSmithing(key){if(smithingKey!==key)return;let r=recipes[key];if((save.bank[r.resource]||0)<r.bars){msg('Smithing stopped: not enough '+r.resource+'.');stopSmithing();renderUI();return}var saveSmithMats=hasPerk('smith')&&Math.random()<.10;if(!saveSmithMats)save.bank[r.resource]-=r.bars;save.items[r.name]=(save.items[r.name]||0)+1;questCraft(r.name);addXP('Smithing',r.xp);addPerkProgress('smith',1);smithStart=performance.now();msg('You smith 1 '+r.name+'.');renderUI()}
function stopSmithing(show=true){if(smithTimer)clearInterval(smithTimer);smithTimer=null;smithingKey=null;if(show&&window.activityName){activityName.textContent='Not currently gathering';activityText.textContent='Smithing stopped.';stopGather.disabled=true;activityProgress.querySelector('i').style.width='0%'}}
function renderSmithProgress(){if(!smithingKey)return;let r=recipes[smithingKey],pct=Math.min(100,(performance.now()-smithStart)/r.time*100);activityProgress.querySelector('i').style.width=pct+'%';requestAnimationFrame(renderSmithProgress)}
const oldStopGather=stopGathering;stopGathering=function(show=true){oldStopGather(show);if(smithingKey)stopSmithing(show)}
window.startSmithing=startSmithing;
function equipItem(name,targetClass){
 let it=itemDB[name];if(!it||!(save.items[name]>0))return;
 if(it.req){for(const [skill,lvl] of Object.entries(it.req))if(save.skills[skill].lvl<lvl){alert(name+' requires '+skill+' level '+lvl+'.');return}}
 const cls=it.class==='all'?targetClass:it.class;
 if(!['warrior','ranger','mage'].includes(cls)){alert('Choose which class should equip this item.');return}
 save.equipment[cls][it.slot]=name;persist();
}window.equipItem=equipItem;


const questDB=[
{id:'road',name:'Trouble on the Greenvale Road',npc:'Warden Elira',story:'Travellers are vanishing along the outer road. Elira needs someone to thin the creatures before the caravans return.',req:()=>true,objective:'Defeat 15 Rats and 10 Goblins',done:()=>qkill('rat')>=15&&qkill('goblin')>=10,reward:'1,000 coins + 10 Bronze bars + 350 Attack XP + 350 Strength XP + 350 Hitpoints XP',give:()=>{save.coins+=1000;save.bank['Bronze bar']+=10;addXP('Attack',200);addXP('Strength',200);addXP('Hitpoints',200)}},
{id:'forge',name:'The Smith\'s Lost Order',npc:'Smith Torren',story:'Torren promised weapons to Greenvale\'s wardens, but the roads are too dangerous for his apprentices. Prove you can work the forge yourself.',req:()=>save.skills.Smithing.lvl>=3,objective:'Smith 1 Bronze Helm and 1 Bronze Sword',done:()=>qcraft('Bronze Helm')>=1&&qcraft('Bronze Sword')>=1,reward:'1,500 coins + 12 Copper ore + 12 Tin ore + 750 Smithing XP',give:()=>{save.coins+=1500;save.bank['Copper ore']+=12;save.bank['Tin ore']+=12;addXP('Smithing',500)}},
{id:'stronghold',name:'The Warlord\'s Banner',npc:'Captain Rowan',story:'Greenvale will not be safe while the Goblin Warlord holds the stronghold. Rowan asks you to break the siege for good.',req:()=>save.campaign.unlocked>=5,objective:'Defeat the Goblin Warlord',done:()=>save.campaign.bossKills>=1,reward:'2,500 coins + 15 Bronze bars + 700 Attack XP + 700 Strength XP + 700 Defence XP + 700 Hitpoints XP',give:()=>{save.coins+=2500;save.bank['Bronze bar']+=15;['Attack','Strength','Defence','Hitpoints'].forEach(x=>addXP(x,400))}},
{id:'embers',name:'Whispers in the Ash',npc:'Scholar Vael',story:'The mountain is waking. Vael believes the Emberlings carry traces of an older fire beneath Ashen Peaks.',req:()=>save.campaign.unlocked>=6,objective:'Defeat 20 Emberlings and 10 Cinder Hounds',done:()=>qkill('emberling')>=20&&qkill('cinderhound')>=10,reward:'3,000 coins + 18 Ironvale ore + 1,050 Ranged XP + 1,050 Hitpoints XP',give:()=>{save.coins+=3000;save.bank['Ironvale ore']+=18;addXP('Ranged',600);addXP('Hitpoints',600)}},
{id:'tyrant',name:'Heart of the Citadel',npc:'Warden Elira',story:'The Ember Tyrant has sealed itself inside the citadel. Greenvale and Ashen Peaks will both burn if it is left unchecked.',req:()=>save.campaign.unlocked>=10,objective:'Defeat the Ember Tyrant',done:()=>save.campaign.ashenBossKills>=1,reward:'6,000 coins + 15 Ironvale bars + 40 Hunter Points + 1,400 Magic XP + 1,400 Defence XP + 1,400 Hitpoints XP',give:()=>{save.coins+=6000;save.bank['Ironvale bar']+=15;save.hunter.points+=40;['Magic','Defence','Hitpoints'].forEach(x=>addXP(x,800))}},
{id:'depths',name:'Roots Below Greenvale',npc:'Keeper Moss',story:'Something beneath Greenvale is twisting the oldest roots. The Root Warden must be confronted before the corruption reaches the surface.',req:()=>save.quests.completed.includes('stronghold'),objective:'Complete Greenvale Depths once',done:()=>save.dungeon.completions>=1,reward:'5,000 coins + Greenvale Signet + 1,750 Defence XP + 1,750 Hitpoints XP',give:()=>{save.coins+=5000;save.items['Greenvale Signet']=(save.items['Greenvale Signet']||0)+1;addXP('Defence',1000);addXP('Hitpoints',1000)}},
{id:'ashenmaster',name:'Ashes of the Fallen',npc:'Scholar Vael',story:'Vael needs proof that the strongest creatures of Ashen Peaks can be overcome repeatedly, not merely survived once.',req:()=>save.quests.completed.includes('tyrant'),objective:'Defeat 10 Ash Golems, 8 Flameguards and the Ember Tyrant twice',done:()=>qkill('ashgolem')>=10&&qkill('flameguard')>=8&&save.campaign.ashenBossKills>=2,reward:'8,000 coins + Ashen Pendant + 60 Hunter Points + 2,250 Monster Hunter XP',give:()=>{save.coins+=8000;save.items['Ashen Pendant']=(save.items['Ashen Pendant']||0)+1;save.hunter.points+=60;addXP('Monster Hunter',1500)}},
{id:'frostcall',name:'The Frozen Warning',npc:'Ranger Sera',story:'Scouts returning from Frostmere speak of creatures moving beneath the snow and a shadow circling the Citadel of Ice.',req:()=>save.quests.completed.includes('tyrant')&&save.campaign.unlocked>=11,objective:'Defeat 15 Frost Wolves and 12 Ice Raiders',done:()=>qkill('frostwolf')>=15&&qkill('iceraider')>=12,reward:'7,500 coins + 15 Frostsilver ore + 10 Frostpine logs + 2,100 Ranged XP + 2,100 Hitpoints XP',give:()=>{save.coins+=7500;save.bank['Frostsilver ore']+=15;save.bank['Frostpine logs']+=10;addXP('Ranged',1200);addXP('Hitpoints',1200)}},
{id:'frostforge',name:'Forged for the North',npc:'Smith Torren',story:'Ordinary metal cracks in Frostmere. Torren wants you to prove Frostsilver can be shaped into equipment worthy of the northern campaign.',req:()=>save.quests.completed.includes('frostcall')&&save.skills.Smithing.lvl>=28,objective:'Smith a Frostsilver Helm and Frostsilver Sword',done:()=>qcraft('Frostsilver Helm')>=1&&qcraft('Frostsilver Sword')>=1,reward:'10,000 coins + 12 Frostsilver bars + 3,750 Smithing XP',give:()=>{save.coins+=10000;save.bank['Frostsilver bar']+=12;addXP('Smithing',2500)}},
{id:'wyrm',name:'Crown of Winter',npc:'Warden Elira',story:'The Frost Wyrm has awakened above the Citadel of Ice. Elira calls every surviving ally to end the threat before Frostmere is buried beneath an endless winter.',req:()=>save.quests.completed.includes('frostcall')&&save.campaign.unlocked>=15,objective:'Defeat the Frost Wyrm',done:()=>save.campaign.frostBossKills>=1,reward:'15,000 coins + Frostbound Cape + 100 Hunter Points + 3,500 Attack XP + 3,500 Strength XP + 3,500 Defence XP + 3,500 Hitpoints XP',give:()=>{save.coins+=15000;save.items['Frostbound Cape']=(save.items['Frostbound Cape']||0)+1;save.hunter.points+=100;['Attack','Strength','Defence','Hitpoints'].forEach(x=>addXP(x,2000))}},
{id:'cryptking',name:'The King Beneath the Ice',npc:'Keeper Veyra',story:'The Frost Wyrm was only the guardian. Beneath the Citadel, an ancient ruler has awakened in the Frozen Crypt. Veyra asks you to descend into the tomb and end the Crypt King\'s reign before his frozen host reaches Frostmere.',req:()=>save.quests.completed.includes('wyrm')&&frozenCryptUnlocked(),objective:'Complete The Frozen Crypt and defeat the Crypt King',done:()=>save.dungeon.frozenCrypt.completions>=1,reward:'25,000 coins + 15 Frostsilver bars + 12 Frostweave Cloth + 150 Hunter Points + 5,250 Attack XP + 5,250 Strength XP + 5,250 Defence XP + 5,250 Hitpoints XP + 3,000 Monster Hunter XP',give:()=>{save.coins+=25000;save.bank['Frostsilver bar']+=15;save.bank['Frostweave Cloth']+=12;save.hunter.points+=150;['Attack','Strength','Defence','Hitpoints'].forEach(x=>addXP(x,3000));addXP('Monster Hunter',2000)}}
]
function qkill(k){return Number(save.quests.kills[k])||0}function qcraft(k){return Number(save.quests.crafted[k])||0}
function questKill(k){save.quests.kills[k]=qkill(k)+1}
function questCraft(n){save.quests.crafted[n]=qcraft(n)+1}
function startQuest(id){let q=questDB.find(x=>x.id===id);if(!q||!q.req()||save.quests.started.includes(id)||save.quests.completed.includes(id))return;save.quests.started.push(id);persist()}window.startQuest=startQuest;
function claimQuest(id){let q=questDB.find(x=>x.id===id);if(!q||!save.quests.started.includes(id)||!q.done()||save.quests.completed.includes(id))return;q.give();save.quests.completed.push(id);save.drops.push('QUEST COMPLETE: '+q.name);persist();alert('Quest complete: '+q.name+'\nReward: '+q.reward)}window.claimQuest=claimQuest;
function renderQuests(){let g=document.querySelector('#questGrid'),st=document.querySelector('#questStats');if(!g)return;st.textContent=save.quests.completed.length+' / '+questDB.length+' quests completed';g.innerHTML=questDB.map(q=>{let complete=save.quests.completed.includes(q.id),started=save.quests.started.includes(q.id),available=q.req(),ready=started&&q.done();return '<div class="questCard '+(complete?'questComplete':!available?'questLocked':'')+'"><span class="questNpc">'+q.npc+'</span><h3>'+q.name+'</h3><p>'+q.story+'</p><b>Objective</b><p>'+q.objective+'</p><div class="questReward"><b>Quest Rewards</b><div>'+q.reward.split(' + ').map(function(x){return '<span>• '+x+'</span>'}).join('')+'</div></div><div class="questAction">'+(complete?'<strong>QUEST COMPLETE</strong>':!available?'<button disabled>Requirements not met</button>':!started?'<button onclick="startQuest(\''+q.id+'\')">Start Quest</button>':ready?'<button onclick="claimQuest(\''+q.id+'\')">Claim Reward</button>':'<strong>IN PROGRESS</strong>')+'</div></div>'}).join('')}


const artisanRecipes={frostbow:{name:'Frostpine Bow',skill:'Fletching',level:28,xp:120,time:4200,cost:{'Frostpine logs':3,'Frostsilver bar':1}},frosthood:{name:'Frostweave Hood',skill:'Crafting',level:26,xp:105,time:3800,cost:{'Frostweave Cloth':3,'Frostpine logs':1}},froststaff:{name:'Frostpine Staff',skill:'Crafting',level:28,xp:130,time:4300,cost:{'Frostpine logs':3,'Frostsilver bar':1}},frostrrobe:{name:'Frostweave Robe',skill:'Crafting',level:32,xp:175,time:4800,cost:{'Frostweave Cloth':5,'Frostpine logs':1}},
 charm:{name:'Greenvale Charm',skill:'Crafting',level:1,xp:12,time:1800,cost:{'Logs':1}},
 scrapguard:{name:'Scrap Ward',skill:'Crafting',level:3,xp:20,time:2000,cost:{'Goblin scrap':2}},
 shortbow:{name:'Greenvale Shortbow',skill:'Fletching',level:1,xp:12,time:1800,cost:{'Logs':1}},
 arrows:{name:'Training Arrow Bundle',skill:'Fletching',level:3,xp:20,time:2000,cost:{'Logs':1,'Goblin scrap':1}},
 oakbow:{name:'Oakheart Bow',skill:'Fletching',level:5,xp:45,time:3000,cost:{'Oakheart logs':2}},
 ironbow:{name:'Ironvale Longbow',skill:'Fletching',level:12,xp:90,time:4000,cost:{'Oakheart logs':3,'Ironvale bar':1}},
 oakstaff:{name:'Oakheart Staff',skill:'Crafting',level:5,xp:45,time:3000,cost:{'Oakheart logs':2,'Goblin scrap':3}},
 ironstaff:{name:'Ironvale Focus Staff',skill:'Crafting',level:12,xp:90,time:4000,cost:{'Oakheart logs':2,'Ironvale bar':1,'Goblin scrap':5}},
 rhood:{name:'Ashweave Hood',skill:'Crafting',level:10,xp:70,time:3500,cost:{'Ashweave Cloth':2}},
 rbody:{name:'Ashweave Body',skill:'Crafting',level:16,xp:120,time:4500,cost:{'Ashweave Cloth':4,'Ironvale bar':1}},
 mcowl:{name:'Ashweave Cowl',skill:'Crafting',level:10,xp:70,time:3500,cost:{'Ashweave Cloth':2,'Goblin scrap':2}},
 mrobe:{name:'Ashweave Robe',skill:'Crafting',level:16,xp:120,time:4500,cost:{'Ashweave Cloth':4,'Goblin scrap':4}},
 lboots:{name:'Leather Boots',skill:'Crafting',level:5,xp:30,time:2400,cost:{'Goblin scrap':3,'Logs':1}},
 lgloves:{name:'Leather Gloves',skill:'Crafting',level:6,xp:35,time:2500,cost:{'Goblin scrap':4}},
 cboots:{name:'Cloth Boots',skill:'Crafting',level:5,xp:30,time:2400,cost:{'Logs':1,'Goblin scrap':2}},
 cgloves:{name:'Cloth Gloves',skill:'Crafting',level:6,xp:35,time:2500,cost:{'Goblin scrap':3}},
 aboots:{name:'Ashweave Boots',skill:'Crafting',level:18,xp:95,time:3600,cost:{'Ashweave Cloth':2}},
 agloves:{name:'Ashweave Gloves',skill:'Crafting',level:20,xp:110,time:3800,cost:{'Ashweave Cloth':3}},
 aslip:{name:'Ashweave Slippers',skill:'Crafting',level:18,xp:95,time:3600,cost:{'Ashweave Cloth':2,'Goblin scrap':2}},
 ahand:{name:'Ashweave Handwraps',skill:'Crafting',level:20,xp:110,time:3800,cost:{'Ashweave Cloth':3,'Goblin scrap':2}},
 fwboots:{name:'Frostweave Boots',skill:'Crafting',level:30,xp:165,time:4500,cost:{'Frostweave Cloth':3,'Frostpine logs':1}},
 fwgloves:{name:'Frostweave Gloves',skill:'Crafting',level:32,xp:185,time:4700,cost:{'Frostweave Cloth':4}},
 fwslip:{name:'Frostweave Slippers',skill:'Crafting',level:30,xp:165,time:4500,cost:{'Frostweave Cloth':3,'Frostpine logs':1}},
 fwhand:{name:'Frostweave Handwraps',skill:'Crafting',level:32,xp:185,time:4700,cost:{'Frostweave Cloth':4,'Frostpine logs':1}},
 lchaps:{name:'Leather Chaps',skill:'Crafting',level:8,xp:50,time:2800,cost:{'Goblin scrap':5,'Logs':1}},
 clegs:{name:'Cloth Legwraps',skill:'Crafting',level:8,xp:50,time:2800,cost:{'Goblin scrap':4,'Logs':1}},
 achaps:{name:'Ashweave Chaps',skill:'Crafting',level:22,xp:135,time:4100,cost:{'Ashweave Cloth':4,'Ironvale bar':1}},
 alegwraps:{name:'Ashweave Legwraps',skill:'Crafting',level:22,xp:135,time:4100,cost:{'Ashweave Cloth':4,'Goblin scrap':3}},
 fwchaps:{name:'Frostweave Chaps',skill:'Crafting',level:34,xp:210,time:5000,cost:{'Frostweave Cloth':5,'Frostpine logs':1}},
 fwlegwraps:{name:'Frostweave Legwraps',skill:'Crafting',level:34,xp:210,time:5000,cost:{'Frostweave Cloth':5,'Frostpine logs':1}},
 gquiver:{name:'Greenvale Quiver',skill:'Fletching',level:6,xp:35,time:2400,cost:{'Logs':1,'Goblin scrap':3}},
 iquiver:{name:'Ironvale Quiver',skill:'Fletching',level:18,xp:105,time:3600,cost:{'Oakheart logs':2,'Ironvale bar':1}},
 fquiver:{name:'Frostpine Quiver',skill:'Fletching',level:30,xp:175,time:4600,cost:{'Frostpine logs':2,'Frostweave Cloth':2}},
 aspell:{name:'Apprentice Spellbook',skill:'Crafting',level:6,xp:35,time:2400,cost:{'Logs':1,'Goblin scrap':3}},
 ashenbook:{name:'Ashen Spellbook',skill:'Crafting',level:20,xp:120,time:3800,cost:{'Ashweave Cloth':3,'Ironvale bar':1}},
 winterorb:{name:'Wintercore Orb',skill:'Crafting',level:32,xp:190,time:4800,cost:{'Frostweave Cloth':3,'Frostsilver bar':1,'Frostpine logs':1}},
 copperband:{name:'Copper Band',skill:'Crafting',level:4,xp:28,time:2200,cost:{'Copper ore':2}},
 greenamulet:{name:'Greenvale Amulet',skill:'Crafting',level:7,xp:45,time:2700,cost:{'Logs':1,'Copper ore':2}},
 greencloak:{name:'Greenvale Cloak',skill:'Crafting',level:9,xp:55,time:3000,cost:{'Goblin scrap':4,'Logs':2}},
 ironsignet:{name:'Ironvale Signet',skill:'Crafting',level:17,xp:100,time:3500,cost:{'Ironvale bar':1,'Ashweave Cloth':1}},
 ashenamulet:{name:'Ashen Amulet',skill:'Crafting',level:21,xp:130,time:4000,cost:{'Ironvale bar':1,'Ashweave Cloth':3}},
 ashenmantle:{name:'Ashen Mantle',skill:'Crafting',level:24,xp:150,time:4300,cost:{'Ashweave Cloth':4,'Ironvale bar':1}},
 frostring:{name:'Frostsilver Ring',skill:'Crafting',level:30,xp:180,time:4600,cost:{'Frostsilver bar':1,'Frostweave Cloth':1}},
 frostheart:{name:'Frostheart Amulet',skill:'Crafting',level:34,xp:220,time:5000,cost:{'Frostsilver bar':1,'Frostweave Cloth':3}},
 frostcape:{name:'Frostmere Cape',skill:'Crafting',level:36,xp:250,time:5400,cost:{'Frostweave Cloth':5,'Frostpine logs':2}},
 rotbow:{name:'Rotwood Bow',skill:'Fletching',level:40,xp:280,time:5600,cost:{'Rotwood logs':3,'Bogiron bar':1}},
 mirehood:{name:'Mireweave Hood',skill:'Crafting',level:38,xp:245,time:5200,cost:{'Mireweave Cloth':3,'Rotwood logs':1}},
 mirebody:{name:'Mireweave Body',skill:'Crafting',level:42,xp:360,time:6200,cost:{'Mireweave Cloth':5,'Bogiron bar':1}},
 rotstaff:{name:'Rotwood Staff',skill:'Crafting',level:40,xp:300,time:5700,cost:{'Rotwood logs':3,'Bogiron bar':1}},
 mirecowl:{name:'Mireweave Cowl',skill:'Crafting',level:38,xp:245,time:5200,cost:{'Mireweave Cloth':3,'Rotwood logs':1}},
 mirerobe:{name:'Mireweave Robe',skill:'Crafting',level:42,xp:360,time:6200,cost:{'Mireweave Cloth':5,'Rotwood logs':1,'Bogiron bar':1}}
};
let artisanKey=null,artisanTimer=null,artisanStart=0;
function canArtisan(r){return Object.entries(r.cost).every(([n,q])=>(save.bank[n]||0)>=q)}
function startArtisan(k){let r=artisanRecipes[k];if(!r)return;if(save.skills[r.skill].lvl<r.level){msg('You need '+r.skill+' level '+r.level+'.');return}if(!canArtisan(r)){msg('You do not have the materials for '+r.name+'.');return}stopGathering(false);if(smithingKey)stopSmithing(false);stopArtisan(false);artisanKey=k;artisanStart=performance.now();let an=document.querySelector('#activityName'),at=document.querySelector('#activityText'),sb=document.querySelector('#stopGather');if(an)an.textContent=r.skill+': '+r.name;if(at)at.textContent='Producing automatically until materials run out...';if(sb)sb.disabled=false;artisanTimer=setInterval(()=>completeArtisan(k),r.time*(hasPerk('quickhands')?.9:1));renderArtisanProgress()}
function completeArtisan(k){if(artisanKey!==k)return;let r=artisanRecipes[k];if(!canArtisan(r)){msg(r.skill+' stopped: you ran out of materials.');stopArtisan();renderUI();return}var saveCraftMats=r.skill==='Crafting'&&hasPerk('crafter')&&Math.random()<.15;if(!saveCraftMats)for(const [n,q] of Object.entries(r.cost))save.bank[n]-=q;var artisanQty=r.skill==='Fletching'&&hasPerk('fletcher')&&Math.random()<.15?2:1;save.items[r.name]=(save.items[r.name]||0)+artisanQty;addXP(r.skill,r.xp*artisanQty);questCraft(r.name);artisanStart=performance.now();msg('You create 1 '+r.name+'.');renderUI()}
function stopArtisan(show=true){if(artisanTimer)clearInterval(artisanTimer);artisanTimer=null;artisanKey=null;if(show){let an=document.querySelector('#activityName'),at=document.querySelector('#activityText'),sb=document.querySelector('#stopGather'),ap=document.querySelector('#activityProgress i');if(an)an.textContent='Not currently gathering';if(at)at.textContent='Production stopped.';if(sb)sb.disabled=true;if(ap)ap.style.width='0%'}}
function renderArtisanProgress(){if(!artisanKey)return;let r=artisanRecipes[artisanKey],ap=document.querySelector('#activityProgress i');if(ap)ap.style.width=Math.min(100,(performance.now()-artisanStart)/r.time*100)+'%';requestAnimationFrame(renderArtisanProgress)}
window.startArtisan=startArtisan;
const stopBeforeCooking=stopGathering;stopGathering=function(show=true){stopBeforeCooking(show);if(cookingKey)stopCooking(show)};window.stopGathering=stopGathering;
const stopGatherBase=stopGathering;stopGathering=function(show=true){stopGatherBase(show);if(artisanKey)stopArtisan(show)};window.stopGathering=stopGathering;
function renderArtisan(){
 var fletching=document.querySelector('#fletchingGrid'),crafting=document.querySelector('#craftingGrid');
 if(!fletching||!crafting)return;
 var rangerKeys=new Set(['rhood','rbody','lboots','lgloves','aboots','agloves','fwboots','fwgloves','lchaps','achaps','fwchaps','mirehood','mirebody']);
 var mageKeys=new Set(['charm','scrapguard','oakstaff','ironstaff','mcowl','mrobe','cboots','cgloves','aslip','ahand','fwslip','fwhand','clegs','alegwraps','fwlegwraps','aspell','ashenbook','winterorb','rotstaff','mirecowl','mirerobe']);
 var utilityKeys=new Set(['copperband','greenamulet','greencloak','ironsignet','ashenamulet','ashenmantle','frostring','frostheart','frostcape']);
 function recipeCard(entry){
  var k=entry[0],r=entry[1],actualXp=Math.round(r.xp*3),costs=Object.entries(r.cost);
  var hasMaterials=costs.every(function(cost){return (save.bank[cost[0]]||0)>=cost[1]}),hasLevel=save.skills[r.skill].lvl>=r.level;
  return '<div class="card tier2 '+(hasMaterials?'':'missingMaterials')+'"><b>'+r.name+'</b><span class="materialStatus '+(hasMaterials?'ready':'missing')+'">'+(hasMaterials?'✓ MATERIALS READY':'! MISSING MATERIALS')+'</span><p>'+r.skill+' Lv '+r.level+' • '+actualXp+' XP • '+(r.time/1000).toFixed(1)+' sec</p><small>'+costs.map(function(cost){var owned=save.bank[cost[0]]||0,ok=owned>=cost[1];return '<span class="materialLine '+(ok?'haveMaterial':'needMaterial')+'">'+(ok?'✓ ':'✕ ')+cost[1]+' '+cost[0]+' ('+owned+' owned)</span>'}).join(' + ')+'</small><br><button '+(!hasLevel||!hasMaterials?'disabled':'')+' data-artisan="'+k+'">Auto-'+(r.skill==='Fletching'?'fletch':'craft')+'</button></div>';
 }
 function group(title,entries,open){
  entries.sort(function(x,y){return x[1].level-y[1].level||x[1].name.localeCompare(y[1].name)});
  return '<details class="artisanCategory" '+(open?'open':'')+'><summary><span>'+title+'</span><b>'+entries.length+' recipes</b></summary><div class="grid artisanCategoryGrid">'+entries.map(recipeCard).join('')+'</div></details>';
 }
 var all=Object.entries(artisanRecipes);
 var fletch=all.filter(function(e){return e[1].skill==='Fletching'});
 var rangerFletch=fletch.filter(function(e){return e[0]!=='arrows'});
 var utilityFletch=fletch.filter(function(e){return e[0]==='arrows'});
 fletching.innerHTML=group('🏹 Ranger Equipment',rangerFletch,true)+(utilityFletch.length?group('🪶 Ranger Supplies',utilityFletch,false):'');
 var craft=all.filter(function(e){return e[1].skill==='Crafting'}),used=new Set();
 function take(set){return craft.filter(function(e){if(set.has(e[0])){used.add(e[0]);return true}return false})}
 var ranger=take(rangerKeys),mage=take(mageKeys),utility=take(utilityKeys),other=craft.filter(function(e){return !used.has(e[0])});
 crafting.innerHTML=group('🏹 Ranger Equipment',ranger,true)+group('🔮 Mage Equipment',mage,true)+(utility.length?group('💍 Shared Accessories',utility,false):'')+(other.length?group('📦 Other Crafting',other,false):'');
 [fletching,crafting].forEach(function(grid){grid.querySelectorAll('[data-artisan]').forEach(function(btn){btn.onclick=function(){startArtisan(btn.getAttribute('data-artisan'))}})})
}

const hunterTasks=[{kind:'rat',name:'Rats',min:18,max:30,level:1,xp:80,points:4},{kind:'goblin',name:'Goblins',min:20,max:35,level:1,xp:100,points:5},{kind:'wolf',name:'Wolves',min:18,max:30,level:3,xp:120,points:6},{kind:'scout',name:'Goblin Scouts',min:20,max:32,level:5,xp:150,points:7},{kind:'brute',name:'Goblin Brutes',min:15,max:25,level:7,xp:180,points:8},{kind:'emberling',name:'Emberlings',min:25,max:40,level:10,xp:240,points:10},{kind:'cinderhound',name:'Cinder Hounds',min:20,max:35,level:12,xp:280,points:12},{kind:'ashgolem',name:'Ash Golems',min:12,max:22,level:15,xp:360,points:15},{kind:'flameguard',name:'Flameguards',min:10,max:18,level:20,xp:450,points:18}];
const hunterShop=[
{key:'elite',name:'Elite Contracts',cost:50,desc:'Unlock the toughest Monster Hunter assignments.'},
{key:'supply',name:"Hunter's Supply Pouch",cost:60,desc:'+2 Dungeon Supply Bag capacity.'},
{key:'cache',name:'Bounty Caches',cost:75,desc:'Completed assignments award +50% coins.'},
{key:'hunterring',name:"Hunter's Ring",cost:90,desc:'All-class ring: +3 damage, +5 range, +4 defence.',item:'Hunter Ring'},
{key:'materials',name:'Material Hunter',cost:100,desc:'Double rare monster-material drop chances.'},
{key:'veteran',name:'Veteran Contracts',cost:125,desc:'Assignments become 25% larger and award +35% Hunter XP and points.'},
{key:'huntergloves',name:"Hunter's Gloves",cost:150,desc:'All-class gloves: +5 damage and +5 defence.',item:'Hunter Gloves'},
{key:'tracker',name:'Guild Tracker',cost:175,desc:'+10% coins from assignment monsters while on assignment.'},
{key:'master',name:'Master Contracts',cost:250,desc:'Assignments become 50% larger and award +75% Hunter XP and points.',requires:'veteran'},
{key:'masteramulet',name:'Master Hunter Amulet',cost:300,desc:'All-class amulet: +7 damage, +10 range, +8 defence.',item:'Master Hunter Amulet'},
{key:'trophy',name:'Trophy Hunter',cost:400,desc:'25% chance for assignment kills to award an extra common resource.'},
{key:'huntercape',name:"Hunter's Cape",cost:500,desc:'All-class cape: +10 damage, +15 range, +12 defence.',item:'Hunter Cape'},
{key:'crest',name:"Guildmaster's Crest",cost:750,desc:'+10% damage against your current Hunter assignment.'},
{key:'masterarmour',name:'Master Hunter Armour',cost:1000,desc:'All-class body armour: +12 damage, +18 range, +20 defence.',item:'Master Hunter Armour'}
];
function getHunterTask(){try{if(!save.hunter)save.hunter={points:0,task:null,unlocks:{elite:false,cache:false,materials:false}};save.hunter.unlocks=save.hunter.unlocks||{elite:false,cache:false,materials:false};if(save.hunter.task){alert('Current assignment: Hunt '+save.hunter.task.amount+' '+save.hunter.task.name+'.');return}let hs=save.skills['Monster Hunter']||(save.skills['Monster Hunter']={lvl:1,xp:0}),lvl=hs.lvl||1,pool=hunterTasks.filter(t=>t.level<=lvl&&(save.hunter.unlocks.elite||t.level<20));if(!pool.length)pool=[hunterTasks[0]];let t=pool[Math.floor(Math.random()*pool.length)],amount=t.min+Math.floor(Math.random()*(t.max-t.min+1)),mult=save.hunter.unlocks.master?1.5:save.hunter.unlocks.veteran?1.25:1,rewardMult=save.hunter.unlocks.master?1.75:save.hunter.unlocks.veteran?1.35:1;amount=Math.ceil(amount*mult);save.hunter.task={kind:t.kind,name:t.name,amount:amount,done:0,xp:Math.round(t.xp*rewardMult),points:Math.round(t.points*rewardMult)};writeSave(true);renderUI();alert('New assignment: Hunt '+amount+' '+t.name+'.')}catch(e){alert('Hunter assignment error: '+e.message);console.error(e)}}window.getHunterTask=getHunterTask;
function hunterKill(kind){let t=save.hunter.task;if(!t||t.kind!==kind)return;t.done++;if(t.done>=t.amount){let coins=Math.round(t.amount*8*(save.hunter.unlocks.cache?1.5:1));addXP('Monster Hunter',t.xp);save.hunter.points+=t.points;save.coins+=coins;save.drops.push('Hunter assignment complete: +'+t.xp+' XP, +'+t.points+' points, +'+coins+' coins');save.hunter.task=null;persist()}else if(t.done%5===0)writeSave(false)}
function buyHunterUnlock(key){let u=hunterShop.find(x=>x.key===key);if(!u||save.hunter.unlocks[key])return;if(u.requires&&!save.hunter.unlocks[u.requires]){alert('You need Veteran Contracts first.');return}if(save.hunter.points<u.cost){alert('You need '+u.cost+' Hunter Points.');return}save.hunter.points-=u.cost;save.hunter.unlocks[key]=true;if(u.item){save.items[u.item]=(save.items[u.item]||0)+1;save.drops.push('Hunter Guild reward: '+u.item)}persist()}window.buyHunterUnlock=buyHunterUnlock;
function bossUnlocked(kind){var mapIndex=kind==='warlord'?4:kind==='tyrant'?9:14;return save.campaign.cleared.includes(mapIndex)}
function dungeonUnlocked(){return save.campaign.cleared.includes(4)}
function frozenCryptUnlocked(){return save.campaign.cleared.includes(14)}
function drownedTempleUnlocked(){return save.campaign.cleared.includes(19)}
const foodHeal={'Cooked Minnow':2,'Cooked Trout':4,'Cooked Pike':6};
function supplyCount(){return Object.values(save.dungeon.supplies||{}).reduce(function(n,q){return n+(Number(q)||0)},0)}
function addDungeonFood(name){if(!foodHeal[name])return;var cap=save.hunter.unlocks.supply?10:8;if(supplyCount()>=cap){alert('Your Dungeon Supply Bag is full ('+cap+'/'+cap+').');return}if((save.bank[name]||0)<1){alert('You do not have any '+name+' in your Bank.');return}save.bank[name]--;save.dungeon.supplies[name]=(save.dungeon.supplies[name]||0)+1;persist();renderUI()}
function removeDungeonFood(name){if(!foodHeal[name]||(save.dungeon.supplies[name]||0)<1)return;save.dungeon.supplies[name]--;save.bank[name]=(save.bank[name]||0)+1;persist();renderUI()}
function eatDungeonFood(name){if(!dungeonMode){alert('Food can only be eaten inside a dungeon.');return}if(waveRunning||enemies.length||spawnPending){alert('You can only eat between dungeon waves.');return}if((save.dungeon.supplies[name]||0)<1)return;if(lives>=20){alert('Your lives are already full.');return}var before=lives;lives=Math.min(20,lives+foodHeal[name]);save.dungeon.supplies[name]--;writeSave(false);hud();renderUI();msg('Ate '+name+' and restored '+(lives-before)+' lives.')}
window.addDungeonFood=addDungeonFood;window.removeDungeonFood=removeDungeonFood;window.eatDungeonFood=eatDungeonFood;
function startDungeon(){if(!dungeonUnlocked()){alert('Clear Goblin Stronghold to unlock Greenvale Depths.');return}bossMode=null;dungeonMode=true;dungeonType='greenvale';currentMap=4;bossRunStart=snapshotBossRun();towers=[];enemies=[];shots=[];wave=0;lives=20;battleCoins=175;waveRunning=false;spawnPending=0;mapFinished=false;bossKilled=false;dungeonBossKilled=false;dungeonStart=performance.now();document.querySelectorAll('.screen').forEach(x=>x.classList.remove('active'));document.querySelector('#battle').classList.add('active');renderUI();hud()}window.startDungeon=startDungeon;
function startFrozenCrypt(){if(!frozenCryptUnlocked()){alert('Clear Citadel of Ice to unlock The Frozen Crypt.');return}bossMode=null;dungeonMode=true;dungeonType='frozen';currentMap=14;bossRunStart=snapshotBossRun();towers=[];enemies=[];shots=[];wave=0;lives=20;battleCoins=240;waveRunning=false;spawnPending=0;mapFinished=false;bossKilled=false;dungeonBossKilled=false;dungeonStart=performance.now();document.querySelectorAll('.screen').forEach(function(x){x.classList.remove('active')});document.querySelector('#battle').classList.add('active');renderUI();hud()}window.startFrozenCrypt=startFrozenCrypt;
function startDrownedTemple(){if(!drownedTempleUnlocked()){alert('Defeat the Mire Queen to unlock The Drowned Temple.');return}bossMode=null;dungeonMode=true;dungeonType='drowned';currentMap=19;bossRunStart=snapshotBossRun();towers=[];enemies=[];shots=[];wave=0;lives=20;battleCoins=300;waveRunning=false;spawnPending=0;mapFinished=false;bossKilled=false;dungeonBossKilled=false;dungeonStart=performance.now();document.querySelectorAll('.screen').forEach(function(x){x.classList.remove('active')});document.querySelector('#battle').classList.add('active');renderUI();hud()}window.startDrownedTemple=startDrownedTemple;
function finishDungeon(){
 if(mapFinished)return;
 mapFinished=true;
 waveRunning=false;
 var elapsed=Math.round(performance.now()-dungeonStart);
 save.dungeon.completions++;addPerkProgress('depths',1);
 if(!save.dungeon.best||elapsed<save.dungeon.best)save.dungeon.best=elapsed;
 var coins=500+Math.floor(Math.random()*251);
 var bars=8+Math.floor(Math.random()*5);
 var oak=3+Math.floor(Math.random()*4);
 var iron=2+Math.floor(Math.random()*4);
 var cloth=2+Math.floor(Math.random()*4);
 if(hasPerk('hoarder')){bars=Math.ceil(bars*1.10);oak=Math.ceil(oak*1.10);iron=Math.ceil(iron*1.10);cloth=Math.ceil(cloth*1.10)}
 save.coins+=coins;
 save.bank['Bronze bar']+=bars;
 save.bank['Oakheart logs']+=oak;
 save.bank['Ironvale ore']+=iron;
 save.bank['Ashweave Cloth']+=cloth;
 var roll=Math.random()/rarePerkMult();
 var unique=null;
 if(roll<0.025)unique='Verdant Edge';
 else if(roll<0.05)unique='Thornshot Bow';
 else if(roll<0.075)unique='Rootbinder Staff';
 if(unique){
  save.items[unique]=(save.items[unique]||0)+1;
  save.collection[unique]=true;
  save.drops.push(unique+' DUNGEON UNIQUE!');
 }
 var bonusReward=oak+' Oakheart logs\n'+iron+' Ironvale ore\n'+cloth+' Ashweave Cloth';
 var chest=coins+' coins\n'+bars+' Bronze bars\n'+bonusReward+(unique?'\nRARE: '+unique:'');
 save.drops.push('Greenvale Depths chest: '+oak+' Oakheart logs - '+iron+' Ironvale ore - '+cloth+' Ashweave Cloth');
 save.drops.push('Dungeon Chest: '+chest.replace(/\n/g,' - '));
 persist();
 renderUI();
 setTimeout(function(){showDungeonResults('greenvale',elapsed);bossRunStart=null},150);
}
function finishFrozenCrypt(){
 if(mapFinished)return;
 mapFinished=true;
 waveRunning=false;
 var elapsed=Math.round(performance.now()-dungeonStart);
 var fc=save.dungeon.frozenCrypt;
 fc.completions++;addPerkProgress('crypt',1);
 if(!fc.best||elapsed<fc.best)fc.best=elapsed;
 [5,10,25,50,100].forEach(function(m){
  if(fc.completions>=m&&!fc.milestones.includes(m)){
   fc.milestones.push(m);
   var milestoneCoins=m*150;
   save.coins+=milestoneCoins;
   save.drops.push('Frozen Crypt '+m+' clears milestone: +'+milestoneCoins+' coins');
  }
 });
 var coins=1400+Math.floor(Math.random()*601);
 var bars=8+Math.floor(Math.random()*5);
 var ore=10+Math.floor(Math.random()*6);
 var logs=8+Math.floor(Math.random()*5);
 var cloth=6+Math.floor(Math.random()*5);
 if(hasPerk('hoarder')){bars=Math.ceil(bars*1.10);ore=Math.ceil(ore*1.10);logs=Math.ceil(logs*1.10);cloth=Math.ceil(cloth*1.10)}
 save.coins+=coins;
 save.bank['Frostsilver bar']=(save.bank['Frostsilver bar']||0)+bars;
 save.bank['Frostsilver ore']=(save.bank['Frostsilver ore']||0)+ore;
 save.bank['Frostpine logs']=(save.bank['Frostpine logs']||0)+logs;
 save.bank['Frostweave Cloth']=(save.bank['Frostweave Cloth']||0)+cloth;
 var chase=Math.random()<0.01*rarePerkMult()?'Crown of the Crypt':null;
 var roll=Math.random()/rarePerkMult();
 var unique=null;
 if(roll<0.03)unique='Cryptfang Greatsword';
 else if(roll<0.06)unique='Glacial Recurve';
 else if(roll<0.09)unique='Soulfrost Sceptre';
 if(unique){
  save.items[unique]=(save.items[unique]||0)+1;
  save.collection[unique]=true;
  save.drops.push(unique+' FROZEN CRYPT UNIQUE!');
 }
 if(chase){
  save.items[chase]=(save.items[chase]||0)+1;
  save.collection[chase]=true;
  save.drops.push(chase+' 1% CHASE DROP!');
 }
 var chest=coins+' coins\n'+bars+' Frostsilver bars\n'+ore+' Frostsilver ore\n'+logs+' Frostpine logs\n'+cloth+' Frostweave Cloth'+(unique?'\nRARE: '+unique:'')+(chase?'\nMYTHIC 1%: '+chase:'');
 save.drops.push('Frozen Crypt Chest: '+chest.replace(/\n/g,' - '));
 persist();
 renderUI();
 setTimeout(function(){showDungeonResults('frozen',elapsed);bossRunStart=null},150);
}
function finishDrownedTemple(){
 if(mapFinished)return;mapFinished=true;waveRunning=false;
 var elapsed=Math.round(performance.now()-dungeonStart),dt=save.dungeon.drownedTemple;dt.completions++;
 if(!dt.best||elapsed<dt.best)dt.best=elapsed;
 [5,10,25,50,100].forEach(function(m){if(dt.completions>=m&&!dt.milestones.includes(m)){dt.milestones.push(m);save.coins+=m*225;save.drops.push('Drowned Temple '+m+' clears milestone: +'+(m*225)+' coins')}});
 var coins=2200+Math.floor(Math.random()*801),bars=8+Math.floor(Math.random()*6),ore=10+Math.floor(Math.random()*7),logs=9+Math.floor(Math.random()*6),cloth=7+Math.floor(Math.random()*6);
 if(hasPerk('hoarder')){bars=Math.ceil(bars*1.10);ore=Math.ceil(ore*1.10);logs=Math.ceil(logs*1.10);cloth=Math.ceil(cloth*1.10)}
 save.coins+=coins;save.bank['Bogiron bar']+=bars;save.bank['Bogiron ore']+=ore;save.bank['Rotwood logs']+=logs;save.bank['Mireweave Cloth']+=cloth;
 var roll=Math.random()/rarePerkMult(),unique=roll<.03?'Colossus Cleaver':roll<.06?'Drowned Recurve':roll<.09?'Temple Hexstaff':null;
 var chase=Math.random()<.01*rarePerkMult()?'Bogheart Talisman':null;
 [unique,chase].filter(Boolean).forEach(function(n){save.items[n]=(save.items[n]||0)+1;save.collection[n]=true;save.drops.push(n+' DROWNED TEMPLE UNIQUE!')});
 save.drops.push('Drowned Temple Chest: '+coins+' coins - '+bars+' Bogiron bars - '+ore+' Bogiron ore - '+logs+' Rotwood logs - '+cloth+' Mireweave Cloth'+(unique?' - RARE: '+unique:'')+(chase?' - MYTHIC 1%: '+chase:''));
 persist();renderUI();setTimeout(function(){showDungeonResults('drowned',elapsed);bossRunStart=null},150);
}
function renderSupplyBag(){var g=document.querySelector('#supplyBagGrid'),c=document.querySelector('#supplyBagCount');if(!g)return;var foods=['Cooked Minnow','Cooked Trout','Cooked Pike'];var cap=save.hunter.unlocks.supply?10:8;if(c)c.textContent=supplyCount()+'/'+cap;g.innerHTML=foods.map(function(n){var q=save.dungeon.supplies[n]||0,bank=save.bank[n]||0;return '<div class="card"><b>'+n+'</b><div>Bag: '+q+' | Bank: '+bank+'</div><small>Restores '+foodHeal[n]+' lives</small><br><button '+(bank<1||supplyCount()>=(save.hunter.unlocks.supply?10:8)?'disabled':'')+' onclick="addDungeonFood(\''+n+'\')">Add</button> <button '+(q<1?'disabled':'')+' onclick="removeDungeonFood(\''+n+'\')">Remove</button> <button '+(!dungeonMode||q<1?'disabled':'')+' onclick="eatDungeonFood(\''+n+'\')">Eat</button></div>'}).join('')}
function renderDungeon(){
 var g=document.querySelector('#dungeonGrid');if(!g)return;
 var expanded=new Set(Array.from(g.querySelectorAll('[data-dungeon-detail][open]'),function(d){return d.dataset.dungeonDetail}));
 var capacity=save.hunter.unlocks.supply?10:8,count=supplyCount();
 var entries=[
 {key:'greenvale',name:'Greenvale Depths',waves:15,boss:'Root Warden',elites:'5 and 10',state:save.dungeon,unlocked:dungeonUnlocked(),action:'startDungeon()',lock:'Clear Goblin Stronghold'},
 {key:'frozen',name:'The Frozen Crypt',waves:20,boss:'Crypt King',elites:'5, 10 and 15',state:save.dungeon.frozenCrypt,unlocked:frozenCryptUnlocked(),action:'startFrozenCrypt()',lock:'Clear Citadel of Ice',loot:'1,400–2,000 coins, Frostmere materials, 3 weapons at 3% each and the Crown of the Crypt at 1%.'},
 {key:'drowned',name:'The Drowned Temple',waves:20,boss:'Bog Colossus',elites:'5, 10 and 15',state:save.dungeon.drownedTemple,unlocked:drownedTempleUnlocked(),action:'startDrownedTemple()',lock:'Defeat the Mire Queen',loot:'2,200–3,000 coins, Blackfen materials, 3 dungeon weapons at 3% each and the Bogheart Talisman at 1%.'}
 ];
 function open(key){return expanded.has(key)?' open':''}
 g.innerHTML=entries.map(function(d){
 return '<article class="card dungeonCard '+(d.unlocked?'':'locked')+'"><h3>'+d.name+'</h3>'+
 '<div class="dungeonMeta">'+d.waves+' waves · '+d.boss+'</div>'+
 '<div class="dungeonStats"><span>Clears <b>'+d.state.completions+'</b></span><span>Best <b>'+(d.state.best?(d.state.best/1000).toFixed(1)+'s':'—')+'</b></span></div>'+
 '<button class="dungeonEnter" '+(d.unlocked?'':'disabled')+' aria-label="'+(d.unlocked?'Enter '+d.name:d.lock)+'" onclick="'+d.action+'">'+(d.unlocked?'Enter dungeon':d.lock)+'</button>'+
 '<details class="dungeonDetails" data-dungeon-detail="'+d.key+'"'+open(d.key)+'><summary>Encounters'+(d.loot?' &amp; rewards':'')+'</summary><p>Elites on waves '+d.elites+'. '+d.boss+' on wave '+d.waves+'.</p>'+
 (d.loot?'<p><b>Chest:</b> '+d.loot+'</p><div class="dungeonMilestones" aria-label="Completion milestones">'+[5,10,25,50,100].map(function(m){var done=d.state.milestones.includes(m);return '<span class="'+(done?'complete':'')+'">'+(done?'✓ ':'')+m+' clears</span>'}).join('')+'</div>':'')+'</details></article>';
 }).join('')+
 '<details class="dungeonSupplies" data-dungeon-detail="supplies"'+open('supplies')+'><summary>Supply bag <b>'+count+' / '+capacity+'</b></summary><p>Pack food before entering. Eat between waves to restore lives, up to 20.</p><div class="dungeonFoodList">'+
 ['Cooked Minnow','Cooked Trout','Cooked Pike'].map(function(n){
 var q=save.dungeon.supplies[n]||0,bank=save.bank[n]||0;
 return '<div class="dungeonFood"><div><b>'+n+'</b><small>Bag '+q+' · Bank '+bank+' · Restores '+foodHeal[n]+' lives</small></div><div class="dungeonFoodActions">'+
 '<button '+(bank<1||count>=capacity?'disabled':'')+' aria-label="Add '+n+'" onclick="addDungeonFood(\''+n+'\')">Add</button>'+
 '<button '+(q<1?'disabled':'')+' aria-label="Remove '+n+'" onclick="removeDungeonFood(\''+n+'\')">Remove</button>'+
 '<button '+(!dungeonMode||q<1?'disabled':'')+' aria-label="Eat '+n+'" onclick="eatDungeonFood(\''+n+'\')">Eat</button></div></div>';
 }).join('')+'</div></details>';
}

let bossRunStart=null;
function snapshotBossRun(){return {coins:save.coins,bank:{...save.bank},items:{...save.items},xp:Object.fromEntries(Object.entries(save.skills).map(([k,v])=>[k,{lvl:v.lvl,xp:v.xp}]))};}
function xpTotalAt(skill,state){let total=state.xp||0;for(let l=1;l<(state.lvl||1);l++)total+=xpNeed(l);return total;}
function bossRewardData(kind,elapsed){
 var before=bossRunStart||snapshotBossRun(), rewards=[], xp=[];
 var coinGain=Math.max(0,save.coins-before.coins);if(coinGain)rewards.push(['Coins',coinGain]);
 Object.keys(save.bank).forEach(function(n){var d=(save.bank[n]||0)-(before.bank[n]||0);if(d>0)rewards.push([n,d])});
 Object.keys(save.items).forEach(function(n){var d=(save.items[n]||0)-(before.items[n]||0);if(d>0)rewards.push([n,d])});
 Object.entries(save.skills).forEach(function(entry){var n=entry[0],v=entry[1],b=before.xp[n];if(!b)return;var d=xpTotalAt(n,v)-xpTotalAt(n,b);if(d>0)xp.push([n,d])});
 return {kind:kind,title:kind==='warlord'?'Goblin Warlord':kind==='tyrant'?'Ember Tyrant':'Frost Wyrm',rewards:rewards,xp:xp,elapsed:elapsed};
}
function bossRewardSummary(kind,elapsed){var d=bossRewardData(kind,elapsed),r=d.rewards.map(function(x){return x[0]+': +'+x[1]}),xp=d.xp.map(function(x){return x[0]+' XP: +'+x[1]});return d.title+' defeated!\n\nREWARDS EARNED\n'+(r.length?r.join('\n'):'No item/resource drops this run.')+'\n\nXP EARNED\n'+(xp.length?xp.join('\n'):'No XP earned.')+'\n\nClear time: '+(elapsed/1000).toFixed(1)+'s';}
function showBossResults(kind,elapsed){
 var victory=document.querySelector('.bossVictory');if(victory)victory.textContent='BOSS DEFEATED!';
 var d=bossRewardData(kind,elapsed),modal=document.querySelector('#bossResultsModal');if(!modal){alert(bossRewardSummary(kind,elapsed));return}
 var themes={warlord:['#6f8f3a','#26351f','Goblin Stronghold conquered'],tyrant:['#d76528','#401d12','The flames of the citadel grow silent'],frostwyrm:['#73b9db','#173447','The frozen beast has fallen']},t=themes[kind]||themes.warlord;
 modal.style.setProperty('--boss-accent',t[0]);modal.style.setProperty('--boss-deep',t[1]);
 document.querySelector('#bossResultName').textContent=d.title;
 document.querySelector('#bossResultFlavor').textContent=t[2];
 document.querySelector('#bossResultRewards').innerHTML=d.rewards.length?d.rewards.map(function(x){return '<div class="bossResultRow"><span>'+x[0]+'</span><b>+'+x[1]+'</b></div>'}).join(''):'<div class="bossResultRow"><span>No item/resource drops</span></div>';
 document.querySelector('#bossResultXp').innerHTML=d.xp.length?d.xp.map(function(x){return '<div class="bossResultRow"><span>'+x[0]+' XP</span><b>+'+x[1]+'</b></div>'}).join(''):'<div class="bossResultRow"><span>No XP earned</span></div>';
 document.querySelector('#bossResultTime').textContent=(elapsed/1000).toFixed(1)+'s';
 document.querySelector('#bossResultWaves').textContent=bossMode?'3 / 3':'10 / 10';
 modal.classList.add('show');
}
function showMapResults(mapIndex,elapsed){
 var modal=document.querySelector('#bossResultsModal');if(!modal)return;
 var before=bossRunStart||snapshotBossRun(),rewards=[],xp=[],map=maps[mapIndex];
 var coinGain=Math.max(0,save.coins-before.coins);if(coinGain)rewards.push(['Coins',coinGain]);
 Object.keys(save.bank).forEach(function(n){var d=(save.bank[n]||0)-(before.bank[n]||0);if(d>0)rewards.push([n,d])});
 Object.keys(save.items).forEach(function(n){var d=(save.items[n]||0)-(before.items[n]||0);if(d>0)rewards.push([n,d])});
 Object.entries(save.skills).forEach(function(entry){var n=entry[0],v=entry[1],b=before.xp[n];if(!b)return;var d=xpTotalAt(n,v)-xpTotalAt(n,b);if(d>0)xp.push([n,d])});
 var accent=mapIndex<5?'#6f9b55':mapIndex<10?'#d76528':'#73b9db',deep=mapIndex<5?'#1d3524':mapIndex<10?'#401d12':'#132f43';
 modal.style.setProperty('--boss-accent',accent);modal.style.setProperty('--boss-deep',deep);
 document.querySelector('.bossVictory').textContent='MAP COMPLETE!';
 document.querySelector('#bossResultName').textContent=map.name.toUpperCase();
 document.querySelector('#bossResultFlavor').textContent=mapIndex<14?'Victory! The next location is ready to be challenged.':'Frostmere conquered!';
 document.querySelector('#bossResultRewards').innerHTML=rewards.length?rewards.map(function(x){return '<div class="bossResultRow"><span>'+x[0]+'</span><b>+'+x[1]+'</b></div>'}).join(''):'<div class="bossResultRow"><span>No additional rewards</span></div>';
 document.querySelector('#bossResultXp').innerHTML=xp.length?xp.map(function(x){return '<div class="bossResultRow"><span>'+x[0]+' XP</span><b>+'+x[1]+'</b></div>'}).join(''):'<div class="bossResultRow"><span>No XP earned</span></div>';
 document.querySelector('#bossResultTime').textContent=(elapsed/1000).toFixed(1)+'s';
 document.querySelector('#bossResultWaves').textContent='10 / 10';
 modal.classList.add('show')
}
function showDungeonResults(type,elapsed){
 var modal=document.querySelector('#bossResultsModal');if(!modal)return;
 var before=bossRunStart||snapshotBossRun(),rewards=[],xp=[];
 var coinGain=Math.max(0,save.coins-before.coins);if(coinGain)rewards.push(['Coins',coinGain]);
 Object.keys(save.bank).forEach(function(n){var d=(save.bank[n]||0)-(before.bank[n]||0);if(d>0)rewards.push([n,d])});
 Object.keys(save.items).forEach(function(n){var d=(save.items[n]||0)-(before.items[n]||0);if(d>0)rewards.push([n,d])});
 Object.entries(save.skills).forEach(function(entry){var n=entry[0],v=entry[1],b=before.xp[n];if(!b)return;var d=xpTotalAt(n,v)-xpTotalAt(n,b);if(d>0)xp.push([n,d])});
 var frozen=type==='frozen',drowned=type==='drowned';
 modal.style.setProperty('--boss-accent',drowned?'#72964b':frozen?'#73b9db':'#6f9b55');modal.style.setProperty('--boss-deep',drowned?'#182c20':frozen?'#132f43':'#1d3524');
 document.querySelector('.bossVictory').textContent='DUNGEON COMPLETE!';
 document.querySelector('#bossResultName').textContent=drowned?'THE DROWNED TEMPLE':frozen?'THE FROZEN CRYPT':'GREENVALE DEPTHS';
 document.querySelector('#bossResultFlavor').textContent=drowned?'The Bog Colossus has fallen. The drowned vault yields its treasures.':frozen?'The Crypt King has fallen. The frozen vault yields its treasures.':'The Root Warden has fallen. The depths surrender their treasures.';
 document.querySelector('#bossResultRewards').innerHTML=rewards.length?rewards.map(function(x){return '<div class="bossResultRow"><span>'+x[0]+'</span><b>+'+x[1]+'</b></div>'}).join(''):'<div class="bossResultRow"><span>No rewards</span></div>';
 document.querySelector('#bossResultXp').innerHTML=xp.length?xp.map(function(x){return '<div class="bossResultRow"><span>'+x[0]+' XP</span><b>+'+x[1]+'</b></div>'}).join(''):'<div class="bossResultRow"><span>No XP earned</span></div>';
 document.querySelector('#bossResultTime').textContent=(elapsed/1000).toFixed(1)+'s';
 document.querySelector('#bossResultWaves').textContent=(frozen||drowned)?'20 / 20':'15 / 15';
 modal.classList.add('show');
}
function closeBossResults(){var m=document.querySelector('#bossResultsModal');if(m)m.classList.remove('show')}window.closeBossResults=closeBossResults;
function startBossHunt(kind){if(!bossUnlocked(kind)){alert('Defeat this boss in the campaign first.');return}bossRunStart=snapshotBossRun();bossMode=kind;currentMap=kind==='warlord'?4:kind==='tyrant'?9:14;resetBattle(true);bossMode=kind;bossStart=performance.now();document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));document.querySelector('#battle').classList.add('active');renderUI()}window.startBossHunt=startBossHunt;
function openMap(i){bossMode=null;if(i>=save.campaign.unlocked)return;if(maps[i].req&&combatLevel()<maps[i].req){alert(maps[i].name+' requires Combat Level '+maps[i].req+'.');return}currentMap=i;resetBattle();bossRunStart=snapshotBossRun();bossStart=performance.now();document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));battle.classList.add('active');renderUI()}window.openMap=openMap;
function renderUI(){if(window.refreshTrainingXp)window.refreshTrainingXp();renderQuests();renderArtisan();renderDungeon();renderSupplyBag();renderMarketplace();renderSalvage();renderEnhancements();renderPerks();const combatLevelEl=document.querySelector('#combatLevel'),combatStatsEl=document.querySelector('#combatStats'),combatBonusesEl=document.querySelector('#combatBonuses');if(combatLevelEl)combatLevelEl.textContent=combatLevel();if(combatStatsEl)combatStatsEl.innerHTML=['Attack','Strength','Defence','Hitpoints','Ranged','Magic'].map(n=>'<div class="card"><b>'+n+'</b><div>Level '+save.skills[n].lvl+'</div></div>').join('');if(combatBonusesEl)combatBonusesEl.innerHTML='<div class="card"><b>Total Defence</b><div>+'+totalDefence()+'</div></div><div class="card"><b>Warrior Damage</b><div>+'+bonus('warrior','damage')+'</div></div><div class="card"><b>Ranger Damage</b><div>+'+bonus('ranger','damage')+'</div></div><div class="card"><b>Mage Damage</b><div>+'+bonus('mage','damage')+'</div></div>';if(window.oakBtn)oakBtn.disabled=save.skills.Woodcutting.lvl<10;if(window.ironOreBtn)ironOreBtn.disabled=save.skills.Mining.lvl<10;if(window.ironBarBtn)ironBarBtn.disabled=save.skills.Smithing.lvl<12;coins.textContent=save.coins;mapsCleared.textContent=save.campaign.cleared.length;bossKills.textContent=save.campaign.bossKills;if(window.ashenBossKills)ashenBossKills.textContent=save.campaign.ashenBossKills;if(window.frostBossKills)frostBossKills.textContent=save.campaign.frostBossKills;if(window.mireBossKills)mireBossKills.textContent=save.campaign.mireBossKills;mapGrid.innerHTML=maps.map((m,i)=>{let progressionLocked=i>=save.campaign.unlocked,combatLocked=m.req&&combatLevel()<m.req,locked=progressionLocked||combatLocked,done=save.campaign.cleared.includes(i);return '<div class="mapcard '+(locked?'locked ':'')+(m.region==='ashen'?' ashen ':m.region==='frost'?' frost ':m.region==='blackfen'?' blackfen ':'')+(done?'cleared':'')+'"><span class="tag">'+(done?'CLEARED':locked?'LOCKED':'AVAILABLE')+'</span><h3>'+(i+1)+'. '+m.name+'</h3><p>'+m.desc+'</p>'+(m.boss?'<p class="bossTag">BOSS: '+(m.boss==='tyrant'?'Ember Tyrant':m.boss==='frostwyrm'?'Frost Wyrm':m.boss==='mirequeen'?'Mire Queen':'Goblin Warlord')+'</p>':'')+(progressionLocked?'<p class="req">Clear the previous map to unlock.</p>':'')+(combatLocked?'<p class="req">Requires Combat Lv '+m.req+'</p>':'')+'<button '+(locked?'disabled':'')+' onclick="openMap('+i+')">'+(done?'Replay':'Enter')+'</button></div>'}).join('');battleMapName.textContent=maps[currentMap].name;battleMapDesc.textContent=maps[currentMap].desc;waveMax.textContent=dungeonMode?(dungeonType==='frozen'||dungeonType==='drowned'?20:15):bossMode?3:10;skillGrid.innerHTML=Object.entries(save.skills).map(([n,s])=>'<div class="card"><b>'+n+'</b><div>Level '+s.lvl+'</div><small>'+s.xp+'/'+xpNeed(s.lvl)+' XP</small><div class="xp"><i style="width:'+Math.min(100,s.xp/xpNeed(s.lvl)*100)+'%"></i></div></div>').join('');let resourceGroups={Ores:[],Bars:[],Wood:[],Food:[],Materials:[]};
Object.entries(save.bank).forEach(function(entry){
 var n=entry[0],q=entry[1],cat='Materials';
 if(n.includes('ore'))cat='Ores';
 else if(n.includes('bar'))cat='Bars';
 else if(n==='Logs'||n.includes('logs'))cat='Wood';
 else if(n.includes('Minnow')||n.includes('Trout')||n.includes('Pike'))cat='Food';
 resourceGroups[cat].push([n,q])
});
function bankResourceCard(entry){var n=entry[0],q=entry[1];return '<div class="card bankCompactCard">'+(skillingArtwork[n]?'<img src="'+skillingArtwork[n]+'" alt="" width="40" height="40">':'')+'<div><b>'+n+'</b><small>Owned: '+q+'</small></div></div>'}
let gearGroups={Weapons:[],Armour:[],Offhands:[],Accessories:[]};
Object.entries(save.items).filter(function(entry){return entry[1]>0&&itemDB[entry[0]]}).forEach(function(entry){var slot=itemDB[entry[0]].slot,cat=slot==='weapon'?'Weapons':slot==='offhand'?'Offhands':['ring','amulet','cape'].includes(slot)?'Accessories':'Armour';gearGroups[cat].push(entry)});
function bankGearCard(entry){
 var n=entry[0],q=entry[1],i=itemDB[n];
 var classes=i.class==='all'?['warrior','ranger','mage']:[i.class];
 var better={damage:false,range:false,defence:false};
 classes.forEach(function(c){
  var eqName=save.equipment[c]&&save.equipment[c][i.slot],eq=itemDB[eqName]||{};
  if((i.damage||0)>(eq.damage||0))better.damage=true;
  if((i.range||0)>(eq.range||0))better.range=true;
  if((i.defence||0)>(eq.defence||0))better.defence=true
 });
 function stat(key,label){
  if(!i[key])return '';
  return ' • <span class="'+(better[key]?'statBetter':'')+'">+'+i[key]+' '+label+(better[key]?' ↑':'')+'</span>'
 }
 var upgrade=better.damage||better.range||better.defence;
 var html='<div class="card '+(upgrade?'gearUpgrade':'')+'"><b>'+n+(enhancementLevel(n)?' +'+enhancementLevel(n):'')+'</b>';
 if(upgrade)html+='<span class="upgradeBadge">UPGRADE</span>';
 html+='<div>Owned: '+q+'</div><small>'+i.class+' • '+i.slot+stat('damage','damage')+stat('range','range')+stat('defence','defence');
 if(i.req)html+=' • Requires '+Object.entries(i.req).map(function(x){return x[0]+' '+x[1]}).join(', ');
 html+='</small><br>';
 if(i.class==='all'){
  ['warrior','ranger','mage'].forEach(function(c){
   html+='<button class="equipClass" data-bank-equip="'+encodeURIComponent(n)+'" data-bank-class="'+c+'">'+c[0].toUpperCase()+c.slice(1)+'</button>'
  })
 }else{
  html+='<button data-bank-equip="'+encodeURIComponent(n)+'">Equip</button>'
 }
 return html+'</div>'
}
var bankOpenCategories=new Set(['Ores']);
function rememberBankCategories(){
 var root=document.querySelector('#bankGrid');if(!root)return;
 bankOpenCategories.clear();
 root.querySelectorAll('.bankCategory[open]').forEach(function(d){var k=d.getAttribute('data-bank-category');if(k)bankOpenCategories.add(k)})
}
function bankSection(title,items,renderer,open){
 var isOpen=bankOpenCategories.has(title);
 return '<details class="bankCategory" data-bank-category="'+title+'" '+(isOpen?'open':'')+'><summary><span>'+title+'</span><b>'+items.length+' types</b></summary><div class="grid bankCategoryGrid">'+(items.length?items.map(renderer).join(''):'<div class="bankEmpty">Nothing stored here yet.</div>')+'</div></details>'
}
rememberBankCategories();bankGrid.innerHTML=bankSection('Ores',resourceGroups.Ores,bankResourceCard,true)+bankSection('Bars',resourceGroups.Bars,bankResourceCard,false)+bankSection('Wood',resourceGroups.Wood,bankResourceCard,false)+bankSection('Food',resourceGroups.Food,bankResourceCard,false)+bankSection('Monster & Crafting Materials',resourceGroups.Materials,bankResourceCard,false)+bankSection('Weapons',gearGroups.Weapons,bankGearCard,false)+bankSection('Armour',gearGroups.Armour,bankGearCard,false)+bankSection('Off-hands',gearGroups.Offhands,bankGearCard,false)+bankSection('Rings, Amulets & Capes',gearGroups.Accessories,bankGearCard,false);bankGrid.querySelectorAll('[data-bank-equip]').forEach(function(btn){btn.onclick=function(){var name=decodeURIComponent(btn.getAttribute('data-bank-equip')),cls=btn.getAttribute('data-bank-class');equipItem(name,cls||undefined)}});bankGrid.querySelectorAll('.bankCategory').forEach(function(d){d.addEventListener('toggle',rememberBankCategories)});equipmentGrid.innerHTML=['warrior','ranger','mage'].map(c=>'<div class="card"><h3>'+c[0].toUpperCase()+c.slice(1)+'</h3>'+Object.entries(save.equipment[c]).map(([s,n])=>'<div><b>'+s+':</b> '+n+'</div>').join('')+'<small>Bonus damage +'+bonus(c,'damage')+' • Range +'+bonus(c,'range')+'</small></div>').join('');const hl=document.querySelector('#hunterLevel'),hx=document.querySelector('#hunterXP'),hp=document.querySelector('#hunterPoints'),ht=document.querySelector('#hunterTask'),hs=document.querySelector('#hunterShop');if(hl)hl.textContent=save.skills['Monster Hunter'].lvl;if(hx)hx.textContent=save.skills['Monster Hunter'].xp+'/'+xpNeed(save.skills['Monster Hunter'].lvl)+' XP';if(hp)hp.textContent=save.hunter.points;if(ht){let t=save.hunter.task;ht.innerHTML=t?'<div class="card hunterTask"><b>Hunt '+t.name+'</b><div>'+t.done+' / '+t.amount+'</div><div class="xp"><i style="width:'+Math.min(100,t.done/t.amount*100)+'%"></i></div><small>Reward: '+t.xp+' Hunter XP • '+t.points+' points</small></div>':'<div class="card">No active assignment. Speak to the Hunt Master.</div>'}if(hs)hs.innerHTML=hunterShop.map(function(u){var bought=save.hunter.unlocks[u.key],locked=u.requires&&!save.hunter.unlocks[u.requires];return '<div class="card '+(bought?'hunterBought':'')+'"><b>'+u.name+'</b><p>'+u.desc+'</p><small>'+u.cost+' Hunter Points'+(locked?' • Requires Veteran Contracts':'')+'</small><br><button '+(bought||locked?'disabled':'')+' onclick="buyHunterUnlock(\''+u.key+'\')">'+(bought?'Unlocked':'Unlock')+'</button></div>'}).join('');if(window.bossGrid){let bd=[['warlord','Goblin Warlord',4,save.campaign.bossKills,'Warlord Cleaver 4% • Warlord Crest 6%'],['tyrant','Ember Tyrant',9,save.campaign.ashenBossKills,'Emberfang 3% • Helm 4% • Bow 4% • Staff 4%'],['frostwyrm','Frost Wyrm',14,save.campaign.frostBossKills,'Wyrmfrost 2.5% • Glacier Bow 2.5% • Wintercore 2.5% • Crown 3%']];
const openBossDetails=new Set(Array.from(bossGrid.querySelectorAll('details[data-boss-details][open]'),d=>d.dataset.bossDetails));
const bossArtVersions={warlord:179,tyrant:226,frostwyrm:227};
bossGrid.innerHTML=bd.map(([k,n,mi,kills,loot])=>{
 const unlocked=bossUnlocked(k),best=save.bossHunt.best[k],milestones=save.bossHunt.milestones[k];
 return '<article class="card bossCard '+(unlocked?'':'locked')+'">'+
 '<span class="bossPortrait" aria-hidden="true" style="background-image:url(assets/enemy-'+k+'-walk-v'+bossArtVersions[k]+'.webp)"></span>'+
 '<div class="bossOverview"><h3>'+n+'</h3><div class="bossStats"><span>Kills <b>'+kills+'</b></span><span>Best <b>'+(best?(best/1000).toFixed(1)+'s':'—')+'</b></span></div>'+
 '<button '+(unlocked?'':'disabled')+' aria-label="'+(unlocked?'Start 3-wave hunt: ':'Campaign locked: ')+n+'" onclick="startBossHunt(\''+k+'\')">'+(unlocked?'Hunt · 3 waves':'Campaign locked')+'</button></div>'+
 '<details class="bossDetails" data-boss-details="'+k+'" '+(openBossDetails.has(k)?'open':'')+'><summary>Drops &amp; milestones</summary>'+
 '<div class="bossDropList">'+loot.split(' • ').map(item=>'<span>'+item+'</span>').join('')+'</div>'+
 '<div class="bossMilestones" aria-label="Kill milestones">'+[10,25,50,100,250].map(x=>'<span class="'+(milestones.includes(x)?'complete':'')+'">'+(milestones.includes(x)?'✓ ':'')+x+' kills</span>').join('')+'</div></details></article>';
}).join('');
}
if(window.collectionGrid){let uniques=[['Warlord Cleaver','Goblin Warlord','4%'],['Warlord Crest','Goblin Warlord','6%'],['Emberfang Blade','Ember Tyrant','3%'],['Ashguard Helm','Ember Tyrant','4%'],['Cinderbow','Ember Tyrant','4%'],['Ember Staff','Ember Tyrant','4%'],['Wyrmfrost Blade','Frost Wyrm','2.5%'],['Glacier Bow','Frost Wyrm','2.5%'],['Wintercore Staff','Frost Wyrm','2.5%'],['Wyrmscale Crown','Frost Wyrm','3%'],['Cryptfang Greatsword','Frozen Crypt','3%'],['Glacial Recurve','Frozen Crypt','3%'],['Soulfrost Sceptre','Frozen Crypt','3%'],['Crown of the Crypt','Frozen Crypt','1%']];collectionGrid.innerHTML=uniques.map(([n,b,r])=>'<div class="card collection '+(save.collection[n]?'obtained':'missing')+'"><b>'+(save.collection[n]?n:'???')+'</b><div>'+b+'</div><small>'+r+' drop rate • '+(save.collection[n]?'OBTAINED':'Not obtained')+'</small></div>').join('')}dropLog.textContent=save.drops.length?save.drops.slice(-5).reverse().join(' • '):'No equipment drops yet.';craftGrid.innerHTML=Object.entries(recipes).map(function(entry){var k=entry[0],r=entry[1],owned=save.bank[r.resource]||0,hasMaterials=owned>=r.bars,hasLevel=save.skills.Smithing.lvl>=r.level;return '<div class="card '+(hasMaterials?'':'missingMaterials')+'"><b>'+r.name+'</b><span class="materialStatus '+(hasMaterials?'ready':'missing')+'">'+(hasMaterials?'✓ MATERIALS READY':'! MISSING MATERIALS')+'</span><p><span class="'+(hasMaterials?'haveMaterial':'needMaterial')+'">'+(hasMaterials?'✓ ':'✕ ')+r.bars+' '+r.resource+(r.bars>1?'s':'')+' ('+owned+' owned)</span> • Smithing Lv '+r.level+' • '+Math.round(r.xp*3)+' XP • '+(r.time/1000).toFixed(1)+' sec</p><button '+(!hasLevel||!hasMaterials?'disabled':'')+' onclick="startSmithing(\''+k+'\')">Auto-smith</button></div>'}).join('');if(window.RealmforgeGear)window.RealmforgeGear.decorate();}
function loadFrostmereTestSave(){if(testMode){alert('You are already using the separate test account.');return}if(!confirm('Switch to the separate Frostmere test account? Your normal save will remain untouched.'))return;writeSave(false);localStorage.setItem(KEY,JSON.stringify(save));var stored=safeParse(localStorage.getItem(TEST_KEY));var t=validSave(stored)?stored:JSON.parse(JSON.stringify(base()));t.coins=Math.max(t.coins||0,12000);['Attack','Strength','Defence','Ranged','Magic'].forEach(function(n){t.skills[n].lvl=Math.max(t.skills[n].lvl,24)});t.skills.Hitpoints.lvl=Math.max(t.skills.Hitpoints.lvl,28);t.campaign.cleared=[0,1,2,3,4,5,6,7,8,9];t.campaign.unlocked=Math.max(t.campaign.unlocked||1,11);t.items['Emberfang Blade']=Math.max(1,t.items['Emberfang Blade']||0);t.items['Cinderbow']=Math.max(1,t.items['Cinderbow']||0);t.items['Ember Staff']=Math.max(1,t.items['Ember Staff']||0);t.equipment.warrior.weapon='Emberfang Blade';t.equipment.ranger.weapon='Cinderbow';t.equipment.mage.weapon='Ember Staff';save=t;testMode=true;migrateSave();localStorage.setItem(TEST_KEY,JSON.stringify(save));currentMap=10;resetBattle();renderUI();alert('TEST ACCOUNT ACTIVE. Your normal save is separate and untouched. Use Return to Normal Save when finished.')}
function returnToNormalSave(){if(testMode)localStorage.setItem(TEST_KEY,JSON.stringify(save));var primaryNormal=safeParse(localStorage.getItem(KEY));var backupNormal=safeParse(localStorage.getItem(BACKUP_KEY));var normal=null;if(validSave(primaryNormal)&&validSave(backupNormal))normal=progressScore(backupNormal)>progressScore(primaryNormal)?backupNormal:primaryNormal;else normal=validSave(primaryNormal)?primaryNormal:backupNormal;if(!validSave(normal)){alert('No valid normal or backup save could be found. Your current account has not been changed.');return}save=normal;testMode=false;migrateSave();localStorage.setItem(KEY,JSON.stringify(save));currentMap=0;resetBattle();renderUI();alert('Normal account restored. The game checked both your main save and automatic backup and loaded the one with the most progress.')}
window.loadFrostmereTestSave=loadFrostmereTestSave;window.returnToNormalSave=returnToNormalSave;
const hunterTaskBtn=document.querySelector('#newHunterTask');if(hunterTaskBtn)hunterTaskBtn.addEventListener('click',getHunterTask);document.querySelectorAll('nav button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));let target=document.querySelector('#'+b.dataset.screen);if(target)target.classList.add('active')});document.querySelectorAll('.tower').forEach(b=>b.onclick=()=>{selected=b.dataset.type;document.querySelectorAll('.tower').forEach(x=>x.classList.toggle('selected',x===b))});const newGameEl=document.querySelector('#newGame');if(newGameEl)newGameEl.onclick=()=>{if(confirm('This permanently resets your Realmforge save. Continue?')&&confirm('Final warning: reset ALL progress?')){save=base();currentMap=0;persist();resetBattle()}};
window.getCombatLevel=combatLevel;
function resetBattle(keepBoss=false){blackfenPoison=0;mireQueenEnraged=false;towers=[];enemies=[];shots=[];wave=0;lives=20;battleCoins=maps[currentMap].start;waveRunning=false;spawnPending=0;mapFinished=false;bossKilled=false;if(!keepBoss)bossMode=null;hud()}function hud(){document.querySelector('#wave').textContent=wave;livesEl.textContent=lives;battleCoinsEl.textContent=battleCoins}const livesEl=document.querySelector('#lives'),battleCoinsEl=document.querySelector('#battleCoins');
function battlePath(){return window.RealmforgeMaps?window.RealmforgeMaps.pathFor(currentMap,dungeonMode,path):path}
function nearRoad(x,y){const path=battlePath();for(let i=1;i<path.length;i++){let [x1,y1]=path[i-1],[x2,y2]=path[i],dx=x2-x1,dy=y2-y1,t=Math.max(0,Math.min(1,((x-x1)*dx+(y-y1)*dy)/(dx*dx+dy*dy)));if(Math.hypot(x-(x1+t*dx),y-(y1+t*dy))<38)return true}return false}
let towerDrag=null;
function canvasPoint(e){let r=canvas.getBoundingClientRect();return{x:(e.clientX-r.left)*canvas.width/r.width,y:(e.clientY-r.top)*canvas.height/r.height}}
function dragPoint(e){let p=canvasPoint(e),r=canvas.getBoundingClientRect(),lift=58*canvas.height/r.height;return{x:p.x,y:Math.max(0,p.y-lift)}}
function validTowerPosition(x,y,ignore){
 if(x<24||x>canvas.width-24||y<24||y>canvas.height-24)return false;
 if(nearRoad(x,y))return false;
 if(window.RealmforgeMaps&&!window.RealmforgeMaps.canBuild(currentMap,dungeonMode,x,y))return false;
 if(towers.some(function(a){return a!==ignore&&Math.hypot(a.x-x,a.y-y)<45}))return false;
 return true
}
canvas.addEventListener('pointerdown',function(e){
 let touch=canvasPoint(e),p=dragPoint(e),existing=null,best=48;
 towers.forEach(function(t){let d=Math.hypot(t.x-touch.x,t.y-touch.y);if(d<best){best=d;existing=t}});
 if(existing){
  towerDrag={tower:existing,oldX:existing.x,oldY:existing.y,x:existing.x,y:existing.y,valid:true,moved:false};
  existing.dragging=true;canvas.setPointerCapture&&canvas.setPointerCapture(e.pointerId);e.preventDefault();return
 }
 if(!selected)return;
 let t=types[selected];if(battleCoins<t.cost)return;
 towerDrag={tower:null,type:selected,x:p.x,y:p.y,valid:validTowerPosition(p.x,p.y,null),moved:true};
 canvas.setPointerCapture&&canvas.setPointerCapture(e.pointerId);e.preventDefault()
});
canvas.addEventListener('pointermove',function(e){
 if(!towerDrag)return;let p=canvasPoint(e);towerDrag.x=p.x;towerDrag.y=Math.max(42,p.y-58);
 if(towerDrag.tower){if(Math.hypot(p.x-towerDrag.oldX,p.y-towerDrag.oldY)>5)towerDrag.moved=true;towerDrag.tower.x=towerDrag.x;towerDrag.tower.y=towerDrag.y}
 towerDrag.valid=validTowerPosition(towerDrag.x,towerDrag.y,towerDrag.tower);e.preventDefault()
});
function finishTowerDrag(e){
 if(!towerDrag)return;
 if(towerDrag.tower){
  towerDrag.tower.dragging=false;
  if(towerDrag.valid){towerDrag.tower.x=towerDrag.x;towerDrag.tower.y=towerDrag.y}
  else{towerDrag.tower.x=towerDrag.oldX;towerDrag.tower.y=towerDrag.oldY}
 }else if(towerDrag.valid){
  let t=types[towerDrag.type];if(battleCoins>=t.cost){battleCoins-=t.cost;towers.push({x:towerDrag.x,y:towerDrag.y,type:towerDrag.type,last:0});hud()}
 }
 towerDrag=null;e&&e.preventDefault()
}
canvas.addEventListener('pointerup',finishTowerDrag);
canvas.addEventListener('pointercancel',finishTowerDrag);
canvas.addEventListener('touchstart',function(e){if(e.cancelable)e.preventDefault()},{passive:false});
canvas.addEventListener('touchmove',function(e){if(e.cancelable)e.preventDefault()},{passive:false});
canvas.addEventListener('touchend',function(e){if(e.cancelable)e.preventDefault()},{passive:false});
function launchWave(){let maxWave=dungeonMode?(dungeonType==='frozen'?20:15):bossMode?3:10;if(waveRunning||wave>=maxWave||mapFinished)return;wave++;waveRunning=true;let count=dungeonMode?(8+wave*3):bossMode?(wave<3?8+wave*3:12):5+wave*2,seq=[];for(let i=0;i<count;i++){let kinds=maps[currentMap].kinds;seq.push(kinds[(i+wave)%kinds.length])}if(dungeonMode){if(dungeonType==='frozen'){let dk=wave<=4?['icecrawler','frostwolf','iceraider']:wave<=9?['frostwolf','iceraider','frozengolem']:wave<=14?['iceraider','frozengolem','frostguard']:['frozengolem','frostguard','iceraider'];seq=[];for(let i=0;i<count;i++)seq.push(dk[(i+wave)%dk.length]);if(wave===5){seq=seq.slice(0,18);seq.push('frozengolem');seq.push('frozengolem')}if(wave===10){seq=seq.slice(0,22);seq.push('frostguard');seq.push('frostguard');seq.push('frozengolem')}if(wave===15){seq=seq.slice(0,26);seq.push('frostguard');seq.push('frostguard');seq.push('frostguard');seq.push('frozengolem')}if(wave===20){seq=seq.slice(0,28);seq.push('cryptking')}}else if(dungeonType==='drowned'){let dk=wave<=4?['bogling','swampcrawler','templelurker']:wave<=9?['venomfang','templelurker','drownedguard']:wave<=14?['templelurker','drownedguard','mirewitch']:['drownedguard','mirewitch','venomfang'];seq=[];for(let i=0;i<count;i++)seq.push(dk[(i+wave)%dk.length]);if(wave===5){seq=seq.slice(0,18);seq.push('templelurker');seq.push('templelurker')}if(wave===10){seq=seq.slice(0,22);seq.push('drownedguard');seq.push('drownedguard')}if(wave===15){seq=seq.slice(0,26);seq.push('drownedguard');seq.push('mirewitch');seq.push('mirewitch')}if(wave===20){seq=seq.slice(0,28);seq.push('bogcolossus')}}else{let dk=wave<=4?['rat','goblin','wolf']:wave<=9?['goblin','scout','brute','cave']:['scout','brute','cave'];seq=[];for(let i=0;i<count;i++)seq.push(dk[(i+wave)%dk.length]);if(wave===5){seq=seq.slice(0,16);seq.push('brute')}if(wave===10){seq=seq.slice(0,20);seq.push('brute');seq.push('brute')}if(wave===15){seq=seq.slice(0,24);seq.push('rootwarden')}}}else if(bossMode&&wave===3){seq=seq.slice(0,10);seq.push(bossMode)}else if(maps[currentMap].boss&&wave===10){seq=seq.slice(0,16);seq.push(maps[currentMap].boss)}spawnPending=seq.length;lastSpawnCheck=performance.now();seq.forEach(function(kind,i){setTimeout(function(){spawn(kind);spawnPending--},i*600/battleSpeed)});hud()}
startWave.onclick=launchWave;
function updateBattleControls(){var a=document.querySelector('#autoWave'),sp=document.querySelector('#battleSpeed');if(a)a.textContent='Auto Wave: '+(autoWave?'ON':'OFF');if(sp)sp.textContent=battleSpeed+'x Speed'}
window.toggleAutoWave=function(){autoWave=!autoWave;updateBattleControls();if(autoWave&&!waveRunning&&!mapFinished)setTimeout(launchWave,250)};
window.toggleBattleSpeed=function(){battleSpeed=battleSpeed===1?3:1;updateBattleControls()};
function spawn(kind){const path=battlePath();let d=enemyDB[kind],scale=dungeonMode?(dungeonType==='frozen'?(1.35+wave*.16):dungeonType==='drowned'?(1.55+wave*.18):(1.15+wave*.14)):maps[currentMap].mult*(1+wave*.13)*(bossMode?1.08:1);enemies.push({kind,x:path[0][0],y:path[0][1],seg:1,hp:d.hp*scale,max:d.hp*scale,speed:d.speed,reward:Math.round(d.reward*maps[currentMap].mult),dead:false})}
function checkBossMilestones(kind){let kills=kind==='warlord'?save.campaign.bossKills:kind==='tyrant'?save.campaign.ashenBossKills:save.campaign.frostBossKills,arr=save.bossHunt.milestones[kind];[10,25,50,100,250].forEach(m=>{if(kills>=m&&!arr.includes(m)){arr.push(m);let reward=m*25;save.coins+=reward;save.drops.push((kind==='warlord'?'Warlord':kind==='tyrant'?'Ember Tyrant':'Frost Wyrm')+' '+m+' kills milestone: +'+reward+' coins')}})}
function rarePerkMult(){return hasPerk('lucky')?1.10:1}
function rollDrop(kind){if(kind==='rootwarden'||kind==='cryptking'||kind==='bogcolossus'){dungeonBossKilled=true;save.drops.push((kind==='cryptking'?'Crypt King':kind==='bogcolossus'?'Bog Colossus':'Root Warden')+' defeated!');return}if(kind==='warlord'||kind==='tyrant'||kind==='frostwyrm'||kind==='mirequeen'){bossKilled=true;if(kind==='warlord')save.campaign.bossKills++;else if(kind==='tyrant')save.campaign.ashenBossKills++;else if(kind==='frostwyrm')save.campaign.frostBossKills++;else save.campaign.mireBossKills++;let r=Math.random()/rarePerkMult(),name=null;if(kind==='warlord')name=r<.04?'Warlord Cleaver':r<.10?'Warlord Crest':null;else if(kind==='tyrant')name=r<.03?'Emberfang Blade':r<.07?'Ashguard Helm':r<.11?'Cinderbow':r<.15?'Ember Staff':null;checkBossMilestones(kind);if(kind==='mirequeen'){var mr=Math.random()/rarePerkMult(),mn=null;if(mr<.025)mn='Mirefang Greatblade';else if(mr<.05)mn='Venomwood Bow';else if(mr<.075)mn='Plaguebloom Staff';else if(mr<.09)mn='Mire Queen Crown';if(mn){save.items[mn]=(save.items[mn]||0)+1;save.collection[mn]=true;save.drops.push(mn+' UNIQUE DROP!')}else{save.coins+=900+Math.floor(Math.random()*501);save.drops.push('Mire Queen cache: bonus coins')}return}if(kind==='frostwyrm'){var fr=Math.random()/rarePerkMult(),fn=null;if(fr<.025)fn='Wyrmfrost Blade';else if(fr<.05)fn='Glacier Bow';else if(fr<.075)fn='Wintercore Staff';else if(fr<.105)fn='Wyrmscale Crown';if(fn){save.items[fn]=(save.items[fn]||0)+1;save.collection[fn]=true;save.drops.push(fn+' UNIQUE DROP!')}else{save.bank['Frostsilver bar']+=3+Math.floor(Math.random()*5);save.bank['Frostweave Cloth']+=2+Math.floor(Math.random()*4);save.drops.push('Frost Wyrm cache: Frostsilver bars + Frostweave Cloth')}checkBossMilestones(kind);return}if(name){save.items[name]=(save.items[name]||0)+1;save.collection[name]=true;save.drops.push(name+' UNIQUE DROP!')}else if(kind==='tyrant'){save.bank['Ironvale bar']+=3+Math.floor(Math.random()*5);save.drops.push('Ember Tyrant cache: Ironvale bars')}else{save.bank['Bronze bar']+=2+Math.floor(Math.random()*4);save.drops.push('Warlord cache: Bronze bars')}return}let pool=kind==='goblin'||kind==='brute'||kind==='scout'?[['Bronze Sword',.025],['Bronze Dagger',.02],['Bronze Helm',.018],['Bronze Armour',.012],['Oak Shortbow',.018],['Leather Hood',.016],['Leather Body',.012],['Apprentice Staff',.012],['Cloth Hood',.014],['Apprentice Robe',.01]]:[['Bronze Dagger',.004],['Leather Hood',.003],['Cloth Hood',.003]];for(const [name,chance] of pool)if(Math.random()<chance){save.items[name]=(save.items[name]||0)+1;save.drops.push(name+' drop!');if(save.drops.length>20)save.drops.shift();return}}
function finishMap(){if(mapFinished)return;if(maps[currentMap].boss&&!bossKilled){alert('The boss escaped. This map is not cleared.');return}mapFinished=true;waveRunning=false;addPerkProgress('map',1);if(maps[currentMap].boss)addPerkProgress('boss',1);if(!save.campaign.cleared.includes(currentMap))save.campaign.cleared.push(currentMap);save.campaign.unlocked=Math.max(save.campaign.unlocked,Math.min(20,currentMap+2));let reward=75+(currentMap*50);save.coins+=reward;if(maps[currentMap].ore)save.bank['Copper ore']+=5;if(maps[currentMap].ashOre)save.bank['Ironvale ore']+=8;if(save.drops.length>20)save.drops=save.drops.slice(-20);persist();var campaignElapsed=Math.round(performance.now()-bossStart);if(maps[currentMap].boss&&bossRunStart){var campaignBoss=maps[currentMap].boss;setTimeout(function(){showBossResults(campaignBoss,campaignElapsed);bossRunStart=null},150)}else{setTimeout(function(){showMapResults(currentMap,campaignElapsed);bossRunStart=null},150)}}
function update(dt,now){const path=battlePath();for(const e of enemies){if(e.dead)continue;let step=e.speed*dt;while(step>0&&!e.dead){const p=path[e.seg];if(!p){e.dead=true;lives--;if(maps[currentMap]&&maps[currentMap].region==='blackfen'&&['venomfang','mirewitch','mirequeen'].includes(e.kind)){blackfenPoison++;var poisonLoss=e.kind==='mirequeen'?2:1;lives=Math.max(0,lives-poisonLoss);msg((e.kind==='mirequeen'?'Mire Queen':'Blackfen venom')+' poisons the base: -'+poisonLoss+' extra '+(poisonLoss===1?'life':'lives')+'!')}break}const dx=p[0]-e.x,dy=p[1]-e.y,d=Math.hypot(dx,dy);if(d<=step){e.x=p[0];e.y=p[1];e.seg++;step-=d}else{e.x+=dx/d*step;e.y+=dy/d*step;step=0}}}for(const e of enemies){if(e.kind==='mirequeen'&&!e.dead&&!mireQueenEnraged&&e.hp<=e.max*.5){mireQueenEnraged=true;e.speed*=1.35;msg('Mire Queen enrages at 50% HP — movement speed increased!')}}for(const t of towers){let cfg=types[t.type],range=(cfg.range+bonus(t.type,'range'))*(1+(hasPerk('eagleeye')?.08:0)+(hasPerk('realmforged')?.05:0)),target=enemies.find(e=>!e.dead&&Math.hypot(e.x-t.x,e.y-t.y)<=range),rate=cfg.rate*(1-bonus(t.type,'speed'))*(hasPerk('rapid')?.95:1);if(target&&now-t.last>=rate){t.last=now;let level=save.skills[cfg.skill].lvl,damage=(cfg.damage+bonus(t.type,'damage'))*(1+(level-1)*.025);damage*=1+(hasPerk('sharp')?.05:0)+(hasPerk('realmforged')?.05:0)+(hasPerk('veteran'+t.type)?.08:0);if(hasPerk('laststand')&&lives<=5)damage*=1.15;if(hasPerk('delver')&&dungeonMode)damage*=1.10;if(hasPerk('bossslayer')&&['warlord','tyrant','frostwyrm','mirequeen','rootwarden','cryptking'].includes(target.kind))damage*=1.10;if(hasPerk('executioner')&&['warlord','tyrant','frostwyrm','mirequeen','rootwarden','cryptking'].includes(target.kind)&&target.hp<=target.max*.25)damage*=1.15;if(save.hunter.unlocks.crest&&save.hunter.task&&save.hunter.task.kind===target.kind)damage*=1.10;if(target.kind==='mirequeen'&&target.hp>target.max*.5)damage*=.80;target.hp-=damage;startTowerAttack(t,target);if(t.type==='warrior'){addXP('Attack',1);addXP('Strength',1);addXP('Defence',1)}else{addXP(cfg.skill,2)}addXP('Hitpoints',1);if(target.hp<=0&&!target.dead){target.dead=true;var battleReward=Math.round(target.reward*(hasPerk('scavenger')?1.10:1));battleCoins+=battleReward;var worldReward=Math.round(target.reward*(hasPerk('coins')?1.10:1));if(hasPerk('bounty')&&['warlord','tyrant','frostwyrm','mirequeen','rootwarden','cryptking'].includes(target.kind))worldReward=Math.round(worldReward*1.20);save.coins+=worldReward;if(hasPerk('resourceful')&&Math.random()<.10){var perkResources=['Copper ore','Tin ore','Logs'];var perkResource=perkResources[Math.floor(Math.random()*perkResources.length)];save.bank[perkResource]=(save.bank[perkResource]||0)+1;}if(['goblin','scout','brute','warlord','emberling','cinderhound','ashgolem','flameguard','tyrant'].includes(target.kind))save.bank['Goblin scrap']++;if(Math.random()<.12){var starterOre=Math.random()<.5?'Copper ore':'Tin ore';save.bank[starterOre]=(save.bank[starterOre]||0)+1;}if(save.hunter.task&&save.hunter.task.kind===target.kind){if(save.hunter.unlocks.tracker){var trackerCoins=Math.max(1,Math.round(target.reward*.10));save.coins+=trackerCoins}if(save.hunter.unlocks.trophy&&Math.random()<.25){var trophyPool=['Copper ore','Tin ore','Logs'];var trophyItem=trophyPool[Math.floor(Math.random()*trophyPool.length)];save.bank[trophyItem]=(save.bank[trophyItem]||0)+1}}hunterKill(target.kind);questKill(target.kind);addPerkProgress('kill',1);if(['iceraider','frozengolem','frostguard'].includes(target.kind)&&Math.random()<.10){save.bank['Frostweave Cloth']++;save.drops.push('Frostweave Cloth drop!')}if(['emberling','cinderhound','flameguard'].includes(target.kind)&&Math.random()<.08){save.bank['Ashweave Cloth']++;save.drops.push('Ashweave Cloth drop!')}if(target.kind==='ashgolem'){let ch=save.hunter.unlocks.materials ? .02 : .01;if(Math.random()<ch){save.bank['Golem Core']++;save.drops.push('RARE DROP: Golem Core!')}}if(target.kind==='flameguard'){let ch=save.hunter.unlocks.materials ? .016 : .008;if(Math.random()<ch){save.bank['Flameguard Sigil']++;save.drops.push('RARE DROP: Flameguard Sigil!')}}if(['bogling','venomfang','mirewitch'].includes(target.kind)&&Math.random()<.08){save.bank['Mireweave Cloth']=(save.bank['Mireweave Cloth']||0)+1;save.drops.push('Mireweave Cloth drop!')}rollDrop(target.kind);persist();hud()}}}updateAttackVisuals(dt);shots=shots.filter(s=>s.life>0);enemies=enemies.filter(e=>!e.dead);if(waveRunning&&enemies.length===0&&spawnPending===0&&now-lastSpawnCheck>500){waveRunning=false;save.bestWave=Math.max(save.bestWave,wave);addXP('Defence',Math.max(18,Math.round((14+wave*4)*(1+currentMap*.10))));persist();if(dungeonMode&&dungeonType==='drowned'&&wave===20){if(dungeonBossKilled)finishDrownedTemple();else{mapFinished=true;alert('The Bog Colossus escaped. Drowned Temple failed.')}}else if(dungeonMode&&dungeonType==='frozen'&&wave===20){if(dungeonBossKilled)finishFrozenCrypt();else{mapFinished=true;alert('The Crypt King escaped. Frozen Crypt failed.')}}else if(dungeonMode&&dungeonType!=='frozen'&&wave===15){if(dungeonBossKilled)finishDungeon();else{mapFinished=true;alert('The Root Warden escaped. Dungeon failed.')}}else if(bossMode&&wave===3){if(bossKilled){let elapsed=Math.round(performance.now()-bossStart);if(!save.bossHunt.best[bossMode]||elapsed<save.bossHunt.best[bossMode])save.bossHunt.best[bossMode]=elapsed;let done=bossMode;mapFinished=true;persist();setTimeout(function(){showBossResults(done,elapsed);bossRunStart=null},100)}else alert('The boss escaped. Hunt failed.')}else if(!dungeonMode&&wave===10)finishMap();else if(autoWave&&!mapFinished)setTimeout(function(){if(autoWave&&!waveRunning&&!mapFinished)launchWave()},450/battleSpeed)}if(lives<=0){if(dungeonMode){dungeonMode=false;alert('Dungeon failed. Your account XP and loot are saved.');resetBattle()}else{alert('Defence failed. Your account XP and loot are saved.');resetBattle()}}}
// V166: shared, preloaded character sprites; visual-only, no save or combat changes.
const towerSprites = {};
for (const type of ['warrior', 'ranger', 'mage']) {
  const image = new Image();
  image.src = 'assets/tower-' + type + '-v166.webp';
  towerSprites[type] = image;
}
// V167: visual effects use the existing battle clock; damage remains in update().
let warriorLayers = null;
function getWarriorLayers(image) {
  if (warriorLayers) return warriorLayers;
  const make = () => { const c = document.createElement('canvas'); c.width = image.naturalWidth; c.height = image.naturalHeight; return c; };
  const body = make(), sword = make();
  const outline = c => {
    c.beginPath();
    [[0,20],[12,20],[32,84],[42,94],[40,119],[25,126],[9,107],[0,60]].forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));
    c.closePath();
  };
  const b = body.getContext('2d'); b.drawImage(image,0,0);
  b.globalCompositeOperation='destination-out'; outline(b); b.fill();
  const w = sword.getContext('2d'); outline(w); w.clip(); w.drawImage(image,0,0);
  warriorLayers = {body,sword}; return warriorLayers;
}
function startTowerAttack(t, target) {
  const duration = t.type === 'warrior' ? .32 : .28;
  t.attackVisual = {life:duration,duration,angle:Math.atan2(target.y-(t.y-30),target.x-t.x)};
  const x=t.x+(t.type==='mage'?-13:t.type==='ranger'?10:-15), y=t.y-(t.type==='mage'?53:42);
  const travel=t.type==='warrior'?.22:Math.max(.18,Math.min(.42,Math.hypot(target.x-x,target.y-y)/540));
  shots.push({type:t.type,x,y,tx:target.x,ty:target.y,target,travel,age:0,life:travel+.12});
}
function updateAttackVisuals(dt) {
  for (const t of towers) if(t.attackVisual) {
    t.attackVisual.life-=dt;
    if(t.attackVisual.life<=0)t.attackVisual=null;
  }
  for(const s of shots) {
    s.age+=dt; s.life-=dt;
    // Follow living targets until arrival, then leave the impact at that point.
    if(s.age<s.travel && s.target && !s.target.dead){s.tx=s.target.x;s.ty=s.target.y;}
  }
}
function drawAttackEffect(s) {
  ctx.save();
  const progress=Math.min(1,s.age/s.travel), angle=Math.atan2(s.ty-s.y,s.tx-s.x);
  if(s.type==='warrior') {
    // A brief crescent traces the physical sword's swing toward its target.
    ctx.translate(s.x,s.y);ctx.rotate(angle);
    ctx.globalAlpha=Math.sin(progress*Math.PI)*.85;
    ctx.strokeStyle='#e5ecf5';ctx.lineWidth=4;
    ctx.beginPath();ctx.arc(0,0,31,-1.1+progress*1.4,-.45+progress*1.4);ctx.stroke();
  } else if(progress<1) {
    const x=s.x+(s.tx-s.x)*progress, y=s.y+(s.ty-s.y)*progress;
    ctx.translate(x,y);ctx.rotate(angle);
    if(s.type==='ranger') {
      ctx.lineWidth=2;ctx.strokeStyle='#c79a59';ctx.beginPath();ctx.moveTo(-14,0);ctx.lineTo(5,0);ctx.stroke();
      ctx.fillStyle='#e8e8d7';ctx.beginPath();ctx.moveTo(9,0);ctx.lineTo(2,-4);ctx.lineTo(2,4);ctx.closePath();ctx.fill();
      ctx.strokeStyle='#ddd5bb';ctx.beginPath();ctx.moveTo(-13,-4);ctx.lineTo(-9,0);ctx.lineTo(-13,4);ctx.stroke();
    } else {
      // Small solid-alpha circles keep blue magic readable without costly blur.
      for(let i=3;i>=1;i--){ctx.globalAlpha=.12*(4-i);ctx.fillStyle='#438eff';ctx.beginPath();ctx.arc(-i*6,0,Math.max(2,6-i),0,Math.PI*2);ctx.fill();}
      ctx.globalAlpha=.22;ctx.fillStyle='#2685ff';ctx.beginPath();ctx.arc(0,0,12,0,Math.PI*2);ctx.fill();
      ctx.globalAlpha=1;ctx.fillStyle='#368cff';ctx.beginPath();ctx.arc(0,0,7,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='#bdeaff';ctx.beginPath();ctx.arc(1,-1,3,0,Math.PI*2);ctx.fill();
    }
  } else {
    const fade=Math.max(0,s.life/.12);ctx.globalAlpha=fade;
    ctx.strokeStyle=s.type==='mage'?'#72c4ff':'#e8dfb4';ctx.lineWidth=2;
    ctx.beginPath();ctx.arc(s.tx,s.ty,3+(1-fade)*10,0,Math.PI*2);ctx.stroke();
  }
  ctx.restore();
}

function drawTowerCharacter(t) {
  if(window.RealmforgeGear){window.RealmforgeGear.drawTower(t);return;}
  const image = towerSprites[t.type];
  if (image && image.complete && image.naturalWidth) {
    const height = 88, width = height * image.naturalWidth / image.naturalHeight;
    // The placement coordinate stays at the centre of the stone pad.
    // Keep edge placements visible without moving their gameplay footprint.
    const left = Math.max(0, Math.min(canvas.width - width, t.x - width / 2));
    const top = Math.max(0, Math.min(canvas.height - height, t.y + 12 - height));
    const a=t.attackVisual, pulse=a?Math.sin((1-a.life/a.duration)*Math.PI):0;
    ctx.save();
    if(t.type==='warrior' && a) {
      const layers=getWarriorLayers(image), scale=height/image.naturalHeight;
      ctx.drawImage(layers.body,left,top,width,height);
      ctx.translate(left+29*scale,top+105*scale);
      const phase=1-a.life/a.duration;
      // Wind through the target direction, then return to the resting pose.
      ctx.rotate((a.angle+2.0+(phase-.5)*2.1)*pulse);
      ctx.drawImage(layers.sword,-29*scale,-105*scale,width,height);
    } else {
      const recoil=t.type==='ranger'?pulse*2:0;
      ctx.drawImage(image,left-(a?Math.cos(a.angle)*recoil:0),top-(t.type==='mage'?pulse*1.5:0),width,height);
    }
    ctx.restore();
    return;
  }
  // Loading/offline fallback: placing a tower always remains usable.
  ctx.beginPath();
  ctx.fillStyle = t.type === 'warrior' ? '#777' : t.type === 'ranger' ? '#385f35' : '#3455a0';
  ctx.arc(t.x, t.y, 18, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = 'white'; ctx.font = '12px sans-serif'; ctx.textAlign = 'center';
  ctx.fillText(t.type[0].toUpperCase(), t.x, t.y + 4);
}
function draw(){let m=currentMap;const path=battlePath();ctx.clearRect(0,0,900,520);if(!(window.RealmforgeMaps&&window.RealmforgeMaps.draw(ctx,m,dungeonMode))){ctx.fillStyle=m>=10?'#b7d7df':m>=5?'#5a392f':m===3?'#596451':m===4?'#59633d':'#6f8757';ctx.fillRect(0,0,900,520);ctx.strokeStyle=m>=10?'#dceff2':m>=5?'#8a4c34':m===3?'#625e54':m===4?'#735b42':'#8d7555';ctx.lineWidth=55;ctx.lineCap='round';ctx.lineJoin='round';ctx.beginPath();path.forEach((p,i)=>i?ctx.lineTo(...p):ctx.moveTo(...p));ctx.stroke();ctx.fillStyle=m===3?'#343a35':'#3c4b31';for(let i=0;i<18;i++)ctx.fillRect((i*137)%880,(i*83)%500,8,8);}towers.slice().sort((a,b)=>a.y-b.y).forEach(drawTowerCharacter);if(towerDrag){ctx.save();ctx.beginPath();ctx.arc(towerDrag.x,towerDrag.y,48,0,Math.PI*2);ctx.fillStyle=towerDrag.valid?'rgba(58,190,82,.18)':'rgba(220,54,54,.20)';ctx.fill();ctx.strokeStyle=towerDrag.valid?'#45e36a':'#ff4747';ctx.lineWidth=7;ctx.stroke();if(!towerDrag.tower){ctx.globalAlpha=.72;drawTowerCharacter({x:towerDrag.x,y:towerDrag.y,type:towerDrag.type,last:0})}ctx.restore()}enemies.slice().sort((a,b)=>a.y-b.y).forEach(e=>{
 const d=enemyDB[e.kind];
 if(['venomfang','mirewitch','mirequeen'].includes(e.kind)){ctx.save();ctx.globalAlpha=e.kind==='mirequeen'?.28:.16;ctx.fillStyle='#79b94a';ctx.beginPath();ctx.arc(e.x,e.y,e.kind==='mirequeen'?32:22,0,Math.PI*2);ctx.fill();ctx.restore()}
 const visualHeight=window.GreenvaleEnemies?window.GreenvaleEnemies.draw(e,ctx):0;
 if(!visualHeight){ctx.beginPath();ctx.fillStyle=d.color;ctx.arc(e.x,e.y,['warlord','tyrant','rootwarden','frostwyrm','mirequeen'].includes(e.kind)?24:['brute','ashgolem','flameguard'].includes(e.kind)?17:13,0,Math.PI*2);ctx.fill();}
 const barY=e.y-(visualHeight?visualHeight+8:27);
 ctx.fillStyle='#222';ctx.fillRect(e.x-18,barY,36,5);
 ctx.fillStyle=['warlord','tyrant','rootwarden'].includes(e.kind)?'#f1b05f':'#ddd';ctx.fillRect(e.x-18,barY,36*Math.max(0,e.hp/e.max),5);
 if(['warlord','tyrant','rootwarden','frostwyrm','mirequeen'].includes(e.kind)){ctx.fillStyle='#fff';ctx.font='11px sans-serif';ctx.textAlign='center';ctx.fillText(e.kind==='rootwarden'?'ROOT WARDEN':e.kind==='tyrant'?'EMBER TYRANT':e.kind==='frostwyrm'?'FROST WYRM':e.kind==='mirequeen'?'MIRE QUEEN':'WARLORD',e.x,barY-7);}
});shots.forEach(drawAttackEffect)}
function loop(now){let raw=(now-last)/1000||0;last=now;let dt=Math.min(.04*battleSpeed,raw*battleSpeed);update(dt,now*battleSpeed);draw();requestAnimationFrame(loop)}
window.getRealmforgeSkillState=function(skill){return save&&save.skills?save.skills[skill]||null:null};window.getRealmforgeXpNeed=function(level){return xpNeed(level)};
window.getRealmforgeActiveSkill=function(){
 if(gathering&&gatherDB[gathering])return gatherDB[gathering].skill;
 if(cookingKey)return 'Cooking';
 if(smithingKey)return 'Smithing';
 if(artisanKey&&artisanRecipes[artisanKey])return artisanRecipes[artisanKey].skill;
 return null
};try{resetBattle();renderUI();updateBattleControls();writeSave(false);requestAnimationFrame(loop)}catch(e){console.error(e);document.querySelectorAll('nav button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.screen').forEach(x=>x.classList.remove('active'));let t=document.querySelector('#'+b.dataset.screen);if(t)t.classList.add('active')})}







/* Title screen bridge: continues the existing account, without replacing saves. */
window.RealmforgeSession={
 summary:function(){return {test:!!testMode,level:combatLevel(),coins:Math.floor(Number(save.coins)||0),cleared:(save.campaign.cleared||[]).length,totalLevel:Object.values(save.skills).reduce(function(n,s){return n+(Number(s.lvl)||0)},0)}},
 saveNow:function(){writeSave(false);return this.summary()}
};

window.addEventListener('load',initCloudSave);
