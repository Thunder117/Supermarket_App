import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { ListCard, FloatingButton } from "../index";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { ItemsContext } from '../StateContext';

const Lists = () => {
    const navigation = useNavigation();
    const { lists, setLists } = useContext(ItemsContext);
    const [modalVisible, setModalVisible] = useState(false); 
    const [updatedListName, setUpdatedListName] = useState('');

    // Function to navigate to ListDetails screen
    const navigateToListDetails = (listId, listName, listItems) => {
        navigation.navigate('ListDetails', { 
            listId, 
            listName, 
            listItems
        });
    };

    const toggleModal = () => {
        setModalVisible(true);
    };
 
    return (
        <View style={{flex: 1}}>

            <ScrollView style={{backgroundColor:'white'}}>

                <View style={{marginTop:10, marginBottom:10, height:'100%'}}>

                    { lists.map((list) => {
                        return(
                            <ListCard 
                                id={list.id}
                                name={updatedListName || list.name} 
                                items={list.items}
                                navigateToListDetails={navigateToListDetails}
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
