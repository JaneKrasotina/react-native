import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

// Мокап даних товару
const productsData = [
  { id: '1', name: 'Product 1', description: 'Description 1', image: require('./images/product1.jpg') },
  { id: '2', name: 'Product 2', description: 'Description 2', image: require('./images/product2.jpg') },
  // Додайте інші товари за аналогією
];

const ProductCard = ({ item }) => {
  return (
    <View style={{ padding: 10, marginBottom: 10, backgroundColor: '#fff', borderRadius: 5 }}>
      <Image source={item.image} style={{ width: 200, height: 200, marginBottom: 10, borderRadius: 5 }} />
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
      <Text>{item.description}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
        <TouchableOpacity style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}>
          <Text style={{ color: '#fff' }}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: 'green', padding: 10, borderRadius: 5 }}>
          <Text style={{ color: '#fff' }}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <View style={{ flex: 1, paddingTop: 50 }}>
      <FlatList
        data={productsData}
        renderItem={({ item }) => <ProductCard item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default App;
