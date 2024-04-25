import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAllAppointments } from '../api'; 
import { useNotification } from '../screens/notificationProvider';
import * as Notifications from 'expo-notifications';


const Notification = () => {
  const navigation = useNavigation();
  const { updateNotificationCount } = useNotification(); // Use the updateNotificationCount function from NotificationContext
  const [notifications, setNotifications] = useState([]);
  const [prevLength, setPrevLength] = useState(0);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const appointments = await getAllAppointments();
        const currentLength = appointments.length;
        if (currentLength > prevLength) {
          const newAppointment = appointments[currentLength - 1];
          const transformedAppointment = {
            id: currentLength, // You might need a unique ID here
            image: require('../assets/splash.png'), // Change the image source if needed
            title: 'New Appointment',
            message: `You have an appointment on ${new Date(newAppointment.date).toLocaleDateString('en-US')}  at ${newAppointment.clinic}`,
            timestamp: getTimeDifference(newAppointment.createdAt),
            unread: true, // Assuming all appointments are unread initially
          };
          setNotifications(prevNotifications => [...prevNotifications, transformedAppointment]);
          updateNotificationCount(prevCount => prevCount + 1); // Increment notification count
          setPrevLength(currentLength);
        }
      } catch (error) {
        console.error('Error fetching appointments:', error.message);
        // Handle error if needed
      }
    };
    

    fetchAppointments();
  }, []);

  useEffect(() => {
    const checkForNewAppointments = async () => {
      try {
        const appointments = await getAllAppointments();
        const currentLength = appointments.length;
        if (currentLength > prevLength) {
          const newAppointment = appointments[currentLength - 1];
          const notificationBody = `New appointment added on ${new Date(newAppointment.date).toLocaleDateString('en-US')} `;
          displayNotification(notificationBody);
          setPrevLength(currentLength);
        }
      } catch (error) {
        console.error('Error checking for new appointments:', error.message);
      }
    };

    const displayNotification = (body) => {
      Notifications.scheduleNotificationAsync({
        content: {
          title: 'New Appointment Added',
          body: body,
        },
        trigger: null,
      });
    };

    checkForNewAppointments();
  }, [prevLength]);

  // Function to calculate the time difference
  const getTimeDifference = (dateString) => {
    const appointmentDate = new Date(dateString);
    const currentTime = new Date();
    const difference = Math.abs(currentTime - appointmentDate);
    const hours = Math.floor(difference / (1000 * 60 * 60));
    return `${hours} hours ago`;
  };

  const handleNotificationPress = (notification) => {
    // Update the notification's unread status to false
    const updatedNotifications = notifications.map((item) =>
      item.id === notification.id ? { ...item, unread: false } : item
    );
    setNotifications(updatedNotifications);
  
    // Handle navigation to notification info screen
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

