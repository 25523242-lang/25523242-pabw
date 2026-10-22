<script setup>
import { state, pilihKategori, aturUlang } from '../state.js'
</script>

<template>
  <div>
    <div id="filter" class="baris-filter" role="group" aria-label="Filter kategori kandang">
      <button type="button" :class="{ aktif: state.kategoriAktif === 'semua' }" @click="pilihKategori('semua')">Semua</button>
      <button type="button" :class="{ aktif: state.kategoriAktif === 'produktif' }" @click="pilihKategori('produktif')">Produktif</button>
      <button type="button" :class="{ aktif: state.kategoriAktif === 'pemantauan' }" @click="pilihKategori('pemantauan')">Pemantauan</button>
    </div>
    <button type="button" @click="aturUlang" style="margin-bottom: 1rem; cursor: pointer;">Atur ulang pilihan</button>
  </div>
</template>