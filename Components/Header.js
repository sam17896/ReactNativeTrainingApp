import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Header(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    );
}

Header.defaultProps = {
    title: 'Shopping List'
};


const styles = StyleSheet.create({
    container: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue'
    },
    text: {
        fontSize: 18,
        color: 'grey'
    }
})