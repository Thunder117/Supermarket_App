import React, { useState, useEffect, useContext, useRef } from "react";
import { View, Text, ScrollView, TextInput, TouchableOpacity, Platform, Animated, Modal, FlatList } from "react-native";
import { useRoute, useNavigation } from '@react-navigation/native';
import { ItemsContext } from '../StateContext';
import { ItemCard } from "../index";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import styles from "../styles"; 

const ListDetails = () => {
    const route = useRoute(); 
    const navigation = useNavigation();
    const { listId, listName } = route.params;
    const { items, lists, setLists } = useContext(ItemsContext);
    const [searchQuery, setSearchQuery] = useState('');
    const [isButtonVisible, setIsButtonVisible] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const scrollViewRef = useRef(null);
    const buttonOpacity = useRef(new Animated.Value(1)).current;
    const [itemsNotInList, setItemsNotInList] = useState([]);
    const [selectedDepartment, setSelectedDepartment] = useState(null);

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
        setItemsNotInList(itemsNotInCurrentList);
        
        // Set the selected item to null to reset it
        setSelectedItem(null);

        // Show the modal with the filtered items
        setModalVisible(true);
    };

    const handleScroll = (event) => {
        const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
        const distanceToEnd = contentSize.height - layoutMeasurement.height - contentOffset.y;
        // If the distance to the end is less than a threshold (e.g., 50), hide the button
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

    // Static department names
    const departmentNames = ["Produce", "Dairy", "Bakery", "Grocery", "Deli", "Frozen", "Meat and Seafood"];

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
            <Animated.View
                style={[
                    {
                        position: 'absolute',
                        bottom: 20,
                        right: 20,
                        backgroundColor: 'green',
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        opacity: buttonOpacity,
                    },
                    Platform.OS === 'android' ? { elevation: 7 } : { shadowColor: 'black', shadowOpacity: 0.3, shadowRadius: 3, shadowOffset: { width: 0, height: 3 } }
                ]}
            >
                <TouchableOpacity onPress={addNewItem}>
                    <AntDesign name="plus" size={28} color="white" />
                </TouchableOpacity>
            </Animated.View>

            {/* Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '90%', height: '80%' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Add Item</Text>
                        {/* Department Buttons */}
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginBottom: 10, minHeight:30}}>
                            {departmentNames.map(department => (
                                <TouchableOpacity
                                    key={department}
                                    onPress={() => {
                                        // Filter items by department
                                        const departmentItems = items.filter(item => item.department === department && !lists[listId].items.some(listItem => listItem.id === item.id));
                                        setItemsNotInList(departmentItems);
                                        setSelectedDepartment(department);
                                    }}
                                    style={{
                                        backgroundColor: '#e0e0e0',
                                        paddingVertical: 4, // Adjust vertical padding
                                        paddingHorizontal: 12, // Adjust horizontal padding
                                        borderRadius: 5,
                                        marginRight: 10,
                                        maxHeight:30,
                                        borderColor: selectedDepartment === department ? 'green' : '#e0e0e0',
                                        borderWidth: selectedDepartment === department ? 2 : 0,
                                    }}
                                >
                                    <Text>{department}</Text>
                                </TouchableOpacity>                            
                            ))}
                        </ScrollView>
                        {/* Items List */}
                        <FlatList
                            data={itemsNotInList}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => {
                                    // Add the selected item to the current list
                                    setLists(prevLists => {
                                        const newList = prevLists.map(list => {
                                            if (list.id === listId) {
                                                return {
                                                    ...list,
                                                    items: [...list.items, { id: item.id, checked: false }]
                                                };
                                            }
                                            return list;
                                        });
                                        return newList;
                                    });
                                    // Close the modal
                                    setModalVisible(false);
                                }}>
                                    <Text style={{ fontSize: 24, marginVertical: 6 }}>{item.name}</Text>
                                </TouchableOpacity>
                            )}
                        />
                        <TouchableOpacity onPress={() => setModalVisible(false)} style={{ marginTop: 20 }}>
                            <Text style={{ color: 'blue', fontSize: 16 }}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>


        </View>
    );
}

export default ListDetails;
