import { View, ScrollView } from "react-native";
import { useContext, useEffect } from "react";
import { useRoute, useNavigation } from '@react-navigation/native';
import { ItemsContext } from '../StateContext';
import { ItemCard } from "../index";
import styles from "../styles";

const ListDetails = () => {
    const route = useRoute(); // Access the route object using the useRoute hook
    const navigation = useNavigation();
    const { listId, listName, listItems } = route.params;
    const { items, setItems } = useContext(ItemsContext)

    useEffect(() => {
        navigation.setOptions({ headerTitle: listName });
    }, []);

    const sliderOpened = (itemId) => {
        //later
    };

    return (
        <ScrollView style={{backgroundColor:'#EFF2F6'}}>
            
            <View style={{marginTop:10, marginBottom:10}}>
                { listItems.map((item) => {
                    return(
                        <ItemCard 
                            id={item}
                            name={items[item].name}
                            department={items[item].department}
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