# Typography

Project guidance adapted from Matthew Butterick’s *Practical Typography*, with explicit web/accessibility adaptations. The short global policy lives in [AGENTS.md](AGENTS.md).

**Priorities:** **Mandatory** = baseline requirements; **Good to have** = preferred polish; **Keep in mind** = context and trade-offs. Accessibility and reader preferences take precedence over aesthetic targets. Record the reason for intentional exceptions here.

The CSS below is a proposed starter, not an already-applied stylesheet. Adding this document does not change the site’s appearance.

## Start here

For this portfolio/blog, start with **one system sans-serif family, 1.125rem body text (normally 18px), unitless 1.45 leading, left-aligned paragraphs, and a bounded reading column**. Use weight 400 for body text and 600 for headings. Make this work before adding another font or a more elaborate design system.

The maintainable convention is: **global tokens and element defaults in one CSS file; Tailwind for layout and variations; Svelte components for repeated UI**.

## Mandatory

### Body text and layout

- Design body text first. Font, size, line height, and line length are an interdependent system; check them together using actual paragraphs, not only headings or placeholder copy.
- Use shared defaults rather than fixing the same problem separately on each page. Keep text columns bounded and leave space between text and viewport edges.
- Use relative font sizes (`rem`), a root size of `100%`, and unitless `line-height`. Do not disable zoom, auto-shrink prose to fit, or use viewport-only font sizing.
- Make layouts reflow without clipping text or causing page-wide horizontal scrolling. Avoid fixed heights for text containers. Code blocks and genuinely wide tables may scroll within their own region.
- Use left-aligned, ragged-right prose by default. If justification is intentional, enable language-aware hyphenation (`hyphens: auto` with the correct `lang`) and inspect spacing in supported browsers. If hyphenation is unavailable, use ragged-right text.
- Separate paragraphs with space **or** first-line indentation, not both. Use CSS for layout, not repeated spaces, empty paragraphs, or `<br>` elements used as spacers.
- Keep kerning enabled (`font-kerning: normal`). Do not manufacture small caps by shrinking capitals; only use small caps when the font provides real glyphs.

These are Butterick’s body-text targets, not universal hard limits:

| Choice | Source recommendation | Project starting point |
| --- | --- | --- |
| Web body size | 15–25 CSS pixels; adjust for the font’s apparent size | `1.125rem`, normally 18px; do not reduce body text merely to fit mobile |
| Line height | 120–145% of font size | Unitless `1.45`; increase if the font, language, or audience benefits |
| Average line length | 45–90 characters, including spaces | Aim near the middle with real prose; start around `34em` maximum width and verify |
| Font | A professionally designed text family | System sans first; an intentional, licensed text family when needed |

The character target applies to sustained prose, not headings, buttons, or narrow cards. A small screen may legitimately fit fewer than 45 characters: preserve readable size and reflow rather than enforcing a minimum width.

### Semantics and accessibility — project additions

- Use real headings in a logical hierarchy, paragraphs, lists, `<strong>`, and `<em>`. Choose heading levels by document structure, not desired font size.
- Keep inline links visibly identifiable; underline them by default. Preserve visible keyboard focus. Do not use underlining as ordinary emphasis.
- Meet WCAG AA contrast: at least 4.5:1 for normal text and 3:1 for qualifying large text. “Muted” text is not exempt.
- Support text enlargement to 200% and reflow at 320 CSS pixels without lost content or functionality. Test reader spacing overrides without overlap or clipping (see the checklist).
- Apply editorial punctuation rules to authored prose, not code, commands, URLs, identifiers, or faithfully reproduced quotations. Keep technical content copyable and unchanged.

## Good to have

### Hierarchy, font choice, and emphasis

- Keep headings proportionate to the body. Prefer a few reusable text roles over an unrelated size for every element; an oversized hero title should be a deliberate exception.
- Use bold or italic sparingly; do not combine them for routine emphasis. Avoid long passages in either style.
- Keep all-caps text shorter than a line where practical. For short all-caps or genuine small-caps labels, add approximately `0.05em`–`0.12em` tracking; do not apply that tracking to body text.
- Use centered text sparingly, normally for a short title or label, not reading paragraphs.
- Reserve monospace for code, identifiers, or a deliberate technical role. Avoid novelty/decorative fonts for sustained reading.
- Load real weights and italics for a custom font rather than relying on browser-synthesized styles. Use real small caps only when needed and supported by the selected font.
- Borrow ideas from books, posters, art, and other design disciplines instead of copying a fashionable template. Avoid tiny body text, gratuitously huge headings, cluttered navigation, or large color blocks that overwhelm the content.

### Editorial polish

