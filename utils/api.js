import { AsyncStorage } from 'react-native'
import { DECKS_STORAGE_KEY, formatResults, getItemByKey } from './asyncStorage'

export function fetchDecks ( ){
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(formatResults);
}

export function submitDeck (key, deck) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [key]: deck
  }));
}

export async function submitCard (key, card) {
  const deck = await getItemByKey(key);
  deck.questions.push(card);
  submitDeck(key, deck);
}