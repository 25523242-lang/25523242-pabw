# PABW – Ahmad Fachry Saputro – 25523242

Repo ini memuat pekerjaan mata kuliah Pengembangan Aplikasi Berbasis Web, satu folder untuk setiap pertemuan.
## Pertemuan 4 - Design token halaman profil kandang

Hari ini saya ubah profil.html dari P3 supaya punya tampilan.
File CSS yang saya buat ada 5: tokens.css, base.css, layout.css,
komponen.css, tema.css. Semuanya ada di folder worksheet-p4/.

Halaman ini tentang kandang ayam petelur. Warna utama yang saya
pilih #8B4513 (cokelat), karena cocok dengan tema kandang dan
lebih beda dari warna biru yang umum dipakai.

Token yang saya tetapkan:

- --color-bg : #FBF8F1 (latar halaman)
- --color-fg : #1A1A1A (teks utama)
- --color-surface : #FFFFFF (latar tabel dan input)
- --color-border : #E0D9C9 (garis pemisah)
- --color-primary : #8B4513 (tombol dan tautan)
- --color-danger : #B00020 (isian salah)
- --color-focus : #8B4513 (garis fokus)
- --radius-md : 0.5rem (sudut tombol)
- --space-4 : 1rem (jarak standar)

Kriteria selesai saya: kalau saya ubah --brown-700 di tokens.css,
warna tombol, tautan, judul, dan garis fokus ikut berubah. Uji
ini ada di Lembar G dan hasilnya sesuai.

Tema gelap saya bikin pakai saklar manual di header, pakai
checkbox dan :has(). Tombol diklik nyala jadi gelap, diklik lagi
balik terang.

Data Kandang saya ubah dari kartu jadi tabel. Kolomnya Kandang,
Jenis Ayam, Jumlah, dan Produksi Telur.

## Catatan penggunaan AI:"Saya pakai AI untuk mencari contoh sintaks :has() dan cara pakai var(). Kode CSS saya ."


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

