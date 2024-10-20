import { createContext, useState } from 'react';

export const ItemsContext = createContext();

export const StateProvider = ({ children }) => {
    const [items, setItems] = useState([
		{
			id: 0,
			name: "Banana",
			department: "Produce",
		},
		{
			id: 1,
			name: "Apple",
			department: "Produce",
		},
		{
			id: 2,
			name: "Cucumber",
			department: "Produce",
		},
		{
			id: 3,
			name: "Blueberry",
			department: "Produce",
		},
		{
			id: 4,
			name: "Potato",
			department: "Produce",
		},
		{
			id: 5,
			name: "Strawberry",
			department: "Produce",
		},
		{
			id: 6,
			name: "Pineapple",
			department: "Produce",
		},
		{
			id: 7,
			name: "Orange",
			department: "Produce",
		},
		{
			id: 8,
			name: "Kiwi",
			department: "Produce",
		},
		{
			id: 9,
			name: "Lemon",
			department: "Produce",
		},
		{
			id: 10,
			name: "Tomato",
			department: "Produce",
		},
		{
			id: 11,
			name: "Avocado",
			department: "Produce",
		},
		{
			id: 12,
			name: "Lettuce",
			department: "Produce",
		},
		{
			id: 13,
			name: "Coconut",
			department: "Produce",
		},
		{
			id: 14,
			name: "Honeydew",
			department: "Produce",
		},
		{
			id: 15,
			name: "Watermelon",
			department: "Produce",
		},
		{
			id: 16,
			name: "Mango",
			department: "Produce",
		},

		{
			id: 17,
			name: "Cherry",
			department: "Produce",
		},
		{
			id: 18,
			name: "Peach",
			department: "Produce",
		},
		{
			id: 19,
			name: "Pear",
			department: "Produce",
		},
		{
			id: 20,
			name: "Green Apple",
			department: "Produce",
		},
		{
			id: 21,
			name: "Corn",
			department: "Produce",
		},
		{
			id: 22,
			name: "Jalapeño",
			department: "Produce",
		},
		{
			id: 23,
			name: "Green Pepper",
			department: "Produce",
		},
		{
			id: 24,
			name: "Mushroom",
			department: "Produce",
		},
		{
			id: 25,
			name: "Broccoli",
			department: "Produce",
		},
		{
			id: 26,
			name: "Carrot",
			department: "Produce",
		},
		{
			id: 27,
			name: "Onion",
			department: "Produce",
		},
		{
			id: 28,
			name: "Garlic",
			department: "Produce",
		},
		{
			id: 29,
			name: "Mozzarella Cheese",
			department: "Dairy",
		},
		{
			id: 30,
			name: "Milk",
			department: "Dairy",
		},
		{
			id: 31,
			name: "Ice Cream",
			department: "Dairy",
		},
		{
			id: 32,
			name: "Egg",
			department: "Dairy",
		},
		{
			id: 33,
			name: "Butter",
			department: "Dairy",
		},
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