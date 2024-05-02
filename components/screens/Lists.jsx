import { View, ScrollView } from "react-native";
import { ListCard } from "../index";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { ItemsContext } from '../StateContext';

const Lists = () => {
    const navigation = useNavigation();
    const { lists, setLists } = useContext(ItemsContext)

    // Called when an list is swiped
    const sliderOpened = (itemId) => {
        //toggleSliderValue(itemId);
    };

    // Function to navigate to ListDetails screen
    const navigateToListDetails = (listId, listName, listItems) => {
        navigation.navigate('ListDetails', { listId, listName, listItems });
    };
 
    return (
        <ScrollView style={{backgroundColor:'#EFF2F6'}}>

            <View style={{marginTop:10, marginBottom:10}}>

                { lists.map((list) => {
                    return(
                        <ListCard 
                            id={list.id}
                            name={list.name} 
                            items={list.items}
                            navigateToListDetails={navigateToListDetails}
                            sliderOpened={sliderOpened} 
                            key={list.id}
                        />
                    );
                })}

            </View>

        </ScrollView>
    );
}

export default Lists;
