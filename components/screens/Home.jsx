import { View } from "react-native";
import { Item } from "../index";
import { useState, useEffect } from "react";

const Home = () => {
    
    const [items, setItems] = useState([
        {
            id: 0,
            name: "Banano",
            slider: false
        },
        {
            id: 1,
            name: "Manzana",
            slider: false
        },
        {
            id: 2,
            name: "Pepino",
            slider: false
        },
        {
            id: 4,
            name: "Papa",
            slider: false
        }
    ]);
    /*
    // Returns activities with an activity removed
    const cutFromActivities = (activity) => {

        let newActivities = [...activities.slice(0, index), ...activities.slice(index + 1)];
        return newActivities;
    };*/



    // Returns the index of an item by their Id
    const findItemById = (itemId) => {
        let index = 0;
        let counter = 0;
        items.forEach(currentItem => {
            if(currentItem.id == itemId) {
                index = counter;
                return index;
            }
            counter++;
        });
        return index;
    };

    // Toggles the slider value of the item
    const toggleSliderValue = (itemId) => {
        let itemIndex = findItemById(itemId);
        let newItems = items.map((item, index) => {
            if(index == itemIndex) {
                return {...item, slider: !item.slider};
            };
            return item
        });
        setItems(newItems);
    };

    const sliderOpened = (itemId) => {
        toggleSliderValue(itemId);

        console.log(items);
    };

    return(
        <View style={{flex: 1, backgroundColor:'white'}}>
            { items.map((item) => {
                    
                return(
                    <Item 
                        id={item.id}
                        name={item.name} 
                        sliderOpened={sliderOpened} 
                        key={item.id}
                    />
                );
            })}
        </View>
    );
};


export default Home;