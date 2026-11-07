import { filmList } from "@/data/films";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ReviewFilm = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const film = filmList.find((f) => f.id === id);
  const insets = useSafeAreaInsets();

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!film) return <Text style={styles.notFound}>Film not found</Text>;

  return (
    <View style={[styles.screen, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="close-outline" size={26} color="#ffffff" />
        </Pressable>
        <Text style={styles.headerText}>I Watched</Text>
        <Pressable style={styles.exit} onPress={() => router.back()}>
          <Ionicons name="checkmark-outline" size={26} color="#ffffff" />
        </Pressable>
      </View>
      <View style={styles.body}>
        <View style={styles.infoSection}>
          <Image source={{ uri: film.posterURL }} style={styles.poster} />
          <Text style={styles.title}>{film.title}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.row}>
          <Text style={styles.rowLabel}>Date</Text>
          <Text style={styles.rowValue}>{today}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.row}>
          <View style={styles.rateColumn}>
            <View style={styles.stars}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Ionicons key={star} name="star" size={48} color="#445566" />
              ))}
            </View>
            <Text style={styles.rowLabel}>Rate</Text>
          </View>
          <View style={styles.likeColumn}>
            <Ionicons name="heart" size={48} color="#445566" />
            <Text style={styles.rowLabel}>Like</Text>
          </View>
        </View>
        <View style={styles.divider} />
        <TextInput
          style={styles.input}
          placeholder="Add a review…"
          placeholderTextColor="#667788"
          multiline
        />
        <View style={styles.divider} />
      </View>
    </View>
  );
};

export default ReviewFilm;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#000000",
  },
  header: {
    backgroundColor: "#000000",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 16,
  },
  headerText: {
    fontWeight: "700",
    color: "#FFFFFF",
    fontSize: 24,
  },
  exit: {
    marginLeft: "auto",
  },
  notFound: {
    padding: 24,
    color: "#99aabb",
  },
  body: {
    flex: 1,
    backgroundColor: "#14181c",
  },
  infoSection: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    height: 70,
  },
  title: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: "700",
    color: "#d8dfe6",
  },
  poster: {
    alignSelf: "stretch",
    aspectRatio: 2 / 3,
    borderRadius: 4,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  rowLabel: {
    fontSize: 14,
    lineHeight: 20,
    color: "#99aabb",
  },
  rowValue: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    color: "#d8dfe6",
  },
  rateColumn: {
    gap: 8,
  },
  likeColumn: {
    alignItems: "center",
    gap: 8,
  },
  stars: {
    flexDirection: "row",
    gap: 6,
  },
  input: {
    minHeight: 140,
    padding: 12,
    color: "#d8dfe6",
    fontSize: 15,
    lineHeight: 22,
    textAlignVertical: "top",
    marginHorizontal: 16,
    marginVertical: 8,
  },
  divider: {
    height: 1,
    backgroundColor: "#2c3440",
    marginHorizontal: 16,
  },
});
