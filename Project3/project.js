const questions = [
    {
        'que': 'Which of the following is markup langauge?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'Javascript',
        'd': 'PHP',
        'correct': 'a'
    },
    {
        'que': 'What year was Javascript Launched?',
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': 'none',
        'correct': 'b'
    },
    {
        'que': 'What does CSS stands for?',
        'a': 'Hypertext markup langauge',
        'b': 'cascading style sheet',
        'c': 'Jason Object Notation',
        'd': 'Defence System Oraganisation',
        'correct': 'b'
    },
]

let index = 0;
let right=0,wrong=0;
let total = questions.length;
const quebox = document.getElementById("queBox")
const optionInput = document.querySelectorAll(".option")

const loadQuestion = () => {
    if(index == total){
        return endQuiz()
    }
    reset();
    const data = questions[index];
    quebox.innerHTML=`${index+1}) ${data.que}`;
    optionInput[0].nextElementSibling.innerText=data.a;
    optionInput[1].nextElementSibling.innerText=data.b;
    optionInput[2].nextElementSibling.innerText=data.c;
    optionInput[3].nextElementSibling.innerText=data.d;
}

document.querySelector(".btn").addEventListener(
    "click",
 function() {
    const data = questions[index];
    const ans = getAnswer()
    if(ans == data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    
}
)

const getAnswer = () => {
    let answer;
    optionInput.forEach(
        (input) => {
            if(input.checked){
                answer=input.value;
            }
            
            }
        
    )
    return answer;
}
const reset = () =>{
    optionInput.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML=`
    <div style=text-align:center>
    <h2> Thanks For Playing Quiz</h2>
    <h3> ${right}/${total} are correct</h3>
    </div>`
}

loadQuestion();