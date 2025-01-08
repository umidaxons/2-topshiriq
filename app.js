// 1-mashq
// const myArray = [[false, true], [1, 2], 99, `yaxshi`];

//   for (let i = 0; i < myArray.length; i++) {
//     if (typeof myArray[i] == `string`) {
//       console.log(`String index:`, i);
//     }
//   }

//   myArray.forEach((item, i) => {
//     if (typeof item == `string`) {
//       console.log(`String index:`, i);
//     }
//   });
// 2-mashq
//   const data = [[1, 2, 3], `qizil`, [4, 5, 6], true, false];
//   const newData = [];
//   data.forEach((item) => {
//     const res = Array.isArray(item);
//     if (res) {
//       item.forEach((num) => {
//         newData.push(num);
//       });
//     }
//   });
//   console.log(newData);
//3-topshiriq
//   const chekData = [null, `false`, 0, 99, false, undefined, ``, NaN, `0`];
//   const falsey = [];

//   chekData.forEach((item) => {
//     if (item) {
//       falsey.push(item);
//     }
//   });
//   console.log(falsey);
// 4-mashq
//   const word = `samarqand`;
//   const splitWord = word.split(``);
//   let newWord = ``;
//   for (let i = word.length - 1; i >= 0; i--) {
//     newWord += splitWord[i];
//   }
//   console.log(newWord);
// 5-mashq
//   const word = `Assalomu AlAyKUM YaxSHIMISIZ`;
//   const splitWord = word.split(` `);
//   let newWord = ``;
//   splitWord.forEach((item) => {
//     const boshi = item.charAt().toLowerCase();
//     const davomi = item.slice(1).toUpperCase();
//     newWord += ` ` + boshi + davomi;
//   });
//   console.log(newWord.trimStart());
//   6-mashq
// const numbers = [-1, 87, 4, 3.1, -5.5, Infinity, 0, 1, 2, 0.9];
// let naturalNumber = 0;
// numbers.forEach((num) => {
//   if (
//     num >= 0.0 &&
//     Math.floor(num) === num &&
//     num !== Infinity &&
//     num !== 0
//   ) {
//     naturalNumber += num;
//   }
// });
// console.log(naturalNumber);
//  7-mashq
// const words = `Qalesiz yaxshimisiz ? Yaxshimi ishlar ?`;
// let splitWords = words.split(``);
// let counter = 0;
// splitWords.forEach((word) => {
//   if (word == `a` || word == `A`) {
//     counter++;
//   }
// });
// console.log(`Soraliyotgan harf: ${counter} mata ishtirok etgan.`);
// 8-mashq
// const types = [21.1, `Roziya`, `array`, [`I am array`], null, true, 214];
// const newTypes = [];
// types.forEach((type) => {
//   newTypes.push(typeof type);
// });
// console.log(newTypes);
// 9-mashq
// const word = `Uzbekistan`;
// console.log(word.lastIndexOf(word.slice(-1)) + 1);
// 10-mashq
// const number = [1, 2, 3, 4, 5];
// let resualt = [];
// number.forEach((num, i) => {
//   resualt.push(num + i);
// });
// console.log(resualt);
// 11-mashq
// let counter = 0;
// for (let i = 1; i <= 10; i++) {
//   counter += i;
// }
// console.log(counter);
// 12-mashq
// let number = 9;
// for (let i = 1; 1 <= 10; i++) {
//   let resualt = number * i + 1;
//   console.log(resualt);
// }
//13-mashq
// let number = [1, 2, 3, 4, 5];
// let resualt = [];
// const reverseFunc = (arr) => {
//   arr.forEach((num) => {
//     resualt.push(num * -1);
//   });
// };
// reverseFunc(number);
// console.log(resualt);
// 14-mashq
// let resualt = [];
// const fizzBuzzFunc = function (number) {
//   for (let i = 1; i <= number; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       resualt.push(`FizzBuzz`);
//     } else if (i % 5 == 0) {
//       resualt.push(`Buzz`);
//     } else if (i % 3 == 0) {
//       resualt.push(`Fizz`);
//     } else {
//       resualt.push(i);
//     }
//   }
// };
// fizzBuzzFunc(100);
// console.log(resualt);
// 15-mashq
// const umidaObj = {
//   name: `Umida`,
//   lastName: `Sodiqova`,
//   age: 14,
//   region: `Fergana`,
//   isMerried: false,
//   job: `Programmer`,
//   haqida: function () {
//     return `
//   Assalomu alaykum, Mening ismim ${this.name}, Familiyam ${
//       this.lastName
//     }.Yoshim ${this.age}da.${this.region}da yashayman.${
//       this.job
//     } bolib faoliyat yurutaman.${
//       this.isMerried ? "maktabni bitirganman" : "maktabni bitirmaganman"
//     } `;
//   },
// };
// console.log(umidaObj);
