import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import wallet from '../mainScreens/wallet';
import HomeScreen from '../mainScreens/HomeScreen'
import User from '../mainScreens/User';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
       <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Wallet" component={wallet} />
      <Tab.Screen name='Profile' component={User}/>
      
      
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