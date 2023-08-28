import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../mainScreens/HomeScreen';
import wallet from '../mainScreens/wallet';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Wallet" component={wallet} />
      
    </Tab.Navigator>
  );
}

const bottomNav = () =>{
    return(<NavigationContainer independent={true}>
        <MyTabs>
        </MyTabs>
    </NavigationContainer>)
}
export default bottomNav;