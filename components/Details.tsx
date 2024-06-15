import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import usePokeinfo from '@/hooks/usePokeinfo';

export function Details({ navigation, route }) {
    const { url } = route.params;
    const { info, loading, error } = usePokeinfo(url);

    if (loading) return <Text style={styles.loadingText}>Loading...</Text>;
    if (error) return <Text style={styles.errorText}>Error: {error.message}</Text>;

    function handleClick() {
        navigation.navigate('Home');
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TouchableOpacity onPress={handleClick}>
                <Text style={styles.header}>Details</Text>
            </TouchableOpacity>
            <View style={styles.detailContainer}>
                <Text style={styles.title}>ID: {info.id}</Text>
                <Text style={styles.title}>Name: {info.name}</Text>
                <Text style={styles.title}>Type: {info.types.map(t => t.type.name).join(', ')}</Text>
                <Text style={styles.title}>Weight: {info.weight}</Text>
                <Text style={styles.title}>Abilities:</Text>
                {info.abilities.map((ability, index) => (
                    <Text key={index} style={styles.text}>{ability.ability.name}</Text>
                ))}
                <Text style={styles.title}>Moves:</Text>
                {info.moves.slice(0, 10).map((move, index) => (
                    <Text key={index} style={styles.text}>{move.move.name}</Text>
                ))}
                <View style={styles.imageContainer}>
                    <Image source={{ uri: info.sprites.front_default }} style={styles.image} />
                    <Image source={{ uri: info.sprites.back_default }} style={styles.image} />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#8FA2FF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#ffffff',
        textAlign: 'center',
    },
    detailContainer: {
        padding: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 5,
        width: 500,
        display: 'flex',
        
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#d4af37',
    },
    text: {
        fontSize: 16,
        marginBottom: 5,
        color: 'black',
        fontWeight: 'bold',
        marginStart: 20,
    },
    imageContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 200,
    },
    loadingText: {
        fontSize: 18,
        color: '#d4af37',
        textAlign: 'center',
        marginTop: 20,
    },
    errorText: {
        fontSize: 18,
        color: '#ff0000',
        textAlign: 'center',
        marginTop: 20,
    },
});
