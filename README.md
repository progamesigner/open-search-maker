# Open Search Maker

https://open-search-maker.0x148.com

A simple tool to easily add custom search engines to browsers that support OpenSearch.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploying to Cloudflare

The site is a static Next.js export (`out/`) served by Cloudflare Workers static assets. GitHub Actions ([`.github/workflows/deploy.yaml`](.github/workflows/deploy.yaml)) lints and builds every push.

- `main` deploys to `open-search-maker.0x148.com`.
- Other branches upload a preview version to `https://<branch>-open-search-maker.<subdomain>.workers.dev`.

It needs the `CLOUDFLARE_ACCOUNT_ID` and `CLOUDFLARE_API_TOKEN` repository secrets, and the `NEXT_PUBLIC_DPASTE_API` repository variable (the paste API used to share generated OpenSearch XML).
