const { expect } = require('@jest/globals')
const partList = require('./partList')

test('returns an array in if has one element', () => {
  expect(partList(["Good"])).toEqual(["Good"])
})

test('returns two elements if array has three elements', () => {
  output = [["Good Morning", "Graeme"], ["Good", "Morning Graeme"]]
  expect(partList(["Good", "Morning", "Graeme"])).toEqual(output)
})