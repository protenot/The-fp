import { sumNumber, s, s3 } from "./2_sumNumber";

describe("sumNumber", () => {
  it("to be function", () => {
    expect(sumNumber).toBeInstanceOf(Function);
  });
  it("should work correctly ", () => {
    expect(Number(sumNumber())).toBe(0);

    expect(Number(s(1))).toBe(1);
    expect(Number(s(1)(2))).toBe(3);
    expect(Number(s(3)(4)(5))).toBe(12);
    expect(Number(s3(5))).toBe(8);
    console.log(Number(s3));
   /*  expect(Number(s3)).toBe(3);
    expect(Number(s3(6))).toBe(9);*/
  }); 
});
