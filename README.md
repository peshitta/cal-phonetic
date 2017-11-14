# cal-phonetic

[![npm version](https://badge.fury.io/js/cal-phonetic.svg)](https://badge.fury.io/js/cal-phonetic)
[![npm module downloads](http://img.shields.io/npm/dt/cal-phonetic.svg)](https://www.npmjs.org/package/cal-phonetic)
[![Build Status](https://travis-ci.org/peshitta/cal-phonetic.svg?branch=master)](https://travis-ci.org/peshitta/cal-phonetic)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/peshitta/cal-phonetic/blob/master/LICENSE)
[![Dependency Status](https://david-dm.org/peshitta/cal-phonetic.svg)](https://david-dm.org/peshitta/cal-phonetic)
[![Coverage Status](https://coveralls.io/repos/github/peshitta/cal-phonetic/badge.svg?branch=master)](https://coveralls.io/github/peshitta/cal-phonetic?branch=master)
[![Gitter](https://badges.gitter.im/peshitta/peshitta.svg "Join the chat at https://gitter.im/peshitta/Lobby")](https://gitter.im/peshitta/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

CAL code to Latin phonetic transliteration

## Installation

In order to use this library, [Node.js](https://nodejs.org) should be installed. 
Then run:
```
npm install cal-phonetic --save
```

Following bundles are available:
* `cal-phonetic.js` - UMD ES5 version for use in browser, node, etc.
* `cal-phonetic.min.js` - minified version of `cal-phonetic.js`
* `cal-phonetic.esm.js` - ES6 module version, suitable for bundling with other 
libraries and applications

The package could also be downloaded directly from:
[https://registry.npmjs.org/cal-phonetic/-/cal-phonetic-1.0.3.tgz](https://registry.npmjs.org/cal-phonetic/-/cal-phonetic-1.0.3.tgz)

## More information

[Peshitta App](https://peshitta.github.io)

[Beth Mardutho](https://sedra.bethmardutho.org/about/fonts)

[CAL](http://cal1.cn.huc.edu/searching/fullbrowser.html)

## License

[MIT](https://github.com/peshitta/cal-phonetic/blob/master/LICENSE)

## Contributing

The final goal for this work is to learn the Word of God as recorded by
[Peshitta](https://en.wikipedia.org/wiki/Peshitta).
You are welcomed to improve this implementation or provide feedback. Please
feel free to [Fork](https://help.github.com/articles/fork-a-repo/), create a
[Pull Request](https://help.github.com/articles/about-pull-requests/) or
submit [Issues](https://github.com/peshitta/cal-phonetic/issues).

To read quick updates about Peshitta app or post questions or feedback, follow
[@peshittap](https://www.twitter.com/peshittap)
at [![@peshittap](http://i.imgur.com/wWzX9uB.png "@peshittap")](https://www.twitter.com/peshittap)or
[![Gitter](https://badges.gitter.im/peshitta/peshitta.svg "Join the chat at https://gitter.im/peshitta/Lobby")](https://gitter.im/peshitta/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

## Development

```
npm install
```
```
npm run build
```

## API Reference

* [calPhonetic](#module_calPhonetic)
    * [.mapper](#module_calPhonetic.mapper) : <code>Mapper</code>
    * [.toPhonetic](#module_calPhonetic.toPhonetic) ⇒ <code>string</code>

<a name="module_calPhonetic.mapper"></a>

### calPhonetic.mapper : <code>Mapper</code>
Phonetic Mapper

**Kind**: static constant of [<code>calPhonetic</code>](#module_calPhonetic)  
<a name="module_calPhonetic.toPhonetic"></a>

### calPhonetic.toPhonetic ⇒ <code>string</code>
Convert from CAL to Phonetic Latin

**Kind**: static constant of [<code>calPhonetic</code>](#module_calPhonetic)  
**Returns**: <code>string</code> - the input word converted to phonetic Latin  

| Param | Type | Description |
| --- | --- | --- |
| word | <code>string</code> | input word in CAL code transliteration |

