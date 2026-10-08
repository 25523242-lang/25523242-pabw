# PABW – Ahmad Fachry Saputro – 25523242

Repo ini memuat pekerjaan mata kuliah Pengembangan Aplikasi Berbasis Web, satu folder untuk setiap pertemuan.
## Pertemuan 3 – Halaman profil saya

Topik halaman saya: produksi telur ayam harian.

- Judul halaman: Produksi Telur Ayam Harian
- Deskripsi: catatan hasil panen telur ayam dari kandang saya, dipakai untuk memantau jumlah dan kualitas telur tiap kandang
- Tautan navigasi: Daftar Panen, Catat Panen, Tentang Kandang
- Dua bagian utama: Daftar Panen, Catat Panen
- Kolom tabel: kandang, jumlah telur, tanggal panen, kualitas
- Kolom form: kandang, jumlah telur, tanggal panen
- Gambar: telur-1.webp

## Catatan penggunaan AI
# Saya Menggunakan AI untuk Memberikan saran struktur elemen HTML yang baik (tabel, form, dan navigasi).
# Membantu pemahaman sintaks dan *debugging* ketika terjadi masalah pada alur halaman.


## Pertemuan 4 - Design token halaman profil kandang

Hari ini saya ubah profil.html dari P3 supaya punya tampilan.
File CSS yang saya buat ada 5: tokens.css, base.css, layout.css,
komponen.css, tema.css. Semuanya ada di folder worksheet-p4/.

Halaman ini tentang kandang ayam petelur. Warna utama yang saya
pilih #8B4513 (cokelat), karena cocok dengan tema kandang dan
lebih beda dari warna biru yang umum dipakai.

Token yang saya tetapkan:

- -color-bg :  #FFFFFF (latar halaman)
- -color-fg : #1A1A1A (teks utama)
- -color-surface : #FFFFFF (latar tabel dan input)
- -color-border : #E0D9C9 (garis pemisah)
- -color-primary : #8B4513 (tombol dan tautan)
- -color-danger : #B00020 (isian salah)
- -color-focus : #8B4513 (garis fokus)
- -radius-md : 0.5rem (sudut tombol)
- -space-4 : 1rem (jarak standar)

Kriteria selesai saya: kalau saya ubah --brown-700 di tokens.css,
warna tombol, tautan, judul, dan garis fokus ikut berubah. Uji
ini ada di Lembar G dan hasilnya sesuai.

Tema gelap saya bikin pakai saklar manual di header, pakai
checkbox dan :has(). Tombol diklik nyala jadi gelap, diklik lagi
balik terang.

Data Kandang saya ubah dari kartu jadi tabel. Kolomnya Kandang,
Jenis Ayam, Jumlah, dan Produksi Telur.

## Catatan penggunaan AI:"Saya pakai AI untuk mencari contoh sintaks :has() dan cara pakai var(). Kode CSS saya ."
 

## Pertemuan 5 - Layout modern: flexbox dan grid

Di pertemuan ini saya ubah susunan halaman dari P4. Isi, warna, dan token
tetap sama, yang berubah cuma CSS posisi. Saya juga tambah satu div
pembungkus .page di profil.html buat bungkus header, main, dan footer.

Yang saya pakai:

- .page pakai grid tiga baris auto 1fr auto, tingginya pakai 100dvh.
- .isi pakai grid dua kolom 16rem 1fr, pakai area bernama sisi, utama, dan bawah.
- Navbar pakai flex, jaraknya pakai gap bukan margin.
- Kaki kartu juga flex, biar teks kiri tombol kanan.
- Galeri pakai repeat(auto-fit, minmax(16rem, 1fr)), kolomnya nambah sendiri tanpa media query.

Yang saya perbaiki:

- Pertama kali dua section saya kasih class .bawah, jadinya tumpuk. Sudah
  saya bungkus jadi satu div .bawah.
- Tabel meluber di 360 px, saya kasih overflow-x auto di pembungkusnya.
- Judul panjang bikin kolom melebar, saya kasih min-width 0 sama overflow-wrap anywhere.

Sudah saya tes di 360 px dan 1280 px, tidak ada yang keluar dari kotak.
Tema gelap dari P4 masih jalan lewat tombol pengalih.

## Catatan penggunaan AI

Di P5 ini saya pakai AI buat ngingetin sintaks repeat(auto-fit, minmax)
dan buat cek kenapa dua section bisa tumpuk di area grid yang sama.
Kode CSS-nya saya tulis sendiri sambil nyocokin sama contoh.

## Pertemuan 6 - Responsif Mobile-First

Di P6 ini saya nggak bikin halaman baru. Halaman P5 sama kelima file CSS-nya
saya pakai lagi, terus saya tambah satu file baru namanya responsif.css.

Yang saya kerjakan:

- Pastikan meta viewport ada di head HTML
- Bikin responsif.css, bagian dasar buat layar sempit dulu tanpa media query
- Tambah dua titik henti pakai min-width: 48rem dan 60rem
- Gambar dibatasi max-width 100%, tabel lebar dikasih wadah overflow-x auto
- Tes di 360 px, 768 px, dan 1280 px

Titik henti yang saya pakai:

- 48rem: galeri dari satu kolom jadi dua kolom
- 60rem: sidebar bersanding sama konten, galeri jadi tiga kolom

Hasil tes 3 lebar:

- 360 px : 1 kolom
- 768 px : 2 kolom
- 1280 px: 3 kolom

Yang saya ubah dari P5:

- profilkandang.html : nambah link ke responsif.css
- layout.css : hapus media query max-width, sederhanain .isi
- komponen.css : .galeri diganti jadi 1fr di dasar
- responsif.css : file baru, isinya gaya dasar + 2 titik henti

## Catatan penggunaan AI

Di P6 ini saya pakai AI buat nanya bedanya min-width sama max-width
di media query, terus buat cek kenapa .galeri saya nggak berubah pas
diuji di 768 px. Kode CSS-nya saya tulis dan sesuaikan sendiri.

# worksheet-p8

Tugas PABW pertemuan 8 — data halaman profil kandang jadi variabel JS.

## Yang saya kerjakan
- mindahin isi halaman ke app.js (profil, galeri, tabel)
- bikin 2 fungsi: perkenalan + format jenis ayam
- pakai map, filter, find buat data kandang
- sambungin ke html pakai querySelector

## Bantuan AI
- saya pakai AI buat contoh struktur array of object