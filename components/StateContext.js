import { createContext, useState } from 'react';

export const ItemsContext = createContext();

export const StateProvider = ({ children }) => {
    const [items, setItems] = useState([
		{
			id: 0,
			name: "🍌 Banana",
			department: "Produce",
			slider: false
		},
		{
			id: 1,
			name: "🍎 Apple",
			department: "Produce",
			slider: false
		},
		{
			id: 2,
			name: "🥒 Cucumber",
			department: "Produce",
			slider: false
		},
		{
			id: 3,
			name: "🫐 Blueberry",
			department: "Produce",
			slider: false
		},
		{
			id: 4,
			name: "🥔 Potato",
			department: "Produce",
			slider: false
		},
		{
			id: 5,
			name: "🍓 Strawberry",
			department: "Produce",
			slider: false
		},
		{
			id: 6,
			name: "🍍 Pineapple",
			department: "Produce",
			slider: false
		},
		{
			id: 7,
			name: "🍊 Orange",
			department: "Produce",
			slider: false
		},
		{
			id: 8,
			name: "🥝 Kiwi",
			department: "Produce",
			slider: false
		},
		{
			id: 9,
			name: "🍋 Lemon",
			department: "Produce",
			slider: false
		},
		{
			id: 10,
			name: "🍅 Tomato",
			department: "Produce",
			slider: false
		},
		{
			id: 11,
			name: "🥑 Avocado",
			department: "Produce",
			slider: false
		},
		{
			id: 12,
			name: "🥬 Lettuce",
			department: "Produce",
			slider: false
		},
		{
			id: 13,
			name: "🥥 Coconut",
			department: "Produce",
			slider: false
		},
		{
			id: 14,
			name: "🍈 Honeydew",
			department: "Produce",
			slider: false
		},
		{
			id: 15,
			name: "🍉 Watermelon",
			department: "Produce",
			slider: false
		},
		{
			id: 16,
			name: "🥭 Mango",
			department: "Produce",
			slider: false
		},

		{
			id: 17,
			name: "🍒 Cherry",
			department: "Produce",
			slider: false
		},
		{
			id: 18,
			name: "🍑 Peach",
			department: "Produce",
			slider: false
		},
		{
			id: 19,
			name: "🍐 Pear",
			department: "Produce",
			slider: false
		},
		{
			id: 20,
			name: "🍏 Green Apple",
			department: "Produce",
			slider: false
		},
		{
			id: 21,
			name: "🌽 Corn",
			department: "Produce",
			slider: false
		},
		{
			id: 22,
			name: "🌶️ Jalapeño",
			department: "Produce",
			slider: false
		},
		{
			id: 23,
			name: "🫑 Green Pepper",
			department: "Produce",
			slider: false
		},
		{
			id: 24,
			name: "🍄 Mushroom",
			department: "Produce",
			slider: false
		},
		{
			id: 25,
			name: "🥦 Broccoli",
			department: "Produce",
			slider: false
		},
		{
			id: 26,
			name: "🥕 Carrot",
			department: "Produce",
			slider: false
		},
		{
			id: 27,
			name: "🧅 Onion",
			department: "Produce",
			slider: false
		},
		{
			id: 28,
			name: "🧄 Garlic",
			department: "Produce",
			slider: false
		},
		{
			id: 29,
			name: "🧀 Mozzarella Cheese",
			department: "Dairy",
			slider: false
		},
		{
			id: 30,
			name: "🥛 Milk",
			department: "Dairy",
			slider: false
		},
		{
			id: 31,
			name: "🍨 Ice Cream",
			department: "Dairy",
			slider: false
		},
		{
			id: 32,
			name: "🥚 Egg",
			department: "Dairy",
			slider: false
		},
		{
			id: 33,
			name: "🧈 Butter",
			department: "Dairy",
			slider: false
		},
	]);
    const [lists, setLists] = useState([
		{
			id: 0,
			name: "Basic food basket",
			items: [
				{ id: 0, checked: false },
				{ id: 1, checked: false }
			],
			slider: false
		},
		{
			id: 1,
			name: "I just got paid",
			items: [
				{ id: 2, checked: false },
				{ id: 3, checked: false },
				{ id: 4, checked: false }
			],
			slider: false
		},
		{
			id: 2,
			name: "Random stuff",
			items: [
				{ id: 22, checked: false },
				{ id: 10, checked: false },
				{ id: 16, checked: false },
				{ id: 18, checked: false },
				{ id: 1, checked: false },
				{ id: 3, checked: false },
				{ id: 17, checked: false },
				{ id: 29, checked: false },
				{ id: 30, checked: false },
				{ id: 31, checked: false }
			],
			slider: false
		}
	]);

    return (
        <ItemsContext.Provider value={{ items, setItems, lists, setLists }}>
            {children}
        </ItemsContext.Provider>
    );
};