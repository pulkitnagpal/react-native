import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const GoalItem = (props) => {
    return (
        <TouchableOpacity onPress={()=> props.onDelete(props.goal.key)}>
            <View style={styles.listItem}>
                <Text>{props.goal.value}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'grey',
        marginVertical: 10
    }
});

export default GoalItem;