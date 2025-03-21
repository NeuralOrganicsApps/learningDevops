
const {Addition, Subtraction, Multiplication, Division} = require("../Functions/functionsExport")


test("adds two numbers correctly", () => {
  expect(Addition(2, 3)).toBe(5);
});

test("subtracts two numbers correctly", () => {
  expect(Subtraction(5, 3)).toBe(2);
});

test("multiplies two numbers correctly", () => {
  expect(Multiplication(4, 3)).toBe(12);
});

test("divides two numbers correctly", () => {
  expect(Division(10, 2)).toBe(5);
});

test("handles division by zero", () => {
  expect(Division(10, 0)).toBe(Infinity);
});
