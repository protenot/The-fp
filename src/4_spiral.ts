export function spiral(array: number[][]): number[] {
  let spiralArray: number[] = [];
  spiralArray = spiralArray.concat(array.shift() as number[]);

  while (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      if (i !== array.length - 1) {
        spiralArray.push(array[i].reverse().shift() as number);
      } else {
        array[i].reverse();
        spiralArray = spiralArray.concat(array.pop() as number[]);
      }
    }
    array.reverse();
  }

  return spiralArray;
}
