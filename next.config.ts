import type { NextConfig } from 'next';

/**
 * Two deploy targets from one codebase:
 *
 *  • Vercel (default)  — normal Next.js build, nothing to configure.
 *  • GitHub Pages      — set GITHUB_PAGES=true to emit a fully static site
 *                        into ./out. BASE_PATH must be "/<repo-name>" for a
 *                        project site (user.github.io/<repo>), and empty for
 *                        a user site (user.github.io) or a custom domain.
 */
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const basePath = process.env.BASE_PATH ?? '';

const nextConfig: NextConfig = isGithubPages
  ? {
      output: 'export',
      basePath,
      assetPrefix: basePath || undefined,
      // Static hosts resolve /impressum/ → /impressum/index.html.
      trailingSlash: true,
      images: { unoptimized: true },
    }
  : {};

export default nextConfig;
