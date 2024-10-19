import React from 'react';
import { View, Text } from 'react-native';
import ItemCard from './ItemCard';
import styles from './styles';

const Items = ({ department, itemsInDepartment, items, checkItem, deleteItem }) => {
    return (
        <View key={department}>
            <Text style={styles.departmentText}>{department}</Text>
            {itemsInDepartment.map((item, index) => (
                <React.Fragment key={item.id}>
                    <ItemCard
                        id={item.id}
                        name={items[item.id].name}
                        department={department}
                        checked={item.checked}
                        checkItem={checkItem}
                        deleteItem={deleteItem}
                    />
                    {/* Add a divider line only if it's not the last item */}
                    {index < itemsInDepartment.length - 1 && 
                    <View style={{alignItems:'center'}}>
                        <View style={styles.divider} />
                    </View>
                    }
                </React.Fragment>
            ))}
        </View>
    );
}

export default Items;
