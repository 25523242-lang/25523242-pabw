import { ambilProyek } from './api.js';

export const profil = {
  nama: "Kandang Ayam Petelur",
  peran: "peternakan ayam petelur",
  sejak: 2018,
  deskripsi:
    "Kandang ini sudah jalan sejak 2018. Ayam yang dipelihara ada dua jenis, Lohmann Brown sama Isa Brown. Pakan dikasih dua kali sehari, telur dipanen tiap pagi buat dikirim ke pasar dan pelanggan langganan di sekitar.",
  jenisAyam: ["Lohmann Brown", "Isa Brown", "Pullet"],
  jumlahKandang: 5,
};

async function muatProyek() {
  try {
    const daftar = await ambilProyek();
    console.log(daftar);
  } catch (galat) {
    console.error(galat.message);
  }
}

muatProyek();