import React, { useState, useEffect, useContext, useRef } from "react";
import { View, Text, ScrollView, Animated, TextInput, Modal, Button, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { ItemsContext } from '../StateContext';
import { FloatingButton, AddItemModal, SearchBar, Items } from "../index";
import { Feather } from '@expo/vector-icons';
import styles from "../styles"; 

const ListDetails = ({ route }) => {
    const navigation = useNavigation();
    const { listId, listName } = route.params;
    const { items, lists, setLists } = useContext(ItemsContext);
    const [searchQuery, setSearchQuery] = useState('');
    const [isButtonVisible, setIsButtonVisible] = useState(true);
    const [modalVisible, setModalVisible] = useState(false); // State for AddItemModal
    const [changeNameModalVisible, setChangeNameModalVisible] = useState(false); // State for ChangeNameModal
    const [newListName, setNewListName] = useState(listName);
    const scrollViewRef = useRef(null);
    const buttonOpacity = useRef(new Animated.Value(1)).current;

    const checkItem = (itemId) => {
        setLists(prevLists => {
            return prevLists.map(list => {
                if (list.id === listId) { 
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

    const toggleModal = () => {
        setModalVisible(true);
    };

    const toggleChangeNameModal = () => {
        setChangeNameModalVisible(true);
    };

    const handleScroll = (event) => {
        const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
        const distanceToEnd = contentSize.height - layoutMeasurement.height - contentOffset.y;
        setIsButtonVisible(distanceToEnd > 10);
    };


    useEffect(() => {
        navigation.setOptions({ 
            headerTitle: newListName, // Use the newListName state instead of listName
            headerRight: () => (
                <Pressable 
                    onPress={toggleChangeNameModal} 
                    style={{height:"100%",width:60,alignItems:'center',justifyContent:'center'}}
                >
                    <Feather name="edit" size={24} color="black" />
                </Pressable>
            ),
        });
    }, [navigation, newListName]);    

    useEffect(() => {
        Animated.timing(buttonOpacity, {
            toValue: isButtonVisible ? 1 : 0,
            duration: 200,
            useNativeDriver: true,
        }).start();
    }, [isButtonVisible]);

    useEffect(() => {
        setIsButtonVisible(searchQuery === '');
    }, [searchQuery]);

    const groupedItems = {};
    const filteredItems = lists[listId].items.filter(item => {
        const itemName = items[item.id].name.toLowerCase();
        return itemName.includes(searchQuery.toLowerCase());
    });
    filteredItems.forEach(item => {
        const department = items[item.id].department;
        if (!groupedItems[department]) {
            groupedItems[department] = [];
        }
        groupedItems[department].push(item);
    });

    // Function to handle list name change
    const handleListNameChange = (updatedName) => {
        setLists(prevLists => {
            return prevLists.map(list => {
                if (list.id === listId) {
                    return { ...list, name: updatedName };
                }
                return list;
            });
        });
        // Update the state
        setNewListName(updatedName);
    };

    return (
        <View style={{ flex: 1 }}>

            <ScrollView
                ref={scrollViewRef}
                style={{backgroundColor:'#EFF2F6'}}
                onScroll={handleScroll}
                scrollEventThrottle={16}
            >
                <View style={{marginTop:10, marginBottom:80}}>
                    <SearchBar
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                    
                    <View style={{marginVertical:10}}>
                        {Object.entries(groupedItems).map(([department, itemsInDepartment]) => (
                            <Items
                                key={department}
                                department={department}
                                itemsInDepartment={itemsInDepartment}
                                items={items}
                                checkItem={checkItem}
                                deleteItem={deleteItem}
                            />
                        ))}
                    </View>
                </View>
            </ScrollView>

            <FloatingButton 
                toggleModal={toggleModal} 
                buttonOpacity={buttonOpacity} 
                isVisible={isButtonVisible}
            />

            <AddItemModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                items={items}
                listId={listId}
                setLists={setLists}
                lists={lists}
                handleListNameChange={handleListNameChange}
            />

            <Modal
                animationType="slide"
                transparent={true}
                visible={changeNameModalVisible} // Use the state variable for visibility
                onRequestClose={() => setChangeNameModalVisible(false)}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '90%', height: '40%' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Change List Name</Text>
                        <TextInput
                            value={newListName}
                            onChangeText={setNewListName}
                            style={{ borderBottomWidth: 1, borderColor: 'black', marginBottom: 20 }}
                        />
                        <Button title="Save" onPress={() => { handleListNameChange(newListName); setChangeNameModalVisible(false); }} />
                    </View>
                </View>
            </Modal>

        </View>
    );
}

export default ListDetails;
