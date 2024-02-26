import React from 'react';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


function ChooseDrink() {
    const [drinkId, setDrinkId] = useState(0);
    if (drinkId === 0) {
        AsyncStorage.getItem("drinkId").then( (drinkId)=>{
            if (drinkId) {
                setDrinkId(+drinkId);
            } else {
                AsyncStorage.setItem("drinkId", "1");
                setDrinkId(1);
            }
        } )
    }

    const newId = (id) => {AsyncStorage.setItem("drinkId", "" + id); setDrinkId(id);}

    return <View style={styles.view}>
    <Text>В прошлый раз пил...</Text>
    <TouchableOpacity onPress={ () => {newId(1)} } activeOpacity={0.7}>
        <Image source={require('./images/coke.jpg')} style={[styles.pic, {borderColor: drinkId === 1 ? "#E61D2B" : "transparent" }]}/>
    </TouchableOpacity>

    <TouchableOpacity onPress={ () => {newId(2)} } activeOpacity={0.7}>
        <Image source={require('./images/sprite.png')} style={[styles.pic, {borderColor: drinkId === 2 ? "#008B47" : "transparent" }]}/>
    </TouchableOpacity>
    <TouchableOpacity onPress={ () => {newId(3)} } activeOpacity={0.7}>
        <Image source={require('./images/fanta.webp')} style={[styles.pic, {borderColor: drinkId === 3 ? "#F7941E" : "transparent" }]}/>
    </TouchableOpacity>
    <TouchableOpacity onPress={ () => {newId(4)} } activeOpacity={0.7}>
        <Image source={require('./images/empty.webp')} style={[styles.pic, {borderColor: drinkId === 4 ? "black" : "transparent" }]}/>
    </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    view: {backgroundColor: 'white', height: 1000, flex: 1, alignItems: "center", justifyContent: "center", gap: 20},
    pic: {
        width: 150, height: 150, resizeMode: 'contain', borderWidth: 2, borderRadius: 16
    }
});

export default ChooseDrink;
