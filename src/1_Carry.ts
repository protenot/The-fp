const func = (a: number, b: number, c: number, d: number, e: number): number => a + b + c + d + e;

function carry(func: Function): (a: number, b: number, c: number, d: number, e: number) => number {
  return function curried(...args: number[]): number {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return curried.bind(this, ...args);
    }
  };
}
/* interface carrInt{
    a: number,
     b: number,
      c: number,
       d: number,
        e: number
}
/* const callMeMaybe = <T extends (...args: any[]) => any>(f: T, ...args: Parameters<T>): ReturnType<T> => {
  return f(...args);
} */
/* 
  const func = (a: number, b: number, c: number, d: number, e: number): number => a + b + c + d + e;

function carry<Type extends (...args: number[]) => number>(func:Type, ...args: Parameters<Type>): ReturnType<Type> {
  return function curried<Type>(...args: Type[]): Type {
    if (args.length >= func.length) {
        
      return func(...args);
    } else {
      return function <Type>(...nextArgs: Type[]): Type {
        return curried(...args.concat(nextArgs));
      };
    }
  };
}  */