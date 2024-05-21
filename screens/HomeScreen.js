import React, { useState, useEffect } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import axios from "axios";
import Article from "../components/Article";
import Header from "../components/Header";

const HomeScreen = ({ navigation }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/everything?q=tesla&from=2024-04-21&sortBy=publishedAt&apiKey=52178c9a4e8945348540a4e3d8ae2fe5"
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <ScrollView>
      <Header />
      <View style={styles.container}>
        {articles.map((article, index) => (
          <Article
            key={index}
            title={article.title}
            summary={article.description}
            image={article.urlToImage}
            onPress={() => navigation.navigate("Details", { article })}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default HomeScreen;
