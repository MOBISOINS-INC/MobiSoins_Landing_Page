'use client';

import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import { ArrowRight, Eyebrow } from '../ui/editorial';
import { CONTACT_TOPICS, buildContactPayload, readContactFields } from '../../lib/contactPayload';
import type { ContactTopic } from '../../lib/contactPayload';

const FIELD =
  'w-full rounded-[12px] border border-rule bg-white px-3.5 text-[16px] sm:rounded-[10px] sm:px-4 text-ink placeholder:text-ink-faint sm:text-[15px] transition-colors focus-visible:border-ink focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink disabled:cursor-not-allowed disabled:opacity-50';
const LABEL = 'text-[13px] font-medium text-ink';

const TOPIC_KEY: Record<ContactTopic, string> = {
  patient: 'contact.topicPatient',
  nurse: 'contact.topicNurse',
  partner: 'contact.topicPartner',
  other: 'contact.topicOther',
};

const CONTACT_DETAILS = [
  { labelKey: 'contact.email', value: 'info@mobisoins.com', href: 'mailto:info@mobisoins.com' },
  { labelKey: 'contact.phone', value: '(263) 588-6196', href: 'tel:+12635886196' },
  { labelKey: 'contact.fax', value: '(800) 307-7231', href: 'tel:+18003077231' },
  {
    labelKey: 'contact.address',
    value: '8457 Blvd Newman Bur 118, Lasalle, QC H8N 0A2',
    href: 'https://maps.google.com/?q=8457+Blvd+Newman+Bur+118,+Lasalle,+QC+H8N+0A2',
    external: true,
  },
  { labelKey: 'contact.web', value: 'mobisoins.com', href: 'https://mobisoins.com', external: true },
];

