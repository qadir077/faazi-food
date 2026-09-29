import { Image, Pressable, Text, View } from 'react-native';
import { router } from 'expo-router';
import { useEffect } from 'react';

export default function SplashScreen() {

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/login');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 bg-black">

      {/* Main Content */}
      <View className="flex-1 items-center justify-center px-6">

        {/* Logo */}
        <Image
          source={require('../../../assets/images/logo.png')}
          resizeMode="contain"
          className="h-80 w-80"
        />

        {/* Tagline */}
        <Text className="mt-2 text-center text-[23px] font-bold tracking-wide text-[#DA6F1C]">
          Good Food, One Tap Away
        </Text>

      </View>

      {/* Bottom Button */}
      <View className="px-6 pb-10">
        <Pressable
          onPress={() => router.replace('/login')}
          className="w-full items-center rounded-2xl bg-[#DA6F1C] py-4 active:opacity-80"
        >
          <Text className="text-[20px] font-bold tracking-wide text-black">
            Next
          </Text>
        </Pressable>
      </View>

    </View>
  );
}