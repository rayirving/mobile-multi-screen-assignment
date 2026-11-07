import ReviewCard from "@/components/ReviewCard";
import { Review, reviewList } from "@/data/reviews";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  // load seed film data
  useEffect(() => {
    setReviews(reviewList);
  }, []);

  const router = useRouter();

  const openFilm = (id: string) => {
    router.push({
      pathname: "/film/[id]",
      params: { id },
    });
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={reviews}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ReviewCard review={item} onFilmPress={openFilm} />
        )}
        contentContainerStyle={styles.reviewList}
        ListHeaderComponent={() => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>Popular this week</Text>
          </View>
        )}
        ItemSeparatorComponent={() => (
          <View style={styles.divider}/>
        )}
      />
    </View>
  );
};

export default Reviews;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#14181c"
  },

  reviewList: {
    paddingHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 24,
    marginBottom: 12,
    marginTop: 18,
  },
  sectionHeaderText: {
    fontWeight: 800,
    fontSize: 18,
    color: "#d8dfe6",
  },
  divider: {
    backgroundColor:"#2c3440",
    height: 1,
    alignSelf: "stretch"
  }
  

});
