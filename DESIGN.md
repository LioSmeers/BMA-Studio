---
name: BMA Studio
description: Established pale blue studio identity with clear editorial typography and direct actions.
colors:
  accent: "#315f9a"
  background: "#f5f8fc"
  surface: "#ffffff"
  surface-soft: "#eaf1f9"
  ink: "#0b111c"
  muted: "#5d6a7c"
  border: "#d7e2f0"
  accent-soft: "#e3edf9"
typography:
  display:
    fontFamily: "Sora, ui-sans-serif, system-ui"
    fontSize: "clamp(2.7rem, 4.3vw, 3.9rem)"
    fontWeight: 750
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    lineHeight: 1.7
  navigation:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.94rem"
    fontWeight: 700
  action:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 800
    lineHeight: 1
rounded:
  card: "0.95rem"
  button: "0.85rem"
  pill: "999px"
  field: "1rem"
  calendar: "16px"
spacing:
  section: "clamp(4rem, 8vw, 7rem)"
  button-block: "0.96rem"
  button-inline: "1.25rem"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.surface}"
    rounded: "{rounded.button}"
    padding: "0.96rem 1.25rem"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.button}"
    padding: "0.96rem 1.25rem"
  field:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "0.95rem 1rem"
  calendar:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.calendar}"
    padding: "25px 24px 20px"
---

# Design System: BMA Studio

## Overview

**Creative North Star: "Established BMA studio identity"**

The established BMA identity uses pale blue space, dark ink and a restrained blue accent. Sora supplies the headings; Manrope supplies reading text, controls and selected compact titles. Open editorial arrangements sit alongside contained functional surfaces.

This is a source extraction of the incumbent system and its About/Contact extension on 22 October 2026, not a replacement identity. Sources: `style.css`, `services-story.css`, `portfolio-story.css`, `studio-pages.css`, `theo.css`, `john-mist.js`, `theo.js`, `booking.js`, `over-ons.html` and `contact.html`. This documentation pass did not inspect rendered output or operate a browser; screenshots in `.impeccable/review/studio-20261022/` belong to the separate finish review.

**Key Characteristics:**

- Pale blue continuity and generous spacing.
- Confident headings with readable supporting copy.
- Blue actions and quiet borders.
- Purposeful motion with reduced-motion handling.

## Colors

### Primary

Studio blue identifies actionable controls, linked service names and directional marks. The root accent-soft color supports quiet blue emphasis.

### Neutral

The pale background provides continuity; white surfaces hold functional content. Ink is reserved for strong reading hierarchy, muted text for support, and the border color for separation. The root soft surface supports fields. About's process band uses the local variant `#eaf0f8`; Contact supporting copy uses `#526174`. These are observed local values, not new global palette replacements. Existing dark-theme overrides in `style.css` remain a separate incumbent context.

## Typography

**Display Font:** Sora, with system fallbacks. **Body Font:** Manrope, with system fallbacks.

The frontmatter display role records the desktop Portfolio/About title treatment. Services shares its size, weight and line height but uses slightly tighter tracking (`-0.045em`). All retain balanced wrapping. The About title uses a 28-character maximum width; the booking title is narrower (12 characters) with a slightly looser line height (1.04).

About secondary headings use `clamp(1.8rem,3vw,2.65rem)`, line height 1.16 and tracking `-0.035em`. Linked Build/Maintain/Attract titles use Manrope (750). Body text uses generous line spacing; the About hero introduction is `clamp(1.05rem,1.45vw,1.18rem)` with a 43rem maximum width. Contact's calendar heading and email heading also deliberately use Manrope.

The declared heading weight is 750; the current Google Fonts request loads discrete Sora weights 500–800. Preserve the source declaration without claiming that every browser supplies an exact 750 face.

## Layout

The shared container is capped at 1180px and otherwise uses viewport width minus 2rem. Services, Portfolio and About share a desktop title region with minimum height `min(78svh,54rem)` and vertical padding `clamp(8rem,14vh,11rem)` / `clamp(4rem,8vw,6.5rem)`.

About uses an introduction/service split (0.9fr / 1.1fr), three open process columns and a final invitation. Contact uses a 0.68fr / 1.32fr grid, narrowing that ratio at 1000px: introduction and prominent email panel form the first row; the calendar occupies the second-row right column, with John against its left edge. At 767px these layouts become single columns; the pointing John is reduced to 88px beside the calendar heading. The email alternative, with a primary mail button and visible address, precedes the calendar in reading order.

