# Xclusive Gift – Landing Page

React + Vite + TypeScript + Tailwind CSS landing page for GitHub Pages.
Data (showcase items & social links) is read live from Firebase Firestore.

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

## Deploy to GitHub Pages

1. Edit `vite.config.ts` — set `base` to match your GitHub repo name:
   ```ts
   base: '/your-repo-name/'
   ```

2. Make sure `gh-pages` is installed (it is, via package.json):
   ```bash
   npm run deploy
   ```
   This builds and pushes the `dist/` folder to the `gh-pages` branch.

3. In your GitHub repo settings → Pages → Branch: `gh-pages`, folder: `/ (root)`.

## Firebase Firestore Structure

### `showcase_items` collection
Each document:
```json
{
  "title": "Buket Mawar Merah",
  "description": "Buket bunga mawar merah 20 tangkai",
  "imageBase64": "<base64 jpg string>",
  "category": "Buket Bunga",
  "order": 1,
  "isActive": true,
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

### `app_settings/social_links` document
```json
{
  "shopee": "https://shopee.co.id/...",
  "sidePart": "https://...",
  "admin1": "https://wa.me/628...",
  "admin2": "https://wa.me/628..."
}
```

Manage these from the Flutter app's **Etalase** menu (admin only).
