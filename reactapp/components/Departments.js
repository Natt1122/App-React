import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { getDepartments } from "../api/Services";

const Departments = () => {
    const [colombiaDepartments, setcolombiaDepartments] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const colombiaDepartments = await getDepartments()
            setcolombiaDepartments(colombiaDepartments);
        }
        fetchData();
    }, []);
    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Colombia's Departments: </Text>
                {colombiaDepartments.map(department => (
                    <Text key={department.id} style= {styles.text}>{department.name}</Text>
                ))}
            </View>
        </ScrollView>
    );
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
        marginVertical: 5, 
    }
});
export default Departments
