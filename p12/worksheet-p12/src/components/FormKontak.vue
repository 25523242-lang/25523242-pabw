<template>
  <section id="kontak">
    <h2>Hubungi Kami</h2>
    <form id="form-kontak" action="#" method="post" novalidate>
      <div class="form-kolom">
        <label for="nama">Nama</label>
        <input id="nama" name="nama" type="text" required>
        <span class="pesan-galat" id="galat-nama">Nama wajib diisi.</span>
      </div>
      <div class="form-kolom">
        <label for="email">Email</label>
        <input id="email" name="email" type="email" required>
        <span class="pesan-galat" id="galat-email">Masukkan email yang benar.</span>
      </div>
      <div class="form-kolom">
        <label for="telepon">Telepon</label>
        <input id="telepon" name="telepon" type="tel" inputmode="tel">
        <span class="pesan-galat" id="galat-telepon"></span>
      </div>
      <div class="form-kolom">
        <label for="kebutuhan">Kebutuhan</label>
        <select id="kebutuhan" name="kebutuhan" required>
          <option value="" disabled selected hidden>Pilih kebutuhan…</option>
          <option value="telur">Beli Telur</option>
          <option value="pullet">Beli Bibit Ayam</option>
          <option value="pakan">Tanya Pakan</option>
        </select>
        <span class="pesan-galat" id="galat-kebutuhan">Pilih salah satu kebutuhan.</span>
      </div>
      <div class="form-kolom">
        <label for="pesan">Pesan</label>
        <textarea id="pesan" name="pesan" rows="4" required></textarea>
        <span class="pesan-galat" id="galat-pesan">Pesan tidak boleh kosong.</span>
      </div>
      <button type="submit">Kirim</button>
    </form>
  </section>
</template>