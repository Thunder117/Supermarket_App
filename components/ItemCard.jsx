import { Swipeable } from "react-native-gesture-handler";
import { Text, Pressable, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import styles from "./styles";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

const ItemCard = (props) => {

    const rightSwipe = () => {
        return (
            <Pressable 
                style={styles.rightSwipe} 
                onPress={() => props.deleteItem(props.id, props.department)} // Pass department with item ID
            >
                <Feather name="trash-2" size={32} color="white" />
            </Pressable>
        );
    };

    return(
        <View style={styles.itemContainer}>
            <Swipeable 
                overshootRight={false} 
                renderRightActions={rightSwipe}
            >  
                <Pressable 
                    style={styles.itemButton} 
                    onPress={() => {props.checkItem != null && props.checkItem(props.id, props.department)}} // Pass department with item ID
                >
                {props.checked != null &&
                    <View style={{height:'100%', width:'20%', alignItems:'center', justifyContent:'center'}}>
                    { props.checked 
                    ? 
                        <Ionicons name="checkmark-circle" size={28} color="#f39c12" />
                    :
                        <MaterialIcons name="radio-button-unchecked" size={28} color="black" />
                    }
                    </View>
                }
                    <View style={{width:'80%', height:'100%', justifyContent:'center'}}>
                    { props.checked
                    ?
                        <Text style={styles.itemTextCrossed}>
                            { props.name }
                        </Text>
                    :
                        <Text style={styles.itemText}>
                            { props.name }
                        </Text>
                    }
                    </View>
                </Pressable>
            </Swipeable>
        </View>
    );
}

export default ItemCard;