function filterMoves(level) {
  const cards = document.querySelectorAll('.move-card');
  const buttons = document.querySelectorAll('.filter-btn');

  // Aktif buton sınıfını güncelle
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  // Kartları filtrele
  cards.forEach(card => {
    if (level === 'all' || card.getAttribute('data-level') === level) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
