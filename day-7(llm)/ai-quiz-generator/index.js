import 'dotenv/config';
import {GoogleGenAI} from '@google/genai';

// 1. Initialize Gemini
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,

});

//2. Make our first api call 
async function main(noQuestions,topic){
    const response = await ai.models.generateContent({
        model:'gemini-3.1-flash-lite',
        contents:`Create a ${noQuestions} questions quiz  on topic ${topic}`,
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
    
    const quiz = JSON.parse(response.text);
    
    // for (const q of quiz.questions) {
    //     console.log(`Question: ${q.question}`);
    //     console.log(`Options: ${q.options.join(', ')}`);
    //     console.log(`Correct Answer: ${q.correctAnswer}`);
    //     console.log(`Difficulty: ${q.difficulty}`);
    //     console.log('-------------------------');
    // }

quiz.questions.forEach((q,i)=>{
        console.log(`Question ${i+1}: ${q.question}`);
        console.log(`Options: ${q.options.join(', ')}`);
        console.log(`Correct Answer: ${q.correctAnswer}`);
        console.log(`Difficulty: ${q.difficulty}`);
        console.log('-------------------------');


});
    
}

import readline from "node:readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

rl.question("Enter the number of questions for the quiz:", (noQuestions)=>{
    rl.question("Enter the topic for the quiz:", (topic)=>{
        main(noQuestions,topic);
        rl.close();
    });

});
// main();

//system instruction: define the behvoior 
//content: tells what to do 




