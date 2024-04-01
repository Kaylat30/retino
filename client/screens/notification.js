import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook
import NotificationInfo from './notificationInfo'; // Import the NotificationInfo component

const notificationsData = [
  {
    id: 1,
    image: require('../assets/splash.png'),
    title: 'New Message',
    message: 'You have received a new message!',
    timestamp: '1 hour ago',
    unread: true,
  },
  {
    id: 2,
    image: require('../assets/splash.png'),
    title: 'Reminder',
    message: "Don't forget your appointment tomorrow.",
    timestamp: '2 hours ago',
    unread: true,
  },
];

const Notification = () => {
  const navigation = useNavigation();
  const [notifications, setNotifications] = useState(notificationsData);

  const handleNotificationPress = (notification) => {
    const updatedNotifications = notifications.map((item) =>
      item.id === notification.id ? { ...item, unread: false } : item
    );
    setNotifications(updatedNotifications);
    navigation.navigate('NotificationInfo', { notification });
  };

  const NotificationItem = ({ item }) => {
    const { image, title, message, timestamp, unread } = item;

    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          padding: 16,
          borderBottomWidth: 1,
          borderBottomColor: '#ccc',
          alignItems: 'center',
          backgroundColor: unread ? '#f0f0f0' : 'white',
        }}
        onPress={() => handleNotificationPress(item)}
      >
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            overflow: 'hidden',
            marginRight: 16,
          }}
        >
          <Image
            source={image}
            style={{ width: '100%', height: '100%' }}
            resizeMode="cover"
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 4 }}>
            {title}
          </Text>
          <Text style={{ fontSize: 14, marginBottom: 4 }}>{message}</Text>
          <Text style={{ fontSize: 12, color: '#999' }}>{timestamp}</Text>
        </View>
        {unread && (
          <View
            style={{
              position: 'absolute',
              top: '50%',
              right: 16,
              transform: [{ translateY: -5 }], // Adjust the vertical position as needed
              backgroundColor: 'red',
              width: 10,
              height: 10,
              borderRadius: 5,
            }}
          />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <NotificationItem item={item} />}
      />
    </View>
  );
};

export default Notification;
