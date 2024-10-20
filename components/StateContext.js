import { createContext, useState } from 'react';

export const ItemsContext = createContext();

export const StateProvider = ({ children }) => {
    const [items, setItems] = useState([
        // Produce
        { id: 0, name: "Banana", department: "Produce" },
        { id: 1, name: "Apple", department: "Produce" },
        { id: 2, name: "Cucumber", department: "Produce" },
        { id: 3, name: "Blueberry", department: "Produce" },
        { id: 4, name: "Potato", department: "Produce" },
        { id: 5, name: "Strawberry", department: "Produce" },
        { id: 6, name: "Pineapple", department: "Produce" },
        { id: 7, name: "Orange", department: "Produce" },
        { id: 8, name: "Kiwi", department: "Produce" },
        { id: 9, name: "Lemon", department: "Produce" },
        { id: 10, name: "Tomato", department: "Produce" },
        { id: 11, name: "Avocado", department: "Produce" },
        { id: 12, name: "Lettuce", department: "Produce" },
        { id: 13, name: "Coconut", department: "Produce" },
        { id: 14, name: "Honeydew", department: "Produce" },
        { id: 15, name: "Watermelon", department: "Produce" },
        { id: 16, name: "Mango", department: "Produce" },
        { id: 17, name: "Cherry", department: "Produce" },
        { id: 18, name: "Peach", department: "Produce" },
        { id: 19, name: "Pear", department: "Produce" },
        { id: 20, name: "Green Apple", department: "Produce" },
        { id: 21, name: "Corn", department: "Produce" },
        { id: 22, name: "Jalapeño", department: "Produce" },
        { id: 23, name: "Green Pepper", department: "Produce" },
        { id: 24, name: "Mushroom", department: "Produce" },
        { id: 25, name: "Broccoli", department: "Produce" },
        { id: 26, name: "Carrot", department: "Produce" },
        { id: 27, name: "Onion", department: "Produce" },
        { id: 28, name: "Garlic", department: "Produce" },
        // Dairy
        { id: 29, name: "Mozzarella Cheese", department: "Dairy" },
        { id: 30, name: "Milk", department: "Dairy" },
        { id: 31, name: "Ice Cream", department: "Dairy" },
        { id: 32, name: "Egg", department: "Dairy" },
        { id: 33, name: "Butter", department: "Dairy" },
        // Bakery
        { id: 34, name: "Bread", department: "Bakery" },
        { id: 35, name: "Croissant", department: "Bakery" },
        { id: 36, name: "Bagel", department: "Bakery" },
        { id: 37, name: "Cake", department: "Bakery" },
        { id: 38, name: "Cookies", department: "Bakery" },
        // Grocery
        { id: 39, name: "Pasta", department: "Grocery" },
        { id: 40, name: "Rice", department: "Grocery" },
        { id: 41, name: "Tomato Sauce", department: "Grocery" },
        { id: 42, name: "Cereal", department: "Grocery" },
        { id: 43, name: "Oats", department: "Grocery" },
        // Deli
        { id: 44, name: "Turkey Slices", department: "Deli" },
        { id: 45, name: "Ham", department: "Deli" },
        { id: 46, name: "Salami", department: "Deli" },
        { id: 47, name: "Cheddar Cheese", department: "Deli" },
        { id: 48, name: "Roast Beef", department: "Deli" },
        // Frozen
        { id: 49, name: "Frozen Peas", department: "Frozen" },
        { id: 50, name: "Frozen Pizza", department: "Frozen" },
        { id: 51, name: "Frozen Fries", department: "Frozen" },
        { id: 52, name: "Ice Cream", department: "Frozen" },
        // Meat and Seafood
        { id: 53, name: "Chicken Breast", department: "Meat and Seafood" },
        { id: 54, name: "Salmon", department: "Meat and Seafood" },
        { id: 55, name: "Ground Beef", department: "Meat and Seafood" },
        { id: 56, name: "Shrimp", department: "Meat and Seafood" },
        { id: 57, name: "Bacon", department: "Meat and Seafood" },
    ]);

    const [lists, setLists] = useState([
        {
            id: 0,
            name: "Basic food basket",
            items: [
                { id: 0, name: "Banana", checked: false },
                { id: 1, name: "Apple", checked: false },
                { id: 2, name: "Cucumber", checked: false }
            ]
        },
        {
            id: 1,
            name: "I just got paid",
            items: [
                { id: 0, name: "Banana", checked: false },
                { id: 1, name: "Apple", checked: false },
                { id: 2, name: "Cucumber", checked: false },
                { id: 26, name: "Carrot", checked: false },
                { id: 27, name: "Onion", checked: false },
                { id: 28, name: "Garlic", checked: false },
                { id: 29, name: "Mozzarella Cheese", checked: false },
                { id: 30, name: "Milk", checked: false },
                { id: 31, name: "Ice Cream", checked: false },
                { id: 32, name: "Egg", checked: false },
                { id: 33, name: "Butter", checked: false },
            ]
        }
    ]);

    return (
        <ItemsContext.Provider value={{ items, setItems, lists, setLists }}>
            {children}
        </ItemsContext.Provider>
    );
};