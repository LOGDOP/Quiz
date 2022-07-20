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


///////  отрисовка вопроса и ответов

clearPage();
showQuestions();


function clearPage () {
questionBox.innerHTML = "";
answer.innerHTML = "";
}

function showQuestions() {
    let text = questions[questionIndex]["question"];
    questionBox.innerHTML = `<p>${text}</p>`;

    for([index, items] of questions[questionIndex]["answers"].entries()){
       
        answer.innerHTML += ` 
        <li>
            <label>
                <input type="radio" value="${index +1 }" class="answer" name="answer">
                <span> ${items} </span>
            </label>
        </li>`;
        
    }
}

//////// следующий вопрос

function nextQuestion () {

    clearPage();
    ++questionIndex;
    showQuestions();
}



///////////////////  проверка ответа 

function scoreUp(checkedRadio){
    if(+checkedRadio.value === questions[questionIndex]["correct"]){
        ++score;
    }
}

function checkAnswer () {
    const checkedRadio = answer.querySelector("input:checked");
    
    if(checkedRadio && questionIndex !== questions.length-1 ){
        scoreUp(checkedRadio);
        nextQuestion();
    } 
    else if (questionIndex === questions.length-1) {
        scoreUp(checkedRadio);
        clearPage();
        finalSlide();
    }
    else if (!checkedRadio){
        return;
    }
    
}


/* Финальная страничка */
function finalSlide () {
    let wordEnd = "";
    score === 0 ? wordEnd = "ов" : score === 1 ? wordEnd = "" : score > 4 ?  wordEnd = "ов" : wordEnd = "а";
    questionBox.innerHTML = `<p>Вы ответили на ${score} вопрос${wordEnd} из ${questions.length} </p>`

    submit.innerText = ` Рестарт `;
    submit.removeEventListener("click", checkAnswer);
    /* submit.addEventListener("mouseDown", refrash()); */
    submit.onclick = () => history.go();
}

/* Обновить страницу */
function refrash () {
    history.go();
}


submit.addEventListener("click", checkAnswer);