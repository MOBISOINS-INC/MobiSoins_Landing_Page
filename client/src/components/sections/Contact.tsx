'use client';

import { useState } from 'react';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { useLanguage } from '../../contexts/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import { EYEBROW, H1, LEAD, CARD, FRAME } from '../layout/PageShell';

const FIELD =
  'flex h-11 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-[14.5px] text-white placeholder:text-white/40 transition-colors focus-visible:outline-none focus-visible:border-white/30 focus-visible:ring-1 focus-visible:ring-white/40 disabled:cursor-not-allowed disabled:opacity-50';

const RawInput = ({ className = '', ...props }: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input className={`${FIELD} ${className}`} {...props} />
);

const LABEL = 'text-[13px] font-medium text-white';

export const Contact = () => {
  const { t } = useLanguage();
  const { ref, style } = useReveal();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError('');
    const form = e.currentTarget;
    const data = new FormData(form);

    const accessKey = process.env.NEXT_PUBLIC_FORM_ACCESS_KEY;
    if (!accessKey) {
      console.error('[contact] NEXT_PUBLIC_FORM_ACCESS_KEY is not set; form cannot submit');
      setError(t('contact.errorConfig'));
      setSending(false);
      return;
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `MobiSoins — ${data.get('subject') || 'Nouveau message'}`,
          from_name: `${data.get('firstname') ?? ''} ${data.get('lastname') ?? ''}`.trim() || 'MobiSoins Contact Form',
          first_name: data.get('firstname'),
          last_name: data.get('lastname'),
          email: data.get('email'),
          message: data.get('message'),
        }),
      });
      const result = await res.json();
      if (result.success) {
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

  const contactDetails = [
    {
      labelKey: 'contact.address',
      value: '8457 Blvd Newman Bur 118, Lasalle, QC H8N 0A2',
      href: 'https://maps.google.com/?q=8457+Blvd+Newman+Bur+118,+Lasalle,+QC+H8N+0A2',
      external: true,
    },
    { labelKey: 'contact.phone', value: '(263) 588-6196', href: 'tel:+12635886196' },
    { labelKey: 'contact.email', value: 'info@mobisoins.com', href: 'mailto:info@mobisoins.com' },
    { labelKey: 'contact.web', value: 'mobisoins.com', href: 'https://mobisoins.com', external: true },
  ];

  return (
    <section id="contact" className="pt-12 pb-20 sm:pt-16 lg:pt-24 lg:pb-28">
      <div className="container-custom">
        <div ref={ref} style={style} className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Left: title, photo, details */}
          <div className="flex flex-col gap-8">
            <div>
              <span className={EYEBROW}>{t('contact.detailsTitle')}</span>
              <h1 className={`${H1} mt-5`}>{t('contact.title')}</h1>
              <p className={`${LEAD} mt-5 max-w-[480px]`}>{t('contact.description')}</p>
            </div>

            <div className={`${FRAME} hidden aspect-[16/9] sm:block`}>
              <img
                src="/nurses/nurse-09.jpeg"
                alt="Infirmière MobiSoins prodiguant des soins à domicile"
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: '55% 32%' }}
              />
            </div>

            <dl className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
              {contactDetails.map((item) => (
                <div key={item.labelKey} className="border-t border-white/12 py-4">
                  <dt className="text-[12px] font-medium uppercase tracking-[0.14em] text-white/60">
                    {t(item.labelKey)}
                  </dt>
                  <dd className="mt-1.5">
                    <a
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className="text-[15px] text-white underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white"
                    >
                      {item.value}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} className={`${CARD} flex flex-col gap-5 p-6 sm:p-8 lg:p-10`}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="firstname" className={LABEL}>{t('contact.firstName')}</Label>
                <RawInput type="text" id="firstname" name="firstname" placeholder={t('contact.firstNamePlaceholder')} required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="lastname" className={LABEL}>{t('contact.lastName')}</Label>
                <RawInput type="text" id="lastname" name="lastname" placeholder={t('contact.lastNamePlaceholder')} required />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email" className={LABEL}>{t('contact.emailLabel')}</Label>
              <RawInput type="email" id="email" name="email" placeholder={t('contact.emailPlaceholder')} required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="subject" className={LABEL}>{t('contact.subject')}</Label>
              <RawInput type="text" id="subject" name="subject" placeholder={t('contact.subjectPlaceholder')} required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="message" className={LABEL}>{t('contact.message')}</Label>
              <Textarea
                id="message"
                name="message"
                placeholder={t('contact.messagePlaceholder')}
                className="min-h-[140px] rounded-xl border-white/15 bg-white/5 text-[14.5px] text-white placeholder:text-white/40 focus-visible:border-white/30 focus-visible:ring-1 focus-visible:ring-white/40 focus-visible:bg-white/5 backdrop-blur-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={sending || sent}
              className="bg-white text-ink-panel shadow-[0_10px_30px_-10px_rgba(0,0,0,.7)] transition-transform hover:-translate-y-0.5 mt-1 h-12 w-full rounded-full text-[15px] font-medium disabled:cursor-not-allowed disabled:opacity-60"
            >
              {sent ? t('contact.sent') : sending ? t('contact.sending') : t('contact.send')}
            </button>

            {sent && (
              <p className="text-center text-[14px] font-medium text-sage" role="status">
                {t('contact.sentConfirm')}
              </p>
            )}
            {error && (
              <p className="text-center text-[14px] font-medium text-red-300" role="alert">
                {error}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
