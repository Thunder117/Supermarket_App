import { Swipeable } from "react-native-gesture-handler";
import { Text, Pressable, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import styles from "./styles";
import AntDesign from '@expo/vector-icons/AntDesign';

const ListCard = (props) => {
    const rightSwipe = () => {
        return (
            <Pressable 
                style={styles.rightSwipe} 
                onPress={() => props.deleteList(props.id)}
            >
                <Feather name="trash-2" size={32} color="white" />
            </Pressable>
        );
    };

    return(
        <View style={styles.listContainer}>
            <Swipeable 
                overshootRight={false} 
                renderRightActions={rightSwipe}
            >
                <Pressable 
                    style={styles.itemButton} 
                    onPress={() => props.navigateToListDetails(props.id, props.name)}
                >
                    <Text style={styles.listText}>{props.name}</Text>
                    <View style={{width:'20%', justifyContent:'center', alignItems:'center'}}>
                        <AntDesign name="right" size={24} color="gray" />
                    </View>
                </Pressable>
            </Swipeable>
        </View>
    );
}

export default ListCard;