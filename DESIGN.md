# Design Brief

## Direction

Cyberpunk Puzzle Game — dark high-energy interface with electric neon accents for interactive puzzle challenges.

## Tone

Playful yet focused gamified experience with bold futuristic typography and glowing interactive states; designed for engagement and clarity.

## Differentiation

Animated level transitions with neon glow effects and pulsing state indicators create a memorable, high-energy puzzle gaming interface.

## Color Palette

| Token      | OKLCH           | Role                       |
| ---------- | --------------- | -------------------------- |
| background | 0.12 0.02 280   | Near-black base            |
| foreground | 0.92 0.02 280   | Bright neutral text        |
| card       | 0.16 0.025 280  | Elevated surface           |
| primary    | 0.72 0.22 190   | Electric cyan accent       |
| accent     | 0.68 0.25 295   | Magenta secondary accent   |
| destructive| 0.55 0.22 25    | Red action indicator       |

## Typography

- Display: Space Grotesk — hero headings, level titles, congratulations messages
- Body: Bricolage Grotesque — UI labels, input instructions, hint text
- Scale: hero `text-5xl md:text-7xl font-bold tracking-tight`, h2 `text-3xl font-bold`, label `text-sm font-semibold uppercase`, body `text-base`

## Elevation & Depth

Subtle elevated card surfaces with glowing cyan/magenta rings on focus; no heavy shadows, emphasis on neon light effects over traditional depth.

## Structural Zones

| Zone    | Background          | Border         | Notes                       |
| ------- | ------------------- | -------------- | --------------------------- |
| Header  | `bg-card` with glow | none           | Level counter + title       |
| Content | `bg-background`     | none           | Full-screen puzzle area     |
| Footer  | none                | none           | Centered action buttons     |

## Spacing & Rhythm

Spacious layout (48px section gaps) with tight micro-spacing (8px) inside component groups; breathing room emphasizes individual puzzle elements.

## Component Patterns

- Buttons: rounded-md, `bg-primary text-primary-foreground`, `glow-primary` on hover/focus
- Input: rounded-sm, `border border-primary`, cyan glow ring on focus
- Level cards: rounded-lg, elevated `bg-card`, subtle `border-border`
- Success state: green accent with success animation

## Motion

- Entrance: fade + scale-up 400ms ease-out on level load
- Hover: glow-primary effect + 200ms scale-110 on interactive elements
- Decorative: pulse-glow animation (2s infinite) on active inputs and success states

## Constraints

- Always use token-only colors (no hex literals or arbitrary colors)
- Never use shadow only—prioritize glow effects via box-shadow on accent colors
- Maintain cyan/magenta vibrance; no desaturated palettes

## Signature Detail

Electric cyan and magenta glow effects on interactive elements create instant visual feedback and memorable puzzle game aesthetic.

