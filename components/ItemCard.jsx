import { Swipeable } from "react-native-gesture-handler";
import { Text, Pressable, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import styles from "./styles";

const Item = (props) => {

    const rightSwipe = () => {
        return (
            <Pressable style={styles.rightSwipe} onPress={() => props.deleteItem(props.id) }>
                <Feather name="trash-2" size={32} color="white" />
            </Pressable>
        );
    };

    return(
        <View style={styles.itemContainer}>
            <View style={{flex:7}}>
                <Swipeable 
                    onSwipeableClose={() => props.sliderOpened(props.id)} 
                    onSwipeableOpen={() => props.sliderOpened(props.id) } 
                    overshootRight={false} 
                    renderRightActions={rightSwipe}
                >
                    <View style={styles.itemButton}>
                        <Text style={styles.itemText}>
                            {props.name}
                        </Text>
                    </View>
                    
                </Swipeable>
            </View>

            <Pressable style={{flex:2, height:'100%', marginLeft:'-5%', marginRight:'5%', alignItems:'center', justifyContent:'center', }} onPress={() => props.checkItem(props.id)}>
                { props.checked 
                ? 
                    <AntDesign name="checkcircle" size={32} color="green" />
                :
                    <AntDesign name="checkcircleo" size={32} color="green" />
                }
            </Pressable>

        </View>
    );
}

export default Item;