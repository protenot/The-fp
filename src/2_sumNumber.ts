export function sumNumber(a?: number | null) {
  let accumulatedSum: number = a ?? 0;

  function addFunction(b?: number): number | any {
    accumulatedSum += b;
    return addFunction;
  }
  addFunction.toString = function toString(): number {
    return accumulatedSum;
  };
  return addFunction;
}

export const s: Function = sumNumber;
export const s3 = sumNumber(3);
console.log(s3);
