import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text,TouchableOpacity,TextInput, ScrollView } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import React ,{useState}from 'react';

function EyeScreening() {
  const tableData = [
    { date: '22.4.2023', risk: '1.2%', results: ['Result 1', 'Result 2', 'Result 3'] },
    { date: '23.4.2023', risk: '1.5%', results: ['Result 4', 'Result 5', 'Result 6'] },
    { date: '24.4.2023', risk: '1.8%', results: ['Result 7', 'Result 8', 'Result 9'] },
    { date: '25.4.2023', risk: '2.0%', results: ['Result 10', 'Result 11', 'Result 12'] },
  ];

  const [expandedIndex, setExpandedIndex] = useState(-1);

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
  const tableData = [
    { date: '22.4.2023', risk: '1.2%', results: ['Result 1', 'Result 2', 'Result 3'] },
    { date: '23.4.2023', risk: '1.5%', results: ['Result 4', 'Result 5', 'Result 6'] },
    { date: '24.4.2023', risk: '1.8%', results: ['Result 7', 'Result 8', 'Result 9'] },
    { date: '25.4.2023', risk: '2.0%', results: ['Result 10', 'Result 11', 'Result 12'] },
  ];

  const [expandedIndex, setExpandedIndex] = useState(-1);

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
  const tableData = [
    { date: '22.4.2023', clinic: 'Case Clinic', results: ['Result 1', 'Result 2', 'Result 3'] },
    { date: '23.4.2023', clinic: 'MRM Clinic', results: ['Result 4', 'Result 5', 'Result 6'] },
    { date: '24.4.2023', clinic: 'D&G Clinic', results: ['Result 7', 'Result 8', 'Result 9'] },
    { date: '25.4.2023', clinic: 'Mbarara Hospital', results: ['Result 10', 'Result 11', 'Result 12'] },
  ];

  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePhoneNumberChange = (text) => {
    setPhoneNumber(text);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted:', { name, email, phoneNumber });
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
              placeholder="Name"
              value={name}
              onChangeText={handleNameChange}
              style={{ borderWidth: 1, borderColor: 'lightgrey', borderRadius: 5, padding: 10, marginBottom: 10 }}
            />
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={handleEmailChange}
              style={{ borderWidth: 1, borderColor: 'lightgrey', borderRadius: 5, padding: 10, marginBottom: 10 }}
            />
            <TextInput
              placeholder="Phone Number"
              value={phoneNumber}
              onChangeText={handlePhoneNumberChange}
              style={{ borderWidth: 1, borderColor: 'lightgrey', borderRadius: 5, padding: 10, marginBottom: 10 }}
              keyboardType="phone-pad"
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
