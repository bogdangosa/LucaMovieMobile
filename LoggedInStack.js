import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./app/screens/LoginScreen";
import SignUpScreen from "./app/screens/SignUpScreen";
import ForgotPasswordScreen from "./app/screens/ForgotPasswordScreen";
import HomeScreen from "./app/screens/HomeScreen";
import AccountScreen from "./app/screens/AccountScreen";


const Stack = createNativeStackNavigator();

function AuthStack() {
    return (
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
          <Stack.Screen options={{headerShown: false}} name="Account" component={AccountScreen} />
        </Stack.Navigator>
    );
  }

export default AuthStack;