import { omitDeep } from '../omitDeep/omitDeep';

test('omitDeep', () => {
  const object = { a: 'a', b: 'b' };
  const result = { b: 'b' };
  expect(omitDeep(object, 'a')).toEqual(result);
});
