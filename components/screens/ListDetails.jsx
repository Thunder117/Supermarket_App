import React, { useState, useEffect, useContext, useRef } from "react";
import { View, Text, ScrollView, TextInput, TouchableOpacity, Platform, Animated, Modal, FlatList } from "react-native";
import { useRoute, useNavigation } from '@react-navigation/native';
import { ItemsContext } from '../StateContext';
import { ItemCard, FloatingButton, AddItemModal } from "../index";
import { Ionicons } from '@expo/vector-icons';
import styles from "../styles"; 

const ListDetails = () => {
    const route = useRoute(); 
    const navigation = useNavigation();
    const { listId, listName } = route.params;
    const { items, lists, setLists } = useContext(ItemsContext);
    const [searchQuery, setSearchQuery] = useState('');
    const [isButtonVisible, setIsButtonVisible] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const scrollViewRef = useRef(null);
    const buttonOpacity = useRef(new Animated.Value(1)).current;

    const checkItem = (itemId) => {
        setLists(prevLists => {
            return prevLists.map(list => {
                if (list.id === listId) { // Only update the current list
                    const updatedItems = list.items.map(item => {
                        if (item.id === itemId) {
                            return { ...item, checked: !item.checked };
                        }
                        return item;
                    });
                    return { ...list, items: updatedItems };
                }
                return list;
            });
        });
    };

    const deleteItem = (itemIdToDelete) => {
        const newLists = lists.map((list) => {
            if (list.id === listId) {
                const updatedItems = list.items.filter((item) => item.id !== itemIdToDelete);
                return { ...list, items: updatedItems };
            }
            return list;
        });
        setLists(newLists);
    };
    
    const sliderOpened = (itemId) => {
        // Later implementation
    };

    const filteredItems = lists[listId].items.filter(item => {
        const itemName = items[item.id].name.toLowerCase();
        return itemName.includes(searchQuery.toLowerCase());
    });

    const addNewItem = () => {
        // Filter items that are not already in the current list
        const itemsNotInCurrentList = items.filter(item => {
            // Check if the item is not already in the current list
            return !lists[listId].items.some(listItem => listItem.id === item.id);
        });
        // Show the modal with the filtered items
        setModalVisible(true);
    };

    const handleScroll = (event) => {
        const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
        const distanceToEnd = contentSize.height - layoutMeasurement.height - contentOffset.y;
        // If the distance to the end is less than a threshold (e.g., 10), hide the button
        setIsButtonVisible(distanceToEnd > 10);
    };

    useEffect(() => {
        navigation.setOptions({ headerTitle: listName });
        // Animate button visibility when isButtonVisible changes
        Animated.timing(buttonOpacity, {
            toValue: isButtonVisible ? 1 : 0,
            duration: 200,
            useNativeDriver: true,
        }).start();
    }, [isButtonVisible]);

    // Group filtered items by department
    const groupedItems = {};
    filteredItems.forEach(item => {
        const department = items[item.id].department;
        if (!groupedItems[department]) {
            groupedItems[department] = [];
        }
        groupedItems[department].push(item);
    });

    return (
        <View style={{ flex: 1 }}>

            <ScrollView
                ref={scrollViewRef}
                style={{backgroundColor:'#EFF2F6'}}
                onScroll={handleScroll}
                scrollEventThrottle={16} // Adjust the throttle as needed
            >
                <View style={{marginTop:10, marginBottom:10}}>
                    <View style={{
                        backgroundColor:"white",
                        width:"90%",
                        height:60,
                        alignSelf:'center', 
                        justifyContent:'center', 
                        borderRadius:50, 
                        paddingLeft:30,
                        paddingRight:10,
                        marginTop:10,
                        marginBottom:10,   
                        flexDirection: "row"
                    }}>
                        <TextInput 
                            placeholder={"Search..."} 
                            maxLength={20} 
                            style={{ fontSize:20,height:'100%', width:'85%',}}
                            value={searchQuery}
                            onChangeText={setSearchQuery}
                        />
                        <Ionicons name="search" size={32} color="gray" style={{ alignSelf:'center' }}/>
                    </View>
                    
                    <View style={{marginVertical:10}}>
                        {Object.entries(groupedItems).map(([department, itemsInDepartment]) => (
                            <View key={department}>
                                <Text style={{fontSize: 22, fontWeight: 'bold', marginVertical: 10, marginHorizontal:20}}>{department}</Text>
                                {itemsInDepartment.map(item => (
                                    <ItemCard 
                                        id={item.id}
                                        name={items[item.id].name}
                                        department={department}
                                        checked={item.checked}
                                        checkItem={checkItem}
                                        deleteItem={deleteItem}
                                        sliderOpened={sliderOpened} 
                                        key={item.id}
                                    />
                                ))}
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>

            {/* Floating Button */}
            <FloatingButton addNewItem={addNewItem} buttonOpacity={buttonOpacity} />

            {/* Modal */}
            <AddItemModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                items={items}
                listId={listId}
                setLists={setLists}
                lists={lists}
            />

        </View>
    );
}

export default ListDetails;
