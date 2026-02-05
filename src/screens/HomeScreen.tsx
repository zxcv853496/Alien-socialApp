import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Card, Avatar, useTheme } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Card style={styles.radarCard}>
        <Card.Content style={styles.radarContent}>
          <Text variant="headlineMedium" style={styles.radarTitle}>Scanning Area...</Text>
          <Text variant="bodyMedium" style={styles.radarSubtitle}>Looking for vibes within 500m</Text>

          <View style={[styles.radarCircle, { borderColor: theme.colors.primary }]}>
            <Avatar.Icon size={48} icon="radar" style={{ backgroundColor: theme.colors.primaryContainer }} />
          </View>
        </Card.Content>
      </Card>

      <View style={styles.actionContainer}>
        <Button
          mode="contained-tonal"
          icon="account"
          onPress={() => navigation.navigate('Profile')}
          contentStyle={styles.buttonContent}
        >
          My Profile
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  radarCard: {
    marginTop: 40,
    height: 300,
    justifyContent: 'center',
  },
  radarContent: {
    alignItems: 'center',
  },
  radarTitle: {
    marginBottom: 5,
    fontWeight: 'bold',
  },
  radarSubtitle: {
    marginBottom: 30,
    opacity: 0.7,
  },
  radarCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed',
  },
  actionContainer: {
    marginBottom: 20,
  },
  buttonContent: {
    height: 50,
  },
});
