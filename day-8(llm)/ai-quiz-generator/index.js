import 'dotenv/config';
import {GoogleGenAI} from '@google/genai';
import fs from 'fs';



const imagePath='/Users/tejas/Desktop_Backup/WLiT/day-2/day-8(llm)/ai-quiz-generator/images/note.jpg';
const imageData=fs.readFileSync(imagePath).toString('base64');

const sysInstructions = `"You are a helpful quiz generator. Create multiple choice questions with 4 options and the questions should be clear and concise.
Create questions based on the content of the image and the topic provided. The questions should be relevant to the topic and should test the understanding of the content in the image. Each question should have one correct answer and three distractors. The difficulty level of each question should be specified as easy, medium, or hard."`;
// const prompt = `Create a ${noQuestions} questions quiz  on topic ${topic}`;

const resSchema={
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
            };
const configuration = {
            systemInstructions: sysInstructions,
        
            temperature: 0,
            responseMimeType:"application/json",
            responseSchema:resSchema
        };
// const prompt = [
//     {text: `Attached is an image of a note, generate ${noQuestions} questions quiz on the topic ${topic} .`},
//     {inlineData: {mimeType: 'image/jpg', data: imageData}}
// ];


// 1. Initialize Gemini
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,

});

//2. Make our first api call 
async function main(noQuestions,topic){
    const response = await ai.models.generateContent({
        model:'gemini-3.1-flash-lite',
        contents:[
                    {text: `Attached is an image of a note, generate ${noQuestions} questions quiz. .`},
                    {inlineData: {mimeType: 'image/jpg', data: imageData}}
                ],
        config:configuration
        

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
    

        main(noQuestions);
        rl.close();
    

});
// main();

//system instruction: define the behvoior 
//content: tells what to do 




