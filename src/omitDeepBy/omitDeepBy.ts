import omitBy from 'lodash.omitby';
import isPlainObject from 'lodash.isplainobject';
import { PropertyName, PartialObject, ValueKeyIteratee, NumericDictionary, Dictionary } from 'lodash';

/**
 * The opposite of `_.pickBy`; this method creates an object composed of the
 * own and inherited enumerable properties of `object` that `predicate`
 * doesn't return truthy for.
 *
 * @category Object
 * @param object The source object.
 * @param [predicate=_.identity] The function invoked per property.
 * @returns Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': 2, 'c': { 'a': 1, 'b': 2 } };
 *
 * omitByDeep(object, _.isNil);
 * // => { a: 1, c: { a: 1 } }
 */

function omitByDeep<T>(object: Dictionary<T> | null | undefined, predicate?: ValueKeyIteratee<T>): Dictionary<T>;
function omitByDeep<T>(
  object: NumericDictionary<T> | null | undefined,
  predicate?: ValueKeyIteratee<T>,
): NumericDictionary<T>;
function omitByDeep<T extends object>(
  object: T | null | undefined,
  predicate: ValueKeyIteratee<T[keyof T]>,
): PartialObject<T>;

function omitByDeep(object: any, cb: any) {
  function omitByDeepByOnOwnProps(object: any) {
    if (!Array.isArray(object) && !isPlainObject(object)) {
      return object;
    }

    if (Array.isArray(object)) {
      return object.map((element) => omitByDeep(element, cb));
    }

    const temp = {};
    for (const [key, value] of Object.entries<{
      [x: string]: PropertyName | object;
    }>(object)) {
      (temp as any)[key] = omitByDeep(value, cb);
    }
    return omitBy(temp, cb);
  }

  return omitByDeepByOnOwnProps(object);
}

export default omitByDeep;
