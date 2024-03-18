function NilaiMahasiswa(nama, nilai) {
    let mahasiswa = {
        nama: nama,
        nilai: nilai,
        keterangan: function() {
            if (mahasiswa.nilai >= 70) {
                return "Lulus";
            } else {
                return "Tidak Lulus";
            }
        }
    };

    return mahasiswa;
}

let mahasiswa = NilaiMahasiswa("Sadika", 90);
console.log(mahasiswa.keterangan());
