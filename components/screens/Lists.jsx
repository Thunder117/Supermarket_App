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
        navigation.navigate('ListDetails', { 
            listId, 
            listName 
        });
    };    

    const deleteList = (listIdToDelete) => {
        const newLists = lists.filter(list => list.id !== listIdToDelete); // Filter out the list with the matching ID
        setLists(newLists); // Update the state with the new list array
        console.log("Deleted list with id:", listIdToDelete); // Log for confirmation
    };    

    const toggleModal = () => {
        setModalVisible(true);
    };

    return (
        <View style={{flex: 1}}>
            <ScrollView style={{backgroundColor: 'white'}}>
                <View style={{marginTop: 10, marginBottom: 10, height: '100%'}}>
                {lists.map((list) => {
                    return (
                        <ListCard 
                            id={list.id}
                            key={list.id}
                            name={updatedListName || list.name} 
                            navigateToListDetails={navigateToListDetails}
                            deleteList={deleteList} 
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
