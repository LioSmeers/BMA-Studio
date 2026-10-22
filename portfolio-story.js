(() => {
  const chapters = [...document.querySelectorAll('.portfolio-page [data-portfolio-project]')];
  const stage = document.querySelector('.portfolio-story-stage');
  if (!stage || !chapters.length) return;

  const desktop = matchMedia('(min-width: 1024px) and (min-height: 650px) and (prefers-reduced-motion: no-preference)');
  const screen = document.createElement('a');
  screen.className = 'portfolio-stage-screen';
  const footer = document.createElement('div');
  footer.className = 'portfolio-stage-footer';
  const hint = document.createElement('span');
  hint.textContent = 'Scroll door de projecten';
  const nav = document.createElement('nav');
  nav.className = 'portfolio-stage-nav';
  nav.setAttribute('aria-label', 'Ga naar een project');
  const images = [];
  const buttons = [];
  let active = -1;
  let scheduled = false;

  chapters.forEach((chapter, index) => {
    const source = chapter.querySelector('.portfolio-preview img');
    const image = source.cloneNode();
    image.alt = '';
    image.className = '';
    image.loading = index ? 'lazy' : 'eager';
    screen.append(image);
    images.push(image);
    const button = document.createElement('button');
    button.type = 'button';
    button.addEventListener('click', () => chapter.scrollIntoView({ behavior: 'smooth', block: 'center' }));
    nav.append(button);
    buttons.push(button);
    chapter.addEventListener('focusin', () => setActive(index));
  });

  footer.append(hint, nav);
  stage.append(screen, footer);

  function setActive(index) {
    if (index === active) return;
    images.forEach((image, i) => {
      image.classList.toggle('is-previous', i === active);
      image.classList.toggle('is-current', i === index);
      chapters[i].classList.toggle('is-current', i === index);
      if (i === index) buttons[i].setAttribute('aria-current', 'true');
      else buttons[i].removeAttribute('aria-current');
    });
    const link = chapters[index].querySelector('.portfolio-link');
    screen.href = link.href;
    images[index].loading = 'eager';
    active = index;
    updateLabels();
  }

  function updateLabels() {
    const english = document.documentElement.lang === 'en';
    hint.textContent = english ? 'Scroll through the projects' : 'Scroll door de projecten';
    nav.setAttribute('aria-label', english ? 'Go to a project' : 'Ga naar een project');
    stage.setAttribute('aria-label', english ? 'Website preview' : 'Websitevoorbeeld');
    buttons.forEach((button, index) => {
      button.setAttribute('aria-label', `${english ? 'Go to' : 'Ga naar'} ${chapters[index].querySelector('h2').textContent}`);
    });
    if (active >= 0) screen.setAttribute('aria-label', `${english ? 'View project' : 'Bekijk het project'}: ${chapters[active].querySelector('h2').textContent}`);
  }

  function update() {
    scheduled = false;
    if (!desktop.matches) return;
    const center = innerHeight / 2;
    const distances = chapters.map(chapter => {
      const rect = chapter.getBoundingClientRect();
      return Math.abs(rect.top + rect.height / 2 - center);
    });
    setActive(distances.indexOf(Math.min(...distances)));
  }

  function scheduleUpdate() {
    if (!scheduled && desktop.matches) {
      scheduled = true;
      requestAnimationFrame(update);
    }
  }

  function configure() {
    document.body.classList.toggle('has-portfolio-story', desktop.matches);
    stage.hidden = !desktop.matches;
    if (!desktop.matches) chapters.forEach(chapter => chapter.classList.remove('is-current'));
    active = -1;
    update();
  }

  desktop.addEventListener('change', configure);
  window.addEventListener('bma-language-change', updateLabels);
  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate, { passive: true });
  updateLabels();
  configure();
})();
