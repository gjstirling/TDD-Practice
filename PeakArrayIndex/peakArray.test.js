const assertEquals = require('./peakArray') 

// assume we are given one or two elements, we should recieve -1 for those cases

test('returns -1 if given array with 1 - 2 indexes', () => {
  expect(assertEquals([1,1])).toEqual(-1)
})


