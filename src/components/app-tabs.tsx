import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const tabIcons: Record<
  string,
  { active: keyof typeof Ionicons.glyphMap; inactive: keyof typeof Ionicons.glyphMap }
> = {
  home: { active: 'home', inactive: 'home-outline' },
  explore: { active: 'search', inactive: 'search-outline' },
  orders: { active: 'receipt', inactive: 'receipt-outline' },
  fave: { active: 'heart', inactive: 'heart-outline' },
  profile: { active: 'person', inactive: 'person-outline' },
};

export default function AppTabs() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#E87522',
        tabBarInactiveTintColor: '#898985',
        tabBarHideOnKeyboard: true,
        tabBarStyle: [
          styles.tabBar,
          { height: 62 + insets.bottom, paddingBottom: Math.max(insets.bottom, 6) },
        ],
        tabBarLabelStyle: styles.label,
        tabBarIcon: ({ color, focused }) => {
          const icon = tabIcons[route.name] ?? tabIcons.home;
          return (
            <Ionicons
              name={focused ? icon.active : icon.inactive}
              size={22}
              color={color}
            />
          );
        },
      })}
    >
      <Tabs.Screen name="home" options={{ title: 'Home' }} />
      <Tabs.Screen name="explore" options={{ title: 'Explore' }} />
      <Tabs.Screen name="orders" options={{ title: 'Orders' }} />
      <Tabs.Screen name="fave" options={{ title: 'Favorites' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 68,
    paddingTop: 7,
    paddingBottom: 6,
    backgroundColor: '#FFFFFF',
    borderTopColor: '#F0E9E2',
    borderTopWidth: StyleSheet.hairlineWidth,
    elevation: 12,
    shadowColor: '#23170F',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: -4 },
  },
  label: {
    fontSize: 10,
    fontWeight: '600',
  },
});