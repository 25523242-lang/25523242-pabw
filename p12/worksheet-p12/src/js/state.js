import { reactive } from 'vue'

const KUNCI = "pabw-p11";
const VERSI = 2;

export const state = reactive({
  kategoriAktif: "semua",
  favorit: [],
  daftarProyek: [],
  memuat: true,
  galat: '',
});

export function pilihKategori(kategori) {
  state.kategoriAktif = kategori;
}

export function tambahFavorit(id) {
  if (state.favorit.includes(id)) return;
  state.favorit = [...state.favorit, id];
}

export function isiProyek(daftar) {
  state.daftarProyek = daftar;
}

export function simpan(state) {
  const isi = {
    versi: VERSI,
    kategoriAktif: state.kategoriAktif,
    favorit: state.favorit
  };
  localStorage.setItem(KUNCI, JSON.stringify(isi));
}

export function muat() {
  try {
    const data = JSON.parse(localStorage.getItem(KUNCI));
    if (!data || data.versi !== VERSI) {
      localStorage.removeItem(KUNCI);
      return null;
    }
    return data;
  } catch {
    localStorage.removeItem(KUNCI);
    return null;
  }
}

export function pulihkan(data) {
  if (!data) return;
  state.kategoriAktif = data.kategoriAktif;
  state.favorit = data.favorit;
}

export function aturUlang() {
  localStorage.removeItem(KUNCI);
  state.kategoriAktif = 'semua';
  state.favorit = [];
}