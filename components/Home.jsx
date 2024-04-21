import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons';

const Home = () => {
    const data = [
        {
            name: "Bananas"
        },
        {
            name: "Manzanas"
        }
    ];

    const rightSwipe = () => {
        return (
            
            <TouchableOpacity style={{width:'30%', alignItems:'center', justifyContent:'center', height:'100%', borderRadius:30}}>
                <Feather name="trash-2" size={32} color="white" />
            </TouchableOpacity>
                 
        );
    };

    const Item = (props) => {

        return(
            <View style={{width:"100%", height:80, marginTop:10, backgroundColor:'#f93737', borderRadius:30}}>

                <Swipeable renderRightActions={rightSwipe}>
                    <View style={{backgroundColor:"#f5f5f6", width:"100%", borderRadius:30,  height:'100%', alignSelf:'center', justifyContent:"center", alignItems:"center"}}>
                        <Text style={{fontSize:20}}>{props.item}</Text>
                    </View>
                </Swipeable>

            </View>
        );
    }

    return(
            <View style={{flex: 1, backgroundColor:'white'}}>
                <FlatList
                    data={data}
                    renderItem={({item, index}) => {
                        return <Item item={item.name} index={index} />;
                    }}
                />
            </View>
    );
}

export default Home;