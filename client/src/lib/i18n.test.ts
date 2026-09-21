// Run: npm test. Locale routing: French at the root, English under /en.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { localeFromPath, localizePath, stripLocale } from './i18n.ts';

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
