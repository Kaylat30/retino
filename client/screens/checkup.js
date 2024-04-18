import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text,TouchableOpacity,TextInput, ScrollView } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import React ,{useState,useEffect}from 'react';
import { addAppointment, getAllAppointments, getAllCheckups, getAllEyeScreenings } from '../api';
import Toast from 'react-native-toast-message';

function EyeScreening() {
  const [tableData, setTableData] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(-1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllEyeScreenings();
        setTableData(data);
      } catch (error) {
        console.error('Error fetching eye screenings:', error.message);
      }
    };

    fetchData();
  }, []);

  const toggleContent = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <View>
      <Text style={{ fontWeight: 'bold', fontSize: 25, marginBottom: 10, textAlign: 'center',marginVertical:20 }}>Eye Screening</Text>
      <Text style={{marginLeft:40,fontWeight: 'bold', marginVertical:10}}>Screening reminder</Text>

      <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, marginHorizontal: 40 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ color: 'grey',fontSize:19 }}>Wednesday</Text>
          <Text style={{ color: 'black',fontSize:19 }}>25.3.2024</Text>
        </View>
      </View>

      <Text style={{marginLeft:140, marginTop: 20,color: 'grey',textDecorationLine: 'underline'  }}>Log for previous Eye Screening</Text>

      <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, margin: 20 }}>
        <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'lightgrey', paddingBottom: 5, marginBottom: 10 }}>
          <Text style={{ flex: 1, textAlign: 'center', fontWeight: 'bold' }}>Date</Text>
          <Text style={{ flex: 1, textAlign: 'center', fontWeight: 'bold' }}>Risk</Text>
          <Text style={{ flex: 1, textAlign: 'center', fontWeight: 'bold' }}></Text>
        </View>
        {tableData.map((rowData, index) => (
          <View key={index}>
            <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'lightgrey', paddingBottom: 5, marginBottom: 10 }}>
              <Text style={{ flex: 1, textAlign: 'center' }}>{rowData.date}</Text>
              
              <Text style={{ flex: 1, textAlign: 'center' }}>{rowData.risk}</Text>
              <TouchableOpacity style={{ flex: 1, textAlign: 'center' }} onPress={() => toggleContent(index + 1)}>
                <Ionicons style={{ flex: 1, textAlign: 'center' }} name={expandedIndex === index + 1 ? 'chevron-up' : 'chevron-down'} size={24} color="black" />
              </TouchableOpacity>
            </View>
            {expandedIndex === index + 1 && (
              <View style={{ marginTop: 10 }}>
                {rowData.results.map((result, resultIndex) => (
                  <Text key={resultIndex}>{result}</Text>
                ))}
              </View>
            )}
          </View>
        ))}
      </View>
    </View>
  );
}

function Checkups() {
  const [tableData, setTableData] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(-1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllCheckups();
        setTableData(data);
      } catch (error) {
        console.error('Error fetching diabetic checkups:', error.message);
      }
    };

    fetchData();
  }, []);

  const toggleContent = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <View>
      <Text style={{ fontWeight: 'bold', fontSize: 25, marginBottom: 10, textAlign: 'center',marginVertical:20 }}>Diabetic Checkup</Text>
      <Text style={{marginLeft:40,fontWeight: 'bold', marginVertical:10}}>Checkup reminder</Text>

      <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, marginHorizontal: 40 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ color: 'grey',fontSize:19 }}>Wednesday</Text>
          <Text style={{ color: 'black',fontSize:19 }}>25.3.2024</Text>
        </View>
      </View>

      <Text style={{marginLeft:140, marginTop: 20,color: 'grey',textDecorationLine: 'underline'  }}>Log for previous Diabetic Checkups</Text>

      <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, margin: 20 }}>
      <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'lightgrey', paddingBottom: 5, marginBottom: 10 }}>
        <Text style={{ flex: 1, textAlign: 'center', fontWeight: 'bold' }}>Date</Text>
        <Text style={{ flex: 1, textAlign: 'center', fontWeight: 'bold' }}></Text>
      </View>
      {tableData.map((rowData, index) => (
        <View key={index}>
          <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'lightgrey', paddingBottom: 5, marginBottom: 10 }}>
            <Text style={{ flex: 1, textAlign: 'center'}}>{rowData.date}</Text>
            <TouchableOpacity style={{ flex: 1, textAlign: 'center'}} onPress={() => toggleContent(index + 1)}>
              <Ionicons style={{ flex: 1, textAlign: 'center'}} name={expandedIndex === index + 1 ? 'chevron-up' : 'chevron-down'} size={24} color="black" />
            </TouchableOpacity>
          </View>
          {expandedIndex === index + 1 && (
            <View style={{ marginTop: 10 }}>
              {rowData.results.map((result, resultIndex) => (
                <Text key={resultIndex}>{result}</Text>
              ))}
            </View>
          )}
        </View>
      ))}
</View>

    </View>
  );
}

