import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BlogCat from './blogCat';
import BlogItem from './blogItem';
import { getAllBlogs } from '../api';

export default function Blog() {
  const navigation = useNavigation();
  const [selectedTag, setSelectedTag] = useState(null);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const fetchedBlogs = await getAllBlogs();
      setBlogs(fetchedBlogs);
    } catch (error) {
      console.error('Error fetching blogs:', error.message);
    }
  };

  const handleBlogPress = (blogId) => {
    navigation.navigate('BlogInfo', { blogId });
  };

  const renderBlogItem = ({ item }) => (
    <BlogItem
      key={item._id}
      id={item._id}
      title={item.title}
      image={item.image}
      author={item.author}
      name={item.name}
      datePosted={item.date}
      content={item.content}
      onPress={() => handleBlogPress(item._id)}
    />
  );

  // Function to filter blogs based on the selected tag
  const filteredBlogs = selectedTag ? blogs.filter(blog => blog.tag === selectedTag) : blogs;

  // Function to reset category filter
  const resetTagFilter = () => {
    setSelectedTag(null);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView scrollEventThrottle={16}>
        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
            Topics For You
          </Text>
          <View style={{ height: 130, marginTop: 20 }}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <BlogCat ImageUri={require("../assets/eye_health.jpg")} name="Eye Health" onPress={() => setSelectedTag('eye_health')} />
              <BlogCat ImageUri={require("../assets/diabetes_care.jpg")} name="Diabtes Care" onPress={() => setSelectedTag('diabetes_care')} />
              <BlogCat ImageUri={require("../assets/tech_and_research.jpg")} name="Tech and Research" onPress={() => setSelectedTag('tech_and_research')} />
              <BlogCat ImageUri={require("../assets/nutrition.jpg")} name="Nutrition and Exercise" onPress={() => setSelectedTag('nutrition_and_exercise')} />
              <BlogCat ImageUri={require("../assets/covid.jpg")} name="Covid 19" onPress={() => setSelectedTag('covid_19')} />
            </ScrollView>
          </View>
        </View>
        <TouchableOpacity onPress={() => resetTagFilter()}>
          <Text style={{ fontSize: 16, marginRight: 20, color: selectedTag === null ? 'blue' : 'black' }}>All</Text>
        </TouchableOpacity>
        <FlatList
          data={filteredBlogs}
          renderItem={renderBlogItem}
          keyExtractor={(item) => item._id}
        />
      </ScrollView>
    </View>
  );
}


