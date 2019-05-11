import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import { purple, white } from '../utils/colors';
import DecksList from '../components/DecksList';
import DeckDetail from '../components/DeckDetail';

export const MainNavigator = createAppContainer(createStackNavigator({
  home: {
    screen: DecksList,
    navigationOptions: {
      header: null,
    },
  },
  EntryDetail: {
    screen: DeckDetail,
    navigationOptions: ({ navigation }) => ({
      title: 'Add Deck',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      },
    }),
  },
}));