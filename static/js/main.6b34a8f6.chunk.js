(this["webpackJsonpreact-i18n-sample"]=this["webpackJsonpreact-i18n-sample"]||[]).push([[0],{34:function(e,t,a){e.exports=a(75)},39:function(e,t,a){},40:function(e,t,a){},59:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(26),i=a.n(l),o=(a(39),a(40),a(11)),s=a(27),c=a(19),m=a.n(c),u=a(2),d=a.n(u),h=a(1),f=a.n(h),v=a(9),b=function(e){return"string"===typeof e||e instanceof String},p=function(e){return Array.isArray(e)},E=function(e){return!isNaN(parseFloat(e))&&!isNaN(e-0)},g=function(e){return e instanceof Date},w=function(e){return"undefined"!==typeof e};function k(e){switch(!0){case b(e):return d.a.parseZone(e);case g(e):return d()(e);default:return d()(new Date(e))}}var _=36e5,D=864e5;function y(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:6e4;if(new Date(e)-new Date<n)return o.a.t("tk_now");var r=[d()(e).fromNow(!!a)];return t&&r.unshift(t),r.join(" ")}function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ms",a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3?arguments[3]:void 0,r=arguments.length>4?arguments[4]:void 0,l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(b(e))e=new Date(e)-new Date;else if(g(e))e-=new Date;else switch(t){case"s":e*=1e3;break;case"m":e*=6e4;break;case"h":e*=_}e=e<0?0:e;var i=Math.floor(e/D),s=Math.floor((e-i*D)/_),c=Math.floor((e-i*D-s*_)/6e4),m=Math.floor(e/1e3%60),u=Math.floor(e%1e3),d=o.a.t("tk_duration_unit_map").split(" ");r="smhd".indexOf(r);var h=[];return i>0&&h.push(i+d[0]),r<3&&(s>0||a)&&h.push(s+d[1]),r<2&&(c>0||a)&&h.push(c+d[2]),r<1&&(m>0||a)&&h.push(m+d[3]),r<0&&u>0&&h.push(u+d[4]),l>0&&h.splice(l),h.length||h.push("0"),(n=n||"")+h.join(" ")}function T(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4;return e?(a=a||4,0===t||e.length<=t+a?e:"".concat(e.slice(0,t),"...").concat(e.slice(-a))):e}f.a.register=function(e,t,a){return t=t.toLowerCase(),this[e+"s"][t]=a,a},f.a.register("locale","en-EN",{abbreviations:{thousand:"k",million:"M",billion:"B",trillion:"T"},delimiters:{thousands:",",decimal:"."},ordinal:function(e){var t=e%10;return 1===~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th"},currency:{symbol:"$",name:"USD",isFirst:!0}}),f.a.register("locale","de",{abbreviations:{thousand:" Tsd",million:" Mio",billion:" Mrd",trillion:" Bil"},delimiters:{thousands:".",decimal:","},ordinal:function(e){return"."},currency:{symbol:"\u20ac",name:"EUR",isFirst:!1}}),f.a.register("locale","it",{abbreviations:{thousand:"mila",million:"Mio",billion:"Mrd",trillion:"Bio"},delimiters:{thousands:".",decimal:","},ordinal:function(e){return"\xba"},currency:{symbol:"\u20ac",name:"EUR",isFirst:!0}}),f.a.register("locale","ru",{abbreviations:{thousand:" \u0442\u044b\u0441.",million:" \u043c\u043b\u043d.",billion:" \u043c\u043b\u0440\u0434.",trillion:" \u0442\u0440\u043b\u043d."},delimiters:{thousands:" ",decimal:"."},ordinal:function(e){return"."},currency:{symbol:"$",name:"USD",isFirst:!1}}),f.a.register("locale","ko",{abbreviations:{thousand:"\ucc9c",million:"\ubc31\ub9cc",billion:"\uc2ed\uc5b5",trillion:"\uc870"},delimiters:{thousands:",",decimal:"."},ordinal:function(e){return"."},currency:{symbol:"$",name:"USD",isFirst:!0}}),f.a.register("locale","zh-hans",{abbreviations:{thousand:"\u5343",million:"\u767e\u4e07",billion:"\u5341\u4ebf",trillion:"\u5146"},delimiters:{thousands:",",decimal:"."},ordinal:function(e){return"."},currency:{symbol:"$",name:"USD",isFirst:!0}}),f.a.register("locale","zh-hant",{abbreviations:{thousand:"\u5343",million:"\u767e\u4e07",billion:"\u5341\u4ebf",trillion:"\u5146"},delimiters:{thousands:",",decimal:"."},ordinal:function(e){return"."},currency:{symbol:"$",name:"USD",isFirst:!0}}),f.a.register("locale","ja",{abbreviations:{thousand:"\u5343",million:"\u767e\u4e07",billion:"\u5341\u5104",trillion:"\u5146"},delimiters:{thousands:",",decimal:"."},ordinal:function(e){return"."},currency:{symbol:"$",name:"USD",isFirst:!0}}),f.a.register("locale","es",{abbreviations:{thousand:"k",million:"mm",billion:"b",trillion:"t"},delimiters:{thousands:".",decimal:","},ordinal:function(e){var t=e%10;return 1===t||3===t?"er":2===t?"do":7===t||0===t?"mo":8===t?"vo":9===t?"no":"to"},currency:{symbol:"\u20ac",name:"EUR"}}),f.a.register("locale","pt",{abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},delimiters:{thousands:" ",decimal:","},ordinal:function(e){return"\xba"},currency:{symbol:"\u20ac",name:"EUR"}}),f.a.register("locale","fr",{abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},delimiters:{thousands:" ",decimal:","},ordinal:function(e){return 1===e?"er":"\xe8me"},currency:{symbol:"\u20ac",name:"EUR"}}),f.a.register("locale","vi",{delimiters:{thousands:".",decimal:","},abbreviations:{thousand:" ngh\xecn",million:" tri\u1ec7u",billion:" t\u1ef7",trillion:" ngh\xecn t\u1ef7"},ordinal:function(){return"."},currency:{symbol:"$",name:"USD",isFirst:!0}}),f.a.register("locale","th",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"\u0e1e\u0e31\u0e19",million:"\u0e25\u0e49\u0e32\u0e19",billion:"\u0e1e\u0e31\u0e19\u0e25\u0e49\u0e32\u0e19",trillion:"\u0e25\u0e49\u0e32\u0e19\u0e25\u0e49\u0e32\u0e19"},ordinal:function(e){return"."},currency:{symbol:"$",name:"USD",isFirst:!0}}),f.a.register("locale","sr",{abbreviations:{thousand:" x\u0438\u0459.",million:" \u043c\u043b\u043d.",billion:" \u043c\u043b\u0440\u0434.",trillion:" \u0442\u0440\u043b\u043d."},delimiters:{thousands:" ",decimal:"."},ordinal:function(e){return"."},currency:{symbol:"$",name:"USD",isFirst:!0}}),f.a.register("locale","hr",{delimiters:{thousands:".",decimal:","},abbreviations:{thousand:"tis.",million:"mil.",billion:"bil.",trillion:"tril."},ordinal:function(){return"."},currency:{symbol:"$",name:"USD",isFirst:!0}}),f.a.register("format","sign",{regexps:{format:/(&)/},format:function(e,t,a){var n,r=e>0;t=t.replace("&","");var l=f.a._.numberToFormat(e,t,a).split(" ");return n=l[0].replace(/(\.[0-9]*[1-9])0+$|\.0*$/,"$1"),n+=l[1]?" ".concat(l[1]):"",n=f.a._.includes(t,"-")&&!e?"-":n,n=r?"+"+n:n}}),f.a.register("format","percent",{regexps:{format:/(%)/,unformat:/(%)/},format:function(e,t,a){var n,r=f.a._.includes(t," %")?" ":"";f.a.options.scalePercentBy100&&(e*=100);var l=t.replace(/\s?%/,"").replace("sign","");return n=f.a._.numberToFormat(e,l,a),f.a._.includes(n,")")?((n=n.split("")).splice(-1,0,r+"%"),n=n.join("")):n=n+r+"%",n=((e<0||f.a._.includes(t,"&"))&&e>=0?"+":"")+n},unformat:function(e){var t=f.a._.stringToNumber(e);return f.a.options.scalePercentBy100?.01*t:t}});a(45),a(46),a(47),a(48),a(49),a(50),a(51),a(52),a(53),a(54),a(55),a(56),a(57),a(58);var N="en,de,fr,it,es,pt,sr,hr,ru,zh-hant,zh-hans,ko,ja,vi,th".split(",");d.a.updateLocale("de",{calendar:{sameDay:"[Heute um] LT [Uhr]",sameElse:"L",nextDay:"[Morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[Gestern um] LT [Uhr]",lastWeek:"[Letzten] dddd [um] LT [Uhr]"}}),o.a.use(s.a).use(v.e).init({backend:{loadPath:"/react-i18n-sample/locales/{{ns}}/{{lng}}.json",addPath:"/react-i18n-sample/locales/{{ns}}.missing.json",jsonIndent:4},debug:!1,lng:function(){var e=m.a.getItem("lang")||function(){var e=navigator.language||"en";switch(e){case"zh":case"zh-CN":return"zh-hans";case"zh-HK":case"zh-TW":return"zh-hant";case"sr-cyrl":return"sr";default:e=e.split("-")[0],N.indexOf(e)<0&&(e="en")}return e}();return document.documentElement.lang=e,e}(),saveMissing:!1,saveMissingTo:"fallback",parseMissingKeyHandler:function(e){return console.log("Missing i18n key",e),e},fallbackLng:{"de-CH":["fr","it"],"zh-Hant":["zh-hans","en"],"zh-Hans":["zh-hans","en"],es:["fr","en"],default:["en"]},cleanCode:!0,load:"currentOnly",lowerCaseLng:!0,whitelist:N,keySeparator:!1,interpolation:{escapeValue:!1,format:function(e,t,a){switch(t){case"percent":return f()(e).format(",.00 %");case"percent100":return f()(parseInt(e)/1e4).format(",.00 %");case"date":return k(e).format("ll");case"datetime":return k(e).format("ll HH:mm");case"ago":return k(e).fromNow();case"duration":return x(e,"s");case"sign":return f()(e).format("& ,.");case"number":return f()(e).format(",.");case"shorthash":return T(e,6,4);default:switch(!0){case g(e):return d()(e).format("ll HH:mm:ss");case E(e):return f()(e).format(",.");default:return e}}}},react:{wait:!1,transSupportBasicHtmlNodes:!0,transKeepBasicHtmlNodesFor:["br","strong","b","i","p"]},ns:["common","fallback"],defaultNS:"common",fallbackNS:"fallback"}),o.a.on("languageChanged",(function(e){switch(e){case"zh-hans":d.a.locale("zh-cn");break;case"zh-hant":d.a.locale("zh-hk");break;case"sr":d.a.locale("sr-cyrl");break;default:d.a.locale(e)}f.a.locale("en"===e?"en-En":e),m.a.setItem("lang",e),document.documentElement.lang=e}));o.a;var V=a(77),j=(a(59),a(33)),M=a(8),z=a(17),O=a(30),S=a(76),F=function(e){var t=e.as,a=void 0===t?"span":t,n=e.i18d,l=e.format,i=void 0===l?",.":l,s=e.opts,c=void 0===s?{}:s,m=e.to,u=e.children,h=Object(M.a)(e,["as","i18d","format","opts","to","children"]),v=Object(O.a)(),w=Object(j.a)(v,1)[0],k=u;switch(!0){case b(u):u.startsWith("tk_")&&(k=r.a.createElement(S.a,null,w(u,n)));break;case"boolean"===typeof u:k=u.toString();break;case E(u):if("duration"===i)k=x(u,c.base,c.zero,c.prefix,c.stop,c.trim);else{var T=f()(u).format(i,Math.floor);k=0===T.indexOf("NaN")?f()(0).format(i,Math.floor):T}break;case g(u):switch(i){case"ago":k=d()(u).fromNow();break;case"calendar":k=function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:6e4,r=new Date(e)-new Date;if(r<n)return o.a.t("tk_now");if(r>2*D||r<_)return y(e,t,a,n);var l=[d()(e).calendar(!!a)];return t&&l.unshift(t),l.join(" ")}(u,c.prefix,c.short,c.nowdiff);break;default:k=d.a.parseZone(u).format(i||"lll")}}if(m&&(a="a"),"a"===a){var N=p(m)?m.join("/"):m;return c.extern?(h.target=c.target||"_blank",h.rel=c.rel||"noopener noreferrer",h.href=c.href||N,r.a.createElement("a",h,k)):r.a.createElement(z.b,Object.assign({to:N},h),k)}return r.a.createElement("span",Object.assign({as:a},h),k)},U=function(e){var t=e.v,a=e.children,n=Object(M.a)(e,["v","children"]),l=w(t)?t:a;return r.a.createElement(F,n,l)},H=function(e){var t=e.v,a=e.short,n=e.children,l=Object(M.a)(e,["v","short","children"]),i=w(t)?t:n;return i=a?T(i,a[0]||a,a[1]):i,r.a.createElement(F,l,i)},L=function(e){var t=e.v,a=e.short,n=void 0===a?[6,4]:a,l=e.children,i=Object(M.a)(e,["v","short","children"]);return r.a.createElement(H,Object.assign({v:t,short:n},i),l)},$=function(e){var t=e.v,a=e.format,n=void 0===a?"ll":a,l=e.children,i=Object(M.a)(e,["v","format","children"]),o=w(t)?new Date(t):new Date(l);return r.a.createElement(F,Object.assign({format:n},i),o)},A=function(e){var t=e.v,a=e.format,n=void 0===a?"ll HH:mm":a,l=e.children,i=Object(M.a)(e,["v","format","children"]),o=w(t)?new Date(t):new Date(l);return r.a.createElement(F,Object.assign({format:n},i),o)},C=function(e){var t=e.v,a=e.format,n=void 0===a?",.":a,l=e.max,i=e.zero,o=e.children,s=Object(M.a)(e,["v","format","max","zero","children"]),c=w(t)?t:o;return c=!l||c<l?c:l+"+",c=i&&0===c?i:c,r.a.createElement(F,Object.assign({format:n},s),c)},Z=function(e){var t=e.v,a=e.format,n=void 0===a?",. %":a,l=e.children,i=Object(M.a)(e,["v","format","children"]),o=w(t)?t:l;return r.a.createElement(F,Object.assign({format:n},i),o)},B=Object(V.a)()((function(e){var t=e.i18n,a="0x795065dcc9f64b5614c407a6efdc400da6221fb0";return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,r.a.createElement(U,{v:"tk_language"})),t.options.whitelist.map((function(e,a){return"cimode"===e?null:r.a.createElement("button",{onClick:function(a){t.changeLanguage(e)},className:e===t.language?"active":"",key:a},r.a.createElement(U,null,"tk_lang_"+e))})),r.a.createElement("h2",null,r.a.createElement(U,{v:"tk_text"})),r.a.createElement("section",null,r.a.createElement("div",{className:"col"},r.a.createElement("pre",null,r.a.createElement("code",null,'# Translated Text\n<TextView v="tk_sample_text"/>\n<TextView>tk_sample_text</TextView>\n\n# Interpolated Text\n<TextView v="tk_ipol" i18d={{address: pairs.sushi_eth}} />\n\n# Singular and Plural Text (optional interpolation)\n<TextView v="tk_count" i18d={{count: 1}} />\n<TextView v="tk_count" i18d={{count: 1000}} />\n\n# Links\n<TextView v="tk_link_home" to="/home" />\n<TextView v="tk_link_pair" to={[\'pair\', pairs.sushi_eth]} />\n<TextView v="tk_link_ext" to="https://twitter.com/SushiSwap" opts={{extern: 1}} />\n\n# Addresses (default shortening is 6,4)\n<AddressView v={pairs.sushi_eth} />\n<HashView>{pairs.sushi_eth}</HashView>\n<HashView v={pairs.sushi_eth} short={8} />\n<HashView v={pairs.sushi_eth} short={[8,4]} />'))),r.a.createElement("div",{className:"col pad"},r.a.createElement("br",null),r.a.createElement(U,{v:"tk_sample_text"}),r.a.createElement(U,null,"tk_sample_text"),r.a.createElement("br",null),r.a.createElement(U,{v:"tk_ipol",i18d:{address:a}}),r.a.createElement("br",null),r.a.createElement(U,{v:"tk_count",i18d:{count:1}}),r.a.createElement(U,{v:"tk_count",i18d:{count:1e3}}),r.a.createElement("br",null),r.a.createElement(U,{v:"tk_link_home",to:"/home"}),r.a.createElement(U,{v:"tk_link_pair",to:["pair",a]}),r.a.createElement(U,{v:"tk_link_ext",to:"https://twitter.com/SushiSwap",opts:{extern:1}}),r.a.createElement("br",null),r.a.createElement(L,{v:a}),r.a.createElement(H,null,a),r.a.createElement(H,{v:a,short:8}),r.a.createElement(H,{v:a,short:[8,4]}))),r.a.createElement("h2",null,r.a.createElement(U,{v:"tk_numbers"})),r.a.createElement("section",null,r.a.createElement("div",{className:"col"},r.a.createElement("pre",null,r.a.createElement("code",null,'# Number Formatting\n<NumberView v={73.57583} />\n<NumberView v={73.57583} format=",.00000" />\n<NumberView v={1308123009} />\n<NumberView v={1308123009} format=",.00 a" />\n<NumberView v={106868906.47466855} format=",.0000" />\n\n# Number with Max Option\n<NumberView v={110} max={100} />\n\n# Number with Zero Option\n<NumberView v={0} zero="-" />\n\n# Percentages\n<PercentView v={0.015} />'))),r.a.createElement("div",{className:"col pad"},r.a.createElement(C,{v:73.57583}),r.a.createElement(C,{v:73.57583,format:",.00000"}),r.a.createElement(C,{v:1308123009}),r.a.createElement(C,{v:1308123009,format:",.00 a"}),r.a.createElement(C,{v:106868906.47466855,format:",.0000"}),r.a.createElement("br",null),r.a.createElement(C,{v:110,max:100}),r.a.createElement("br",null),r.a.createElement(C,{v:0,zero:"-"}),r.a.createElement("br",null),r.a.createElement(Z,{v:.015}))),r.a.createElement("h2",null,r.a.createElement(U,{v:"tk_dates"})),r.a.createElement("section",null,r.a.createElement("div",{className:"col"},r.a.createElement("pre",null,r.a.createElement("code",null,'# Default Date Formatting\n<DateView v="2020-09-01T12:00:00Z" />\n<DateView v={new Date()} />\n\n# Default Datetime Formatting\n<DateTimeView v="2020-09-01T12:00:00Z" />\n<DateTimeView v={new Date()} />\n\n# Custom Format\n<DateTimeView v={new Date()} format="MMMM Do YYYY, h:mm:ss A" />\n\n# Ago\n<DateTimeView v="2020-09-01T12:00:00Z" format="ago" />\n\n# Duration\n<TextView v={12345} format="duration" opts={{base:\'s\', stop:\'m\'}} />\n\n# Calendar\n<DateTimeView v={(new Date().getTime()) + 2*86400000} format="calendar" />'))),r.a.createElement("div",{className:"col pad"},r.a.createElement("br",null),r.a.createElement($,{v:"2020-09-01T12:00:00Z"}),r.a.createElement($,{v:new Date}),r.a.createElement("br",null),r.a.createElement(A,{v:"2020-09-01T12:00:00Z"}),r.a.createElement(A,{v:new Date}),r.a.createElement("br",null),r.a.createElement(A,{v:new Date,format:"MMMM Do YYYY, h:mm:ss A"}),r.a.createElement("br",null),r.a.createElement(A,{v:"2020-09-01T12:00:00Z",format:"ago"}),r.a.createElement("br",null),r.a.createElement(U,{v:12345,format:"duration",opts:{base:"s",stop:"s"}}),r.a.createElement("br",null),r.a.createElement(A,{v:(new Date).getTime()+1728e5,format:"calendar"}))))}));var Y=function(){return r.a.createElement(z.a,null,r.a.createElement(n.Suspense,{fallback:null},r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},"I18N Demo App"),r.a.createElement(B,null))))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.6b34a8f6.chunk.js.map