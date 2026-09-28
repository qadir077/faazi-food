import { useEffect, useRef } from 'react';
import {
  Animated,
  Easing,
  Image,
  Pressable,
  Text,
  View,
} from 'react-native';
import { router } from 'expo-router';

export default function SplashScreen() {
  const logoScale = useRef(new Animated.Value(0.8)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const taglineOpacity = useRef(new Animated.Value(0)).current;
  const buttonOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Logo animation
    Animated.parallel([
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 700,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),

      Animated.spring(logoScale, {
        toValue: 1,
        friction: 7,
        tension: 45,
        useNativeDriver: true,
      }),
    ]).start();

    // Tagline
    const taglineTimer = setTimeout(() => {
      Animated.timing(taglineOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }, 700);

    // Button
    const buttonTimer = setTimeout(() => {
      Animated.timing(buttonOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }, 1000);

    return () => {
      clearTimeout(taglineTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  const handleNext = () => {
    router.replace('/login');
  };

  return (
    <View className="flex-1 bg-black">

      {/* Main Content */}
      <View className="flex-1 items-center justify-center px-6">

        {/* Logo */}
        <Animated.View
          style={{
            opacity: logoOpacity,
            transform: [{ scale: logoScale }],
          }}
        >
          <Image
            source={require('../../assets/images/logo.png')}
            resizeMode="contain"
            className="h-80 w-80"
          />
        </Animated.View>

        {/* Tagline */}
        <Animated.View
          style={{
            opacity: taglineOpacity,
          }}
        >
          <Text className="mt-2 text-center text-[23px] font-bold tracking-wide text-[#DA6F1C]">
            Good Food, One Tap Away
          </Text>
        </Animated.View>

      </View>

      {/* Bottom Button */}
      <Animated.View
        style={{
          opacity: buttonOpacity,
        }}
        className="px-6 pb-10"
      >
        <Pressable
          onPress={handleNext}
          className="w-full items-center rounded-2xl bg-[#DA6F1C] py-4 active:opacity-80"
        >
          <Text className="text-[20px] font-bold tracking-wide text-black">
            Next
          </Text>
        </Pressable>
      </Animated.View>

    </View>
  );
}