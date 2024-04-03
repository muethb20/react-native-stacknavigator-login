import React, {useState} from 'react';
import {Button, Platform, StyleSheet, Text, TextInput, View} from "react-native";


const Home = ({navigation}: any) => {
    const [user, setUser] = useState<User>({username: "User", password: "Password"})

    const changeUser = (newUsername:string, newPassword: string) => {
        const newUser:User = {
            username: newUsername,
            password: newPassword
        }
        setUser(newUser);
    }

    const login = () => {
        console.log(user);

        if (user.username == "User" && user.password == "Password"){
            navigation.navigate('ProductScreen');
        }else {
            alert("Wrong user data!");
        }
    }

    return (
        <View style={styles.mainMenu}>
            <View style={styles.container}>
                <TextInput placeholder={'User'} style={styles.textInput} onChangeText={text => changeUser(text, user.password)}/>
            </View>

           <View style={styles.container}>
               <TextInput placeholder={'Password'} style={styles.textInput} onChangeText={text => changeUser(user.username, text)}/>
           </View>

            <Button title={'Login'} onPress={() => login()}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#FFFFFF",
        shadowColor: "#000000",
        borderRadius:10,
        flexDirection:"row",
        width:"100%",
        padding:10,
        marginVertical:10
    },
    textInput: {
        fontSize:18,
        fontFamily: Platform.OS === "android" ? "Arial" : "Arial",
        backgroundColor:"#FFFFFF",
        height: 35,
        width: "100%",
    },
    mainMenu: {
        width: "50%",
        alignSelf: "center"
    }
});

export default Home;