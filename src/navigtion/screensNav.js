import { createStackNavigator } from '@react-navigation/stack';

import BottomNav from './bottomNav';
import SignIn from '../auth/signIn';
import signUp from '../auth/signUp';
import forgotPassword from '../auth/forgotPassword';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Home" component={BottomNav} />
      
      <Stack.Screen name="SignUp" component={signUp} />
      <Stack.Screen name="ForgotPassword" component={forgotPassword} />
    </Stack.Navigator>
  );
}

const Nav = () =>{
    return(<NavigationContainer independent={true}>
        <MyStack></MyStack>
    </NavigationContainer>)
}
export default Nav;