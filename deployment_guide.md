# AutoMind Deployment Guide

This project is built as an optimized static site using Vite, React, and Tailwind CSS v4. It is designed for seamless deployment on edge networks like Vercel or GitHub Pages.

## Environment Setup
1. Copy `.env.example` to `.env`.
2. Fill in `VITE_GITHUB_REPO` (e.g., `automind/automind`) for live release tracking.
3. Fill in `VITE_GA_TRACKING_ID` if using Google Analytics.

## Deployment Options

### Option A: Vercel (Recommended)
Vercel is the optimal host for Vite/React applications.
1. Push your repository to GitHub.
2. Log into [Vercel](https://vercel.com) and import the repository.
3. Vercel automatically detects "Vite" as the framework.
4. Add your Environment Variables in the Vercel dashboard.
5. Deploy. (Security headers are automatically injected via `vercel.json`).

### Option B: GitHub Pages
A GitHub Actions workflow is included at `.github/workflows/deploy.yml`.
1. Go to your GitHub repository Settings > Pages.
2. Under "Build and deployment", change the Source to "GitHub Actions".
3. Push to the `main` branch. The action will automatically build and deploy your `/dist` folder.

## Analytics & SEO
- The Google Analytics tag is conditionally injected in `index.html`.
- For production, ensure your `sitemap.xml` and `robots.txt` domains match your production URL.
