<script setup>
const props = defineProps({
  profil: { type: Object, required: true },
})
</script>

<template>
  <section id="profil" class="sisi">
    <h2>Profil Kandang</h2>
    <p>{{ props.profil.deskripsi }}</p>
  </section>
</template>