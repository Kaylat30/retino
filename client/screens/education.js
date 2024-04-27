import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';

export default function Education() {
  const icons = [
    { name: 'notifications-outline', text: 'Diabetic Types' },
    { name: 'alarm-outline', text: 'Management and Treatment.'},
    { name: 'analytics-outline', text: 'Symptoms and Causes'},
    { name: 'attach-outline', text: 'Diabetes Complications'},
    { name: 'book-outline', text: 'Living With' },
    { name: 'camera-outline', text: 'Diagnosis and Tests'},
    { name: 'chatbubbles-outline', text: 'Food'},
    { name: 'cloud-outline', text: 'Travel'},
    { name: 'earth-outline', text: 'Fashion'},
    { name: 'flower-outline', text: 'Music'},
  ];

  const navigation = useNavigation();

  const handlePress = (text) => {
    navigation.navigate('EducInfo', { text });
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: 'lightgrey', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center',paddingBottom: 70}}>
      {icons.map((icon, index) => (
        <TouchableOpacity key={index} onPress={() => handlePress(icon.text)}>
          <View style={{ width: 160, height: 160, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', borderRadius: 15, margin: 10 }}>
            <Ionicons name={icon.name} size={80} color="black" />
            <Text>{icon.text}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
