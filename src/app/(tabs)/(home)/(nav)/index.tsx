import PosterCard from "@/components/PosterCard";
import { Film, filmList } from "@/data/films";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

type RowTypes = {
  films: Film[]; // Take in an array of 3 films
  onFilmPress: (id: string) => void; // Take in a func that takes in an id and returns nothing
};

// map the films to pressable images
// on press, pass the id of the film to the passed in func
const Row = ({ films, onFilmPress }: RowTypes) => (
  <View style={styles.gridRow}>
    {films.map((item) => (
      <PosterCard key={item.id} film={item} onFilmPress={onFilmPress} />
    ))}
  </View>
);

const Films = () => {
  const [films, setFilms] = useState<Film[]>([]);

  // load seed film data
  useEffect(() => {
    setFilms(filmList);
  }, []);

  // route user to movie on open
  const router = useRouter();
  const openFilm = (id: string) => {
    router.push({
      pathname: "/film/[id]",
      params: { id },
    });
  };

  // 3 rows of 3 films
  const rows = [
    films.slice(0, 3),
    films.slice(3, 6),
    films.slice(6, 9),
    films.slice(9, 12),
    films.slice(12, 15),
  ];

  return (
    <ScrollView>
      <Pressable style={styles.promoSection}>
        <View style={styles.promoTag}>
          <Text style={styles.promoTagText}>PRO</Text>
        </View>
        <View style={styles.promoTextContainer}>
          <Text style={styles.promoText}>
            Remove ads, add profile stats, activity and services filters,
            favorite streaming services, watchlist alerts and more by upgrading
            to Pro.
          </Text>
        </View>
      </Pressable>
      <Pressable style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>Popular this week</Text>
        <Text style={styles.sectionHeaderText}>{`>`}</Text>
      </Pressable>
      <View style={styles.gridContainer}>
        {rows.map((row, index) => (
          <Row key={index} films={row} onFilmPress={openFilm} />
        ))}
      </View>
      <Pressable></Pressable>
      <ScrollView></ScrollView>
    </ScrollView>
  );
};

export default Films;

const styles = StyleSheet.create({
  promoSection: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    backgroundColor: "#999999",
  },
  promoTextContainer: {
    flex: 1,
    padding: 10,
  },
  promoText: {
    fontSize: 12,
  },
  promoTag: {
    borderRadius: 4,
    backgroundColor: "#da8a35",
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  promoTagText: {
    color: "#FFFFFF",
    fontWeight: 800,
    letterSpacing: 1.5,
    fontSize: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 24,
    paddingHorizontal: 16,
    marginBottom: 12,
    marginTop: 18,
  },
  sectionHeaderText: {
    fontWeight: 800,
    fontSize: 18,
  },
  gridContainer: {
    gap: 8,
    paddingHorizontal: 16,
  },
  gridRow: {
    flexDirection: "row",
    gap: 8,
  },
});
