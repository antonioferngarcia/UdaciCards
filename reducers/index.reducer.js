import { ADD_CARD, ADD_DECK, RECEIVE_DECKS } from '../actions/index.actions';

const store = {
  decks: {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  }
};

function reducer (state = store, action) {
  switch (action.type) {
    case RECEIVE_DECKS :
      return {
        ...state,
        ...action.decks,
      };
    case ADD_DECK :
      return {
        ...state,
        decks: {
          ...state.decks,
          [action.deck.title] : action.deck
        }
      };
    case ADD_CARD :
      return {
        ...state,
        decks: {
          ...state.decks,
          [action.deckTitle] : {
            ...state.decks[action.deckTitle],
            questions: state.decks[action.deckTitle].questions.concat([action.card])
          }
        }
      };
    default :
      return state
  }
}

export default reducer