const quizData = [
    {
        question: "What is the capital of India ?",
        a: "Mumbai",
        b: "Delhi",
        c: "Banglore",
        d: "Kolkata",
        correct: "b"
    },
    {
        question: "What is the most used programming language in 2019 ?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "Javascript",
        correct: "a"
    },
    {
        question: "Who is the President of America ?",
        a: "Florin Pop",
        b: "Joe Biden",
        c: "Donald Trump",
        d: "Barack Obama",
        correct: "b"
    },
    {
        question: "What doe HTML stands for ?",
        a: "Hyper Text Markup Language",
        b: "Cascading Style Sheets",
        c: "Javascript Object Notation",
        d: "Bharat Desh Sabse Mahan",
        correct: "a"
    },
    {
        question: "What year was javascript launched ?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "None of the above",
        correct: "b"
    },
];

const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const quiz = document.getElementById("quiz");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach(answerEl => {
        //  console.log(answer.checked);
        if (answerEl.checked) {
              answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;

    })
}

submitBtn.addEventListener("click", () => {
    // Check to see the answer

    const answer =  getSelected();

    if(answer) {
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
       }else {
           quiz.innerHTML = `<h2>You answered ${score} out of ${quizData.length} questions correctly !</h2>
           
           <button onclick="location.reload()">Play Again</button`;
       }
    }
});