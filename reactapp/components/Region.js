import { useEffect, useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { getRegionesColombia } from "../api/Services"




const Region = () =>{
    const [regionColombia, setRegionColombia] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const regionColombia = await getRegionesColombia()
            setRegionColombia(regionColombia);
        }
        fetchData();
    }, []);

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Colombia's Regions: </Text>
            {regionColombia.map(region => (
                <Text key={region.id} style= {styles.text}>{region.name}</Text>
            ))}
            
        </View>
    );
};

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
        marginVertical: 5, 
    }
});

export default Region