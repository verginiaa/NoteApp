import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Note from "../Note";
import { Ionicons } from "@expo/vector-icons";
import InsertTod from "../DataBaseManager/InsertTodo.js";
import DeleteTod from "../DataBaseManager/DeleteTodo.js";
import UpdateTod from "../DataBaseManager/UpdateTodo.js";

import SingleTodo from "../SingleTodo";
import * as SQLite from "expo-sqlite";
import { globalStyles } from "../GlobalStyles";

export default function Todo() {
  const tableName = "Todo";
  const db = SQLite.openDatabase("My.db");
  db.transaction((tx) => {
    tx.executeSql(
      "create table if not exists Todo (id integer primary key not null, title text , done text);"
    );
  });
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  useEffect(() => {
    console.log("k");

    db.transaction((tx) => {
      tx.executeSql("select * from " + tableName, [], (_, { rows }) => {
        let i = 0;
        console.log(rows.length);
        var temp = [];
        for (i = 0; i < rows.length; i++) {
          console.log("load " + rows.item(i).title);
          console.log("use :" + rows.item(i).done);
          const t = rows.item(i).title;
          const d = rows.item(i).done;
          const k = rows.item(i).id.toString();

          temp.push({ title: t, done: d, key: k });
        }

        setTodo(temp);
      });
    });
  }, []);
  const tri = () => {
    db.transaction((tx) => {
      tx.executeSql("select * from " + tableName, [], (_, { rows }) => {
        let i = 0;
        console.log(rows.length);
        var temp = [];
        for (i = 0; i < rows.length; i++) {
          console.log("load " + rows.item(i).title);
          const t = rows.item(i).title;
          const d = rows.item(i).done;
          const k = rows.item(i).id.toString();

          temp.push({ title: t, done: d, key: k });
        }

        setTodo(temp);
      });
    });
  };

  const HandleInput = (value) => {
    setTodo(value);
    console.log("todo is :" + todo);
  };

  const save = (title, done) => {
    console.log("guwa save w done is :" + done);
    InsertTod.InsertTodoo(title, done, tableName);
    tri();
  };
  const update = (done, id) => {
    UpdateTod.UpdateTodoo(done, id, tableName);
    tri();
  };
  const delet = (item) => {
    console.log(item.title);
    DeleteTod.DeleteTodoo(item, tableName);
    setTodo((prev) => {
      return prev.filter((p) => p != item);
    });
  };

  const chechChecked = (item, check) => {
    console.log("here " + item.title);

    item.done = !check;
    console.log(item.done);
    update(item.done, item.key);
  };
  //
  return (
    <View style={{ flex: 1, backgroundColor: "#b5cad1" }}>
      <View
        style={{
          padding: 10,
          margin: 10,
          backgroundColor: "white",

          flexDirection: "row",
        }}
      >
        <TextInput
          placeholder="Add todo.."
          style={{ flex: 2 }}
          value={text}
          onChangeText={(val) => setText(val)}
        />

        <View style={styles.body}>
          <TouchableOpacity
            onPress={() => {
              save(text, false);
              Keyboard.dismiss();
              setText("");
            }}
          >
            <Ionicons name="ios-add" size={28} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={todo}
        renderItem={({ item }) => {
          return (
            <SingleTodo
              item={item}
              chec={(item, check) => chechChecked(item, check)}
              dele={(item) => delet(item)}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  body: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    flex: 1,
  },
});
