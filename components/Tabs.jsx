import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StateProvider } from './StateContext';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import Home from "./screens/Home";
import Lists from "./screens/Lists";
import Details from "./screens/ListDetails";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ListsStack = createStackNavigator();

const Tabs = () => {
	
	
  	return (
		<StateProvider>
			<Tab.Navigator 
				initialRouteName="Home"
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;

						if (route.name === 'Home') {
							iconName = focused ? 'home' : 'home-outline';
						} else if (route.name === 'Lists') {
							iconName = focused ? 'list' : 'list-outline';
						}

						return <Ionicons name={iconName} size={size} color={color} />;
					},
					headerShown: false
				})}
			>

				<Tab.Screen name="Home" component={HomeStackScreen} />
				<Tab.Screen name="Lists" component={ListsStackScreen} />

			</Tab.Navigator>
		</StateProvider>
  	);
};

const HomeStackScreen = () => (
	<HomeStack.Navigator>
		<HomeStack.Screen name="HomeScreen" component={Home}
		/>
		<HomeStack.Screen name="HomeDetails" component={Details} />
	</HomeStack.Navigator>
);
  
const ListsStackScreen = () => (
	<ListsStack.Navigator>
		<ListsStack.Screen name="ListsScreen" component={Lists} />
		<ListsStack.Screen name="ListDetails" component={Details} />
	</ListsStack.Navigator>
);

export default Tabs;