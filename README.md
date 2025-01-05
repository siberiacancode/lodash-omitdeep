# ♻️ Lodash Omit Deep

> Lodash omitDeep/omitDeepBy object key/value recursively

lodash-omitdeep allows you to execute lodash omit, omitBy functions recursively.

## Install

Install with [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

```bash
$ npm i lodash-omitdeep --save
# or
$ yarn add lodash-omitdeep
```

## Usage

Install **♻️ Lodash Omit Deep** with [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

```bash
$ npm i lodash-omitdeep --save
# or
$ yarn add lodash-omitdeep
```

### omitDeep

```js
import { omitDeep } from 'lodash-omitdeep';
omitDeep({ a: 'a', b: 'b', c: { b: 'b', d: { b: 'b', f: 'f' } } }, 'b');
//=> {a: "a", c: {d: {f: "f"}}}
omitDeep({ a: 'a', b: 'b', c: { b: 'b', d: { b: 'b', f: 'f' } } }, ['a', 'b']);
//=> {c: {d: {f: "f"}}}
```

### omitDeepBy

```js
import { omitDeepBy } from 'lodash-omitdeep';
import isNil from 'lodash/isNil';
import isNumber from 'lodash/isNumber';

omitDeepBy({ a: 'a', b: null, c: { b: 'b', d: { b: 'b', f: null } } }, isNil);
//=> {a: "a", c: {b: "b", d: {b: "b"}}}
omitDeepBy({ a: 2, b: 'b', c: { b: 4, d: { b: 1, f: 'f' } } }, isNumber);
//=> {b: "b", c: {d: {f: "f"}}}
```

## ✨ Contributors

<table>
<tr>
    <td align="center" style="word-wrap: break-word; width: 100.0; height: 100.0">
        <a href="https://github.com/debabin">
            <img src="https://avatars.githubusercontent.com/u/45297354?v=4"
            width="100;"  
            alt="debabin" />
            <br />
            <sub style="font-size:13px"><b>☄️ debabin</b></sub>
        </a>
    </td>
  </tr>
</table>
