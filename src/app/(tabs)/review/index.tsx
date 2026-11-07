import { Film, filmList } from "@/data/films";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type SearchResultRowType = {
  film: Film;
  onPress: (id: string) => void;
};

const SearchResultRow = ({ film, onPress }: SearchResultRowType) => (
  <Pressable onPress={() => onPress(film.id)} style={styles.searchRow}>
    <Image source={{ uri: film.posterURL }} style={styles.posterImage} />
    <View style={styles.rowText}>
      <Text style={styles.title} numberOfLines={1}>
        {film.title} <Text style={styles.year}>{film.year}</Text>
      </Text>
      <Text style={styles.director} numberOfLines={1}>
        Directed by {film.director}
      </Text>
    </View>
  </Pressable>
);

const Search = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const search = query.trim().toLowerCase();
  const searchResults =
    search === ""
      ? []
      : filmList.filter(
          (f) =>
            f.title.toLowerCase().includes(search) ||
            f.director.toLowerCase().includes(search),
        );

  const openReview = (id: string) => {
    router.push({ pathname: "/review/film/[id]", params: { id } });
  };

  return (
    <View style={[styles.screen, { paddingTop: insets.top }]}>
      <View style={styles.searchBarSection}>
        <Pressable onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={26} color="#ffffff" />
        </Pressable>
        <View style={styles.searchBar}>
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Name of film..."
            placeholderTextColor="#667788"
            autoCorrect={false}
            style={styles.input}
          />
        </View>
      </View>
      <View style={styles.resultSection}>
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <SearchResultRow film={item} onPress={openReview} />
          )}
          ItemSeparatorComponent={() => <View style={styles.divider} />}
          ListEmptyComponent={
            <Text style={styles.emptyText}>
              {search === ""
                ? "Search by film title or director"
                : `No films match "${query}"`}
            </Text>
          }
        />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#000000",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    
    marginVertical: 16,
    paddingHorizontal: 12,
  },
  searchBarSection: {
    backgroundColor: "#000000",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
    color: "#d8dfe6",
  },
  resultSection: {
    flex: 1,
    backgroundColor: "#14181c",
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  rowText: {
    flex: 1,
    gap: 2,
  },
  title: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "600",
    color: "#d8dfe6",
  },
  year: {
    fontWeight: "400",
    color: "#99aabb",
  },
  director: {
    fontSize: 13,
    lineHeight: 18,
    color: "#99aabb",
  },
  emptyText: {
    padding: 24,
    textAlign: "center",
    color: "#667788",
  },
  posterImage: {
    width: 46,
    aspectRatio: 2 / 3,
    borderRadius: 3,
  },
  divider: {
    height: 1,
    backgroundColor: "#2c3440",
    marginHorizontal: 16,
  },
});
