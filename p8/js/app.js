const profil = {
  nama: "Kandang Ayam Petelur",
  peran: "peternakan ayam petelur",
  sejak: 2018,
  deskripsi:
    "Kandang ini beroperasi sejak 2018. Ayam yang dipelihara jenis Lohmann Brown dan Isa Brown. Pakan diberikan dua kali sehari, telur dipanen setiap pagi lalu dikirim ke pasar dan pelanggan tetap di sekitar kota.",
  jumlahKandang: 3,
};

const daftarKandang = [
  {
    nama: "Kandang A",
    jenis: "Lohmann Brown",
    jumlah: 500,
    produksi: 450,
    status: "Produktif",
  },
  {
    nama: "Kandang B",
    jenis: "Isa Brown",
    jumlah: 400,
    produksi: 360,
    status: "Produktif",
  },
  {
    nama: "Kandang C",
    jenis: "Pullet",
    jumlah: 300,
    produksi: 0,
    status: "Pemantauan",
  },
];

function buatPerkenalan(data) {
  return `${data.nama} adalah ${data.peran} yang beroperasi sejak ${data.sejak}. Saat ini ada ${data.jumlahKandang} kandang aktif.`;
}

function formatJenis(daftar) {
  return daftar.join(" · ");
}

function hitungTotalProduksi(daftar) {
  let total = 0;
  for (const kandang of daftar) {
    total += kandang.produksi;
  }
  return total;
}

console.log(buatPerkenalan(profil));
console.log(formatJenis(profil.keahlian ?? ["Lohmann Brown", "Isa Brown", "Pullet"]));

console.table(daftarKandang);

const kandangProduktif = daftarKandang.filter(
  (kandang) => kandang.status === "Produktif"
);
console.table(kandangProduktif);

const kandangC = daftarKandang.find((kandang) => kandang.nama === "Kandang C");
console.log(kandangC);

const ringkasanKandang = daftarKandang.map(
  (kandang) =>
    `${kandang.nama}: ${kandang.jenis} · ${kandang.jumlah} ekor · ${kandang.produksi} butir/hari`
);
console.log(ringkasanKandang);

const urutProduksi = [...daftarKandang].sort((a, b) => b.produksi - a.produksi);
console.table(urutProduksi);

console.log("Total produksi:", hitungTotalProduksi(daftarKandang), "butir/hari");


const judulHalaman = document.querySelector("#judul-halaman");
const teksProfil = document.querySelector("#teks-profil");
const wadahGaleri = document.querySelector("#wadah-galeri");
const isiTabel = document.querySelector("#isi-tabel");
const teksFooter = document.querySelector("#teks-footer");

judulHalaman.textContent = profil.nama;
teksProfil.textContent = profil.deskripsi;
teksFooter.textContent = `© ${profil.sejak}–2026 ${profil.nama}.`;
wadahGaleri.innerHTML = daftarKandang
  .map(
    (kandang) => `
    <article class="kartu">
      <div class="kartu__isi">
        <h3 class="kartu__judul">${kandang.nama}</h3>
        <p>${kandang.jenis} · ${kandang.jumlah} ekor · ${kandang.produksi} butir per hari.</p>
      </div>
      <div class="kartu__kaki">
        <span>${kandang.status}</span>
        <button type="button">Detail</button>
      </div>
    </article>
  `
  )
  .join("");

// Tabel: satu baris untuk setiap kandang
isiTabel.innerHTML = daftarKandang
  .map(
    (kandang) => `
    <tr>
      <td>${kandang.nama}</td>
      <td>${kandang.jenis}</td>
      <td>${kandang.jumlah} ekor</td>
      <td>${kandang.produksi === 0 ? "Baru mulai bertelur" : kandang.produksi + " butir/hari"}</td>
    </tr>
  `
  )
  .join("");