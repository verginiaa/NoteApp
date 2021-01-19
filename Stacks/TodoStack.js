import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Note from "../Note";
import Todo from "../screens/Todo";
import NewNote from "../NewNote";
import SingleNote from "../SingleNote";
import SingleTodo from "../SingleTodo";

import { DrawerActions } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
const Stack = createStackNavigator();

const MainStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Todo"
        component={Todo}
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
      <Stack.Screen name="NewNote" component={NewNote} />
      <Stack.Screen name="SingleTodo" component={SingleTodo} />

      <Stack.Screen name="Note" component={Note} />
      <Stack.Screen name="SingleNote" component={SingleNote} />
    </Stack.Navigator>
  );
};
export default MainStackNavigator;
