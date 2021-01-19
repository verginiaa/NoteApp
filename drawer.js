import * as React from "react";
import { Button, View, Text, Pressable } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import MovieStack from "./Stacks/MovieStack";
import WorkStack from "./Stacks/WorkStack";
import BooksStack from "./Stacks/BooksStack";
import EducationStack from "./Stacks/EducationStack";
import PersonalStack from "./Stacks/PersonalStack";
import TodoStack from "./Stacks/TodoStack";
import WorkoutsStack from "./Stacks/WorkoutsStack";
import ShoppingStack from "./Stacks/ShoppingStack";

import CustomDrawerContent from "./Scroll";
import Main from "./StackNavigator";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Entypo,
  FontAwesome5,
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";
const Drawer = createDrawerNavigator();

export default function Drawe() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Movies"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name="Movies"
          component={MovieStack}
          options={{
            title: "Movies",
            drawerIcon: ({ focused, size }) => (
              <MaterialCommunityIcons
                name="movie-open"
                size={size}
                color={Pressable ? "#a4b6ca" : "#a4b6ca"}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Work"
          component={WorkStack}
          options={{
            title: "Work",
            drawerIcon: ({ focused, size }) => (
              <MaterialIcons
                name="work"
                size={size}
                color={Pressable ? "#97a793" : "#97a793"}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Shopping"
          component={ShoppingStack}
          options={{
            title: "Shopping",
            drawerIcon: ({ focused, size }) => (
              <AntDesign
                name="shoppingcart"
                size={size}
                color={Pressable ? "#ceb1a8" : "#ceb1a8"}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Books"
          component={BooksStack}
          options={{
            title: "Books",
            drawerIcon: ({ focused, size }) => (
              <Entypo
                name="open-book"
                size={size}
                color={Pressable ? "#9fbbb0" : "#9fbbb0"}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Workout"
          component={WorkoutsStack}
          options={{
            title: "Workout",
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="ios-fitness"
                size={size}
                color={Pressable ? "#9faab6" : "#9faab6"}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Education"
          component={EducationStack}
          options={{
            title: "Education",
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="ios-school"
                size={size}
                color={Pressable ? "#d1c1b5" : "#d1c1b5"}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Personal"
          component={PersonalStack}
          options={{
            title: "Personal",
            drawerIcon: ({ focused, size }) => (
              <FontAwesome5
                name="user-alt"
                size={size}
                color={Pressable ? "#bbb6c7" : "#bbb6c7"}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Todo"
          component={TodoStack}
          options={{
            title: "Todo",
            drawerIcon: ({ focused, size }) => (
              <MaterialCommunityIcons
                name="lightbulb-on-outline"
                size={size}
                color={Pressable ? "#93be94" : "#93be94"}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
