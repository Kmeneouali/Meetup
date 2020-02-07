import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const logo = require("../assets/img/meetup.png");
const Header = () => {
  return (
    <View style={styles.header}>
      <Image style={styles.logo} source={logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 40,
    backgroundColor: "white"
  },
  logo: {
    margin: 3,
    width: 100,
    height: 50
  }
});

export default Header;
