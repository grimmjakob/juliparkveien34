// Get all the box elements
const boxes = document.querySelectorAll('.box');

// Function to display the question and options
function displayQuestionAndOptions(day) {
    // You can create an array of questions and options corresponding to each day

const correctAnswerForBox2 = "Groundhog day"; // Replace with the actual correct answer
    // Define hints for box 2
const hintsForBox2 = [
    "Hint 1: Det er en julefilm",
    "Hint 2: Den inneholder et Murmeldyr",
    "Hint 3: Legenden Bill er med i filmen",
    "Hint 4: Handlingen er ganske så repiterende",
    "Hint 5: En ny dag truer"
];

let currentHintIndexForBox2 = 0;

// Function to display hints and allow guesses for box 2
function displayHintsAndGuessForBox2() {
    if (currentHintIndexForBox2 < hintsForBox2.length) {
        // Display the current hint for box 2
        alert(hintsForBox2[currentHintIndexForBox2]);

        // Ask the user to make a guess for box 2
        const userGuess = prompt("Hvilken film tror du det er?");
        
        // Check if the user's guess is correct for box 2 (case-insensitive)
        if (userGuess && userGuess.toLowerCase() === correctAnswerForBox2.toLowerCase()) {
            alert("Koooorrekt! Dagens film blir Groundhog day");
            currentHintIndexForBox2 = hintsForBox2.length; // Set hint index to max to stop further hints
        } else {
            // Increment the hint index for box 2 for the next hint
            currentHintIndexForBox2++;
            // Display the next hint and allow another guess for box 2
            displayHintsAndGuessForBox2();
        }
    } else {
        // No more hints left for box 2, display a message
        alert("Du er tom for hints, bedre lykke til i morgen.");
    }
}

// Add click event listener to box 2
boxes[1].addEventListener('click', () => {
    // Call the function to display hints and allow guesses for box 2
    displayHintsAndGuessForBox2();
});
// Define the correct answer for box 5
const correctAnswerForBox5 = "Clockwork Orange"; // Replace with the actual correct answer

// Define hints for box 5
const hintsForBox5 = [
    "Hint 1: gammel klassiker",
    "Hint 2: frukt",
    "Hint 3: alf har spurt om å se den sånn 10 ganger",
    "Hint 4: 1971",
    "Hint 5: klokka slår"
];

// Variable to keep track of the current hint index for box 5
let currentHintIndexForBox5 = 0;

// Function to display hints and allow guesses for box 5
function displayHintsAndGuessForBox5() {
    if (currentHintIndexForBox5 < hintsForBox5.length) {
        // Display the current hint for box 5
        alert(hintsForBox5[currentHintIndexForBox5]);

        // Ask the user to make a guess for box 5
        const userGuess = prompt("Hvilken film?");
        
        // Check if the user's guess is correct for box 5 (case-insensitive)
        if (userGuess && userGuess.toLowerCase() === correctAnswerForBox5.toLowerCase()) {
            alert("Correct! You guessed it right for box 5!");
            currentHintIndexForBox5 = hintsForBox5.length; // Set hint index to max to stop further hints
        } else {
            // Increment the hint index for box 5 for the next hint
            currentHintIndexForBox5++;
            // Display the next hint and allow another guess for box 5
            displayHintsAndGuessForBox5();
        }
    } else {
        // No more hints left for box 5, display a message
        alert("You've run out of hints for box 5.");
    }
}

// Add click event listener to box 5
boxes[4].addEventListener('click', () => {
    // Call the function to display hints and allow guesses for box 5
    displayHintsAndGuessForBox5();
});


    const questionsAndOptions = [
        {
            question: "Vi begynner det hele med en oscar-nominert film fra 2007. Dette er en film om å finne seg selv og man gjøre med livet på denne kloden. Dette er en film jeg personlig trenger å se, men er ikke blitt vist på hector enda pga så og si alle andre uten om meg har sett den. Så siden flere er vekke denne lørdagskvelden, griper jeg denne muligheten.",
            options: ["Atonement", "Juno", "Into the wild"],
            correctAnswer: "Into the wild"
        },
        {
            question: "trykk en gang til på boxen for å få et hint",
            options: [""],
            correctAnswer: "Groundhog day"
        },
        {
            question: "I dagens film reiser vi inn i et snøbelagt univers, som tar i bruk magiske gjenstander og vi møter på fantasifulle skapninger som griffiner og fenikser. Hvilket filmunivers skal vi til?",
            options: ["Narnia", "Harry Potter", "Percy Jackson"],
            correctAnswer: "Narnia"
        },
        {
            question: "What is the capital of France?",
            options: ["Paris", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "trykk en gang til på boxen for å få et hint",
            options: [""],
            correctAnswer: "Groundhog day"
        },
        {
            question: "?",
            options: ["Paris", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "What is the capital of France?",
            options: ["Paris", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "What is the capital of France?",
            options: ["Paris", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "What is the capital of France?",
            options: ["Paris", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "What is the capital of France?",
            options: ["Paris", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "What is the capital of France?",
            options: ["Paris", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "What is the capital of France?",
            options: ["Paris", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "What is the capital of France?",
            options: ["Paris", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "What is the capital of France?",
            options: ["Paris", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "What is the capital of France?",
            options: ["Paris", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "What is the capital of France?",
            options: ["Paris", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "What is the capital of France?",
            options: ["Paris", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "What is the capital of France?",
            options: ["Paris", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "What is the capital of France?",
            options: ["Paris", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "What is the capital of France?",
            options: ["Paris", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "What is the capital of France?",
            options: ["Paris", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "What is the capital of France?",
            options: ["Paris", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "What is the capital of France?",
            options: ["Paris", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "What is the capital of France?",
            options: ["Paris", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        // Add questions and options for each day
    ];

    const questionBox = document.querySelector('.question-box');
    const questionText = document.querySelector('.question-text');
    const optionsList = document.querySelector('.options-list');
    const userAttempts = [];

function displayQuestionAndOptions(day) {
        // Check if the user has already attempted this question
        if (userAttempts.includes(day)) {
            alert("You've already attempted this question.");
            return;
        }
    
        // Display the question and options for the selected day
        // ...
    }    

    function checkAnswer(day, selectedOption) {
        if (userAttempts.includes(day)) {
            alert("You've already attempted this question.");
            return;
        }
    
        const question = questions[day - 1];
        if (selectedOption === question.correctAnswer) {
            alert("Correct! You guessed it right!");
            // Display the movie image
            const image = new Image();
            image.src = question.image;
            document.body.appendChild(image);
        } else {
            alert("Oops! That's not the correct answer.");
        }
    
        // Update user attempts
        userAttempts.push(day);
    }

    

    // Display the question and options for the selected day
    questionText.textContent = questionsAndOptions[day - 1].question;

    optionsList.innerHTML = "";
    questionsAndOptions[day - 1].options.forEach((option) => {
        const optionElement = document.createElement('li');
        optionElement.textContent = option;
        optionsList.appendChild(optionElement);
    });    

    // Add event listener for option selection
    optionsList.addEventListener('click', (e) => {
        const selectedOption = e.target.textContent;
        if (selectedOption === questionsAndOptions[day - 1].correctAnswer) {
            // Handle correct answer
            alert("Correct! You guessed it right!");
        } else {
            // Handle incorrect answer
            alert("Oops! That's not the correct answer.");
        }
        // Hide the question box after the user has answered
        questionBox.style.display = "none";
    });

    // Show the question box
    questionBox.style.display = "block";
}   

// Add click event listeners to each box
boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        // Call the displayQuestionAndOptions function with the day number
        displayQuestionAndOptions(index + 1);
    });
});