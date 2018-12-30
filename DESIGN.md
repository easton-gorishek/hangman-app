# Hangman App Design

Frontend developed with React and backend/server with Node and Express.

__User stories:__ 
* As a user I'm able to...
  * start game by clicking a "Start Button"
  * view guesses remaining
  * view empty and correctly guessed tiles to secret word
  * submit single guesses or entire word once per game
  * undo game state to previous move
  * continue to next random word in list if secret word is guessed
  * play again if game is lost or won
  * share game via URL to a friend, and have neither game affected by either player moving forward
  * bookmark current state of game, and be able to return and play game. 
  

__App component structure:__
* App
  * Game
    * Guesses Remaining
    * Form (single guess & entire word guess)
    * Undo Button
    * Tiles
      * Tile
     
__Backend/Server component structure:__
* Server (create server)
* Lib
  * App (spin up express app)
  * HangMan (game logic)
  * Routes
    * gameMoves (Route handlers)
 
 __Security:__
 * Write game logic on server to keep frontend "dumb."