function Appointment() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllAppointments();
        setTableData(data);
      } catch (error) {
        console.error('Error fetching appointments:', error.message);
      }
    };

    fetchData();
  }, []);

  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const [date, setDate] = useState('');
  const [clinic, setClinic] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [results, setResults] = useState('');

  const handleSubmit = async () => {
    try {
      
      const response = await addAppointment(date, clinic, email, number, description, message, name, results);
  
      // Check if the API call was successful
      if (response) {
        Toast.show({
          type: 'success',
          text1: 'Appointment sent Successfully',
        });
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error adding appointment',
        text2: error.message,
      });
    }
  };
  

  const [expandedIndex, setExpandedIndex] = useState(-1);

  const toggleContent = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <ScrollView style={{ marginBottom: 70 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 25, marginBottom: 10, textAlign: 'center',marginVertical:20 }}>Eye Screening</Text>
      <Text style={{marginLeft:40,fontWeight: 'bold', marginVertical:10}}>Screening reminder</Text>

      <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, marginHorizontal: 40 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ color: 'grey',fontSize:19 }}>Wednesday</Text>
          <Text style={{ color: 'black',fontSize:19 }}>25.3.2024</Text>
        </View>
      </View>

      <Text style={{marginLeft:140, marginTop: 20,color: 'grey',textDecorationLine: 'underline'  }}>Log for previous Eye Screening</Text>

      <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, margin: 20 }}>
        <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'lightgrey', paddingBottom: 5, marginBottom: 10 }}>
          <Text style={{ flex: 1, textAlign: 'center', fontWeight: 'bold' }}>Date</Text>
          <Text style={{ flex: 1, textAlign: 'center', fontWeight: 'bold' }}>Clinic</Text>
          <Text style={{ flex: 1, textAlign: 'center', fontWeight: 'bold' }}></Text>
        </View>
        {tableData.map((rowData, index) => (
          <View key={index}>
            <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'lightgrey', paddingBottom: 5, marginBottom: 10 }}>
              <Text style={{ flex: 1, textAlign: 'center' }}>{rowData.date}</Text>
              
              <Text style={{ flex: 1, textAlign: 'center' }}>{rowData.clinic}</Text>
              <TouchableOpacity style={{ flex: 1, textAlign: 'center' }} onPress={() => toggleContent(index + 1)}>
                <Ionicons style={{ flex: 1, textAlign: 'center' }} name={expandedIndex === index + 1 ? 'chevron-up' : 'chevron-down'} size={24} color="black" />
              </TouchableOpacity>
            </View>
            {expandedIndex === index + 1 && (
              <View style={{ marginTop: 10 }}>
                {rowData.results.map((result, resultIndex) => (
                  <Text key={resultIndex}>{result}</Text>
                ))}
              </View>
            )}
          </View>
        ))}
      </View>

      <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, marginHorizontal: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 20 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Schedule Appointment</Text>
          <TouchableOpacity onPress={toggleFormVisibility}>
            <Ionicons name={isFormVisible ? 'chevron-up' : 'chevron-down'} size={24} />
          </TouchableOpacity>
        </View>
        
        {isFormVisible && (
        <View style={{ marginTop: 10, backgroundColor: 'white', borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
          <TextInput
            placeholder="Date"
            value={date}
            onChangeText={setDate}
            style={{ borderWidth: 1, borderColor: 'lightgrey', borderRadius: 5, padding: 10, marginBottom: 10 }}
          />
          <TextInput
            placeholder="Clinic"
            value={clinic}
            onChangeText={setClinic}
            style={{ borderWidth: 1, borderColor: 'lightgrey', borderRadius: 5, padding: 10, marginBottom: 10 }}
          />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={{ borderWidth: 1, borderColor: 'lightgrey', borderRadius: 5, padding: 10, marginBottom: 10 }}
          />
          <TextInput
            placeholder="Number"
            value={number}
            onChangeText={setNumber}
            style={{ borderWidth: 1, borderColor: 'lightgrey', borderRadius: 5, padding: 10, marginBottom: 10 }}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
            style={{ borderWidth: 1, borderColor: 'lightgrey', borderRadius: 5, padding: 10, marginBottom: 10 }}
            multiline
          />
          <TextInput
            placeholder="Message"
            value={message}
            onChangeText={setMessage}
            style={{ borderWidth: 1, borderColor: 'lightgrey', borderRadius: 5, padding: 10, marginBottom: 10 }}
            multiline
          />
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={setName}
            style={{ borderWidth: 1, borderColor: 'lightgrey', borderRadius: 5, padding: 10, marginBottom: 10 }}
          />
          <TextInput
            placeholder="Results"
            value={results}
            onChangeText={setResults}
            style={{ borderWidth: 1, borderColor: 'lightgrey', borderRadius: 5, padding: 10, marginBottom: 10 }}
            multiline
          />
          <TouchableOpacity onPress={handleSubmit} style={{ backgroundColor: 'blue', borderRadius: 5, padding: 10, alignItems: 'center' }}>
            <Text style={{ color: 'white' }}>Submit</Text>
          </TouchableOpacity>
        </View>
      )}

      </View>

    </ScrollView>

      
  )
}

const Tab = createMaterialTopTabNavigator();

export default function Checkup() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Eye screening" component={EyeScreening} />
      <Tab.Screen name="Checkups" component={Checkups} />
      <Tab.Screen name="Appointment" component={Appointment} />
    </Tab.Navigator>
  );
}
