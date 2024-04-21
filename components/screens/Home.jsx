import { FlatList, View } from "react-native";
import { Item } from "../index";

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