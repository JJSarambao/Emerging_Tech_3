import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ImageBackground, SafeAreaView, ScrollView, FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);


  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText);
    setInputTextValue(enteredText);
  }
  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [...courseGoals, {text: enteredGoalText, key: Math.random().toString()}]);
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
    paddingBottom: 24,
    borderBottomWidth: 1,
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
    marginBottom:5
  },
  image: {
    flex:1,
    resizeMode:'cover',
    justifyContent: 'center'
  },
  textImage:{
    resizeMode: 'contain',
    justifyContent:'center',
    width:'100%',
    marginBottom:5
  },
  goalText: {
    padding:10,
    color:"white",
    marginLeft:20,
    marginBottom:5,
    fontSize:20
  },
  goalsListContainer: {
    paddingTop:10,
    height:"50%"
  },
  goalItems: {
    padding: 0
  }
});
