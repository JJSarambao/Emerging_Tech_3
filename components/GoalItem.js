import { View, ImageBackground, Text, StyleSheet } from "react-native";
function GoalItem(itemData) {
    return(
        <View style={styles.goalItems}>
            <ImageBackground key={itemData.item} source={require("../banner.png")} 
            style={styles.textImage} imageStyle={{borderRadius:10}}>
            <Text style={styles.goalText}>{itemData.item.text}
            </Text>
            </ImageBackground>
        </View>
    )
};

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

export default GoalItem;