import { Swipeable } from "react-native-gesture-handler";
import { Text, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons';

const Item = (props) => {

    const rightSwipe = () => {
        return (
            <TouchableOpacity style={{width:'30%', alignItems:'center', justifyContent:'center', height:'100%', marginLeft:'-10%', borderTopRightRadius:20, borderBottomRightRadius:20, marginRight:'5%', backgroundColor:'#f93737'}}>
                <Feather name="trash-2" size={32} color="white" />
            </TouchableOpacity>
        );
    };

    return(
        <View style={{width:'100%', height:80, marginTop:10}}>

            <Swipeable overshootRight={false} renderRightActions={rightSwipe}>
                <View style={{backgroundColor:"#f5f5f6", width:"90%", borderRadius:20,  height:'100%', alignSelf:'center', justifyContent:"center", alignItems:"center"}}>
                    <Text style={{fontSize:20, fontWeight:'500'}}>{props.item}</Text>
                </View>
            </Swipeable>

        </View>
    );
}

export default Item;