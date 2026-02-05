import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, Surface } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Auth'>;

export default function AuthScreen({ navigation }: Props) {
  const handleLogin = () => {
    navigation.replace('Home');
  };

  return (
    <View style={styles.container}>
      <Surface style={styles.card} elevation={4}>
        <Text variant="displaySmall" style={styles.title}>VibeSocial</Text>
        <Text variant="bodyLarge" style={styles.subtitle}>Connect with vibes around you.</Text>

        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            onPress={handleLogin}
            contentStyle={styles.buttonContent}
            style={styles.button}
          >
            Login
          </Button>

          <Button
            mode="text"
            onPress={() => { }}
            style={styles.secondaryButton}
          >
            Create Account
          </Button>
        </View>
      </Surface>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0', // Fallback if theme background fails
  },
  card: {
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: 'bold',
    color: '#6750A4',
    marginBottom: 8,
  },
  subtitle: {
    color: '#666',
    marginBottom: 40,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    gap: 10,
  },
  button: {
    borderRadius: 25,
  },
  buttonContent: {
    height: 50,
  },
  secondaryButton: {
    marginTop: 5,
  },
});
