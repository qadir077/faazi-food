import { Image, Pressable, Text, View } from 'react-native';
import { router } from 'expo-router';
import { useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/login');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 bg-black">

      {/* Decorative Background */}
      <View className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#DA6F1C]/10" />
      <View className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#DA6F1C]/10" />

      {/* Main Content */}
      <View className="flex-1 items-center justify-center px-6">

        {/* Logo */}
        <View className="items-center justify-center rounded-full border border-[#DA6F1C]/30 bg-[#111111] p-5">
          <Image
            source={require('../../../assets/images/logo.png')}
            resizeMode="contain"
            className="h-60 w-60"
          />
        </View>

        {/* App Name */}
        <Text className="mt-8 text-center text-4xl font-extrabold tracking-wide text-white">
          Food
          <Text className="text-[#DA6F1C]">.</Text>
        </Text>

        {/* Tagline */}
        <Text className="mt-3 text-center text-[21px] font-bold tracking-wide text-[#DA6F1C]">
          Good Food, One Tap Away
        </Text>

        {/* Description */}
        <Text className="mt-3 px-5 text-center text-sm leading-5 text-gray-500">
          Discover delicious meals and enjoy your favorite food anytime,
          anywhere.
        </Text>

      </View>

      {/* Bottom Section */}
      <View className="px-6 pb-10">

        {/* Page Indicator */}
        <View className="mb-6 flex-row items-center justify-center">
          <View className="mr-2 h-1.5 w-8 rounded-full bg-[#DA6F1C]" />
          <View className="mr-2 h-1.5 w-2 rounded-full bg-gray-700" />
          <View className="h-1.5 w-2 rounded-full bg-gray-700" />
        </View>

        {/* Button */}
        <Pressable
          onPress={() => router.replace('/login')}
          className="flex-row items-center justify-center rounded-2xl bg-[#DA6F1C] py-4 active:opacity-80"
        >
          <Text className="mr-3 text-[19px] font-bold tracking-wide text-black">
            Get Started
          </Text>

          <Ionicons
            name="arrow-forward"
            size={22}
            color="#000000"
          />
        </Pressable>

        {/* Bottom Text */}
        <Text className="mt-4 text-center text-xs text-gray-600">
          Fresh • Fast • Delicious
        </Text>

      </View>

    </View>
  );
}