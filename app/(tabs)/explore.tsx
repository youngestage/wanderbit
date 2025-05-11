import { BlurView } from 'expo-blur';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, useColorScheme } from 'react-native';
import { borderRadius, darkTheme, lightTheme, spacing, typography } from '../../constants/theme';

const categories = [
  { id: '1', name: 'Cafes', icon: '☕️' },
  { id: '2', name: 'Restaurants', icon: '🍽️' },
  { id: '3', name: 'Bars', icon: '🍸' },
  { id: '4', name: 'Parks', icon: '🌳' },
  { id: '5', name: 'Museums', icon: '🏛️' },
  { id: '6', name: 'Shopping', icon: '🛍️' },
];

const trendingPlaces = [
  {
    id: '1',
    name: 'The Hidden Cafe',
    category: 'Cafe',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500',
    reward: 'Earn 5% back',
    distance: '0.5 km',
    reviews: 128,
  },
  {
    id: '2',
    name: 'Mountain View Restaurant',
    category: 'Restaurant',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500',
    reward: 'Earn 4% back',
    distance: '1.2 km',
    reviews: 256,
  },
  {
    id: '3',
    name: 'Sunset Beach Bar',
    category: 'Bar',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1572116469696-31de9f17c34c?w=500',
    reward: 'Earn 6% back',
    distance: '2.0 km',
    reviews: 512,
  },
];

export default function ExploreScreen() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;
  const [selectedCategory, setSelectedCategory] = useState('1');
  const [search, setSearch] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor: theme.background }}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: spacing.xxl }}>
        {/* Hero Card with Search */}
        <BlurView intensity={40} tint={colorScheme === 'dark' ? 'dark' : 'light'} style={styles.heroCard}>
          <Text style={[styles.heroTitle, { color: theme.text }]}>Explore</Text>
          <Text style={[styles.heroSubtitle, { color: theme.secondary }]}>Find new places, earn rewards, and connect with the community.</Text>
          <View style={styles.searchBar}>
            <TextInput
              style={[styles.searchInput, { color: theme.text }]}
              placeholder="Search for places, categories..."
              placeholderTextColor={theme.secondary}
              value={search}
              onChangeText={setSearch}
            />
          </View>
        </BlurView>

        {/* Category Chips */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesRow}>
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat.id}
              style={[styles.categoryChip, selectedCategory === cat.id && { backgroundColor: theme.primary }]}
              onPress={() => setSelectedCategory(cat.id)}
              activeOpacity={0.85}
            >
              <Text style={[styles.categoryIcon, selectedCategory === cat.id && { color: theme.background }]}>{cat.icon}</Text>
              <Text style={[styles.categoryLabel, { color: selectedCategory === cat.id ? theme.background : theme.text }]}>{cat.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Trending Places */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>Trending Now</Text>
          {trendingPlaces.map((place) => (
            <BlurView key={place.id} intensity={30} tint={colorScheme === 'dark' ? 'dark' : 'light'} style={styles.placeCard}>
              <Image source={{ uri: place.image }} style={styles.placeImage} />
              <View style={styles.placeContent}>
                <View style={styles.placeHeader}>
                  <Text style={[styles.placeName, { color: theme.text }]}>{place.name}</Text>
                  <Text style={[styles.placeCategory, { color: theme.secondary }]}>{place.category}</Text>
                </View>
                <View style={styles.placeFooter}>
                  <Text style={[styles.placeReward, { color: theme.primary }]}>{place.reward}</Text>
                  <Text style={[styles.placeRating, { color: theme.secondary }]}>⭐ {place.rating}</Text>
                  <Text style={[styles.placeDistance, { color: theme.secondary }]}>{place.distance}</Text>
                  <Text style={[styles.placeReviews, { color: theme.secondary }]}>{place.reviews} reviews</Text>
                </View>
              </View>
            </BlurView>
          ))}
        </View>

        {/* Map Preview (Placeholder) */}
        <BlurView intensity={30} tint={colorScheme === 'dark' ? 'dark' : 'light'} style={styles.mapPreview}>
          <Text style={[styles.mapTitle, { color: theme.text }]}>Map Preview</Text>
          <Text style={[styles.mapSubtitle, { color: theme.secondary }]}>Interactive map coming soon!</Text>
        </BlurView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  heroCard: {
    marginTop: spacing.xl,
    marginHorizontal: spacing.xl,
    marginBottom: spacing.lg,
    borderRadius: borderRadius.xl,
    padding: spacing.xl,
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.18)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 24,
    elevation: 8,
    overflow: 'hidden',
  },
  heroTitle: {
    ...typography.h1,
    textAlign: 'center',
    marginBottom: spacing.sm,
    fontWeight: 'bold',
  },
  heroSubtitle: {
    ...typography.body,
    textAlign: 'center',
    opacity: 0.85,
    marginBottom: spacing.lg,
  },
  searchBar: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.22)',
    borderRadius: borderRadius.lg,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    marginTop: spacing.sm,
  },
  searchInput: {
    flex: 1,
    ...typography.body,
    color: '#222',
    backgroundColor: 'transparent',
  },
  categoriesRow: {
    flexDirection: 'row',
    marginHorizontal: spacing.xl,
    marginBottom: spacing.xl,
  },
  categoryChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: borderRadius.lg,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    marginRight: spacing.sm,
  },
  categoryIcon: {
    fontSize: 20,
    marginRight: spacing.xs,
  },
  categoryLabel: {
    ...typography.body,
    fontWeight: 'bold',
  },
  section: {
    marginTop: 8,
    paddingHorizontal: spacing.xl,
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    ...typography.h2,
    marginBottom: spacing.md,
    fontWeight: 'bold',
  },
  placeCard: {
    flexDirection: 'row',
    borderRadius: borderRadius.lg,
    marginBottom: spacing.md,
    overflow: 'hidden',
    backgroundColor: 'rgba(255,255,255,0.18)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  placeImage: {
    width: 100,
    height: 100,
  },
  placeContent: {
    flex: 1,
    padding: spacing.md,
    justifyContent: 'center',
  },
  placeHeader: {
    marginBottom: spacing.xs,
  },
  placeName: {
    ...typography.h3,
    fontWeight: 'bold',
  },
  placeCategory: {
    ...typography.caption,
    marginBottom: spacing.xs,
  },
  placeFooter: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: spacing.sm,
  },
  placeReward: {
    ...typography.body,
    fontWeight: 'bold',
    marginRight: spacing.md,
  },
  placeRating: {
    ...typography.caption,
    marginRight: spacing.md,
  },
  placeDistance: {
    ...typography.caption,
    marginRight: spacing.md,
  },
  placeReviews: {
    ...typography.caption,
  },
  mapPreview: {
    marginHorizontal: spacing.xl,
    marginBottom: spacing.xl,
    borderRadius: borderRadius.xl,
    padding: spacing.xl,
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.18)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 24,
    elevation: 8,
    overflow: 'hidden',
  },
  mapTitle: {
    ...typography.h2,
    fontWeight: 'bold',
    marginBottom: spacing.sm,
  },
  mapSubtitle: {
    ...typography.body,
    opacity: 0.8,
  },
}); 