import React, { useEffect, useState } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CustomSplashScreen = ({ duration }) => {
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, duration * 1000);

    return () => clearTimeout(timer);
  }, [duration]);

  useEffect(() => {
    if (!loading) {
      navigation.navigate('Login'); 
    }
  }, [loading, navigation]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/splash.png')}
          style={styles.image}
        />
        <Text style={styles.text}>Retino</Text> 
      </View>
    );
  }

  return null; 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  image: {
    width: '70%', // Adjust the width of the image as needed
    resizeMode: 'contain',
  },
  text: {
    marginTop: 20, 
    fontSize: 20, 
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
});

export default CustomSplashScreen;
