import { Text, StyleSheet, View, KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from "../Colors";
import tempData from '../tempData';
export default class AddListModal extends React.Component {
  backgroundColor=["#5CD859", "#24A6D9" ,"#595BD9", "#8022D9", "#D159D8", "#D85963", "#D88559"];

  state={
    name: " ",
    color:this.backgroundColor[0]
  };
  createTodo =() => {
    const {name,color} = this.state 

    tempData.push({
      name,
      color,
      todos:[]
    })
    this.setState({name:""})
    this.props.classModal();
  }
  renderColors() {
    return this.backgroundColor.map(color=>{
      return(
        <TouchableOpacity key={color} style={[styles.colorSelect,{backgroundColor:color}]}
        onPress={()=>this.setState({color})}
        />
      )
    })
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behaviour= "padding">
          <TouchableOpacity style={{position: "absolute",top:64,right:32}} onPress={this.props.closeModal}>
          <Icon name="close" size={25} color={colors.black}/>

          </TouchableOpacity>
          <View style={{alignSelf:"stretch",marginHorizontal:32}}>
            <Text style={styles.title}>Create Todo List</Text>
            <TextInput style={styles.input} placeholder="List Name"
            onChangeText={text =>this.setState({name:text})}
            />

            <View style={{flexDirection:"row",justifyContent:"space-between" , marginTop:12}}>
              {this.renderColors()}
            </View>
            <TouchableOpacity style={[styles.create, {backgroundColor:this.state.color}]} onPress={this.createTodo}>
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
      justifyContent:"center"
    },
    colorSelect:{
      width:30,
      height:30,
      borderRadius:4
    }
});
