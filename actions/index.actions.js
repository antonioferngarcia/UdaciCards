import { fetchDecks } from '../utils/api';

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';

export function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function addDeck (deck) {
  return {
    type: ADD_DECK,
    deck,
  }
}

export function addCard (card) {
  return {
    type: ADD_CARD,
    card,
  }
}

export function getDecks () {
  return (dispatch) => {
    fetchDecks()
      .then((decks) => dispatch(receiveDecks(decks)))
      // .then((decks) => console.log(decks))
      // .then(() => this.setState(() => ({ready: true})))
  }
}