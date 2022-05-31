

let currentQuestionIndex= 0;
let category;
let answers = [];
let quizBox = document.querySelector('.Quiz-box');
let resultBox = document.querySelector(".result-box");
let quiz ;


function onNext() {
    if (currentQuestionIndex < quiz.length) {
        renderQuiz();
    } else {
        renderResult();
    }
}

function init() {
    currentQuestionIndex = 0;
    answers = [];
   
    initQuiz();
    renderQuiz();
}

function initQuiz() {
    // //if ( category === 'javascript'){
    //     quiz = js;
    // }else if ( category === 'html') {
    //     quiz = html;
    // } else {
    //     quiz = css;
    const searchParams = new URL(window.location.href).searchParams
    category = searchParams.get("category");
    console.log("Категория", category);
    searchParams.forEach((value, key) => {
        console.log(key,'='+ value);
    })
   quiz = categoryQuiz[category];
   if (quiz === undefined) {
       alert ('Такой категории не существует!');
   }
}

function renderResult() {
    quizBox.classList.add("hide");
    resultBox.classList.remove("hide");

    let quizTotal = quiz.length;
    let rightAnswers = 0;
    let wrongAnswers = 0;
    let totalWrong = document.querySelector(".total-wrong");
    let percentage = document.querySelector(".percentage");
    let totalScore = document.querySelector(".total-score");
    let totalCorrect = document.querySelector(".total-correct");

    for (let i = 0; i < answers.length; i++) {
        let answer = answers[i];
        if (quiz[answer.quizIndex].answers - 1 === answer.optionIndex) {
            rightAnswers++;
        } else {
            wrongAnswers++; 
        }
    }
    let percentValue =  Math.round(rightAnswers  / quizTotal * 100);
    totalCorrect.innerHTML = rightAnswers;
    totalWrong.innerHTML = wrongAnswers;
    percentage.innerHTML = percentValue + "%";
    totalScore.innerHTML = calculateScore(percentValue);  
}



function calculateScore(percentage) {
    let score = 0;
    if (percentage >= 80) {
        score = 5;
    } else if (percentage >= 60 && percentage < 80) {
        score = 4;
    } else if (percentage >= 40) {
        score = 3;
    } else {
        score = 2;
    }
    return score;
}
function reset() {
    resultBox.classList.add("hide");
    quizBox.classList.remove("hide");
    currentQuestionIndex = 0
    answers = [];
    renderQuiz();
}
function renderQuiz() {
    var optionContainer = document.querySelector('.option-container');
    var containerHead = document.querySelector('.question-text');
    var quizCount = document.getElementById('quiz-count');
    quizCount.innerText = currentQuestionIndex + 1 + '';
    // Получаем текущий вопрос
    var currentQuiz = quiz[currentQuestionIndex];
    // Показываем вопрос в заголовке
    containerHead.innerText = currentQuiz.q;
    //  Получаем варианты ответов для текущего вопроса
    var options = currentQuiz.options;
    // Очищаем предыдущие варианты
    optionContainer.innerHTML = '';
    // Добавляем варианты ответа
    for (var i=0; i< options.length; i++) {
        // Создаем div с варинатом ответа
        var optionElm = createOption(i, options[i]);
        // Добавляем полученный div в нужном нам месте
        optionContainer.appendChild(optionElm);
    }
    
    currentQuestionIndex++;
}
function createOption(index, quizText) {
    let option = document.createElement('div');
    option.classList.add('option');
    option.classList.add('option-' + index);
    option.innerText = quizText;
    option.onclick = function(e) {
        saveAnswer(index);
        onNext();
    };
    return option;
}
function saveAnswer(optionIndex) {
    const quizIndex = currentQuestionIndex - 1;
    answers.push({
        quizIndex: quizIndex,
        optionIndex: optionIndex
    });
}