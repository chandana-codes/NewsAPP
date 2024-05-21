import React from "react";
import { Text, Image, TouchableOpacity } from "react-native";
import styles from "./Article.styles";

const Article = ({ title, summary, image, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.articleContainer}>
    <Image source={{ uri: image }} style={styles.articleImage} />
    <Text style={styles.articleTitle}>{title}</Text>
    <Text style={styles.articleSummary}>{summary}</Text>
  </TouchableOpacity>
);

export default Article;
