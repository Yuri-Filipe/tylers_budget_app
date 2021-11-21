import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { StoreType } from "../../store/ducks/types";
import Bar_Title from "../../components/bar_title/Index";
import Dialog from "../../components/dialog/Index";
import Table from "../../components/table/Index";
import  Snackbar  from "../../components/snack_bar/Index";
const List: React.FC = () => {
  const dispatch = useDispatch();
  const table_price = useSelector((state: StoreType) => state.table_price);

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.view}>
        <Bar_Title text="GENERAL INFORMATION" />
        <Table />
     
      </View>
         <Snackbar/>
      <Dialog />
    </ScrollView>
  );
};
export default List;

export const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#072120",
    
  },
  view: {
    backgroundColor: "#072120",
    marginTop: 30,
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
});
