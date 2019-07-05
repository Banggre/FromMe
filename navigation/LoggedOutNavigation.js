import { createStackNavigator, createAppContainer } from 'react-navigation';
import LogInScreen from '../screens/LogInScreen';

// API: createStackNavigator(RouteConfigs, StackNavigatorConfig);
const AppNavigator  = createStackNavigator(
    {
        LogIn: {
            screen: LogInScreen
        },
    },
    {
        initialRouteName: 'LogIn',
        /*  ↓ headerMode가 'none'이니깐 없어도 괜찮지 않을까? (for test)
            defaultNavigationOptions: {
                title: 'LogIn',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerTintColor: '#000000',
                // headerTransparent: true,
            },
        */
        headerMode: 'none'
    }
);

const LoggedOutNavigation = createAppContainer(AppNavigator);

export default LoggedOutNavigation;
