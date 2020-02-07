import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Information = props => {
  const { data } = props;
  if (!data) {
    return <ActivityIndicator />;
  }
  return (
    <View style={{ backgroundColor: "#ff4081" }}>
      <Text>{data.urlname}</Text>
    </View>
  );
};

export default Information;
