import React, { useState, useContext } from "react";
import { View, ScrollView } from "react-native";
import { ListCard, FloatingButton } from "../index";
import { useNavigation } from "@react-navigation/native";
import { ItemsContext } from '../StateContext';

const Lists = () => {
    const navigation = useNavigation();
    const { lists, setLists } = useContext(ItemsContext);
    const [modalVisible, setModalVisible] = useState(false); 
    const [updatedListName, setUpdatedListName] = useState('');

    const navigateToListDetails = (listId, listName) => {
        if (lists.some(list => list.id === listId)) { // Check if the list exists
            navigation.navigate('ListDetails', { 
                listId, 
                listName 
            });
        } else {
            console.error(`List with id ${listId} does not exist.`); // Log if the list doesn't exist
        }
    };    

    const deleteList = (listId) => {
        
    };    

    const toggleModal = () => {
        setModalVisible(true);
    };

    console.log("Lists component re-rendered"); // Check re-render
    console.log(lists); // Check re-render

    return (
        <View style={{flex: 1}}>
            <ScrollView style={{backgroundColor: 'white'}}>
                <View style={{marginTop: 10, marginBottom: 10, height: '100%'}}>
                    {lists.map((list) => {
                        return (
                            <ListCard 
                                id={list.id}
                                name={updatedListName || list.name} 
                                navigateToListDetails={navigateToListDetails}
                                deleteList={deleteList} // Pass deleteList function
                                key={list.id}
                            />
                        );
                    })}
                </View>
            </ScrollView>
            <FloatingButton 
                toggleModal={toggleModal} 
            />
        </View>
    );
}

export default Lists;
