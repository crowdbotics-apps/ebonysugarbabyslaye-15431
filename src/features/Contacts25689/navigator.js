import { createStackNavigator } from "react-navigation-stack";

import Contacts from "./screens/contacts";
import Home from "./screens";

export default ContactsBlueprintNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Contacts: { screen: Contacts },
  },
  {
    initialRouteName: "Home"
  }
);
