# BMA micro-interactions

Load `interactions.css` after the main stylesheet and `interactions.js` with `defer`.
The script is under 3,000 bytes uncompressed and has no dependencies.

## FAQ markup

```html
<details class="mi-faq">
  <summary>Kan ik eerst gratis advies krijgen?</summary>
  <div class="mi-answer">
    <div class="mi-answer-inner">
      <p>Vraag vrijblijvend een eerste prototype aan.</p>
      <a class="secondary-button" data-magnetic href="./contact.html?pakket=prototype">
        Gratis prototype aanvragen
      </a>
    </div>
  </div>
</details>
```

Without JavaScript this remains a native disclosure. Enhancement replaces it with
an accessible button and grid panel, allowing closing transitions as well as
opening transitions. Closed answers are inert. Enter and Space work natively.
Text enters after 70ms; a separate link/button enters after 140ms. Package details and terms use the same disclosure component, including a growing accent line, blue icon state and staggered list items (100–190ms).

## Portfolio card markup

```html
<article class="card portfolio-card" data-spotlight>
  <h3>Thor Smeers</h3>
  <p>Een bedrijfswebsite voor vastgoedfotografie.</p>
  <a href="./project-thor-smeers.html">Bekijk het project</a>
</article>
```

A masked radial gradient lights only the border and does not intercept clicks.
Pointer effects run only with a fine pointer and hover, at most once per frame.

## Stats and CTA

```html
<span data-count-to="10" data-count-suffix="+" data-no-translate>10+</span>
<span data-count-to="100" data-count-suffix="%" data-no-translate>100%</span>
<span data-count-to="3" data-count-start="2" data-count-prefix="2–" data-no-translate>2–3</span>
<a class="primary-button" data-magnetic href="./contact.html?pakket=prototype">
  Gratis prototype aanvragen
</a>
```

Counters run once on intersection with cubic ease-out. Final values stay in the
HTML for crawlers and no-JavaScript users. Magnetic CTAs use a 30px proximity
radius and a maximum 6px offset, composed with existing transforms through the
individual CSS translate property. Reduced-motion disables decorative motion.

Timing is controlled through `--mi-duration`, `--mi-spring`, and `--mi-ease`.
Grid height animation requires layout; a universal 60fps guarantee is not implied.

## Site-wide consistency

Shared fast (180ms), medium (320ms) and disclosure (520ms) timings also drive
navigation, button feedback, card hover and form focus. Pricing and language
selectors use the same sliding pill. Pricing changes use cancellable Web
Animations in `updateVisibilitySprintCard` so price, benefits and CTA remain
synchronized even after rapid changes; reduced-motion changes are immediate.
The older global pressure/tilt and cursor-glow initializers are disabled to avoid
stacking competing movement on interactive components.

Validation: all 14 public pages checked at 390px for horizontal overflow and
shared motion asset loading. Pricing changes verified both ways, including CTA
URL correctness. Links/assets, JSON-LD, JavaScript syntax and whitespace checked.
