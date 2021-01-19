import React, { useState, useEffect, useRef, Component } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import * as SQLite from "expo-sqlite";
import { render } from "react-dom";

class DeleteTodo extends Component {
  DeleteTodoo = (item, tableName) => {
    const db = SQLite.openDatabase("My.db");

    db.transaction((tx) => {
      tx.executeSql(
        "Delete from " + tableName + " where id=?",
        [item.key],
        (_, { rows }) => {}
      );
    });
  };
  constructor(props) {
    super(props);
  }
  render() {}
}
const DeleteTod = new DeleteTodo();

export default DeleteTod;
