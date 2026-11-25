document.querySelectorAll('.filter').forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;
    document.querySelectorAll('.filter').forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    document.querySelectorAll('.card[data-category]').forEach(card => {
      card.hidden = category !== 'all' && card.dataset.category !== category;
    });
  });
});
