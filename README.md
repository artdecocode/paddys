# paddys

[![npm version](https://badge.fury.io/js/paddys.svg)](https://npmjs.org/package/paddys)

`paddys` is a package that pads strings so that each line is of the width of the longest line. It can also pad to a specific length.

```sh
yarn add -E paddys
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`paddys(string: string, options?: Config): string`](#paddysstring-stringoptions-config-string)
  * [`_paddys.Config`](#type-_paddysconfig)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import paddys from 'paddys'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `paddys(`<br/>&nbsp;&nbsp;`string: string,`<br/>&nbsp;&nbsp;`options?: Config,`<br/>`): string`

Pads the string to the right to equalise the length of each line.

__<a name="type-_paddysconfig">`_paddys.Config`</a>__: Options for the program.

| Name  |      Type       |           Description            |
| ----- | --------------- | -------------------------------- |
| width | <em>number</em> | The width to which to pad lines. |

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

<table>
  <tr>
    <th>
      <a href="https://artd.eco">
        <img src="https://raw.githubusercontent.com/wrote/wrote/master/images/artdeco.png" alt="Art Deco" />
      </a>
    </th>
    <th>© <a href="https://artd.eco">Art Deco</a>   2019</th>
    <th>
      <a href="https://www.technation.sucks" title="Tech Nation Visa">
        <img src="https://raw.githubusercontent.com/artdecoweb/www.technation.sucks/master/anim.gif"
          alt="Tech Nation Visa" />
      </a>
    </th>
    <th><a href="https://www.technation.sucks">Tech Nation Visa Sucks</a></th>
  </tr>
</table>

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>