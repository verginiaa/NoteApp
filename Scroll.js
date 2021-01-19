import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <SimpleLineIcons
          name="note"
          size={100}
          color="#a5bece"
          style={{ marginLeft: 30 }}
        />
        <Text style={styles.text}>Your Note app!</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    color: "coral",
    margin: "20%",
  },
  text: {
    marginTop: 10,
    fontWeight: "600",
    fontSize: 20,
    color: "#638397",
  },
});
