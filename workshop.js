// V168: switch visible activities without stopping training or touching saves.
(function () {
  const workshop = document.querySelector('#skilling');
  if (!workshop) return;
  const buttons = Array.from(workshop.querySelectorAll('[data-workshop]'));
  const panes = Array.from(workshop.querySelectorAll('.workshopPane'));
  function selectSkill(key) {
    if (!panes.some(p => p.id === 'workshop-' + key)) return;
    panes.forEach(p => { p.hidden = p.id !== 'workshop-' + key; });
    buttons.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.workshop === key)));
  }
  buttons.forEach(b => b.addEventListener('click', () => selectSkill(b.dataset.workshop)));
  selectSkill('mining');
})();