Mobile titles are related rather than identical: About uses `clamp(2.5rem,10vw,3.25rem)`; Portfolio uses `clamp(2.55rem,9.5vw,3.25rem)`. About also removes the hero minimum height. These are current implementation differences, not an assertion of pixel equivalence.

## Elevation & Depth

Open rows and tonal sections carry most of the editorial structure. Functional white surfaces use soft ambient shadows: root soft (`0 12px 32px rgba(11,17,28,0.06)`) and hover (`0 18px 44px rgba(11,17,28,0.1)`). The calendar uses its local `0 12px 36px rgb(11 17 28 / 6%)` shadow. Existing primary buttons have a blue ambient shadow and a brief highlight sweep on hover.

## Shapes

Controls have gently rounded rectangular corners; the incumbent card radius and button radius are separate tokens. The calendar is a rounded white enclosure. Linked service rows and numbered process steps use thin horizontal rules instead of enclosing every item in a card. The pill token remains available in the existing system, although the class named pill-button currently has the same rectangular radius as other buttons.

## Components

- **Primary and secondary actions:** blue filled or white bordered controls, minimum height 2.75rem, with a small lift on hover and compression on press. The header action has a more compact size. About/Contact focus is a two-pixel blue outline offset by five pixels.
- **Navigation:** muted Manrope links become ink on hover or active state, with an animated blue underline on desktop. The existing mobile menu uses explicit open/closed state and inert handling.
- **Fields:** incumbent form fields use a soft background, rounded corners and a quiet border; hover/focus turns the surface white and adds a blue halo. Invalid fields use the existing error color. These fields are not the third-party calendar controls.
- **Linked service row:** blue Manrope service name, supporting text, top/bottom rules and a small diagonal arrow that moves on hover. Reduced motion removes the arrow transition.
- **Booking enclosure:** a local pale blue wrapper (#f5f8fd) holds the real Cal.com month-view embed. Supported Cal color tokens extend BMA blue to available-date backgrounds (#d5e3f5), secondary surfaces (#e7effa), borders (#c1d4ed) and selected controls (#315f9a). Cal.com owns availability and confirmation. Source config selects the light theme and BMA blue; the actual embedded UI is provider controlled. Loading/failure status, a direct calendar link and a mailto quote request remain available. Provider loading and successful booking were not verified by this documentation pass.
- **Nevel assistant welcome:** the selected mist effect is a WebGL canvas inside the assistant's welcome state. Local pointer movement disturbs the flow while its envelope remains anchored. Touch does not drive the pointer effect. Animation pauses while the panel is hidden or the document is hidden, and reduced motion draws a static state. A soft CSS mist remains as the non-WebGL fallback. The pointing John illustration belongs to Contact; it is separate from this procedural mist.

## Do's and Don'ts

### Do:

- Do extend the existing Manrope/Sora pairing and root palette.
- Do use open rows for linked service summaries and contained surfaces for functional tools.
- Do preserve visible focus, direct calendar access and the email quote alternative.
- Do keep Nevel anchored and local to the assistant welcome state.

### Don't:

- Don't turn the chosen Nevel effect into a site-wide background treatment.
- Don't replace the established identity with a new font or accent without a brand decision.
- Don't simulate available appointment slots or booking confirmation.

### Transparent animation delivery
John keeps the same animation geometry and timings. Safari and iOS use HEVC-with-alpha `.mov` sources; Chromium and other browsers retain VP9-with-alpha WebM. Both Apple exports were checked with AVFoundation for a real alpha channel. The welcome mist uses explicitly premultiplied WebGL output, transparent clears and a soft canvas-edge mask to avoid mobile compositor rectangles. Actual iPhone rendering still requires device confirmation.

### Phone homepage readability
Below 768px, partner marks use 100px slots with 12px gaps and 48px image height. Reviews use a manual horizontal scroll-snap row, with duplicate marquee content hidden, a localized swipe hint and 15px body text. Desktop retains its existing automatic review animation and pause control. Full-review controls and the modal close target are at least 44px.

### Compact phone page family
`mobile-refinements.css` is the final, <=767px-only layer. Services, Portfolio, About and Booking titles share `clamp(2rem,8.2vw,2.4rem)` with 1.12 line height. Page introductions begin at 7rem and no longer impose tall viewport-based minimum heights. Service headings use 1.65–2rem; project names use 1.5rem. Body text remains 1rem with generous line spacing. Calendar and mascot animation positions are not altered by this layer. Current 360px captures under `.impeccable/review/studio-20261022/compact-*.png` show the refined page family.
