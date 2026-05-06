## Tal Hermon — Soda Tap Catalog Page (Hebrew RTL)

A single premium catalog page, Hebrew-only, RTL, no store, no prices.

### Design system
- Palette: deep navy (#0E1B2C), dark gray (#1F2937), white, aqua accent (#22B8CF / soft teal)
- Typography: Hebrew web font (Heebo or Assistant) for clean brochure feel
- Rounded cards (rounded-2xl), generous spacing, subtle shadows
- `dir="rtl"`, right-aligned text, mobile responsive

### Page structure (single route: `/`)

1. **Top bar** — small navy bar with brand "טל חרמון" right, simple anchor links (קונפיגורציות, מפרט טכני, גימורים, צור קשר) on the left.

2. **Hero**
   - Dark navy block, right-aligned
   - Title: "ברזי מזיגה למים קרים, חמים וסודה"
   - Subtitle: "פתרון תת־כיורי אלגנטי שמרכז את חוויית השתייה במטבח — בלי בר מים על השיש."
   - Large main product image placeholder (aspect-[4/3], aqua glow background)

3. **Product configurations** — 3 cards in a responsive grid (1/2/3 cols)
   - Card 1: "סטיק 2 ידיות לקר וסודה"
   - Card 2: "סטיק ידית אחת לסודה + ברז חם/קר"
   - Card 3: "ברז אחד חם/קר/סודה"
   - Each card: image placeholder (with the Hebrew placeholder caption requested), title, short Hebrew description, 3 bullet benefits with aqua check icons.

4. **Technical details** — three sub-cards side by side:
   - מערכת מים קרים (טמפ׳, הספק, נפח, מידות)
   - מערכת מים רותחים (טמפ׳, נפח, אחריות, מידות)
   - מערכת סינון 3 שלבים (3 שלבי הסינון, מידות, אישור מכון התקנים לתקן 1505)
   - Clean spec rows (label right, value left), separators between rows.

5. **Faucet finishes** — "גימורי ברז זמינים"
   - Row of 6 round swatches with Hebrew labels under each: זהב, זהב מוברש, ניקל, ניקל מוברש, רוזגולד, שחור
   - Swatches use CSS gradients to suggest brushed/polished metal.

6. **Lead form / CTA** — navy section
   - Title: "רוצים להתאים את הברז למטבח שלכם?"
   - Fields: שם מלא, טלפון, עיר, סוג ברז מעניין (select with the 3 configurations)
   - Button (aqua): "קבלו שיחה מנציג"
   - Client-side only: on submit show a Hebrew toast "תודה! ניצור איתכם קשר בקרוב." (no backend)

7. **Footer** — minimal: "טל חרמון © 2026" right-aligned.

### Technical notes
- Implement entirely in `src/routes/index.tsx` with small section components inline (or split into `src/components/catalog/*` if it helps readability).
- Set `<html lang="he" dir="rtl">` via `__root.tsx` shellComponent update.
- Update root `head()` meta: title "טל חרמון — ברזי מזיגה למים קרים, חמים וסודה", Hebrew description, og tags.
- Add Heebo font via Google Fonts `<link>` in root head; set as default sans in `styles.css`.
- Define semantic tokens in `styles.css` (`--brand-navy`, `--brand-aqua`, etc.) and map them in `@theme inline`.
- Use existing shadcn `Card`, `Input`, `Label`, `Button`, `Select`, `Sonner` (toast). No new deps.
- Image placeholders: styled `<div>` blocks with the requested Hebrew caption text centered, soft gradient bg, aqua border — no external images.
- No pricing anywhere. No English copy in UI.
