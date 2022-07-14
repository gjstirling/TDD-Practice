const {truthy, falsy} = require('../model')

describe("test suite", () => {
  it("passes", () => {
    const assertion = truthy()
    expect(assertion).toBe(true)
  });

  it("passes", () => {
    const assertion = falsy()
    expect(assertion).toBe(false)
  });
});
