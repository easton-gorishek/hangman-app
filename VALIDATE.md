## Fulfilled requirements

__1. Rules__
* List of required words are defined on server.
* Random word is selected when "Start Game" button is pressed, and then is sliced from list so it won't be included in next round.
* An array of blank tiles representing the "secret word" is created and sent to the frontend. It's represented through the Game, Tiles, and Tile component. 
* Number of guesses starts at eight and is decremented with each wrong guess. Clicking the "Undo" button will take you back to previous game state and may return a life if applicable. 
* A message stating "Game lost" will appear on eighth incorrect guess.
* A message stating "Game won" will appear if secrect word is guessed.

__2. New Game__
* Refer to unfulfilled section at bottom of document.  

__3. Bookmarkable Turns__
* Player is able to bookmark current state of game and then later return to that bookmark and continue from that game state. This is made possible by chaining each move with unique ids so that previous game states are not affected. 

__4. Sharing__
* Player is able to share current game state by sending URL.
* URL is under 80 characters. This is accomplished by assigning unique IDs (7-14 characters in length) to each game/move.
* Friend is able to pick up from same game state by retrieving snapshot of game by the unique id provided within the URL.

__5. Undo__
* Players are able to undo to beginning of game, even if game was shared and there were previous moves made. Again, this is accomplished by creating a unique id and snapshot of each game/move. 

__6. Standards__
*  App is compiled with webpack and babel.

__7. Security__
* Game logic is written entirely on server, and frontend only recieves what's needed to play game (game tiles, guesses remaining, and history** (unique ids only)).

__8. Proxy-friendly__
* Refer to unfulfilled section at bottom of document. 

__9. No other software/storage__
* No database was included. App works entirely with frontend (React) and server (Node/Express) 


## Unfulfilled requirements

I will do my best to provide time estimates and hope to under promise and over deliver. 

__2. New Game__ 
* Game will state "Game won" but will not present user with a "New Game/Next Word" button to continue. I'd need to create or update a method within the hangMan class that takes the list property of the current game snapshot and splices a random word from the list and then assigns it to the secretWord property.
* Time estimate - two or less hours since majority of game logic/structure is written. 

__8. Proxy-friendly__
* I can't think of a time I've incorporated a reverse proxy before. Maybe deploying through Heroku includes it? 
* Time estimate - A day to research and another day to implement. 

__Other__
* Disable guess buttons when game is lost or won and display a "Play Again" button.
* Instantiate new hangMan game if "Play Again" button is pressed. 
* Iron out form so it only accepts acceptable characters.
* Fix "Submit Entire Word" form so that it doesn't break app if incorrect guess is made. And to provide "New Game/Next Word" button if guess is correct.
* Deploy on Heroku. 
* Time estimate - three to six hours to have game completely ironed out after forementioned requirements are resolved. 



