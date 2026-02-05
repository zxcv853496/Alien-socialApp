import React from 'react';
import { View, StyleSheet, ImageBackground, Dimensions, Platform } from 'react-native';
import { Text, Chip, Surface, useTheme } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

interface VibeCardProps {
  name: string;
  age: number;
  tags: string[]; // e.g., ["INFP", "Hiking", "Taipei"]
  imageUrl?: string; // Optional, using placeholder if not provided
  distance?: string;
  bio?: string;
  verified?: boolean;
}

export default function VibeCard({
  name,
  age,
  tags,
  imageUrl = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop', // High quality portrait placeholder
  distance = '500m',
  bio = 'Hi 👋',
  verified = false
}: VibeCardProps) {
  const theme = useTheme();

  return (
    <Surface style={styles.cardContainer} elevation={4}>
      <ImageBackground
        source={{ uri: imageUrl }}
        style={styles.imageBackground}
        imageStyle={styles.imageStyle}
      >
        {/* Top Gradient for status bar visibility if needed, or top chips */}
        <LinearGradient
          colors={['rgba(0,0,0,0.4)', 'transparent']}
          style={styles.topGradient}
        >
          <View style={styles.topBar}>
            {verified && (
              <Chip icon="check-decagram" style={styles.verifiedChip} textStyle={styles.verifiedText}>
                Verified
              </Chip>
            )}

            <View style={styles.photoCountContainer}>
              <Chip icon="camera" style={styles.photoCountChip} textStyle={styles.photoCountText}>4</Chip>
            </View>
          </View>
        </LinearGradient>

        {/* Bottom Gradient for Text Overlay */}
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.6)', 'rgba(0,0,0,0.95)']}
          style={styles.bottomGradient}
        >
          <View style={styles.contentContainer}>
            {/* Personality Tag (Special Highlight) */}
            {tags.length > 0 && (
              <Chip style={styles.primaryTag} textStyle={styles.primaryTagText}>
                {tags[0]}
              </Chip>
            )}

            <View style={styles.nameRow}>
              <Text variant="displaySmall" style={styles.nameText}>{name}</Text>
              <Text variant="headlineMedium" style={styles.ageText}>{age}</Text>
            </View>

            {/* Interest Tags Row */}
            <View style={styles.tagRow}>
              {/* Distance Tag */}
              <Chip icon="map-marker" style={styles.secondaryTag} textStyle={styles.secondaryTagText}>
                {distance}
              </Chip>

              {tags.slice(1).map((tag, index) => (
                <Chip key={index} style={styles.secondaryTag} textStyle={styles.secondaryTagText}>
                  {tag}
                </Chip>
              ))}
            </View>

            <Text variant="bodyLarge" style={styles.bioText} numberOfLines={2}>
              {bio}
            </Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </Surface>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: '#000',
    margin: 4, // Tiny margin to show shadows better
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'space-between',
  },
  imageStyle: {
    borderRadius: 24,
  },
  topGradient: {
    height: 100,
    padding: 20,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Platform.OS === 'ios' ? 0 : 10,
  },
  verifiedChip: {
    backgroundColor: '#6750A4', // Primary Vibe color
    height: 32,
  },
  verifiedText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  photoCountContainer: {
    // aligning right
  },
  photoCountChip: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: 32,
  },
  photoCountText: {
    color: '#fff',
    fontSize: 12,
  },
  bottomGradient: {
    padding: 24,
    paddingBottom: 40,
  },
  contentContainer: {
    gap: 8,
  },
  primaryTag: {
    backgroundColor: 'rgba(234, 221, 255, 0.9)', // Light purple
    alignSelf: 'flex-start',
    borderRadius: 16,
    marginBottom: 4,
  },
  primaryTagText: {
    color: '#21005D', // Dark Purple
    fontWeight: 'bold',
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 12,
  },
  nameText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  ageText: {
    color: '#fff',
    fontWeight: '300',
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 4,
  },
  secondaryTag: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderWidth: 0,
  },
  secondaryTagText: {
    color: '#fff',
  },
  bioText: {
    color: 'rgba(255,255,255,0.9)',
    marginTop: 8,
  }
});
