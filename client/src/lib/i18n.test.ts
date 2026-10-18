// Run: npm test. Locale routing: French at the root, English under /en.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { englishRedirectFor, localeFromPath, localizePath, stripLocale } from './i18n.ts';

test('localeFromPath', () => {
  assert.equal(localeFromPath('/'), 'FR');
  assert.equal(localeFromPath('/services/prise-sang'), 'FR');
  assert.equal(localeFromPath('/en'), 'EN');
  assert.equal(localeFromPath('/en/faq'), 'EN');
  assert.equal(localeFromPath('/english-page'), 'FR', 'a path merely starting with "en" is French');
  assert.equal(localeFromPath('/entreprises'), 'FR');
  assert.equal(localeFromPath(null), 'FR');
});

test('stripLocale', () => {
  assert.equal(stripLocale('/en'), '/');
  assert.equal(stripLocale('/en/articles/telesante'), '/articles/telesante');
  assert.equal(stripLocale('/faq'), '/faq');
  assert.equal(stripLocale('/en#visit'), '/#visit');
});

test('localizePath to English', () => {
  assert.equal(localizePath('/', 'EN'), '/en');
  assert.equal(localizePath('/services/prise-sang', 'EN'), '/en/services/prise-sang');
  assert.equal(localizePath('/#visit', 'EN'), '/en#visit');
  assert.equal(localizePath('/en/faq', 'EN'), '/en/faq', 'already English stays as is');
});

test('localizePath to French', () => {
  assert.equal(localizePath('/en/faq', 'FR'), '/faq');
  assert.equal(localizePath('/en', 'FR'), '/');
  assert.equal(localizePath('/contact', 'FR'), '/contact');
});

test('localizePath leaves non-page links alone', () => {
  for (const href of ['https://docs.google.com/x', 'mailto:a@b.ca', '#faq', '/favicon.png', '/Healthcare_Access_On_Demand.pdf', '/_next/static/x.js', '/api/waitlist', '//cdn.example.com/a']) {
    assert.equal(localizePath(href, 'EN'), href, href);
  }
});

// English-first default: first visit on a French URL goes to its English twin.
test('first visit to / redirects to /en', () => {
  assert.equal(englishRedirectFor('/', '', null, 'Mozilla/5.0 (iPhone)', ['en-US']), '/en');
});
test('first visit keeps the page and the hash', () => {
  assert.equal(englishRedirectFor('/services/pansements', '', null, 'Mozilla/5.0', ['en-US']), '/en/services/pansements');
  assert.equal(englishRedirectFor('/', '#how-it-works', null, 'Mozilla/5.0', ['en-US']), '/en#how-it-works');
});
test('someone who chose French is never redirected', () => {
  assert.equal(englishRedirectFor('/', '', 'FR', 'Mozilla/5.0', ['en-US']), null);
});
test('someone who chose English on a French link is left alone', () => {
  assert.equal(englishRedirectFor('/faq', '', 'EN', 'Mozilla/5.0', ['fr-CA']), null);
});
test('already on English: no redirect', () => {
  assert.equal(englishRedirectFor('/en/faq', '', null, 'Mozilla/5.0', ['en-US']), null);
});
test('crawlers are never redirected (French pages stay indexable)', () => {
  assert.equal(englishRedirectFor('/', '', null, 'Mozilla/5.0 (compatible; Googlebot/2.1)', ['en-US']), null);
  assert.equal(englishRedirectFor('/', '', null, 'facebookexternalhit/1.1', ['en-US']), null);
});

// Browser language gate: French-speaking browsers stay on the French URL; the
// English redirect only applies when no browser language is French.
const UA = 'Mozilla/5.0 (iPhone)';
test('French browser (fr-CA) stays on the French URL', () => {
  assert.equal(englishRedirectFor('/', '', null, UA, ['fr-CA']), null);
  assert.equal(englishRedirectFor('/services/pansements', '#x', null, UA, ['fr']), null);
});
test('French match is case-insensitive', () => {
  assert.equal(englishRedirectFor('/', '', null, UA, ['FR-fr']), null);
  assert.equal(englishRedirectFor('/', '', null, UA, ['Fr']), null);
});
test('English browser is redirected to /en', () => {
  assert.equal(englishRedirectFor('/', '', null, UA, ['en-US', 'en']), '/en');
  assert.equal(englishRedirectFor('/faq', '', null, UA, ['es-ES']), '/en/faq');
});
test('mixed list with French anywhere stays', () => {
  assert.equal(englishRedirectFor('/', '', null, UA, ['en-US', 'fr-CA']), null);
});
test('empty languages list keeps the old English-first behaviour', () => {
  assert.equal(englishRedirectFor('/', '', null, UA, []), '/en');
});
test('a language merely starting with "f" or containing "fr" is not French', () => {
  assert.equal(englishRedirectFor('/', '', null, UA, ['fi-FI']), '/en');
  assert.equal(englishRedirectFor('/', '', null, UA, ['en-FR']), '/en', 'region FR is not language fr');
});
test('saved preference still wins over browser language', () => {
  assert.equal(englishRedirectFor('/', '', 'FR', UA, ['en-US']), null);
  assert.equal(englishRedirectFor('/faq', '', 'EN', UA, ['fr-CA']), null);
});
test('bots are still never redirected, whatever the language', () => {
  assert.equal(englishRedirectFor('/', '', null, 'Mozilla/5.0 (compatible; Googlebot/2.1)', ['en-US']), null);
});
test('already on English never redirects, even for an English browser', () => {
  assert.equal(englishRedirectFor('/en/faq', '', null, UA, ['en-US']), null);
});
