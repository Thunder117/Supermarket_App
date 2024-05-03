import { View, ScrollView } from "react-native";
import { useContext, useEffect } from "react";
import { useRoute, useNavigation } from '@react-navigation/native';
import { ItemsContext } from '../StateContext';
import { ItemCard } from "../index";
import styles from "../styles";

const ListDetails = () => {
    const route = useRoute(); 
    const navigation = useNavigation();
    const { listId, listName } = route.params;
    const { items, lists, setLists } = useContext(ItemsContext)

    useEffect(() => {
        navigation.setOptions({ headerTitle: listName });
    }, []);

    // Deletes an item from the list by its ID
    const deleteItem = (itemIdToDelete) => {
        const newLists = lists.map((list) => {
            if (list.id === listId) {
                const updatedItems = list.items.filter((itemId) => itemId !== itemIdToDelete);
                return { ...list, items: updatedItems };
            }
            return list;
        });
        setLists(newLists)
    };
    
    const sliderOpened = (itemId) => {
        //later
    };

    return (
        <ScrollView style={{backgroundColor:'#EFF2F6'}}>
            
            <View style={{marginTop:10, marginBottom:10}}>
                { lists[listId].items.map((item) => {
                    return(
                        <ItemCard 
                            id={item}
                            name={items[item].name}
                            department={items[item].department}
                            deleteItem={deleteItem}
                            sliderOpened={sliderOpened} 
                            key={item}
                        />
                    );
                })}
            </View>

        </ScrollView>
    );
}

export default ListDetails;