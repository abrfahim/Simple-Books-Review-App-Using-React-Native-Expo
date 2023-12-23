import React from 'react';
import { View, Text, Button } from 'react-native';

const CategoryList = ({ categories, onCategoryPress }) => {
  return (
    <View>
      <Text>Categories:</Text>
      {categories.map(category => (
        <Button
          key={category}
          title={category}
          onPress={() => onCategoryPress(category)}
        />
      ))}
    </View>
  );
};

export default CategoryList;
