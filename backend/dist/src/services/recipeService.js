"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRecipe = generateRecipe;
const openai_js_1 = require("../config/openai.js");
async function generateRecipe(ingredients) {
    const prompt = `
    Kamu adalah asisten memasak.

    Tugasmu:
    1. Berdasarkan daftar bahan yang diberikan: "${ingredients}".
    2. Buat **satu resep lengkap** yang bisa dibuat dengan bahan tersebut.
    3. Jawaban harus **hanya berupa JSON valid** tanpa penjelasan tambahan, tanpa markdown, tanpa teks di luar JSON.

    Aturan:
    - Jika input BUKAN bahan makanan (contoh: laptop, charger, hp), kembalikan JSON:  
    {
        "error": "Input bukan bahan makanan. Harap masukkan daftar bahan makanan."
    }
    Format JSON yang harus digunakan:
    {
        "title": "Nama Resep",
        "description": "Deskripsi singkat tentang resep",
        "servings": "Jumlah porsi (contoh: 2 porsi)",
        "time": {
            "prep": "Waktu persiapan (contoh: 10 menit)",
            "cook": "Waktu memasak (contoh: 20 menit)",
            "total": "Total waktu"
        },
        "ingredients": ["daftar bahan lengkap dengan takaran"],
        "steps": ["langkah memasak step by step"],
        "tips": ["opsional: tips tambahan untuk hasil lebih enak"]
    }

    Pastikan hanya mengembalikan JSON sesuai format di atas.
    `;
    const completion = await openai_js_1.openai.chat.completions.create({
        model: openai_js_1.openaiModel,
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
    });
    // console.log(completion);
    const content = completion.choices[0]?.message?.content ?? "{}";
    console.log(content);
    try {
        const data = JSON.parse(content);
        if (data.error) {
            return { success: false, message: data.error };
        }
        return { success: true, data };
    }
    catch {
        return {
            success: false,
            message: "Resep tidak dapat dibuat. Pastikan input adalah bahan makanan.",
        };
    }
}
//# sourceMappingURL=recipeService.js.map