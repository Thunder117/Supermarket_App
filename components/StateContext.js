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
        { id: 29, name: "Spinach", department: "Produce" },
        { id: 30, name: "Bell Pepper", department: "Produce" },
        { id: 31, name: "Zucchini", department: "Produce" },
        { id: 32, name: "Eggplant", department: "Produce" },
        { id: 33, name: "Cauliflower", department: "Produce" },
        
        // Dairy
        { id: 34, name: "Mozzarella Cheese", department: "Dairy" },
        { id: 35, name: "Milk", department: "Dairy" },
        { id: 36, name: "Ice Cream", department: "Dairy" },
        { id: 37, name: "Egg", department: "Dairy" },
        { id: 38, name: "Butter", department: "Dairy" },
        { id: 39, name: "Yogurt", department: "Dairy" },
        { id: 40, name: "Cheddar Cheese", department: "Dairy" },
        { id: 41, name: "Sour Cream", department: "Dairy" },
        
        // Bakery
        { id: 42, name: "Bread", department: "Bakery" },
        { id: 43, name: "Croissant", department: "Bakery" },
        { id: 44, name: "Bagel", department: "Bakery" },
        { id: 45, name: "Cake", department: "Bakery" },
        { id: 46, name: "Cookies", department: "Bakery" },
        { id: 47, name: "Muffin", department: "Bakery" },
        { id: 48, name: "Donut", department: "Bakery" },
        { id: 49, name: "Baguette", department: "Bakery" },
        
        // Grocery
        { id: 50, name: "Pasta", department: "Grocery" },
        { id: 51, name: "Rice", department: "Grocery" },
        { id: 52, name: "Tomato Sauce", department: "Grocery" },
        { id: 53, name: "Cereal", department: "Grocery" },
        { id: 54, name: "Oats", department: "Grocery" },
        { id: 55, name: "Canned Beans", department: "Grocery" },
        { id: 56, name: "Canned Tuna", department: "Grocery" },
        { id: 57, name: "Olive Oil", department: "Grocery" },
        { id: 58, name: "Sugar", department: "Grocery" },
        { id: 59, name: "Salt", department: "Grocery" },
        { id: 60, name: "Flour", department: "Grocery" },
        
        // Deli
        { id: 61, name: "Turkey Slices", department: "Deli" },
        { id: 62, name: "Ham", department: "Deli" },
        { id: 63, name: "Salami", department: "Deli" },
        { id: 64, name: "Cheddar Cheese", department: "Deli" },
        { id: 65, name: "Roast Beef", department: "Deli" },
        { id: 66, name: "Prosciutto", department: "Deli" },
        
        // Frozen
        { id: 67, name: "Frozen Peas", department: "Frozen" },
        { id: 68, name: "Frozen Pizza", department: "Frozen" },
        { id: 69, name: "Frozen Fries", department: "Frozen" },
        { id: 70, name: "Frozen Berries", department: "Frozen" },
        { id: 71, name: "Frozen Corn", department: "Frozen" },
        { id: 72, name: "Frozen Chicken Nuggets", department: "Frozen" },
        
        // Meat and Seafood
        { id: 73, name: "Chicken Breast", department: "Meat and Seafood" },
        { id: 74, name: "Salmon", department: "Meat and Seafood" },
        { id: 75, name: "Ground Beef", department: "Meat and Seafood" },
        { id: 76, name: "Shrimp", department: "Meat and Seafood" },
        { id: 77, name: "Bacon", department: "Meat and Seafood" },
        { id: 78, name: "Pork Chops", department: "Meat and Seafood" },
        { id: 79, name: "Tilapia", department: "Meat and Seafood" },
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