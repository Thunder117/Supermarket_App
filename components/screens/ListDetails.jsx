import React, { useState, useEffect, useContext, useRef } from "react";
import { View, ScrollView, TextInput, TouchableOpacity, Platform, Animated } from "react-native";
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
        // Perform the action to add a new item here
        // For example, you can navigate to a screen for adding a new item
        // navigation.navigate('AddItemScreen');
        // Or you can update the state to add a new item directly
        // setLists([...lists, { id: newListId, items: [], name: 'New List' }]);
    };

    const handleScroll = (event) => {
        const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
        const distanceToEnd = contentSize.height - layoutMeasurement.height - contentOffset.y;
        // If the distance to the end is less than a threshold (e.g., 50), hide the button
        setIsButtonVisible(distanceToEnd > 50);
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
                    
                    <View style={{marginTop:10, marginBottom:20}}>
                        { filteredItems.map((item) => (
                            <ItemCard 
                                id={item.id}
                                name={items[item.id].name}
                                department={items[item.id].department}
                                checked={item.checked}
                                checkItem={checkItem}
                                deleteItem={deleteItem}
                                sliderOpened={sliderOpened} 
                                key={item.id}
                            />
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
        </View>
    );
}

export default ListDetails;
