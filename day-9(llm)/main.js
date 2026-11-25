import {ai,model,systemInstruction} from './assistant.js';

async function main(){
    const response = await ai.models.generateContent({
        model: model,
        contents: 'explain me c programming tecchnically in 4 sentences both in english and nepali(devnagari script)',
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