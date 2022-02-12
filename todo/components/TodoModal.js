import { Text, View ,StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
export default class TodoModal extends React.Component {
     state ={
         name:this.props.list.name,
            color:this.props.list.color,
            todos:this.props.list.todos
     }
    render() {
        const taskCount=this.state.todos.length;
        const completedCount=this.state.todos.filter(todo =>todo.completed).length;
    return (
     <SafeAreaView style={styles.container}>
            <TouchableOpacity style={{position: "absolute",top:64,right:32,zIndex:10}} onPress={this.props.closeModal}>
             <Icon name="close" size={25} color={colors.black}/>
             </TouchableOpacity>

             <View style={[styles.section,styles.header]}>
                 <View>
                     <Text style={styles.title}>{this.state.name}</Text>
                     <Text style={styles.taskCount}>
                       {completedCount} of {taskCount} tasks
                     </Text>
                 </View>
                 </View>
         </SafeAreaView>
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