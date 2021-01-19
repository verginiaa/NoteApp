import React, { useState, useEffect, useRef, Component } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import * as SQLite from "expo-sqlite";
import { render } from "react-dom";

class InsertTodo extends Component {
  InsertTodoo = (title, done, tableName) => {
    const db = SQLite.openDatabase("My.db");

    db.transaction((tx) => {
      const value = "'" + title + "','" + done + "'";
      console.log("save " + value);
      tx.executeSql(
        "insert into " + tableName + " (title,done) values (" + value + ")"
      );
    });
  };
  constructor(props) {
    super(props);
  }
  render() {}
}
const InsertTod = new InsertTodo();

export default InsertTod;
