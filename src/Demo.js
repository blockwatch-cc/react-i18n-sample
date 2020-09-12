import React from 'react';
import { withTranslation } from 'react-i18next';
import './Demo.css';
import { TextView, AddressView, HashView, NumberView, PercentView, DateView, DateTimeView } from './components/I18nViews'

const Demo = ({ i18n }) => {
  const pairs = {
    sushi_eth: '0x795065dcc9f64b5614c407a6efdc400da6221fb0'
  };
  return (
    <>
      <h2><TextView v="tk_language"/></h2>
      {i18n.options.whitelist.map((lang, index) => {
        if (lang === 'cimode') return null;
        return (
          <button
            onClick={e => {
              i18n.changeLanguage(lang);
            }}
            className={lang === i18n.language ? 'active' : ''}
            key={index}
          >
            <TextView>{'tk_lang_' + lang}</TextView>
          </button>
        );
      })}

      <h2><TextView v="tk_text"/></h2>
      <section>
        <div className="col">
          <pre><code>{`# Translated Text
<TextView v="tk_sample_text"/>
<TextView>tk_sample_text</TextView>

# Interpolated Text
<TextView v="tk_ipol" i18d={{address: pairs.sushi_eth}} />

# Singular and Plural Text (optional interpolation)
<TextView v="tk_count" i18d={{count: 1}} />
<TextView v="tk_count" i18d={{count: 1000}} />

# Links
<TextView v="tk_link_home" to="/home" />
<TextView v="tk_link_pair" to={['pair', pairs.sushi_eth]} />
<TextView v="tk_link_ext" to="https://twitter.com/SushiSwap" opts={{extern: 1}} />

# Addresses (default shortening is 6,4)
<AddressView v={pairs.sushi_eth} />
<HashView>{pairs.sushi_eth}</HashView>
<HashView v={pairs.sushi_eth} short={8} />
<HashView v={pairs.sushi_eth} short={[8,4]} />`}</code></pre>
        </div>
        <div className="col pad">
          <br/>
          <TextView v="tk_sample_text"/>
          <TextView>tk_sample_text</TextView>
          <br/>
          <TextView v="tk_ipol" i18d={{address: pairs.sushi_eth}} />
          <br/>
          <TextView v="tk_count" i18d={{count: 1}} />
          <TextView v="tk_count" i18d={{count: 1000}} />
          <br/>
          <TextView v="tk_link_home" to="/home" />
          <TextView v="tk_link_pair" to={['pair', pairs.sushi_eth]} />
          <TextView v="tk_link_ext" to="https://twitter.com/SushiSwap" opts={{extern: 1}} />
          <br/>
          <AddressView v={pairs.sushi_eth} />
          <HashView>{pairs.sushi_eth}</HashView>
          <HashView v={pairs.sushi_eth} short={8} />
          <HashView v={pairs.sushi_eth} short={[8,4]} />
        </div>
      </section>

      <h2><TextView v="tk_numbers"/></h2>
      <section>
        <div className="col">
          <pre><code>{`# Number Formatting
<NumberView v={73.57583} />
<NumberView v={73.57583} format=",.00000" />
<NumberView v={1308123009} />
<NumberView v={1308123009} format=",.00 a" />
<NumberView v={106868906.47466855} format=",.0000" />

# Number with Max Option
<NumberView v={110} max={100} />

# Number with Zero Option
<NumberView v={0} zero="-" />

# Percentages
<PercentView v={0.015} />`}</code></pre>
        </div>
        <div className="col pad">
          <NumberView v={73.57583} />
          <NumberView v={73.57583} format=",.00000" />
          <NumberView v={1308123009} />
          <NumberView v={1308123009} format=",.00 a" />
          <NumberView v={106868906.47466855} format=",.0000" />
          <br/>
          <NumberView v={110} max={100} />
          <br/>
          <NumberView v={0} zero="-" />
          <br/>
          <PercentView v={0.015} />
        </div>
      </section>

      <h2><TextView v="tk_dates"/></h2>
      <section>
        <div className="col">
          <pre><code>{`# Default Date Formatting
<DateView v="2020-09-01T12:00:00Z" />
<DateView v={new Date()} />

# Default Datetime Formatting
<DateTimeView v="2020-09-01T12:00:00Z" />
<DateTimeView v={new Date()} />

# Custom Format
<DateTimeView v={new Date()} format="MMMM Do YYYY, h:mm:ss A" />

# Ago
<DateTimeView v="2020-09-01T12:00:00Z" format="ago" />

# Duration
<TextView v={12345} format="duration" opts={{base:'s', stop:'m'}} />

# Calendar
<DateTimeView v={(new Date().getTime()) + 2*86400000} format="calendar" />`}</code></pre>
        </div>
        <div className="col pad">
          <br/>
          <DateView v="2020-09-01T12:00:00Z" />
          <DateView v={new Date()} />
          <br/>
          <DateTimeView v="2020-09-01T12:00:00Z" />
          <DateTimeView v={new Date()} />
          <br/>
          <DateTimeView v={new Date()} format="MMMM Do YYYY, h:mm:ss A" />
          <br/>
          <DateTimeView v="2020-09-01T12:00:00Z" format="ago" />
          <br/>
          <TextView v={12345} format="duration" opts={{base:'s', stop:'s'}} />
          <br/>
          <DateTimeView v={new Date().getTime() + 2*86400000} format="calendar" />
        </div>
      </section>
    </>
  );
};

export default withTranslation()(Demo);