import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ImageBackground, SafeAreaView, ScrollView, FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import InputValidation from './components/InputValidator'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    if (InputValidation(enteredGoalText)){
      setCourseGoals((currentCourseGoals) => [...courseGoals, {text: enteredGoalText, key: Math.random().toString()}]);
    }
    else {
      null
    }
  }

  return (
    <SafeAreaView style={styles.viewContainer}>
      <ImageBackground source={require("./chamber.png")} style={styles.image}>
      <View style={styles.appContainer}>     
        <GoalInput onAddGoal={addGoalHandler} />
        <View style={styles.goalsListContainer}>
          <FlatList style={styles.goalsContainer} data={courseGoals} renderItem={(itemData) => {
            return(
                    GoalItem(itemData)
            )
          }} />
        </View>
      </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  viewContainer:{
    padding:0,
    flex:1
  },
  appContainer:{
    flex: 1,
    padding: 50,
    paddingTop:100,
    paddingHorizontal:50,
  },
  inputContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:'center',
    paddingBottom: 24
  },
  inputText:{
    backgroundColor:"#FD7000",
    borderRadius:10,
    flex:1,
    borderWidth: 2,
    width: "70%",
    marginRight: 8,
    padding: 13
  },
  goalsContainer:{
    flex:5,
    marginTop:5,
    marginBottom:5,
    marginHorizontal:2
  },
  image: {
    flex:1,
    resizeMode:'cover',
    justifyContent: 'center'
  },
  goalsListContainer: {
    flex:1,
    paddingTop:0,
    height:"70%",
    borderWidth: 1,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    borderBottomLeftRadius:10,
    borderRightRadius:10,
    borderColor:"000000",
    borderWidth: 3,
    borderRadius: 10
  }
});
