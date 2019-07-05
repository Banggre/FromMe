import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import CommentScreen from '../screens/CommentScreen';
import QuestionScreen from '../screens/QuestionScreen';
import QuestionScreen2 from '../screens/QuestionScreen2';

// API: createStackNavigator(RouteConfigs, StackNavigatorConfig);
const AppNavigator  = createStackNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        Comment: {
            screen: CommentScreen
        },
        Question: {
            screen: QuestionScreen
        },
        Question2: {
            screen: QuestionScreen2
        }
    },
    {
        initialRouteName: 'Home',
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
