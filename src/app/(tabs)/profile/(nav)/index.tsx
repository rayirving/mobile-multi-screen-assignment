import { Image, StyleSheet, Text, View } from "react-native";

const Profile = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.profileSection}>
        <Image
          source={require("@/assets/images/profile.png")}
          style={styles.profileImage}
        />
      </View>
      <View style={styles.divider} />
      <View style={styles.ratingsSection}>
        <View style={styles.ratingsSectionTitle}>
          <Text style={styles.sectionTitleText}>RATINGS</Text>
        </View>
        <View style={styles.ratingsSectionRow}>
          <Text style={styles.ratingsNumber}>1</Text>
          <View style={styles.ratingsLine} />
          <Text style={styles.ratingsNumber}>5</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View>
        <View style={styles.statsRow}>
          <Text style={styles.sectionTitleText}>FILMS</Text>
          <Text style={styles.sectionTitleText}>O &gt;</Text>
        </View>
        <View style={styles.statsRow}>
          <Text style={styles.sectionTitleText}>DIARY</Text>
          <Text style={styles.sectionTitleText}>O &gt;</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#14181c",
    flexDirection: "column",
  },
  loginText: {
    fontSize: 16,
    color: "#667788",
    marginVertical: 4,
  },
  profileImage: {
    width: 80,
    height: 80,
    aspectRatio: 1143 / 947,
  },
  profileSection: {
    alignItems: "center",
    justifyContent: "center",
    padding: 32,
  },
  ratingsSection: {
    height: 100,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  sectionTitleText: {
    color: "#667788",
    letterSpacing: 0.8,
    fontSize: 12,
  },
  ratingsSectionTitle: {
    flexDirection: "row",
    alignItems: "flex-start",
    flex: 1,
  },
  ratingsSectionRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 12,
  },
  ratingsNumber: {
    color: "#00e054",
    fontSize: 14,
    lineHeight: 12,
    fontWeight: 700,
  },
  ratingsLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#667788",
  },
  statsSection: {
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginVertical: 12,
    marginHorizontal: 16,
  },
  divider: {
    backgroundColor: "#2c3440",
    height: 1,
    alignSelf: "stretch",
    marginHorizontal: 16,
  },
});
