import { Alert, FlatList, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import logo from '../assets/images/check.png';
import { colors } from "../constants/colors";
import Task from "../components/task";
import { useState } from "react";

const initialtasks = [
  {id: 1, completed: false, text: "Tarefa 1"},
  {id: 2, completed: true, text: "Tarefa 2"},
  {id: 3, completed: true, text: "Tarefa 3"},
  {id: 4, completed: false, text: "Tarefa 4"},
]

export default function RootLayout() {

const [tasks, setTaks] = useState(initialtasks);
const [text, setText] = useState("");

const addTask = () => {
    const newTask = {id: tasks.length + 1, completed: false, text: text}; 
 
    setTaks([...tasks, newTask]);
    setText("");
}

  return (
    <View style={styles.mainContainer}> 
      <View style={styles.rowContainer}>
        <Image source={logo} style={styles.image}/>
        <Text style={styles.title}>Minhas tarefas</Text>
      </View>
      <View style={styles.rowContainer}>
        <TextInput value={text} onChangeText={setText} style={styles.input}/>
        <Pressable
         style={({pressed}) => [styles.button, {backgroundColor: pressed ? "blue" : colors.primary}]}
          onPress={addTask}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>

    <FlatList
      data={tasks}
      renderItem={({ item }) => <Task text={item.text} completed={item.completed}/>} 
      keyExtractor={(item) => item.id}
    />
    </View>
  )
}

const styles = StyleSheet.create({
  buttonText: {
    color: "white",
    fontSize: 20
  },
  button:{
    width: 40,
    height: 40,
    backgroundColor: colors.primary,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  input: {
    height: 40,
    paddingHorizontal:16,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
    flexGrow: 1
  },
  image: {
    width:50,
    height:50
  },
  title: {
    fontSize:30,
    fontFamily: "Calibri",
    fontWeight: 600,
    color: colors.primary
  },
  mainContainer: {
    margin: 20,
  },
  rowContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    gap: 10,
  }

})