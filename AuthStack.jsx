import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./app/screens/LoginScreen";
import SignUpScreen from "./app/screens/SignUpScreen";
import ForgotPasswordScreen from "./app/screens/ForgotPasswordScreen";


const Stack = createNativeStackNavigator();

function AuthStack() {
    return (
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
          <Stack.Screen options={{headerShown: false}} name="SignUp" component={SignUpScreen} />
          <Stack.Screen options={{headerShown: false}} name="ForgotPassword" component={ForgotPasswordScreen} />
        </Stack.Navigator>
    );
  }

export default AuthStack;