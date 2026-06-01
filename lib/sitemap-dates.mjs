/**
 * Date helpers for app/sitemap.ts.
 *
 * Pure helpers (routeToSourceFile, pickLastModified) are exported and unit-tested.
 * The git/fs-backed helpers (gitCommitDate, mdxFrontmatterDate, routeLastModified)
 * resolve a realistic `lastModified` per route: a kennisbank article uses its
 * frontmatter `date`; other routes use the last git-commit date of their source
 * file, with a fallback to the build date when git history is unavailable
 * (e.g. an uncommitted new page).
 */

import fs from 'fs';
import path from 'path';
import { execFileSync } from 'child_process';

/**
 * Map a BASE-relative route path to its App Router source file.
 * '/'                       -> 'app/page.tsx'
 * '/grohe-red'              -> 'app/grohe-red/page.tsx'
 * '/vergelijken/bwt-vs-brita' -> 'app/vergelijken/bwt-vs-brita/page.tsx'
 * @param {string} routePath
 * @returns {string}
 */
export function routeToSourceFile(routePath) {
  const clean = String(routePath || '').replace(/^\/+|\/+$/g, '');
  return clean === '' ? 'app/page.tsx' : `app/${clean}/page.tsx`;
}

/**
 * Choose the most meaningful lastModified date.
 * Priority: a valid frontmatter date, then a valid git date, else the build date.
 * @param {{ frontmatterDate?: string | Date | null, gitDate?: Date | null, buildDate: Date }} opts
 * @returns {Date}
 */
export function pickLastModified({ frontmatterDate = null, gitDate = null, buildDate }) {
  if (frontmatterDate) {
    const d = frontmatterDate instanceof Date ? frontmatterDate : new Date(frontmatterDate);
    if (!Number.isNaN(d.getTime())) return d;
  }
  if (gitDate instanceof Date && !Number.isNaN(gitDate.getTime())) return gitDate;
  return buildDate;
}

const gitCache = new Map();

/**
 * Last git-commit date (ISO) of a repo-relative file, or null if unavailable.
 * @param {string} relFile
 * @param {string} [cwd]
 * @returns {Date | null}
 */
export function gitCommitDate(relFile, cwd = process.cwd()) {
  const key = cwd + '\0' + relFile;
  if (gitCache.has(key)) return gitCache.get(key);
  let result = null;
  try {
    if (fs.existsSync(path.join(cwd, relFile))) {
      const out = execFileSync('git', ['log', '-1', '--format=%cI', '--', relFile], {
        cwd,
        encoding: 'utf-8',
        stdio: ['ignore', 'pipe', 'ignore'],
      }).trim();
      if (out) {
        const d = new Date(out);
        if (!Number.isNaN(d.getTime())) result = d;
      }
    }
  } catch {
    result = null;
  }
  gitCache.set(key, result);
  return result;
}

/**
 * Read the `date` frontmatter value from an MDX file, or null.
 * @param {string} absPath
 * @returns {string | null}
 */
export function mdxFrontmatterDate(absPath) {
  try {
    const raw = fs.readFileSync(absPath, 'utf-8');
    const m = raw.match(/^---\n([\s\S]*?)\n---/);
    if (!m) return null;
    const dl = m[1].split('\n').find(l => /^date\s*:/.test(l));
    if (!dl) return null;
    const val = dl.replace(/^date\s*:/, '').trim().replace(/^["']|["']$/g, '');
    return val || null;
  } catch {
    return null;
  }
}

/**
 * Realistic lastModified for a static/templated route via its source file's git date.
 * @param {string} routePath
 * @param {Date} buildDate
 * @param {string} [cwd]
 * @returns {Date}
 */
export function routeLastModified(routePath, buildDate, cwd = process.cwd()) {
  return pickLastModified({ gitDate: gitCommitDate(routeToSourceFile(routePath), cwd), buildDate });
}
