class Hewan {
    constructor(nama, jenis) {
        this.nama = nama;
        this.jenis = jenis;
    }

    deskripsi() {
        return `Ini adalah ${this.nama} yang merupakan seekor ${this.jenis}.`;
    }
}

class Burung extends Hewan {
    constructor(nama, jenis, bisaTerbang) {
        super(nama, jenis);
        this.bisaTerbang = bisaTerbang;
    }

    kemampuanTerbang() {
        return this.bisaTerbang ? `${this.nama} bisa terbang.` : `${this.nama} tidak bisa terbang.`;
    }
}

export { Hewan, Burung };
