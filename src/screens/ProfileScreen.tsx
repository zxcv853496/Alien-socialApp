import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Text, TextInput, Button, useTheme, Surface } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import VibeCard from '../components/VibeCard';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export default function ProfileScreen({ navigation }: Props) {
  const [name, setName] = useState('My Name'); // Mock state for preview
  const [igId, setIgId] = useState('');
  const [lineId, setLineId] = useState('');
  const theme = useTheme();

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>

        <Text variant="titleLarge" style={styles.headerTitle}>Edit Profile</Text>

        {/* Card Preview */}
        <View style={styles.previewContainer}>
          <Text variant="labelMedium" style={styles.previewLabel}>Preview</Text>
          <View style={styles.cardWrapper}>
            <VibeCard
              name={name || "You"}
              age={25}
              tags={["Editing...", "Taipei"]}
              verified={false}
              // Use a different placeholder or the user's actual image if available
              imageUrl="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop"
            />
          </View>
        </View>

        <Surface style={styles.formContainer} elevation={1}>
          <TextInput
            mode="outlined"
            label="Display Name"
            placeholder="What should we call you?"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />

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
            onPress={() => navigation.goBack()}
            style={styles.button}
            contentStyle={styles.buttonContent}
          >
            Save & Update Vibe
          </Button>
        </Surface>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  headerTitle: {
    textAlign: 'center',
    marginVertical: 20,
    fontWeight: 'bold',
  },
  previewContainer: {
    height: 400, // Fixed height for preview
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  previewLabel: {
    marginBottom: 8,
    textAlign: 'center',
    opacity: 0.6,
  },
  cardWrapper: {
    flex: 1,
  },
  formContainer: {
    padding: 20,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -20, // Overlap slightly if desired, or just sit below
    backgroundColor: '#fff', // Or theme surface
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
    borderRadius: 8,
  },
  buttonContent: {
    height: 50,
  },
});
