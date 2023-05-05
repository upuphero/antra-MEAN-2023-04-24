class Model {
    constructor() {
        // Add a list of words to the model
        this.words = this.words = [
            "ballot",
            "soil",
            "legislation",
            "valley",
            "country",
            "nail",
            "piano",
            "speech",
            "efflux",
            "reason",
            "alcohol",
            "stable",
            "slice",
            "situation",
            "profession",
            "restaurant",
            "pocket",
            "satisfaction",
            "condition",
            "comfortable"
        ];
        // Initialize the game state
        this.initGame();
    }

    // Initialize the game state
    initGame() {
        //Choose a random word from the list
        this.currentWord = this.words[Math.floor(Math.random() * this.words.length)];
        // Hide some letters in the current word
        this.hiddenWord = this.hideRandomLetters(this.currentWord);
        //reset the number of wrong guesses
        this.wrongGuesses = 0;
        //maximum number of allowed wrong guesses
        this.maxWrongGuesses = 10;
    }
    //hide letters in the currentword
    hideRandomLetters(word) {
        //choose 1 to word.length-1 letters to conceal
        const concealedCount = Math.floor(Math.random() * (word.length-1)) + 1;
        let concealedPositions = new Set();//avoid duplicates
        //choose random positions
        while (concealedPositions.size < concealedCount) {
            concealedPositions.add(Math.floor(Math.random() * word.length));
        }
        return word.split("").map((c, i) => concealedPositions.has(i) ? "_" : c).join("");
    }
}

class View {
    constructor() {
        this.gameTitle = document.getElementById("game-title");
        this.score = document.getElementById("score");
        this.guessInput = document.getElementById("guess-input");
        this.newGameButton = document.getElementById("new-game-button");
        this.hiddenWordElement = document.getElementById("hidden-word");
        this.timer = document.getElementById("timer");
    }
}

class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        //countdown timer
        this.timeRemaining = 60;
        this.timer = null;

        this.view.newGameButton.addEventListener("click", () => {
            this.startNewGame();
        });

        this.view.guessInput.addEventListener("keyup", (e) => {
            if (e.key === "Enter") {
                this.processGuess(this.view.guessInput.value);//get the input value
                this.view.guessInput.value = "";//set the input to empty
            }
        });

        this.startNewGame();
    }

    startNewGame() {
        //initialize the game state
        this.model.initGame();
        //reset score
        this.updateScore();
        //reset hidden word
        this.updateHiddenWord();
        //reset countdown timer
        this.timeRemaining = 60;
        this.updateTimer();
        clearInterval(this.timer);
        this.startTimer();
    }

    processGuess(guess) {
        //find the first hidden letter
        const letterIndex = this.model.hiddenWord.indexOf("_");
        if (letterIndex === -1) {
            return;
        }
        if (this.model.currentWord[letterIndex] === guess) {
            this.model.hiddenWord = this.revealLetters(this.model.hiddenWord, this.model.currentWord, guess);
            this.updateHiddenWord();
            if (this.model.hiddenWord.indexOf("_") === -1) {
                this.startNewGame();
            }
        } else {
            this.model.wrongGuesses++;
            this.updateScore();
            if (this.model.wrongGuesses === this.model.maxWrongGuesses||this.timeRemaining === 0) {
                alert(`Game over! You have guessed ${this.model.currentWord.length - this.model.hiddenWord.split("_").length} words!`);
                clearInterval(this.timer);
                this.startNewGame();
            }
        }
    }
    updateTimer() {
        this.view.timer.textContent = this.timeRemaining;
    }
    // Add a method to start the timer
    startTimer() {
        this.timer = setInterval(() => {
            this.timeRemaining--;
            this.updateTimer();
            if (this.timeRemaining === 0) {
                clearInterval(this.timer);
                alert(`Time's up! You have guessed ${this.model.currentWord.length - this.model.hiddenWord.split("_").length} words!`);
                this.startNewGame();
            }
        }, 1000);
    }

    updateScore() {
        this.view.score.textContent = `${this.model.wrongGuesses} / ${this.model.maxWrongGuesses}`;
    }

    updateHiddenWord() {
        this.view.hiddenWordElement.textContent = this.model.hiddenWord.split("").join(" ");
    }

    revealLetters(hiddenWord, currentWord, guess) {
        return hiddenWord.split("").map((c, i) => c === "_" && currentWord[i] === guess ? guess : c).join("");
    }
}

const app = new Controller(new Model(), new View());