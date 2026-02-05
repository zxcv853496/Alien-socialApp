import React, { useState } from 'react';
import { View, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { Text, TextInput, Button, Avatar, useTheme } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export default function ProfileScreen({ navigation }: Props) {
  const [igId, setIgId] = useState('');
  const [lineId, setLineId] = useState('');
  const theme = useTheme();

  const handleSave = () => {
    console.log('Saved Profile:', { igId, lineId });
    Alert.alert('Saved', 'Your vibe profile has been updated!');
  };

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.content}>
        <View style={styles.avatarContainer}>
          <Avatar.Text size={100} label="ME" style={{ backgroundColor: theme.colors.tertiary }} />
        </View>

        <Text variant="headlineSmall" style={styles.title}>Edit Your Vibe</Text>

        <TextInput
          mode="outlined"
          label="Instagram ID"
          placeholder="e.g. your_vibe"
          value={igId}
          onChangeText={setIgId}
          left={<TextInput.Icon icon="instagram" />}
          style={styles.input}
        />

        <TextInput
          mode="outlined"
          label="Line ID"
          placeholder="e.g. line_id"
          value={lineId}
          onChangeText={setLineId}
          left={<TextInput.Icon icon="chat-processing" />}
          style={styles.input}
        />

        <Button
          mode="contained"
          onPress={handleSave}
          style={styles.button}
          contentStyle={styles.buttonContent}
        >
          Save Profile
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: 'bold',
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 20,
    borderRadius: 8,
  },
  buttonContent: {
    height: 50,
  },
});
