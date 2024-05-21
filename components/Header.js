import React from "react";
import { View, Text } from "react-native";
import styles from "./Header.styles";

const Header = () => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerTitle}>NewsApp</Text>
  </View>
);

export default Header;
