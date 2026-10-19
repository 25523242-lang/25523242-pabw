import { profil, saring } from './data.js';

const judul = document.querySelector("#judul-halaman");
const isiProfil = document.querySelector("#teks-profil");
const galeri = document.querySelector("#wadah-galeri");
const footer = document.querySelector("#teks-footer");
const pesanKosong = document.querySelector("#pesan-kosong");
const muatEl = document.querySelector("#muat");

export function aturMemuat(aktif) {
  muatEl.hidden = !aktif;
}

export function tampilkanGalat(pesan) {
  galeri.textContent = "";
  pesanKosong.textContent = pesan;
  pesanKosong.hidden = false;
}

export function render(state) {
  galeri.textContent = "";
  
  judul.textContent = profil.nama;
  isiProfil.textContent = profil.deskripsi;
  footer.textContent = `© ${profil.sejak}–2026 ${profil.nama}.`;
  const tampil = saring(state.daftarProyek, state.kategoriAktif);

  if (tampil.length === 0) {
    pesanKosong.textContent = "Belum ada data untuk kategori ini.";
    pesanKosong.hidden = false;
    return;
  }

  pesanKosong.hidden = true;
  tampil.forEach((kandang) => {
    galeri.append(buatKartu(kandang, state.favorit));
  });

  tandaiTombolAktif(state.kategoriAktif);
}

function buatKartu(kandang, favorit) {
  const artikel = document.createElement("article");
  artikel.className = "kartu";

  const isi = document.createElement("div");
  isi.className = "kartu__isi";

  const judulKartu = document.createElement("h3");
  judulKartu.className = "kartu__judul";
  judulKartu.textContent = kandang.nama;

  const keterangan = document.createElement("p");
  keterangan.textContent = `${kandang.jenis} · ${kandang.jumlah} ekor · ${kandang.produksi} butir per hari.`;

  isi.append(judulKartu, keterangan);

  const kaki = document.createElement("div");
  kaki.className = "kartu__kaki";

  const status = document.createElement("span");
  status.textContent = kandang.status;

  const tombolFavorit = document.createElement("button");
  tombolFavorit.type = "button";
  tombolFavorit.className = "favorit";
  tombolFavorit.dataset.id = kandang.id;
  tombolFavorit.textContent = favorit.includes(kandang.id) ? "★" : "☆";
  
  kaki.append(status, tombolFavorit);
  artikel.append(isi, kaki);
  return artikel;
}

function tandaiTombolAktif(kategoriAktif) {
  const tombolFilter = document.querySelectorAll("#filter button");
  tombolFilter.forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol.dataset.kategori === kategoriAktif);
  });
}