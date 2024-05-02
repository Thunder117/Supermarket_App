import { Text, ScrollView } from "react-native";
import { useContext } from "react";
import { useRoute } from '@react-navigation/native';
import { ItemsContext } from '../StateContext';
import { ItemCard } from "../index";
import styles from "../styles";

const ListDetails = () => {
    const route = useRoute(); // Access the route object using the useRoute hook
    const { listId, listName, listItems } = route.params;
    
    const { items, setItems } = useContext(ItemsContext)

    return (
        <ScrollView style={{backgroundColor:'#EFF2F6'}}>

            <Text>List Details for List ID: {listId}</Text>
            <Text>List name: {listName}</Text>
            { listItems.map((item) => {
                return(
                    <ItemCard 
                        id={item}
                        name={items[item].name}
                        key={item}
                    />
                );
            })}

        </ScrollView>
    );
}

export default ListDetails;