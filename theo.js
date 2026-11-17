/* Interactive John: open a lightweight, bilingual website helper chat. */
(() => {
  if (window.self !== window.top || document.querySelector('.theo-companion')) return;

  // iOS browsers and Safari require HEVC alpha; Chromium keeps the VP9 alpha source.
  const appleVideo = /iPad|iPhone|iPod/.test(navigator.userAgent)
    || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
    || (/Safari/.test(navigator.userAgent) && !/Chrome|Chromium|Edg|OPR|Android/.test(navigator.userAgent));
  const mobileJohn = matchMedia('(max-width: 767px)').matches;
  const johnSources = name => `${appleVideo ? `<source src="/public/${name}${mobileJohn ? "-mobile" : ""}.mov?v=20261023-dock" type='video/mp4; codecs="hvc1"'>` : ''}<source src="/public/${name}.webm" type="video/webm">`;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const introTarget = document.querySelector('.hero-primary');
  const playHomeIntro = ['/', '/index.html'].includes(location.pathname) && introTarget && !reducedMotion.matches && !mobileJohn; // phones: no jump, John just docks bottom right
  const root = document.createElement('div');
  root.className = 'theo-companion';
  root.setAttribute('data-no-translate', '');
  if (playHomeIntro) {
    root.classList.add('is-intro-waiting');
    root.setAttribute('aria-hidden', 'true');
    root.inert = true;
  }
  root.innerHTML = `
    <button class="theo-trigger" type="button" aria-label="Open de chat met John" aria-controls="theo-chat-panel" aria-expanded="false" title="Stel je vraag aan John">
      <video muted playsinline webkit-playsinline preload="auto" poster="/assets/john/john-idle.png" aria-hidden="true">${johnSources('john-interactief-transparant')}</video><img class="john-video-poster" src="/assets/john/john-idle.png" width="960" height="960" alt="" aria-hidden="true">
    </button>
    <aside class="theo-panel" id="theo-chat-panel" aria-label="Chat met John" aria-hidden="true" inert>
      <div class="theo-panel-bar">
        <span class="theo-avatar"><img class="theo-john-avatar" src="/assets/john/john-avatar.jpg" width="44" height="44" alt="" aria-hidden="true"></span>
        <span class="theo-panel-heading"><strong class="theo-panel-title">John</strong><small class="theo-panel-subtitle" aria-live="polite"></small></span>
        <button class="theo-panel-reset" type="button" aria-label="Nieuw gesprek" title="Nieuw gesprek" disabled><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12a9 9 0 1 0 3-6.7M3 4v5h5"/></svg></button>
        <button class="theo-panel-close" type="button" aria-label="Sluit de chat" title="Sluiten"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg></button>
      </div>
      <div class="theo-messages" role="log" aria-live="polite" aria-relevant="additions"></div>
      <div class="theo-chips"></div>
      <form class="theo-chat-form">
        <label class="theo-sr-only" for="theo-chat-input">Bericht aan John</label>
        <textarea class="theo-chat-input" id="theo-chat-input" name="question" rows="1" maxlength="500" autocomplete="off" placeholder="Vraag John…" required></textarea>
        <button class="theo-chat-send" type="submit" aria-label="Verstuur je vraag" title="Verstuur" disabled>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5m-7 7 7-7 7 7" /></svg>
        </button>
      </form>
      <p class="theo-chat-note"><span></span> · <a href="/privacy.html"></a></p>
      <div class="theo-book" role="dialog" aria-modal="true" hidden>
        <div class="theo-book-bar">
          <button class="theo-book-back" type="button"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5m6-6-6 6 6 6"/></svg><span></span></button>
          <a class="theo-book-ext" target="_blank" rel="noopener" href="https://cal.com/lio-smeers-uisp1o/vrijblijvend-gesprek-met-lio"></a>
        </div>
        <div class="theo-book-stage"><p class="theo-book-status" role="status"></p></div>
      </div>
    </aside>
    <button class="theo-teaser" type="button" hidden><strong></strong><span></span></button>`;
  document.body.append(root);

  const trigger = root.querySelector('.theo-trigger');
  const panel = root.querySelector('.theo-panel');
  const closeButton = root.querySelector('.theo-panel-close');
  const resetButton = root.querySelector('.theo-panel-reset');
  const video = root.querySelector('video');
  video.muted = video.defaultMuted = true;
  video.playsInline = true;
  const idlePoster = root.querySelector('.john-video-poster');
  const syncIdlePoster = event => {
    if (event?.type === 'playing' && video.readyState >= 2) { idlePoster.hidden = true; return; }
    if (video.currentTime < .05 || (Number.isFinite(video.duration) && video.currentTime >= video.duration - .08)) idlePoster.hidden = false;
    else if (video.readyState >= 2) idlePoster.hidden = true;
  };
  ['loadeddata', 'seeked', 'playing', 'pause', 'ended'].forEach(event => video.addEventListener(event, syncIdlePoster));
  video.addEventListener('error', () => { idlePoster.hidden = false; });
  const form = root.querySelector('.theo-chat-form');
  const input = root.querySelector('.theo-chat-input');
  const sendButton = root.querySelector('.theo-chat-send');
  const messages = root.querySelector('.theo-messages');
  const chips = root.querySelector('.theo-chips');
  const subtitle = root.querySelector('.theo-panel-subtitle');
  const teaser = root.querySelector('.theo-teaser');
  const book = root.querySelector('.theo-book');
  const bookStage = book.querySelector('.theo-book-stage');
  const bookStatus = book.querySelector('.theo-book-status');
  const segmentSeconds = 4;
  const openedAt = segmentSeconds;
  const hoverPoseEnd = 1.65;
  const idleSettleLead = 1.7;
  const idleSettleRate = 0.9;
  const poseRate = 2; // was 4x: hover/open/close poses now play at a natural pace
  const settleStartRate = 1.6;
  let isOpen = false;
  let animationFrame = 0;
  let playbackRun = 0;
  let hoverResetTimer = 0;
  let hasLandedAtIdle = true;
  let hasGreeted = false;

  const startHomeIntro = () => {
    const targetBounds = introTarget?.getBoundingClientRect();
    if (!playHomeIntro || reducedMotion.matches || document.visibilityState !== 'visible' || !targetBounds || targetBounds.bottom <= 0 || targetBounds.top >= innerHeight) {
      root.classList.remove('is-intro-waiting');
      root.removeAttribute('aria-hidden');
      root.inert = false;
      return;
    }

    const target = introTarget;
    const stage = document.createElement('div');
    stage.className = 'theo-intro';
    stage.setAttribute('aria-hidden', 'true');
    stage.innerHTML = `<video muted playsinline webkit-playsinline preload="auto" poster="/assets/john/john-jump-start.png" tabindex="-1">${johnSources('john-normaal-zwaaien-vallen-transparant')}</video>`;
    const introVideo = stage.querySelector('video');
    const pageLayer = document.documentElement;
    let finished = false;
    let started = false;
    let jumpStarted = false;
    let buttonRecoilStarted = false;
    let fallbackTimer;
    let jumpFinishTimer;
    let playDelayTimer;
    let jumpWatchFrame = 0;

    const placeIntro = () => {
      if (!target.isConnected || !pageLayer.isConnected) return;
      const targetRect = target.getBoundingClientRect();
      const stageWidth = parseFloat(getComputedStyle(stage).width);
      const stageHeight = stageWidth * (876 / 1052);
      const subjectCenterX = targetRect.left + window.scrollX + (targetRect.width / 2);
      stage.style.left = `${subjectCenterX - (stageWidth / 2)}px`;
      stage.style.top = `${targetRect.top + window.scrollY - (stageHeight * 0.70)}px`;
    };

    const cleanup = () => {
      window.clearTimeout(fallbackTimer);
      window.clearTimeout(jumpFinishTimer);
      window.clearTimeout(playDelayTimer);
      window.cancelAnimationFrame(jumpWatchFrame);
      document.removeEventListener('pointerdown', resumeIntroPlayback);
      document.removeEventListener('touchend', resumeIntroPlayback);
      target.classList.remove('is-theo-recoiling');
      target.removeEventListener('animationend', onButtonRecoilEnd);
      window.removeEventListener('resize', placeIntro);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      reducedMotion.removeEventListener('change', onMotionPreferenceChange);
      stage.removeEventListener('animationend', onIntroAnimationEnd);
      introVideo.pause();
      stage.remove();
    };

    function revealCompanion() {
      if (finished) return;
      finished = true;
      cleanup();
      root.classList.remove('is-intro-waiting');
      root.classList.add('is-intro-entering');
      root.removeAttribute('aria-hidden');
      root.inert = false;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          root.classList.add('is-intro-visible');
          root.classList.remove('is-intro-entering');
        });
      });
    }

    function finishIntro() {
      if (finished) return;
      finished = true;
      cleanup();
      window.setTimeout(() => {
        finished = false;
        revealCompanion();
      }, 2000);
    }

    function onIntroAnimationEnd(event) {
      if (event.animationName === 'theo-jump-fall') finishIntro();
    }

    function onButtonRecoilEnd(event) {
      if (event.animationName !== 'theo-button-recoil') return;
      target.classList.remove('is-theo-recoiling');
      target.removeEventListener('animationend', onButtonRecoilEnd);
    }

    function startButtonRecoil() {
      if (buttonRecoilStarted) return;
      buttonRecoilStarted = true;
      target.classList.add('is-theo-recoiling');
      target.addEventListener('animationend', onButtonRecoilEnd);
    }

    function startJump() {
      if (finished || jumpStarted) return;
      jumpStarted = true;
      window.clearTimeout(fallbackTimer);
      startButtonRecoil();
      stage.classList.add('is-jumping');
      jumpFinishTimer = window.setTimeout(finishIntro, 2050);
    }

    function checkIntroVideoTime() {
      if (finished || jumpStarted) return;
      if (introVideo.currentTime >= 0.65) startButtonRecoil();
      if (introVideo.currentTime >= 1.1) {
        startJump();
        return;
      }
      jumpWatchFrame = window.requestAnimationFrame(checkIntroVideoTime);
    }

    function skipIntro() {
      revealCompanion();
    }

    function onVisibilityChange() {
      if (document.visibilityState !== 'visible') skipIntro();
    }

    function onMotionPreferenceChange() {
      if (reducedMotion.matches) skipIntro();
    }

    const seekStart = () => {
      if (!started || introVideo.currentTime > .2) return;
      try { introVideo.currentTime = .18; } catch { /* Metadata may still be loading. */ }
    };
    function resumeIntroPlayback() {
      if (finished || jumpStarted) return;
      // Calling play() from a real touch also recovers iOS low-power autoplay blocking.
      introVideo.play().then(() => {
        document.removeEventListener('pointerdown', resumeIntroPlayback);
        document.removeEventListener('touchend', resumeIntroPlayback);
        window.cancelAnimationFrame(jumpWatchFrame);
        jumpWatchFrame = window.requestAnimationFrame(checkIntroVideoTime);
        window.clearTimeout(fallbackTimer);
        fallbackTimer = window.setTimeout(() => {
          if (!jumpStarted && !introVideo.paused) startJump();
        }, 6500);
      }).catch(error => {
        if (error.name === 'NotAllowedError' || error.name === 'AbortError') {
          // Keep the transparent starting pose visible until the browser permits playback.
          document.addEventListener('pointerdown', resumeIntroPlayback, { passive: true });
          document.addEventListener('touchend', resumeIntroPlayback, { passive: true });
        } else revealCompanion();
      });
    }
    const playWhenReady = () => {
      if (started || finished) return;
      started = true;
      placeIntro();
      stage.classList.add('is-visible');
      introVideo.muted = introVideo.defaultMuted = true;
      introVideo.playsInline = true;
      seekStart();
      playDelayTimer = window.setTimeout(() => {
        if (finished) return;
        introVideo.playbackRate = mobileJohn ? 1 : .85;
        resumeIntroPlayback();
      }, 450);
    };

    pageLayer.append(stage);
    window.addEventListener('resize', placeIntro, { passive: true });
    document.addEventListener('visibilitychange', onVisibilityChange);
    reducedMotion.addEventListener('change', onMotionPreferenceChange);
    introVideo.addEventListener('loadedmetadata', seekStart, { once: true });
    stage.addEventListener('animationend', onIntroAnimationEnd);
    introVideo.addEventListener('error', revealCompanion, { once: true });
    // Recover the dock even when a browser never resolves its media-play promise.
    fallbackTimer = window.setTimeout(revealCompanion, 15000);
    // Do not wait for loadeddata: mobile Safari may defer decoding until play() is called.
    playWhenReady();
  };

  if (playHomeIntro) startHomeIntro();

  const language = () => document.documentElement.lang.toLowerCase().startsWith('en') ? 'en' : 'nl';
  const copy = {
    nl: {
      open: 'Open de chat met John', close: 'Sluit de chat met John',
      reset: 'Nieuw gesprek', closeButton: 'Sluit de chat', inputLabel: 'Bericht aan John', placeholder: 'Vraag John iets…',
      send: 'Verstuur je vraag', online: 'Online · antwoordt meteen', offline: 'Even niet bereikbaar · mail Lio', typing: 'Typt een antwoord…',
      greet: ['Goeiemorgen', 'Goeiemiddag', 'Goeieavond'],
      welcomeTitle: 'Wat bouwen we voor jouw zaak?',
      welcomeIntro: 'Ik ben John, de assistent van BMA Studio. Kies een onderwerp of stel gewoon je vraag.',
      disclaimer: 'John is een AI en kan zich vergissen', privacy: 'Privacy',
      teaserTitle: 'Hoi, ik ben John.', teaserText: 'Vragen over je website? Ik antwoord meteen.',
      book: 'Plan een gratis gesprek met Lio', bookPick: 'Kies een moment', bookSlots: 'Beschikbare momenten laden…', bookNone: 'Geen vrije momenten gevonden.', bookName: 'Je naam', bookEmail: 'Je e-mailadres', bookConfirm: 'Bevestig afspraak', bookSending: 'Bezig…', bookChange: 'Ander moment', bookDone: 'Ingeboekt! Je krijgt een bevestiging op', bookError: 'Boeken lukte niet. Kies een ander moment of open de volledige kalender.', bookMore: 'Andere dag? Open de volledige kalender', bookNote: 'Je gegevens gaan naar Cal.com om de afspraak te bevestigen.', bookBack: 'Terug naar de chat', bookTab: 'Open in nieuw tabblad', bookLoading: 'Kalender wordt geladen…', bookFailed: 'De kalender kon niet laden. Gebruik “Open in nieuw tabblad”.',
      tooLong: 'Gebruik maximaal 500 tekens.', empty: 'Typ eerst je vraag.',
      tiles: [
        { key: 'services', tag: 'Diensten', label: 'Wat doet BMA Studio?' },
        { key: 'price', tag: 'Prijs', label: 'Wat kost een website?' },
        { key: 'process', tag: 'Aanpak', label: 'Hoe verloopt een project?' },
        { key: 'call', tag: 'Gesprek', label: 'Plan een call met Lio' }
      ],
      answers: {
        services: { q: 'Welke diensten biedt BMA?', a: 'BMA Studio bouwt vier soorten dingen voor bedrijven. Swipe even door:', extra: 'services' },
        price: { q: 'Wat kost een website?' },
        process: { q: 'Hoe verloopt een project?' },
        call: { q: 'Ik wil een gesprek met Lio', a: 'Top! Kies hieronder een moment dat jou past. Het gesprek is gratis en vrijblijvend.', extra: 'book' }
      },
      services: [
        ['01', 'Websites', 'Snelle, moderne sites die bezoekers omzetten in klanten.'],
        ['02', 'Webapps', 'Klantportalen, boekingstools en dashboards op maat.'],
        ['03', 'AI-assistenten', 'Een assistent zoals ik, getraind op jouw zaak.'],
        ['04', 'Automatisering', 'Repetitief werk dat zichzelf regelt.']
      ]
    },
    en: {
      open: 'Open the chat with John', close: 'Close the chat with John',
      reset: 'New conversation', closeButton: 'Close the chat', inputLabel: 'Message John', placeholder: 'Ask John anything…',
      send: 'Send your question', online: 'Online · replies instantly', offline: 'Unavailable right now · email Lio', typing: 'Typing a reply…',
      greet: ['Good morning', 'Good afternoon', 'Good evening'],
      welcomeTitle: 'What are we building for your business?',
      welcomeIntro: 'I’m John, BMA Studio’s assistant. Pick a topic or just ask your question.',
      disclaimer: 'John is an AI and can make mistakes', privacy: 'Privacy',
      teaserTitle: 'Hi, I’m John.', teaserText: 'Questions about your website? I reply instantly.',
      book: 'Book a free call with Lio', bookPick: 'Pick a time', bookSlots: 'Loading available times…', bookNone: 'No free times found.', bookName: 'Your name', bookEmail: 'Your email', bookConfirm: 'Confirm booking', bookSending: 'Booking…', bookChange: 'Other time', bookDone: 'Booked! A confirmation is on its way to', bookError: 'Booking failed. Pick another time or open the full calendar.', bookMore: 'Another day? Open the full calendar', bookNote: 'Your details go to Cal.com to confirm the booking.', bookBack: 'Back to the chat', bookTab: 'Open in new tab', bookLoading: 'Loading calendar…', bookFailed: 'The calendar could not load. Use “Open in new tab”.',
      tooLong: 'Use no more than 500 characters.', empty: 'Type your question first.',
      tiles: [
        { key: 'services', tag: 'Services', label: 'What does BMA Studio do?' },
        { key: 'price', tag: 'Pricing', label: 'How much is a website?' },
        { key: 'process', tag: 'Process', label: 'How does a project work?' },
        { key: 'call', tag: 'Call', label: 'Book a call with Lio' }
      ],
      answers: {
        services: { q: 'What services does BMA offer?', a: 'BMA Studio builds four kinds of things for businesses. Swipe through:', extra: 'services' },
        price: { q: 'How much does a website cost?' },
        process: { q: 'How does a project work?' },
        call: { q: 'I’d like to talk to Lio', a: 'Great! Pick a time that suits you below. The call is free and without obligation.', extra: 'book' }
      },
      services: [
        ['01', 'Websites', 'Fast, modern sites that turn visitors into customers.'],
        ['02', 'Web apps', 'Client portals, booking tools and custom dashboards.'],
        ['03', 'AI assistants', 'An assistant like me, trained on your business.'],
        ['04', 'Automation', 'Repetitive work that runs itself.']
      ]
    }
  };
  let isSending = false;
  let requestRun = 0;
  let activeRequest = null;
  let asked = new Set();
  const conversation = [];
  let log = []; // what the visitor sees, kept in sessionStorage so a page change does not wipe the chat
  const store = () => { try { if (log.length) sessionStorage.setItem('john-chat', JSON.stringify({ lang: chatLanguage, log: log.slice(-40), history: conversation, asked: [...asked] })); else sessionStorage.removeItem('john-chat'); } catch { /* private mode: chat just will not survive a page change */ } };
  const languageThreads = new Map();
  let chatLanguage = language();
  // John runs on Cloudflare, independently of the visitor's or developer's laptop.
  // Dev only: open any local page with ?john=local to use `wrangler dev` (port 8787); ?john=live switches back.
  let apiBase = 'https://bma-john.sneeuwpio.workers.dev';
  if (['localhost', '127.0.0.1'].includes(location.hostname)) {
    try {
      const mode = new URLSearchParams(location.search).get('john');
      if (mode) localStorage.setItem('john-api', mode);
      if (localStorage.getItem('john-api') === 'local') apiBase = 'http://localhost:8787';
    } catch { /* storage blocked: stay on the live worker */ }
  }
  const requestJohn = options => fetch(`${apiBase}/api/john`, options);
  const calUrl = 'https://cal.com/lio-smeers-uisp1o/vrijblijvend-gesprek-met-lio';
  const avatarUrl = '/assets/john/john-avatar.jpg';
  const t = key => copy[language()][key];
  const icons = {
    arrow: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>',
    right: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
  };
  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  };
  const fitComposer = () => {
    input.style.height = 'auto';
    const contentHeight = input.scrollHeight;
    const maxHeight = 112;
    input.style.height = `${Math.min(contentHeight, maxHeight)}px`;
    input.style.overflowY = contentHeight > maxHeight ? 'auto' : 'hidden';
    sendButton.disabled = isSending || !input.value.trim();
  };
  const scrollEnd = () => requestAnimationFrame(() => { messages.scrollTop = messages.scrollHeight; });
  const syncStatus = () => { subtitle.textContent = t(isSending ? 'typing' : root.classList.contains('is-offline') ? 'offline' : 'online'); };
  // Follow-up questions: only the presets the visitor has not asked yet, once a conversation is running.
  const renderChips = () => {
    chips.replaceChildren();
    if (isSending || !messages.childElementCount || messages.querySelector('.theo-welcome')) return;
    Object.entries(t('answers')).filter(([key]) => !asked.has(key)).forEach(([key, answer]) => {
      const chip = el('button', 'theo-chip', answer.q);
      chip.type = 'button';
      chip.addEventListener('click', () => askPreset(key));
      chips.append(chip);
    });
  };
  const setBusy = value => {
    isSending = value;
    if (value) form.setAttribute('aria-busy', 'true'); else form.removeAttribute('aria-busy');
    syncStatus();
    fitComposer();
    renderChips();
  };

  const buildWelcome = () => {
    const hour = new Date().getHours();
    const welcome = el('div', 'theo-welcome');
    const head = el('div', 'theo-welcome-head');
    head.append(el('div', 'theo-welcome-eyebrow', t('greet')[hour < 12 ? 0 : hour < 18 ? 1 : 2]), el('h2', 'theo-welcome-title', t('welcomeTitle')), el('p', 'theo-welcome-intro', t('welcomeIntro')));
    const grid = el('div', 'theo-tiles');
    t('tiles').forEach(tile => {
      const button = el('button', 'theo-tile');
      button.type = 'button';
      const top = el('span', 'theo-tile-top');
      top.append(el('span', '', tile.tag));
      top.insertAdjacentHTML('beforeend', icons.arrow);
      button.append(top, el('span', 'theo-tile-label', tile.label));
      button.addEventListener('click', () => askPreset(tile.key));
      grid.append(button);
    });
    welcome.append(head, grid);
    return welcome;
  };
  const addGreeting = () => {
    if (hasGreeted) return;
    hasGreeted = true;
    messages.append(buildWelcome());
    renderChips();
  };
  const addUser = text => {
    messages.querySelector('.theo-welcome')?.remove();
    resetButton.disabled = false;
    messages.append(el('div', 'theo-message theo-message--visitor', text));
    log.push({ r: 'u', text });
    store();
    scrollEnd();
  };
  const addTyping = () => {
    const row = el('div', 'theo-message theo-message--theo theo-thinking');
    const portrait = el('img', 'theo-message-avatar');
    portrait.src = avatarUrl; portrait.alt = ''; portrait.width = portrait.height = 26;
    const dots = el('div', 'theo-dots');
    dots.innerHTML = '<i></i><i></i><i></i>';
    dots.append(el('span', 'theo-sr-only', t('typing')));
    row.append(portrait, dots);
    messages.append(row);
    scrollEnd();
    return row;
  };
  const safeHref = href => typeof href === 'string' && (href.startsWith('/') && !href.startsWith('//') || href.startsWith('https://cal.com/lio-smeers-uisp1o/') || href === 'mailto:info@bmastudio.be' || href === 'tel:+32460973736');
  const extras = (kind, link) => {
    if (kind === 'services') {
      const row = el('div', 'theo-cards');
      t('services').forEach(([number, title, text]) => {
        const card = el('div', 'theo-card');
        card.append(el('b', '', number), el('strong', '', title), el('span', '', text));
        row.append(card);
      });
      return row;
    }
    if (kind === 'book') {
      return buildBooker();
    }
    if (link) {
      const anchor = el('a', 'theo-link', link.label);
      anchor.href = link.href;
      return anchor;
    }
    return null;
  };
  // John's answer types in letter by letter; an aborted run (reset, language switch) just shows the full text.
  const addBot = (text, kind, link, run, instant) => new Promise(resolve => {
    const row = el('div', 'theo-message theo-message--theo');
    const portrait = el('img', 'theo-message-avatar');
    portrait.src = avatarUrl; portrait.alt = ''; portrait.width = portrait.height = 26;
    portrait.setAttribute('aria-hidden', 'true');
    const body = el('div', 'theo-message-body');
    const paragraph = el('p', 'theo-message-text is-typing');
    // The live region announces the finished reply once, not every typed letter.
    paragraph.setAttribute('aria-hidden', 'true');
    body.append(paragraph, el('span', 'theo-sr-only', text));
    row.append(portrait, body);
    messages.append(row);
    const finish = () => {
      paragraph.textContent = text;
      paragraph.classList.remove('is-typing');
      const extra = extras(kind, link);
      if (extra) body.append(extra);
      scrollEnd();
      resolve();
    };
    if (reducedMotion.matches || instant) return finish();
    let shown = 0;
    const step = () => {
      if (run !== requestRun) return finish();
      shown = Math.min(text.length, shown + 3);
      paragraph.textContent = text.slice(0, shown);
      scrollEnd();
      if (shown < text.length) setTimeout(step, 18); else finish();
    };
    step();
  });
  async function askPreset(key) {
    if (isSending) return;
    const answer = t('answers')[key];
    asked.add(key);
    // Only services (cards) and booking are canned; John answers everything else himself, with real prices.
    if (!answer.a) return sendQuestion(answer.q);
    const run = ++requestRun;
    addUser(answer.q);
    setBusy(true);
    const pending = addTyping();
    await new Promise(resolve => setTimeout(resolve, reducedMotion.matches ? 0 : 700));
    if (run !== requestRun) return;
    pending.remove();
    await addBot(answer.a, answer.extra, null, run);
    if (run !== requestRun) return;
    conversation.push({ role: 'user', content: answer.q }, { role: 'assistant', content: answer.a });
    conversation.splice(0, Math.max(0, conversation.length - 10));
    log.push({ r: 'b', text: answer.a, kind: answer.extra });
    store();
    setBusy(false);
  }
  // The real Cal.com calendar runs inside a white sheet over the chat: availability and confirmation stay with Cal.
  let bookFailedLoad = false;
  const syncBook = () => {
    book.setAttribute('aria-label', t('book'));
    book.querySelector('.theo-book-back span').textContent = t('bookBack');
    book.querySelector('.theo-book-ext').textContent = t('bookTab');
    bookStatus.textContent = t(bookFailedLoad ? 'bookFailed' : 'bookLoading');
  };
  function openBook() {
    if (!bookStage.querySelector('iframe')) {
      const frame = el('iframe', 'theo-book-frame');
      frame.src = `${calUrl}?embed=true&layout=month_view&theme=light&hideEventTypeDetails=true`;
      frame.title = t('book');
      frame.loading = 'eager';
      frame.addEventListener('load', () => { bookStatus.hidden = true; });
      bookStage.append(frame);
      setTimeout(() => { if (!bookStatus.hidden) { bookFailedLoad = true; syncBook(); } }, 12000);
    }
    syncBook();
    book.hidden = false;
    book.querySelector('.theo-book-back').focus({ preventScroll: true });
  }
  const closeBook = () => { if (book.hidden) return false; book.hidden = true; return true; };
  // Native mini booking in the chat: next 3 days with free slots, pick a time, confirm with name + email.
  const calApi = 'https://api.cal.com/v2';
  const calTarget = { username: 'lio-smeers-uisp1o', eventTypeSlug: 'vrijblijvend-gesprek-met-lio' };
  function buildBooker() {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Europe/Brussels';
    const lang = language();
    const locale = lang === 'en' ? 'en-GB' : 'nl-BE';
    const fmtDay = key => new Intl.DateTimeFormat(locale, { weekday: 'short', day: 'numeric', month: 'short', timeZone: 'UTC' }).format(new Date(`${key}T12:00:00Z`));
    const fmtTime = iso => new Intl.DateTimeFormat(locale, { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: tz }).format(new Date(iso));
    const fmtFull = iso => new Intl.DateTimeFormat(locale, { weekday: 'long', day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit', hour12: false, timeZone: tz }).format(new Date(iso));
    const tx = key => copy[lang][key];
    const box = el('div', 'theo-booker');
    let days = null, failed = false, day = 0, slot = null, view = 'pick', sending = false, error = false, email = '';
    const more = () => { const b = el('button', 'theo-book-more', tx('bookMore')); b.type = 'button'; b.addEventListener('click', openBook); return b; };
    const render = () => {
      const title = el('strong', 'theo-booker-title', tx('bookPick'));
      if (view === 'done') {
        const ok = el('div', 'theo-booker-done');
        ok.innerHTML = '<i><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg></i>';
        const text = el('p', '', `${tx('bookDone')} ${email}`);
        ok.append(text, el('b', '', fmtFull(slot.start)));
        return box.replaceChildren(ok);
      }
      if (view === 'form') {
        const form = el('form', 'theo-booker-form');
        const back = el('button', 'theo-booker-back', `← ${tx('bookChange')}`);
        back.type = 'button';
        back.addEventListener('click', () => { view = 'pick'; error = false; render(); });
        const when = el('b', 'theo-booker-when', fmtFull(slot.start));
        const name = el('input'); name.type = 'text'; name.required = true; name.maxLength = 80; name.autocomplete = 'name'; name.placeholder = tx('bookName'); name.setAttribute('aria-label', tx('bookName'));
        const mail = el('input'); mail.type = 'email'; mail.required = true; mail.maxLength = 120; mail.autocomplete = 'email'; mail.placeholder = tx('bookEmail'); mail.setAttribute('aria-label', tx('bookEmail'));
        const submit = el('button', 'theo-booker-submit', tx('bookConfirm')); submit.type = 'submit'; submit.disabled = sending;
        const note = el('p', 'theo-booker-note', tx('bookNote'));
        form.append(back, when, name, mail, submit);
        if (error) { const e = el('p', 'theo-booker-error', tx('bookError')); e.setAttribute('role', 'alert'); form.append(e, more()); }
        form.append(note);
        form.addEventListener('submit', async event => {
          event.preventDefault();
          if (sending) return;
          sending = true; error = false; submit.disabled = true; submit.textContent = tx('bookSending');
          try {
            const response = await fetch(`${calApi}/bookings`, {
              method: 'POST', headers: { 'Content-Type': 'application/json', 'cal-api-version': '2024-08-13' },
              body: JSON.stringify({ start: new Date(slot.start).toISOString(), attendee: { name: name.value.trim(), email: mail.value.trim(), timeZone: tz, language: lang }, ...calTarget }),
            });
            const result = await response.json();
            if (!response.ok || result.status !== 'success') throw new Error('booking');
            email = mail.value.trim(); view = 'done';
          } catch { error = true; }
          sending = false; render(); scrollEnd();
        });
        box.replaceChildren(form);
        return;
      }
      if (!days) return box.replaceChildren(title, el('p', 'theo-booker-note', tx(failed ? 'bookNone' : 'bookSlots')), ...(failed ? [more()] : []));
      const tabs = el('div', 'theo-booker-days');
      tabs.setAttribute('role', 'tablist');
      days.forEach(([key], index) => {
        const tab = el('button', 'theo-booker-day', fmtDay(key));
        tab.type = 'button'; tab.setAttribute('role', 'tab'); tab.setAttribute('aria-selected', String(index === day));
        tab.addEventListener('click', () => { day = index; render(); });
        tabs.append(tab);
      });
      const grid = el('div', 'theo-booker-times');
      days[day][1].forEach(item => {
        const time = el('button', 'theo-booker-time', fmtTime(item.start));
        time.type = 'button';
        time.addEventListener('click', () => { slot = item; view = 'form'; render(); scrollEnd(); });
        grid.append(time);
      });
      box.replaceChildren(title, tabs, grid, more());
    };
    render();
    const iso = date => date.toISOString().slice(0, 10);
    fetch(`${calApi}/slots?username=${calTarget.username}&eventTypeSlug=${calTarget.eventTypeSlug}&start=${iso(new Date())}&end=${iso(new Date(Date.now() + 14 * 864e5))}&timeZone=${encodeURIComponent(tz)}`, { headers: { 'cal-api-version': '2024-09-04' } })
      .then(response => response.json())
      .then(result => {
        days = Object.entries(result.data || {}).filter(([, list]) => list.length).sort(([a], [b]) => a.localeCompare(b)).slice(0, 3)
          .map(([key, list]) => { const halves = list.filter(item => /:(00|30):/.test(item.start.slice(10))); return [key, halves.length ? halves : list]; });
        if (!days.length) throw new Error('none');
      })
      .catch(() => { days = null; failed = true; })
      .finally(() => { render(); scrollEnd(); });
    return box;
  }
  const cancelHoverReset = () => {
    window.clearTimeout(hoverResetTimer);
    hoverResetTimer = 0;
  };
  const stopVideoPlayback = () => {
    ++playbackRun;
    cancelAnimationFrame(animationFrame);
    animationFrame = 0;
    video.pause();
    video.playbackRate = 1;
  };
  const restoreIdlePose = () => {
    cancelHoverReset();
    if (isOpen || root.classList.contains('is-hovered') || root.classList.contains('is-closing')) return;
    stopVideoPlayback();
    video.currentTime = 0;
    root.classList.remove('is-returning', 'is-settling', 'is-standing-before-drop');
  };
  const playIdleReturnPose = () => {
    const end = video.duration;
    if (reducedMotion.matches || !Number.isFinite(end) || end <= video.currentTime + 0.08) {
      root.classList.remove('is-closing');
      restoreIdlePose();
      return;
    }

    cancelHoverReset();
    const settleStart = Math.max(video.currentTime, end - idleSettleLead);
    let settledIntoCorner = false;
    const run = ++playbackRun;
    cancelAnimationFrame(animationFrame);
    animationFrame = 0;
    video.pause();
    video.playbackRate = settleStartRate;
    root.classList.add('is-settling');

    const settle = () => {
      if (run !== playbackRun) {
        animationFrame = 0;
        return;
      }
      if (isOpen || root.classList.contains('is-hovered')) {
        video.pause();
        video.playbackRate = 1;
        animationFrame = 0;
        root.classList.remove('is-returning', 'is-settling');
        return;
      }
      if (video.currentTime >= end - 0.06 || video.ended) {
        video.pause();
        video.playbackRate = 1;
        video.currentTime = end;
        animationFrame = 0;
        root.classList.remove('is-closing', 'is-returning', 'is-settling');
        return;
      }
      if (!settledIntoCorner && video.currentTime >= settleStart) {
        settledIntoCorner = true;
        root.classList.remove('is-closing');
      }
      const settleProgress = Math.max(0, Math.min(1, (video.currentTime - settleStart) / (end - settleStart)));
      const easedSettleProgress = settleProgress * settleProgress * (3 - (2 * settleProgress));
      video.playbackRate = settleStartRate + ((idleSettleRate - settleStartRate) * easedSettleProgress);
      animationFrame = requestAnimationFrame(settle);
    };

    video.play().then(() => {
      if (run === playbackRun) animationFrame = requestAnimationFrame(settle);
    }).catch(() => {
      if (run !== playbackRun) return;
      stopVideoPlayback();
      video.currentTime = 0;
      root.classList.remove('is-closing', 'is-returning', 'is-settling');
    });
  };
  const finishClosingPose = () => {
    if (!isOpen && !root.classList.contains('is-hovered') && hasLandedAtIdle) playIdleReturnPose();
    else root.classList.remove('is-closing');
  };
  const playHoverPose = () => {
    if (isOpen) return;
    cancelHoverReset();
    const wasMidHoverMotion = video.currentTime > 0.05 && video.currentTime < hoverPoseEnd - 0.06;
    const alreadyHoldingHoverPose = video.paused && video.currentTime >= hoverPoseEnd - 0.06;
    const run = ++playbackRun;
    cancelAnimationFrame(animationFrame);
    animationFrame = 0;
    video.pause();
    if (!wasMidHoverMotion && !alreadyHoldingHoverPose) video.currentTime = 0;
    video.playbackRate = poseRate;

    if (reducedMotion.matches) {
      video.currentTime = hoverPoseEnd;
      video.playbackRate = 1;
      return;
    }
    if (alreadyHoldingHoverPose) return;

    const settle = () => {
      if (run !== playbackRun || isOpen || !root.classList.contains('is-hovered')) {
        animationFrame = 0;
        return;
      }
      if (video.currentTime >= hoverPoseEnd - 0.02 || video.ended) {
        video.pause();
        video.playbackRate = 1;
        animationFrame = 0;
        return;
      }
      animationFrame = requestAnimationFrame(settle);
    };

    video.play().then(() => {
      if (run === playbackRun) animationFrame = requestAnimationFrame(settle);
    }).catch(() => {
      if (run !== playbackRun) return;
      video.pause();
      video.playbackRate = 1;
      video.currentTime = Math.min(hoverPoseEnd, video.duration || hoverPoseEnd);
    });
  };
  const handleIdleLanding = event => {
    if (event.target !== root || event.propertyName !== 'bottom') return;
    if (isOpen || root.classList.contains('is-hovered')) return;
    hasLandedAtIdle = true;
    if (root.classList.contains('is-closing')) finishClosingPose();
    else restoreIdlePose();
  };
  root.addEventListener('transitionend', handleIdleLanding);
  const enterHover = () => {
    cancelHoverReset();
    root.classList.remove('is-returning', 'is-settling', 'is-standing-before-drop');
    if (root.classList.contains('is-hovered')) return;
    hasLandedAtIdle = false;
    root.classList.remove('is-closing');
    root.classList.add('is-hovered');
    playHoverPose();
  };
  const leaveHover = () => {
    if (document.activeElement === trigger || !root.classList.contains('is-hovered')) return;
    root.classList.remove('is-hovered');
    if (isOpen) return;
    hasLandedAtIdle = false;
    root.classList.add('is-returning');
    if (root.classList.contains('is-closing')) return;
    stopVideoPlayback();
    hoverResetTimer = window.setTimeout(restoreIdlePose, 760);
  };
  async function sendQuestion(value) {
    if (isSending) return;
    const question = (value || input.value).trim();
    if (!question || question.length > 500) {
      input.setCustomValidity(t(question.length > 500 ? 'tooLong' : 'empty'));
      input.reportValidity();
      input.setCustomValidity('');
      return;
    }
    const run = ++requestRun;
    addUser(question);
    input.value = '';
    setBusy(true);
    const pending = addTyping();
    const controller = new AbortController();
    activeRequest = controller;
    const timer = setTimeout(() => controller.abort(), 25000);
    const history = conversation.slice(-10);
    while (history.reduce((total, item) => total + item.content.length, question.length) > 5500) history.splice(0, 2);
    try {
      const response = await requestJohn({
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...history, { role: 'user', content: question }], language: language() }),
        signal: controller.signal,
      });
      const result = await response.json();
      if (run !== requestRun) return;
      if (!response.ok) throw new Error(result.error || 'unavailable');
      if (typeof result.answer !== 'string' || !result.answer.trim()) throw new Error('unavailable');
      const href = result.link?.href;
      const safeLink = safeHref(href);
      const isCal = safeLink && (href.startsWith('https://cal.com/') || href === '/contact.html');
      pending.remove();
      await addBot(result.answer, isCal ? 'book' : null, safeLink && !isCal ? result.link : null, run);
      conversation.push({ role: 'user', content: question }, { role: 'assistant', content: result.answer });
      conversation.splice(0, Math.max(0, conversation.length - 10));
      log.push({ r: 'b', text: result.answer, kind: isCal ? 'book' : null, link: safeLink && !isCal ? result.link : null });
      store();
    } catch (error) {
      if (run !== requestRun) return;
      pending.remove();
      const en = language() === 'en';
      const text = error.message === 'rate_limited' || error.message === 'provider_limited'
        ? (en ? 'Lots of questions right now. Please try again in a minute.' : 'Er komen veel vragen binnen. Probeer het over een minuut opnieuw.')
        : error.message === 'ai_not_configured'
        ? (en ? 'My AI connection is not configured yet. You can email Lio in the meantime.' : 'Mijn AI-aansluiting is nog niet ingesteld. Je kunt Lio ondertussen mailen.')
        : (en ? 'I cannot answer right now. Please try again shortly or email Lio.' : 'Ik kan nu even niet antwoorden. Probeer het straks opnieuw of mail Lio.');
      await addBot(text, null, { href: 'mailto:info@bmastudio.be', label: en ? 'Email Lio' : 'Mail Lio' }, run);
      if (!input.value) input.value = question;
    } finally {
      clearTimeout(timer);
      if (run === requestRun) {
        activeRequest = null;
        setBusy(false);
      }
    }
  }

  const playSegment = (from, to, { allowClosed = false, onComplete = () => {} } = {}) => {
    const run = ++playbackRun;
    let completed = false;
    cancelAnimationFrame(animationFrame);
    animationFrame = 0;
    video.pause();
    if (Math.abs(video.currentTime - from) > 0.08) video.currentTime = from;
    video.playbackRate = poseRate;

    const complete = () => {
      if (completed || run !== playbackRun) return;
      completed = true;
      cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      video.pause();
      video.playbackRate = 1;
      video.currentTime = to;
      onComplete();
    };

    const monitor = () => {
      if (run !== playbackRun) return;
      if (!isOpen && !allowClosed) {
        animationFrame = 0;
        return;
      }
      if (video.currentTime >= to - 0.02 || video.ended) {
        complete();
        return;
      }
      animationFrame = requestAnimationFrame(monitor);
    };

    video.play().catch(() => {
      if (run !== playbackRun) return;
      complete();
    });
    animationFrame = requestAnimationFrame(monitor);
  };
  const showLaptop = () => {
    root.classList.remove('is-closing', 'is-returning', 'is-settling', 'is-standing-before-drop');
    if (reducedMotion.matches) {
      cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      video.pause();
      video.playbackRate = 1;
      video.currentTime = openedAt;
      return;
    }
    const from = Math.min(video.currentTime, openedAt);
    playSegment(from, openedAt);
  };
  // Closing by clicking John leaves the pointer on him: stay up in the hover pose instead of dropping.
  const keepHoverIfPointerStays = () => {
    if (isOpen || !trigger.matches(':hover')) return;
    video.currentTime = Math.min(hoverPoseEnd, video.duration || hoverPoseEnd);
    enterHover();
  };
  const hideLaptop = () => {
    stopVideoPlayback();
    root.classList.add('is-returning', 'is-closing', 'is-standing-before-drop');
    hasLandedAtIdle = false;
    const end = video.duration;
    const standAt = Number.isFinite(end) && end > openedAt
      ? Math.max(openedAt, end - idleSettleLead)
      : openedAt + 2.34;
    if (reducedMotion.matches) {
      video.pause();
      video.playbackRate = 1;
      video.currentTime = standAt;
      requestAnimationFrame(() => { root.classList.remove('is-standing-before-drop'); keepHoverIfPointerStays(); });
      return;
    }
    const from = Math.min(video.currentTime, standAt);
    playSegment(from, standAt, {
      allowClosed: true,
      onComplete: () => { root.classList.remove('is-standing-before-drop'); keepHoverIfPointerStays(); },
    });
  };
  // "Hoi, ik ben John." bubble next to the launcher: once per session, after the first close.
  let teaserDelay = 0, teaserHide = 0;
  const hideTeaser = () => { clearTimeout(teaserDelay); clearTimeout(teaserHide); teaser.hidden = true; };
  const showTeaser = () => {
    try { if (sessionStorage.getItem('john-teased')) return; sessionStorage.setItem('john-teased', '1'); } catch { /* private mode: show it anyway */ }
    teaser.hidden = false;
    teaserHide = setTimeout(hideTeaser, 9000);
  };
  const close = () => {
    if (!isOpen) return;
    isOpen = false;
    closeBook();
    teaserDelay = setTimeout(showTeaser, 900);
    root.classList.remove('is-open', 'is-hovered');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('aria-label', t('open'));
    panel.setAttribute('aria-hidden', 'true');
    panel.inert = true;
    hideLaptop();
  };
  // The green dot is only honest if the worker answers and has its AI key.
  const checkStatus = () => fetch(`${apiBase}/api/john-status`).then(r => r.json()).then(r => r.configured, () => false)
    .then(ok => { root.classList.toggle('is-offline', !ok); syncStatus(); });
  const open = () => {
    if (isOpen) return close();
    isOpen = true;
    hideTeaser();
    hasLandedAtIdle = false;
    root.classList.add('is-open');
    trigger.setAttribute('aria-expanded', 'true');
    trigger.setAttribute('aria-label', t('close'));
    panel.setAttribute('aria-hidden', 'false');
    panel.inert = false;
    addGreeting();
    checkStatus();
    scrollEnd();
    if (matchMedia('(pointer: fine)').matches) input.focus({ preventScroll: true });
    showLaptop();
  };

  const refreshLanguage = () => {
    root.lang = language();
    root.setAttribute('aria-label', language() === 'en' ? 'John chat' : 'Chat met John');
    trigger.setAttribute('aria-label', isOpen ? t('close') : t('open'));
    trigger.title = language() === 'en' ? 'Ask John a question' : 'Stel je vraag aan John';
    panel.setAttribute('aria-label', language() === 'en' ? 'Chat with John' : 'Chat met John');
    closeButton.setAttribute('aria-label', t('closeButton'));
    closeButton.title = t('closeButton');
    root.querySelector('label[for="theo-chat-input"]').textContent = t('inputLabel');
    resetButton.setAttribute('aria-label', t('reset'));
    resetButton.title = t('reset');
    input.setAttribute('aria-label', t('inputLabel'));
    input.placeholder = t('placeholder');
    sendButton.setAttribute('aria-label', t('send'));
    sendButton.title = t('send');
    root.querySelector('.theo-chat-note span').textContent = t('disclaimer');
    root.querySelector('.theo-chat-note a').textContent = t('privacy');
    teaser.querySelector('strong').textContent = t('teaserTitle');
    teaser.querySelector('span').textContent = t('teaserText');
    messages.querySelector('.theo-welcome')?.replaceWith(buildWelcome());
    syncBook();
    syncStatus();
    renderChips();
  };

  form.addEventListener('submit', event => { event.preventDefault(); sendQuestion(); });
  input.addEventListener('input', () => { input.setCustomValidity(''); fitComposer(); });
  input.addEventListener('keydown', event => {
    if (event.key !== 'Enter' || event.shiftKey || event.isComposing) return;
    event.preventDefault();
    if (!sendButton.disabled) form.requestSubmit();
  });
  trigger.addEventListener('click', open);
  teaser.addEventListener('click', open);
  trigger.addEventListener('pointerenter', enterHover);
  trigger.addEventListener('pointerleave', leaveHover);
  trigger.addEventListener('focus', enterHover);
  trigger.addEventListener('blur', leaveHover);
  closeButton.addEventListener('click', close);
  book.querySelector('.theo-book-back').addEventListener('click', () => { closeBook(); input.focus({ preventScroll: true }); });
  resetButton.addEventListener('click', () => {
    closeBook();
    ++requestRun;
    activeRequest?.abort();
    activeRequest = null;
    conversation.length = 0;
    log = [];
    store();
    asked = new Set();
    messages.replaceChildren();
    hasGreeted = false;
    input.value = '';
    resetButton.disabled = true;
    addGreeting();
    setBusy(false);
    if (matchMedia('(pointer: fine)').matches) input.focus({ preventScroll: true });
  });
  document.addEventListener('pointerdown', event => {
    if (isOpen && !root.contains(event.target)) close();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && isOpen) {
      if (closeBook()) return;
      close();
      trigger.focus();
    }
  });
  const switchChatLanguage = () => {
    const nextLanguage = language();
    if (nextLanguage !== chatLanguage) {
      // Keep each language's conversation and draft in memory; never rewrite a visitor's words.
      if (isSending && !input.value) input.value = [...messages.querySelectorAll('.theo-message--visitor')].at(-1)?.textContent || '';
      ++requestRun;
      activeRequest?.abort();
      activeRequest = null;
      messages.querySelector('.theo-thinking')?.remove();
      const hasWelcome = !!messages.querySelector('.theo-welcome');
      languageThreads.set(chatLanguage, {
        nodes: hasWelcome ? [] : [...messages.childNodes],
        history: conversation.slice(), log, asked, draft: input.value,
      });
      const saved = languageThreads.get(nextLanguage);
      chatLanguage = nextLanguage;
      messages.replaceChildren(...(saved?.nodes || []));
      conversation.splice(0, conversation.length, ...(saved?.history || []));
      log = saved?.log || [];
      asked = saved?.asked || new Set();
      input.value = saved?.draft || '';
      input.setCustomValidity('');
      hasGreeted = !!saved?.nodes.length;
      store();
      resetButton.disabled = !hasGreeted;
      if (isOpen && !hasGreeted) addGreeting();
      setBusy(false);
    }
    refreshLanguage();
  };
  window.addEventListener('bma-language-change', switchChatLanguage);
  video.addEventListener('loadedmetadata', () => {
    if (!isOpen && video.currentTime < openedAt) video.currentTime = 0;
  }, { once: true });
  fitComposer();
  refreshLanguage();
  try {
    const saved = JSON.parse(sessionStorage.getItem('john-chat') || 'null');
    if (saved?.lang === language() && Array.isArray(saved.log) && saved.log.length) {
      saved.log.slice(-40).forEach(item => {
        if (typeof item?.text !== 'string') return;
        if (item.r === 'u') { messages.append(el('div', 'theo-message theo-message--visitor', item.text)); log.push({ r: 'u', text: item.text }); return; }
        const kind = ['services', 'book'].includes(item.kind) ? item.kind : null;
        const link = kind || !safeHref(item.link?.href) || typeof item.link.label !== 'string' ? null : { href: item.link.href, label: item.link.label };
        addBot(item.text, kind, link, requestRun, true);
        log.push({ r: 'b', text: item.text, kind, link });
      });
      (saved.history || []).forEach(m => { if (['user', 'assistant'].includes(m?.role) && typeof m.content === 'string') conversation.push({ role: m.role, content: m.content }); });
      asked = new Set((saved.asked || []).filter(key => key in copy.nl.answers));
      hasGreeted = true;
      resetButton.disabled = false;
      renderChips();
    }
  } catch { /* corrupt storage: start fresh */ }
})();
