import { Background } from "@react-navigation/elements";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { Button, PaperProvider, TextInput } from "react-native-paper";

const Inici = () => {


    const estil = "florida";
    const array = ["Email", "nom"];
    const isAdmin = true;
    const moduls2Dam = [
        { nom: 'DIN', professor: 'Manel', hores: 120 },
        { nom: 'ADA', professor: 'Roberto', hores: 120 },
        { nom: 'PMDM', professor: 'Paco', hores: 100 },
        { nom: 'PSP', professor: 'Roberto', hores: 60 },
        { nom: 'SGE', professor: 'Belén', hores: 100 },
        { nom: 'Anglés', professor: 'Caterina', hores: 40 },
        { nom: 'EIE', professor: 'Ana', hores: 60 },
    ];

    const color = () => (estil == 'florida') ? 'white' : 'orange';

    const nom = (textAMostrar, estilos) => {
        return (<Text style={estilos}>{textAMostrar}</Text>)
    }
    const dades = () => {
        return (
            array.map((elem, index) => {
                return <TextInput key={index}
                    defaultValue=""
                    style={(estil == 'florida') ? styles.florida : styles.upv}
                    placeholder={elem}
                    placeholderTextColor={color()}
                />
            }))
    }

    const verBoton = () => {
        if (isAdmin)
            return (
                <View style={{ margin: 5 }}>
                    <Button icon={"format-list-bulleted"} style={{ backgroundColor: 'purple' }} textColor="white">
                        Informes
                    </Button>
                </View>
            )

    }
    return (
        <PaperProvider>
            {nom("david serrano tarazona", { fontSize: 30, textAlign: 'center', color: 'blue' })}
            {dades()}
            {verBoton()}
            
        </PaperProvider>
    );
}

const styles = {
    upv: {
        backgroundColor: 'purple',
        fontSize: 10,
        fontWeight: '600',
        padding: 4,
        paddingLeft: 12,
        textAlign: 'left',
        color: 'grey',
    },
    florida: {
        backgroundColor: 'red',
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
}
export default Inici;
