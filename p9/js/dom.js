import { profil, dataKandang } from "./app.js";

const judul       = document.querySelector("#judul-halaman");
const isiProfil   = document.querySelector("#teks-profil");
const galeri      = document.querySelector("#wadah-galeri");
const tbody       = document.querySelector("#isi-tabel");
const footer      = document.querySelector("#teks-footer");
const pesanKosong = document.querySelector("#pesan-kosong");
const barisFilter = document.querySelector("#filter");

judul.textContent     = profil.nama;
isiProfil.textContent = profil.deskripsi;
footer.textContent    = `© ${profil.sejak}–2026 ${profil.nama}.`;

function buatKartu(kandang) {
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

  const tombol = document.createElement("button");
  tombol.type = "button";
  tombol.textContent = "Detail";

  kaki.append(status, tombol);
  artikel.append(isi, kaki);
  return artikel;
}

function renderGaleri(daftar) {
  galeri.textContent = "";
  if (daftar.length === 0) {
    pesanKosong.hidden = false;
    return;
  }
  pesanKosong.hidden = true;
  daftar.forEach((kandang) => galeri.append(buatKartu(kandang)));
}

function renderTabel(daftar) {
  tbody.textContent = "";
  daftar.forEach((kandang) => {
    const tr = document.createElement("tr");

    const tdNama = document.createElement("td");
    tdNama.textContent = kandang.nama;

    const tdJenis = document.createElement("td");
    tdJenis.textContent = kandang.jenis;

    const tdJumlah = document.createElement("td");
    tdJumlah.textContent = `${kandang.jumlah} ekor`;

    const tdProduksi = document.createElement("td");
    tdProduksi.textContent =
      kandang.produksi === 0 ? "Baru mulai bertelur" : `${kandang.produksi} butir/hari`;

    tr.append(tdNama, tdJenis, tdJumlah, tdProduksi);
    tbody.append(tr);
  });
}

function tandaiTombolAktif(tombolAktif) {
  barisFilter.querySelectorAll("button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

function terapkanFilter(kategori) {
  const terpilih =
    kategori === "semua"
      ? dataKandang
      : dataKandang.filter((kandang) => kandang.kategori === kategori);

  renderGaleri(terpilih);
  renderTabel(terpilih);
}

barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return;

  const kategori = tombol.dataset.kategori;
  tandaiTombolAktif(tombol);
  terapkanFilter(kategori);
});

renderGaleri(dataKandang);
renderTabel(dataKandang);
tandaiTombolAktif(barisFilter.querySelector("button[data-kategori='semua']"));