export const Contact = () => {
  const { t } = useLanguage();
  const { ref, style } = useReveal();
  const [topic, setTopic] = useState<ContactTopic>('patient');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError('');
    const form = e.currentTarget;
    const fields = readContactFields(new FormData(form));

    const accessKey = process.env.NEXT_PUBLIC_FORM_ACCESS_KEY;
    if (!accessKey) {
      console.error('[contact] NEXT_PUBLIC_FORM_ACCESS_KEY is not set; form cannot submit');
      setError(t('contact.errorConfig'));
      setSending(false);
      return;
    }

    console.info('[contact] submitting', { topic: fields.topic });
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(buildContactPayload(fields, accessKey)),
      });
      const result = await res.json();
      if (result.success) {
        console.info('[contact] submission accepted', { topic: fields.topic });
        setSent(true);
        form.reset();
      } else {
        console.error('[contact] submission rejected', result);
        setError(result.message || t('contact.errorGeneric'));
      }
    } catch (err) {
      console.error('[contact] submission failed', err);
      setError(t('contact.errorGeneric'));
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact">
      {/* Title band */}
      <div className="bg-ink-deep">
        <div className="container-custom py-14 sm:py-20 lg:py-24">
          <Eyebrow onDark>{t('contact.eyebrow')}</Eyebrow>
          <h1 className="mt-5 max-w-[760px] font-display text-[44px] font-light leading-[1.04] tracking-[-0.025em] text-white sm:text-[60px] lg:text-[76px]">
            {t('contact.title')}
          </h1>
          <p className="mt-5 max-w-[620px] text-[16.5px] leading-[1.6] text-white/75 sm:mt-6 sm:text-[19px]">
            {t('contact.description')}
          </p>
        </div>
      </div>

      <div className="bg-white py-16 sm:py-20 lg:py-24">
        <div
          ref={ref}
          style={style}
          className="container-custom grid gap-12 sm:gap-14 lg:grid-cols-[1.4fr_1fr] lg:items-start lg:gap-20"
        >
          {/* Form */}
          {sent ? (
            <div className="rounded-2xl bg-leaf-tint p-8 sm:p-12" role="status">
              <Eyebrow>{t('contact.sent')}</Eyebrow>
              <p className="mt-4 font-display text-[30px] font-light leading-[1.15] tracking-[-0.02em] text-ink sm:text-[40px]">
                {t('contact.sentConfirm')}
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-8 inline-flex items-center gap-2 text-[15px] font-medium text-ink underline decoration-rule underline-offset-4 transition-colors hover:decoration-ink"
              >
                {t('contact.sendAnother')}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-6">
              <h2 className="font-display text-[30px] font-light leading-[1.12] tracking-[-0.02em] text-ink sm:text-[38px]">
                {t('contact.formTitle')}
              </h2>

              {/* Topic */}
              <fieldset>
                <legend className={LABEL}>{t('contact.topicLabel')}</legend>
                <input type="hidden" name="topic" value={topic} />
                <div className="mt-2.5 grid grid-cols-2 gap-2 sm:mt-3 sm:flex sm:flex-wrap">
                  {CONTACT_TOPICS.map((value) => (
                    <button
                      key={value}
                      type="button"
                      aria-pressed={topic === value}
                      onClick={() => setTopic(value)}
                      className={`h-11 rounded-full border px-3 text-[14px] font-medium transition-colors sm:px-5 sm:text-[14.5px] ${
                        topic === value
                          ? 'border-ink bg-ink text-white'
                          : 'border-rule bg-white text-ink hover:border-leaf hover:bg-leaf-tint'
                      }`}
                    >
                      {t(TOPIC_KEY[value])}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="grid grid-cols-2 gap-3 sm:gap-5">
                <div className="grid gap-1.5 sm:gap-2">
                  <label htmlFor="firstname" className={LABEL}>{t('contact.firstName')}</label>
                  <input type="text" id="firstname" name="firstname" autoComplete="given-name" placeholder={t('contact.firstNamePlaceholder')} className={`${FIELD} h-12 sm:h-[52px]`} required />
                </div>
                <div className="grid gap-1.5 sm:gap-2">
                  <label htmlFor="lastname" className={LABEL}>{t('contact.lastName')}</label>
                  <input type="text" id="lastname" name="lastname" autoComplete="family-name" placeholder={t('contact.lastNamePlaceholder')} className={`${FIELD} h-12 sm:h-[52px]`} required />
                </div>
              </div>

              <div className="grid gap-1.5 sm:gap-2">
                <label htmlFor="email" className={LABEL}>{t('contact.emailLabel')}</label>
                <input type="email" id="email" name="email" autoComplete="email" placeholder={t('contact.emailPlaceholder')} className={`${FIELD} h-12 sm:h-[52px]`} required />
              </div>

              <div className="grid gap-1.5 sm:gap-2">
                <label htmlFor="subject" className={LABEL}>{t('contact.subject')}</label>
                <input type="text" id="subject" name="subject" placeholder={t('contact.subjectPlaceholder')} className={`${FIELD} h-12 sm:h-[52px]`} required />
              </div>

              <div className="grid gap-1.5 sm:gap-2">
                <label htmlFor="message" className={LABEL}>{t('contact.message')}</label>
                <textarea id="message" name="message" rows={5} placeholder={t('contact.messagePlaceholder')} className={`${FIELD} min-h-[120px] resize-y py-3 leading-[1.6] sm:min-h-[150px] sm:py-3.5`} required />
              </div>

              <div className="mt-1 flex flex-col gap-3 sm:mt-0 sm:flex-row sm:items-center sm:gap-6">
                <button
                  type="submit"
                  disabled={sending}
                  className="cta-navy inline-flex h-12 w-full sm:h-[52px] items-center justify-center gap-3 rounded-[10px] px-7 text-[15px] font-medium disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {sending ? t('contact.sending') : t('contact.send')}
                  {!sending && <ArrowRight />}
                </button>
                <p className="text-center text-[13.5px] leading-[1.5] text-ink-soft sm:text-left">{t('contact.responseTime')}</p>
              </div>

              {error && (
                <p className="rounded-[10px] border border-red-200 bg-red-50 px-4 py-3 text-[14px] font-medium text-red-700" role="alert">
                  {error}
                </p>
              )}
            </form>
          )}

          {/* Details */}
          <aside className="lg:sticky lg:top-32">
            <div className="flex flex-row-reverse overflow-hidden rounded-[20px] border border-rule bg-white sm:rounded-2xl lg:block">
              {/* Photo: narrow column on the right below lg, full-width portrait on lg+ */}
              <div className="relative w-[38%] shrink-0 self-stretch lg:aspect-[1194/1600] lg:w-auto lg:self-auto">
                <img
                  src="/nurses/contact-nurse-2.jpg"
                  alt={t('contact.photoAlt')}
                  width={1194}
                  height={1600}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-[55%_30%] lg:object-center"
                />
              </div>
              <div className="min-w-0 flex-1 p-5 sm:p-6 lg:p-8">
                <Eyebrow>{t('contact.detailsTitle')}</Eyebrow>
                <dl className="mt-2 divide-y divide-rule lg:mt-3">
                  {CONTACT_DETAILS.map((item) => (
                    <div key={item.labelKey} className="py-2.5 lg:py-4">
                      <dt className="text-[11.5px] text-ink-soft lg:text-[12.5px]">{t(item.labelKey)}</dt>
                      <dd className="mt-0.5 lg:mt-1">
                        <a
                          href={item.href}
                          target={item.external ? '_blank' : undefined}
                          rel={item.external ? 'noopener noreferrer' : undefined}
                          className="break-words text-[14.5px] font-medium leading-[1.35] text-ink underline decoration-transparent underline-offset-4 transition-colors hover:decoration-ink lg:text-[16px] lg:leading-[1.4]"
                        >
                          {item.value}
                        </a>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="mt-4 rounded-[20px] border border-rule p-6 sm:mt-5 sm:rounded-2xl sm:p-7">
              <Eyebrow>{t('contact.emergencyTitle')}</Eyebrow>
              <p className="mt-3 text-[14.5px] leading-[1.65] text-ink-soft">
                {t('contact.emergencyText')}{' '}
                <a href="tel:911" className="font-semibold text-ink underline decoration-rule underline-offset-4">911</a>
                {' · '}
                <a href="tel:811" className="font-semibold text-ink underline decoration-rule underline-offset-4">Info-Santé 811</a>
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
