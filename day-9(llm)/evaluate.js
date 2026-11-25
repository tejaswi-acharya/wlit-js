import {ai,model,systemInstruction} from './assistant.js';

const testCases = [
    {
        question: 'who is the managing director of WLiT nepal as of 2026?',
        expected:'Nhasala Joshi'
    },
    
    {
        question: 'what is the multiplication table of 5?',
        expected:'10'
    },
    
    {
        question: 'where is the great wall located?',
        expected:'china'
    },
    {
        question: 'Who is the CEE nepal exam topper as of 2026?',
        expected:'Parartha Parajuli'
    }
];

//evaluate the assistant
async function evaluateAssistant(question){
    const response = await ai.models.generateContent({
        model: model,
        contents:question,
        config:{
            systemInstruction: systemInstruction,
        },
    });
    return response.text;


}
async function runTests(){
    let passed = 0;
    for(const test of testCases){
        const response = await evaluateAssistant(test.question);
        // if(response.toLowerCase().includes(test.expected.toLowerCase())){
        //     console.log(`Test passed for question: ${test.question}`);
        //     passed++;
        // }else{
        //     console.log(`Test failed for question: ${test.question}`);
        //     console.log(`Expected to include: ${test.expected}`);
        //     console.log(`Received: ${response}`);
        // }
        const ok = response.toLocaleLowerCase().includes(test.expected.toLocaleLowerCase());
        console.log('\nQuestion:',test.question);
        
        console.log('Received:',response);
        console.log('Result:',ok ? 'Passed' : 'Failed');
        if(ok) passed++;


    }
    console.log(`\n ${passed} out of ${testCases.length} tests passed!`);
    //calculate the pass rate
    console.log(`\nPass rate: ${(passed/testCases.length)*100}%`);
}
runTests();