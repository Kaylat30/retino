import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const NotificationInfo = ({route}) => {
  const navigation = useNavigation();
  const { notification } = route.params;

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View> 
      <TouchableOpacity style={{ marginBottom: 10 }} onPress={handleGoBack}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <View style={{justifyContent: 'center', marginHorizontal:20 }}>
        <View style={{display:'flex', flexDirection:'row',alignItems:'center' ,marginBottom: 10 }}>
          <Image source={notification.image} style={{ width: 40, height: 40, borderRadius: 50, overflow: 'hidden', }} resizeMode="cover" />
          <Text style={{ fontSize: 18,marginLeft:10, fontWeight: 'bold', marginBottom: 5 }}>{notification.title}</Text>
        </View>
        
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
          <Text style={{ fontSize: 12, color: '#999' }}>{notification.timestamp}</Text>
        </View>
        <Text>{notification.message}</Text>
      </View>
    </View>
  );
};

export default NotificationInfo;
