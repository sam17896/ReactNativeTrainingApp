import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import Header from './Components/Header';

const data = [
  {
    id: 1,
    title: 'Eggs'
  },
  {
    id: 2,
    title: 'Milk'
  },
  {
    id: 3,
    title: 'Bread'
  }
];

export default function App() {
  const [item, setItem] = useState('');
  const [items, setItems] = useState(data);

  const renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1, height: 60, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20 }}>{item.title}</Text>
      </View>
    );
  };

  const addItem = () => {
    setItems([...items, { id: items.length + 1, title: item }]);
    setItem('');
  };

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={items}
        keyExtractor={(item, _) => `${item.id}`}
        renderItem={renderItem}
      />
      <TextInput placeholder="Enter Item" value={item} style={{ borderWidth: 1, height: 60 }} onChangeText={(text) => setItem(text)} />
      <TouchableOpacity onPress={addItem} style={{ height: 60, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'white', fontSize: 18 }}>Add</Text>
      </TouchableOpacity>
    </View>
    // <View style={{
    //   flex: 1,
    //   flexDirection: 'row'
    // }}>
    //   <View style={{ flex: 1, backgroundColor: 'red', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
    //     <Text>
    //       Hello
    //     </Text>
    //     <Text>
    //       World
    //     </Text>
    //   </View>
    //   <View style={{ flex: 2, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }}>
    //     <Text>
    //       Hello
    //     </Text>
    //   </View>
    //   <View style={{ flex: 1, backgroundColor: 'blue', justifyContent: 'space-around' }}>
    //     <Text>
    //       Hello 
    //     </Text>
    //     <Text>
    //       World
    //   </Text>
    //   </View>

    // </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
