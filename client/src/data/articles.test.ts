// Run: npm test   (node --test). Guards the article content: the pages are
// 'use client' TSX, so they are checked as source text rather than imported.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ARTICLE_INDEX, relatedArticles } from './articleIndex.ts';
import { getServiceBySlug } from './services.ts';

const SRC = join(dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = join(SRC, '..', 'public');
const pageSource = (slug: string) => readFileSync(join(SRC, 'app', 'articles', slug, 'page.tsx'), 'utf8');

/** Split a page into its FR and EN halves. */
const halves = (source: string) => {
  const en = source.indexOf('\n  EN: {');
  assert.ok(en > 0, 'page must define FR then EN');
  return { FR: source.slice(0, en), EN: source.slice(en) };
};
const count = (text: string, pattern: RegExp) => (text.match(pattern) ?? []).length;

for (const card of ARTICLE_INDEX) {
  test(`${card.slug}: page exists and agrees with the index`, () => {
    const source = pageSource(card.slug);
    assert.ok(existsSync(join(PUBLIC, card.image)), `missing image ${card.image}`);
    for (const value of [card.titleFr, card.titleEn, card.tagFr, card.tagEn]) {
      assert.ok(source.includes(`'${value}'`), `index value not found in page: ${value}`);
    }
    assert.equal(count(source, new RegExp(`readTime: '${card.readTime}'`, 'g')), 2, 'readTime must match in FR and EN');
  });

  test(`${card.slug}: FR and EN have the same structure`, () => {
    const { FR, EN } = halves(pageSource(card.slug));
    for (const [name, pattern] of [
      ['sections/faq titles', /^\s+title: /gm],
      ['faq questions', /^\s+q: /gm],
      ['service links', /href: '\/services\//g],
      ['key facts', /\{ value: /g],
      ['sources', /url: /g],
    ] as const) {
      assert.equal(count(FR, pattern), count(EN, pattern), `FR/EN mismatch: ${name}`);
    }
  });

  test(`${card.slug}: is a rich article, not a stub`, () => {
    const { FR } = halves(pageSource(card.slug));
    assert.ok(count(FR, /^\s+title: /gm) >= 8, 'expected at least 7 sections + conclusion');
    assert.ok(count(FR, /^\s+q: /gm) >= 4, 'expected an FAQ');
    assert.ok(FR.length > 9000, 'expected long-form content');
  });

  test(`${card.slug}: every service link resolves to a real service`, () => {
    const hrefs = [...pageSource(card.slug).matchAll(/href: '\/services\/([^']+)'/g)].map((m) => m[1]);
    assert.ok(hrefs.length > 0, 'expected internal service links');
    for (const slug of hrefs) assert.ok(getServiceBySlug(slug), `unknown service slug: ${slug}`);
  });

  test(`${card.slug}: key facts are backed by sources`, () => {
    const source = pageSource(card.slug);
    if (count(source, /\{ value: /g) > 0) {
      assert.ok(count(halves(source).FR, /url: /g) >= 3, 'statistics need cited sources');
    }
  });
}

test('relatedArticles excludes the current article and handles unknown slugs', () => {
  assert.deepEqual(relatedArticles('telesante').map((a) => a.slug), ['premiere-visite', 'soins-aines']);
  assert.equal(relatedArticles('does-not-exist').length, ARTICLE_INDEX.length);
  assert.equal(new Set(ARTICLE_INDEX.map((a) => a.slug)).size, ARTICLE_INDEX.length, 'slugs must be unique');
});
