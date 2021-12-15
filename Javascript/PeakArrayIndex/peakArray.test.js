const assertEquals = require('./peakArray');

// assume we are given one or two elements, we should recieve -1 for those cases

test('returns -1 if given array with 1 - 2 indexes', () => {
  expect(assertEquals([1,1])).toEqual(-1);
})

test('returns middle index when right and left side are equal', () => {
  expect(assertEquals([1,2,1])).toEqual(1);
})

test('returns second index of an array of 4 elements', () => {
  expect(assertEquals([1,3,5,4])).toEqual(2);
})
