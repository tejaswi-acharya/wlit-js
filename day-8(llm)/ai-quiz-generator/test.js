import 'dotenv/config';
import {GoogleGenAI} from '@google/genai';
import fs from 'fs';


const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

//to send the pictures to the api we need to convert the image into pixcel rgb numbers and encode it into its rgb values and then we convert that to string and then send it to the api 
//using base64 we do that and for using base64 we need fs module
const imagePath='/Users/tejas/Desktop_Backup/WLiT/day-2/day-8(llm)/ai-quiz-generator/images/meme.jpg';
const imageData=fs.readFileSync(imagePath).toString('base64');
console.log(imageData);


