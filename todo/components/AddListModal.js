import { Text, StyleSheet, View, KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from "../Colors";
export default class AddListModal extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behaviour= "padding">
          <TouchableOpacity style={{position: "absolute",top:64,right:32}} onPress={this.props.closeModal}>
          <Icon name="close" size={25} color={colors.black}/>

          </TouchableOpacity>
          <View style={{alignSelf:"stretch",marginHorizontal:32}}>
            <Text style={styles.title}>Create Todo List</Text>
            <TextInput style={styles.input} placeholder="List Name"/>
            <TouchableOpacity style={[styles.create]}>
              <Text style={{color:colors.white,fontWeight:"600"}}>Create</Text>
            </TouchableOpacity>
          </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
      fontSize:28,
      fontWeight:"800",
      color:colors.black,
      alignSelf:"center",
      marginBottom:15
    },
    input:{
      borderWidth:StyleSheet.hairlineWidth,
      borderColor:colors.orange,
      borderRadius:6,
      height:50,
      marginTop:8,
      paddingHorizontal:16,
      fontSize:18
    },
    create:{
      marginTop:24,
      height:50,
      borderRadius:6,
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:"orange"
    }
});
