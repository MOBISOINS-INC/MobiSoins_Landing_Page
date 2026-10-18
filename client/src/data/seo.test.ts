// Run: npm test. Guards the SEO wiring: every public route has its own
// metadata, the sitemap covers every page, and nothing points at a wrong domain.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ARTICLE_INDEX } from './articleIndex.ts';
import { allServiceSlugs } from './services.ts';

const SRC = join(dirname(fileURLToPath(import.meta.url)), '..');
const APP = join(SRC, 'app');

/** A page route: its URL path and the folder that holds its page.tsx/layout.tsx. */
type Route = { url: string; dir: string };

/**
 * Route folders under src/app that render a page (excluding the api). Route
 * groups like "(fr)" are folders that Next.js drops from the URL, so their name
 * is kept in `dir` but not in `url`; a group's own page.tsx is the home page.
 */
const routes = (dir: string, rel = ''): Route[] =>
  readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    if (!statSync(full).isDirectory() || name === 'api') return [];
    const isGroup = /^\(.*\)$/.test(name);
    const url = isGroup ? rel : `${rel}/${name}`;
    const here = !isGroup && existsSync(join(full, 'page.tsx')) ? [{ url, dir: full }] : [];
    return [...here, ...routes(full, url)];
  });
const routeDirs = (dir: string): string[] => routes(dir).map((r) => r.url);

test('every route has a server layout that sets its own metadata', () => {
  for (const { url: route, dir } of routes(APP)) {
    const layout = join(dir, 'layout.tsx');
    assert.ok(existsSync(layout), `missing ${route}/layout.tsx (its page is a client component, so metadata must live here)`);
    const src = readFileSync(layout, 'utf8');
    assert.ok(!src.startsWith("'use client'"), `${route}/layout.tsx must be a server component`);
    assert.match(src, /export (const (metadata|generateMetadata)|async function generateMetadata)/, `${route}/layout.tsx exports no metadata`);
  }
});

test('the sitemap lists every article and every service', () => {
  const sitemap = readFileSync(join(APP, 'sitemap.ts'), 'utf8');
  assert.match(sitemap, /ARTICLE_INDEX\.map/);
  assert.match(sitemap, /allServiceSlugs\(\)\.map/);
  for (const route of routeDirs(APP).filter((r) => !r.includes('[') && r !== '/en' && !r.startsWith('/en/'))) {
    const isArticle = ARTICLE_INDEX.some((a) => route === `/articles/${a.slug}`);
    if (!isArticle) assert.ok(sitemap.includes(`'${route}'`), `sitemap is missing ${route}`);
  }
  assert.ok(allServiceSlugs().length > 0);
});

test('articles carry SEO fields', () => {
  for (const a of ARTICLE_INDEX) {
    assert.ok(a.descriptionFr.length >= 110 && a.descriptionFr.length <= 165, `${a.slug}: description should be 110-165 chars (is ${a.descriptionFr.length})`);
    assert.match(a.datePublished, /^\d{4}-\d{2}-\d{2}$/);
    assert.match(a.dateModified, /^\d{4}-\d{2}-\d{2}$/);
    assert.ok(a.dateModified >= a.datePublished);
  }
});

test('no static sitemap/robots shadow the generated ones, and no .ca domain remains', () => {
  const PUBLIC = join(SRC, '..', 'public');
  assert.ok(!existsSync(join(PUBLIC, 'sitemap.xml')), 'public/sitemap.xml would override app/sitemap.ts');
  assert.ok(!existsSync(join(PUBLIC, 'robots.txt')), 'public/robots.txt would override app/robots.ts');
  for (const f of ['app/RootDocument.tsx', 'app/(fr)/layout.tsx', 'app/en/layout.tsx', 'lib/seo.ts']) {
    assert.ok(!readFileSync(join(SRC, f), 'utf8').includes('mobisoins.ca'), `${f} still references mobisoins.ca`);
  }
});

test('every French route has an English twin under /en, and vice versa', () => {
  const all = routeDirs(APP);
  const fr = all.filter((r) => r !== '/en' && !r.startsWith('/en/'));
  const en = new Set(all.filter((r) => r.startsWith('/en/')).map((r) => r.slice(3)));
  for (const r of fr) assert.ok(en.has(r), `no English page for ${r}`);
  for (const r of en) assert.ok(fr.includes(r), `English page /en${r} has no French original`);
  assert.ok(existsSync(join(APP, 'en', 'page.tsx')), 'missing English home /en');
  assert.ok(existsSync(join(APP, '(fr)', 'page.tsx')), 'missing French home / (in the (fr) route group)');
});

test('both root layouts share one document and only differ by html lang', () => {
  const fr = readFileSync(join(APP, '(fr)', 'layout.tsx'), 'utf8');
  const en = readFileSync(join(APP, 'en', 'layout.tsx'), 'utf8');
  assert.match(fr, /<RootDocument lang="fr-CA">/);
  assert.match(en, /<RootDocument lang="en-CA">/);
  assert.match(fr, /export const metadata = rootMetadata/);
  assert.match(en, /\.\.\.rootMetadata/, 'English root layout must spread rootMetadata so /en keeps icons, robots and metadataBase');
  assert.ok(!existsSync(join(APP, 'layout.tsx')), 'a shared src/app/layout.tsx would force a single <html lang> on both trees');
  assert.match(readFileSync(join(APP, 'RootDocument.tsx'), 'utf8'), /<html lang=\{lang\}/);
});

test('articles have English meta descriptions', () => {
  for (const a of ARTICLE_INDEX) {
    assert.ok(a.descriptionEn.length >= 110 && a.descriptionEn.length <= 165, `${a.slug}: EN description is ${a.descriptionEn.length} chars`);
  }
});
