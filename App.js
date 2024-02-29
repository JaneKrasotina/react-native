import React from 'react';
import { View, SafeAreaView, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

// Мокап даних товару
const productsData = [
    { id: '1', name: 'Product 1', description: 'Description 1', image: require('assets/images/donaldduck600.jpeg') },
    { id: '2', name: 'Product 2', description: 'Description 2', image: require('assets/images/fussballer_blau600.jpeg') },
    { id: '3', name: 'Product 1', description: 'Description 1', image: require('assets/images/fussballer_gelb-sw600.jpeg') },
    { id: '4', name: 'Product 2', description: 'Description 2', image: require('assets/images/mikimouse600.jpeg') },
    { id: '5', name: 'Product 1', description: 'Description 1', image: require('assets/images/mini600.jpeg') },
    { id: '6', name: 'Product 2', description: 'Description 2', image: require('assets/images/musiker-600.jpeg') },
    { id: '7', name: 'Product 1', description: 'Description 1', image: require('assets/images/schmetterling600.jpeg') },
    { id: '8', name: 'Product 2', description: 'Description 2', image: require('assets/images/ski_rot.jpeg') },
    { id: '9', name: 'Product 1', description: 'Description 1', image: require('assets/images/storch_m600.jpeg') },
    { id: '10', name: 'Product 2', description: 'Description 2', image: require('assets/images/storch_w600.jpeg') },
    { id: '10', name: 'Product 11', description: 'Description 2', image: require('assets/images/turtle600.jpeg') },
    // Додайте інші товари за аналогією
];

const ProductCard = ({ item }) => {
    return (
        <View style={styles.productcard}>
            <Image source={item.image} style={styles.itemimage} />
            <Text style={styles.itemname}>{item.name}</Text>
            <Text style={styles.itemdescription}>{item.description}</Text>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.buttonlike}>
                    <Text style={styles.btntext}>Like</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttoncart}>
                    <Text style={styles.btntext}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={productsData}
                renderItem={({ item }) => <ProductCard item={item} />}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>

    );
};


export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 8,
    },
    productcard: {
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    itemimage:{
        width: 200,
        height: 200,
        marginBottom: 10,
        borderRadius: 5
    },
    itemname:{
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttons:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    buttonlike:{
        backgroundColor: 'pink', padding: 10, borderRadius: 5
    },
    buttoncart:{
        backgroundColor: 'green', padding: 10, borderRadius: 5
    },
    btntext:{
        color: '#fff'
    }
});

