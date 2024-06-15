import useFetch from '@/hooks/useFetch';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { Card } from './Card';

export function Home({ navigation }) {
    const pageLimit = 10;
    const [limit, setLimit] = useState(pageLimit);
    const [offset, setOffset] = useState(0);

    const { list, loading, error } = useFetch(limit, offset);
    useEffect(() => {
        console.log(list, loading, error?.message);
    }, [loading]);

    function handleClick() {
        setLimit(limit + pageLimit);
    }

    const uniqueList = [...new Map(list.map(item => [item.name, item])).values()];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TouchableOpacity onPress={handleClick} style={styles.button}>
                <Text style={styles.buttonText}>POKEMONS</Text>
            </TouchableOpacity>
            {loading && <Text style={styles.loadingText}>Loading...</Text>}   
            {error && <Text style={styles.errorText}>Error: {error.message}</Text>}

            <View style={styles.cardContainer}>
                {uniqueList.map((element) => (
                    <Card key={element?.name} data={element} navigation={navigation} style={styles.card} />
                ))}
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#8FA2FF',
        alignItems: 'center',
        flexGrow: 1,
    },
    button: {
        backgroundColor: '#ffff',
        padding: 10,
        borderRadius: 50,
        marginBottom: 20,
        alignItems: 'center',
        width: '20%',
        boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.6)',
    },
    buttonText: {
        fontSize: 25,
        color: '#1e1e1e',
        fontWeight: 'bold',
    },
    cardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.6)',
        borderRadius: 20,
    },

  card: {
    fontSize: 30,
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


