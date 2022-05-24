// ÖDEV: Aşağıda görüldüğü gibi uzun olan youtube linklerini kısa formata çevirecek kodu yazınız.

// https://www.youtube.com/watch?v=b7vfp5G4brE => uzun-link https://youtu.be/b7vfp5G4brE => kısa-link
// //!senin çözüm
// let abc = "https://www.youtube.com/watch?v=b7vfp5G4brE";
// let cut = abc.split("");
// let def = cut.splice(8, 40, "youtu.be/b7vfp5G4brE");
// console.log(cut.join(""));

// //!diğer çözümler
// let x = "https://www.youtube.com/watch?v=b7vfp5G4brE";
// let muaz = x.replace("www.youtube.com/watch?v=", "youtu.be/");
// console.log(muaz);

// let zz =
//   x.slice(0, x.indexOf("www")) + "youtu.be/" + x.slice(x.indexOf("=") + 1);
// console.log(zz);

// let zzz =
//   x.slice(0, x.indexOf("www")) +
//   x.slice(x.indexOf("you"), x.indexOf("be")) +
//   ".be/" +
//   x.slice(x.indexOf("=") + 1);
// console.log(zzz);

// let asd="Everything you get your heart desires"

//?REVERSE E BAŞKA ÖRNEK SENİN ÖRNEĞİN
// let asd="Everything you get your heart desires"
// let a=asd.split(" ")
// let result=[];
// for (let i=0;i<a.length;i++){
//     result.push(a[i].split("").reverse().join(""));
// }
//  console.log(result.join(" "));


// let asd="Everything you get your heart desires"
// let x = asd.split(" ");
// let result = [];
// for (let i = 0; i < x.length; i++) {
//   result.push(x[i].split("").reverse().join(""));
// }
// console.log(result.join(" "));