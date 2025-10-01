const BASE_URL = import.meta.env.VITE_API_BASE ?? "http://localhost:4000";

export async function request<T>(
    path: string,
    options: RequestInit = {},
    signal?: AbortSignal
): Promise<T> {
    const res = await fetch(`${BASE_URL}${path}`, {
        ...options,
        signal,
        headers: {
            "Content-Type": "application/json",
            ...(options.headers || {}),
        },
    });

    const text = await res.text();

    let json: T;
    try {
        json = JSON.parse(text);
    } catch {
        throw new Error(`Invalid JSON from server: ${text.slice(0, 200)}…`);
    }

    if (!res.ok) {
        throw new Error((json as any).message || `Request failed (${res.status})`);
    }

    return json;
}
