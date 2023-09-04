import React from "react";
import { Text } from "react-native";
import Estilo from "../estilo";


export default (parametro) => (
    <Text style={Estilo.fontG}>O numero {parametro.max} e maior que o numero {parametro.min}</Text>
)