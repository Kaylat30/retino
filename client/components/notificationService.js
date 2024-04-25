import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';

// Function to register for push notifications
export const registerForPushNotificationsAsync = async () => {
  let token = null;

  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }

    token = (await Notifications.getExpoPushTokenAsync()).data;
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token;
};

// Function to send a push notification
export const sendPushNotification = async (expoPushToken, title, body) => {
  const message = {
    to: expoPushToken,
    sound: 'default',
    title: title,
    body: body,
    data: { someData: 'goes here' },
  };

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
};


export const schedulePushNotification = async (expoPushToken, title, body, date) => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: title,
        body: body,
        data: { someData: 'goes here' },
      },
      trigger: {
        date: date, // Specify the date for the notification
      },
    });
  };

  