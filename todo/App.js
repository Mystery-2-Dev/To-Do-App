import React from 'react';
import {StyleSheet , Text, View} from "react-native"

export default class App extends React.Componnent{
  render(){
    return(
      <View style={styles.container}>
      <View style={{flexDirection:"row"}}>
      
      </View>
      </View>
    );
  }
}


const styles=Stylesheet.create({
  containeer:{
    flex: 1,
    backgroundColor:"#ffff",
    alignItems:"center",
    justifyContent:"center"

  }
});
