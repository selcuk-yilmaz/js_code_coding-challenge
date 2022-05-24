// ÇALIŞMA SORULARI
// SORU1: Taban ve yükseklik değerlerini parametre olarak alan ve bir üçgenin
// alanını hesaplayarak ana programa döndüren fonksiyonu yazınız.


// SORU2: kareAl, küpAl, üsAl şeklinde üç adet farklı arrow fonksiyonu
// tanımlayın. Bu fonksiyonların ana programdan gereken parametreleri alarak
// sonuçları ana programa döndürmeli gerekmektedir.


// SORU3: Yıl değerini parametre olarak alan ve bu yılın artık yıl olup olmadığını
// hesaplayarak sonucu ana programa döndüren fonksiyonu function-expression
// yöntemi ile yazınız. NOT: Yıl 4’e tam bölünüyorsa VE (100'e tam bölünmüyorsa
// VEYA 400'e tam bölünüyorsa) artık yıldır aksi takdirde değildir.

//!CEVAP1

//!1. YÖNTEM
// const alan= function (a,h){
//     let x= (a*h)/2;
//     console.log(x);
// }
// console.log(alan(4,5));


//!2.yöntem
// const alan= function (a,h){
//     let x= (a*h)/2;
//     return x
// }
// console.log(alan(4,5));



//!3. YÖNTEM
// const alan= (a,h)=>(a*h)/2;

// console.log(alan(4,5));



//!CEVAP2
// const kareal=(x,y)=>x*y;
// console.log(kareal(3,7));

// const küpal=(x,y,z)=>x*y*z;
// console.log(küpal(3,7,2));

// const üsal=(x,y)=>x**y;
// console.log(üsal(2,3));


//!CEVAP3 
// let x=+prompt("enter a year:");
// const leap=function(x){   
//     if ((x%4==0 && x%100 !=0) || x%400==0){
//         console.log(`${x} year is a leap year`); 

//     }else{
//         console.log(`${x} year is not a leap year`);
//     }
// }

// console.log(leap(x));
