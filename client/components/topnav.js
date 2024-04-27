import React, { useState, useRef,useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Button, Animated, TouchableWithoutFeedback } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation ,useRoute} from '@react-navigation/native';
import { useNotification } from '../screens/notificationProvider';
import { logoutUser } from '../api';
import Toast from 'react-native-toast-message';

export const TopTabNavigator = () => {
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(-200)).current;
  const route = useRoute()
  const firstName = route.params ? route.params.firstName : '';

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
    Animated.timing(slideAnim, {
      toValue: isModalVisible ? -200 : 0, 
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setIsModalVisible(false);
      Animated.timing(slideAnim, {
        toValue: -200,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });

    return unsubscribe;
  }, [navigation]);

  const AppLogo = () => (
    <TouchableOpacity style={styles.logoContainer} onPress={() => navigation.navigate("Home")}>
      <Image source={require('../assets/icon.png')} style={styles.logoImage} />
      <Text style={styles.logoText}>Retino</Text>
    </TouchableOpacity>
  );

  const NotificationIcon = () => {
    const { notificationCount, updateNotificationCount } = useNotification();

    const handleNotificationPress = () => {
      navigation.navigate('Notification');
      updateNotificationCount(0); 
    };

    return (
      <TouchableOpacity onPress={handleNotificationPress}>
        <View>
          <Ionicons name="notifications-outline" size={24} color="black" />
          {notificationCount > 0 && (
            <View style={styles.notificationCountContainer}>
              <Text style={styles.notificationCount}>{notificationCount}</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  const closePanel = () => {
    setIsModalVisible(false);
    Animated.timing(slideAnim, {
      toValue: -200,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const AccountIcon = () => (
    <TouchableOpacity style={styles.iconContainer} onPress={toggleModal}>
      <Ionicons name="person-outline" size={24} color="black" />
    </TouchableOpacity>
  );

  const handleSignOut = async () => {
    try {
      // const user = await logoutUser();
      await logoutUser();
      navigation.navigate("Login") ;
      // if (user) {
      //   Toast.show({
      //     type: 'success',
      //     text1: 'Logout Successful',
      //   });
      //   navigation.navigate('"Login"') ;
      //   }      
      
    } catch (error) {
      // Handle signup error
      Toast.show({
        type: 'error',
        text1: 'Logout Failed',
        text2: error.message,
      });
    }
  };

  return (
    <>
    <TouchableWithoutFeedback onPress={closePanel}>
      <View style={styles.container}>
        <View style={styles.header}>
          <AppLogo />
          <View style={styles.rightIconsContainer}>
            <NotificationIcon />
            <AccountIcon />
          </View>
        </View>

        <Animated.View style={[styles.modalBackground, { transform: [{ translateY: slideAnim }]}]}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              <Text>Hello {firstName}</Text>
              <TouchableOpacity style={styles.button} onPress={handleSignOut}>
                  <Text style={styles.buttonText}>Sign Out</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginTop: 50,
    backgroundColor: "#ffff"
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoImage: {
    width: 40,
    height: 115,
    marginRight: 8,
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rightIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginLeft: 16,
  },
  modalBackground: {
    position: 'absolute',
    bottom: -100,
    top:110,
    left: 70,
    right: 10,
    //backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius:10,
  },
  notificationCountContainer: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationCount: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});