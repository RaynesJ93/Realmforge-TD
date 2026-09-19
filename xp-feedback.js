// V169: display-only XP feedback. No timers, XP rates or save fields are changed.
(function () {
  let lastSkill = 'Mining', lastCombat = 'Attack';
  const pending = new Map(); let flushTimer = null;
  const tray = document.createElement('div'); tray.className = 'xpPopups'; tray.setAttribute('aria-live','polite'); tray.setAttribute('aria-atomic','false'); document.body.appendChild(tray);
  const combat = ['Attack','Strength','Defence','Ranged','Magic','Hitpoints'];
  const panels = [];
  for (const id of ['activeSkill']) {
    const anchor = document.getElementById(id); if (!anchor) continue;
    const panel=document.createElement('div');panel.className='trainingXp';
    panel.innerHTML='<div class="trainingXpHeading"><b></b><span></span></div><div class="trainingXpBar" role="progressbar" aria-valuemin="0" aria-valuemax="100"><i></i></div><small></small>';
    anchor.insertAdjacentElement('afterend',panel);panels.push({panel,battle:id==='battleXpAnchor'});
  }
  function activeTrainingSkill() {
    try {
      return typeof window.getRealmforgeActiveSkill === 'function' ? window.getRealmforgeActiveSkill() : null;
    } catch (e) {
      return null;
    }
  }
  function refresh() {
    const current=activeTrainingSkill();
    if(current)lastSkill=current;
    for (const {panel,battle} of panels) {
      if(typeof window.getRealmforgeSkillState!=='function')continue; const skill=battle?lastCombat:lastSkill, s=window.getRealmforgeSkillState(skill); if(!s)continue;
      const max=s.lvl>=99, need=(typeof window.getRealmforgeXpNeed==='function'?window.getRealmforgeXpNeed(s.lvl):1), pct=max?100:Math.max(0,Math.min(100,s.xp/need*100));
      panel.querySelector('b').textContent=skill+' · Level '+s.lvl;
      panel.querySelector('.trainingXpHeading span').textContent=max?'MAX LEVEL':pct.toFixed(1)+'%';
      const bar=panel.querySelector('[role="progressbar"]');bar.setAttribute('aria-label',skill+' level progress');bar.setAttribute('aria-valuenow',pct.toFixed(1));
      panel.querySelector('i').style.width=pct+'%';
      panel.querySelector('small').textContent=max?'Level 99 reached':s.xp.toLocaleString()+' / '+need.toLocaleString()+' XP · '+Math.max(0,need-s.xp).toLocaleString()+' to level '+(s.lvl+1);
    }
  }
  function flush() {
    flushTimer=null;
    for(const [skill,gain] of pending) {
      const popup=document.createElement('div');popup.className='xpPopup'+(gain.level?' xpLevelUp':'');
      popup.textContent='+'+gain.amount.toLocaleString()+' '+skill+' XP'+(gain.level?' · Level '+gain.level+'!':'');
      while(tray.children.length>=4)tray.firstElementChild.remove();
      tray.appendChild(popup);setTimeout(()=>popup.remove(),2200);
    }
    pending.clear();
  }
  window.addEventListener('realmforge:xp',e=>{
    const {skill,gained,oldLevel,level}=e.detail;
    if(combat.includes(skill)) return;
    if(!activeSkill())lastSkill=skill;
    const p=pending.get(skill)||{amount:0,level:0};p.amount+=gained;if(level>oldLevel)p.level=level;pending.set(skill,p);
    if(!flushTimer)flushTimer=setTimeout(flush,180);
    refresh();
  });
  document.addEventListener('click',e=>{
    const category=e.target.closest('[data-workshop]');
    if(category&&!activeSkill())lastSkill=({mining:'Mining',woodcutting:'Woodcutting',smelting:'Smithing',fishing:'Fishing',cooking:'Cooking',artisan:'Fletching',smithing:'Smithing'})[category.dataset.workshop]||lastSkill;
    // Run after existing inline actions and the category switch have completed.
    queueMicrotask(refresh);
  });
  window.refreshTrainingXp=refresh;
  refresh();
})();
