import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import auth from '@react-native-firebase/auth';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      const response = await auth().signInWithEmailAndPassword(email, password);
      console.log('User signed in!', response.user);
      // Navigate to the next screen or perform any other actions upon successful sign-in
    } catch (error) {
      console.error('Sign in failed', error.message);
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
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
};

export default SignInScreen;
