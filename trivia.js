const startButton = document.getElementById('startBtn')
const questCont = document.getElementById('questionCont')
const nextButton = document.getElementById('nextBtn')
const questionElement = document.getElementById('question')
const answerButtonObj = document.getElementById('answerBtn')
const bodyElement = document.querySelector('body')


let shuffledQuestions, currentQuestIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', ()=> {
    currentQuestIndex++
    selectNextQuest()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(()=> Math.random()- .5)
    currentQuestIndex = 0
    questCont.classList.remove('hide')
    selectNextQuest()
}

function selectNextQuest() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestIndex])
}

function showQuestion(question) {
    
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
           
        }
        button.addEventListener('click', selectAnswer)
        answerButtonObj.appendChild(button)
    });
    
    
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonObj.firstChild)
    answerButtonObj.removeChild(answerButtonObj.firstChild)
}


function selectAnswer(e) {
    const selectedButtton = e.target
    const correct = selectedButtton.dataset.correct
    setStatusClass(bodyElement, correct)
    Array.from(answerButtonObj.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    
    if (shuffledQuestions.length > currentQuestIndex +1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart Game'
        startButton.classList.remove('hide')
        
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [{
    question: 'who is the current US president', 
    answers: [
        {text: 'Joe biden', correct: true }, 
        {text: 'Trump', correct: false }
    ]
   
}, 
{
    question: 'what is 3 plus 4', 
    answers: [
        {text: '18', correct: false},
        {text: '7', correct: true}

    ]
}, 
{
    question: 'What is the negativly charged particle found in atoms', 
    answers: [
        {text: 'The gluon', correct: false}, 
        {text: 'The nuclei', correct: false},
        {text: 'The electron', correct: true},
        {text: 'The quark', correct: false}
        
    ]
}, 
{
    question: 'Which movie had a better box office score on opening week', 
    answers: [
        {text: 'Oppenheimer', correct: true},
        {text: 'Barbie', correct: false}

    ]
},
{
    question: 'Which famous scientist developed the theory of general relativity?',
    answers: [
        { text: 'Isaac Newton', correct: false },
        { text: 'Marie Curie', correct: false },
        { text: 'Galileo Galilei', correct: false },
        { text: 'Albert Einstein', correct: true }
    ]
},
{
    question: 'Which artist painted the famous artwork "Starry Night"?',
    answers: [
        { text: 'Leonardo da Vinci', correct: false },
        { text: 'Pablo Picasso', correct: false },
        { text: 'Michelangelo', correct: false },
        { text: 'Vincent van Gogh', correct: true }
    ]
}, 
{
    question: 'In which country did the ancient Olympic Games originate?',
    answers: [
        { text: 'Egypt', correct: false },
        { text: 'Rome', correct: false },
        { text: 'China', correct: false },
        { text: 'Greece', correct: true }
    ]
}, 
{
    question: 'What is the smallest prime number?',
    answers: [
        { text: '1', correct: false },
        { text: '0', correct: false },
        { text: '2', correct: true },
        { text: '4', correct: false }
    ]
},
{
    question: 'Which ancient wonder was a massive statue of the Greek god Helios?',
    answers: [
        { text: 'Great Pyramid of Giza', correct: false },
        { text: 'Hanging Gardens of Babylon', correct: false },
        { text: 'Colossus of Rhodes', correct: true },
        { text: 'Temple of Artemis at Ephesus', correct: false }
    ]
},

{
    question: 'In what year did the Chernobyl nuclear disaster occur?',
    answers: [
        { text: '1986', correct: true },
        { text: '1979', correct: false },
        { text: '1991', correct: false },
        { text: '2001', correct: false }
    ]
}
]