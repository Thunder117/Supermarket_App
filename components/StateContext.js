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
			name: "Mora azul 🫐",
			department: "Produce",
			slider: false
		},
		{
			id: 4,
			name: "Papa 🥔",
			department: "Produce",
			slider: false
		},
		{
			id: 5,
			name: "Fresa 🍓",
			department: "Produce",
			slider: false
		},
		{
			id: 6,
			name: "Piña 🍍",
			department: "Produce",
			slider: false
		},
		{
			id: 7,
			name: "Naranja 🍊",
			department: "Produce",
			slider: false
		},
		{
			id: 8,
			name: "Kiwi 🥝",
			department: "Produce",
			slider: false
		},
		{
			id: 9,
			name: "Limon 🍋",
			department: "Produce",
			slider: false
		},
		{
			id: 10,
			name: "Tomate 🍅",
			department: "Produce",
			slider: false
		},
		{
			id: 11,
			name: "Aguacate 🥑",
			department: "Produce",
			slider: false
		},
		{
			id: 12,
			name: "Lechuga 🥬",
			department: "Produce",
			slider: false
		},
		{
			id: 13,
			name: "Coco 🥥",
			department: "Produce",
			slider: false
		},
		{
			id: 14,
			name: "Melon 🍈",
			department: "Produce",
			slider: false
		},
		{
			id: 15,
			name: "Sandia 🍉",
			department: "Produce",
			slider: false
		},
		{
			id: 16,
			name: "Mango 🥭",
			department: "Produce",
			slider: false
		},

		{
			id: 17,
			name: "Cereza 🍒",
			department: "Produce",
			slider: false
		},
		{
			id: 18,
			name: "Durazno 🍑",
			department: "Produce",
			slider: false
		},
		{
			id: 19,
			name: "Pera 🍐",
			department: "Produce",
			slider: false
		},
		{
			id: 20,
			name: "Manzana verde 🍏",
			department: "Produce",
			slider: false
		},
		{
			id: 21,
			name: "Elote 🌽",
			department: "Produce",
			slider: false
		},
		{
			id: 22,
			name: "Jalapeño 🌶️",
			department: "Produce",
			slider: false
		},
		{
			id: 23,
			name: "Pimenton 🫑",
			department: "Produce",
			slider: false
		},
		{
			id: 24,
			name: "Champiñones 🍄",
			department: "Produce",
			slider: false
		},
		{
			id: 25,
			name: "Broccoli 🥦",
			department: "Produce",
			slider: false
		},
		{
			id: 26,
			name: "Zanahoria 🥕",
			department: "Produce",
			slider: false
		},
		{
			id: 27,
			name: "Cebolla 🧅",
			department: "Produce",
			slider: false
		},
		{
			id: 28,
			name: "Ajo 🧄",
			department: "Produce",
			slider: false
		},
		{
			id: 29,
			name: "Queso 🧀",
			department: "Dairy",
			slider: false
		},
		{
			id: 30,
			name: "Leche 🥛",
			department: "Dairy",
			slider: false
		},
		{
			id: 31,
			name: "Helado 🍨",
			department: "Dairy",
			slider: false
		},
		{
			id: 32,
			name: "Huevo 🥚",
			department: "Dairy",
			slider: false
		},
		{
			id: 33,
			name: "Mantequilla 🧈",
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
				{ id: 21, checked: false },
				{ id: 25, checked: false },
				{ id: 26, checked: false }
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