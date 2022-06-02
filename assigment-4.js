// ODEV4: maaslar dizisi icin maasi ortalamanin altinda olanlara %20 zam yaparak zamli maaslari ayrı bir diziye atalım.
// const maaslar = [3000, 5000, 4000, 6000, 6500];

// ODEV5: Kisiler dizisi icin asagıdaki islemleri gerceklestiren kodları yazınız
// 1: Yasi(age) 33 den kücük olan kisilerin adlarini (name) listeyiniz.
// 2: 33 yasindan kücüklerin isimlerini diziye saklayiniz.
// 3: Meslegi developer olanlarin isim ve yaslarini yeni bir Obje olarak yeni diziye saklayiniz.

// const kisiler = [
//   { name: "Ahmet", surname: "Can", job: "developer", age: 30 },
//   { name: "Mehmet", surname: "Baki", job: "tester", age: 35 },
//   { name: "Nur", surname: "Ersan", job: "team lead", age: 40 },
//   { name: "Merve", surname: "Veli", job: "developer", age: 26 },
//   { name: "Ruzgar", surname: "Kuzey", job: "tester", age: 24 },
// ];

//!çözüm-4
// const maaslar = [3000, 5000, 4000, 6000, 6500];
// const sep=maaslar.reduce((x,y)=>x+y);
// console.log(sep);
// const end= maaslar.filter((m)=>m<sep/maaslar.length).map((z)=>z*1.2);
// console.log(end);

//!çözüm-5-1
//!1.yöntem
// kisiler.forEach((kisi) => kisi.age < 33 && console.log(kisi.name));
//!2.yöntem
// const asd = kisiler.filter((v) => v.age < 33).map((n) => n.name);
// console.log(asd);

//!çözüm-5-2
// const kucuk = kisiler.filter((kisi) => kisi.age < 33).map((v) => v.name);
// console.log(kucuk);

//!çözüm-5-3
//!1.yöntem
// const newer = kisiler
//   .filter((kisi) => kisi.job == "developer").map((v) => ({
//     name: v.name,age: v.age,
//   }));
// console.log(newer);
//!2.yöntem
// const dev=kisiler.filter((kisi)=>kisi.job=="developer").map((kisi)=> {
//   ({name,age}=kisi)
//   return{name,age}
// })


