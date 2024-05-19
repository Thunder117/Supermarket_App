import React, { useState, useEffect, useContext } from "react";
import { View, ScrollView, TextInput } from "react-native";
import { useRoute, useNavigation } from '@react-navigation/native';
import { ItemsContext } from '../StateContext';
import { ItemCard } from "../index";
import { Ionicons } from '@expo/vector-icons';
import styles from "../styles"; 

const ListDetails = () => {
    const route = useRoute(); 
    const navigation = useNavigation();
    const { listId, listName } = route.params;
    const { items, lists, setLists } = useContext(ItemsContext);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        navigation.setOptions({ headerTitle: listName });
    }, []);

    const checkItem = (itemId) => {
        setLists(prevLists => {
            return prevLists.map(list => {
                if (list.id === listId) { // Only update the current list
                    const updatedItems = list.items.map(item => {
                        if (item.id === itemId) {
                            return { ...item, checked: !item.checked };
                        }
                        return item;
                    });
                    return { ...list, items: updatedItems };
                }
                return list;
            });
        });
    };

    const deleteItem = (itemIdToDelete) => {
        const newLists = lists.map((list) => {
            if (list.id === listId) {
                const updatedItems = list.items.filter((item) => item.id !== itemIdToDelete);
                return { ...list, items: updatedItems };
            }
            return list;
        });
        setLists(newLists);
    };
    
    const sliderOpened = (itemId) => {
        // Later implementation
    };

    // Filter items based on searchQuery
    const filteredItems = lists[listId].items.filter(item => {
        const itemName = items[item.id].name.toLowerCase();
        return itemName.includes(searchQuery.toLowerCase());
    });

    return (
        <ScrollView style={{backgroundColor:'#EFF2F6'}}>
            <View style={{marginTop:10, marginBottom:10}}>
                <View style={{
                    backgroundColor:"white",
                    width:"90%",
                    height:60,
                    alignSelf:'center', 
                    justifyContent:'center', 
                    borderRadius:50, 
                    paddingLeft:30,
                    paddingRight:10,
                    marginTop:10,
                    marginBottom:10,   
                    flexDirection: "row"
                }}>
                    <TextInput 
                        placeholder={"Search..."} 
                        maxLength={20} 
                        style={{ fontSize:20,height:'100%', width:'85%',}}
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                    <Ionicons name="search" size={32} color="gray" style={{ alignSelf:'center' }}/>
                </View>
                
                <View>
                    { filteredItems.map((item) => (
                        <ItemCard 
                            id={item.id}
                            name={items[item.id].name}
                            department={items[item.id].department}
                            checked={item.checked}
                            checkItem={checkItem}
                            deleteItem={deleteItem}
                            sliderOpened={sliderOpened} 
                            key={item.id}
                        />
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}

export default ListDetails;
