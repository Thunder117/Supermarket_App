import { Swipeable } from "react-native-gesture-handler";
import { Text, Pressable, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import styles from "./styles";

const List = (props) => {

    const rightSwipe = () => {
        return (
            <Pressable style={styles.itemRightSwipe}>
                <Feather name="trash-2" size={32} color="white" />
            </Pressable>
        );
    };

    return(
        <View style={styles.itemContainer}>

            <Swipeable 
                onSwipeableClose={() => props.sliderOpened(props.id)} 
                onSwipeableOpen={() => props.sliderOpened(props.id) } 
                overshootRight={false} 
                renderRightActions={rightSwipe}
            >
                <Pressable style={styles.itemButton} onPress={() => { console.log("list pressed") }}>
                    <Text style={styles.itemText}>{props.name}</Text>
                </Pressable>
            </Swipeable>

        </View>
    );
}

export default List;