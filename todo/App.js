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
        Todo <Text style={{fontWeight: "300",color:colors.blue}}>Lists</Text>
      </Text>
      <View style={styles.divider}/>
      </View>
      <View style={{marginVertical:48}}>
        <TouchableOpacity> 
          <Icon name="plus" size={20} color={colors.blue}/>
        </TouchableOpacity>
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
  diviider:{
    backgroundColor:colors.lightBlue,
    height:1,
    flex:1,
    alignSelf:"center"
  },
    title:{
      fontSize:38,
      fontWeight:"800",
      color:colors.black,
       paddingHorizontal:64
    }

});
