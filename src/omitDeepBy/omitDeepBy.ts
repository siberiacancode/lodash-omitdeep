import type {
  Dictionary,
  NumericDictionary,
  PartialObject,
  PropertyName,
  ValueKeyIteratee
} from 'lodash';

import isPlainObject from 'lodash.isplainobject';
import omitBy from 'lodash.omitby';

interface OmitDeepBy {
  <T>(object: Dictionary<T> | null | undefined, predicate?: ValueKeyIteratee<T>): Dictionary<T>;
  <T>(
    object: NumericDictionary<T> | null | undefined,
    predicate?: ValueKeyIteratee<T>
  ): NumericDictionary<T>;
  <T extends object>(
    object: T | null | undefined,
    predicate: ValueKeyIteratee<T[keyof T]>
  ): PartialObject<T>;
}

/**
 * The opposite of `_.pickBy`; this method creates an object composed of the
 * own and inherited enumerable properties of `object` that `predicate`
 * doesn't return truthy for.
 *
 * @category Function
 * @param object The source object.
 * @param [predicate] The function invoked per property.
 * @returns Returns the new object.
 * @example
 *
 * const object = { 'a': 1, 'b': null, 'c': { 'a': 1, 'b': null } };
 *
 * omitByDeep(object, _.isNil);
 * // => { 'a': 1, 'c': { 'a': 1 } }
 */
export const omitDeepBy: OmitDeepBy = (object: any, cb: any) => {
  function omitByDeepByOnOwnProps(object: any) {
    if (!Array.isArray(object) && !isPlainObject(object)) {
      return object;
    }

    if (Array.isArray(object)) {
      return object.map((element) => omitDeepBy(element, cb));
    }

    const temp = {};

    for (const [key, value] of Object.entries<{
      [x: string]: object | PropertyName;
    }>(object)) {
      (temp as any)[key] = omitDeepBy(value, cb);
    }
    return omitBy(temp, cb);
  }

  return omitByDeepByOnOwnProps(object);
};
