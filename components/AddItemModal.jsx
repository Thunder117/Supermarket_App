import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, FlatList, Modal } from "react-native";

const AddItemModal = ({ modalVisible, setModalVisible, items, listId, setLists, lists }) => {
    const departmentNames = ["All", "Produce", "Dairy", "Bakery", "Grocery", "Deli", "Frozen", "Meat and Seafood"];
    const [selectedDepartment, setSelectedDepartment] = useState("All"); // Initialize with "All"
    const [itemsNotInList, setItemsNotInList] = useState([]); // Initialize with an empty array

    useEffect(() => {
        // Filter items that are not already in the list
        const itemsNotInListFiltered = items.filter(item => {
            return !lists[listId].items.some(listItem => listItem.id === item.id);
        });
        setItemsNotInList(itemsNotInListFiltered);
    }, [modalVisible, items, lists, listId]);

    const handleDepartmentSelection = (department) => {
        let filteredItems = items;

        if (department !== "All") {
            // Filter items by department
            filteredItems = items.filter(item => item.department === department);
        }

        // Filter out items that are already in the list
        const itemsNotInListFiltered = filteredItems.filter(item => {
            return !lists[listId].items.some(listItem => listItem.id === item.id);
        });

        setItemsNotInList(itemsNotInListFiltered);
        setSelectedDepartment(department);
    };

    const addItemToList = (item) => {
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
        setModalVisible(false);
        setSelectedDepartment("All");
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
                            <TouchableOpacity onPress={() => addItemToList(item)}>
                                <Text style={{ fontSize: 24, marginVertical: 6 }}>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                    />
                    <TouchableOpacity onPress={() => { setModalVisible(false); setSelectedDepartment("All") }} style={{ marginTop: 20 }}>
                        <Text style={{ color: 'blue', fontSize: 16 }}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default AddItemModal;
