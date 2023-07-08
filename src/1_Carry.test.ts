import { carry, func } from "./1_Carry";
// Test case 1
test("carry should return the correct sum", () => {
  const hof = carry(func);
  expect(hof(1, 2, 3, 4, 5)).toBe(15);
});

// Test case 2
test("carry should handle partial application correctly", () => {
  const hof: Function = carry(func);
  expect(hof(2, 3, 4)(5, 6)).toBe(20);
  expect(hof(3, 4)(5, 6)(7)).toBe(25);
  expect(hof(4, 5)(6)(7, 8)).toBe(30);
});
