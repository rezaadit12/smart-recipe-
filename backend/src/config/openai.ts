import OpenAI from 'openai';

if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY tidak ditemukan');
}

export const openaiModel = process.env.OPENAI_MODEL_VERSION || 'gpt-4o-mini';
export const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
