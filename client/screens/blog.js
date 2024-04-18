// import React, { useState } from 'react';
// import { View, Text, ScrollView, FlatList ,TouchableOpacity} from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import BlogCat from './blogCat';
// import BlogItem from './blogItem'; 

// export default function Blog() {
//   const navigation = useNavigation();
//   const [selectedTag, setSelectedTag] = useState(null);

//   const blogs = [
//     {
//       id: 1,
//       title: 'Blog 1',
//       image: require('../assets/splash.png'),
//       author: 'John Doe',
//       tag:'health',
//       name: 'John',
//       datePosted: 'March 21, 2024',
//       content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
//     },
//     {
//       id: 2,
//       title: 'Blog 2',
//       image: require('../assets/splash.png'),
//       author: 'Jane Doe',
//       tag:'eye',
//       name: 'Jane',
//       datePosted: 'March 22, 2024',
//       content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
//     },
//     {
//       id: 3,
//       title: 'Blog 3',
//       image: require('../assets/splash.png'),
//       author: 'Alex Smith',
//       tag:'covid',
//       name: 'Alex',
//       datePosted: 'March 23, 2024',
//       content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
//     },
//     {
//       id: 4,
//       title: 'Blog 4',
//       image: require('../assets/splash.png'),
//       author: 'Alex Smith',
//       tag:'nose',
//       name: 'Alex',
//       datePosted: 'March 23, 2024',
//       content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
//     }
//   ];

//   const handleBlogPress = (blogId) => {
//     navigation.navigate('BlogInfo', { blogId });
//   };

//   const renderBlogItem = ({ item }) => (
//     <BlogItem
//       key={item.id}
//       id={item.id}
//       title={item.title}
//       image={item.image}
//       author={item.author}
//       name={item.name}
//       datePosted={item.datePosted}
//       content={item.content}
//       onPress={() => handleBlogPress(item.id)}
//     />
//   );

//   // Function to filter blogs based on the selected tag
//   const filteredBlogs = selectedTag ? blogs.filter(blog => blog.tag === selectedTag) : blogs;

//   // Function to reset category filter
//   const resetTagFilter = () => {
//     setSelectedTag(null);
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <ScrollView scrollEventThrottle={16}>
//         <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
//           <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
//             Topics For You
//           </Text>          
//           <View style={{ height: 130, marginTop: 20 }}>
//             <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
//               <BlogCat ImageUri={require("../assets/splash.png")} name="Eyes" onPress={() => setSelectedTag('eye')} />
//               <BlogCat ImageUri={require("../assets/splash.png")} name="Nose" onPress={() => setSelectedTag('nose')} />
//               <BlogCat ImageUri={require("../assets/splash.png")} name="Health" onPress={() => setSelectedTag('health')} />
//               <BlogCat ImageUri={require("../assets/splash.png")} name="Covid" onPress={() => setSelectedTag('covid')} />
//             </ScrollView>
//           </View>
//         </View>
//         <TouchableOpacity onPress={() => resetTagFilter()}>
//             <Text style={{ fontSize: 16, marginRight: 20, color: selectedTag === null ? 'blue' : 'black' }}>All</Text>
//           </TouchableOpacity>
//         <FlatList
//           data={filteredBlogs}
//           renderItem={renderBlogItem}
//           keyExtractor={(item) => item.id.toString()}
//         />
//       </ScrollView>
//     </View>
//   );
// }



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
              <BlogCat ImageUri={require("../assets/splash.png")} name="Eyes" onPress={() => setSelectedTag('eye')} />
              <BlogCat ImageUri={require("../assets/splash.png")} name="Nose" onPress={() => setSelectedTag('nose')} />
              <BlogCat ImageUri={require("../assets/splash.png")} name="Health" onPress={() => setSelectedTag('health')} />
              <BlogCat ImageUri={require("../assets/splash.png")} name="Covid" onPress={() => setSelectedTag('covid')} />
            </ScrollView>
          </View>
        </View>
        <TouchableOpacity onPress={() => resetTagFilter()}>
          <Text style={{ fontSize: 16, marginRight: 20, color: selectedTag === null ? 'blue' : 'black' }}>All</Text>
        </TouchableOpacity>
        <FlatList
          data={filteredBlogs}
          renderItem={renderBlogItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </ScrollView>
    </View>
  );
}


