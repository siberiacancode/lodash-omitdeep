import type { Many, PartialObject, PropertyName } from 'lodash';

import { isNil, isPlainObject, omit } from 'lodash';

export const needOmit = (value: any) =>
  !isNil(value) && (isPlainObject(value) || Array.isArray(value));

interface OmitDeep {
  <T extends object, K extends PropertyName[]>(
    object: T | null | undefined,
    ...paths: K
  ): Pick<T, Exclude<keyof T, K[number]>>;
  <T extends object, K extends keyof T>(
    object: T | null | undefined,
    ...paths: Many<K>[]
  ): Omit<T, K>;
  <T extends object>(
    object: T | null | undefined,
    ...paths: Many<PropertyName>[]
  ): PartialObject<T>;
}

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable properties of `object` that are not omitted.
 *
 * @category Function
 * @param object The source object.
 * @param [paths] The property names to omit, specified
 *  individually or in arrays.
 * @returns Returns the new object.
 * @example
 *
 * const object = { 'a': 1, 'b': 2, 'c': { 'a': 1, 'b': 2 } };
 *
 * omitDeep(object, ['b', 'a']);
 * // => { 'c': {} }
 */
export const omitDeep: OmitDeep = (object: any, ...paths: any) => {
  function omitDeepOnOwnProps(object: any) {
    if (!Array.isArray(object) && !isPlainObject(object)) {
      return object;
    }

    if (Array.isArray(object)) {
      return object.map((element) => (needOmit(element) ? omitDeep(element, ...paths) : element));
    }

    const temp = {};

    for (const [key, value] of Object.entries<{
      [x: string]: object | PropertyName;
    }>(object)) {
      (temp as any)[key] = needOmit(value) ? omitDeep(value, ...paths) : value;
    }
    return omit(temp, ...paths);
  }

  return omitDeepOnOwnProps(object);
};
