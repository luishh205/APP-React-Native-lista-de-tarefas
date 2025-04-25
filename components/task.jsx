import { View, StyleSheet, Pressable, Text } from "react-native"
import { colors } from "../constants/colors"
import { Ionicons } from "@expo/vector-icons"
import { useState } from "react";

export default function Task({ text , Initialcompleted }) {

    const [completed, setCompleted] = useState(Initialcompleted)

    return (
        <View style={styles.rowContainer}>
           <Pressable onPress={() => setCompleted(!completed)}>
            <Ionicons name={"checkmark-circle"} size={32} color={completed ? colors.primary : "gray"} />
           </Pressable>
           <Text>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    rowContainer: {
       display: "flex",
       flexDirection: "row",
       alingItems: "center",
       gap: 10,
       marginBottom: 10,
    },
})