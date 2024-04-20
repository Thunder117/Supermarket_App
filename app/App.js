import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home  from '../components/Home.jsx';

const Stack = createNativeStackNavigator();

const App = () => {


	return (
		<NavigationContainer independent={true}>
			<Stack.Navigator>
				<Stack.Screen 
                    name="Home" 
                    component={Home}
                />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;