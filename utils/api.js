import { AsyncStorage } from 'react-native'
import { DECKS_STORAGE_KEY, formatResults } from './asyncStorage'

export function fetchDecks ( ){
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(formatResults);
}

export function submitDeck ({ deck, key }) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [key]: deck
  }));
}

export function submitCard ({ entry, key }) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [key]: entry
  }));
}