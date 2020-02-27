import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
// // import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';

//Auth Import
import Main from '../Components/Auth/Main';
import SignIn from '../Components/Auth/SignIn';
import ResetPassword from '../Components/Auth/ResetPassword';
import ForgetPasswordPin from '../Components/Auth/ForgetPasswordPin';
import ForgetPasswordByEmail from '../Components/Auth/ForgetPassByEmail';
import SignUp from '../Components/Auth/Signup';
//common Header
import Header from '../Components/Common/Header';
//Home Import
import Home from '../Components/App/Home';
//Setting PRofile
import Profiles from '../Components/App/Setting/Profile';
//Shifts
import Shift from '../Components/App/Shifts';
//Offline screen
import Offline from '../Components/App/Offline/Offline';
//Drawer
import Draweer from '../Components/App/Drawer/CustomDrawer';
//Chat
import DriverChat from '../Components/App/Chat/DriverChat';
import PreviousChat from '../Components/App/Chat/PerViousDriverChat';
const AuthStack = createStackNavigator({
  Maina: {
    screen: Main,
    navigationOptions: {
      header: null,
    },
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      header: null,
    },
  },
  // Landing: {
  //   screen: Example,
  //   navigationOptions: {
  //     headerTitle: 'Landing',
  //   },
  // },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      header: null,
    },
  },
  // CreateAccount: {
  //   screen: Example,
  //   navigationOptions: {
  //     headerTitle: 'Create Account',
  //   },
  // },

  ForgetPasswordByEmail: {
    screen: ForgetPasswordByEmail,
    navigationOptions: {
      header: null,
    },
  },
  ResetPassword: {
    screen: ResetPassword,
    navigationOptions: {
      header: null,
    },
  },
  ForgetPasswordPin: {
    screen: ForgetPasswordPin,
    navigationOptions: {
      header: null,
    },
  },
});

const MainTabs = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: <Header name="25$" />,
    },
  },
  Profile: {
    screen: Profiles,
    navigationOptions: {
      header: null,
    },
  },
  Shifts: {
    screen: Shift,
    navigationOptions: {
      header: null,
    },
  },
  Offline: {
    screen: Offline,
    navigationOptions: {
      header: null,
    },
  },
  DriverChat: {
    screen: DriverChat,
    navigationOptions: {
      header: null,
    },
  },
  PreviousChat: {
    screen: PreviousChat,
    navigationOptions: {
      header: null,
    },
  },
});
// const SettingsStack = createStackNavigator({
// });
const Drawer = createDrawerNavigator(
  {
    Drawer: {
      screen: MainTabs,
    },
  },
  {
    contentComponent: props => <Draweer {...props} />,
  },
);
const App = createSwitchNavigator({
  // Loading: {
  //   screen: Example,
  // },
  Auth: {
    screen: AuthStack,
  },
  App: {
    screen: Drawer,
  },
});
export default createAppContainer(App);
