import { filmList } from "@/data/films";
import { Review } from "@/data/reviews";
import { Image, StyleSheet, Text, View } from "react-native";
import PosterCard from "./PosterCard";

type ReviewCardType = {
  review: Review;
  onFilmPress: (id: string) => void;
};

const ReviewCard = ({ review, onFilmPress }: ReviewCardType) => {
  const film = filmList.find((f) => f.id === review.filmId) ?? null;

  if (!film) return null;

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.cardHeaderFilm}>
          <Text style={styles.filmText}>{film.title}</Text>
          <Text>{film.year}</Text>
        </View>
        <View style={styles.cardHeaderUser}>
          <Text>{review.username}</Text>
          <View style={styles.avatarContainer}>
            <Image
              style={styles.avatarImage}
              source={{ uri: review.avatarURL }}
            />
          </View>
        </View>
      </View>
      <Text style={styles.ratingText}>{review.rating}</Text>
      <View style={styles.cardBody}>
        <View style={styles.posterContainer}>
          <PosterCard film={film} onFilmPress={onFilmPress} />
        </View>
        <Text 
        style={styles.reviewText}
        >{review.text}</Text>
      </View>
    </View>
  );
};

export default ReviewCard;

const styles = StyleSheet.create({
  card: {
    marginVertical: 16
  },
  posterContainer: {
    width: 100,
  },
  posterImage: {
    width: "%100",
    aspectRatio: 2 / 3,
    borderColor: "#a9a9a9",
    borderRadius: 4,
  },
  avatarContainer: {
    width: 30,
  },
  avatarImage: {
    width: "%100",
    aspectRatio: 1 / 1,
    borderColor: "#a9a9a9",
    borderRadius: 15,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardHeaderUser: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 8,
  },
  cardHeaderFilm: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 4
  },
  cardBody: {
    flexDirection: "row",
    gap: 12
  },
  reviewText: {
    flex: 1,
  },
  filmText: {
    fontWeight: 600,
    fontSize: 16,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: 600,
    color: "#508027",
    paddingBottom: 4,
  },
});
