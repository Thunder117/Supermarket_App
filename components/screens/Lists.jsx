import React, { useState, useContext, useEffect, useRef } from "react";
import { View, ScrollView, Animated } from "react-native";
import { ListCard, FloatingButton, AddListModal } from "../index";
import { useNavigation } from "@react-navigation/native";
import { ItemsContext } from '../StateContext';

const Lists = () => {
    const navigation = useNavigation();
    const { lists, setLists } = useContext(ItemsContext);
    const [modalVisible, setModalVisible] = useState(false); 
    const [isButtonVisible, setIsButtonVisible] = useState(true);
    const scrollViewRef = useRef(null);
    const buttonOpacity = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        Animated.timing(buttonOpacity, {
            toValue: isButtonVisible ? 1 : 0,
            duration: 200,
            useNativeDriver: true,
        }).start();
    }, [isButtonVisible]);

    const handleScroll = (event) => {
        const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
        const distanceToEnd = contentSize.height - layoutMeasurement.height - contentOffset.y;
        setIsButtonVisible(distanceToEnd > 10);
    };

    const navigateToListDetails = (listId, listName) => {
        navigation.navigate('ListDetails', { listId, listName });
    };

    const deleteList = (listIdToDelete) => {
        setLists(lists.filter(list => list.id !== listIdToDelete));
    };

    const addNewList = (listName) => {
        const newList = {
            id: Math.random().toString(36).substr(2, 9), // Generate a random ID
            name: listName,
            items: [] // Empty items array for the new list
        };
        setLists([...lists, newList]); // Add the new list to the existing ones
    };

    return (
        <View style={{flex: 1}}>
            <ScrollView style={{backgroundColor: 'white'}} ref={scrollViewRef} onScroll={handleScroll}>
                <View style={{marginTop: 20, marginBottom: 100, height: '100%'}}>
                {lists.map((list) => (
                    <ListCard 
                        id={list.id}
                        key={list.id}
                        name={list.name} 
                        navigateToListDetails={navigateToListDetails}
                        deleteList={deleteList} 
                    />
                ))}
                </View>
            </ScrollView>

            <FloatingButton 
                toggleModal={() => setModalVisible(true)} 
                buttonOpacity={buttonOpacity} 
                isVisible={isButtonVisible}
            />

            <AddListModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                onCreateList={addNewList} // Pass the handler to add a new list
            />
        </View>
    );
}

export default Lists;
