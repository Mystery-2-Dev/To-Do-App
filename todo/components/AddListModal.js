import { Text, StyleSheet, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from "../Colors";
export default class AddListModal extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behaviour= "padding">
          <TouchableOpacity style={{position: "absolute",top:64,right:32}}>
          <Icon name="close" size={25} color={colors.black}/>
          </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
});
