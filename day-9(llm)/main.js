import {ai,model,systemInstruction} from './assistant.js';

async function main(){
    const response = await ai.models.generateContent({
        model: model,
        contents: 'I am a girl i dont wanna spend a lot of my parents money, i am poor , suggest some carrier roles i could probably apply for',
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