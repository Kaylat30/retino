import React ,{ useEffect, useState } from 'react';
import { View, Text, StyleSheet,ScrollView, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { getBlogById } from '../api';

const BlogInfo = ({ route }) => {
  const { blogId } = route.params; 

  const navigation = useNavigation();


  const [blogDetails, setBlogDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleGoBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    
    const fetchBlogDetails = async () => {
      try {
        
        setLoading(true);
        //await new Promise(resolve => setTimeout(resolve, 1000));
        
        const data  = await getBlogById(blogId)
        setBlogDetails(data);
      } catch (error) {
        console.error('Error fetching blog details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetails();
  }, [blogId]);

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  if (!blogDetails) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Error fetching blog details</Text>
      </View>
    );
  }

return (
  <ScrollView style={styles.container}>
    <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
      <Ionicons name="arrow-back" size={24} color="black" />
    </TouchableOpacity>
    <Image source={{uri:blogDetails.image}} style={styles.blogImage} />
    <View style={styles.blogContent}>
      <Text style={styles.blogTitle}>{blogDetails.title}</Text>
      <Text style={styles.blogMeta}>
        {blogDetails.author} • {blogDetails.date}
      </Text>
      <Text style={styles.blogContentExcerpt}>{blogDetails.content}</Text>
    </View>
  </ScrollView>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  padding: 20,
  marginBottom:60
},
goBackButton: {
  marginBottom:10
},
blogImage: {
  width: '100%',
  height: 200,
  borderRadius: 10,
  marginBottom: 10,
},
blogContent: {
  flex: 1,
},
blogTitle: {
  fontSize: 22,
  fontWeight: 'bold',
  marginBottom: 10,
},
blogMeta: {
  fontSize: 14,
  color: '#888',
  marginBottom: 10,
},
blogContentExcerpt: {
  fontSize: 16,
  lineHeight: 24,
},
});

export default BlogInfo;
