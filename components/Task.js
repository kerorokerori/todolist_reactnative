import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Task = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity ></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}


const styles = StyleSheet.create({
    item: {
        backgroundColor: '#C6E2FF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,

    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },

    itemText: {

    },
    circular: {
        width: 10,
        height: 10,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5
    },


});

export default Task;