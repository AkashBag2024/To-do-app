import { StyleSheet, View, Text,Pressable } from "react-native";
function GoalItem(props) {
  return (
    <View style={styles.goalItems}>
    <Pressable onPress={props.onDeleteItem.bind(this,props.id)}
    android_ripple={{color : "#0C359E"}}
    style={({pressed})=> pressed && styles.pressedItem}
    >
      <Text style={styles.goalText}>{props.text}</Text>
    </Pressable>
    </View>
  );
}
export default GoalItem;

const styles = StyleSheet.create({
  goalItems: {
    backgroundColor: "#0C359E",
    margin: 8,    
    borderRadius: 6,
  },
  goalText: {
    color: "#ffff",
    padding: 8,
  },
  pressedItem : {
    opacity: 0.5,
  }
});
