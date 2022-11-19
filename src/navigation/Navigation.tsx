import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { ContactUs } from '../screens';
import { globalPalette } from '../themes';

export type RootStackParamList = {
  ContactUs: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export type StackNavigation = StackNavigationProp<RootStackParamList>;

export const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ContactUs"
        component={ContactUs}
        options={{ ...ScreenOptions.headerBack, title: 'Contact' }}
      />
    </Stack.Navigator>
  );
};

const ScreenOptions = {
  headerHidden: {
    headerShown: false,
  },
  headerBack: {
    headerBackTitleVisible: false, //if you want to remove the title
    headerBackTitle: '',
  },
  headerVisible: {
    headerShown: true,
  },
  navigator: {
    cardStyle: {
      backgroundColor: globalPalette.white,
    },
  },
  aboutUs: {
    headerTitle: '',
    headerStyle: { backgroundColor: globalPalette.primary },
    headerTintColor: globalPalette.whiteTransparent,
    headerShadowVisible: false,
    headerBackTitleVisible: false,
  },
};
