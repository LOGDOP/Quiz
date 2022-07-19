const questions = [
    { 
        question: "2 + 5 = ...",
        answers: [6,7,8,9],
        correct: 2 
    },
    { 
        question: "Кто убил Big Boss?",
        answers: ["Solid Snake","Liquid Snake","Solidus Snake","Naked Snake"],
        correct: 1 
    },
    { 
        question: "Кто убил Геральта из Ривии в книгах Анджея Сапковского?",
        answers: ["Дракон","Странствующий рыцарь","Крестьяне","Старость"],
        correct: 3 
    },
    { 
        question: "Главный враг ёжика Соника?",
        answers: ["Тэилс","Наклс","Серега Пират","Эггмэн"],
        correct: 4 
    }
];

/* Элементы */

const questionBox = document.querySelector(".question_box");
const answer = document.querySelector(".answer_list");
const submit = document.querySelector(".ok_button");



////// переменные 

let score = 0;
let questionIndex = 0;


///////

clearPage();
showQuestions();


function clearPage () {
questionBox.innerHTML = "";
answer.innerHTML = "";
}

function showQuestions() {
    let text = questions[questionIndex]["question"];
    questionBox.innerHTML = `<p>${text}</p>`;

    for(items of questions[questionIndex]["answers"]){
        
        answer.innerHTML += ` 
        <li>
            <label>
                <input type="radio" class="answer">
                <span> ${items} </span>
            </label>
        </li>`;
    }
}

function nextQuestion () {
    clearPage();
    ++questionIndex;
    showQuestions();
}

submit.addEventListener("click", nextQuestion);