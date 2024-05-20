import React, { useState, useEffect, useContext, useRef } from "react";
import { View, Text, ScrollView, Animated} from "react-native";
import { useRoute, useNavigation } from '@react-navigation/native';
import { ItemsContext } from '../StateContext';
import { FloatingButton, AddItemModal, SearchBar, Items } from "../index";
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

    return (
        <View style={{ flex: 1 }}>

            <ScrollView
                ref={scrollViewRef}
                style={{backgroundColor:'#EFF2F6'}}
                onScroll={handleScroll}
                scrollEventThrottle={16}
            >
                <View style={{marginTop:10, marginBottom:80}}>
                    {/* SearchBar for List Items */}
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

            {/* Floating Button To Add Items */}
            <FloatingButton 
                toggleModal={toggleModal} 
                buttonOpacity={buttonOpacity} 
            />

            {/* Modal for Adding Items */}
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
