//!ÖDEVLER
// ÖDEV1:
// fiyatlar dizisinde her bir fiyata %10 zam yapalım. NOT: FOREACH kullanılmalı ve orjinal dizi değiştirilmeli.

// const fiyatlar = [100, 250, 50, 89];

// ÖDEV2:
// fiyatlar dizisindeki fiyatı 90'dan büyük olan değerleri konsola tek tek bastırınız.

// ÖDEV3:
// fiyatlar dizisindeki fiyatı 110'dan küçük olan değerlere %10 artış yapın ve bu değerleri konsola tek tek bastırınız.

// ÖDEV4:
// maaslar dizisinde 4000'den düsük olan maaslara %50 zam yapmak istiyoruz ve bunu ayri dizi olarak saklamak istiyoruz.

// const maaslar = [3000, 5000, 4000, 6000, 6500];

// ÖDEV5:
// Maasi 4000 'den büyük olanlara %25 zam yaparak sonuçlari konsolda yazdiralim.

// ÖDEV6:
// Maaslarin toplamini hem forEach ile hem de reduce methodu ile çözünüz.

//?cevap1
 //const fiyatlar = [100, 250, 50, 89];
 //console.log(fiyatlar.forEach((v) => v + (v / 100) * 10));//! DİKKAT forEach void func.'dur undefined döner.

//!DİZİYİ DEĞİRİREREK ÇÖZÜM DİKKAAAT
// const fiyatlar = [100, 250, 50, 89];
// fiyatlar.forEach((v,i,arr)=>{
//     return arr[i]=v*1.1
// })
// console.log(fiyatlar);

//!DİZİYİ DEĞİRİREREK ÇÖZÜM + Math.floor
// fiyatlar.forEach((value, i, arr) => {
//   arr[i] = Math.floor(value * 1.1);
// });
// console.log(fiyatlar);




 //! diziyi değiştirmeden çözüm 
//  let total=0
//  fiyatlar.forEach((v) => total+=(v+(v / 100) * 10));
//  console.log(total);


 //! diziyi değiştirmeden çözüm 
//   const fiyatlar = [100, 250, 50, 89];
//   fiyatlar.forEach((v) => console.log(Math.floor(v + (v / 100) * 10)));





//?cevap2
// const fiyatlar = [100, 250, 50, 89];
// fiyatlar.forEach((v) => v>90 && console.log(v));
// fiyatlar.forEach((v) => v < 90 || console.log(v));
//!Başka çözüm (filter ile)
// const fiyatlar = [100, 250, 50, 89];
// fiyatlar.filter((x) => x >= 90).forEach((x) => console.log(x));

//?cevap3
// const fiyatlar = [100, 250, 50, 89];
// fiyatlar.forEach((v) => v < 110 && console.log((v*1.1).toFixed(2)));

//?cevap4
//!1. yöntem
// const maaslar = [3000, 5000, 4000, 6000, 6500];
// let sep=maaslar.map((v)=>v<4000 && v+v*0.5);
// console.log(sep);  //!4000 den büyüklere false yazdı
//!2. yöntem
// let sepe=maaslar.map((v)=>{
//     if(v<4000){
//         return v+v*0.5
//     }else{
//         return v;
//     }
// })
// console.log(sepe);

//!başka çözüm (filter+map)
// const maaslar = [3000, 5000, 4000, 6000, 6500];
// const eksi4000 = maaslar
//   .filter((maas) => maas < 4000)
//   .map((zam) => Math.floor(zam * 1.5));
// console.log(eksi4000);


//?cevap5
//!1.yöntem
// const maaslar = [3000, 5000, 4000, 6000, 6500];
// let sep=maaslar.map((v)=>v>4000 && v+v*0.25);
// console.log(sep);  //!4000 den küçüklere false yazdı
//!2.yöntem
// let sepe=maaslar.map((v)=>{
//     if(v>4000){
//         return v+v*0.25
//     }else{
//         return v;
//     }
// })
// console.log(sepe);

//!başka çözüm()
//?tek tek yazdırmalı filter+map+forEach
// const maaslar = [3000, 5000, 4000, 6000, 6500];
//   maaslar.filter((x) => x > 4000)
//   .map((x) => x + x / 4)
//   .forEach((x) => console.log(x));

 // ? ayrı bir dizide saklamak istersek filter+map
// const artı4000 = maaslar.filter((maas) => maas > 4000)
//   .map((maas) => Math.floor(maas * 1.25));
// console.log(artı4000);

//?cevap6
// const maaslar = [3000, 5000, 4000, 6000, 6500];


//? forEach yöntemi ile
// const maaslar = [3000, 5000, 4000, 6000, 6500];
// let total=0
// maaslar.forEach((v)=>console.log(total+=v))

//?reduce yöntemi
// const toplam=maaslar.reduce((x,y)=>x+y);
// console.log(toplam);




