import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BlogItem = ({ id, title, image, author, name, datePosted, content, onPress }) => {
  const navigation = useNavigation();

  const words = content.split(' ');
  const shortenedContent = words.slice(0, 15).join(' ');

  return (
    <TouchableOpacity style={styles.blogItem} onPress={() => onPress(id)}>
      <Image source={image} style={styles.blogImage} />
      <View style={styles.blogContent}>
        <Text style={styles.blogTitle}>{title}</Text>
        <Text style={styles.blogMeta}>
          {author} • {datePosted}
        </Text>
        <Text style={styles.blogContentExcerpt}>{shortenedContent}...</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  blogItem: {
    padding: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
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
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  blogMeta: {
    color: '#888',
    marginBottom: 5,
  },
  blogContentExcerpt: {
    fontSize: 14,
    lineHeight: 20,
  },
});

export default BlogItem;
