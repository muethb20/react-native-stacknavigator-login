import React from 'react';
import {Image, KeyboardAvoidingView, Pressable, StyleSheet, Text, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

interface CardComponentProps {
    card: Card,
    updateCard: (card: Card) => void
}
const CardComponent:React.FC<CardComponentProps> = ({card, updateCard}) => {

    return (
        <View style={styles.card} >
            {/*Replace with card.image if needed*/}
            <Image style={styles.image} source={{uri: card.image}}></Image>
            <Text style={{paddingLeft: 10}}>{card.description}</Text>

            <View style={{flexDirection:"row"}}>
                <Text style={{padding: 10,flex:5,width: 900, color: "forestgreen"}}>{card.price} €</Text>
                <Pressable  onPress={() => {updateCard(card)}}><MaterialCommunityIcons name={"star"} size={30}/> </Pressable>
                <Text style={{fontSize: 23, marginRight: 10}}>{card.stars}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        shadowColor: "#000000",
        margin: 20,
        backgroundColor: "#FFFFFF",
        borderRadius: 10
    },
    image: {
        width: "100%",
        height: 300,
        marginBottom: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    }
})

export default CardComponent;