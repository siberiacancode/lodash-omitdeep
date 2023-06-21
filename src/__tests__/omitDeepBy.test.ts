import { omitDeepBy } from '../omitDeepBy/omitDeepBy';

test('omitDeep', () => {
  const object = { a: 1, b: 2, c: [{ d: 1 }] };
  const result = { b: 2, c: [{}] };
  expect(omitDeepBy(object, (value) => value === 1)).toEqual(result);
});
