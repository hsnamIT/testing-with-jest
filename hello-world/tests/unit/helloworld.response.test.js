"use strict";

const app = require("../../app.js");

test("The response have a correct format", async () => {
  const response = await app.lambdaHandler();
  expect(response).toEqual(
    expect.objectContaining({
      statusCode: expect.any(Number),
      body: expect.any(String),
    })
  );
});

test("The body value is an valid JSON", async () => {
  const response = await app.lambdaHandler();
  let parsable = true;
  try {
    JSON.parse(response.body);
  } catch (e) {
    // TODO: What else should I do here?
    parsable = false;
  }
  expect(parsable).toEqual(true);
});

test("The body value have a correct format", async () => {
  const response = await app.lambdaHandler();
  // Don't have to add the try/catch block here
  // Because the above test case will ensure the body value will be an valid JSON
  const parsedBody = JSON.parse(response.body);
  expect(parsedBody).toEqual(
    expect.objectContaining({
      message: expect.any(String),
    })
  );
});

test("The response has correct values", async () => {
  const { statusCode, body } = await app.lambdaHandler();
  // Use .toBe to compare primitive values or to check referential identity of object instances
  // It calls Object.is to compare values, which is even better for testing than === strict equality operator.
  // === is called strict comparison operator in JavaScript.
  // Object.is and strict comparison operator behave exactly the same except for NaN and +0/-0
  // Detail comparisons: https://stackoverflow.com/a/30543212

  expect(statusCode).toBe(200);

  const parsedBody = JSON.parse(body);
  expect(parsedBody.message).toBe("hello world");
});
