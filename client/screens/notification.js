import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, TouchableOpacity,Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAllAppointments, getAllCheckups, getAllEyeScreenings } from '../api';
import { useNotification } from '../screens/notificationProvider';
import * as Notifications from 'expo-notifications';

const Notification = () => {
  const navigation = useNavigation();
  const { updateNotificationCount } = useNotification();
  const [notifications, setNotifications] = useState([]);
  const [prevLength, setPrevLength] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const appointments = await getAllAppointments();
        const eyeScreenings = await getAllEyeScreenings();
        const checkups = await getAllCheckups();
  
        const transformedAppointments = appointments.length > 0 ? [{
          id: 1,
          image: require('../assets/splash.png'),
          title: 'New Appointment',
          message: `You have an appointment on ${new Date(appointments[appointments.length - 1].date).toLocaleDateString('en-US')}  at ${appointments[appointments.length - 1].clinic}`,
          timestamp: getTimeDifference(appointments[appointments.length - 1].createdAt),
          unread: true,
          type: 'appointment',
        }] : [];
  
        const transformedEyeScreenings = eyeScreenings.length > 0 ? [{
          id: 1,
          image: require('../assets/splash.png'),
          title: 'New Eye Screening Schedule',
          message: `You have an eye screening scheduled on ${new Date(eyeScreenings[eyeScreenings.length - 1].date).toLocaleDateString('en-US')}  at ${eyeScreenings[eyeScreenings.length - 1].clinic}`,
          timestamp: getTimeDifference(eyeScreenings[eyeScreenings.length - 1].createdAt),
          unread: true,
          type: 'eyeScreening',
        }] : [];
  
        const transformedCheckups = checkups.length > 0 ? [{
          id: 1,
          image: require('../assets/splash.png'),
          title: 'New Diabetes Appointment Schedule',
          message: `You have a diabetes checkup scheduled on ${new Date(checkups[checkups.length - 1].date).toLocaleDateString('en-US')}  at ${checkups[checkups.length - 1].clinic}`,
          timestamp: getTimeDifference(checkups[checkups.length - 1].createdAt),
          unread: true,
          type: 'checkup',
        }] : [];
  
        const allNotifications = [...transformedAppointments, ...transformedEyeScreenings, ...transformedCheckups];
        setNotifications(allNotifications);
        updateNotificationCount(allNotifications.length);
        setPrevLength(allNotifications.length);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };
  
    fetchData();
  }, []);
  

  useEffect(() => {
    const checkForNewNotifications = async () => {
      try {
        const appointments = await getAllAppointments();
        const eyeScreenings = await getAllEyeScreenings();
        const checkups = await getAllCheckups();

        const totalLength = appointments.length + eyeScreenings.length + checkups.length;

        if (totalLength > prevLength) {
          const newAppointment = appointments[appointments.length - 1];
          const newEyeScreening = eyeScreenings[eyeScreenings.length - 1];
          const newCheckup = checkups[checkups.length - 1];

          let notificationBody;

          if (newAppointment) {
            notificationBody = `New appointment added on ${new Date(newAppointment.date).toLocaleDateString('en-US')} `;
          } else if (newEyeScreening) {
            notificationBody = `New eye screening added on ${new Date(newEyeScreening.date).toLocaleDateString('en-US')} `;
          } else if (newCheckup) {
            notificationBody = `New checkup added on ${new Date(newCheckup.date).toLocaleDateString('en-US')} `;
          }

          displayNotification(notificationBody);
          setPrevLength(totalLength);
        }
      } catch (error) {
        console.error('Error checking for new notifications:', error.message);
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

    checkForNewNotifications();
  }, [prevLength]);

  const getTimeDifference = (dateString) => {
    const appointmentDate = new Date(dateString);
    const currentTime = new Date();
    const difference = Math.abs(currentTime - appointmentDate);
    const hours = Math.floor(difference / (1000 * 60 * 60));
    return `${hours} hours ago`;
  };

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
              transform: [{ translateY: -5 }],
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
