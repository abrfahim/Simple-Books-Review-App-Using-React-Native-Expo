import React from 'react';
import { View, Text } from 'react-native';

const ReviewList = ({ reviews }) => {
  return (
    <View>
      <Text>Reviews:</Text>
      {reviews.map((review, index) => (
        <View key={index}>
          <Text>{`Rating: ${review.rating}`}</Text>
          <Text>{`Comment: ${review.comment}`}</Text>
        </View>
      ))}
    </View>
  );
};

export default ReviewList;
