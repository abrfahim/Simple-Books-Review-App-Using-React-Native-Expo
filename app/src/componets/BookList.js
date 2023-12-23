import React from 'react';
import { View, Text, Button } from 'react-native';

const BookList = ({ books, navigation }) => {
  return (
    <View>
      <Text>Books:</Text>
      {books.map(book => (
        <View key={book.id}>
          <Text>{book.title}</Text>
          <Button
            title="View Details"
            onPress={() => navigation.navigate('BookDetails', { book })}
          />
        </View>
      ))}
    </View>
  );
};

export default BookList;
