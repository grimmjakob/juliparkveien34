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

// Define the correct answer for box 10
const correctAnswerForBox10 = "Eternal sunshine of the spotless mind"; // Replace with the actual correct answer

// Define hints for box 10
const hintsForBox10 = [
    "Hint 1: Snø",
    "Hint 2: Jim Carrey",
    "Hint 3: Klementin",
    "Hint 4: Ikke Komedie",
    "Hint 5: Sårbar"
];

// Variable to keep track of the current hint index for box 10
let currentHintIndexForBox10 = 0;

// Function to display hints and allow guesses for box 10
function displayHintsAndGuessForBox10() {
    if (currentHintIndexForBox10 < hintsForBox10.length) {
        // Display the current hint for box 10
        alert(hintsForBox10[currentHintIndexForBox10]);

        // Ask the user to make a guess for box 10
        const userGuess = prompt("Hvilken film?");
        
        // Check if the user's guess is correct for box 10 (case-insensitive)
        if (userGuess && userGuess.toLowerCase() === correctAnswerForBox10.toLowerCase()) {
            alert("Correct! You guessed it right for box 10!");
            currentHintIndexForBox10 = hintsForBox10.length; // Set hint index to max to stop further hints
        } else {
            // Increment the hint index for box 10 for the next hint
            currentHintIndexForBox10++;
            // Display the next hint and allow another guess for box 10
            displayHintsAndGuessForBox10();
        }
    } else {
        // No more hints left for box 10, display a message
        alert("You've run out of hints for box 10.");
    }
}

// Add click event listener to box 10
boxes[9].addEventListener('click', () => {
    // Call the function to display hints and allow guesses for box 10
    displayHintsAndGuessForBox10();
});

// Define the correct answer for box 12
const correctAnswerForBox12 = "Birdman"; // Replace with the actual correct answer

// Define hints for box 12
const hintsForBox12 = [
    "Hint 1: Alan Garner",
    "Hint 2: Holy Flax",
    "Hint 3: Mia",
    "Hint 4: Jack Moore/(Tyler Durden)",
    "Hint 5: Bruce Wayne/Batman"
];

// Variable to keep track of the current hint index for box 12
let currentHintIndexForBox12 = 0;

// Function to display hints and allow guesses for box 12
function displayHintsAndGuessForBox12() {
    if (currentHintIndexForBox12 < hintsForBox12.length) {
        // Display the current hint for box 12
        alert(hintsForBox12[currentHintIndexForBox12]);

        // Ask the user to make a guess for box 12
        const userGuess = prompt("Hvilken film?");
        
        // Check if the user's guess is correct for box 12 (case-insensitive)
        if (userGuess && userGuess.toLowerCase() === correctAnswerForBox12.toLowerCase()) {
            alert("Correct! You guessed it right for box 12!");
            currentHintIndexForBox12 = hintsForBox12.length; // Set hint index to max to stop further hints
        } else {
            // Increment the hint index for box 12 for the next hint
            currentHintIndexForBox12++;
            // Display the next hint and allow another guess for box 12
            displayHintsAndGuessForBox12();
        }
    } else {
        // No more hints left for box 12, display a message
        alert("You've run out of hints for box 12.");
    }
}

