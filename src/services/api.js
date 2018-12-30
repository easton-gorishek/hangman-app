import { get, put, post } from './request';

const URL = '/api/hangman';
const START_URL = `${URL}/start-game`;

export const startGame = () => get(START_URL);
export const loadGame = (game) => get(`${URL}/${game}`);
export const updateGuess = (guess) => put(URL, guess);
export const guessEntireWord = (word) => post(URL, word);
