import { pilihKategori, tambahFavorit } from './state.js';

export function pasangPendengar() {
  document.querySelector("#filter").addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;
    pilihKategori(tombol.dataset.kategori); 
  });


  document.querySelector("#wadah-galeri").addEventListener("click", (event) => {
    const tombol = event.target.closest(".favorit");
    if (!tombol) return;
    tambahFavorit(Number(tombol.dataset.id)); 
  });
}