import React from 'react'
import {StyleSheet,Text,View} from 'react-native'
import Colors from '../Colors';

export default TodoList=({list})=>{
    return(
        <View style={[styles.listContainer,{backgroundColor:list.color}]}>
            <Text style={styles.listTitle} numberOfLines={1}>
                {list.name}
            </Text>
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
        fontSize:20,
        fontWeight:"700",
        color:colors.white,
        marginBottom:18
    }
});
