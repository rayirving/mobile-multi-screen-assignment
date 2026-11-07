import { StyleSheet, Text, View } from "react-native";

const Watchlist = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.loginText}>No Films in Watchlist.</Text>
      <Text style={styles.loginText}>Log in to Letterbox to add films to your watchlist.</Text>
    </View>
  );
};

export default Watchlist;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#14181c",
  },
  loginText: {
    fontSize: 16,
    color: "#667788",
    marginVertical: 4,
  }
});