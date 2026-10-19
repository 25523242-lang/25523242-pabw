import { ambilProyek } from './api.js';
import { isiProyek, pulihkan, muat } from './state.js';
import { aturMemuat, tampilkanGalat } from './dom.js';
import { pasangPendengar } from './events.js';

async function mulai() {
  pulihkan(muat()); 
  pasangPendengar();
  
  aturMemuat(true);

  try {
    const data = await ambilProyek();
    isiProyek(data); 
  } catch (err) {
    tampilkanGalat("Data gagal dimuat. Periksa koneksi, lalu muat ulang.");
    console.error(err.message);
  } finally {
    aturMemuat(false);
  }
}

mulai();