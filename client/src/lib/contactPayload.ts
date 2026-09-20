/**
 * Builds the Web3Forms payload for the contact form. Kept free of React and the
 * DOM so it can be tested with `node --test`.
 */

export const CONTACT_TOPICS = ['patient', 'nurse', 'partner', 'other'] as const;
export type ContactTopic = (typeof CONTACT_TOPICS)[number];

export interface ContactFields {
  topic: ContactTopic;
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const TOPIC_LABEL: Record<ContactTopic, string> = {
  patient: 'Patient',
  nurse: 'Infirmière',
  partner: 'Partenaire',
  other: 'Autre',
};

export const isContactTopic = (value: unknown): value is ContactTopic =>
  typeof value === 'string' && (CONTACT_TOPICS as readonly string[]).includes(value);

const clean = (value: unknown) => (typeof value === 'string' ? value.trim() : '');

/** Reads the form's fields; an unknown or missing topic falls back to "other". */
export const readContactFields = (data: { get(name: string): unknown }): ContactFields => {
  const topic = data.get('topic');
  return {
    topic: isContactTopic(topic) ? topic : 'other',
    firstName: clean(data.get('firstname')),
    lastName: clean(data.get('lastname')),
    email: clean(data.get('email')),
    subject: clean(data.get('subject')),
    message: clean(data.get('message')),
  };
};

export const buildContactPayload = (fields: ContactFields, accessKey: string) => ({
  access_key: accessKey,
  subject: `MobiSoins — [${TOPIC_LABEL[fields.topic]}] ${fields.subject || 'Nouveau message'}`,
  from_name: `${fields.firstName} ${fields.lastName}`.trim() || 'MobiSoins Contact Form',
  topic: TOPIC_LABEL[fields.topic],
  first_name: fields.firstName,
  last_name: fields.lastName,
  email: fields.email,
  message: fields.message,
});
