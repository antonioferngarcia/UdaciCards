import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import { purple, white } from '../utils/colors';
import DecksList from '../components/DecksList';
import AddDeck from '../components/AddDeck';
import DeckDetail from '../components/DeckDetail';
import AddCard from '../components/AddCard';
import Quiz from '../components/Quiz';

export const MainNavigator = createAppContainer(createStackNavigator({
  home: {
    screen: DecksList,
    navigationOptions: {
      header: null,
    },
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: () => ({
      title: 'Add Deck',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      },
    }),
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.deck.title,
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      },
    }),
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: ({ navigation }) => ({
      title: 'Add new card',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      },
    }),
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({ navigation }) => ({
      title: 'Quiz',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      },
    }),
  },
}));