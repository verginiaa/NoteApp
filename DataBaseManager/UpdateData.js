import React, { useState, useEffect, useRef, Component } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import * as SQLite from "expo-sqlite";
import { render } from "react-dom";

class UpdateData extends Component {
  UpdateDataa = (title, description, id, tableName) => {
    const db = SQLite.openDatabase("My.db");

    console.log("inside update  " + tableName);
    db.transaction((tx) => {
      tx.executeSql(
        "UPDATE " + tableName + " set title=?, desc=? where id=?",
        [title, description, id],
        (tx, results) => {
          console.log("Results", results.rowsAffected);
        }
      );
    });
  };
  constructor(props) {
    super(props);
  }
  render() {}
}
const UpdateDa = new UpdateData();

export default UpdateDa;
