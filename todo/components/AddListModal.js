import { Text, StyleSheet, View } from 'react-native';
import React, { Component } from 'react';

export default class AddListModal extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Screen</Text>
      </View>
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
