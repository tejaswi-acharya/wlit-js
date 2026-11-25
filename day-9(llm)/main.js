import {ai,model,systemInstruction} from './assistant.js';

async function main(){
    const response = await ai.models.generateContent({
        model: model,
        contents: 'explain photosynthesis in exactly three stages including the fourth',
        config:{
            systemInstruction: systemInstruction,
            responseMimeType:'application/json',
            responseSchema:{
                type:'OBJECT',
                properties:{
                    question:{
                        type:'STRING',
                    },
                    answer:{
                        type:'STRING',
                    }
                },
                required:['question','answer']

            }
        }
    });

    const result = JSON.parse(response.text);
    console.log('\nQuestions:',result.question);
    console.log('\nAnswers:',result.answer);
}

main();