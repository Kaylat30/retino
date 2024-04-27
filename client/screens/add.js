import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, Button, Switch,TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { RadioButton} from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { addNutritionRecord,getAllNutritionRecords ,deleteNutritionRecord,addMedication, addCheckup, addAppointment, addEyeScreening, updateAppointment,getAllAppointments, getAllEyeScreenings, getAllCheckups, updateEyeScreening, updateCheckup} from '../api';
import Toast from 'react-native-toast-message';
import { ScrollView } from 'react-native-gesture-handler';

const Tab = createMaterialTopTabNavigator();

export default function Add() {
  
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
    const [appointments, setAppointments] = useState([]);
    const [eyescreening, setEyescreening] = useState([]);
    const [checkups, setCheckups] = useState([]);

    useEffect(() => {
      const fetchAppointments = async () => {
        try {
          const appointmentsData = await getAllAppointments();
          setAppointments(appointmentsData);
        } catch (error) {
          console.error('Error fetching appointments:', error.message);
          ToastAndroid.show(`Error fetching appointments: ${error.message}`, ToastAndroid.SHORT);
        }
      };
      const fetchEyescreening = async () => {
        try {
          const eyescreeningData = await getAllEyeScreenings();
          setEyescreening(eyescreeningData);
        } catch (error) {
          console.error('Error fetching eyescreenins:', error.message);
          ToastAndroid.show(`Error fetching eyescreenins: ${error.message}`, ToastAndroid.SHORT);
        }
      };
      const fetchCheckups = async () => {
        try {
          const checkupsData = await getAllCheckups();
          setCheckups(checkupsData);
        } catch (error) {
          console.error('Error fetching checkups:', error.message);
          ToastAndroid.show(`Error fetching checkups: ${error.message}`, ToastAndroid.SHORT);
        }
      };

      fetchAppointments();
      fetchCheckups()
      fetchEyescreening()
    }, []);
  
    const handleSave = async () => {
      try {
        // Split the date string into day, month, and year components
        const [day, month, year] = date.split('/').map(part => parseInt(part));
    
        // Create a new Date object using the components
        const parsedDate = new Date(year, month - 1, day); 
    
        if (cat === "appointment") {
          let id = appointments[appointments.length - 1]._id;
          const response = await updateAppointment(id,result);
          if (response) {
            Toast.show({
              type: 'success',
              text1: 'Appointment details added successfully',
            });
          }
        } else if (cat === "checkup") {
          if (checkups.length > 0) {
            let id = checkups[checkups.length - 1]._id;
            const update = await updateCheckup(clinic,id,glucose,hemoglobin,urinalysis);
            if (!update) {
              // Handle update failure
              return; // Exit function or show error message
            }
          }
        
          const add = await addCheckup(parsedDate);
          
          if (add) {
            Toast.show({
              type: 'success',
              text1: 'Checkup details added successfully',
            });
          } else {
            // Handle add failure
          }
        }
         else if (cat === "eyescreening") {
          if (eyescreening.length > 0) {
            let id = eyescreening[eyescreening.length - 1]._id;
            const update = await updateEyeScreening(id, clinic, visual, intraocular, serum, risk);
            if (!update) {
              // Handle update failure
              return; // Exit function or show error message
            }
          }
        
          const add = await addEyeScreening(parsedDate);
          if (add) {
            Toast.show({
              type: 'success',
              text1: 'Eyescreening details added successfully',
            });
          } else {
            // Handle add failure
          }
        }
        


        // Clear the text fields after successful save
        setDate('');
        setClinic('');
        setResult('');
        setRisk('');
        setVisual('');
        setIntraocular('');
        setSerum('');
        setGlucose('');
        setHemoglobin('');
        setUrinalysis('');
    
      } catch (error) {
        console.error('Error adding record:', error.message);
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
              {/* <Text>Date:</Text>
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
              /> */}
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
      <ScrollView style={{ marginBottom: 50 ,padding:20}}>
        <Text>Select Category to add details:</Text>
        <Picker
          selectedValue={cat}
          style={{ height: 50, width: 200, marginBottom: 10 }}
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
  
          <TouchableOpacity onPress={handleSave} style={{ backgroundColor: 'blue', borderRadius: 5, padding: 10, alignItems: 'center' }}>
            <Text style={{ color: 'white' }}>Save</Text>
          </TouchableOpacity>
      </ScrollView>
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



  
