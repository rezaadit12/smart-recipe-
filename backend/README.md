# Backend API - Smart Receipe

Backend Smart Recipe ini berfungsi untuk membuat resep makanan berdasarkan bahan-bahan yang dimasukkan pengguna.

---

## Tech Stack
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [OpenAI API](https://platform.openai.com/) (untuk rekomendasi resep)
- [Zod](https://zod.dev/) (validasi data)


---

## Setup Project

**1. Clone repo**
```bash
git clone <repository-url>
cd backend
```

**2. Copy `.env` file**

```bash
cp .env.example .env
```

Sesuaikan value, terutama pada openai model dan api key nya:

```env
APP_URL= http://localhost 
PORT=4000

OPENAI_MODEL_VERSION=gpt-xxxx
OPENAI_API_KEY=sk-prxxxxxx
```

**3. Install dependencies**

```bash
npm install
```

**4. Run server**

```bash
npm start
```

Server akan berjalan di `http://localhost:4000` (default).

## API Endpoints
#### `POST /api/recipes/generate`

**Request**

```json
{
    "ingredients":"telur, sosis, keju"
}
```

**Response**

```json
{
    "success": true,
    "data": {
        "success": true,
        "data": {
            "title": "Telur Orak-Arik Sosis Keju",
            "description": "Resep sederhana dan lezat untuk sarapan dengan telur, sosis, dan keju.",
            "servings": "2 porsi",
            "time": {
                "prep": "5 menit",
                "cook": "10 menit",
                "total": "15 menit"
            },
            "ingredients": [
                "4 butir telur",
                "2 buah sosis, potong dadu",
                "50 gram keju cheddar, parut",
                "1 sendok makan minyak goreng",
                "Garam secukupnya",
                "Merica secukupnya"
            ],
            "steps": [
                "Panaskan minyak goreng di dalam wajan di atas api sedang.",
                "Masukkan potongan sosis, tumis hingga sosis berwarna kecoklatan.",
                "Sementara itu, kocok telur dalam mangkuk, tambahkan garam dan merica.",
                "Tuang campuran telur ke dalam wajan, aduk perlahan agar telur tidak lengket.",
                "Setelah telur mulai mengeras, tambahkan keju parut dan aduk hingga keju meleleh.",
                "Masak hingga telur matang sesuai selera, angkat dan sajikan."
            ],
            "tips": [
                "Gunakan sosis yang sudah dimasak untuk mempercepat proses memasak.",
                "Tambahkan sayuran seperti paprika atau bayam untuk meningkatkan nilai gizi."
            ]
        }
    }
}
```

---