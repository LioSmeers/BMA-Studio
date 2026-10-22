/* The real Cal.com calendar stays responsible for availability and confirmation. */
(() => {
  const container = document.querySelector('#bma-booking-calendar');
  if (!container) return;
  const status = document.querySelector('[data-calendar-status]');
  const mail = document.querySelector('[data-quote-mail]');
  const calLink = 'lio-smeers-uisp1o/vrijblijvend-gesprek-met-lio';
  let failed = false;
  let ready = false;
  status.setAttribute('data-no-translate', '');
  const english = () => document.documentElement.lang.startsWith('en');
  const updateLanguage = () => {
    status.textContent = english()
      ? (failed ? 'The calendar could not load. You can open it using the link below.' : 'Loading calendar…')
      : (failed ? 'De kalender kon niet laden. Je kunt hem openen via de link hieronder.' : 'Kalender wordt geladen…');
    const subject = english() ? 'Quote request — BMA Studio' : 'Offerteaanvraag — BMA Studio';
    const body = english()
      ? 'Hi Lio,\n\nI would like a quote for a project.\n\nMy business:\nWhat I would like to make:\nPreferred timing:\n\nKind regards,\n'
      : 'Dag Lio,\n\nIk ontvang graag een offerte voor mijn project.\n\nMijn bedrijf:\nWat ik wil laten maken:\nGewenste timing:\n\nGroeten,\n';
    mail.href = `mailto:info@bmastudio.be?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const frame = container.querySelector('iframe');
    if (frame) {
      frame.setAttribute('data-no-translate', '');
      frame.title = english() ? 'Choose an appointment with BMA Studio' : 'Kies een afspraak met BMA Studio';
    }
  };
  updateLanguage();
  window.addEventListener('bma-language-change', updateLanguage);
  const observer = new MutationObserver(updateLanguage);
  observer.observe(container, { childList: true, subtree: true });

  // Cal.com's supported queue lets the small loader and the page load independently.
  if (!window.Cal) {
    const enqueue = (api, args) => api.q.push(args);
    const cal = function (...args) {
      if (args[0] === 'init') {
        const namespace = args[1];
        if (typeof namespace === 'string') {
          const api = function (...commands) { enqueue(api, commands); };
          api.q = [];
          cal.ns[namespace] = cal.ns[namespace] || api;
          enqueue(cal.ns[namespace], args);
          enqueue(cal, ['initNamespace', namespace]);
        } else enqueue(cal, args);
        return;
      }
      enqueue(cal, args);
    };
    cal.q = [];
    cal.ns = {};
    cal.loaded = true;
    window.Cal = cal;
    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    script.onerror = () => { failed = true; updateLanguage(); };
    document.head.append(script);
  }
  window.Cal('init', 'bma-booking', { origin: 'https://cal.com' });
  const calendar = window.Cal.ns['bma-booking'];
  calendar('on', { action: 'linkReady', callback: () => { ready = true; status.hidden = true; updateLanguage(); } });
  calendar('on', { action: 'linkFailed', callback: () => { failed = true; status.hidden = false; updateLanguage(); } });
  calendar('inline', {
    elementOrSelector: '#bma-booking-calendar',
    calLink,
    config: { layout: 'month_view', theme: 'light', useSlotsViewOnSmallScreen: 'true' },
  });
  calendar('ui', {
    theme: 'light', layout: 'month_view', hideEventTypeDetails: true,
    cssVarsPerTheme: {
      light: {
        'cal-brand': '#315f9a',
        'cal-brand-emphasis': '#244b7d',
        'cal-brand-accent': '#ffffff',
        'cal-brand-subtle': '#c1d4ed',
        'cal-bg': '#f5f8fd',
        'cal-bg-subtle': '#e7effa',
        'cal-bg-emphasis': '#d5e3f5',
        'cal-bg-muted': '#eef4fc',
        'cal-bg-inverted': '#315f9a',
        'cal-text': '#213852',
        'cal-text-emphasis': '#142c49',
        'cal-text-subtle': '#526174',
        'cal-border': '#c1d4ed',
        'cal-border-subtle': '#d5e3f5',
        'cal-border-emphasis': '#91afd3',
      },
      dark: { 'cal-brand': '#315f9a' },
    },
  });
  // Leave the direct-calendar and email alternatives usable even if the provider is blocked.
  window.setTimeout(() => {
    if (!ready) { failed = true; updateLanguage(); }
  }, 20000);
})();
