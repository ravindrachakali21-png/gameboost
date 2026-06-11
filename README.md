# GameBoost — Landing Page

A responsive marketing landing page built with **Vite + React + Tailwind CSS v4**,
recreating the supplied Figma layout (hero, platform tabs, feature panel, testimonial
slider, three-tier pricing, FAQ accordion, contact form, footer) as a legitimate
game **performance-optimizer** product.

## Run locally

```bash
npm install
npm run dev      # starts on http://localhost:5173
```

Other scripts:

```bash
npm run build    # production build -> dist/
npm run preview  # preview the build
```

## Structure

```
src/
  App.jsx                  # composes all sections
  index.css                # Tailwind v4 theme tokens + animations
  assets/                  # hero / loot / crate renders, phone art
  components/
    Navbar.jsx             # fixed, transparent -> solid on scroll, mobile drawer
    Hero.jsx               # gradient hero, floating renders, wave divider
    PlatformTabs.jsx       # Windows / Android / iOS switch (reused)
    PhoneMock.jsx          # interactive device mockup with toggles
    Features.jsx           # feature list + phone mockup
    Testimonials.jsx       # gradient slider with dots + arrows
    Pricing.jsx            # Basic / Standard / Pro tiers
    FAQ.jsx                # animated accordion
    Contact.jsx            # validated form with success state
    Footer.jsx
    SectionHeading.jsx     # shared eyebrow + heading
    Icons.jsx              # inline SVG icon set
    useReveal.js           # IntersectionObserver scroll-reveal hook
```

## Design notes

- **Type:** Manrope (display) + Inter (body), loaded from Google Fonts.
- **Palette:** cyan→blue hero gradient with an orange CTA accent, defined as
  `@theme` tokens in `index.css` (`--color-blue`, `--color-cyan`, `--color-orange`, …).
- **Motion:** scroll-reveal on each section, floating hero renders, animated
  accordion + slider. All motion is disabled under `prefers-reduced-motion`.
- **Responsive:** single-column mobile through three-column desktop; nav collapses
  to a drawer below `lg`.

## Assets / licensing

The hero, loot, crate, and phone images are the renders you provided as placeholders.
Before shipping publicly, replace them with art you own or have licensed — the
supplied renders appear to be third-party game assets.
