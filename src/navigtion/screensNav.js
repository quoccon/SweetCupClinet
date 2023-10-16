import { createStackNavigator } from "@react-navigation/stack";

import BottomNav from "./bottomNav";
import SignIn from "../auth/signIn";
import SignUp from "../auth/signUp";
import ForgotPassword from "../auth/forgotPassword";
import { NavigationContainer } from "@react-navigation/native";
import SearchBar from "../component/Home/SearchBar";
import Cart from "../component/Home/Cart";
import Recharge from "../component/Wallet/Recharge";
import MyInfo from "../component/User/MyInfo";
import AdressMap from "../component/User/AddressMap";
import Address from "../component/User/Address";
import Notification from "../mainScreens/Notification";
import Pay from "../component/Home/Pay";
import AddBank from "../component/Wallet/AddBank";
import DepositSuccessful from "../component/Wallet/DepositSuccessful";
import DepositFailed from "../component/Wallet/DepositFailed";

import PaySuccful from "../component/Home/PaySuccful";
import Member from "../component/User/Member";
import MyWishlist from "../component/User/MyWishlist";
import AboutCompany from "../component/User/AboutCompany";




// import Member from "../component/User/Member";
// import MyWishlist from "../component/User/MyWishlist";
// import AboutCompany from "../component/User/AboutCompany";



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
      <Stack.Screen name="MyInfo" component={MyInfo}/>
      <Stack.Screen name = "Address" component={Address}/>
      <Stack.Screen name="AdressMap" component={AdressMap}/>
      <Stack.Screen name="Notification" component={Notification}/>
      <Stack.Screen name="Pay" component={Pay}/>
      <Stack.Screen name="AddBank" component={AddBank}/>
      <Stack.Screen name="DepositSuccessful" component={DepositSuccessful}/>
      <Stack.Screen name="DepositFailed" component={DepositFailed}/>

      <Stack.Screen name="PaySuccful" component={PaySuccful}/>


      <Stack.Screen name="Member"  component={Member}/>
      <Stack.Screen name="MyWishlist" component={MyWishlist}/>
      <Stack.Screen name="AboutCompany" component={AboutCompany}/>


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
