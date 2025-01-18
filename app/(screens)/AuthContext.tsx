import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: UserType | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

interface UserType {
  email: string;
  name?: string; // Optional: Add other user properties like name, role, etc.
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<UserType | null>(null);

  // Check for existing session on app load
  useEffect(() => {
    const initializeAuthState = async () => {
      await checkAuthState();
    };
    initializeAuthState();
  }, []);

  const checkAuthState = async () => {
    try {
      setIsLoading(true);
      const token = await AsyncStorage.getItem("userToken");
      const userData = await AsyncStorage.getItem("userData");

      if (token && userData) {
        setUser(JSON.parse(userData));
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error("Error checking auth state:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      setIsLoading(true);

      // Mock API call (replace this with an actual API integration)
      const response = await mockApiSignIn(email, password);

      // Mock user data - replace with actual API response
      const userData: UserType = {
        email: email,
        name: response.name, // Use name from the response, if available
      };

      // Store auth data in AsyncStorage
      await AsyncStorage.setItem("userToken", response.token);
      await AsyncStorage.setItem("userData", JSON.stringify(userData));

      setUser(userData);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Sign in error:", error);
      throw error; // Rethrow to handle it in the UI
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setIsLoading(true);

      // Clear stored auth data
      await AsyncStorage.removeItem("userToken");
      await AsyncStorage.removeItem("userData");

      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Sign out error:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

// Mock API function to simulate sign-in
async function mockApiSignIn(email: string, password: string): Promise<{ token: string; name: string }> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "test@example.com" && password === "password") {
        resolve({
          token: "mock-token",
          name: "John Doe",
        });
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 1000);
  });
}