| Prefer | Avoid / exception |
| --- | --- |
| Curly prose quotes: “text”, ‘text’; apostrophe `’` in `don’t` | Straight prose quotes or the opening quote `‘` used as an apostrophe; leave code syntax alone |
| One space between sentences | Double spaces or whitespace used for alignment |
| Hyphens for compounds, en dashes for ranges (`2024–2026`), em dashes for interruptions | Treating these marks as interchangeable or using `--` as a prose dash |
| The ellipsis character `…` | Three spaced periods as an approximation |
| Actual symbols: `©`, `®`, `™` | Alphabetic approximations such as `(c)` and `(tm)` |
| A nonbreaking space after section/paragraph marks: `§ 12`, `¶ 3` | Separating the mark from its number across lines; use `&nbsp;` in HTML when helpful |
| Straight foot/inch marks (`6' 2"`), or true prime glyphs (`6′ 2″`) | Curly quotation marks used as measurement marks |
| “And” in ordinary prose; ampersands in proper names when appropriate | Habitually substituting `&` for “and” |
| Restrained exclamation marks | Repeated excitement; the source’s editorial benchmark is roughly one exclamation mark in a document longer than three pages |

## Keep in mind

- **Font judgments are not licensing rules.** Butterick favors paid professional fonts and discourages most free/system fonts, especially intentional use of Arial or Times New Roman. This project does not require buying a font: evaluate actual quality, language coverage, licensing, performance, and fit. Do not remove useful fallbacks or override a reader’s chosen font to enforce a preference.
- **A CSS unit is not a character count.** The source explicitly discourages `ch`: it measures the zero glyph, not an average character. This starter uses an `em`-based width that follows font size, but `em` is not a character count either. Count representative rendered lines. Tailwind’s `max-w-prose` is likewise an approximation, not proof of compliance.
- **Responsive typography is still typography.** Adjust width, gutters, and size together. The source suggests `vw` scaling and sometimes JavaScript device detection; this project instead starts with readable `rem` sizes, bounded widths, and content-driven media/container queries. Use `clamp()` with relative bounds when fluid sizing is useful, and still test zoom. Do not use user-agent sniffing for ordinary layout.
- **Screens differ.** Resolution, rasterization, viewing distance, and font metrics vary. Old “screen-optimized” fonts are not automatically more readable on modern displays. Check the chosen face on real phones and desktop screens, including a lower-density display when possible. Do not add font-smoothing hacks or OS-specific font weights without a demonstrated need.
- **Print guidance is separate.** The source’s 10–12pt body size, 4–10pt paragraph spacing, and 1–4em first-line indents are print-oriented references, not instructions to put point units into web CSS. A downloadable/printable document may need its own print layout.
- **Language matters.** The line-length and tracking advice primarily concerns Latin-script prose. Revisit font coverage, line breaking, punctuation, hyphenation, and spacing for other writing systems.

## A small, maintainable CSS convention

The project already uses **Svelte 5 + Tailwind v4**. `src/routes/+layout.svelte` imports `src/routes/layout.css`, which currently only imports Tailwind. Extend that existing entry point; do not create a second competing global stylesheet or add a v3-style Tailwind config just for typography.

| What belongs where | Convention |
| --- | --- |
| Shared fonts, text roles, colors, reading width | Tailwind v4 `@theme` in `src/routes/layout.css`; ordinary `:root` variables for values that need no utility |
| Inherited defaults and basic HTML typography | `@layer base` in that same file |
| Article/Markdown rhythm | One opt-in `.reading` wrapper in `@layer components`, not selectors applied to every `<main>` or `<div>` |
| Layout, spacing between UI items, responsive variations, states | Tailwind utilities in Svelte markup: `grid`, `gap-6`, `md:grid-cols-2`, etc. |
| Repeated cards, buttons, or other UI | A Svelte component with a consistent styling owner |
| Truly component-specific behavior | Scoped Svelte CSS when clearer than utilities; reuse global tokens |

Practical maintenance rules:

1. **One owner per property.** Do not set the same element’s font size in both scoped CSS and a Tailwind class. Unlayered Svelte styles outrank layered Tailwind utilities; class order in the HTML does not resolve conflicts. Put shared, utility-overridable rules in `@layer base` or `@layer components`.
2. **Use a small vocabulary.** Start with body, caption, subsection, section, and title roles. Use Tailwind’s existing spacing scale rather than inventing a new one. Promote repeated arbitrary values to named tokens; a genuine one-off does not need an abstraction.
3. **Let inheritance work.** Set body family, size, color, and leading once. Do not repeat `font-sans text-body` on every paragraph. A visual text role may differ from its semantic heading level.
4. **Separate page width from reading width.** The existing layout’s `72rem` maximum is a page frame, not an article measure. Cards/grids can use that frame; articles need a narrower inner wrapper. Do not add duplicate page padding inside it.
5. **Keep selectors boring.** Prefer classes and shallow, low-specificity selectors. Avoid IDs, deep selector chains, blanket `!important`, and using `@apply` to reproduce every utility class in another stylesheet.
6. **Extract when repetition is real.** Reuse a component when markup/behavior repeats; use a prose class for article content you do not want to decorate element by element. Do not build a full design-system framework in advance.

