const peakArray = require('./peakArray') 

test('setup test', () => {
  const output = peakArray();
  expect(output).toEqual("yes"); 
})
