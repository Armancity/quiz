// const DATA =
// [
//     {
//     question: 'harc1',
//     answers:[
//         {
//             id:'0',
//             value:'patasxan 1',
//             correct:true,
//         },
//         {
//             id:'2',
//             value:'patasxan 2',
//             correct:false,
//         },
//         {
//             id:'3',
//             value:'patasxan 3',
//             correct:false,
//         }
//     ]
//     },
    
//            {
//             question: 'harc2',
//             answers:[
//                 {
//                     id:'4',
//                     value:'patasxan 1',
//                     correct:true,
//                 },
//                 {
//                     id:'5',
//                     value:'patasxan 2',
//                     correct:false,
//                 },
//                 {
//                     id:'6',
//                     value:'patasxan 3',
//                     correct:false,
//                 }
//             ]
//             }
    

// ]



// const quiz = document.getElementById("quiz");
// const questions = document.getElementById("question");
// const indicator = document.getElementById("indicator");
// const results = document.getElementById("results");
// const btnNext = document.getElementById("btn-next");
// const btnRestart = document.getElementById("btn-restart");


// const renderQuestion = () => {};
// questions.innerHTML =  ``;

// const renderResults = () => {};

// const renderIndicator = () =>{};


// quiz.addEventListener('change',(event) =>{
//     // patasxan
// }) ;

// quiz.addEventListener('click',(event) =>{
//     // araj heti hamar

//     // console.log(event);

//     if (event.target.classList.contains('btn-next')){
//         console.log('next');
//     }

    
// }) ;

const quizData= [
    {
      question: "What is the capital city of Armenia?",
      options: ["Paris", "London", "Berlin", "Erevan"],
      answer: "Erevan"
    },
    {
      question: "What is the capital city of Russia",
      options: ["Erevan", "Moscov", "Jupiter", "Paris"],
      answer: "Moscov"
    },
    {
        question: "What is the capital city of Franc",
        options: ["Erevan", "Moscov", "irak", "Paris"],
        answer: "Paris"
      },
      {
        question: "What is the capital city of Georgia",
        options: ["Sofia", "Moscov", "Tbilisi", "Paris"],
        answer: "Tbilisi"
      },
      {
        question: "What is the capital city of Belgia",
        options: ["Brussel", "Sofia", "Mars", "Paris"],
        answer: "Brussel"
      },
      {
        question: "What is the capital city of Vatikan",
        options: ["Marokko", "Sofia", "Vatikan", "Paris"],
        answer: "Vatikan"
      },
      {
        question: "What is the capital city of 	Sweden",
        options: ["Stockholm", "Lugansk", "Lisbon", "Oslo"],
        answer: "Stockholm"
      },
      {
        question: "What is the capital city of Greece",
        options: ["Tirana", "Budapest", "Lisbon", "Athens"],
        answer: "Athens"
      },
  ];
  
  const quizContainer = document.getElementById("quiz-container");
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit-btn");
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuestion() {
    const currentQuiz = quizData[currentQuestion];
    questionElement.textContent = currentQuiz.question;
  
    optionsElement.innerHTML = "";
  
    for (let i = 0; i < currentQuiz.options.length; i++) {
      const option = document.createElement("input");
      option.type = "radio";
      option.name = "option";
      option.value = currentQuiz.options[i];
      option.id = "option" + i;
  
      const label = document.createElement("label");
      label.setAttribute("for", "option" + i);
      label.textContent = currentQuiz.options[i];
  
      optionsElement.appendChild(option);
      optionsElement.appendChild(label);
      optionsElement.appendChild(document.createElement("br"));
    }
  }
  
  function checkAnswer() {
    const selectedOption = document.querySelector("input[name='option']:checked");
  
    if (!selectedOption) {
      return;
    }
  
    const answer = selectedOption.value;
  
    if (answer === quizData[currentQuestion].answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResults();
    }
  }
  
  function showResults() {
    quizContainer.innerHTML = `
      <h2>Quiz Completed</h2>
      <p>Your score: ${score}/${quizData.length}</p>
      <button onclick="location.reload()">Restart</button>
    `;
  }
  
  submitButton.addEventListener("click", checkAnswer);
  
  loadQuestion();