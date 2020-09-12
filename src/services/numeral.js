import numeral from 'numeral';

// fix duplicate format registrations
numeral.register = function(type, name, format) {
  name = name.toLowerCase();
  this[type + 's'][name] = format;
  return format;
};

// register custom numeral.js locale definitions for supported languages
// copy and adapt from https://github.com/adamwdraper/Numeral-js
numeral.register('locale', 'en-EN', {
  abbreviations: {
    thousand: 'k',
    million: 'M',
    billion: 'B',
    trillion: 'T',
  },
  delimiters: {
    thousands: ',',
    decimal: '.',
  },
  ordinal: function(number) {
    var b = number % 10;
    return ~~((number % 100) / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
  },
  currency: {
    symbol: '$',
    name: 'USD',
    isFirst: true,
  },
});

numeral.register('locale', 'de', {
  abbreviations: {
    thousand: ' Tsd',
    million: ' Mio',
    billion: ' Mrd',
    trillion: ' Bil',
  },
  delimiters: {
    thousands: '.',
    decimal: ',',
  },
  ordinal: function(number) {
    return '.';
  },
  currency: {
    symbol: '€',
    name: 'EUR',
    isFirst: false,
  },
});

numeral.register('locale', 'it', {
  abbreviations: {
    thousand: 'mila',
    million: 'Mio',
    billion: 'Mrd',
    trillion: 'Bio',
  },
  delimiters: {
    thousands: '.',
    decimal: ',',
  },
  ordinal: function(number) {
    return 'º';
  },
  currency: {
    symbol: '€',
    name: 'EUR',
    isFirst: true,
  },
});

numeral.register('locale', 'ru', {
  abbreviations: {
    thousand: ' тыс.',
    million: ' млн.',
    billion: ' млрд.',
    trillion: ' трлн.',
  },
  delimiters: {
    thousands: ' ',
    decimal: '.',
  },
  ordinal: function(number) {
    return '.';
  },
  currency: {
    symbol: '$',
    name: 'USD',
    isFirst: false,
  },
});

numeral.register('locale', 'ko', {
  abbreviations: {
    thousand: '천',
    million: '백만',
    billion: '십억',
    trillion: '조',
  },
  delimiters: {
    thousands: ',',
    decimal: '.',
  },
  ordinal: function(number) {
    return '.';
  },
  currency: {
    symbol: '$',
    name: 'USD',
    isFirst: true,
  },
});

numeral.register('locale', 'zh-hans', {
  abbreviations: {
    thousand: '千',
    million: '百万',
    billion: '十亿',
    trillion: '兆',
  },
  delimiters: {
    thousands: ',',
    decimal: '.',
  },
  ordinal: function(number) {
    return '.';
  },
  currency: {
    symbol: '$',
    name: 'USD',
    isFirst: true,
  },
});

numeral.register('locale', 'zh-hant', {
  abbreviations: {
    thousand: '千',
    million: '百万',
    billion: '十亿',
    trillion: '兆',
  },
  delimiters: {
    thousands: ',',
    decimal: '.',
  },
  ordinal: function(number) {
    return '.';
  },
  currency: {
    symbol: '$',
    name: 'USD',
    isFirst: true,
  },
});

numeral.register('locale', 'ja', {
  abbreviations: {
    thousand: '千',
    million: '百万',
    billion: '十億',
    trillion: '兆',
  },
  delimiters: {
    thousands: ',',
    decimal: '.',
  },
  ordinal: function(number) {
    return '.';
  },
  currency: {
    symbol: '$',
    name: 'USD',
    isFirst: true,
  },
});

numeral.register('locale', 'es', {
  abbreviations: {
    thousand: 'k',
    million: 'mm',
    billion: 'b',
    trillion: 't',
  },
  delimiters: {
    thousands: '.',
    decimal: ',',
  },
  ordinal: function(number) {
    var b = number % 10;
    return b === 1 || b === 3 ? 'er' : b === 2 ? 'do' : b === 7 || b === 0 ? 'mo' : b === 8 ? 'vo' : b === 9 ? 'no' : 'to';
  },
  currency: {
    symbol: '€',
    name: 'EUR',
  },
});

numeral.register('locale', 'pt', {
  abbreviations: {
    thousand: 'k',
    million: 'm',
    billion: 'b',
    trillion: 't',
  },
  delimiters: {
    thousands: ' ',
    decimal: ',',
  },
  ordinal: function(number) {
    return 'º';
  },
  currency: {
    symbol: '€',
    name: 'EUR',
  },
});

numeral.register('locale', 'fr', {
  abbreviations: {
    thousand: 'k',
    million: 'm',
    billion: 'b',
    trillion: 't',
  },
  delimiters: {
    thousands: ' ',
    decimal: ',',
  },
  ordinal: function(number) {
    return number === 1 ? 'er' : 'ème';
  },
  currency: {
    symbol: '€',
    name: 'EUR',
  },
});

numeral.register('locale', 'vi', {
  delimiters: {
    thousands: '.',
    decimal: ',',
  },
  abbreviations: {
    thousand: ' nghìn',
    million: ' triệu',
    billion: ' tỷ',
    trillion: ' nghìn tỷ',
  },
  ordinal: function() {
    return '.';
  },
  currency: {
    symbol: '$',
    name: 'USD',
    isFirst: true,
  },
});

numeral.register('locale', 'th', {
  delimiters: {
    thousands: ',',
    decimal: '.',
  },
  abbreviations: {
    thousand: 'พัน',
    million: 'ล้าน',
    billion: 'พันล้าน',
    trillion: 'ล้านล้าน',
  },
  ordinal: function(number) {
    return '.';
  },
  currency: {
    symbol: '$',
    name: 'USD',
    isFirst: true,
  },
});

numeral.register('locale', 'sr', {
  abbreviations: {
    thousand: ' xиљ.',
    million: ' млн.',
    billion: ' млрд.',
    trillion: ' трлн.',
  },
  delimiters: {
    thousands: ' ',
    decimal: '.',
  },
  ordinal: function(number) {
    return '.';
  },
  currency: {
    symbol: '$',
    name: 'USD',
    isFirst: true,
  },
});

numeral.register('locale', 'hr', {
  delimiters: {
    thousands: '.',
    decimal: ',',
  },
  abbreviations: {
    thousand: 'tis.',
    million: 'mil.',
    billion: 'bil.',
    trillion: 'tril.',
  },
  ordinal: function() {
    return '.';
  },
  currency: {
    symbol: '$',
    name: 'USD',
    isFirst: true,
  },
});

numeral.register('format', 'sign', {
  regexps: {
    format: /(&)/,
  },
  format: function(value, format, roundingFunction) {
    var output;
    const isPositive = value > 0;
    format = format.replace('&', '');

    const outputArr = numeral._.numberToFormat(value, format, roundingFunction).split(' ');
    output = outputArr[0].replace(/(\.[0-9]*[1-9])0+$|\.0*$/, '$1');
    output += outputArr[1] ? ` ${outputArr[1]}` : '';
    output = numeral._.includes(format, '-') && !value ? '-' : output;
    output = isPositive ? '+' + output : output;
    return output;
  },
});

numeral.register('format', 'percent', {
  regexps: {
    format: /(%)/,
    unformat: /(%)/,
  },
  format: function(value, format, roundingFunction) {
    var space = numeral._.includes(format, ' %') ? ' ' : '',
      output;

    if (numeral.options.scalePercentBy100) {
      value = value * 100;
    }

    // check for space before %
    const roundingFormat = format.replace(/\s?%/, '').replace('sign', '');
    output = numeral._.numberToFormat(value, roundingFormat, roundingFunction);

    if (numeral._.includes(output, ')')) {
      output = output.split('');

      output.splice(-1, 0, space + '%');

      output = output.join('');
    } else {
      output = output + space + '%';
    }
    const isSign = value < 0 || numeral._.includes(format, '&');
    output = (isSign && value >= 0 ? '+' : value < 0 ? '' : '') + output;
    return output;
  },
  unformat: function(string) {
    var number = numeral._.stringToNumber(string);
    if (numeral.options.scalePercentBy100) {
      return number * 0.01;
    }
    return number;
  },
});
