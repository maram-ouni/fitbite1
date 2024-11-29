import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Button from '../../components/Button2';

const VerifyScreen = ({ navigation }) => {
  const [code, setCode] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(180); // Timer starts at 3 minutes (180 seconds)
  const [isVerified, setIsVerified] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(null); // Track focused input

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

  const handleVerify = () => {
    // Verify code logic here
    const verificationCode = code.join('');
    if (verificationCode === '8876') { // Example verification code
      setIsVerified(true);
    } else {
      alert('Invalid code');
    }
  };

  const handleResendCode = () => {
    setTimer(180); // Reset the timer
    setCode(['', '', '', '']); // Clear the input fields
    setIsVerified(false);

    // Focus the first input field after resend
    inputs.current[0].focus();
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
        title="Confirm" 
        onPress={() => navigation.navigate('SignupForm')} 
        style={styles.button} 
      />

      {!isVerified && (
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
  verifyButton: {
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
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
