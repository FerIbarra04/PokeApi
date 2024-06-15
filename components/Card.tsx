// Card.tsx
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export function Card({ data, navigation }) {
    const handlePress = () => {
        navigation.navigate('Details', { url: data.url });
    };

    return (
        <TouchableOpacity onPress={handlePress} style={styles.card}>
            <Text style={styles.text}>{data.name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 20,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    text: {
        fontSize: 18,
    },
});
