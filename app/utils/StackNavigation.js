import { createAppContainer, createStackNavigator } from "react-navigation";
import Login from '../screens/Login';
import Employees from "../screens/Employees";


let rootStack = createStackNavigator({
    login: Login,
    employeeList: Employees,
  },
  {
    headerMode: "none",
  });

Navigation = createAppContainer(rootStack);

export default Navigation;