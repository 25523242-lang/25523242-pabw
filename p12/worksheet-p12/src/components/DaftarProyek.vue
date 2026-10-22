<script setup>
import { computed } from 'vue'
import { state, tambahFavorit } from '../state.js'
import { saring } from '../data.js'

const tampil = computed(() => saring(state.daftarProyek, state.kategoriAktif))
</script>

<template>
  <section id="galeri" class="utama">
    <h2>Galeri Kandang</h2>
    
    <p v-if="state.memuat">Memuat data...</p>
    <p v-else-if="state.galat" class="pesan-kosong">{{ state.galat }}</p>
    <p v-else-if="tampil.length === 0" class="pesan-kosong">Belum ada data untuk kategori ini.</p>

    <div v-else class="galeri">
      <article v-for="kandang in tampil" :key="kandang.id" class="kartu">
        <div class="kartu__isi">
          <h3 class="kartu__judul">{{ kandang.nama }}</h3>
          <p>{{ kandang.jenis }} · {{ kandang.jumlah }} ekor · {{ kandang.produksi }} butir per hari.</p>
        </div>
        <div class="kartu__kaki">
          <span>{{ kandang.status }}</span>
          <button class="favorit" @click="tambahFavorit(kandang.id)">
            {{ state.favorit.includes(kandang.id) ? '★' : '☆' }}
          </button>
        </div>
      </article>
    </div>

    <figure class="foto">
      <img src="/gambar.webp" alt="Baris ayam petelur di dalam kandang dengan lampu dan tempat pakan otomatis">
      <figcaption>Kandang ayam petelur, baris baterai dengan tempat pakan otomatis.</figcaption>
    </figure>
  </section>
</template>