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
  const playHomeIntro = ['/', '/index.html'].includes(location.pathname) && introTarget && !reducedMotion.matches;
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
        <img class="theo-john-avatar" src="/assets/john/john-avatar.jpg" width="44" height="44" alt="" aria-hidden="true"><span class="theo-panel-heading"><strong class="theo-panel-title">Chat met John</strong><small class="theo-panel-subtitle">Vragen over BMA Studio</small></span>
        <button class="theo-panel-reset" type="button" aria-label="Nieuw gesprek" title="Nieuw gesprek" disabled><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 7v5h-5M20 12a8 8 0 1 0-2.3 5.7M20 7v5"/></svg></button>
        <button class="theo-panel-close" type="button" aria-label="Sluit de chat" title="Sluiten">&times;</button>
      </div>
      <div class="theo-messages" role="log" aria-live="polite" aria-relevant="additions"></div>
      <form class="theo-chat-form">
        <label class="theo-sr-only" for="theo-chat-input">Bericht aan John</label>
        <textarea class="theo-chat-input" id="theo-chat-input" name="question" rows="1" maxlength="500" autocomplete="off" placeholder="Vraag John…" required></textarea>
        <button class="theo-chat-send" type="submit" aria-label="Verstuur je vraag" title="Verstuur" disabled>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5m-7 7 7-7 7 7" /></svg>
        </button>
      </form>
    </aside>`;
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
  const segmentSeconds = 4;
  const openedAt = segmentSeconds;
  const hoverPoseEnd = 1.65;
  const idleSettleLead = 1.7;
  const idleSettleRate = 0.9;
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

  if (playHomeIntro) {
    // A phone's browser bars or delayed layout can put the CTA below the initial viewport.
    // Start when the button is actually visible, instead of silently skipping the jump.
    if (matchMedia('(max-width: 767px)').matches && 'IntersectionObserver' in window) {
      root.classList.remove('is-intro-waiting');
      root.removeAttribute('aria-hidden');
      root.inert = false;
      const introVisibility = new IntersectionObserver(entries => {
        if (!entries.some(entry => entry.isIntersecting) || document.hidden) return;
        introVisibility.disconnect();
        root.classList.add('is-intro-waiting');
        root.setAttribute('aria-hidden', 'true');
        root.inert = true;
        startHomeIntro();
      }, { threshold: .2 });
      introVisibility.observe(introTarget);
    } else startHomeIntro();
  }

  const language = () => document.documentElement.lang.toLowerCase().startsWith('en') ? 'en' : 'nl';
  const copy = {
    nl: {
      open: 'Open de chat met John', close: 'Sluit de chat met John',
      heading: 'John', subtitle: 'Je BMA Studio-assistent',
      reset: 'Nieuw gesprek',
      closeButton: 'Sluit de chat', inputLabel: 'Bericht aan John', placeholder: 'Vraag John…',
      send: 'Verstuur je vraag',
      greeting: 'Aangenaam, ik ben John. Wat wil je weten over websites, apps of AI-assistenten?',
      welcomeTitle: 'Waar kan ik je mee helpen?',
      welcomeIntro: 'Stel je vraag over websites, apps of AI-assistenten.',
      suggestionsIntro: 'Voorbeeldvragen',
      services: 'BMA Studio maakt websites, webapps, AI-assistenten en automatisering. Bekijk de diensten op de dienstenpagina.',
      price: 'De prijs hangt af van wat je nodig hebt. Bespreek je project met Lio voor een voorstel op maat.',
      contact: 'Je kan mailen naar info@bmastudio.be, bellen naar +32 460 97 37 36 of een vrijblijvend gesprek plannen via de contactpagina.',
      work: 'Je kan voorbeelden van ons werk bekijken op de portfoliopagina. Daar vind je ook links naar de websites van klanten.',
      process: 'We bespreken eerst wat je nodig hebt en leggen daarna de inhoud, timing en prijs vast. Tijdens het project heb je rechtstreeks contact met Lio.',
      region: 'BMA Studio is gevestigd in Riemst en werkt voor bedrijven in België. Neem gerust contact op om je project te bespreken.',
      fallback: 'Daar heb ik geen zeker antwoord op. Mail je vraag naar info@bmastudio.be; dan kan Lio je verder helpen.',
      servicesLink: 'Bekijk de diensten', priceLink: 'Bespreek je project', contactLink: 'Naar de contactpagina', workLink: 'Bekijk het portfolio',
      suggestions: ['Welke diensten biedt BMA?', 'Wat kost een website?'],
      thinking: 'John denkt na',
      tooLong: 'Gebruik maximaal 500 tekens.',
      empty: 'Typ eerst je vraag.'
    },
    en: {
      open: 'Open the chat with John', close: 'Close the chat with John',
      heading: 'John', subtitle: 'Your BMA Studio assistant',
      reset: 'New conversation',
      closeButton: 'Close the chat', inputLabel: 'Message John', placeholder: 'Ask John…',
      send: 'Send your question',
      greeting: 'Hello, I’m John. What would you like to know about websites, apps or AI assistants?',
      welcomeTitle: 'How can I help you?',
      welcomeIntro: 'Ask me about websites, apps or AI assistants.',
      suggestionsIntro: 'Suggested questions',
      services: 'BMA Studio builds websites, web apps, AI assistants and automation. Explore the services on the services page.',
      price: 'Pricing depends on what you need. Discuss your project with Lio for a tailored proposal.',
      contact: 'You can email info@bmastudio.be, call +32 460 97 37 36 or arrange a no-obligation conversation through the contact page.',
      work: 'You can see examples of our work on the portfolio page, including links to client websites.',
      process: 'We first discuss what you need, then agree on the scope, timing and price. You’ll work directly with Lio throughout the project.',
      region: 'BMA Studio is based in Riemst and works with businesses across Belgium. Feel free to get in touch about your project.',
      fallback: 'I don’t have a reliable answer for that. Email your question to info@bmastudio.be and Lio can help you further.',
      servicesLink: 'View services', priceLink: 'Discuss your project', contactLink: 'Open the contact page', workLink: 'View the portfolio',
      suggestions: ['What services does BMA offer?', 'How much does a website cost?'],
      thinking: 'John is thinking',
      tooLong: 'Use no more than 500 characters.',
      empty: 'Type your question first.'
    }
  };
  let disposeWelcomeOrb = null;
  let isSending = false;
  let requestRun = 0;
  let activeRequest = null;
  const conversation = [];
  const languageThreads = new Map();
  let chatLanguage = language();
  // John runs on Cloudflare, independently of the visitor's or developer's laptop.
  const apiBase = 'https://bma-john.sneeuwpio.workers.dev';
  const requestJohn = options => fetch(`${apiBase}/api/john`, options);
  const t = key => copy[language()][key];
  const fitComposer = () => {
    input.style.height = 'auto';
    const contentHeight = input.scrollHeight;
    const maxHeight = 112;
    input.style.height = `${Math.min(contentHeight, maxHeight)}px`;
    input.style.overflowY = contentHeight > maxHeight ? 'auto' : 'hidden';
    sendButton.disabled = isSending || !input.value.trim();
  };

  const addMessage = (text, sender, link) => {
    const message = document.createElement('div');
    message.className = `theo-message theo-message--${sender}`;
    const content = document.createElement('p');
    content.textContent = text;
    message.append(content);
    if (link && link.href !== '/contact.html' && !link.href.startsWith('https://cal.com/')) {
      const action = document.createElement('a');
      action.href = link.href;
      action.textContent = link.label;
      message.append(action);
    }
    const author = document.createElement('span');
    author.className = 'theo-message-author';
    author.textContent = sender === 'visitor' ? (language() === 'en' ? 'You' : 'Jij') : 'John';
    message.prepend(author);
    if (sender === 'theo') {
      const portrait = document.createElement('img');
      portrait.className = 'theo-message-avatar';
      portrait.src = '/assets/john/john-avatar.jpg';
      portrait.alt = '';
      portrait.width = portrait.height = 26;
      portrait.setAttribute('aria-hidden', 'true');
      message.prepend(portrait);
    }
    messages.append(message);
    messages.scrollTop = messages.scrollHeight;
  };
  const addGreeting = () => {
    if (hasGreeted) return;
    hasGreeted = true;
    const welcome = document.createElement('div');
    welcome.className = 'theo-welcome';
    welcome.innerHTML = '<div class="theo-orb" aria-hidden="true"><canvas></canvas></div><h2 class="theo-welcome-title"></h2><p class="theo-welcome-intro"></p>';
    welcome.querySelector('.theo-welcome-title').textContent = t('welcomeTitle');
    welcome.querySelector('.theo-welcome-intro').textContent = t('welcomeIntro');
    messages.classList.add('has-welcome');
    messages.append(welcome);
    import('/john-mist.js?v=20261022-mobile-alpha').then(({ mountJohnMist }) => {
      if (!welcome.isConnected) return;
      disposeWelcomeOrb = mountJohnMist(welcome.querySelector('canvas'), panel);
    }).catch(() => {});
    const suggestions = document.createElement('div');
    suggestions.className = 'theo-suggestions';
    suggestions.setAttribute('role', 'group');
    suggestions.setAttribute('aria-label', t('suggestionsIntro'));
    t('suggestions').forEach(label => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'theo-suggestion';
      button.textContent = label;
      button.addEventListener('click', () => sendQuestion(button.textContent));
      suggestions.append(button);
    });
    welcome.append(suggestions);
  };
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
    video.playbackRate = 2.2;
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
      video.playbackRate = 2.2 + ((idleSettleRate - 2.2) * easedSettleProgress);
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
    video.playbackRate = 4;

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
    disposeWelcomeOrb?.();
    disposeWelcomeOrb = null;
    messages.querySelector('.theo-welcome')?.remove();
    messages.classList.remove('has-welcome');
    if (!messages.querySelector('.theo-chat-date')) {
      const date = document.createElement('div');
      date.className = 'theo-chat-date';
      date.textContent = new Intl.DateTimeFormat(language() === 'en' ? 'en-GB' : 'nl-BE', { day: 'numeric', month: 'long' }).format(new Date());
      messages.append(date);
    }
    resetButton.disabled = false;
    addMessage(question, 'visitor');
    input.value = '';
    isSending = true;
    fitComposer();
    const pending = document.createElement('div');
    pending.className = 'theo-message theo-message--theo theo-thinking';
    const thinkingLabel = document.createElement('span');
    thinkingLabel.textContent = t('thinking');
    const thinkingBars = document.createElement('span');
    thinkingBars.className = 'theo-thinking-bars';
    thinkingBars.setAttribute('aria-hidden', 'true');
    thinkingBars.innerHTML = '<i></i><i></i><i></i><i></i>';
    pending.append(thinkingBars, thinkingLabel);
    form.setAttribute('aria-busy', 'true');
    messages.append(pending);
    messages.scrollTop = messages.scrollHeight;
    const run = ++requestRun;
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
      const safeLink = typeof href === 'string' && (href.startsWith('/') && !href.startsWith('//') || href.startsWith('https://cal.com/lio-smeers-uisp1o/') || href === 'mailto:info@bmastudio.be' || href === 'tel:+32460973736');
      pending.remove();
      addMessage(result.answer, 'theo', safeLink ? result.link : null);
      conversation.push({ role: 'user', content: question }, { role: 'assistant', content: result.answer });
      conversation.splice(0, Math.max(0, conversation.length - 10));
    } catch (error) {
      if (run !== requestRun) return;
      pending.remove();
      const en = language() === 'en';
      const text = error.message === 'ai_not_configured'
        ? (en ? 'My AI connection is not configured yet. You can email Lio in the meantime.' : 'Mijn AI-aansluiting is nog niet ingesteld. Je kunt Lio ondertussen mailen.')
        : (en ? 'I cannot answer right now. Please try again shortly or email Lio.' : 'Ik kan nu even niet antwoorden. Probeer het straks opnieuw of mail Lio.');
      addMessage(text, 'theo', { href: 'mailto:info@bmastudio.be', label: en ? 'Email Lio' : 'Mail Lio' });
      if (!input.value) input.value = question;
    } finally {
      clearTimeout(timer);
      if (run === requestRun) {
        activeRequest = null;
        isSending = false;
        form.removeAttribute('aria-busy');
        fitComposer();
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
    video.playbackRate = 4;

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
      requestAnimationFrame(() => root.classList.remove('is-standing-before-drop'));
      return;
    }
    const from = Math.min(video.currentTime, standAt);
    playSegment(from, standAt, {
      allowClosed: true,
      onComplete: () => root.classList.remove('is-standing-before-drop'),
    });
  };
  const close = () => {
    if (!isOpen) return;
    isOpen = false;
    root.classList.remove('is-open', 'is-hovered');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('aria-label', t('open'));
    panel.setAttribute('aria-hidden', 'true');
    panel.inert = true;
    hideLaptop();
  };
  const open = () => {
    if (isOpen) return close();
    isOpen = true;
    hasLandedAtIdle = false;
    root.classList.add('is-open');
    trigger.setAttribute('aria-expanded', 'true');
    trigger.setAttribute('aria-label', t('close'));
    panel.setAttribute('aria-hidden', 'false');
    panel.inert = false;
    addGreeting();
    if (matchMedia('(pointer: fine)').matches) input.focus({ preventScroll: true });
    showLaptop();
  };

  const refreshLanguage = () => {
    root.lang = language();
    root.setAttribute('aria-label', language() === 'en' ? 'John chat' : 'Chat met John');
    trigger.setAttribute('aria-label', isOpen ? t('close') : t('open'));
    trigger.title = language() === 'en' ? 'Ask John a question' : 'Stel je vraag aan John';
    panel.setAttribute('aria-label', language() === 'en' ? 'Chat with John' : 'Chat met John');
    root.querySelector('.theo-panel-title').textContent = t('heading');
    root.querySelector('.theo-panel-subtitle').textContent = t('subtitle');
    closeButton.setAttribute('aria-label', t('closeButton'));
    closeButton.title = t('closeButton');
    root.querySelector('label[for="theo-chat-input"]').textContent = t('inputLabel');
    resetButton.setAttribute('aria-label', t('reset'));
    resetButton.title = t('reset');
    input.setAttribute('aria-label', t('inputLabel'));
    input.placeholder = t('placeholder');
    root.querySelector('.theo-chat-send').setAttribute('aria-label', t('send'));
    sendButton.title = t('send');
    const welcome = messages.querySelector('.theo-welcome');
    if (welcome) {
      welcome.querySelector('.theo-welcome-title').textContent = t('welcomeTitle');
      welcome.querySelector('.theo-welcome-intro').textContent = t('welcomeIntro');
      welcome.querySelector('.theo-suggestions').setAttribute('aria-label', t('suggestionsIntro'));
      welcome.querySelectorAll('.theo-suggestion').forEach((button, index) => { button.textContent = t('suggestions')[index]; });
    }
  };

  form.addEventListener('submit', event => { event.preventDefault(); sendQuestion(); });
  input.addEventListener('input', () => { input.setCustomValidity(''); fitComposer(); });
  input.addEventListener('keydown', event => {
    if (event.key !== 'Enter' || event.shiftKey || event.isComposing) return;
    event.preventDefault();
    if (!sendButton.disabled) form.requestSubmit();
  });
  trigger.addEventListener('click', open);
  trigger.addEventListener('pointerenter', enterHover);
  trigger.addEventListener('pointerleave', leaveHover);
  trigger.addEventListener('focus', enterHover);
  trigger.addEventListener('blur', leaveHover);
  closeButton.addEventListener('click', close);
  resetButton.addEventListener('click', () => {
    ++requestRun;
    activeRequest?.abort();
    activeRequest = null;
    isSending = false;
    conversation.length = 0;
    disposeWelcomeOrb?.();
    disposeWelcomeOrb = null;
    messages.replaceChildren();
    hasGreeted = false;
    input.value = '';
    form.removeAttribute('aria-busy');
    resetButton.disabled = true;
    addGreeting();
    fitComposer();
    if (matchMedia('(pointer: fine)').matches) input.focus({ preventScroll: true });
  });
  document.addEventListener('pointerdown', event => {
    if (isOpen && !root.contains(event.target)) close();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && isOpen) {
      close();
      trigger.focus();
    }
  });
  const switchChatLanguage = () => {
    const nextLanguage = language();
    if (nextLanguage !== chatLanguage) {
      // Keep each language's conversation and draft in memory; never rewrite a visitor's words.
      if (isSending && !input.value) input.value = [...messages.querySelectorAll('.theo-message--visitor p')].at(-1)?.textContent || '';
      ++requestRun;
      activeRequest?.abort();
      activeRequest = null;
      isSending = false;
      messages.querySelector('.theo-thinking')?.remove();
      disposeWelcomeOrb?.();
      disposeWelcomeOrb = null;
      const hasWelcome = !!messages.querySelector('.theo-welcome');
      languageThreads.set(chatLanguage, {
        nodes: hasWelcome ? [] : [...messages.childNodes],
        history: conversation.slice(), draft: input.value,
      });
      const saved = languageThreads.get(nextLanguage);
      chatLanguage = nextLanguage;
      messages.replaceChildren(...(saved?.nodes || []));
      messages.classList.remove('has-welcome');
      conversation.splice(0, conversation.length, ...(saved?.history || []));
      input.value = saved?.draft || '';
      input.setCustomValidity('');
      form.removeAttribute('aria-busy');
      hasGreeted = !!saved?.nodes.length;
      resetButton.disabled = !hasGreeted;
      if (isOpen && !hasGreeted) addGreeting();
      fitComposer();
    }
    refreshLanguage();
  };
  window.addEventListener('bma-language-change', switchChatLanguage);
  video.addEventListener('loadedmetadata', () => {
    if (!isOpen && video.currentTime < openedAt) video.currentTime = 0;
  }, { once: true });
  fitComposer();
  refreshLanguage();
})();
