// Spread Operator pada Array
const warna1 = ["Merah", "Hijau"];
const warna2 = ["Biru", "Kuning"];
const semuaWarna = [...warna1, ...warna2];
console.log(semuaWarna); 

// Spread Operator pada Object
const person1 = { nama: "Andi", umur: 25 };
const person2 = { ...person1, pekerjaan: "Dokter" };
console.log(person2); 
