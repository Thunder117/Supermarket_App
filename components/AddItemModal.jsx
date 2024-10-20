import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, FlatList, Modal } from "react-native";
import styles from "./styles";

const AddItemModal = ({ modalVisible, setModalVisible, items, listId, setLists, lists }) => {
    const departmentNames = ["All", "Produce", "Dairy", "Bakery", "Grocery", "Deli", "Frozen", "Meat and Seafood"];
    const [selectedDepartment, setSelectedDepartment] = useState("All"); // Initialize with "All"
    const [itemsNotInList, setItemsNotInList] = useState([]); // Initialize with an empty array
    const [selectedItems, setSelectedItems] = useState([]); // State to keep track of selected items

    // Find the list by its id
    const currentList = lists.find(list => list.id === listId);

    useEffect(() => {
        if (currentList) {
            const itemsNotInListFiltered = items.filter(item => {
                return !currentList.items.some(listItem => listItem.id === item.id);
            });
            setItemsNotInList(itemsNotInListFiltered);
        }
    }, [modalVisible, items, lists, listId, currentList]);    

    const handleDepartmentSelection = (department) => {
        let filteredItems = items;

        if (department !== "All") {
            // Filter items by department
            filteredItems = items.filter(item => item.department === department);
        }

        if (currentList) {
            // Filter out items that are already in the list
            const itemsNotInListFiltered = filteredItems.filter(item => {
                return !currentList.items.some(listItem => listItem.id === item.id);
            });
            setItemsNotInList(itemsNotInListFiltered);
        }

        setSelectedDepartment(department);
    };

    const toggleItemSelection = (itemId) => {
        if (selectedItems.includes(itemId)) {
            setSelectedItems(prevSelectedItems => prevSelectedItems.filter(id => id !== itemId));
        } else {
            setSelectedItems(prevSelectedItems => [...prevSelectedItems, itemId]);
        }
    };

    const addItemToList = () => {
        setLists(prevLists => {
            const newList = prevLists.map(list => {
                if (list.id === listId) {
                    // Use the itemId to get the item's name from the items array
                    const newItems = selectedItems.map(itemId => {
                        const item = items.find(item => item.id === itemId);
                        return { id: itemId, name: item.name, checked: false }; 
                    });
                    return {
                        ...list,
                        items: [...list.items, ...newItems]
                    };
                }
                return list;
            });
            return newList;
        });
        setSelectedItems([]); // Clear selected items after adding to the list
        setModalVisible(false); // Close the modal
    };    

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={ styles.modalTitle }>Add item</Text>
                    {/* Department Buttons */}
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginBottom: 10, minHeight: 30 }}>
                        {departmentNames.map(department => (
                            <TouchableOpacity
                                key={department}
                                onPress={() => handleDepartmentSelection(department)}
                                style={{
                                    paddingVertical: 4,
                                    paddingHorizontal: 12,
                                    borderRadius: 15,
                                    marginRight: 10,
                                    maxHeight: 30,
                                    justifyContent: 'center',
                                    backgroundColor: selectedDepartment === department ? '#2874a6' : '#3498db'
                                }}
                            >
                                <Text style={{color: 'white'}}>{department}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                    {/* Items List */}
                    <FlatList
                        data={itemsNotInList}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => toggleItemSelection(item.id)}>
                                <Text style={{ fontSize: 24, marginVertical: 6, color: selectedItems.includes(item.id) ? '#f39c12' : 'gray' }}>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                    />
                    
                    <TouchableOpacity
                        onPress={addItemToList}
                        style={{ 
                            marginTop: 10,
                            alignItems:'center',
                            paddingHorizontal: 15, 
                            paddingVertical:10,
                            justifyContent:'center', 
                            borderRadius: 20,
                            backgroundColor: selectedItems.length === 0 ? '#d5d8dc' : '#3498db'
                        }}
                    >
                        <Text style={{ color: 'white', fontSize: 16 }}>{selectedItems.length === 0 ? 'Select your items' : selectedItems.length + ' items selected'}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={() => { setModalVisible(false); setSelectedDepartment("All"); setSelectedItems([]); }} 
                        style={{ marginTop: 20 }}
                    >
                        <Text style={{ color: 'gray', fontSize: 16 }}>Cancel</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        </Modal>
    );
};

export default AddItemModal;