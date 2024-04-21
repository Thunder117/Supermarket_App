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
        }
    ]);
    

    // Toggles the slider value of the item
    const toggleSliderValue = () => {
        let temporalItems = items;

        console.log(items);
        console.log(temporalItems);
    }

    return(
        <View style={{flex: 1, backgroundColor:'white'}}>
            { items.map((item) => {
                    
                return(
                    <Item 
                        name={item.name} 
                        toggleSliderValue={toggleSliderValue} 
                        key={item.id}
                    />
                );
            })}
        </View>
    );
}


export default Home;