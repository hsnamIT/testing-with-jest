"use strict";

// Ref: https://jestjs.io/docs/setup-teardown

// Applies to all tests in this file
// And will be executed first
beforeEach(() => {});

afterEach(() => {});

// One-Time Setup
// In some cases, you only need to do setup once (connect to DB, close the connection) 
// Jest provides beforeAll and afterAll to handle this situation
// Remeber to return promise when the setup is asynchronous
beforeAll(() => {});

afterAll(() => {});

// Note: Jest executes all describe handlers in a test file before it executes any of the actual tests
// Ref: https://jestjs.io/docs/setup-teardown#order-of-execution-of-describe-and-test-blocks
describe("my group of test cases", () => {
  // Applies to all tests in this group
  beforeEach(() => {});

  // TODO: will it work when the callback function of the describe is just a normal function?
  test("testcase 1", async () => {});
  test("testcase 2", async () => {});
  test("testcase 3", async () => {});
});
