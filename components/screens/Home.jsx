import { useContext, useState } from "react";
import { View, ScrollView } from "react-native";
import { ItemsContext } from '../StateContext';
import { Items, SearchBar } from "../index";

const Home = () => {
    const { items, setItems, lists, setLists } = useContext(ItemsContext);  // Also getting lists and setLists to update the lists
    const [searchQuery, setSearchQuery] = useState('');

    // Define departments in a specific order, if needed
    const DEPARTMENT_ORDER = ["Produce", "Dairy", "Bakery", "Grocery", "Deli", "Frozen", "Meat and Seafood"];

    // Group items by department
    const groupedItems = {};
    DEPARTMENT_ORDER.forEach(department => {
        groupedItems[department] = items.filter(item => {
            const itemName = item.name.toLowerCase();
            return item.department === department && itemName.includes(searchQuery.toLowerCase());
        });
    });

    // Function to delete item
    const deleteItem = (itemIdToDelete) => {
        // Step 1: Remove item from items context
        const newItems = items.filter(item => item.id !== itemIdToDelete);
        setItems(newItems);

        // Step 2: Remove item from any list that contains it
        const updatedLists = lists.map(list => {
            const updatedItems = list.items.filter(item => item.id !== itemIdToDelete);
            return { ...list, items: updatedItems };
        });
        setLists(updatedLists);
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            {/* Search Bar to filter items */}
            <SearchBar
                value={searchQuery}
                onChangeText={setSearchQuery}
            />

            <ScrollView>
                <View style={{ marginTop: 10, marginBottom: 10 }}>
                    {DEPARTMENT_ORDER.map(department => {
                        const itemsInDepartment = groupedItems[department];
                        if (itemsInDepartment.length === 0) return null;

                        return (
                            <Items
                                key={department}
                                department={department}
                                itemsInDepartment={itemsInDepartment}
                                items={items}  // Pass the full items array for lookups
                                deleteItem={deleteItem}  // Pass deleteItem function to Items component
                            />
                        );
                    })}
                </View>
            </ScrollView>
        </View>
    );
}

export default Home;