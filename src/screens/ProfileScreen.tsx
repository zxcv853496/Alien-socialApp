import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export default function ProfileScreen({ navigation }: Props) {
  const [igId, setIgId] = useState('');
  const [lineId, setLineId] = useState('');

  const handleSave = () => {
    console.log('Saved Profile:', { igId, lineId });
    Alert.alert('Success', 'Profile saved successfully!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Profile</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Instagram ID</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your IG ID"
          value={igId}
          onChangeText={setIgId}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Line ID</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Line ID"
          value={lineId}
          onChangeText={setLineId}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={handleSave} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 20,
  },
});
