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
        contents:"make me a quiz with 2 questions about surviving on Data Communication",
        config:{
            systemInstructions: "You are a helpful quiz generator. Create multiple choice questions with 4 options and the questions should be clear and concise.",
        
            temperature: 0,
            responseMimeType:"application/json",
            responseSchema:{
                type:'object',
                properties:{
                    questions:{
                        type:'array',
                        items:{
                            type:'object',
                            properties:{
                                question:{type:'string'},
                                options:{type:'array', items:{type:'string'}},
                                correctAnswer:{type:'string'},
                                difficulty:{type:'string'}
                            },
                            required:['question','options','correctAnswer','difficulty']
                        }
                    }
                }
            }

        }
        

    });
    console.log(response.text);
}

main();

//system instruction: define the behvoior 
//content: tells what to do 

