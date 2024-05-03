import { useContext  } from "react";
import { View, ScrollView } from "react-native";
import { ItemCard } from "../index";
import { ItemsContext } from '../StateContext';

const Home = () => {
    const { items, setItems } = useContext(ItemsContext)

    // Returns the index of an item by their Id
    const findItemById = (itemId) => { // TODO: this can be improved using map((c, i))
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

    // Called when an item is swiped
    const sliderOpened = (itemId) => {
        toggleSliderValue(itemId);
    };

    return(
        <ScrollView style={{backgroundColor:'#EFF2F6'}}>

            <View style={{marginTop:10, marginBottom:10}}>
                { items.map((item) => {
                    return(
                        <ItemCard 
                            id={item.id}
                            name={item.name} 
                            department={item.department}
                            sliderOpened={sliderOpened} 
                            key={item.id}
                        />
                    );
                })}
            </View>
            
        </ScrollView>
    );
}

export default Home;