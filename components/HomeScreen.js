import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate("Log in")}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}> Log in </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("Sign up")}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}> Register </Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        width: 120,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#191970",
        borderRadius: 24,
        margin: 20
    },
    buttonText: {
        color: "white",
        fontSize: 20
    },
});

export default HomeScreen;