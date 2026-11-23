import 'dotenv/config';
import {GoogleGenAI} from '@google/genai';

// 1. Initialize Gemini
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,

});

//2. Make our first api call 
async function main(){
    const response = await ai.models.generateContent({
        model:'gemini-3.1-flash-lite',
        contents:"write me a song thats funny brainrot distrack about a guy.make it shorter use easy english words",
        

    });
    console.log(response.text);
}

main();

