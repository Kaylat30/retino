import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';

export default function Education() {
  const icons = [
    { name: 'notifications-outline', text: 'General' },
    { name: 'alarm-outline', text: 'Technology'},
    { name: 'analytics-outline', text: 'Health'},
    { name: 'attach-outline', text: 'Education'},
    { name: 'book-outline', text: 'Finance' },
    { name: 'camera-outline', text: 'Sports'},
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
