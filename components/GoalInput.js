import { useState } from "react";
import { View, TextInput, Pressable, StyleSheet, Text } from "react-native";
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
          <Pressable onPressOut={addGoalHandler}
                     style={({pressed}) => [{
                        backgroundColor: pressed ? '#3083DC' : 'white',
                        borderRadius: pressed ? 6 : 6
                     }, styles.pressWrapper]}
                     pressRetentionOffset={50}
                     testOnly_pressed={true}> 
            {({pressed}) => (
                <Text styles={styles.wrapperCustom}>{pressed ? 'Added!' : 'Add Goal'}</Text>
            )}
          </Pressable>
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
      },
      pressWrapper: {
        borderRadius: 8,
        padding: 19,
      }
});