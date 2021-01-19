import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BooksStack from "./Stacks/BooksStack";
import Books from "./screens/Books";
import Note from "./Note";
import SingleNote from "./SingleNote";
const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Note" component={Note} />

      <Stack.Screen name="SingleNote" component={SingleNote} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
