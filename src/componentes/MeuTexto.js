import React from "react";
import { Text, StyleSheet } from "react-native";

const MeuTexto = () => (
    <Text style={style.MeuTexto}>Meu primeiro componentes!</Text>
)

const style = StyleSheet.create({
    MeuTexto:{
        fontSize: 36,
        backgroundColor:"yellow",
    }
})

export default MeuTexto