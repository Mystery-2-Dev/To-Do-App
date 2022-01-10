import React from 'react';
import {StyleSheet , Text, TouchableOpacity, View} from "react-native"
import colors from "./Colors"
import Icon from 'react-native-vector-icons/FontAwesome';
export default class App extends React.Component{
  render(){
    return(
      <View style={styles.container}>
          <View style={{flexDirection:"row"}}>
             <View style={styles.divider}/>
      <Text style={styles.title}>
        Todo <Text style={{fontWeight: "300",color:colors.orange}}>Lists</Text>
      </Text>
      <View style={styles.divider}/>
      </View>
      <View style={{marginVertical:48}}>
        <TouchableOpacity style={styles.addList}> 
          <Icon name="plus" size={20} color={colors.orange}/>
        </TouchableOpacity>
        <Text style={styles.add}>Add List</Text>
      </View>
      </View>
    );
  }
}
const styles=StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:"#ffff",
    alignItems:"center",
    justifyContent:"center"
  },
  divider:{
    backgroundColor:colors.lightblue,
    height:1,
    flex:1,
    alignSelf:"center"
  },
    title:{
      fontSize:38,
      fontWeight:"800",
      color:colors.black,
       paddingHorizontal:64
    },
    addList:{
      borderWidth:2,
      borderColor:colors.orange,
      borderRadius:4,
      padding:16,
      alignItems:"center",
      justifyContent:"center"
    },
    add:{
      color:colors.orange,
      fontWeight:"600",
      fontSize:14,
      marginTop:8
    }
});
