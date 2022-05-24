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
 //console.log(fiyatlar.forEach((v) => v + (v / 100) * 10));//!ibretlik DİKKAT forEach void func.'dur undefined döner.
 //! 1.yöntem toplam zamlı
//  let total=0
//  fiyatlar.forEach((v) => total+=(v+(v / 100) * 10));
//  console.log(total);
 //!2.yöntem tek tek zmalı

//   fiyatlar.forEach((v) => console.log((v + (v / 100) * 10)));


//?cevap2
// const fiyatlar = [100, 250, 50, 89];
// fiyatlar.forEach((v) => v>90 && console.log(v));
// fiyatlar.forEach((v) => v < 90 || console.log(v));

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

//?cavap5
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


//?cevap6
// const maaslar = [3000, 5000, 4000, 6000, 6500];


//? forEach yöntemi ile
// let total=0
// maaslar.forEach((v)=>console.log(total+=v))

//?reduce yöntemi
// const toplam=maaslar.reduce((x,y)=>x+y);
// console.log(toplam);




