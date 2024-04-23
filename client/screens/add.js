import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, Button, Switch,TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { RadioButton} from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { addNutritionRecord,getAllNutritionRecords ,deleteNutritionRecord,addMedication, addCheckup, addAppointment, addEyeScreening} from '../api';
import Toast from 'react-native-toast-message';
import { ScrollView } from 'react-native-gesture-handler';

const Tab = createMaterialTopTabNavigator();

export default function Add() {
  

  // function Medication(){

  //   const [name, setName] = useState('');
  //   const [email, setEmail] = useState('');
  //   const [gender, setGender] = useState('');
  //   const [age, setAge] = useState('');
  //   const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  //   const [selectedGender, setSelectedGender] = useState('');

  // const handleSave = () => {
  //   // Handle form submission
  //   console.log('Name:', name); 
  //   console.log('Email:', email);
  //   console.log('Gender:', gender);
  //   console.log('Age:', age);
  //   console.log('Notifications Enabled:', notificationsEnabled);
  // };
  //   return(
  //     <View style={{ padding: 20 }}>
  //     <Text>Name:</Text>
  //     <TextInput
  //       style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
  //       onChangeText={text => setName(text)}
  //       value={name}
  //     />

  //     <Text>Email:</Text>
  //     <TextInput
  //       style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
  //       onChangeText={text => setEmail(text)}
  //       value={email}
  //       keyboardType="email-address"
  //     />

  //     <Text>Gender:</Text>
  //     <Picker
  //       selectedValue={gender}
  //       style={{ height: 50, width: 150, marginBottom: 10 }}
  //       onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
  //       >
  //       <Picker.Item label="Male" value="male" />
  //       <Picker.Item label="Female" value="female" />
  //     </Picker>

  //       <Text>Gender:</Text>
  //       <RadioButton.Group onValueChange={value => setSelectedGender(value)} value={selectedGender}>
  //       <View style={{ flexDirection: 'row', alignItems: 'center' }}>
  //         <RadioButton value="male" />
  //         <Text>Male</Text>
  //       </View>
  //       <View style={{ flexDirection: 'row', alignItems: 'center' }}>
  //         <RadioButton value="female" />
  //         <Text>Female</Text>
  //       </View>
  //     </RadioButton.Group>


  //     <Text>Age:</Text>
  //     <TextInput
  //       style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
  //       onChangeText={text => setAge(text)}
  //       value={age}
  //       keyboardType="numeric"
  //     />

  //     <Text>Enable Notifications:</Text>
  //     <Switch
  //       trackColor={{ false: "#767577", true: "#81b0ff" }}
  //       thumbColor={notificationsEnabled ? "#f5dd4b" : "#f4f3f4"}
  //       ios_backgroundColor="#3e3e3e"
  //       onValueChange={value => setNotificationsEnabled(value)}
  //       value={notificationsEnabled}
  //     />

  //     <Button title="Save" onPress={handleSave} />
  //   </View>
  //   )
  // }

  // const DiabeticFoodForm = () => {
  //   const [foods, setFoods] = useState(['']); 
  
  //   // Function to add a new text input field
  //   const addFoodField = () => {
  //     setFoods([...foods, '']);
  //   };
  
  //   // Function to handle text input changes
  //   const handleFoodChange = (text, index) => {
  //     const updatedFoods = [...foods];
  //     updatedFoods[index] = text;
  //     setFoods(updatedFoods);
  //   };
  
  //   // Function to delete a food item
  //   const deleteFood = (index) => {
  //     const updatedFoods = [...foods];
  //     updatedFoods.splice(index, 1);
  //     setFoods(updatedFoods);
  //   };

  //   const saveFoods = () => {
  //     // Implement your logic to save the food items here
  //     console.log('Saving foods:', foods);
  //   };
  
  //   return (
  //     <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
  //       {/* Food input fields */}
  //       {foods.map((food, index) => (
  //         <View style={{ flexDirection: 'row', alignItems: 'center' }} key={index}>
  //           <TextInput
  //             style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
  //             placeholder={`Food ${index + 1}`}
  //             value={food}
  //             onChangeText={(text) => handleFoodChange(text, index)}
  //           />
  //           <TouchableOpacity onPress={() => deleteFood(index)} style={{ marginLeft: 10 }}>
  //             <FontAwesome name="trash" size={20} color="red" />
  //           </TouchableOpacity>
  //         </View>
  //       ))}
  
  //       {/* Button to add a new food input field */}
  //       <TouchableOpacity
  //         onPress={addFoodField}
  //         style={{
  //           backgroundColor: 'blue',
  //           borderRadius: 20,
  //           width: 40,
  //           height: 40,
  //           alignItems: 'center',
  //           justifyContent: 'center',
  //           alignSelf: 'flex-end',
  //           marginTop: 10,
  //         }}
  //       >
  //         <FontAwesome name="plus" size={20} color="white" />
  //       </TouchableOpacity>
  
        // {/* Save button */}
        // <TouchableOpacity
        //   onPress={saveFoods}
        //   style={{
        //     backgroundColor: 'green',
        //     borderRadius: 20,
        //     height: 40,
        //     alignItems: 'center',
        //     justifyContent: 'center',
        //     alignSelf: 'center',
        //     marginTop: 20,
        //     paddingHorizontal: 40,
        //   }}
        // >
        //   <Text style={{ color: 'white' }}>Save</Text>
        // </TouchableOpacity>
  //     </View>
  //   );
  // };

  function Medication() {
    const [cat, setCat] = useState('');
    const [date, setDate] = useState('');
    const [clinic, setClinic] = useState('');
    const [result, setResult] = useState('');
    const [risk, setRisk] = useState('');
    const [visual, setVisual] = useState('');
    const [intraocular, setIntraocular] = useState('');
    const [serum, setSerum] = useState('');
    const [glucose, setGlucose] = useState('');
    const [hemoglobin, setHemoglobin] = useState('');
    const [urinalysis, setUrinalysis] = useState('');
    const [notificationsEnabled, setNotificationsEnabled] = useState(false);
    const [selectedGender, setSelectedGender] = useState('');
  
    const handleSave = async () => {
      try {
        //const success = await addMedication(cat, risk, visual, intraocular, serum, glucose, hemoglobin, urinalysis, result, date, clinic);
        if(cat=="appointment")
        {
          const response = await addMedication(date,clinic,result)
          if (response) {
            Toast.show({
              type: 'success',
              text1: 'Appointment details added successfully',
            });
            }
        }else if(cat=="checkup")
        {
          const response = await addCheckup(date,clinic,glucose,hemoglobin,urinalysis)
          if (response) {
            Toast.show({
              type: 'success',
              text1: 'Checkup details added successfully',
            });
            }
        } else if(cat=="eyescreening")
        {
          const response = await addEyeScreening(date,clinic,visual,intraocular,serum,risk)
          if (response) {
            Toast.show({
              type: 'success',
              text1: 'Eyescreening details added successfully',
            });
            }
        }
        
      } catch (error) {
        console.error('Error adding medication record:', error.message);
        Toast.show({
          type: 'error',
          text1: 'Adding details Failed',
          text2: error.message,
        });
      }
    };
  
    const renderForms = () => {
      switch (cat) {
        case 'appointment':
          return (
            <>
              <Text>Date:</Text>
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                onChangeText={text => setDate(text)}
                value={date}
              />
              <Text>Clinic:</Text>
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                onChangeText={text => setClinic(text)}
                value={clinic}
              />
              <Text>Result:</Text>
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                onChangeText={text => setResult(text)}
                value={result}
              />
            </>
          );
        case 'eyescreening':
          return (
            <>
            <ScrollView style={{ marginBottom: 30 }}>
              <Text>Date:</Text>
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                onChangeText={text => setDate(text)}
                value={date}
              />
              <Text>Clinic:</Text>
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                onChangeText={text => setClinic(text)}
                value={clinic}
              />
              <Text>Risk:</Text>
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                onChangeText={text => setRisk(text)}
                value={risk}
              />
              <Text>Visual:</Text>
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                onChangeText={text => setVisual(text)}
                value={visual}
              />
              <Text>Intraocular:</Text>
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                onChangeText={text => setIntraocular(text)}
                value={intraocular}
              />
              <Text>Serum:</Text>
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                onChangeText={text => setSerum(text)}
                value={serum}
              />
            </ScrollView>
            </>
          );
        case 'checkup':
          return (
            <>
              <Text>Date:</Text>
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                onChangeText={text => setDate(text)}
                value={date}
              />
              <Text>Clinic:</Text>
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                onChangeText={text => setClinic(text)}
                value={clinic}
              />
              <Text>Glucose:</Text>
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                onChangeText={text => setGlucose(text)}
                value={glucose}
              />
              <Text>Hemoglobin:</Text>
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                onChangeText={text => setHemoglobin(text)}
                value={hemoglobin}
              />
              <Text>Urinalysis:</Text>
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                onChangeText={text => setUrinalysis(text)}
                value={urinalysis}
              />
            </>
          );
        default:
          return null;
      }
    };
  
    return (
      <View style={{ padding: 20 }}>
        <Text>Select Category to add details:</Text>
        <Picker
          selectedValue={cat}
          style={{ height: 50, width: 150, marginBottom: 10 }}
          onValueChange={(itemValue, itemIndex) => setCat(itemValue)}
        >
          <Picker.Item label="Select" value="" />
          <Picker.Item label="Appointment" value="appointment" />
          <Picker.Item label="Eyescreening" value="eyescreening" />
          <Picker.Item label="Checkup" value="checkup" />
        </Picker>
  
        {renderForms()}
  
        {/* <Text>Enable Notifications:</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={notificationsEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={value => setNotificationsEnabled(value)}
          value={notificationsEnabled}
        /> */}
  
        <Button title="Save" onPress={handleSave} />
      </View>
    );
  }

  const DiabeticFoodForm = () => {
    const [unsavedFoods, setUnsavedFoods] = useState([]); 
    const [savedFoods, setSavedFoods] = useState([]);
  
    // Fetch all nutrition records when the component mounts
    const fetchFoods = async () => {
      try {
        const response = await getAllNutritionRecords();
        // Sort foods based on dates from current to previous
        const sortedFoods = response.sort((a, b) => new Date(b.date) - new Date(a.date));
        setSavedFoods(sortedFoods);
      } catch (error) {
        console.error('Error fetching nutrition records:', error.message);
      }
    };
    useEffect(() => {     
      fetchFoods();
    }, []);
  
    // Function to delete a food item
    const deleteFood = async (nutritionId) => {
      try {
        const success = await deleteNutritionRecord(nutritionId);
        if (success) {
          Toast.show({
            type: 'success',
            text1: 'Food deleted successfully',
          });
          // Update the saved foods state by removing the deleted food item
          const updatedFoods = savedFoods.filter(food => food._id !== nutritionId);
          setSavedFoods(updatedFoods);
          } 
        
      } catch (error) {
        console.error('Error deleting food:', error.message);
        Toast.show({
          type: 'error',
          text1: 'Deleting Foods Failed',
          text2: error.message,
        });
      }
    };
  
    // Function to add a new text input field for unsaved foods
    const addFoodField = () => {
      setUnsavedFoods([...unsavedFoods, '']);
    };
  
    // Function to handle text input changes for unsaved foods
    const handleFoodChange = (text, index) => {
      const updatedFoods = [...unsavedFoods];
      updatedFoods[index] = text;
      setUnsavedFoods(updatedFoods);
    };
  
    // Function to delete an unsaved food item
    const deleteUnsavedFood = (index) => {
      const updatedFoods = [...unsavedFoods];
      updatedFoods.splice(index, 1);
      setUnsavedFoods(updatedFoods);
    };

    // Function to save foods 
    const saveFoods = async () => {
      try {
        // Get the current date
        const currentDate = new Date().toISOString();

        const foodsWithDate = await Promise.all(unsavedFoods.map(food => ({ food, date: currentDate })));
        const response = await addNutritionRecord(foodsWithDate);

        if (response) {
          Toast.show({
            type: 'success',
            text1: 'Foods added successfully',
          });
          setUnsavedFoods([])
          fetchFoods();
          } 
      } catch (error) {
        console.error('Error saving foods:', error.message);
        Toast.show({
          type: 'error',
          text1: 'Adding Foods Failed',
          text2: error.message,
        });
      }
    };

    // Group foods by date
    const groupedFoods = savedFoods.reduce((groups, food) => {
      const date = new Date(food.date).toLocaleDateString();
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(food);
      return groups;
    }, {});

  
    return (
      <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
        {/* Display unsaved foods */}
        {unsavedFoods.map((food, index) => (
          <View style={{ flexDirection: 'row', alignItems: 'center' }} key={index}>
            <TextInput
              style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
              placeholder={`Food ${index + 1}`}
              value={food}
              onChangeText={(text) => handleFoodChange(text, index)}
            />
            <TouchableOpacity onPress={() => deleteUnsavedFood(index)} style={{ marginLeft: 10 }}>
              <FontAwesome name="trash" size={20} color="red" />
            </TouchableOpacity>
          </View>
        ))}

         {/* Button to add a new food input field for unsaved foods */}
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
  
        {/* Display saved foods }
        {savedFoods.map((food, index) => (
          <View key={index}>
            {/* Display date as heading }
            <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 10 }}>
              {new Date(food.date).toLocaleDateString()}
            </Text>
            {/* Display individual food item with delete icon }
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text>{food.food}</Text>
              <TouchableOpacity onPress={() => deleteFood(food._id)} style={{ marginLeft: 10 }}>
                <FontAwesome name="trash" size={20} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        ))*/}

      {Object.entries(groupedFoods).map(([date, foods]) => (
        <View key={date}>
          {/* Display date as heading */}
          <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 10 }}>
            {date}
          </Text>
          {/* ScrollView for food items */}
          <ScrollView style={{ maxHeight: 200 }}>
            {/* Display individual food items with delete icon */}
            {foods.map((food, index) => (
              <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text>{food.food}</Text>
                <TouchableOpacity onPress={() => deleteFood(food._id)} style={{ marginLeft: 10 }}>
                  <FontAwesome name="trash" size={20} color="red" />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
      ))}
       
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



  
