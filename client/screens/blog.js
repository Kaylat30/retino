import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView,FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BlogInfo from './blogInfo';
import BlogCat from './blogCat';
import BlogItem from './blogItem'; 

export default function Blog() {
  const navigation = useNavigation();
  
  const blogs = [
    {
      id: 1,
      title: 'Blog 1',
      image: require('../assets/splash.png'),
      author: 'John Doe',
      name: 'John',
      datePosted: 'March 21, 2024',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
    },
    {
      id: 2,
      title: 'Blog 2',
      image: require('../assets/splash.png'),
      author: 'Jane Doe',
      name: 'Jane',
      datePosted: 'March 22, 2024',
      content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      id: 3,
      title: 'Blog 3',
      image: require('../assets/splash.png'),
      author: 'Alex Smith',
      name: 'Alex',
      datePosted: 'March 23, 2024',
      content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];
  

  const handleBlogPress = (blogId) => {
    navigation.navigate('BlogInfo', { blogId });
  };

  const renderBlogItem = ({ item }) => (
    <BlogItem
      key={item.id}
      id={item.id}
      title={item.title}
      image={item.image}
      author={item.author}
      name={item.name}
      datePosted={item.datePosted}
      content={item.content}
      onPress={() => handleBlogPress(item.id)}
    />

  );

  return (
    <View style={{ flex: 1 }}>
      <ScrollView scrollEventThrottle={16}>
        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
            Topics For You
          </Text>
          <View style={{ height: 130, marginTop: 20 }}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <BlogCat ImageUri={require("../assets/splash.png")} name="Eyes" />
              <BlogCat ImageUri={require("../assets/splash.png")} name="Nose" />
              <BlogCat ImageUri={require("../assets/splash.png")} name="Eyes" />
              <BlogCat ImageUri={require("../assets/splash.png")} name="Eyes" />
            </ScrollView>
          </View>
        </View>
        <FlatList
        data={blogs}
        renderItem={renderBlogItem}
        keyExtractor={(item) => item.id.toString()}
      />
      </ScrollView>
      
      
    </View>
  );
}
