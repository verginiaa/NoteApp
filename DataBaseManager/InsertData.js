import React, { useState, useEffect, useRef, Component } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import * as SQLite from "expo-sqlite";
import { render } from "react-dom";

class InsertData extends Component {
  InsertDataa = (title, description, tableName) => {
    const db = SQLite.openDatabase("My.db");

    db.transaction((tx) => {
      const value = "'" + title + "','" + description + "'";
      console.log("save " + value);
      tx.executeSql(
        "insert into " + tableName + " (title,desc) values (" + value + ")"
      );
    });
  };
  constructor(props) {
    super(props);
  }
  render() {}
}
const InsertDa = new InsertData();

export default InsertDa;
