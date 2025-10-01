import type { RecipeData } from "../types/recipeType";

interface Props {
    recipe?: RecipeData | null;
}

export default function RecipeView({ recipe }: Props) {
    if (!recipe) return (
        <div className="text-center text-secondary">
            <small>Resep akan tampil di sini setelah kamu klik <strong>Buat Resep</strong>.</small>
        </div>
    );

    const { title, description, servings, time, ingredients, steps, tips } = recipe;

    return (
        <div className="card shadow-sm border-0 mx-auto w-100" style={{ maxWidth: "720px" }}>
            <div className="card-body">
                <div className="d-flex flex-wrap align-items-start justify-content-between gap-2">
                    <div>
                        <h2 className="h4 mb-1">{title}</h2>
                        <p className="mb-2 text-secondary">{description}</p>
                    </div>
                    <div className="d-flex gap-2">
                        <span className="badge text-bg-secondary">Porsi: {servings}</span>
                        <span className="badge text-bg-secondary">Prep: {time.prep}</span>
                        <span className="badge text-bg-secondary">Masak: {time.cook}</span>
                        <span className="badge text-bg-dark">Total: {time.total}</span>
                    </div>
                </div>
                <hr/>
                <div className="row g-4">
                    <div className="col-12 col-lg-6">
                        <h3 className="h6 text-uppercase text-secondary">Bahan</h3>
                        <ul className="list-group list-group-flush">
                            {ingredients.map((item, idx) => (
                                <li key={idx} className="list-group-item px-0">{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-12 col-lg-6">
                        <h3 className="h6 text-uppercase text-secondary">Langkah</h3>
                        <ol className="list-group list-group-numbered list-group-flush">
                            {steps.map((s, i) => (
                                <li key={i} className="list-group-item px-0">{s}</li>
                            ))}
                        </ol>
                    </div>
                </div>

                {tips && tips.length > 0 && (
                    <>
                        <hr />
                        <h3 className="h6 text-uppercase text-secondary">Tips</h3>
                        <ul className="list-group list-group-flush">
                            {tips.map((t, i) => (
                                <li key={i} className="list-group-item px-0">{t}</li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
}
