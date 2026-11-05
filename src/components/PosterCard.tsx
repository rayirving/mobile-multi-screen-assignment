import { Film } from "@/data/films";
import { Image, Pressable, StyleSheet } from "react-native";

type RowTypes = {
  film: Film;
  onFilmPress: (id: string) => void; // Take in a func that takes in an id and returns nothing
};

// map the films to pressable images
// on press, pass the id of the film to the passed in func

const PosterCard = ({ film, onFilmPress }: RowTypes) => (
  <Pressable
    style={styles.posterContainer}
    onPress={() => onFilmPress(film.id)}
  >
    <Image style={styles.posterImage} source={{ uri: film.posterURL }} />
  </Pressable>
);

export default PosterCard;

const styles = StyleSheet.create({
  posterContainer: {
    flex: 1,
  },
  posterImage: {
    width: "100%",
    aspectRatio: 2 / 3,
    borderColor: "#a9a9a9",
    borderRadius: 4,
  },
});
