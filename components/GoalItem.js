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
    textImage:{
      resizeMode: 'contain',
      justifyContent:'center',
      width:'100%',
      marginBottom:5,
    },
    goalText: {
      padding:10,
      color:"white",
      marginLeft:20,
      marginBottom:5,
      fontSize:20,
    },
    goalItems: {
      paddingTop:0,
      borderTopLeftRadius:10,
      borderTopRightRadius:10,
      borderBottomLeftRadius:10,
      borderRightRadius:10,
      overflow:"scroll"
    }
  });

export default GoalItem;