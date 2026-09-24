/* Local-save title screen. Cloud sync is not configured. */
(function(){
 'use strict';
 var play=document.getElementById('titlePlay'),saveButton=document.getElementById('titleSaveNow'),status=document.getElementById('titleSaveStatus');
 function summary(){
  if(!window.RealmforgeSession){document.getElementById('titleSaveName').textContent='Adventure unavailable';status.textContent='The game did not load. Refresh to try again.';saveButton.disabled=true;return false;}
  try{var s=window.RealmforgeSession.summary();document.getElementById('titleSaveName').textContent=s.test?'Test adventure':'Your saved adventure';
   document.getElementById('titleSaveSummary').textContent='Combat level '+s.level+' · '+s.cleared+' maps cleared · '+s.coins.toLocaleString()+' coins';return true;
  }catch(e){status.textContent='Could not read your adventure. Refresh to try again.';return false;}
 }
 play.addEventListener('click',function(){
  if(!summary())return;
  document.body.classList.remove('atTitle');
  document.getElementById('titleScreen').hidden=true;
  var active=document.querySelector('.screen.active');
  if(active){var heading=active.querySelector('h2');if(heading){heading.setAttribute('tabindex','-1');heading.focus();}}
  window.scrollTo(0,0);
 });
 saveButton.addEventListener('click',function(){
  try{window.RealmforgeSession.saveNow();summary();status.textContent='Saved in this browser or app at '+new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})+'.';}
  catch(e){status.textContent='Save failed. Your storage may be full or unavailable. Keep this page open and export your progress from the game.';}
 });
 summary();
})();
