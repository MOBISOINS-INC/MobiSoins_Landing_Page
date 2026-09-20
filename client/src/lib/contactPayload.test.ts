// Run: npm test   (node --test)
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildContactPayload, isContactTopic, readContactFields } from './contactPayload.ts';

const form = (values: Record<string, unknown>) => ({ get: (name: string) => values[name] ?? null });

test('full submission: topic is tagged in the subject and fields are mapped', () => {
  const fields = readContactFields(
    form({ topic: 'nurse', firstname: ' Marie ', lastname: 'Tremblay', email: 'm@x.ca', subject: 'Rejoindre', message: 'Bonjour' }),
  );
  const payload = buildContactPayload(fields, 'KEY');
  assert.equal(payload.access_key, 'KEY');
  assert.equal(payload.subject, 'MobiSoins — [Infirmière] Rejoindre');
  assert.equal(payload.from_name, 'Marie Tremblay');
  assert.equal(payload.first_name, 'Marie');
  assert.equal(payload.topic, 'Infirmière');
  assert.equal(payload.email, 'm@x.ca');
  assert.equal(payload.message, 'Bonjour');
});

test('missing or tampered topic falls back to "other"', () => {
  assert.equal(readContactFields(form({})).topic, 'other');
  assert.equal(readContactFields(form({ topic: '<script>' })).topic, 'other');
  assert.equal(isContactTopic('patient'), true);
  assert.equal(isContactTopic(null), false);
});

test('empty names and subject get safe defaults, never "null" or "undefined"', () => {
  const payload = buildContactPayload(readContactFields(form({ topic: 'patient', firstname: '   ' })), 'KEY');
  assert.equal(payload.from_name, 'MobiSoins Contact Form');
  assert.equal(payload.subject, 'MobiSoins — [Patient] Nouveau message');
  assert.ok(!JSON.stringify(payload).match(/null|undefined/));
});

test('non-string form values (e.g. a File) are ignored', () => {
  const fields = readContactFields(form({ message: { name: 'file.pdf' }, email: 42 }));
  assert.equal(fields.message, '');
  assert.equal(fields.email, '');
});
