import React from "react";
import { View, Text, StyleSheet, ActivityIndicator, Image } from "react-native";
import { EvilIcons, SimpleLineIcons } from "@expo/vector-icons";

const Bannier = props => {
  const { data } = props;
  if (!data) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.container}>
      <Image
        style={styles.photo}
        source={{ uri: data.group_photo.highres_link }}
      />
      <Text style={styles.text}>{data.name}</Text>
      <View style={styles.info}>
        <View style={styles.iconAndText}>
          <EvilIcons name="location" color="grey" size={18} />
          <Text>{data.localized_location}</Text>
        </View>
        <View style={styles.iconAndText}>
          <SimpleLineIcons name="people" color="grey" size={18} />
          <Text>
            {data.members} membres - Groupe {data.visibility}
          </Text>
        </View>
        <View style={styles.iconAndText}>
          <SimpleLineIcons name="user" color="grey" size={18} />
          <Text>Organisé par {data.organizer.name}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginTop: 15,
    minHeight: 300
  },
  photo: {
    height: "50%",
    resizeMode: "stretch"
  },
  text: {
    fontSize: 22,
    color: "black",
    fontWeight: "bold",
    paddingLeft: 10
  },
  info: {
    flexDirection: "column"
  },
  iconAndText: {
    flexDirection: "row",
    fontSize: 14,
    paddingLeft: 15
  }
});
export default Bannier;
