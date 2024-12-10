import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Button from '../../components/Button2';

const VerifyScreen = ({ navigation }) => {
  const [code, setCode] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(180); // Timer starts at 3 minutes (180 seconds)
  const [isVerified, setIsVerified] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(null); // Track focused input
  const [isLoading, setIsLoading] = useState(false); // Track loading state

  // Create refs for each input field
  const inputs = useRef([]);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (timer > 0) {
        setTimer(prevTimer => prevTimer - 1);
      } else {
        clearInterval(countdown);
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [timer]);

  const handleCodeChange = (value, index) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Move focus to the next input field if the user enters a value
    if (value && index < code.length - 1) {
      inputs.current[index + 1].focus(); // Focus the next input
    } else if (!value && index > 0) {
      inputs.current[index - 1].focus(); // Focus the previous input if current input is cleared
    }
  };

  const handleVerify = async () => {
    const verificationCode = code.join('');
    
    // Check if the code is complete
    if (verificationCode.length < 4) {
      Alert.alert('Error', 'Please enter the full verification code');
      return;
    }

    setIsLoading(true); // Start loading

    try {
      // Call your backend API to verify the code
      const response = await fetch('https://your-backend-url.com/verify-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: verificationCode }),
      });

      const data = await response.json();

      if (data.success) {
        setIsVerified(true); // Update the state if the code is correct
        Alert.alert('Success', 'Verification successful!');
        navigation.navigate('SignupForm');
      } else {
        Alert.alert('Invalid code', 'The verification code you entered is incorrect.');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again later.');
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  const handleResendCode = async () => {
    setTimer(180); // Reset the timer
    setCode(['', '', '', '']); // Clear the input fields
    setIsVerified(false);

    // Focus the first input field after resend
    inputs.current[0].focus();

    setIsLoading(true); // Start loading while resending code

    try {
      // Call your backend API to resend the verification code
      const response = await fetch('https://your-backend-url.com/resend-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ /* Pass necessary parameters like email */ }),
      });

      const data = await response.json();

      if (data.success) {
        Alert.alert('Success', 'Verification code has been sent to your email!');
      } else {
        Alert.alert('Error', 'Failed to resend verification code.');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again later.');
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  const handleFocus = (index) => {
    setFocusedIndex(index); // Set the focused input field index
  };

  const handleBlur = () => {
    setFocusedIndex(null); // Reset the focused index when the input is blurred
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Check your email</Text>
      <Text style={styles.subHeader}>We’ve sent the code to your email</Text>

      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            style={[styles.codeInput, focusedIndex === index && styles.focusedInput]} // Apply styles when focused
            value={digit}
            onChangeText={(value) => handleCodeChange(value, index)}
            keyboardType="number-pad"
            maxLength={1}
            autoFocus={index === 0}
            onFocus={() => handleFocus(index)} // Trigger onFocus event
            onBlur={handleBlur} // Trigger onBlur event
            ref={(ref) => (inputs.current[index] = ref)} // Assign the ref to each input
          />
        ))}
      </View>

      <Text style={styles.timer}>Code expires in: {Math.floor(timer / 60)}:{timer % 60}</Text>

      <Button 
        title={isLoading ? 'Verifying...' : 'Confirm'} 
        onPress={handleVerify} 
        style={styles.button} 
        disabled={isLoading} // Disable the button while loading
      />

      {!isVerified && !isLoading && (
        <TouchableOpacity style={styles.resendButton} onPress={handleResendCode}>
          <Text style={styles.buttonText}>Send again</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#008080',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  codeInput: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#f9f9f9',
  },
  focusedInput: {
    borderColor: '#E29578', // Pink color when focused
  },
  timer: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  resendButton: {
    marginTop: 15,
    width: '100%',
    height: 50,
    borderColor: '#b8b4b4',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  buttonText: {
    color: '#878686',
    fontSize: 18,
  },
});

export default VerifyScreen;
