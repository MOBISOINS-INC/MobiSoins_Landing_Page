'use client';

import NextLink from 'next/link';
import type { ComponentProps } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { localizePath } from '../../lib/i18n';

/** Drop-in for next/link that keeps visitors in their language (/x vs /en/x). */
export default function LocaleLink({ href, ...rest }: ComponentProps<typeof NextLink>) {
  const { language } = useLanguage();
  const localized = typeof href === 'string' ? localizePath(href, language) : href;
  return <NextLink href={localized} {...rest} />;
}
