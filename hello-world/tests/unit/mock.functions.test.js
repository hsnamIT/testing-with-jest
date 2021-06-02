"use strict";

// Ref: https://jestjs.io/docs/mock-functions

// Mock functions allow you to test the links between code by erasing the actual implementation of a function,
// capturing calls to the function (and the parameters passed in those calls),
// capturing instances of constructor functions when instantiated with new,
// and allowing test-time configuration of return values.

function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

describe("Test forEach function", () => {
  const mockCallback = jest.fn((x) => 42 + x);
  forEach([0, 1], mockCallback);

  // The mock property: contains what that can tell how these functions get called, instantiated, or what they returned
  // Ref: https://jestjs.io/docs/mock-functions#mock-property

  test("the callback should be called 2 times", () => {
    // Get the number of mock is called
    expect(mockCallback.mock.calls.length).toBe(2);
  });

  test("The first argument value of the first callback call should be 0", () => {
    // Get the first argument of the first call
    expect(mockCallback.mock.calls[0][0]).toBe(0);
  });

  test("The return value of the first callback call should be 42", () => {
    // Get the return value of the first call
    expect(mockCallback.mock.results[0].value).toBe(42);
  });
});
