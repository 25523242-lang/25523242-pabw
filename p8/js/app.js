/ p8

// data profil kandang

const profil = {
  nama: "Kandang Ayam Petelur",
  peran: "peternakan ayam petelur",
  sejak: 2018,
  deskripsi:
    "Kandang ini sudah jalan sejak 2018. Ayam yang dipelihara ada dua jenis, Lohmann Brown sama Isa Brown. Pakan dikasih dua kali sehari, telur dipanen tiap pagi buat dikirim ke pasar dan pelanggan langganan di sekitar.",
  jenisAyam: ["Lohmann Brown", "Isa Brown", "Pullet"],
  jumlahKandang: 3,
};

function perkenalan(data) {
  return `${data.nama} itu ${data.peran} yang sudah beroperasi sejak ${data.sejak}. Sekarang ada ${data.jumlahKandang} kandang aktif.`;
}

const formatJenis = (arr) => arr.join(" · ");

console.log(perkenalan(profil));
console.log(formatJenis(profil.jenisAyam));

const dataKandang = [
  { nama: "Kandang A", jenis: "Lohmann Brown", jumlah: 500, produksi: 450, status: "Produktif" },
  { nama: "Kandang B", jenis: "Isa Brown",     jumlah: 400, produksi: 360, status: "Produktif" },
  { nama: "Kandang C", jenis: "Pullet",        jumlah: 300, produksi: 0,   status: "Pemantauan" },
];