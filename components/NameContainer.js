import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const NameContainer = ({ item, deleteName }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={deleteName.bind(this, item.id)}
        >
            <View style={styles.listContainer}>
                <Text>{item.value}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default NameContainer

const styles = StyleSheet.create({
    listContainer: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#ccc',
        padding: 10,
        marginVertical: 10
    }
})