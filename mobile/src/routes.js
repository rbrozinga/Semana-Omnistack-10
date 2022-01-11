
import { createStackNavigator } from '@react-navigation/stack';
import { createCompatNavigatorFactory } from '@react-navigation/compat';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createCompatNavigatorFactory(createStackNavigator)(
    {
        Main:{
            screen: Main,
            navigationOptions: {
               title: 'Dev Radar' 
            },    
        },
        Profile: {
            screen: Profile,
            navigationOption: {
                title: 'perfil no Github'
            }
        }
      },
      {
        initialRouteName: 'Main',
        defaultNavigationOptions:{

            headerTintColor:'#fff',
            headerBackTitleVisible: false,
             headerStyle: {
                 backgroundColor: '#7D40e7',
                 
                
             },
        },
    }
);


export default Routes;