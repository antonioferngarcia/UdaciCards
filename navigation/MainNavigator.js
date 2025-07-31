import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { purple, white } from '../utils/colors';
import DecksList from '../components/DecksList';
import AddDeck from '../components/AddDeck';
import DeckDetail from '../components/DeckDetail';
import AddCard from '../components/AddCard';
import Quiz from '../components/Quiz';

const Stack = createStackNavigator();

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: white,
          headerStyle: {
            backgroundColor: purple,
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={DecksList}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="AddDeck" 
          component={AddDeck}
          options={{ title: 'Add Deck' }}
        />
        <Stack.Screen 
          name="DeckDetail" 
          component={DeckDetail}
          options={({ route }) => ({ 
            title: route.params?.deckTitle || 'Deck Detail'
          })}
        />
        <Stack.Screen 
          name="AddCard" 
          component={AddCard}
          options={{ title: 'Add new card' }}
        />
        <Stack.Screen 
          name="Quiz" 
          component={Quiz}
          options={({ route }) => ({ 
            title: `Quiz: ${route.params?.deckTitle || 'Quiz'}`
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};