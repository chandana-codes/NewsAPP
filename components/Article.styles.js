import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  articleContainer: {
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    elevation: 2,
  },
  articleImage: {
    width: "100%",
    height: 200,
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  articleSummary: {
    fontSize: 16,
    color: "#666",
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});

export default styles;
