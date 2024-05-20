import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { ListCard } from "../index";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { ItemsContext } from '../StateContext';

const Lists = () => {
    const navigation = useNavigation();
    const { lists, setLists } = useContext(ItemsContext);

    // Define state to track the updated list name
    const [updatedListName, setUpdatedListName] = useState('');

    // Function to navigate to ListDetails screen
    const navigateToListDetails = (listId, listName, listItems) => {
        navigation.navigate('ListDetails', { 
            listId, 
            listName, 
            listItems
        });
    };
 
    return (
        <ScrollView style={{backgroundColor:'#EFF2F6'}}>

            <View style={{marginTop:10, marginBottom:10}}>

                { lists.map((list) => {
                    return(
                        <ListCard 
                            id={list.id}
                            name={updatedListName || list.name} // Use updatedListName if available
                            items={list.items}
                            navigateToListDetails={navigateToListDetails}
                            key={list.id}
                        />
                    );
                })}

            </View>

        </ScrollView>
    );
}

export default Lists;
