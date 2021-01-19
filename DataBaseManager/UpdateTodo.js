import React, { useState, useEffect, useRef, Component } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import * as SQLite from "expo-sqlite";
import { render } from "react-dom";

class UpdateTodo extends Component {
  UpdateTodoo = (done, id, tableName) => {
    const db = SQLite.openDatabase("My.db");

    console.log("inside update  " + done);
    db.transaction((tx) => {
      tx.executeSql(
        "UPDATE " + tableName + " set done=? where id=?",
        [done, id],
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
const UpdateTod = new UpdateTodo();

export default UpdateTod;
