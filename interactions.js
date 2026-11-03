/* Local pointer feedback: no document-wide geometry scan on every mouse move. */
(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const fine = matchMedia('(min-width: 768px) and (hover: hover) and (pointer: fine)');
  document.querySelectorAll('.mi-faq').forEach((details, index) => {
    const summary = details.querySelector('summary');
    const answer = details.querySelector('.mi-answer');
    const button = document.createElement('button');
    const box = document.createElement('div');
    button.className = 'mi-question';
    button.type = 'button';
    button.append(...summary.childNodes);
    button.id = `mi-q-${index}`;
    answer.id = `mi-a-${index}`;
    button.setAttribute('aria-controls', answer.id);
    answer.setAttribute('aria-labelledby', button.id);
    let open = details.open;
    box.className = `${details.className} is-enhanced`;
    box.append(button, answer);
    details.replaceWith(box);
    const update = () => {
      button.setAttribute('aria-expanded', String(open));
      box.classList.toggle('is-open', open);
      answer.inert = !open;
    };
    update();
    button.addEventListener('click', () => { open = !open; update(); });
  });
  // Only elements under the pointer need resetting, so scrolling does no work for the rest.
  const resetters = new Set();
  const targets = new Set(document.querySelectorAll('[data-spotlight], .primary-button, .pill-button, [data-magnetic]'));
  targets.forEach(element => {
    const spotlight = element.hasAttribute('data-spotlight');
    if (!spotlight) element.setAttribute('data-magnetic', '');
    let bounds, frame = 0, point;
    const reset = () => {
      resetters.delete(reset);
      cancelAnimationFrame(frame);
      frame = 0;
      bounds = null;
      element.classList.remove('mi-lit');
      element.style.removeProperty('--mag-x');
      element.style.removeProperty('--mag-y');
    };
    element.addEventListener('pointerenter', event => {
      if (!fine.matches || reduced.matches || event.pointerType !== 'mouse') return;
      resetters.add(reset);
      bounds = element.getBoundingClientRect();
      if (spotlight) element.classList.add('mi-lit');
    });
    element.addEventListener('pointermove', event => {
      if (!bounds || !fine.matches || reduced.matches) return;
      point = { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (!bounds) return;
        if (spotlight) {
          element.style.setProperty('--mouse-x', `${point.x}px`);
          element.style.setProperty('--mouse-y', `${point.y}px`);
        } else {
          element.style.setProperty('--mag-x', `${Math.max(-4, Math.min(4, (point.x - bounds.width / 2) * .04))}px`);
          element.style.setProperty('--mag-y', `${Math.max(-4, Math.min(4, (point.y - bounds.height / 2) * .04))}px`);
        }
      });
    }, { passive: true });
    element.addEventListener('pointerleave', reset);
  });
  const resetAll = () => { if (resetters.size) [...resetters].forEach(reset => reset()); };
  addEventListener('blur', resetAll);
  addEventListener('scroll', resetAll, { passive: true });
  addEventListener('resize', resetAll, { passive: true });
  reduced.addEventListener('change', resetAll);
  fine.addEventListener('change', resetAll);
  // Background loops only play while on screen; reduced motion keeps the poster still.
  const blobs = document.querySelectorAll('[data-blob-video]');
  if (blobs.length) {
    const visible = new Set();
    const sync = video => {
      if (visible.has(video) && !reduced.matches) video.play().catch(() => {});
      else video.pause();
    };
    const observer = new IntersectionObserver(entries => entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) visible.add(target); else visible.delete(target);
      sync(target);
    }), { rootMargin: '200px 0px' });
    blobs.forEach(video => observer.observe(video));
    reduced.addEventListener('change', () => blobs.forEach(sync));
    blobs.forEach(blobInk);
  }

  // Redraws [data-blob-ink] text in white, clipped to the blobs' alpha, on a canvas above the text.
  function blobInk(video) {
    const box = video.parentElement;
    const targets = box.querySelectorAll('[data-blob-ink]');
    if (!targets.length) return;
    const canvas = document.createElement('canvas');
    canvas.className = 'blob-ink';
    canvas.setAttribute('aria-hidden', 'true');
    box.append(canvas);
    const ctx = canvas.getContext('2d');
    // Glyph mask, redrawn only on layout changes.
    const mask = document.createElement('canvas');
    const mctx = mask.getContext('2d');
    let width = 0, height = 0;
    const layout = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      const origin = box.getBoundingClientRect();
      width = origin.width; height = origin.height;
      canvas.width = mask.width = Math.round(width * dpr);
      canvas.height = mask.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      mctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      mctx.textBaseline = 'alphabetic';
      targets.forEach(element => {
        const style = getComputedStyle(element);
        const font = `${style.fontStyle} ${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
        const spacing = style.letterSpacing === 'normal' ? '0px' : style.letterSpacing;
        const upper = style.textTransform === 'uppercase';
        const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
        const range = document.createRange();
        for (let node; (node = walker.nextNode());) {
          for (const match of node.data.matchAll(/\S+/g)) {
            range.setStart(node, match.index);
            range.setEnd(node, match.index + match[0].length);
            const rect = range.getBoundingClientRect();
            if (!rect.width) continue;
            const text = upper ? match[0].toUpperCase() : match[0];
            mctx.font = font;
            mctx.letterSpacing = spacing;
            const m = mctx.measureText(text);
            const ascent = m.fontBoundingBoxAscent, descent = m.fontBoundingBoxDescent;
            mctx.fillText(text, rect.left - origin.left, rect.top - origin.top + (rect.height - ascent - descent) / 2 + ascent);
          }
        }
      });
      draw();
    };
    const draw = () => {
      ctx.globalCompositeOperation = 'source-over';
      ctx.clearRect(0, 0, width, height);
      if (!video.videoWidth) return;
      // Same crop as object-fit: cover.
      const scale = Math.max(width / video.videoWidth, height / video.videoHeight);
      const w = video.videoWidth * scale, h = video.videoHeight * scale;
      ctx.drawImage(video, (width - w) / 2, (height - h) / 2, w, h);
      // Keep only blob pixels that sit under glyphs, then paint them white.
      ctx.globalCompositeOperation = 'destination-in';
      ctx.drawImage(mask, 0, 0, width, height);
      ctx.globalCompositeOperation = 'source-in';
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, width, height);
    };
    const frame = video.requestVideoFrameCallback
      ? () => video.requestVideoFrameCallback(() => { draw(); frame(); })
      : () => requestAnimationFrame(() => { if (!video.paused) draw(); frame(); });
    new ResizeObserver(layout).observe(box);
    new MutationObserver(layout).observe(box, { subtree: true, childList: true, characterData: true });
    document.fonts?.ready.then(layout);
    layout();
    frame();
  }
})();
