/* Realmforge title/login bridge. */
(function(){
 'use strict';
 var play=document.getElementById('titlePlay'),saveButton=document.getElementById('titleSaveNow'),status=document.getElementById('titleSaveStatus');
 function summary(){
  if(!window.RealmforgeSession){document.getElementById('titleSaveName').textContent='Adventure unavailable';status.textContent='The game did not load. Refresh to try again.';saveButton.disabled=true;return false;}
  try{var x=window.RealmforgeSession.summary();document.getElementById('titleSaveName').textContent=x.test?'Test adventure':'Your saved adventure';document.getElementById('titleSaveSummary').textContent='Combat level '+x.level+' · '+x.cleared+' maps cleared · '+x.coins.toLocaleString()+' coins';return true;}catch(e){status.textContent='Could not read your adventure. Refresh to try again.';return false;}
 }
 function enterGame(){document.body.classList.remove('atTitle');document.getElementById('titleScreen').hidden=true;window.scrollTo(0,0);}
 function openCloudLogin(){if(!summary())return;enterGame();var home=document.getElementById('home');document.querySelectorAll('.screen').forEach(function(x){x.classList.remove('active')});if(home)home.classList.add('active');setTimeout(function(){var panel=document.querySelector('.cloudPanel');if(panel){panel.scrollIntoView({behavior:'smooth',block:'center'});var email=document.getElementById('cloudEmail');if(email)email.focus();}},80);}
 play.addEventListener('click',function(){
  var stay=localStorage.getItem('realmforge_cloud_stay_signed_in')==='1',session=null;try{session=JSON.parse(localStorage.getItem('realmforge_cloud_session')||'null')}catch(e){}
  if(stay&&session&&session.access_token&&session.user){if(!summary())return;enterGame();status.textContent='';return;}
  openCloudLogin();
 });
 saveButton.addEventListener('click',function(){try{window.RealmforgeSession.saveNow();summary();status.textContent='Saved on this device at '+new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})+'.';}catch(e){status.textContent='Save failed. Your storage may be full or unavailable.';}});
 summary();
})();
