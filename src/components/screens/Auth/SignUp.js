import React, {useState} from 'react';
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native';
import {COLORS} from '../../constants/Constants';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSignIn = () => {
    // Validate input fields and show error messages if necessary
    if (username === '') {
      setUsernameError('Username is required');
    } else {
      setUsernameError('');
    }

    if (password === '') {
      setPasswordError('Password is required');
    } else {
      setPasswordError('');
    }

    // Perform sign-in logic
    // ...
  };

  return (
    <>
      <StatusBar
        backgroundColor={COLORS.DEFAULT_WHITE}
        barStyle="dark-content"
      />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.innerContainer}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/7541/7541900.png',
            }}
            style={styles.image}
          />

          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="black"
            value={username}
            onChangeText={text => {
              setUsername(text), setUsernameError('');
            }}
          />
          {usernameError !== '' && (
            <Text style={styles.errorText}>{usernameError}</Text>
          )}

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="black"
            secureTextEntry
            value={password}
            onChangeText={text => {
              setPassword(text), setPasswordError('');
            }}
          />
          {passwordError !== '' && (
            <Text style={styles.errorText}>{passwordError}</Text>
          )}

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="black"
            secureTextEntry
            value={password}
            onChangeText={text => {
              setPassword(text), setPasswordError('');
            }}
          />
          {passwordError !== '' && (
            <Text style={styles.errorText}>{passwordError}</Text>
          )}

          <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
            <Text style={styles.signInButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.DEFAULT_WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  input: {
    width: 300,
    height: 50,
    backgroundColor: COLORS.DARK_FIVE,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    color: COLORS.DEFAULT_BLACK,
  },
  signInButton: {
    width: 300,
    height: 50,
    backgroundColor: COLORS.DEFAULT_GREEN,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  signInButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default SignUp;
