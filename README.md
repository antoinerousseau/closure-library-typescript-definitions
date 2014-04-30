closure-library.d.ts
====

> Closure Library declaration files for TypeScript.

Generated by [closure-ts](https://github.com/teppeis/closure-ts "teppeis/closure-ts").

## Restriction

* `goog.string` is converted to `goog.string$` because `string` in module name is a reserved word in TypeScript.
* Union type is converted to the first type of the type list.
* @typedef is converted to an empty interface (= `any` type).
* @implements is ignored.
* goog.testing and goog.result modules are excluded.

because this is alpha version now...

## License

MIT License: Teppei Sato <teppeis@gmail.com>
