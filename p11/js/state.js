import { render } from './dom.js';

export const state = {
  kategoriAktif: "semua",
  favorit: [],
  daftarProyek: []
};

export function pilihKategori(kategori) {
  state.kategoriAktif = kategori;
  render(state);
}

export function tambahFavorit(id) {
  if (state.favorit.includes(id)) return;
  state.favorit = [...state.favorit, id]; 
  render(state);
}

export function isiProyek(daftar) {
  state.daftarProyek = daftar;
  render(state);
}