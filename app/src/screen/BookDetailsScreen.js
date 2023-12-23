import React, { useState } from 'react';
import { View, Text } from 'react-native';
import ReviewForm from '../componets/ReviewForm';
import ReviewList from '../componets/ReviewList'

const BookDetailsScreen = ({ route }) => {
  const { book } = route.params;
  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = newReview => {
    // Add the new review to the existing reviews
    setReviews([...reviews, newReview]);
  };

  return (
    <View>
      <Text>{`Title: ${book.title}`}</Text>
      <Text>{`Category: ${book.category}`}</Text>
      <ReviewList reviews={reviews} />
      <ReviewForm onSubmit={handleReviewSubmit} />
    </View>
  );
};

export default BookDetailsScreen;
