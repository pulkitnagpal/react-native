import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = (props) => {
    const [goal, setGoal] = useState('');
    const handleChange = (goal) => {
        setGoal(goal);
    }
    return (
        <View>
            <TextInput style={styles.textInput} placeholder="Enter your Goal" onChangeText={handleChange} value={goal} />
            <Button title="Add" onPress={() => {
                props.handleAddGoal(goal)
            }
            }
            ></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        borderColor: 'black',
        borderWidth: 2,
        marginBottom: 10
    }
})

export default GoalInput;