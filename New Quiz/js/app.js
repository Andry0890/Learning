


console.log(quiz[0])

function init() {
    var container = document.querySelector('.option-container');
    // quiz.options.forEach((quizeItem, index) => {
    //     container.appendChild(createOption(index, quizeItem));
    // });

    var currentQuiz = quiz[0]
    for (var i=0; i< currentQuiz.options.length; i++) {
        container.appendChild(createOption(i, currentQuiz.options[i]));
    }
}

function createOption(index, quizText) {
    var option = document.createElement('div');
    option.classList.add('option');
    option.classList.add('option-' + index);
    option.innerText = quizText;
    return option;
}