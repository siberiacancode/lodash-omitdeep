# lodash-omitdeep
> Lodash omitDeep/omitDeepBy object key/value recursively

lodash-omitdeep allows you to execute lodash omit, omitBy functions recursively.
## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i lodash-omitdeep --save
```
Install with [yarn](https://yarnpkg.com/)

```sh
$ yarn add lodash-omitdeep
```
## Usage
### omitDeep
```js
import { omitDeep } from 'lodash-omitdeep';
omitDeep({a: "a", b: "b", c: {b: "b", d: {b: "b", f: "f"}}}, "b");
//=> {a: "a", c: {d: {f: "f"}}}
omitDeep({a: "a", b: "b", c: {b: "b", d: {b: "b", f: "f"}}}, ["a", "b"]);
//=> {c: {d: {f: "f"}}}
```
### omitByDeep
```js
import { omitDeepBy } from 'lodash-omitdeep';
import isNil from 'lodash/isNil';
import isNumber from 'lodash/isNumber';

omitByDeep({a: "a", b: null, c: {b: "b", d: {b: "b", f: null}}}, isNil);
//=> {a: "a", c: {b: "b", d: {b: "b"}}}
omitByDeep({a: 2, b: "b", c: {b: 4, d: {b: 1, f: "f"}}}, isNumber);
//=> {b: "b", c: {d: {f: "f"}}}
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/hwapedro/lodash-omitdeep/issues/new)

## Author

+ [github/hwapedro](https://github.com/hwapedro)


## License

Released under the MIT license.
