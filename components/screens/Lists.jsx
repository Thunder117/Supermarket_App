import { View, ScrollView } from "react-native";
import { List } from "../index";
import { useState } from "react";

const Lists = () => {
    const [lists, setLists] = useState([
        {
            id: 0,
            name: "Basic food basket",
            slider: false
        },
        {
            id: 1,
            name: "I just got paid",
            slider: false
        }
    ]);

    // Called when an list is swiped
    const sliderOpened = (itemId) => {
        //toggleSliderValue(itemId);
    };
 
    return (
        <ScrollView style={{backgroundColor:'white'}}>

            <View>

                { lists.map((list) => {
                    return(
                        <List 
                            id={list.id}
                            name={list.name} 
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
