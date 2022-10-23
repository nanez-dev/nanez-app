import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from '../screens/LoginPage/LoginPage';
import RegisterPage from '../screens/RegisterPage/RegisterPage';

const Nav = createNativeStackNavigator();

const Auth = () => {
  return (
    <Nav.Navigator>
      <Nav.Screen name="Login" component={LoginPage} />
      <Nav.Screen name="Register" component={RegisterPage} />
    </Nav.Navigator>
  );
};

export default Auth;
