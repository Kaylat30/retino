import React from 'react';
import { StyleSheet, View,Text,Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "@expo/vector-icons/Ionicons"
import Home from "../screens/home";
import Education from "../screens/education";
import EducInfo from '../screens/educInfo';
import Blog from "../screens/blog";
import Checkup from "../screens/checkup";
import Login from '../screens/login';
import { createStackNavigator } from '@react-navigation/stack';
import BlogInfo from '../screens/blogInfo';
import Add from '../screens/add';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const screenOptions = {
  tabBarShowLabel:false,
  headerShown: false,
  tabBarStyle: {
  position: "absolute",
  bottom: 0,
  right: 0,
  left: 0,
  elevation: 0,
  height: 60,
  background: "#fff"
  }
} 

const BlogStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Blog" component={Blog} options={{ headerShown: false }} />
    <Stack.Screen name="BlogInfo" component={BlogInfo} options={{ headerShown: false, title: 'Blog Info' }} />
  </Stack.Navigator>
);

const EducationStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Education" component={Education} options={{ headerShown: false }} />
    <Stack.Screen name="EducInfo" component={EducInfo} options={{ headerShown: false, title: 'Blog Info' }} />
    
  </Stack.Navigator>
);


 export const BottomTabNavigator = ()=>{
    return(
      <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home" 
        component={Home}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => {
            return (  
              <View style={{alignItems:"center",justifyContent:"center"}}>
                <Ionicons name={focused ? 'analytics-sharp' : 'analytics-outline'} size={24} color={focused ? "#162476" : "#111"} />
                <Text style={{fontSize:12,color:"#162476"}}>INSIGHTS</Text>
              </View>
            )
          }
        }}
      />
      <Tab.Screen
        name="EducationLayout" 
        component={EducationStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (  
              <View style={{alignItems:"center",justifyContent:"center"}}>
                <Ionicons name={focused ? 'book-sharp' : 'book-outline'} size={24} color={focused ? "#162476" : "#111"} />
                <Text style={{fontSize:12,color:"#162476"}}>EDUCATION</Text>
              </View>
            )
          }
        }}
      />

      <Tab.Screen
        name="Add"
        component={Add}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#16247d",
                  width: Platform.OS === "ios" ? 50 : 60, 
                  height: Platform.OS === "ios" ? 50 : 60,
                  top: Platform.OS === "ios" ? -10 : -20, 
                  borderRadius: Platform.OS === "ios" ? 25 : 30
                }}
              >
                <Ionicons name={"add-outline"} size={24} color="#fff" />
              </View>
            );
          }
        }}
      />

      <Tab.Screen
        name="Checkup" 
        component={Checkup}
        options={{
          tabBarIcon: ({ focused }) => {
            return (  
              <View style={{alignItems:"center",justifyContent:"center"}}>
                <Ionicons name={focused ? 'eye-sharp' : 'eye-outline'} size={24} color={focused ? "#162476" : "#111"} />
                <Text style={{fontSize:12,color:"#162476"}}>EYE</Text>
              </View>
            )
          }
        }}
      />
      <Tab.Screen
        name="BlogLayout" 
        component={BlogStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (  
              <View style={{alignItems:"center",justifyContent:"center"}}>
                <Ionicons name={focused ? 'paper-plane-sharp' : 'paper-plane-outline'} size={24} color={focused ? "#162476" : "#111"} />
                <Text style={{fontSize:12,color:"#162476"}}>BLOGS</Text>
              </View>
            )
          }
        }}
      />
</Tab.Navigator>
    )
  }