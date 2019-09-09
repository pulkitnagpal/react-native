/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList
} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

const App = () => {
  const [goalList, setGoalList] = useState([]);
  const handleAddGoal = (goal) => {
    setGoalList(currentGoals => [...currentGoals, 
      {
        key: Math.random().toString(),
        value: goal
      }]);
  }
  const handleDelete = (goalDeletedKey) => {
    const newGoalList = goalList.filter((goal)=>goal.key !== goalDeletedKey);
    setGoalList(newGoalList); 
  }
  return (
    <Fragment>
        <View style={styles.parent}>
          <GoalInput handleAddGoal={handleAddGoal}/>
          <View>
            <FlatList data={goalList} renderItem={(goal)=> {
              return (
                <GoalItem goal={goal.item} onDelete={handleDelete}/>
              )
            }}>
            </FlatList>
          </View>
        </View>
    </Fragment>
  );
};
const styles = StyleSheet.create({
  parent: {
    padding: 40
  }
})

export default App;
