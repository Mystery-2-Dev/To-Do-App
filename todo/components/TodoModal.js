import { Text, View ,StyleSheet, SafeAreaView, TouchableOpacity, FlatList, KeyboardAvoidingView ,TextInput } from 'react-native'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../Colors';
import { ToolbarAndroid } from 'react-native';
import Symbol from 'react-native-vector-icons/Foundation';

export default class TodoModal extends React.Component {
     state = {
            name:this.props.list.name,
            color:this.props.list.color,
            todos:this.props.list.todos
     };
renderTodo =todo => {
    return(
    <View style={[styles.todoContainer]}>
         <TouchableOpacity>
         <Symbol name="checkbox" size={25} color={colors.black}/>
         </TouchableOpacity>
     </View>
    );
};

    render() {
        const taskCount = this.state.todos.length;
        const completedCount = this.state.todos.filter(todo =>todo.completed).length;
    return (
     <SafeAreaView style={styles.container}>
            <TouchableOpacity style={{position: "absolute",top:64,right:32,zIndex:10}} onPress={this.props.closeModal}>
             <Icon name="close" size={25} color={colors.black}/>
             </TouchableOpacity>

             <View style={[styles.section,styles.header,{borderBottomColor:this.state.color}]}>
                 <View>
                     <Text style={styles.title}>{this.state.name}</Text>
                     <Text style={styles.taskCount}>
                       {completedCount} of {taskCount} tasks
                     </Text>
                 </View>
                 </View>
                 <View style={[styles.section,{flex:3}]}>
                    <FlatList data={this.state.todos} renderItem={({item})=> this.renderTodo(item)} keyExtractor={item=>item.title}
                    contentContainerStyle={{paddingHorizontal:32,paddingVertical:64}}
                    showsVerticalScrollIndicator={false}
                    />
                 </View>

                 <KeyboardAvoidingView style={[styles.section,styles.footer]} behavior="padding">
                     <TextInput style={[styles.input,{borderColor:this.state.color}]} />
                     <TouchableOpacity style={[styles.addTodo,{borderColor:this.state.color}]} >
                     <Icon name="plus" size={20} color={colors.orange} />
                     </TouchableOpacity>
                 </KeyboardAvoidingView>
         </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    section:{
        flex:1,
        alignSelf:"stretch"
    },
    header:{
        justifyContent:'flex-end',
        marginLeft:60,
        borderBottomWidth:3
    },
    title:{
        fontSize:30,
        fontWeight:"800",
        color:colors.black
    },
    taskCount:{
        marginTop:4,
        marginBottom:16,
        color:colors.gray,
        fontWeight:"600",
    },
    footer:{
        flexDirection:"row",
        paddingHorizontal:32,
        alignItems:"center"
    },
    input:{
        flex:1,
        height:48,
        borderWidth:StyleSheet.hairlineWidth,
        borderRadius:6,
        marginRight:8,
        borderRadius:6,
        paddingHorizontal:8,
    },
    addTodo:{
        padding:16,
        borderRadius:4,
        alignItems:"center",
        justifyContent:"center"
    },
     todoContainer:{
        paddingVertical:16,
        flexDirection:"row",
        alignItems:"center",
     }
});