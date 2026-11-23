import 'dotenv/config';
import {GoogleGenAI} from '@google/genai';

// 1. Initialize Gemini
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,

});

// //2. Make our first api call 
// async function main(){
//     const response = await ai.generateContent({
//         model:'gemini-3.1-flash-lite',
//         contents:"Explain the concept of Artificial Intelligence in one sentence."
        

//     });
//     console.log(response.text);
// }


