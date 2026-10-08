// p8

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

console.log(profil.nama);

// fungsi buat kalimat perkenalan
function perkenalan(data) {
  return `${data.nama} itu ${data.peran} yang sudah beroperasi sejak ${data.sejak}. Sekarang ada ${data.jumlahKandang} kandang aktif.`;
}

// rapihin jenis ayam jadi satu baris
const formatJenis = (arr) => arr.join(" · ");

console.log(perkenalan(profil));
console.log(formatJenis(profil.jenisAyam));

// data kandang
const dataKandang = [
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

console.table(dataKandang);

// ambil yang produktif aja
const produktif = dataKandang.filter((k) => k.status === "Produktif");
console.table(produktif);

// cari kandang C
const kandangC = dataKandang.find((k) => k.nama === "Kandang C");
console.log(kandangC);

// ringkasan tiap kandang
const ringkasan = dataKandang.map(
  (k) => `${k.nama}: ${k.jenis}, ${k.jumlah} ekor, ${k.produksi} butir/hari`
);
console.log(ringkasan);

// copy dulu baru sort biar aslinya gak kegeser
const urut = [...dataKandang].sort((a, b) => b.produksi - a.produksi);
console.table(urut);

// ambil elemen dari html
const judul = document.querySelector("#judul-halaman");
const isiProfil = document.querySelector("#teks-profil");
const galeri = document.querySelector("#wadah-galeri");
const tbody = document.querySelector("#isi-tabel");
const footer = document.querySelector("#teks-footer");

judul.textContent = profil.nama;
isiProfil.textContent = profil.deskripsi;
footer.textContent = `© ${profil.sejak}–2026 ${profil.nama}.`;

// kartu galeri
let kartuHTML = "";
for (const k of dataKandang) {
  kartuHTML += `
    <article class="kartu">
      <div class="kartu__isi">
        <h3 class="kartu__judul">${k.nama}</h3>
        <p>${k.jenis} · ${k.jumlah} ekor · ${k.produksi} butir per hari.</p>
      </div>
      <div class="kartu__kaki">
        <span>${k.status}</span>
        <button type="button">Detail</button>
      </div>
    </article>
  `;
}
galeri.innerHTML = kartuHTML;

// baris tabel
let barisHTML = "";
for (const k of dataKandang) {
  const teks = k.produksi === 0 ? "Baru mulai bertelur" : k.produksi + " butir/hari";
  barisHTML += `
    <tr>
      <td>${k.nama}</td>
      <td>${k.jenis}</td>
      <td>${k.jumlah} ekor</td>
      <td>${teks}</td>
    </tr>
  `;
}
tbody.innerHTML = barisHTML;