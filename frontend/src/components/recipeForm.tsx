import { useEffect, useRef, useState } from "react";
import { generateRecipe } from "@api/recipeApi";
import type { RecipeData, RecipeResponse } from "../types/recipeType";

interface Props {
    onResult(data: RecipeData): void;
}

export default function RecipeForm({ onResult }: Props) {
    const [ingredients, setIngredients] = useState("telur, bawang, nasi");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const abortRef = useRef<AbortController | null>(null);

    useEffect(() => () => abortRef.current?.abort(), []);

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError(null);
        setLoading(true);

        abortRef.current?.abort();
        abortRef.current = new AbortController();

        try {
            const res: RecipeResponse = await generateRecipe(ingredients, abortRef.current.signal);

            if (!res.success) {
                setError(res.message ?? res.error ?? "Terjadi kesalahan");
                return;
            }

            if (res.data && 'success' in res.data && res.data.success === false) {
                setError(res.data.message ?? "Gagal menghasilkan resep");
                return;
            }

            if (res.data && 'data' in res.data && res.data.data) {
                onResult(res.data.data);
                setError(null);
            } else {
                setError("Gagal menghasilkan resep");
            }

        } catch (err: any) {
            if (err.name === "AbortError") return; 
            setError(err.message ?? "Terjadi kesalahan jaringan.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={onSubmit} className="card shadow-sm border-0 mb-4 mx-auto w-100" style={{ maxWidth: "720px" }}>
            <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-2">
                    <h1 className="h4 mb-0">Smart Recipe</h1>
                    {/* <span className="badge badge-food-primary">Muhamad Reza Aditya</span> */}
                </div>

                <div className="mb-2 text-secondary small">
                    Backend: <code>POST /api/recipes/generate</code>
                </div>

                <div className="mb-3">
                    <label htmlFor="ingredients" className="form-label fw-semibold">Bahan-bahan</label>
                    <textarea
                        id="ingredients"
                        className="form-control"
                        placeholder="Contoh: ayam, bawang putih, kecap manis"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        spellCheck={false}
                        rows={3}
                        required
                    />
                    <div className="form-text">Pisahkan dengan koma. Contoh: <code>telur, bawang, nasi</code></div>
                </div>

                <div className="row g-2">
                    <div className="col-12 col-md-6">
                        <button
                            type="submit"
                            className="btn btn-food-primary w-100"
                            disabled={loading || !ingredients.trim()}
                        >
                            {loading && (
                                <span
                                    className="spinner-border spinner-border-sm me-2"
                                    role="status"
                                    aria-hidden="true"
                                ></span>
                            )}
                            {loading ? "Resep sedang diproses.." : "Buat Resep"}
                        </button>
                    </div>

                    <div className="col-12 col-md-6">
                        <button
                            type="button"
                            className={`btn btn-food-cancel w-100 ${loading ? "active" : ""}`}
                            onClick={() => abortRef.current?.abort()}
                            disabled={!loading}
                        >
                            Batalkan
                        </button>
                    </div>
                </div>

                {error && (
                    <div className="alert alert-danger mt-3 mb-0" role="alert">
                        {error}
                    </div>
                )}
            </div>
        </form>
    );
}
