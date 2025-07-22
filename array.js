let info = {
    name: "Emircan",
    surname: "Çaldır",
    age:23
}

let arr = [
    { //böyle indexleme de {} kullanıp virgul katarak indexe eleman ekleyebiliriz.
    name: "Emircan",
    surname: "Çaldır",
    age:23 
    },
    { 
    name: "Emircan",
    surname: "Çaldır",
    age:23    
    }
]
console.log(arr[0].name) // 0. indexteki verilen kümenin name değişkenini yazdırır 

// arrayde ekleme çıkarma 

let meyveler = ["elma","armut"]
meyveler.push("muz") // arrayin en sonuna muzu ekler 
console.log(meyveler)
meyveler.pop() // arrayin en son elemanını diziden atar 
console.log(meyveler)
meyveler.unshift("portakal") // arrayin başına portakalı ekler yani unshift başa push sona ekler
console.log(meyveler)

//concat: iki arrayi birşeltirip tek array içinde yazmayı sağlar 

let meyveler1 = ["portakal","elma","armut","muz"]
let meyveler2 = ["elma","armut","ananas","kivi"]
let birlestirilmisdizi = meyveler1.concat(meyveler2)
console.log(birlestirilmisdizi)

// FİLTRELEME : Bir array içersinde istediğimiz adda bir değişkene erişmek için filter kullanırıız

let filt = meyveler1.filter(meyve => meyve == "elma") // burda filter bizi array döner eğer string dönmesini istersek filter yerine find yazarız
console.log(filt)

// örnek

let sayilar = [1,2,3,40,5,6,7,8,9]
let sayiFiltresi = sayilar.filter(sayi => sayi % 2 === 0)
console.log(sayiFiltresi)

// map kullanarak mevcut diziyi kullanıp üzerinde işlemler yaparak yeni bir dizi oluşturabilirsin

let mapİslemi = sayilar.map(sayi => sayi * 2 )

console.log(mapİslemi)

// reduce ile bir dizi içindeki sayıların toplamonı bulabiliriz
// BURASI ÖNEMLİ ---------------------------------------------------------------------------
let toplam = sayilar.reduce((acc,sayi) => acc + sayi , 0)
console.log(toplam)

// FOREACH kullanımı 

let a = sayilar.forEach(sayi=>console.log(sayi))

// büyükten küçüğe doğru sıralama  SORT kullanırken iki değişken atıyoruz içine
//  ve okla gösterip bu değişkenlerin farkını alıyoruz

let sırala = sayilar.sort((a,b) => a-b)
console.log(sırala)

// reverse, dizi içindeki elemanların sırasını tam tersine çevirir.

console.log(sayilar.reverse())



































