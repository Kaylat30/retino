  import React from 'react';
  import { StyleSheet, View,Text } from 'react-native';
  import { NavigationContainer } from '@react-navigation/native';
  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
  import { createStackNavigator } from '@react-navigation/stack';
  import CustomSplashScreen from './screens/CustomSplashScreen';
  import Login from './screens/login';
  import Signup from './screens/signup';
  import { BottomTabNavigator } from './components/bottomnav';
  import { TopTabNavigator } from './components/topnav';
  import BlogInfo from './screens/blogInfo';
  import Notification from './screens/notification';
import NotificationInfo from './screens/notificationInfo';
import { NotificationProvider } from './screens/notificationProvider';
import Toast from 'react-native-toast-message';


  const Stack = createStackNavigator();

  export default function App() {
    return (
      <NotificationProvider>
        <NavigationContainer>      
          <Stack.Navigator 
          initialRouteName="Layout"
          screenOptions={{
            header: () => <TopTabNavigator  />,
            
          }}
          >
          <Stack.Screen
            name="Splash"
            component={CustomSplashScreen}
            options={{ headerShown: false,duration:2 }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }} 
          />
          <Stack.Screen
          name="Layout"
          component={BottomTabNavigator}
          options={{ headerShown: true }}
          />
          
          <Stack.Screen
          name="Notification"
          component={Notification}
          options={{ headerShown: true, title: 'Notifications' }}
        />

        <Stack.Screen
          name="NotificationInfo"
          component={NotificationInfo}
          options={{ headerShown: true, title: 'Notifications' }}
        />
        
        </Stack.Navigator>
        <Toast />
      </NavigationContainer>
      </NotificationProvider>
    );
  }