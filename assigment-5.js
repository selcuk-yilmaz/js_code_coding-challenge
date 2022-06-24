//!JS-CC-007 : Count Digits
// Suppose we have an integer d between 0 and 9, we also have two positive integers low and high as lower and upper bounds, respectively. We have to find the number of times that d occurs as a digit in all integers between low and high, including the bounds low and high.

// For example, d=2, low= 10, high = 23 then the output will be 6, as digit d = 2 occurs 6 times: 12, 20, 21, 22, 23.

// function countDigits(d, l, h) {
//   if (d >= 0 && d < 10 && l > 0 && l < h) {
//     let a = "";
//     count = 0;
//     for (let i = l; i <= h; i++) {
//       a.push(i);
//       a.join("")
//         .split()
//         .forEach((v) => {
//           v == d && count++;
//         });
//     }
//   }else{
//     return -1
//   }
// }

// console.log(countDigits(2, 10, 23));

// let count=0
// for (let i =10; i <24; i++) {
//   for (let j = 0; j <2; j++) {
//     5==i.toString().charAt(j) && count++;
//   }
// }
// console.log(count);



//!çözüm senn
// function countDigits(d, l, h) {
//   let count = 0;
//   if (d >= 0 && d < 10 && l > 0 && l < h) { 
//     for (let i = l; i <= h; i++) {
//       for (let j = 0; j < 2; j++) {
//         d == i.toString().charAt(j) && count++;
//       }
//     }
//   } else {
//     return -1;
//   }
//   return count
// }
// console.log(countDigits(1,3,2));
