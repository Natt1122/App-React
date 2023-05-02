import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { getColombiaInfo } from "../api/Services";
import { Icon } from "react-native-elements";

const MainPage =({navigation}) =>{
    const [Infocolombia, setColombiaInfo] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const colombiaData = await getColombiaInfo()
            setColombiaInfo(colombiaData);
        }
        fetchData();
        navigation.setOptions({
            headerRight: () => {
                return(
                    <Icon name='rowing' onPress={() => navigation.navigate('')}/>
                )
            }
        })
    })

    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>About: {Infocolombia.name}</Text>
                <Text style={styles.text}>Regions: {Infocolombia.description}</Text>
                <Text style={styles.text}>Description {Infocolombia.description}</Text>
                <Text style={styles.text}>Capital: {Infocolombia.stateCapital}</Text>
                <Text style={styles.text}>Surface: {Infocolombia.surface}</Text>
                <Text style={styles.text}>Population: {Infocolombia.population}</Text>
            </View>
        </ScrollView>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    text: {
        fontSize: 16,
        marginVertical: 10, 
    }
});
export default MainPage
