import { Film } from "@/data/films";
import { Image, View, StyleSheet, Text } from "react-native";
import PosterCard from "./PosterCard";

type ReviewType;

// map the films to pressable images
// on press, pass the id of the film to the passed in func

const ReviewCard = ({ film, onFilmPress }: ReviewType) => (
  <View
    style={styles.posterContainer}
  >
    <Text>{film.title}</Text>
    <Text>{film.year}</Text>
    <Text>{film.averageRating}</Text>
    <View>
        <PosterCard/>
        <Text>{}</Text>
    </View>
    
    <Image style={styles.posterImage} source={{ uri: film.posterURL }} />
  </View>
);

export default ReviewCard;

const styles = StyleSheet.create({
  
  filmTopSection: {
    flexDirection: "row"
  },
  filmBriefSection: {

  },
  filmNameText: {

  },
  filmInfoText: {

  },
  directorText: {

  },
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
