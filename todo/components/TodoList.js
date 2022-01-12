import React from 'react'
import {StyleSheet,Text,View} from 'react-native'

export default TodoList=({list})=>{
    return(
        <View style={[styles.listContainer,{backgroundColor:list.color}]}>
            <Text style={styles.listTitle} numberOfLines={1}>
                {list.name}
            </Text>
        </View>
    );
};


