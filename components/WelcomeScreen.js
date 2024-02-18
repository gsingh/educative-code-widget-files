import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const WelcomeScreen = ({route}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}> { route.params.parameter } </Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 25,
        marginBottom: 20
    }
});

export default WelcomeScreen;