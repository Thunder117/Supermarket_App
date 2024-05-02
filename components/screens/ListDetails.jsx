import { Text, ScrollView } from "react-native";
import { useRoute } from '@react-navigation/native';
import styles from "../styles";

const ListDetails = () => {
    const route = useRoute(); // Access the route object using the useRoute hook
    const { listId, listName, listItems } = route.params;

    return (
        <ScrollView style={{backgroundColor:'#EFF2F6'}}>

            <Text>List Details for List ID: {listId}</Text>
            <Text>names: {listName}</Text>
            <Text>items: {listItems}</Text>
            { listItems.map((item) => {
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

        </ScrollView>
    );
}

export default ListDetails;