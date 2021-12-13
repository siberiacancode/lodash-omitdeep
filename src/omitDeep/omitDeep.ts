import omit from 'lodash.omit';
import isPlainObject from 'lodash.isplainobject';
import isNil from 'lodash.isnil';
import { Many, PropertyName, PartialObject } from 'lodash';

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable properties of `object` that are not omitted.
 *
 * @category Object
 * @param object The source object.
 * @param [paths] The property names to omit, specified
 *  individually or in arrays..
 * @returns Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': 2, 'c': { 'a': 1, 'b': 2 } };
 *
 * omitDeep(object, ['b', 'a']);
 * // => { 'c': {} }
 */
function omitDeep<T extends object, K extends PropertyName[]>(
  object: T | null | undefined,
  ...paths: K
): Pick<T, Exclude<keyof T, K[number]>>;
function omitDeep<T extends object, K extends keyof T>(object: T | null | undefined, ...paths: Many<K>[]): Omit<T, K>;
function omitDeep<T extends object>(object: T | null | undefined, ...paths: Many<PropertyName>[]): PartialObject<T>;

function omitDeep(object: any, ...paths: any) {
  function omitDeepOnOwnProps(object: any) {
    if (!Array.isArray(object) && !isPlainObject(object)) {
      return object;
    }

    if (Array.isArray(object)) {
      return object.map((element) => (needOmit(element) ? omitDeep(element, ...paths) : element));
    }

    const temp = {};
    for (const [key, value] of Object.entries<{
      [x: string]: PropertyName | object;
    }>(object)) {
      (temp as any)[key] = needOmit(value) ? omitDeep(value, ...paths) : value;
    }
    return omit(temp, ...paths);
  }

  return omitDeepOnOwnProps(object);
}

function needOmit(value: any): boolean {
  return !isNil(value) && (isPlainObject(value) || Array.isArray(value));
}

export default omitDeep;
