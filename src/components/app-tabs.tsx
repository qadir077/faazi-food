import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import  { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Keyboard,
  LayoutChangeEvent,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ACCENT = '#E87522';
const ACCENT_SOFT = '#F5A25D';
const INACTIVE = '#6E655D';
const BAR_BG = '#151210';
const APP_BG = '#0B0908';
const BUBBLE = 56;

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

function FloatingTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const [barWidth, setBarWidth] = useState(0);
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  const count = state.routes.length;
  const tabWidth = barWidth / count;

  // per-tab progress (0 = inactive, 1 = active)
  const progress = useRef(
    state.routes.map((_, i) => new Animated.Value(i === state.index ? 1 : 0))
  ).current;
  const bubbleX = useRef(new Animated.Value(0)).current;
  const bubbleScale = useRef(new Animated.Value(1)).current;
  const firstRun = useRef(true);

  // hide bar when keyboard is open
  useEffect(() => {
    const showEvt = Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';
    const hideEvt = Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide';
    const s = Keyboard.addListener(showEvt, () => setKeyboardVisible(true));
    const h = Keyboard.addListener(hideEvt, () => setKeyboardVisible(false));
    return () => {
      s.remove();
      h.remove();
    };
  }, []);

  // animate on tab change
  useEffect(() => {
    if (!tabWidth) return;
    const targetX = state.index * tabWidth + (tabWidth - BUBBLE) / 2;

    if (firstRun.current) {
      bubbleX.setValue(targetX);
      firstRun.current = false;
      return;
    }

    Animated.parallel([
      Animated.spring(bubbleX, {
        toValue: targetX,
        damping: 14,
        stiffness: 140,
        mass: 0.9,
        useNativeDriver: true,
      }),
      Animated.sequence([
        Animated.timing(bubbleScale, { toValue: 0.78, duration: 110, useNativeDriver: true }),
        Animated.spring(bubbleScale, {
          toValue: 1,
          damping: 7,
          stiffness: 180,
          useNativeDriver: true,
        }),
      ]),
      ...progress.map((p, i) =>
        Animated.spring(p, {
          toValue: i === state.index ? 1 : 0,
          damping: 13,
          stiffness: 170,
          useNativeDriver: true,
        })
      ),
    ]).start();
  }, [state.index, tabWidth]);

  if (keyboardVisible) return null;

  return (
    <View
      pointerEvents="box-none"
      style={[styles.wrapper, { bottom: Math.max(insets.bottom, 12) }]}
    >
      <View
        style={styles.bar}
        onLayout={(e: LayoutChangeEvent) => setBarWidth(e.nativeEvent.layout.width)}
      >
        {/* sliding orange bubble */}
        {tabWidth > 0 && (
          <Animated.View
            pointerEvents="none"
            style={[
              styles.bubble,
              { transform: [{ translateX: bubbleX }, { scale: bubbleScale }] },
            ]}
          />
        )}

        <View style={styles.row}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label = (options.title ?? route.name) as string;
            const focused = state.index === index;
            const icon = tabIcons[route.name] ?? tabIcons.home;
            const p = progress[index];

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });
              if (!focused && !event.defaultPrevented) {
                navigation.navigate(route.name, route.params);
              }
            };

            const onLongPress = () => {
              navigation.emit({ type: 'tabLongPress', target: route.key });
            };

            const iconTranslateY = p.interpolate({ inputRange: [0, 1], outputRange: [8, -30] });
            const iconScale = p.interpolate({ inputRange: [0, 1], outputRange: [1, 1.08] });
            const labelOpacity = p.interpolate({ inputRange: [0, 0.6, 1], outputRange: [0, 0, 1] });
            const labelTranslateY = p.interpolate({ inputRange: [0, 1], outputRange: [6, 0] });

            return (
              <Pressable
                key={route.key}
                accessibilityRole="tab"
                accessibilityState={focused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                onPress={onPress}
                onLongPress={onLongPress}
                style={styles.item}
              >
                <Animated.View
                  style={[
                    styles.iconWrap,
                    { transform: [{ translateY: iconTranslateY }, { scale: iconScale }] },
                  ]}
                >
                  <Ionicons
                    name={focused ? icon.active : icon.inactive}
                    size={22}
                    color={focused ? APP_BG : INACTIVE}
                  />
                </Animated.View>

                <Animated.Text
                  numberOfLines={1}
                  style={[
                    styles.label,
                    { opacity: labelOpacity, transform: [{ translateY: labelTranslateY }] },
                  ]}
                >
                  {label}
                </Animated.Text>
              </Pressable>
            );
          })}
        </View>
      </View>
    </View>
  );
}

export default function AppTabs() {
  return (
    <Tabs
      tabBar={(props) => <FloatingTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        animation: 'shift',
        sceneStyle: { backgroundColor: APP_BG },
      }}
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
  wrapper: {
    position: 'absolute',
    left: 14,
    right: 14,
  },
  bar: {
    height: 68,
    backgroundColor: BAR_BG,
    borderRadius: 30,
    borderWidth: 1.5,
    borderColor: 'rgba(232,117,34,0.8)',
    elevation: 20,
    shadowColor: ACCENT,
    shadowOpacity: 0.3,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 10 },
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 12,
  },
  iconWrap: {
    width: 32,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  label: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.5,
    color: ACCENT_SOFT,
  },
  bubble: {
    position: 'absolute',
    top: -32,
    left: 0,
    width: BUBBLE,
    height: BUBBLE,
    borderRadius: BUBBLE / 2,
    backgroundColor: ACCENT,
    borderWidth: 5,
    borderColor: APP_BG,
    shadowColor: ACCENT,
    shadowOpacity: 0.85,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 0 },
    elevation: 14,
  },
});