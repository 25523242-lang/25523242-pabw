import { pilihKategori, tambahFavorit, aturUlang } from './state.js';

export function pasangPendengar() {
  document.querySelector("#filter").addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (btn && btn.dataset.kategori) {
      pilihKategori(btn.dataset.kategori);
    }
  });

  document.querySelector("#wadah-galeri").addEventListener("click", (e) => {
    const btn = e.target.closest(".favorit");
    if (btn) tambahFavorit(Number(btn.dataset.id)); 
  });

  document.querySelector("#atur-ulang").addEventListener("click", () => {
    aturUlang();
  });
}