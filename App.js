import React, { useState } from 'react'
import { Button, StyleSheet, FlatList, TextInput, View, Text, ToastAndroid, Alert } from 'react-native'
import NameContainer from './components/NameContainer'
import NameInput from './components/Input'
const App = () => {

const [count, setCount] = useState(2);

  // Text taken from the text input and added to the array
  const [text, setText] = useState('')

  // Array of all existing Names
  const [ActorNames, setActorNames] = useState([])

  // Constant to show/hide the Input
  const [showInput, setShowInput] = useState(false)

  // handling the text by setting the text into the latest input given
  const onChangeHandler = (text) => setText(text)

  // Adding Name By retrieving text and adding to the array
  const addName = () => {
	   if (ActorNames.length >= count) {
		   //ToastAndroid.show("Cannot add more than 6", ToastAndroid.SHORT)
	 	   console.log("Cannot add more name");
	  }else{
			if (text !== '') {
			  setActorNames(currentNames => [...currentNames, {
				id: Math.random().toString(),
				value: text
			  }])
			  setTimeout(() => {
				setText('')
				setShowInput(false)
			  }, 270);
			}
		  else {
			  //ToastAndroid.show("Please enter a Actor Name!", ToastAndroid.SHORT)
			  console.log("Please enter a Actor Name!");
			}
		  }  
  }

  // Deleting item by removing it from the array
  const deleteName = (NameId) => {
    setActorNames(currentNames => {
      return currentNames.filter(Name => Name.id !== NameId)
    })
  }



 const createTwoButtonAlert = () =>
    Alert.alert(
    "List of Actors",
      "My Alert Msg",
      [
		{
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

// Function to increment decrement number of actors allowed to add
const incrementCount = () => {
  setCount(count + 1);
};
const decrementCount = () => {
  setCount(count - 1);
};


  return (
    <View style={styles.screen}>
	
	 {/* List View */}
      <FlatList
        keyExtractor={item => item.id}
        data={ActorNames}
        renderItem={data => (
          <NameContainer
            item={data.item}
            deleteName={deleteName}
            addName={addName}
          />
        )}

      />
	
     
	  <Button title='Add Actor Name' onPress={() => setShowInput(true)} />
      {/* The input page */}
      <NameInput
        text={text}
        onChangeHandler={onChangeHandler}
        visible={showInput}
        addName={addName}
        hideInput={() => { setShowInput(false); setText('') }}
      />
     

	 {/*<Button color='red' title={"Display Names"} onPress={createTwoButtonAlert} />*/}

	<div className="app" style={textStyle}>
<Text>Allowed number:{count}</Text>
    <button onClick={incrementCount} style={btnStyle} > Increase number of actors to Add</button>
    <button onClick={decrementCount} style={btnStyle}> Decrease number of actors to Add</button>
  </div>

  
    </View>
	
	

	
	
  )
}

export default App

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  app:{
	  padding: 50
  }
});
const textStyle = {
    fontSize: 20,
	padding: 50
};
const btnStyle = {
    fontSize: 18,
	padding: 6
};