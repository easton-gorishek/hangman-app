import { get, put, post } from './request';

const URL = '/api/hangman';
const START_URL = `${URL}/start-game`;
const PREVIOUS_MOVE = `${URL}/previous-move`;

export const startGame = () => get(START_URL);
export const loadGame = (game) => get(`${URL}/${game}`);
export const previousMove = (game) => get(`${PREVIOUS_MOVE}/${game}`);
export const updateGuess = (guess) => put(URL, guess);
export const guessEntireWord = (word) => post(URL, word);
