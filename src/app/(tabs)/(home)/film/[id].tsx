import { Film, filmList } from "@/data/films";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const FilmScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  console.log("FilmScreen id:", id);

  const [film, setFilm] = useState<Film | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setFilm(filmList.find((f) => f.id === id) ?? null);
    setLoading(false);
  }, [id]);

  if (loading) return <ActivityIndicator />;
  if (!film) return <Text>Film not Found</Text>;

  return (
    <ScrollView>
      <View>
        <Image style={styles.bannerImage} source={{ uri: film.bannerURL }} />
      </View>
      <View style={styles.filmTopSection}>
        <View style={styles.filmBriefSection}>
          <Text style={styles.filmNameText}>{film.title}</Text>
          <View>
            <Text style={styles.filmInfoText}>{film.year} · DIRECTED BY</Text>
            <Text style={styles.directorText}>{film.director}</Text>
          </View>
          <View style={styles.filmRunSection}>
            <Text>TRAILER</Text>
            <Text>{film.runtime} mins</Text>
          </View>
        </View>
        <View style={styles.posterContainer}>
          <Image style={styles.posterImage} source={{ uri: film.posterURL }} />
        </View>
      </View>
      <View style={styles.filmDescSection}>
        <Text style={styles.filmInfoText}>{film.description}</Text>
      </View>
      <View></View>
      <View></View>
      <View></View>
    </ScrollView>
  );
};

export default FilmScreen;

const styles = StyleSheet.create({
  filmTopSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 12,
    paddingBottom: 30,
    paddingHorizontal: 16,
  },
  filmBriefSection: {
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: 10,
    maxWidth: 250,
  },
  filmRunSection: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 16,
  },
  filmDescSection: {
    paddingHorizontal: 16,
  },
  filmNameText: {
    fontWeight: 900,
    fontSize: 24,
  },
  filmInfoText: {
    fontSize: 12,
    letterSpacing: 0.8
  },
  directorText: {
    fontWeight: 800,
    fontSize: 14
  },
  posterContainer: {
    width: 100,
  },
  posterImage: {
    width: "100%",
    aspectRatio: 2/3,
    borderColor: "#a9a9a9",
    borderRadius: 4,
  },
  bannerImage: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
});
