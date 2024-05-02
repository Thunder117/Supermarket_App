import { createContext, useState } from 'react';

export const ItemsContext = createContext();

export const StateProvider = ({ children }) => {
    const [items, setItems] = useState([
		{
			id: 0,
			name: "Banano 🍌",
			department: "Produce",
			slider: false
		},
		{
			id: 1,
			name: "Manzana 🍎",
			department: "Produce",
			slider: false
		},
		{
			id: 2,
			name: "Pepino 🥒",
			department: "Produce",
			slider: false
		},
		{
			id: 3,
			name: "Huevo 🥚",
			department: "Dairy",
			slider: false
		},
		{
			id: 4,
			name: "Papa 🥔",
			department: "Produce",
			slider: false
		}
	]);
    const [lists, setLists] = useState([
        {
            id: 0,
            name: "Basic food basket",
            items: [ 0, 1 ],
            slider: false
        },
        {
            id: 1,
            name: "I just got paid",
            items: [ 2, 3, 4 ],
            slider: false
        }
    ]);

    return (
        <ItemsContext.Provider value={{ items, setItems, lists, setLists }}>
            {children}
        </ItemsContext.Provider>
    );
};