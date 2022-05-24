//? Write a code to find numbers which are divisible by 3 and 5, between 100 and 1000.
// let result=[]
// const abc=function(){
//     for (let i=100;i<=1000;i++){
//     if (i%3==0 && i%5==0){
//         result+=i
//     }
// }
// console.log(result);
// }
// abc();

// let result=[]
// for (let i=100;i<=1000;i++){
//     if (i%3==0 && i%5==0){
//         result.push(i);
//     }
// }
// console.log(result);

//?Write a Python/JavaScript code to sort the list/array below without using .sort() method.
// elements of list = [999, 333, 2, 8982, 12, 45, 77, 99, 11]
// Expected output:
// [2, 11, 12, 45, 77, 99, 333, 999, 8982]

//!çalıştı ama +7 ? anlamadım
// elements = [999, 333, 2, 8982, 12, 45, 77, 99, 11];
// function abc(elements) {
//   let result = [];
//   for (let i = 0; i <= elements.length + 7; i++) {
//     result.push(Math.min(...elements));
//     elements.splice(elements.indexOf(Math.min(...elements)), 1);
//   }
//   return result;
// }
// console.log(abc(elements));

//?muaz hoca
// let list = [999, 333, 2, 8982, 12, 45, 77, 99, 11];

// const sayac = list.length;

// let empty_list = [];

// for (let i = 0; i < sayac; i++) {
//   empty_list.push(Math.min(...list));
//   list.splice(list.indexOf(Math.min(...list)), 1);
// }

// console.log(empty_list);

// console.log(abc(elements));

// elements = [[999, 333, 2, 8982, 12, 45, 77, 99, 11]];
// function abc(elements) {
//   let result = [];
//   for (let i = 0; i < 2; i++) {
//     result.push(Math.min(...elements[i]));
//   }
//   return result;
// }
// console.log(abc(elements));
//!çalışmadı
// array = [999, 333, 2, 8982, 12, 45, 77, 99, 11];

// function abc(array) {
//   let barry = [];
//   let min = array[0];
//   for (let j = 0; j < array.length; j++) {
//     for (let i = 0; i < array.length; i++) {
//       if (min > array[i]) {
//         min = array[i];
//         barry.push(min);
//         array.splice(array.indexOf(min), 1);
//       }
//     }
//   }
//   //   array.splice(min);

//   return barry;
// }
// console.log(abc(array));
