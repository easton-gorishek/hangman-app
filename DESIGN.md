# Hangman App Design

Frontend developed with React.

__User stories:__ 
* As a user I'm able to...
  * start game by clicking a "Start Button"
  * view guesses remaining
  * view empty and correctly guessed tiles to secret word
  * submit single guesses or entire word once per game
  * undo game state to previous move
  * continue to next random word in list if secret word is guessed
  * play again if game is lost or won
  * share url, that includes current game state, to a friend, and have neither game affected by either player moving forward
  * bookmark current state of game, and be able to return and play game. 
  

__Component structure:__
* App
  * Game
    * Guesses Remaining
    * Form (single guess & entire word guess)
    * Undo Button
    * Tiles
      * Tile
 
 __Security:__
 * Write game logic on server to keep frontend "dumb."
