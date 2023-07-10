import { carry, func } from "./1_Carry";
const hof: Function = carry(func);
console.log(hof(1, 2, 3, 4, 5)); // 15
console.log(hof(2, 3, 4)(5, 6)); // 20
console.log(hof(3, 4)(5, 6)(7)); // 25
console.log(hof(4, 5)(6)(7, 8)); // 30
console.log(hof(5)(6)(7)(8)(9)); // 35

import { sumNumber, s, s3 } from "./2_sumNumber";
alert(sumNumber()); // 0;

alert(s(1)); // 1
alert(s(1)(2)); //3
alert(s(3)(4)(5)); // 12

alert(s3(5)); // 8
//alert(s3(6)); // 9
import { spiral } from "./4_spiral";
spiral([
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
]);
// [0, 1, 2, 3, 4, 9, 14, 19, 18, 17, 16, 15, 10, 5, 6, 7, 8, 13, 12, 11]

import { semver } from "./5_semver";
semver(["1.0.5", "2.5.0", "0.12.0", "1", "1.23.45", "1.4.50", "1.2.3.4.5.6.7"]); // [ "0.12.0", "1", "1.0.5", "1.2.3.4.5.6.7", "1.4.50", "1.23.45", "2.5.0" ]
