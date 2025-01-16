// app/(screens)/LoginScreen.tsx
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Platform,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useAuth } from '../(screens)/AuthContext';

interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginScreen() {
  const { signIn, isLoading } = useAuth();
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });
  const [validationErrors, setValidationErrors] = useState<Partial<LoginFormData>>({});

  const validateForm = (): boolean => {
    const errors: Partial<LoginFormData> = {};
    
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleLogin = async () => {
    try {
      if (!validateForm()) {
        return;
      }

      await signIn(formData.email, formData.password);
    } catch (error) {
      Alert.alert(
        'Login Failed',
        'Please check your credentials and try again.',
        [{ text: 'OK' }]
      );
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.logo}
        />
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={[styles.input, validationErrors.email && styles.inputError]}
          placeholder="Email"
          placeholderTextColor="#666"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={formData.email}
          onChangeText={(text) => {
            setFormData({ ...formData, email: text });
            setValidationErrors({ ...validationErrors, email: undefined });
          }}
        />
        {validationErrors.email && (
          <Text style={styles.errorText}>{validationErrors.email}</Text>
        )}

        <TextInput
          style={[styles.input, validationErrors.password && styles.inputError]}
          placeholder="Password"
          placeholderTextColor="#666"
          secureTextEntry
          value={formData.password}
          onChangeText={(text) => {
            setFormData({ ...formData, password: text });
            setValidationErrors({ ...validationErrors, password: undefined });
          }}
        />
        {validationErrors.password && (
          <Text style={styles.errorText}>{validationErrors.password}</Text>
        )}

        <TouchableOpacity
          style={[styles.button, isLoading && styles.buttonDisabled]}
          onPress={handleLogin}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Login</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.forgotPassword}
          onPress={() => {
            // Handle forgot password
            Alert.alert('Coming Soon', 'Password reset functionality will be available soon.');
          }}
        >
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717', // Updated to match dark theme
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 50,
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  formContainer: {
    paddingHorizontal: 20,
  },
  input: {
    height: 50,
    backgroundColor: '#2D2D2D', // Darker input background
    marginBottom: 8, // Reduced to accommodate error text
    paddingHorizontal: 15,
    borderRadius: 10,
    fontSize: 16,
    color: '#FFFFFF', // White text
  },
  inputError: {
    borderWidth: 1,
    borderColor: '#FF4444',
  },
  errorText: {
    color: '#FF4444',
    fontSize: 12,
    marginBottom: 10,
    marginLeft: 5,
  },
  button: {
    backgroundColor: '#007AFF',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  buttonDisabled: {
    backgroundColor: '#404040',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    alignItems: 'center',
    marginTop: 20,
  },
  forgotPasswordText: {
    color: '#007AFF',
    fontSize: 14,
  },
});