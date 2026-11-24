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
const prompt = [
    {text: 'Describe the image in detail.'},
    {inlineData: {mimeType: 'image/jpg', data: imageData}}
];
//model process text and images differently hence both text and image data are sent in an array of objects



async function main(){
    const response = await ai.models.generateContent({
        model:'gemini-3.1-flash-lite',
        contents: prompt
    });
    console.log(response.text);
}
main();


