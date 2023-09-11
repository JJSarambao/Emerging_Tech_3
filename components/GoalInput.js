import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
function GoalInput(props) {
    const [inputTextValue, setInputTextValue] = useState('');
    const [enteredGoalText, setEnteredGoalText] = useState('');
    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setInputTextValue('');
        setEnteredGoalText('');
    };
    function goalInputHandler(enteredText){
        setEnteredGoalText(enteredText);
        setInputTextValue(enteredText);
    };
    return(
    <View style={styles.inputContainer}>
          <TextInput style={styles.inputText} 
                    placeholder='Your Course Goal' 
                    onChangeText={goalInputHandler} 
                    placeholderTextColor={"#cccccc"}
                    value={inputTextValue}/>
          <Button title='Add Goal' 
          onPress={addGoalHandler}/>
    </View>
    );
}
export default GoalInput
const styles = StyleSheet.create({
    inputContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:'center',
        paddingBottom: "40%"
      },
      inputText:{
        backgroundColor:"#FD7000",
        borderRadius:10,
        flex:1,
        borderWidth: 2,
        width: "70%",
        marginRight: 8,
        padding: 13,
        fontSize:20
      }
});