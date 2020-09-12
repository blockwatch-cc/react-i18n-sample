// Copyright (c) 2020 Blockwatch Data Inc.
// Author: alex@blockwatch.cc
// License: MIT
//
import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { Link } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';
import { isDefined, isArray, isBool, isDate, isNumber, isString, toDuration, toCalendar, toShortHash } from '../services/utils';

// Render localized content.
//
// Supported types
// - translated text from translation key, e.g. `tk_key_name`
// - numbers
// - dates and datetime with time-zone support
// - boolean
//
// Extra (optional) featurss
// - in-app and external links
// - interpolation using `i18d` data object
// - HTML tag selection using `as` parameter
// - number and date `format` strings for moment.js and numeral.js
// - special formats for `ago` (moment.fromNow()) and `duration`
//
// ## Links
// Enabled by setting property `to` to either a string or array. Arrays are
// treated as path components and converted to a stringified href. When `to`
// is set the HTML tag becomes `<a>` regardless of property `as`.
//
// Link options passed via `opts` (object) are added to the anchor tag. Supported
// options are
// - `extern` (bool) render as external 3rd party link
// - `target` (string) use custom window target
// - `rel` (string) use custom link relation, defaults to `noopener noreferrer`
// - `href` (string) use custom href, defaults to contents of `to`
//
export const I18nView = ({ as = 'span', i18d, format = ',.', opts = {}, to, children, ...props }) => {
  const [t] = useTranslation();
  var render = children;
  switch (true) {
    case isString(children):
      // auto-translate lookup keys
      if (children.startsWith('tk_')) {
        render = (<Trans>{t(children, i18d)}</Trans>);
      }
      break;
    case isBool(children):
      render = children.toString();
      break;
    case isNumber(children):
      if (format === 'duration') {
        render = toDuration(children, opts.base, opts.zero, opts.prefix, opts.stop, opts.trim);
      } else {
        const fmt = numeral(children).format(format, Math.floor);
        render = fmt.indexOf('NaN') === 0 ? numeral(0).format(format, Math.floor) : fmt;
      }
      break;
    case isDate(children):
      switch (format) {
      case 'ago':
        render = moment(children).fromNow();
        break;
      case 'calendar':
      console.log("Cal", children)
        render = toCalendar(children, opts.prefix, opts.short, opts.nowdiff);
        break;
      default:
        render = moment.parseZone(children).format(format || 'lll');
      };
      break;
      // no default
  }

  if (!!to) {
    as = 'a';
  }

  if (as === 'a') {
    // allow strings and arrays as link target, so `to="/page/1" and `to={['page', 1]}` work
    let target = isArray(to) ? to.join('/') : to;
    if (opts.extern) {
      // secure external links by default
      props.target = opts.target || '_blank';
      props.rel = opts.rel || 'noopener noreferrer';
      props.href = opts.href || target;
      return (<a {...props}>{render}</a>);
    } else {
      // in-app links
      return (<Link to={target} {...props}>{render}</Link>);
    }
  } else {
    return (<span as={as} {...props}>{render}</span>);
  }
};


// Render translated text or links.
export const TextView = ({ v, children, ...props }) => {
  const value = isDefined(v) ? v : children;
  return (
    <I18nView {...props}>
      {value}
    </I18nView>
  );
};

// Render blockchain hash with optional shortening.
// short can be a numeric array of form `[left, right]` that defines
// how many characters to display at string start/end
//
// Examples
//   <HashView v={model.address} />
//   <HashView>{model.address}</HashView>
//   <HashView v={model.address} short={6} />
//   <HashView v={model.address} short={[6,4]} />
//
export const HashView = ({ v, short, children, ...props }) => {
  var value = isDefined(v) ? v : children;
  value = short ? toShortHash(value, short[0] || short, short[1]) : value;
  return (
    <I18nView {...props}>
      {value}
    </I18nView>
  );
};


// Render short blockchain address. Convenience wrapper for HashView.
//
export const AddressView = ({ v, short = [6, 4], children, ...props }) => {
  return <HashView v={v} short={short} {...props}>{children}</HashView>;
};

// Render localized date.
//
export const DateView = ({ v, format = 'll', children, ...props }) => {
  var value = isDefined(v) ? new Date(v) : new Date(children);
  return (
    <I18nView format={format} {...props}>
      {value}
    </I18nView>
  );
};

// Render localized datetime.
//
export const DateTimeView = ({ v, format = 'll HH:mm', children, ...props }) => {
  var value = isDefined(v) ? new Date(v) : new Date(children);
  return (
    <I18nView format={format} {...props}>
      {value}
    </I18nView>
  );
};

// Render localized duration.
//
export const DurationView = ({ v, format = 'duration', children, ...props }) => {
  return (
    <I18nView dformat={format} {...props}>
      {v}
    </I18nView>
  );
};

// Render localized number.
//
// Supports optional `max` and `zero` value overrides:
//   <NumberView v={110} max={100} />  // renders `100+`
//   <NumberView v={0} zero="-" />  // renders `-`
//
export const NumberView = ({ v, format = ',.', max, zero, children, ...props }) => {
  var value = isDefined(v) ? v : children;
  value = !max || value < max ? value : max + '+';
  value = zero && value === 0 ? zero : value;
  return (
    <I18nView format={format} {...props}>
      {value}
    </I18nView>
  );
};

// Render localized percentage.
//
export const PercentView = ({ v, format = ',. %', children, ...props }) => {
  var value = isDefined(v) ? v : children;
  return (
    <I18nView format={format} {...props}>
      {value}
    </I18nView>
  );
};