### Suggested global CSS + Tailwind v4 starter

When adopting this foundation, expand `src/routes/layout.css` with the following. Tailwind Preflight already resets margins and heading/list styles; these rules intentionally restore a small hierarchy and opt-in reading rhythm. All heading levels retain a visible weight, even where their size matches body text.

```css
@import 'tailwindcss';

@theme {
	--font-sans: system-ui, sans-serif;
	--font-mono: ui-monospace, 'SFMono-Regular', Consolas, monospace;
	--text-body: 1.125rem;
	--text-body--line-height: 1.45;
	--text-caption: 1rem;
	--text-caption--line-height: 1.4;
	--text-subsection: 1.25rem;
	--text-subsection--line-height: 1.3;
	--text-section: 1.5rem;
	--text-section--line-height: 1.25;
	--text-title: clamp(1.75rem, 1.4rem + 1vw, 2.5rem);
	--text-title--line-height: 1.15;
	--tracking-caps: 0.08em;
	--container-reading: 34em;

	--color-paper: #ffffff;
	--color-ink: #202124;
	--color-muted: #5f6368;
	--color-link: #164e9b;
}

@layer base {
	html {
		font-size: 100%;
		font-kerning: normal;
	}

	body {
		font-family: var(--font-sans);
		font-size: var(--text-body);
		line-height: var(--text-body--line-height);
		color: var(--color-ink);
		background-color: var(--color-paper);
	}

	h1, h2, h3, h4, h5, h6 {
		font-weight: 600;
		line-height: 1.3;
		text-wrap: balance;
	}

	h1 {
		font-size: var(--text-title);
		line-height: var(--text-title--line-height);
	}

	h2 {
		font-size: var(--text-section);
		line-height: var(--text-section--line-height);
	}

	h3 {
		font-size: var(--text-subsection);
		line-height: var(--text-subsection--line-height);
	}

	a {
		color: var(--color-link);
		text-decoration-line: underline;
		text-underline-offset: 0.15em;
	}

	:focus-visible {
		outline: 2px solid currentColor;
		outline-offset: 3px;
	}

	code, kbd, samp, pre {
		font-family: var(--font-mono);
	}
}

@layer components {
	.reading {
		max-inline-size: var(--container-reading);
		overflow-wrap: anywhere;
	}

	.reading > * + * {
		margin-block-start: 0.75em;
	}

	.reading > * + :where(h2, h3, h4, h5, h6) {
		margin-block-start: 1.5em;
	}

	.reading :where(ul, ol) {
		padding-inline-start: 1.5em;
	}

	.reading :where(ul) { list-style-type: disc; }
	.reading :where(ol) { list-style-type: decimal; }
	.reading :where(li + li) { margin-block-start: 0.25em; }

	.reading :where(blockquote) {
		border-inline-start: 0.2rem solid var(--color-muted);
		padding-inline-start: 1em;
	}

	.reading :where(pre) {
		max-inline-size: 100%;
		overflow-x: auto;
		white-space: pre;
		overflow-wrap: normal;
	}
}
```

The palette above is a light-theme example. If adding dark mode, define a matching surface/text/link palette and check contrast again rather than only changing the background.

The `1.45` body leading follows the source’s upper recommendation; it is **not a ceiling**. If testing favors `1.5` or more, update the shared token. WCAG’s text-spacing criterion requires surviving reader overrides, not authoring all text at `1.5`.

### Using the foundation in Svelte

After adopting the CSS, a page inside the existing layout can be as simple as this; the layout already supplies `<main>` and page gutters:

```svelte
<article class="reading mx-auto">
	<h1>Building things for the web</h1>
	<p class="text-caption text-muted">Notes on a recent project</p>
	<p>Ordinary paragraphs inherit the shared body typography.</p>
	<h2>What changed</h2>
	<p>Spacing and list styles come from the reading wrapper.</p>
	<ul>
		<li>Keep the defaults predictable.</li>
		<li>Change shared tokens instead of patching individual pages.</li>
	</ul>
</article>
```

The theme also makes `font-sans`, `font-mono`, `text-body`, `text-caption`, `text-subsection`, `text-section`, `text-title`, `tracking-caps`, `max-w-reading`, and the color utilities available. Use them for intentional variations outside normal prose. A short uppercase label can use `uppercase tracking-caps`; do not add that styling to paragraphs.

