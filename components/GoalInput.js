import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal,Image,Alert } from 'react-native';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if(enteredGoalText ==''){
      Alert.alert('Empty field', 'Add somethinng :)', [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        
      ]);
    }else{
      props.onAddGoal(enteredGoalText);
      setEnteredGoalText('');
    }
    
  }

  return (
  <Modal visible={props.visible} animationType='fade'>
    <View style={styles.inputContainer}>
      <Image style={styles.image} source={require('../assets/images/todo-photo.jpg')}/>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
        />
      <View style={styles.buttonContainer}>
      <View style={styles.button}>
        <Button title="Add Goal" onPress={addGoalHandler} color="#FAA300" />
      </View>

      <View style={styles.button}>
      <Button title='Cancel' onPress={props.onCancel} color="#EE4266"/>
      </View>

      </View>
    </View>
  </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5DD61'
    
  },
  image:{
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#C5FFF8',
    backgroundColor: "#C5FFF8",
    borderRadius: 8,
    width: '100%',
    padding: 16,
    color: "#000000",
  },
  buttonContainer:{
    flexDirection: "row",
    marginTop: 16,
  },
  button : {
    width: "30%",
    marginHorizontal: 8, 
  }

});