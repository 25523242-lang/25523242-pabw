const profil = {
  nama: "Kandang Ayam Petelur",
  peran: "peternakan ayam petelur",
  sejak: 2018,
  deskripsi:
    "Kandang ini sudah jalan sejak 2018. Ayam yang dipelihara ada dua jenis, Lohmann Brown sama Isa Brown. Pakan dikasih dua kali sehari, telur dipanen tiap pagi buat dikirim ke pasar dan pelanggan langganan di sekitar.",
  jenisAyam: ["Lohmann Brown", "Isa Brown", "Pullet"],
  jumlahKandang: 5,
};

const judul = document.querySelector("#judul-halaman");
const isiProfil = document.querySelector("#teks-profil");
const galeri = document.querySelector("#wadah-galeri");
const footer = document.querySelector("#teks-footer");
const pesanKosong = document.querySelector("#pesan-kosong");
const barisFilter = document.querySelector("#filter");
const muatEl = document.querySelector("#muat");

judul.textContent = profil.nama;
isiProfil.textContent = profil.deskripsi;
footer.textContent = `© ${profil.sejak}–2026 ${profil.nama}.`;

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

export function render(daftar) {
  galeri.textContent = "";

  if (daftar.length === 0) {
    pesanKosong.textContent = "Belum ada data.";
    pesanKosong.hidden = false;
    return;
  }

  pesanKosong.hidden = true;
  daftar.forEach((kandang) => galeri.append(buatKartu(kandang)));
}

export function aturMemuat(aktif) {
  muatEl.hidden = !aktif;
}

export function tampilkanGalat(pesan) {
  galeri.textContent = "";
  pesanKosong.textContent = pesan;
  pesanKosong.hidden = false;
}

export function pasangFilter(daftar) {
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;

    const kategori = tombol.dataset.kategori;

    barisFilter.querySelectorAll("button").forEach((t) => {
      t.classList.toggle("aktif", t === tombol);
    });

    const terpilih =
      kategori === "semua"
        ? daftar
        : daftar.filter((p) => p.kategori === kategori);

    render(terpilih);
  });
}