Tailwind font-size utilities often also set line height. Prefer these paired text roles rather than accidentally replacing the body rhythm with `text-lg` or a fixed-length `leading-*` utility.

`.reading` is our example class, **not** Tailwind’s `prose` class. The optional `@tailwindcss/typography` plugin is not currently installed. Consider it if richer Markdown needs it, then customize its defaults and choose one owner for prose styling instead of stacking two competing systems.

### Default font choices and loading

- **Least maintenance now:** `system-ui, sans-serif`. No font request, no added dependency, familiar UI text. Appearance varies by operating system, so check more than one. This is an intentional pragmatic departure from the source’s preference for purchased fonts.
- **Consistent custom sans later:** self-host **Source Sans 3** with a system fallback. It is a professionally designed open-source text family; being free alone is neither a quality guarantee nor a disqualification.
- **Optional editorial serif:** **Source Serif 4** for long-form posts. Start with the sans alone; add a second family only if it improves the reading experience. Recheck size and measure after changing fonts.
- **Paid alternative:** choose a text family with a web license if a distinctive voice justifies it. A desktop font license does not necessarily permit web embedding.

For custom fonts, keep their license files, verify language/glyph coverage, and serve WOFF2 files from `static/fonts/`. Include only the weights/styles actually used, or suitable variable files. Keep a fallback and use `font-display: swap`; test with fonts blocked and on a slow connection for layout shifts. Preload only a measured critical font, not every face.

For example, **after obtaining the actual variable roman and italic files** at the paths below, add these top-level declarations after the Tailwind import and replace the starter’s `--font-sans` value. These filenames are illustrative; no font assets are included by this document.

```css
@font-face {
	font-family: 'Source Sans 3';
	src: url('/fonts/source-sans-3-roman.woff2') format('woff2');
	font-weight: 200 900;
	font-style: normal;
	font-display: swap;
}

@font-face {
	font-family: 'Source Sans 3';
	src: url('/fonts/source-sans-3-italic.woff2') format('woff2');
	font-weight: 200 900;
	font-style: italic;
	font-display: swap;
}

@theme {
	--font-sans: 'Source Sans 3', system-ui, sans-serif;
}
```

## Review checklist

- [ ] Check real prose at roughly 320, 375, 768, and 1440 CSS pixels, including an intermediate window size. No clipped words, overlapping text, or page-wide scrolling.
- [ ] At ordinary reading widths, count a few representative full lines including spaces; aim for 45–90 characters on average. Recheck after changing fonts. Accept shorter mobile lines.
- [ ] Check 200% text enlargement and 400% browser zoom on a 1280px-wide desktop viewport (about 320 CSS pixels). Content reflows; controls remain usable.
- [ ] Temporarily override line height to `1.5`, paragraph spacing to `2em`, letter spacing to `0.12em`, and word spacing to `0.16em` together. Nothing essential disappears or overlaps. These are a test, not the default style.
- [ ] Verify heading order, list markers, link affordances, keyboard focus, and contrast, including captions and visited/hover states if styled.
- [ ] Try a long title, URL, code block, and the fallback font. Scope overflow handling to the affected content rather than hiding page overflow.
- [ ] Check on a real phone and a desktop screen when available; record what remains untested.

## Sources

Reviewed 2026-10-28. Rules are summarized and adapted, not copied wholesale. The code conventions, accessibility requirements, and font suggestions above are project recommendations, not claims that Butterick prescribes Tailwind or these exact defaults.

- [Websites](https://practicaltypography.com/websites.html) — avoid inherited web-design habits and template sameness; seek broader design references.
- [Typography in ten minutes](https://practicaltypography.com/typography-in-ten-minutes.html) — body text first; size, leading, measure, font.
- [Summary of key rules](https://practicaltypography.com/summary-of-key-rules.html) — hierarchy, emphasis, paragraph treatment, spacing, and punctuation.
- [Responsive web design](https://practicaltypography.com/responsive-web-design.html) — preserve typographic quality across viewports; account for the limits of CSS units.
- [Screen-reading considerations](https://practicaltypography.com/screen-reading-considerations.html) — display quality, viewing distance, and font selection.
- [Tailwind theme variables](https://tailwindcss.com/docs/theme), [adding custom styles](https://tailwindcss.com/docs/adding-custom-styles), and [Preflight](https://tailwindcss.com/docs/preflight) — v4 configuration and cascade behavior.
- [WCAG 2.2 text spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html), [resize text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html), [reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html), and [contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) — accessibility requirements beyond the source’s aesthetic guidance.
