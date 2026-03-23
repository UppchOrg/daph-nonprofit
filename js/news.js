/**
 * news.js — filter buttons for news page
 */
document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const articles   = document.querySelectorAll('.news-full-grid article');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      articles.forEach(article => {
        if (filter === 'all' || article.dataset.category === filter) {
          article.style.display = '';
        } else {
          article.style.display = 'none';
        }
      });

      // Re-apply featured span when showing all
      const featured = document.querySelector('.news-card--featured');
      if (featured) {
        featured.style.gridColumn = filter === 'all' ? 'span 3' : '';
      }
    });
  });
});
