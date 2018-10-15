# paddys

[![npm version](https://badge.fury.io/js/paddys.svg)](https://npmjs.org/package/paddys)

`paddys` is a package that pads strings so that each line is of the width of the longest line. It can also pad to a specific length.

```sh
yarn add -E paddys
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`paddys(string: string, options?: Config)`](#paddysstring-stringoptions-config-void)
  * [`Config`](#type-config)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import paddys from 'paddys'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `paddys(`<br/>&nbsp;&nbsp;`string: string,`<br/>&nbsp;&nbsp;`options?: Config,`<br/>`): void`

Pads the string to the right to equalise the length of each line.

__<a name="type-config">`Config`</a>__: Options for the program.

|    Name    |   Type   |           Description            |
| ---------- | -------- | -------------------------------- |
| __width*__ | _number_ | The width to which to pad lines. |

```js
/* yarn example/ */
import paddys from 'paddys'

const res = paddys(
  `Just stop your wandering,
Look penetratingly into your inherent nature,
And, concentrating your spiritual energy,
Sit in zazen
And break through.`
)
```
```
Just stop your wandering,____________________
Look penetratingly into your inherent nature,
And, concentrating your spiritual energy,____
Sit in zazen_________________________________
And break through.___________________________
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

(c) [Art Deco][1] 2018

[1]: https://artdeco.bz

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>