import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, FlatList, Modal, Button } from "react-native";

const AddItemModal = ({ modalVisible, setModalVisible, items, listId, setLists, lists }) => {
    const departmentNames = ["All", "Produce", "Dairy", "Bakery", "Grocery", "Deli", "Frozen", "Meat and Seafood"];
    const [selectedDepartment, setSelectedDepartment] = useState("All"); // Initialize with "All"
    const [itemsNotInList, setItemsNotInList] = useState([]); // Initialize with an empty array
    const [selectedItems, setSelectedItems] = useState([]); // State to keep track of selected items

    // Find the list by its id
    const currentList = lists.find(list => list.id === listId);

    useEffect(() => {
        if (currentList) {
            // Filter items that are not already in the list
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
                    const newItems = selectedItems.map(itemId => ({ id: itemId, checked: false }));
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
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '90%', height: '80%' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Add Item</Text>
                    {/* Department Buttons */}
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginBottom: 10, minHeight: 30 }}>
                        {departmentNames.map(department => (
                            <TouchableOpacity
                                key={department}
                                onPress={() => handleDepartmentSelection(department)}
                                style={{
                                    backgroundColor: '#e0e0e0',
                                    paddingVertical: 4,
                                    paddingHorizontal: 12,
                                    borderRadius: 5,
                                    marginRight: 10,
                                    maxHeight: 30,
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
                            <TouchableOpacity onPress={() => toggleItemSelection(item.id)}>
                                <Text style={{ fontSize: 24, marginVertical: 6, color: selectedItems.includes(item.id) ? 'blue' : 'black' }}>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                    />
                    {/* Add Selected Items Button */}
                    <Button title="Add Selected Items" onPress={addItemToList} disabled={selectedItems.length === 0} />
                    <TouchableOpacity onPress={() => { setModalVisible(false); setSelectedDepartment("All"); setSelectedItems([]); }} style={{ marginTop: 20 }}>
                        <Text style={{ color: 'blue', fontSize: 16 }}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default AddItemModal;