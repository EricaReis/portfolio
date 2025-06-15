import { languages } from '@/constants/language';
import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: languages,

  defaultLocale: 'en'
});