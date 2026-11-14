# Media & Video Assets Directory

Place your official explanatory and cinematic videos here.

### Expected Files:
- `farmer-eye-cinematic-intro.mp4`: The primary cinematic hero video / project story (1080p or 4K, H.264/AAC, optimized for web streaming).
- `farmer-eye-poster.jpg`: High-resolution poster frame displayed before playback starts.
- `farmer-eye-story-captions.vtt`: WebVTT English captions track for accessibility.
- `nasa-earth-obs-pipeline.mp4`: Explanatory video for data ingestion (future Phase 2).
- `earth-trials-meknes.mp4`: Field demonstration clip (future Phase 2).

### How to Connect in Code:
Open `src/config/media.ts` and set `status: "available"` and specify the local path (e.g. `videoUrl: "/videos/farmer-eye-cinematic-intro.mp4"`).
When absent or set to `status: "placeholder"`, the UI displays a polished scientific placeholder interface with technical video specifications.
