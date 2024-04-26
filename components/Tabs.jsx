import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import Home from "./screens/Home";
import Lists from "./screens/Lists";

// Screen names
const homeName = "Home";
const listsName = "Lists"

const Tab = createBottomTabNavigator();

function Tabs() {

    return (
        <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarStyle: { 
                    height: 70,
                    paddingBottom:10,
                    padding: 10
                },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;
                    if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (rn === listsName) {
                        iconName = focused ? 'list' : 'list-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>
                },
            })}
            
        >
            <Tab.Screen name={homeName} component={Home} />
            <Tab.Screen name={listsName} component={Lists} />
        </Tab.Navigator>
    );
}

export default Tabs;