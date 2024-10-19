import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StateProvider } from './StateContext';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import Home from "./screens/Home";
import Lists from "./screens/Lists";
import ListDetails from "./screens/ListDetails";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ListsStack = createStackNavigator();

const Tabs = () => {
    return (
        <StateProvider>
            <Tab.Navigator 
                initialRouteName="Lists"
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
                    headerShown: false,
                    tabBarActiveTintColor: '#ffffff', // White color for active icons
                    tabBarInactiveTintColor: '#cce6ff', // Light blue for inactive icons
                    tabBarStyle: {
                        backgroundColor: '#3498db', // Blue background for the tab bar
                        borderTopWidth: 0, // Remove top border
                        height: 60, // Increase the height of the tab bar (optional)
                        borderTopLeftRadius: 30, // Rounded corners
                        borderTopRightRadius: 30, // Rounded corners
                        overflow: 'hidden', // Ensures the corners are visible
                        position: 'absolute', // To adjust position
                        bottom: 0,
                    },
                    tabBarLabelStyle: {
                        fontSize: 12, // Adjust label size (optional)
                    },
                })}
            >
                <Tab.Screen name="Home" component={HomeStackScreen} />
                <Tab.Screen name="Lists" component={ListsStackScreen} />
            </Tab.Navigator>
        </StateProvider>
    );
};

const HomeStackScreen = () => (
    <HomeStack.Navigator 
        screenOptions={{
            headerTitleStyle: {
                fontFamily: 'OpenSans-SemiBold', // Change to your desired font
                fontSize: 24, // Adjust font size as needed
                color: '#000', // Change color if necessary
            },
        }}
    >
        <HomeStack.Screen name="HomeScreen" component={Home} />
        <HomeStack.Screen name="HomeDetails" component={ListDetails} />
    </HomeStack.Navigator>
);

const ListsStackScreen = () => (
    <ListsStack.Navigator 
        screenOptions={{
            headerTitleStyle: {
                fontFamily: 'OpenSans-SemiBold', // Change to your desired font
                fontSize: 24, // Adjust font size as needed
                color: '#000', // Change color if necessary
            },
        }}
    >
        <ListsStack.Screen 
            name="ListsScreen" 
            component={Lists} 
            options={{ title: 'Shopping lists' }} // Set your custom title here
        />
        <ListsStack.Screen 
            name="ListDetails" 
            component={ListDetails} 
        />
    </ListsStack.Navigator>
);

export default Tabs;