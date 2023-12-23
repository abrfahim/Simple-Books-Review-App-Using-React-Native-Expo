import React, { useState } from 'react';
import { View } from 'react-native';
import BookList from '../componets/BookList'
import CategoryList from '../componets/CategoryList';

const HomeScreen = ({ navigation }) => {
  const [categories] = useState(['Fiction', 'Non-fiction']);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [books, setBooks] = useState([
    { id: 1, title: 'Book 1', category: 'Fiction' },
    { id: 2, title: 'Book 2', category: 'Non-fiction' },
  ]);

  const handleCategoryPress = category => {
    setSelectedCategory(category);
    // Filter books based on selected category
    const filteredBooks = books.filter(book => book.category === category);
    setBooks(filteredBooks);
  };

  return (
    <View>
      <CategoryList categories={categories} onCategoryPress={handleCategoryPress} />
      <BookList books={books} navigation={navigation} />
    </View>
  );
};

export default HomeScreen;
