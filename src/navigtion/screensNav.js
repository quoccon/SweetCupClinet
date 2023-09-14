import { createStackNavigator } from "@react-navigation/stack";

import BottomNav from "./bottomNav";
import SignIn from "../auth/signIn";
import SignUp from "../auth/signUp";
import ForgotPassword from "../auth/forgotPassword";
import { NavigationContainer } from "@react-navigation/native";
import SearchBar from "../component/Home/SearchBar";
import Cart from "../component/Home/Cart";
import Recharge from "../component/Wallet/Recharge";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="HomeScreen" component={BottomNav} />
      
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Search" component={SearchBar} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Recharge" component={Recharge}/>
    </Stack.Navigator>
  );
}

const Nav = () => {
  return (
    <NavigationContainer independent={true}>
      <MyStack></MyStack>
    </NavigationContainer>
  );
};
export default Nav;
