const groups = [...document.querySelectorAll('.arsenal-group')];
const filters = [...document.querySelectorAll('[data-scope].filter')];
const search = document.getElementById('tool-search');
let scope = 'all';
function refresh() {
  const query = search.value.trim().toLowerCase();
  let visible = 0;
  groups.forEach(group => {
    const matchScope = scope === 'all' || group.dataset.scope.split(' ').includes(scope);
    const matchText = !query || group.textContent.toLowerCase().includes(query);
    group.hidden = !(matchScope && matchText);
    if (!group.hidden) visible++;
  });
  document.getElementById('tool-count').textContent = `${visible} of ${groups.length} categories shown`;
  document.getElementById('no-tools').hidden = visible !== 0;
}
filters.forEach(button => button.addEventListener('click', () => {
  scope = button.dataset.scope;
  filters.forEach(item => {
    item.classList.toggle('active', item === button);
    item.setAttribute('aria-pressed', String(item === button));
  });
  refresh();
}));
search.addEventListener('input', refresh);
refresh();
