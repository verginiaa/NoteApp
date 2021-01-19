import React, { useState, useEffect, useRef, Component } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import * as SQLite from "expo-sqlite";
import { render } from "react-dom";

class DeleteData extends Component {
  DeleteDataa = (item, tableName) => {
    const db = SQLite.openDatabase("My.db");

    console.log(item.description);
    db.transaction((tx) => {
      tx.executeSql(
        "Delete from " + tableName + " where desc=?",
        [item.description],
        (_, { rows }) => {}
      );
    });
  };

  render() {}
}
const DeleteDa = new DeleteData();

export default DeleteDa;
