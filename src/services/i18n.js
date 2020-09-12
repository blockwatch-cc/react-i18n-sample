// Copyright (c) 2020 Blockwatch Data Inc.
// Author: alex@blockwatch.cc
// License: MIT
//
import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import storage from 'local-storage-fallback';
import moment from 'moment';
import numeral from 'numeral';
import { initReactI18next } from 'react-i18next';
import { toShortHash, isDate, isNumber, toDuration, toMoment } from './utils';
import './numeral';

// import language definitions as needed
import 'moment/locale/de';
import 'moment/locale/fr';
import 'moment/locale/it';
import 'moment/locale/es';
import 'moment/locale/pt';
import 'moment/locale/hr';
import 'moment/locale/ru';
import 'moment/locale/sr-cyrl';
import 'moment/locale/zh-cn';
import 'moment/locale/zh-hk';
import 'moment/locale/ko';
import 'moment/locale/ja';
import 'moment/locale/vi';
import 'moment/locale/th';

// Hint: enable supported languages here or import from global settings
const DEFAULT_LANGS = 'en,de,fr,it,es,pt,sr,hr,ru,zh-hant,zh-hans,ko,ja,vi,th'.split(',');

// Detect browser languege and map to one of the supported langs
const detectLang = () => {
  var lang = navigator.language || 'en';
  switch (lang) {
    case 'zh':
    case 'zh-CN':
      return 'zh-hans';
    case 'zh-HK':
    case 'zh-TW':
      return 'zh-hant';
    case 'sr-cyrl':
      return 'sr';
    default:
      lang = lang.split('-')[0];
      if (DEFAULT_LANGS.indexOf(lang) < 0) {
        lang = 'en';
      }
  }
  return lang;
};

// Initialize language from local storage setting or detect
const initLang = () => {
  const stored = storage.getItem('lang');
  const lang = stored || detectLang();
  document.documentElement.lang = lang;
  return lang;
};

// correct moment.js German calendar entries
moment.updateLocale('de', {
  calendar: {
    sameDay: '[Heute um] LT [Uhr]',
    sameElse: 'L',
    nextDay: '[Morgen um] LT [Uhr]',
    nextWeek: 'dddd [um] LT [Uhr]',
    lastDay: '[Gestern um] LT [Uhr]',
    lastWeek: '[Letzten] dddd [um] LT [Uhr]',
  },
});

// initialize i18next
i18n
  .use(XHR)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/locales/{{ns}}/{{lng}}.json',
      addPath: '/locales/{{ns}}.missing.json',
      jsonIndent: 4,
    },
    debug: false,
    lng: initLang(),
    saveMissing: false,
    saveMissingTo: 'fallback',
    parseMissingKeyHandler: key => {
      console.log('Missing i18n key', key);
      return key;
    },
    fallbackLng: {
      'de-CH': ['fr', 'it'],
      'zh-Hant': ['zh-hans', 'en'],
      'zh-Hans': ['zh-hans', 'en'],
      es: ['fr', 'en'],
      default: ['en'],
    },
    cleanCode: true,
    load: 'currentOnly',
    lowerCaseLng: true,
    whitelist: DEFAULT_LANGS,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      format: function(value, format, lng) {
        switch (format) {
          case 'percent':
            return numeral(value).format(',.00 %');

          case 'percent100':
            return numeral(parseInt(value) / 10000).format(',.00 %');

          case 'date':
            return toMoment(value).format('ll');

          case 'datetime':
            return toMoment(value).format('ll HH:mm');

          case 'ago':
            return toMoment(value).fromNow();

          case 'duration':
            return toDuration(value, 's');

          case 'sign':
            return numeral(value).format('& ,.');

          case 'number':
            return numeral(value).format(',.');

          case 'shorthash':
            return toShortHash(value, 6, 4);

          // case 'alias':
          // TODO(echa): if desired add alias lookup system

          // case 'money':
          // TODO(echa): if desired add currency conversion system

          default:
            switch (true) {
              case isDate(value):
                return moment(value).format('ll HH:mm:ss');
              case isNumber(value):
                return numeral(value).format(',.');
              default:
                return value;
            }
        }
      },
    },
    react: {
      wait: false,
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'b', 'i', 'p'],
    },
    ns: ['common', 'fallback'],
    defaultNS: 'common',
    fallbackNS: 'fallback',
  });

// listen to language updates and sync across libraries
i18n.on('languageChanged', function(lng) {
  switch (lng) {
    case 'zh-hans':
      moment.locale('zh-cn');
      break;
    case 'zh-hant':
      moment.locale('zh-hk');
      break;
    case 'sr':
      moment.locale('sr-cyrl');
      break;
    default:
      moment.locale(lng);
  }
  numeral.locale(lng === 'en' ? 'en-En' : lng);
  storage.setItem('lang', lng);
  document.documentElement.lang = lng;
});

export default i18n;
