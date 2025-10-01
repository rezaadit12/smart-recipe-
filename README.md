# Smart Recipe 

**Smart Recipe** adalah aplikasi yang memungkinkan pengguna membuat **resep makanan otomatis** berdasarkan bahan-bahan yang dimasukkan.

---

## Teknologi yang Digunakan

### Backend
- **Node.js + Express + TypeScript**
- **OpenAI API** untuk menghasilkan resep otomatis

**Endpoint utama:**  
`POST /api/recipes/generate`

**Fungsi:**  
Menerima daftar bahan dari pengguna (misal: `"telur, bawang, nasi"`) dan mengembalikan resep lengkap meliputi:
- Judul resep
- Deskripsi
- Porsi
- Waktu memasak
- Daftar bahan
- Langkah-langkah memasak
- Tips tambahan

### Frontend
- **React + TypeScript + Vite**

**Fungsi:**  
Menyediakan antarmuka interaktif bagi pengguna untuk:
- Memasukkan bahan yang tersedia
- Melihat hasil resep yang dihasilkan
- Mengikuti langkah-langkah memasak

---
## Catatan:
**Petunjuk instalasi dan menjalankan project dapat ditemukan di folder masing-masing (Backend dan Frontend)**
