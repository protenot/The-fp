import { Parallel } from "./3_Parallel";
const runner = new Parallel(2);
const runner4 = new Parallel(4);

describe("Parallel", () => {
  it("is a function", () => {
    expect(runner.jobs).toBeInstanceOf(Function);
  });

  it("returns an array of results", async () => {
    expect(
      await runner.jobs(
        () => new Promise((resolve) => setTimeout(resolve, 10, 1)),
        () => new Promise((resolve) => setTimeout(resolve, 50, 2)),
        () => new Promise((resolve) => setTimeout(resolve, 20, 3)),
        () => new Promise((resolve) => setTimeout(resolve, 90, 4)),
        () => new Promise((resolve) => setTimeout(resolve, 30, 5)),
      ),
    ).toStrictEqual([1, 3, 2, 5, 4]);
  });
  it("returns an array of results", async () => {
    expect(
      await runner4.jobs(
        () => new Promise((resolve) => setTimeout(resolve, 10, 1)),
        () => new Promise((resolve) => setTimeout(resolve, 50, 2)),
        () => new Promise((resolve) => setTimeout(resolve, 20, 3)),
        () => new Promise((resolve) => setTimeout(resolve, 90, 4)),
        () => new Promise((resolve) => setTimeout(resolve, 30, 5)),
      ),
    ).toStrictEqual([1, 3, 5, 2, 4]);
  });
});
