import { useContext, useState, useEffect, useRef } from "react";
import { View, ScrollView, Animated } from "react-native";
import { ItemsContext } from '../StateContext';
import { Items, SearchBar, FloatingButton, CreateItemModal } from "../index";

const Home = () => {
    const { items, setItems, lists, setLists } = useContext(ItemsContext);
    const [modalVisible, setModalVisible] = useState(false); 
    const [searchQuery, setSearchQuery] = useState('');
    const [isButtonVisible, setIsButtonVisible] = useState(true);
    const scrollViewRef = useRef(null);
    const buttonOpacity = useRef(new Animated.Value(1)).current;
    const DEPARTMENT_ORDER = ["Produce", "Dairy", "Bakery", "Grocery", "Deli", "Frozen", "Meat and Seafood"];

    useEffect(() => {
        Animated.timing(buttonOpacity, {
            toValue: isButtonVisible ? 1 : 0,
            duration: 200,
            useNativeDriver: true,
        }).start();
    }, [isButtonVisible]);

    const handleScroll = (event) => {
        const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
        const distanceToEnd = contentSize.height - layoutMeasurement.height - contentOffset.y;
        setIsButtonVisible(distanceToEnd > 10);
    };

    const groupedItems = {};
    DEPARTMENT_ORDER.forEach(department => {
        groupedItems[department] = items.filter(item => {
            const itemName = item.name.toLowerCase();
            return item.department === department && itemName.includes(searchQuery.toLowerCase());
        });
    });

    const deleteItem = (itemIdToDelete) => {
        const newItems = items.filter(item => item.id !== itemIdToDelete);
        setItems(newItems);

        const updatedLists = lists.map(list => {
            const updatedItems = list.items.filter(item => item.id !== itemIdToDelete);
            return { ...list, items: updatedItems };
        });
        setLists(updatedLists);
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <SearchBar
                value={searchQuery}
                onChangeText={setSearchQuery}
            />

            <ScrollView ref={scrollViewRef} onScroll={handleScroll}>
                <View style={{ marginTop: 20, marginBottom: 80 }}>
                    {DEPARTMENT_ORDER.map(department => {
                        const itemsInDepartment = groupedItems[department];
                        if (itemsInDepartment.length === 0) return null;

                        return (
                            <Items
                                key={department}
                                department={department}
                                itemsInDepartment={itemsInDepartment}
                                items={items}
                                deleteItem={deleteItem}
                            />
                        );
                    })}
                </View>
            </ScrollView>

            <FloatingButton 
                toggleModal={() => setModalVisible(true)} 
                buttonOpacity={buttonOpacity} 
                isVisible={isButtonVisible}
            />

            <CreateItemModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                items={items}
                setItems={setItems}
                DEPARTMENT_ORDER={DEPARTMENT_ORDER} // Pass the department order
            />
        </View>
    );
};

export default Home;