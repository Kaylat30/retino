import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch,TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { RadioButton} from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FontAwesome } from '@expo/vector-icons';


const Tab = createMaterialTopTabNavigator();

export default function Add() {
  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [notificationsEnabled, setNotificationsEnabled] = useState(false);
    const [selectedGender, setSelectedGender] = useState('');

  const handleSave = () => {
    // Handle form submission
    console.log('Name:', name); 
    console.log('Email:', email);
    console.log('Gender:', gender);
    console.log('Age:', age);
    console.log('Notifications Enabled:', notificationsEnabled);
  };

  function Medication(){
    return(
      <View style={{ padding: 20 }}>
      <Text>Name:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        onChangeText={text => setName(text)}
        value={name}
      />

      <Text>Email:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        onChangeText={text => setEmail(text)}
        value={email}
        keyboardType="email-address"
      />

      <Text>Gender:</Text>
      <Picker
        selectedValue={gender}
        style={{ height: 50, width: 150, marginBottom: 10 }}
        onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
        >
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
      </Picker>

        <Text>Gender:</Text>
        <RadioButton.Group onValueChange={value => setSelectedGender(value)} value={selectedGender}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton value="male" />
          <Text>Male</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton value="female" />
          <Text>Female</Text>
        </View>
      </RadioButton.Group>


      <Text>Age:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        onChangeText={text => setAge(text)}
        value={age}
        keyboardType="numeric"
      />

      <Text>Enable Notifications:</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={notificationsEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={value => setNotificationsEnabled(value)}
        value={notificationsEnabled}
      />

      <Button title="Save" onPress={handleSave} />
    </View>
    )
  }

  const DiabeticFoodForm = () => {
    const [foods, setFoods] = useState(['']); // Initial state with an empty text input
  
    // Function to add a new text input field
    const addFoodField = () => {
      setFoods([...foods, '']);
    };
  
    // Function to handle text input changes
    const handleFoodChange = (text, index) => {
      const updatedFoods = [...foods];
      updatedFoods[index] = text;
      setFoods(updatedFoods);
    };
  
    // Function to delete a food item
    const deleteFood = (index) => {
      const updatedFoods = [...foods];
      updatedFoods.splice(index, 1);
      setFoods(updatedFoods);
    };

    const saveFoods = () => {
      // Implement your logic to save the food items here
      console.log('Saving foods:', foods);
    };
  
    return (
      <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
        {/* Food input fields */}
        {foods.map((food, index) => (
          <View style={{ flexDirection: 'row', alignItems: 'center' }} key={index}>
            <TextInput
              style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
              placeholder={`Food ${index + 1}`}
              value={food}
              onChangeText={(text) => handleFoodChange(text, index)}
            />
            <TouchableOpacity onPress={() => deleteFood(index)} style={{ marginLeft: 10 }}>
              <FontAwesome name="trash" size={20} color="red" />
            </TouchableOpacity>
          </View>
        ))}
  
        {/* Button to add a new food input field */}
        <TouchableOpacity
          onPress={addFoodField}
          style={{
            backgroundColor: 'blue',
            borderRadius: 20,
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'flex-end',
            marginTop: 10,
          }}
        >
          <FontAwesome name="plus" size={20} color="white" />
        </TouchableOpacity>
  
        {/* Save button */}
        <TouchableOpacity
          onPress={saveFoods}
          style={{
            backgroundColor: 'green',
            borderRadius: 20,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 20,
            paddingHorizontal: 40,
          }}
        >
          <Text style={{ color: 'white' }}>Save</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Tab.Navigator>
      <Tab.Screen name="Medication" component={Medication} />
      <Tab.Screen name="Nutrition" component={DiabeticFoodForm} />
    </Tab.Navigator>
  );
}



  
