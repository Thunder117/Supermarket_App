import { View, ScrollView } from "react-native";
import { ListCard } from "../index";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Lists = () => {
    const navigation = useNavigation();

    const [lists, setLists] = useState([
        {
            id: 0,
            name: "Basic food basket",
            items: [ 0, 1 ],
            slider: false
        },
        {
            id: 1,
            name: "I just got paid",
            items: [ 2, 3 ],
            slider: false
        }
    ]);

    // Called when an list is swiped
    const sliderOpened = (itemId) => {
        //toggleSliderValue(itemId);
    };

    // Function to navigate to ListDetails screen
    const navigateToListDetails = (listId) => {
        navigation.navigate('ListDetails', { listId });
    };
 
    return (
        <ScrollView style={{backgroundColor:'#EFF2F6'}}>

            <View style={{marginTop:10, marginBottom:10}}>

                { lists.map((list) => {
                    return(
                        <ListCard 
                            id={list.id}
                            name={list.name} 
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
