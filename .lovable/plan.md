## Plan

Replace the current hero video at `public/hero-faucet.mp4` with the newly uploaded `hero-faucet.mp4`.

### Steps
1. Copy `user-uploads://hero-faucet.mp4` to `public/hero-faucet.mp4` (overwrite existing).
2. No code changes needed — `src/routes/index.tsx` already references `/hero-faucet.mp4` with autoplay, muted, loop, playsInline.

### Notes
- Filename stays the same so the `<video src="/hero-faucet.mp4" />` tag in the Hero component continues to work.
- Browser cache may briefly serve the old video; a hard refresh shows the new one.