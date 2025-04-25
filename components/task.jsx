import { View, StyleSheet, Pressable, Text } from "react-native"
import { colors } from "../constants/colors"
import { Ionicons } from "@expo/vector-icons"

export default function Task({ text , completed }) {

    return (
        <View style={styles.rowContainer}>
           <Pressable>
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