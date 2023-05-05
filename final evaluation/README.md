# antra-MEAN-2023-04-24
## final evaluation


### Requirements:

1. MUST demonstrate the proper usage of MVC. Otherwise you will automatically fail.
2. Follow both functionalities and styles requirements.

### Functionalities

1. Get the random word from the following API: https://random-word-api.herokuapp.com/word
	1. This is a free API, so there could be response issue when too many requests are made.
	2. Use the following random word list if the API is down: 
```
[
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
    ]
```
1. Initialize the game board that displays:
	1. A header at the center of the page that includes:
		1. The game title
		2. The ratio of incorrect guesses to maximum allowed chances (e.g., 0 / 10 at the start of the game)
	2. An input field that accepts only one letter
	3. A button to start a new game
2. After obtaining the random word,
	1. Generate a random number to determine the number of letters to conceal (Note: this number must not exceed the word's length)
	2. Randomly choose the positions of the letters to hide.
	3. Display hidden letters as an underscore (_).
3. When user makes a guess (i.e., input a letter and presses Enter):
	1. If the letter is correct, reveal all the same letters on the page. The incorrect guess count remains the same.
		1. "correct" means that the letter exists in the current hidden letters
	2. If the letter is not correct, increment the wrong guess count by 1. 
		1. If users exhausts all chances (i.e., wrong guesses equal max allowed chances), display an alert message with the total number of correctly guessed words (e.g., "Game over! You have guessed 5 words!").
		2. Start a new game after user clicks the OK button in the alert window. 
	3. If all letters are revealed and user still has remaining chances, generate a new word. 
		1. Continue generating new words until user runs out of chances.
4. When the new game button is clicked, begin a new game. 
	1. Generate a new word, and reset the wrong guess count to 0.

### Styles

1. Follow the BEM naming rules.
2. Utilize a flexbox layout.
3. Center all items on the page and use Arial font.
4. Style the "New Game" button with the color code #007BFF and change to #0056B3 on hover.

### Bonus:

1. Display the user's guessed letters.
	1. Use different colors to differentiate between correct and incorrect letters in the guess history. 
	2. A letter already present in the history should not be used again.
		1. If the user tries to guess a letter already the history list, display a pop-up message.
		2. This repeated guess should not increase the wrong guess count.
	3. Ensure each letter only appears once in the history.
	4. Clear the guess history when a new word is displayed.
2. Implement a 60-second time limit for the game. Within this timeframe, the user can continue guessing as long as they do not exceed 10 incorrect guesses. (Hint: Use the setInterval function)