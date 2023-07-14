export const func = (
  a: number,
  b?: number,
  c?: number,
  d?: number,
  e?: number,
): number => a + b + c + d + e;

export function carry(
  func: Function,
): (a: number, b?: number, c?: number, d?: number, e?: number) => number {
  return function curried(...args: number[]): number {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return curried.bind(this, ...args);
    }
  };
}
