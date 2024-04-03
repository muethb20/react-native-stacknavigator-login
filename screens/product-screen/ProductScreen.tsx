import React, {useState} from 'react';
import {Button, ScrollView, StyleSheet, Text, View} from "react-native";
import CardComponent from "./card/CardComponent";
import {mockData} from "../../data/mockdata";

const ProductScreen = ({navigation}: any) => {
    const [cards, setCards] = useState<Card[]>(mockData);

    const updateCard = (card: Card) => {

        let newCards = cards.map(c => {
            if (!c.description.localeCompare(card.description)){
                c.stars = c.stars + 1;
            }
            return c;
        })

        newCards = newCards.sort((c1,c2) => c2.stars - c1.stars);

        setCards(newCards);
    }

    return (
        <ScrollView>
            {
                cards.map(card => {
                    return <CardComponent card={card} updateCard={updateCard}/>
                })
            }
        </ScrollView>
    );
};
export default ProductScreen;