import React, {useState} from 'react';
import {ImageBackground, ActionSheetIOS, Button, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Task from './components/Task'

export default function App(){

  const image = {uri: 'https://cdn141.picsart.com/237359841076202.jpg'};
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [health, setHealth] = useState();

  const handleAddTask = () => {
    setTaskItems([...taskItems, task])
    setTask(null)
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  const onPressi = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['취소', '삭제'],
        destructiveButtonIndex: 1,
        cancelButtonIndex: 0,
        userInterfaceStyle: 'light',
      },

      buttonIndex => {
        if (buttonIndex === 0) {
          // cancel action
        } else if (buttonIndex === 1) {
          setTaskItems([])
        }
      },
      );

  return (
    <ImageBackground source={image} resizeMode="cover" opacity='0.45' style={styles.image}>
    <View style={styles.container}>
      
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>오늘 To do list</Text><Text style={styles.taskCount}>Task: {taskItems.length}</Text>
        <View style={styles.items}>
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item} />
                  </TouchableOpacity>

              )
              
            })
          }
          {/* <Task text={'💰 현금'} />
          <Task text={'💳 카드'} /> */}

        </View>
      </View>
      

      <KeyboardAvoidingView 
      behavior={Platform.OS==="ios" ? 'padding': 'height'} style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'태스크'} value={task} onChangeText={text => setTask(text)} />
        

      <TouchableOpacity onPress={() => handleAddTask()}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>추가</Text>
        </View>
      </TouchableOpacity>
      </KeyboardAvoidingView>
      <Button onPress={onPressi} title="삭제" />
      
    </View>
    </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#E8EAED',

  },

  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },

  sectionTitle:{
    fontSize: 24,
    fontWeight: 'bold',

  },

  items: {
    marginTop: 30
  },

  writeTaskWrapper:{
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 60,
    borderColor: 'black',
    borderWidth: 1,
    width: 250,


  },

  image: {
    flex: 1,
    justifyContent: 'center',

  },

  taskCount: {
    paddingTop: 20,
    alignItems:'right',
    fontSize: 15,
    fontWeight: 'bold'
  },

  addWrapper:{
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black', 
    borderWidth: 1,

  }



});
