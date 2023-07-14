import { carry, func } from "./1_Carry";
const hof: Function = carry(func);
console.log(hof(1, 2, 3, 4, 5)); // 15
console.log(hof(2, 3, 4)(5, 6)); // 20
console.log(hof(3, 4)(5, 6)(7)); // 25
console.log(hof(4, 5)(6)(7, 8)); // 30
console.log(hof(5)(6)(7)(8)(9)); // 35
const div1 = document.createElement("div");
document.append(div1);
const h1 = document.createElement("h1");
document.append(h1);
h1.innerText = "Функция для каррирования";
const p1 = document.createElement("p");
div1.append(p1);
p1.innerText = `hof(1, 2, 3, 4, 5): ${hof(1, 2, 3, 4, 5)}`;
const p2 = document.createElement("p");
div1.append(p2);
p2.innerText = `hof(2, 3, 4)(5, 6): ${hof(2, 3, 4)(5, 6)}`;
const p3 = document.createElement("p");
div1.append(p3);
p3.innerText = `hof(3, 4)(5, 6)(7): ${hof(3, 4)(5, 6)(7)}`;
const p4 = document.createElement("p");
div1.append(p4);
p4.innerText = `hof(4, 5)(6)(7, 8): ${hof(4, 5)(6)(7, 8)}`;
const p5 = document.createElement("p");
div1.append(p5);
p5.innerText = `hof(5)(6)(7)(8)(9): ${hof(5)(6)(7)(8)(9)}`;

import { sumNumber, s, s3 } from "./2_sumNumber";
alert(sumNumber()); // 0;

alert(s(1)); // 1
alert(s(1)(2)); //3
alert(s(3)(4)(5)); // 12

alert(s3(5)); // 8
//alert(s3(6)); // 9

import { Parallel } from "./3_Parallel";
const runner = new Parallel(2);
console.log(
  runner.jobs(
    () => new Promise((resolve) => setTimeout(resolve, 10, 1)),
    () => new Promise((resolve) => setTimeout(resolve, 50, 2)),
    () => new Promise((resolve) => setTimeout(resolve, 20, 3)),
    () => new Promise((resolve) => setTimeout(resolve, 90, 4)),
    () => new Promise((resolve) => setTimeout(resolve, 30, 5)),
  ),
);

import { spiral } from "./4_spiral";
spiral([
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
]);
// [0, 1, 2, 3, 4, 9, 14, 19, 18, 17, 16, 15, 10, 5, 6, 7, 8, 13, 12, 11]
const h2_3 =document.createElement("h2");
div1.append(h2_3);
h2_3.innerText = `Матрица, развернутая по спирали`
const div2 = document.createElement("div");
div1.append(div2);
div2.innerText = `[0, 1, 2, 3, 4],\n  [5, 6, 7, 8, 9],\n [10, 11, 12, 13, 14],\n [15, 16, 17, 18, 19],\n = ${spiral(
  [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
  ],
)}`;
import { semver } from "./5_semver";
semver(["1.0.5", "2.5.0", "0.12.0", "1", "1.23.45", "1.4.50", "1.2.3.4.5.6.7"]); // [ "0.12.0", "1", "1.0.5", "1.2.3.4.5.6.7", "1.4.50", "1.23.45", "2.5.0" ]
const h3_3 =document.createElement("h2");
div1.append(h2_3);
h3_3.innerText = `Сортировка semver`
const div3 = document.createElement("div");
div1.append(div3);
div3.innerText = `semver(["1.0.5", "2.5.0", "0.12.0", "1", "1.23.45", "1.4.50", "1.2.3.4.5.6.7"]): ${semver(
  ["1.0.5", "2.5.0", "0.12.0", "1", "1.23.45", "1.4.50", "1.2.3.4.5.6.7"],
)}`;
