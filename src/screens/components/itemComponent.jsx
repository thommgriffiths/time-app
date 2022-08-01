import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Item = ({ item }) => {
  return (
    <TouchableOpacity
      style={[styles.item, { backgroundColor: item.categoria.color }]}
    >
      <Text style={styles.text}>{item.nombre}</Text>
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({
  item: {
    //backgroundColor: "red",
    height: 80,
    alignSelf: "stretch",
    borderRadius: 20,
    marginBottom: 20,
    justifyContent: "center",
  },
  text: {
    color: "white",
    marginLeft: 20,
    fontSize: 42,
    fontWeight: "100",
    textAlign: "left",
  },
});
