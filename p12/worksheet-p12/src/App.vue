<script setup>
import { onMounted, watch } from 'vue'
import { state, simpan, muat, pulihkan, isiProyek } from './state.js'
import { ambilProyek } from './api.js'
import { profil } from './data.js'

import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'

onMounted(async () => {
  pulihkan(muat())
  try {
    isiProyek(await ambilProyek())
  } catch (galat) {
    state.galat = 'Data gagal dimuat. Periksa koneksi, lalu muat ulang.'
  } finally {
    state.memuat = false
  }
})

watch(state, (nilai) => simpan(nilai), { deep: true })
</script>

<template>
  <div class="page">
    <header>
      <div class="baris-atas">
        <h1 id="judul-halaman">{{ profil.nama }}</h1>
        <nav aria-label="Navigasi utama">
          <ul>
            <li><a href="#profil">Profil</a></li>
            <li><a href="#kandang">Kandang</a></li>
            <li><a href="#kontak">Kontak</a></li>
          </ul>
        </nav>
        <input type="checkbox" id="tema" class="pengalih-tema">
        <label for="tema" class="tombol-tema">Tema gelap</label>
      </div>
    </header>

    <main class="isi">
      <KepalaProfil :profil="profil" />
      <TombolFilter />
      <DaftarProyek />
      
      <div class="bawah">
        <section id="kandang">
          <h2>Data Kandang</h2>
          <div class="tabel-bungkus">
            <table class="tabel-kandang">
              <thead>
                <tr>
                  <th>Kandang</th>
                  <th>Jenis Ayam</th>
                  <th>Jumlah</th>
                  <th>Produksi Telur</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="kandang in state.daftarProyek" :key="kandang.id">
                  <td>{{ kandang.nama }}</td>
                  <td>{{ kandang.jenis }}</td>
                  <td>{{ kandang.jumlah }} ekor</td>
                  <td>{{ kandang.produksi }} butir/hari</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <FormKontak />
      </div>
    </main>

    <footer>
      <p>© {{ profil.sejak }}–2026 {{ profil.nama }}.</p>
    </footer>
  </div>
</template>