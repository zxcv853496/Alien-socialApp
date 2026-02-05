import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Text, IconButton, useTheme } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import VibeCard from '../components/VibeCard';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }: Props) {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* Header (Custom) */}
      <View style={styles.header}>
        <Text variant="titleLarge" style={[styles.headerTitle, { color: theme.colors.primary }]}>VibeSocial</Text>
        <IconButton icon="tune-vertical-variant" size={24} onPress={() => { }} />
      </View>

      {/* Card Stack Area */}
      <View style={styles.cardArea}>
        <VibeCard
          name="Lin"
          age={31}
          tags={["INFP", "Taipei", "Accounting"]}
          verified={true}
          imageUrl="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=687&auto=format&fit=crop"
        />
      </View>

      {/* Action Buttons */}
      <View style={styles.actionContainer}>
        <IconButton
          icon="refresh"
          mode="contained"
          containerColor="#333"
          iconColor="#f1c40f"
          size={24}
          onPress={() => { }}
          style={styles.actionButtonSmall}
        />

        <IconButton
          icon="close"
          mode="contained"
          containerColor="#333"
          iconColor="#ff4757"
          size={32}
          onPress={() => { }}
          style={styles.actionButtonLarge}
        />

        <IconButton
          icon="star"
          mode="contained"
          containerColor="#333"
          iconColor="#2ed573" // Using green/blue for chat/super like in user image, stick to star for now or chat
          size={32}
          onPress={() => { }}
          style={styles.actionButtonLarge}
        />

        <IconButton
          icon="heart"
          mode="contained"
          containerColor="#333"
          iconColor="#2ed573"
          size={32}
          onPress={() => { }}
          style={styles.actionButtonLarge}
        />

        <IconButton
          icon="account"
          mode="contained"
          containerColor={theme.colors.primaryContainer}
          iconColor={theme.colors.primary}
          size={24}
          onPress={() => navigation.navigate('Profile')}
          style={styles.actionButtonSmall}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50, // Safe Area top mostly
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerTitle: {
    fontWeight: 'bold',
    paddingLeft: 8,
  },
  cardArea: {
    flex: 1,
    marginBottom: 20,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  actionButtonSmall: {
    width: 50,
    height: 50,
  },
  actionButtonLarge: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
});
