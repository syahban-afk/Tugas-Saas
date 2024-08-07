import { Hewan, Burung } from './hewan.js';

const kucing = new Hewan("Kucing", "mamalia");
console.log(kucing.deskripsi()); 

const elang = new Burung("Elang", "burung", true);
console.log(elang.deskripsi());
console.log(elang.kemampuanTerbang())