// Add click event listener to box 12
boxes[11].addEventListener('click', () => {
    // Call the function to display hints and allow guesses for box 12
    displayHintsAndGuessForBox12();
});

    const questionsAndOptions = [
        {
            question: "Vi begynner det hele med en oscar-nominert film fra 2007. Dette er en film om å finne seg selv og man gjøre med livet på denne kloden. Dette er en film jeg personlig trenger å se, men er ikke blitt vist på hector enda pga så og si alle andre uten om meg har sett den. Så siden flere er vekke denne lørdagskvelden, griper jeg denne muligheten.",
            options: ["Atonement", "Juno", "Into the wild"],
            correctAnswer: "Into the wild"
        },
        {
            question: "trykk en gang til på boksen for å få et hint",
            options: [""],
            correctAnswer: "Groundhog day"
        },
        {
            question: "I dagens film reiser vi inn i et snøbelagt univers, som tar i bruk magiske gjenstander og vi møter på fantasifulle skapninger som griffiner og fenikser. Hvilket filmunivers skal vi til?",
            options: ["Narnia", "Harry Potter", "Percy Jackson"],
            correctAnswer: "Narnia"
        },
        {
            question: "Det er ikke dag 4 i dag.",
            options: ["Tulling", "Tulling", "Tulling"],
            correctAnswer: "Tulling"
        },
        {
            question: "trykk en gang til på boksen for å få et hint",
            options: [""],
            correctAnswer: "Groundhog day"
        },
        {
            question: "Jeg er keen på Edward Norton film, er det en du ikke har sett?",
            options: ["American History X", "Primal Fear", "Birdman"],
            correctAnswer: "Primal Fear"
        },
        {
            question: "Vi trenger en wild film til, men hvem er med huttetuene?",
            options: ["Hunt for the Wilderpeople", "Wild at heart", "Where the wild things are"],
            correctAnswer: "Where the wild things are"
        },
        {
            question: "En film som jeg så absoulutt vil vise dere er med mr Seymour Hoffman. Denne er vond, men jeg elsker det!",
            options: ["The Talented Mr. Ripley", "Capote", "The Master"],
            correctAnswer: "The Master"
        },
        {
            question: "La oss komme i litt julestemning med en norsk julefilm?",
            options: ["Pitbul Terje", "Hjem til Jul", "My Norwegian Holiday"],
            correctAnswer: "Pitbul Terje"
        },
        {
            question: "trykk en gang til på boksen for å få et hint",
            options: [""],
            correctAnswer: "Groundhog day"
        },
        {
            question: "Vi holder oss til romanse, vi trenger en klassiker?",
            options: ["The Apartment", "When Harry meet Sally", "Love Actually"],
            correctAnswer: "When Harry meet Sally"
        },
        {
            question: "trykk en gang til på boksen for å få et hint. Dette er Film/serie karakterer spilt av skuespiller i denne filmen, vrien men mulig",
            options: [""],
            correctAnswer: "Groundhog day"
        },
        {
            question: "CIINNNEEEEMATTTEEEEKET",
            options: ["TOKYO", "GOD", "FATHERS"],
            correctAnswer: ""
        },
        {
            question: "Holder oss til Animasjon, med en av den vakreste, tristeste og fineste animasjonsfilmen jeg vet om?",
            options: ["Grave of the fireflies", "Your Name", "Up"],
            correctAnswer: "Grave of the fireflies"
        },
        {
            question: "Animation appreciation, denne gang jule animasjon?",
            options: ["The Nightmare before Christmas", "A Christmas Carol", "Klaus"],
            correctAnswer: "Klaus"
        },
        {
            question: "First? First what?",
            options: ["First Man", "First Reformed", "First Cow"],
            correctAnswer: "First Reformed"
        },
        {
            question: "En gammel film men som må bli sett, og det om julen!",
            options: ["Its a wonderful life", "The Apartment", "12 Angry Men"],
            correctAnswer: "Its a wonderful life"
        },
        {
            question: "krigs filmer er jo fett!",
            options: ["Saving private Ryan", "1917", "Hacksaw Ridge"],
            correctAnswer: "Saving private Ryan"
        },
        {
            question: "La oss ta en titt på russisk film?",
            options: ["Come and See", "Stalker", "Nostalghia"],
            correctAnswer: "Come and See"
        },
        {
            question: "Kiiinooooo?",
            options: ["Past Lives", "Gutten og hegren", "GODZILLA MINUS ONE"],
            correctAnswer: "Past Lives"
        },
        {
            question: "Litt norsk før vi skal hjemover",
            options: ["Oslo, 31. August", "Home for Christmas", "Mongoland"],
            correctAnswer: "Mongoland"
        },
        {
            question: "Det er lillejulaften og dere trenger en juleklassiker, velg mellom disse:",
            options: ["Elf", "Hjelp, det er juleferie!", "Hjemme Alene"],
            correctAnswer: ""
        },
        {
            question: "Hvis det av en eller annen grunn skulle blitt sett en film på julaften, må det virkelig være en helt eksepsjonell film. Så her er mine tre forslag:",
            options: ["Portrait of a lady on fire", "About Time", "Madrid"],
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