import React from 'react';
import { View, Text ,TouchableOpacity, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// Component for general information paragraph
const GeneralInfo = () => {
  return (
    <View>
      <Text>This is the general information paragraph.</Text>
    </View>
  );
};

// Component for technology information paragraph
const TechnologyInfo = () => {
  return (
    <View>
      <Text>This is the technology information paragraph.</Text>
    </View>
  );
};

// Component for health information paragraph
const HealthInfo = () => {
  return (
    <View>
      <Text>This is the health information paragraph.</Text>
    </View>
  );
};

// Component for education information paragraph
const EducationInfo = () => {
  return (
    <View>
      <Text>This is the education information paragraph.</Text>
    </View>
  );
};

// Component for finance information paragraph
const FinanceInfo = () => {
  return (
    <View>
      <Text>This is the finance information paragraph.</Text>
    </View>
  );
};

// Component for sports information paragraph
const SportsInfo = () => {
  return (
    <View>
      <Text>This is the sports information paragraph.</Text>
    </View>
  );
};

// Component for food information paragraph
const FoodInfo = () => {
  return (
    <View>
      <Text>This is the food information paragraph.</Text>
    </View>
  );
};

// Component for travel information paragraph
const TravelInfo = () => {
  return (
    <View>
      <Text>This is the travel information paragraph.</Text>
    </View>
  );
};

// Component for fashion information paragraph
const FashionInfo = () => {
  return (
    <View>
      <Text>This is the fashion information paragraph.</Text>
    </View>
  );
};

// Component for music information paragraph
const MusicInfo = () => {
  return (
    <View>
      <Text>This is the music information paragraph.</Text>
    </View>
  );
};

export default function EducInfo({ route }) {
  const { text } = route.params;

  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const renderParagraph = () => {
    switch (text) {
      case 'General':
        return <GeneralInfo />;
      case 'Technology':
        return <TechnologyInfo />;
      case 'Health':
        return <HealthInfo />;
      case 'Education':
        return <EducationInfo />;
      case 'Finance':
        return <FinanceInfo />;
      case 'Sports':
        return <SportsInfo />;
      case 'Food':
        return <FoodInfo />;
      case 'Travel':
        return <TravelInfo />;
      case 'Fashion':
        return <FashionInfo />;
      case 'Music':
        return <MusicInfo />;
      default:
        return null;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity style={{marginBottom:10}} onPress={handleGoBack}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      {renderParagraph()}
    </View>
  );
}
