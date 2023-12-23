import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import auth from '@react-native-firebase/auth';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await auth().createUserWithEmailAndPassword(email, password);
      console.log('User account created!', response.user);
      // Navigate to the next screen or perform any other actions upon successful sign-up
    } catch (error) {
      console.error('Sign up failed', error.message);
    }
  };

  return (
    <View>
      <Text>Email:</Text>
      <TextInput
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="Enter your email"
        keyboardType="email-address"
      />
      <Text>Password:</Text>
      <TextInput
        value={password}
        onChangeText={text => setPassword(text)}
        placeholder="Enter your password"
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

export default SignUpScreen;
