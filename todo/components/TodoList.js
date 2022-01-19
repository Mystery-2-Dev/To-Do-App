import { colors } from '@material-ui/core';
import React from 'react'
import {StyleSheet,Text,View} from 'react-native'
import Colors from '../Colors';

export default TodoList=({list})=>{
    const completedCount=list.todos.filter(todo =>todo.completed).length;
    const remainingCount=list.todos.length-completedCount;
    return(
        <View style={[styles.listContainer,{backgroundColor:list.color}]}>
            <Text style={styles.listTitle} numberOfLines={1}>
                {list.name}
            </Text>

            <View>
            <View stles={{alignItems: "center"}}>
             <Text style={styles.count}>{completedCount}</Text>
             <Text style={styles.subtitle}>Remaining</Text>
            </View>
            <View stles={{alignItems: "center"}}>
             <Text style={styles.count}>{remainingCount}</Text>
             <Text style={styles.subtitle}>Completed</Text>
            </View>
         </View>
        </View>
    );
};


const styles = StyleSheet.create({
    listContainer:{
        paddingVertical:32,
        paddingHorizontal:16,
        borderRadius:20,
        marginHorizontal:15,
        alignItems:"center",
        width:200  
    },
    listTitle:{
        fontSize:22,
        fontWeight:"700",
        color:Colors.white,
        marginBottom:18
    },
    count:{
        fontSize:50,
        fontWeight:"200",
        color:Colors.white
    },
    subtitle:{
        fontSize:15,
        fontWeight:"700",
        color:Colors.white
    }
});
