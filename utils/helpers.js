import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';

const NOTIFICATION_KEY = 'notifications.storage.key';

// Configure notification behavior
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export async function setLocalNotification () {
  try {
    const data = await AsyncStorage.getItem(NOTIFICATION_KEY);
    const parsedData = JSON.parse(data);
    
    if (parsedData === null) {
      const { status } = await Notifications.requestPermissionsAsync();
      
      if (status === 'granted') {
        await Notifications.cancelAllScheduledNotificationsAsync();

        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(20);
        tomorrow.setMinutes(0);

        await Notifications.scheduleNotificationAsync({
          content: createNotification(),
          trigger: {
            date: tomorrow,
            repeats: true,
          },
        });

        await AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
      }
    }
  } catch (error) {
    console.log('Error setting notification:', error);
  }
}

function createNotification () {
  return {
    title: 'You have some questions waiting for you!',
    body: "👋 You have some questions waiting for you!",
    sound: true,
    priority: Notifications.AndroidNotificationPriority.HIGH,
  }
}