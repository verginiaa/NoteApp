import { DrawerActions } from "@react-navigation/native";
import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Note from "../Note";
import * as SQLite from "expo-sqlite";
import UpdateDa from "../DataBaseManager/UpdateData.js";
import InsertDa from "../DataBaseManager/InsertData.js";
import DeleteDa from "../DataBaseManager/DeleteData.js";
import { globalStyles } from "../GlobalStyles";
import SingleNote from "../SingleNote";
export default function Books({ navigation }) {
  const db = SQLite.openDatabase("My.db");
  const tableName = "t";
  db.transaction((tx) => {
    tx.executeSql(
      "create table if not exists t (id integer primary key not null, title text , desc text);"
    );
  });
  const [note, setNote] = useState([]);
  useEffect(() => {
    console.log("k");

    db.transaction((tx) => {
      tx.executeSql("select * from " + tableName, [], (_, { rows }) => {
        let i = 0;
        console.log(rows.length);
        var temp = [];
        for (i = 0; i < rows.length; i++) {
          console.log("load " + rows.item(i).title);
          const t = rows.item(i).title;
          const d = rows.item(i).desc;
          const k = rows.item(i).id.toString();

          temp.push({ title: t, description: d, key: k });
        }

        setNote(temp);
        for (i = 0; i < note.length; i++)
          console.log("nshuf " + note[i].title + note[i].key);
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
          const d = rows.item(i).desc;
          const k = rows.item(i).id.toString();

          temp.push({ title: t, description: d, key: k });
        }

        setNote(temp);
        for (i = 0; i < note.length; i++)
          console.log("nshuf " + note[i].title + note[i].key);
      });
    });
  };
  const save = (title, description) => {
    InsertDa.InsertDataa(title, description, tableName);
    tri();
  };
  const delet = (item) => {
    console.log(item.title);
    DeleteDa.DeleteDataa(item, tableName);
    setNote((prev) => {
      return prev.filter((p) => p != item);
    });
  };
  const update = (title, description, id) => {
    UpdateDa.UpdateDataa(title, description, id, tableName);
    tri();
  };

  const t = (item) => {
    console.log("inside t :" + item.title);
    const lk = item.key;
    navigation.navigate("SingleNote", {
      item,
      category: "Books",
      upd: (title, description, lk) => update(title, description, lk),
      delet: (item) => delet(item),
    });
  };
  const t2 = () => {
    navigation.navigate("New Note", {
      category: "Books",
      save: (title, description) => save(title, description),
      delet: (item) => delet(item),
    });
  };
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={note}
        keyExtractor={note.key}
        renderItem={({ item }) => {
          return <Note category={"Books"} item={item} na={(item) => t(item)} />;
        }}
      />
      <View style={globalStyles.g}>
        <View style={globalStyles.button}>
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 45,
              height: 45,
              backgroundColor: "#f5fff5",
              borderRadius: 40,
            }}
            onPress={t2}
          >
            <Text style={{ color: "#445161" }}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
