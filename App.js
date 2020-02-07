import React, { useState, useEffect } from "react";
import { StyleSheet, Text, ScrollView, View, Dimensions } from "react-native";
import { TabView } from "react-native-tab-view";
import Header from "./components/Header";
import Constants from "expo-constants";
import Bannier from "./components/Bannier";
import Information from "./components/Information";
import Event from "./components/Event";
import axios from "axios";
const initialLayout = { width: Dimensions.get("window").width };
export default function App() {
  const [data, setData] = useState(null);
  const [events, setEvents] = useState();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "information" },
    { key: "second", title: "Evenements" }
  ]);

  useEffect(() => {
    axios
      .get("https://lereacteur-exo-api.herokuapp.com/meetup/group")
      .then(res => {
        setData(res.data);
        console.warn(res.data);
      });

    axios
      .get("https://lereacteur-exo-api.herokuapp.com/meetup/events")
      .then(res => {
        setEvents(res.data);
      });
  }, []);

  const myRenderScene = ({ route, jumpTo }) => {
    if (route.key === "first") {
      return <Information data={data} />;
    }
    if (route.key === "second") {
      return <Event events={events} />;
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Bannier data={data} />
        <TabView
          navigationState={{ index, routes }}
          renderScene={myRenderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },
  scene: {
    flex: 1
  }
});
