import 'dotenv/config';
import {GoogleGenAI} from '@google/genai';

export const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

export const model = 'gemini-3.5-flash-lite';
export const systemInstruction = `explain accurately
                                 use simple language
                                 do not envent facts , statistics or references
                                 if unsure, say so
                                 politely correct false premises
                                 ask for clarification when information is missing
                                 do not present guesses as fact
                                 you are not a substiture for qualified professional advice.`;