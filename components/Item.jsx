import { Swipeable } from "react-native-gesture-handler";
import { Text, Pressable, Button, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import styles from "./styles";

const Item = (props) => {

    const rightSwipe = () => {
        return (
            <Pressable style={{width:'30%', alignItems:'center', justifyContent:'center', height:'100%', marginLeft:'-10%', borderTopRightRadius:20, borderBottomRightRadius:20, marginRight:'5%', backgroundColor:'#f93737'}}>
                <Feather name="trash-2" size={32} color="white" />
            </Pressable>
        );
    };

    return(
        <View style={styles.itemContainer}>

            <Swipeable overshootRight={false} renderRightActions={rightSwipe}>
                <Pressable style={styles.itemButton} onPress={() => { console.log('pressed') }}>
                    <Text style={styles.itemText}>{props.item}</Text>
                </Pressable>
            </Swipeable>

        </View>
    );
}

export default Item;