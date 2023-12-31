import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Wallet from '../mainScreens/wallet';
import HomeScreen from '../mainScreens/HomeScreen'
import User from '../mainScreens/User';
import Cart from '../component/Home/Cart';
import { Ionicons } from '@expo/vector-icons';
import Notification from '../mainScreens/Notification';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({ headerShown:false ,
      tabBarIcon: ({ focused, size, color }) => {
        let iconName;
        if (route.name == "Home") {
          iconName = focused ? "home" : "home-outline";
        } else if (route.name == "Wallet") {
          iconName = focused ? "ios-wallet" : "ios-wallet-outline";
        } else if (route.name == "User") {
          iconName = focused ? "person" : "person-outline";
        } else if(route.name == "Notification") {
          iconName = focused? "notifications-sharp" : "notifications-outline";
        }
        return <Ionicons name={iconName} size={size} color={color}></Ionicons>
      },
      
    })}>
       <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Wallet" component={Wallet} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name='User' component={User}/>
     
      
      
    </Tab.Navigator>
  );
}

const bottomNav = () =>{
    return(<NavigationContainer independent={true}>
        <MyTabs>
        </MyTabs>
    </NavigationContainer>)
}
export default MyTabs;