class Model {
    constructor() {
        // Add a list of words to the model
        this.words = [
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
        //words which are guessed successfully 
        this.correctWords = 0;
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
        //Dom elements
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
        this.update_try();
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
        //check if the guess is correct
        if (this.model.currentWord[letterIndex] === guess) {
            this.model.hiddenWord = this.revealLetters(this.model.hiddenWord, this.model.currentWord, guess);
            this.updateHiddenWord();
            //check if all the letters are revealed
            if (this.model.hiddenWord.indexOf("_") === -1) {
                this.model.correctWords++;
                this.startNewGame();
            }
        } else {
            this.model.wrongGuesses++;
            this.update_try();
            //check if the game is over with 10 tries or time is up
            if (this.model.wrongGuesses === this.model.maxWrongGuesses||this.timeRemaining === 0) {
                alert(`Game over! You have guessed ${this.model.correctWords} words!`);
                //reset the interval
                this.model.correctWords = 0;
                clearInterval(this.timer);
                this.startNewGame();
            }
        }
    }
    //display the update timer
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
                alert(`Time's up! You have guessed ${this.model.correctWords} words!`);
                this.startNewGame();
            }
        }, 1000);
    }
    //update the number of wrong guesses
    update_try() {
        this.view.score.textContent = `${this.model.wrongGuesses} / ${this.model.maxWrongGuesses}`;
    }

    //update the hidden word
    updateHiddenWord() {
        this.view.hiddenWordElement.textContent = this.model.hiddenWord.split("").join(" ");
    }
    //reveal the letters
    revealLetters(hiddenWord, currentWord, guess) {
        return hiddenWord.split("").map((c, i) => c === "_" && currentWord[i] === guess ? guess : c).join("");
    }
}

const app = new Controller(new Model(), new View());
