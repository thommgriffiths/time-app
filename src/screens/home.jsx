import { StyleSheet, Text, SafeAreaView, View, FlatList } from "react-native";
import React from "react";

import { tareas } from "../MockData/tareas";
import Item from "./components/itemComponent";
import Searchbar from "./components/searchbarComponent";

const Home = () => {
  const renderItem = ({ item }) => <Item item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Searchbar></Searchbar>
      <View style={styles.listContainer}>
        <FlatList
          data={tareas}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  listContainer: {
    flex: 1,
    backgroundColor: "white",
    alignSelf: "stretch",
    marginHorizontal: 20,
  },
});
