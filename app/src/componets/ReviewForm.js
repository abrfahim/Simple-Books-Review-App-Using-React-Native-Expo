import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const ReviewForm = ({ onSubmit }) => {
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    // Validate input
    if (!rating || rating < 1 || rating > 5 || !comment) {
      alert('Invalid input. Please provide a valid rating (1-5) and comment.');
      return;
    }

    // Submit review
    onSubmit({ rating, comment });

    // Clear form
    setRating('');
    setComment('');
  };

  return (
    <View>
      <Text>Leave a Review:</Text>
      <TextInput
        placeholder="Rating (1-5)"
        keyboardType="numeric"
        value={rating}
        onChangeText={text => setRating(text)}
      />
      <TextInput
        placeholder="Comment"
        multiline
        value={comment}
        onChangeText={text => setComment(text)}
      />
      <Button title="Submit Review" onPress={handleSubmit} />
    </View>
  );
};

export default ReviewForm;
