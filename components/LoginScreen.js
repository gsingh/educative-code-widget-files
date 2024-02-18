import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { 
    collection,
    query,
    getDocs,
    where
} from "@firebase/firestore"; 
import { db } from '../config.js';

const LoginScreen = ({navigation}) => {

    const loginUser = async (email, password) => {
        if (email === "" || password === "") {
            Alert.alert("Email or password field is empty!");
            return;
        }
        const docRef = collection(db, "users");
        const q = query(docRef, where("email", "==", email));
        const docData = await getDocs(q);
        if (docData.size == 0) {
            Alert.alert("User with email " + email + " is not registered!");
            return;
        }
        else {
            var fetchedPassword;
            docData.forEach((doc) => {
                fetchedPassword = String(doc.data().password);
            });
            password = String(password);
            if (password !== fetchedPassword) {
                Alert.alert("Invalid password!");
                return;
            }
            else {
                navigation.navigate("Welcome", {parameter: "Successfully logged in"})
            }
        }
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}> Email </Text>
            <TextInput
                style={styles.textInput}
                placeholder="Enter your email address"
                placeholderTextColor="black"
                keyboardType="email-address"
                value={ email }
                onChangeText={text => setEmail(text)}
            />
            <Text style={styles.text2}> Password </Text>
            <TextInput
                style={styles.textInput}
                placeholder="Enter your password"
                placeholderTextColor="black"
                keyboardType="default"
                secureTextEntry={true}
                value={ password }
                onChangeText={text => setPassword(text)}
            />
            <TouchableOpacity
                onPress={() => loginUser(email, password)}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}> Sign in </Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingLeft: 40,
        marginBottom: 110
    },
    text: {
        color: "purple",
        fontFamily: "notoserif",
        fontSize: 20,
        fontWeight: "900",
    },
    text2: {
        color: "purple",
        fontFamily: "notoserif",
        fontSize: 20,
        fontWeight: "900",
        marginTop: 30
    },
    textInput: {
        height: 50,
        width: 500,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "purple",
        paddingLeft: 20,
        marginTop: 10
    },
    button: {
        marginTop: 50,
        marginLeft: 180,
        width: 120,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#191970",
        borderRadius: 24
    },
    buttonText: {
        color: "white",
        fontSize: 20
    },
});

export default LoginScreen;