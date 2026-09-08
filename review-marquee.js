(() => {
  const section = document.querySelector('.reviews-section');
  const button = section?.querySelector('.review-pause');
  if (!button) return;
  button.addEventListener('click', () => {
    const paused = section.classList.toggle('is-paused');
    const english = document.documentElement.lang.startsWith('en');
    button.setAttribute('aria-pressed', String(paused));
    button.setAttribute('aria-label', english ? (paused ? 'Resume reviews' : 'Pause reviews') : (paused ? 'Reviews hervatten' : 'Reviews pauzeren'));
    button.firstElementChild.textContent = paused ? '▶' : 'Ⅱ';
  });
})();
