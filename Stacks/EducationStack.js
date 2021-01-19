import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Education from "../screens/Education";
import { DrawerActions } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import Note from "../Note";
import NewNote from "../NewNote";

import SingleNote from "../SingleNote";
const Stack = createStackNavigator();
const MainStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Education"
        component={Education}
        options={{
          headerLeft: () => (
            <Entypo
              name="menu"
              size={30}
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            />
          ),
        }}
      />
      <Stack.Screen name="New Note" component={NewNote} />

      <Stack.Screen name="Note" component={Note} />
      <Stack.Screen
        name="SingleNote"
        component={SingleNote}
        options={{
          headerTitle: "",
        }}
      />
    </Stack.Navigator>
  );
};
export default MainStackNavigator;
