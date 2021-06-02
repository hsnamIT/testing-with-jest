"use strict";

// Ref: https://jestjs.io/docs/asynchronous

function timeout(ms) {
  return new Promise((resolve, reject) => {
    if (!ms || ms < 0) {
      reject("Invalid delay time");
      return;
    }
    if (ms >= 5000) {
      reject("Exceeded the maximum waiting time of Jest");
      return;
    }
    setTimeout(resolve, ms);
  });
}

async function fetchData(delayTime = 4000) {
  try {
    await timeout(delayTime);
    return {
      class: "Testing101",
      description: "Testing for dummies",
      studentName: "Ho Nam",
      address: {
        houseNumber: 257,
        street: "17",
        district: "Nha Be",
        city: "Ho Chi Minh",
      },
    };
  } catch (e) {
    throw new Error(e);
  }
}

test("The student info obj match format", async () => {
  const studentInfo = await fetchData();
  expect(studentInfo).toEqual(
    expect.objectContaining({
      class: expect.any(String),
      description: expect.any(String),
      studentName: expect.any(String),
      address: expect.objectContaining({
        houseNumber: expect.any(Number),
        street: expect.any(String),
        district: expect.any(String),
        city: expect.any(String),
      }),
    })
  );
});

test("The student info match values", async () => {});

test("Fetching data function with delay time < 0 go wrong as expected", async () => {
  return expect(fetchData(-1)).rejects.toEqual(new Error("Invalid delay time"));
});

test("Fetching data function with delay time > 5000 go wrong as expected", async () => {
  return expect(fetchData(6000)).rejects.toEqual(
    new Error("Exceeded the maximum waiting time of Jest")
  );
});

test("Fetching data function with delay time = 5000 go wrong as expected", async () => {
  return expect(fetchData(5000)).rejects.toEqual(
    new Error("Exceeded the maximum waiting time of Jest")
  );
});
