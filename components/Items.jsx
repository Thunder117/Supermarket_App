import React from 'react';
import { View, Text } from 'react-native';
import ItemCard from './ItemCard';

const Items = ({ department, itemsInDepartment, items, checkItem, deleteItem }) => {
    return (
        <View key={department}>
            <Text style={{ fontSize: 22, fontWeight: 'bold', marginVertical: 10, marginHorizontal: 20 }}>{department}</Text>
            {itemsInDepartment.map(item => (
                <ItemCard
                    id={item.id}
                    name={items[item.id].name}
                    department={department}
                    checked={item.checked}
                    checkItem={checkItem}
                    deleteItem={deleteItem}
                    key={item.id}
                />
            ))}
        </View>
    );
}

export default Items;
