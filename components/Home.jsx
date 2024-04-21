import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons';

const Home = () => {
    const data = [
        {
            name: "Banano"
        },
        {
            name: "Manzana"
        },
        {
            name: "Pepino"
        }
    ];

    const rightSwipe = () => {
        return (
            
            <TouchableOpacity style={{width:'35%', alignItems:'center', justifyContent:'center', height:'100%', marginLeft:-35, borderTopRightRadius:20, borderBottomRightRadius:20, marginRight:20, backgroundColor:'#f93737'}}>
                <Feather name="trash-2" size={32} color="white" />
            </TouchableOpacity>
                 
        );
    };

    const Item = (props) => {

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

/*
<View style={{width:"90%", height:'100%', marginTop:10, backgroundColor:'#f93737', borderRadius:50, alignSelf:'center'}}/>
*/
export default Home;