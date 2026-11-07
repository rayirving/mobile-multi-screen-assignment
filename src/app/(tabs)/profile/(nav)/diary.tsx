import { StyleSheet, Text, View } from "react-native";

const Diary = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.loginText}>No Diary Entries.</Text>
      <Text style={styles.loginText}>
        Log in to Letterbox to create diary entries.
      </Text>
    </View>
  );
};

export default Diary;

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
  },
});
