import React from 'react';
import {StyleSheet , Text, TouchableOpacity, View,FlatList,Modal} from "react-native";
import colors from "./Colors";
import Icon from 'react-native-vector-icons/FontAwesome';
import tempData from './tempData';
import TodoList from "./components/TodoList";
import AddListModal from './components/AddListModal';
export default class App extends React.Component{
  state={
    addTodoVisible: false
  }
  toggleAddTodoModal(){
    this.setState({addTodoVisible: !this.state.addTodoVisible})
  }
  render(){
    return(
      <View style={styles.container}>
        <Modal animationType="slide" visible={this.state.addTodoVisible} onRequestClose={() =>this.toggleAddTodoModal()}>
          <AddListModal />
          </Modal> 
          <View style={{flexDirection:"row"}}>
             <View style={styles.divider}/>
      <Text style={styles.title}>
        Todo <Text style={{fontWeight: "300",color:colors.orange}}>Lists</Text>
      </Text>
      <View style={styles.divider}/>
      </View>
      <View style={{marginVertical:48}}>
        <TouchableOpacity style={styles.addList} onPress={() => this.toggleAddTodoModal()}> 
          <Icon name="plus" size={20} color={colors.orange}/>
        </TouchableOpacity>
        <Text style={styles.add}>Add List</Text>
      </View>
      <View style={{height:275,paddingLeft:32}}>
        <FlatList 
        data={tempData} 
        keyExtractor={item=>item.name} 
        horizontal={true} 
        showsHorizontalScrollIndicator={false} 
        renderItem={({item})=>
        <TodoList list={item} />
          }
        />
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
    backgroundColor:colors.orange,
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
      borderRadius:12,
      padding:16,
      alignItems:"center",
      justifyContent:"center"
    },
    add:{
      color:colors.orange,
      fontWeight:"600",
      fontSize:14,
      marginTop:10
    }
});
