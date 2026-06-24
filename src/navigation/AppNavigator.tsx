import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import WorldScreen from '../screens/WorldScreen';
import RewardScreen from '../screens/RewardScreen';

import ProfileScreen from '../screens/ProfileScreen';
import AchievementsScreen from '../screens/AchievementsScreen';
import ShopScreen from '../screens/ShopScreen';

import FractionActivity from '../activities/FractionActivity';

import { RootStackParamList } from '../types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          name="Map"
          component={MapScreen}
        />

        <Stack.Screen
          name="World"
          component={WorldScreen}
        />

        <Stack.Screen
          name="Reward"
          component={RewardScreen}
        />

        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
        />

        <Stack.Screen
          name="Achievements"
          component={AchievementsScreen}
        />

        <Stack.Screen
          name="Shop"
          component={ShopScreen}
        />

        <Stack.Screen
          name="Fraction"
          component={FractionActivity}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}