import React ,{ useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity ,Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BlogInfo = ({ route }) => {
  const { blogId } = route.params; 

  const navigation = useNavigation();

  //const [blogDetails, setBlogDetails] = useState(null);
  //const [loading, setLoading] = useState(true);


  const blogDetails = {
      id: blogId,
      title: `Blog ${blogId}`,
      image: require('../assets/splash.png'),
      author: `John Doe ${blogId}`,
      name: 'John',
      datePosted: 'March 21, 2024',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

//   useEffect(() => {
    
//     const fetchBlogDetails = async () => {
//       try {
        
//         setLoading(true);
//         await new Promise(resolve => setTimeout(resolve, 1000));
        
//         const response = await fetch(`https://yourapi.com/blogs/${blogId}`);
//         const data = await response.json();
//         setBlogDetails(data);
//       } catch (error) {
//         console.error('Error fetching blog details:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogDetails();
//   }, [blogId]);

//   if (loading) {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <ActivityIndicator size="large" color="blue" />
//       </View>
//     );
//   }

//   if (!blogDetails) {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Error fetching blog details</Text>
//       </View>
//     );
//   }

return (
  <View style={styles.container}>
    <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
      <Ionicons name="arrow-back" size={24} color="black" />
    </TouchableOpacity>
    <Image source={blogDetails.image} style={styles.blogImage} />
    <View style={styles.blogContent}>
      <Text style={styles.blogTitle}>{blogDetails.title}</Text>
      <Text style={styles.blogMeta}>
        {blogDetails.author} • {blogDetails.datePosted}
      </Text>
      <Text style={styles.blogContentExcerpt}>{blogDetails.content}</Text>
    </View>
  </View>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  padding: 20,
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
