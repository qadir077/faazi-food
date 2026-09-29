import { View, Text, Pressable, TextInput, Image } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen() {
  return (
    <View className="flex-1 bg-black">


      <View className="flex-1 items-center justify-center px-6">


        <View className="mb-6 rounded-full border border-[#DA6F1C] p-7">
          <Image
            source={require('../../assets/images/logo.png')}
            resizeMode="contain"
            className="h-40 w-40"
          />
        </View>

        {/* Heading */}
        <Text className="mb-0 text-center text-3xl font-bold text-white">
          Welcome Back
        </Text>

        <Text className="mb-10 text-center text-base text-gray-400">
          Login to your account
        </Text>


        <View className="w-full">
          <Text className="mb-2 ml-1 text-sm font-semibold text-gray-300">
            Email
          </Text>

          <View className="flex-row items-center rounded-xl border-2 border-[#DA6F1C] bg-[#111111] px-4">
            <Ionicons
              name="mail-outline"
              size={22}
              color="#DA6F1C"
            />

            <TextInput
              className="ml-3 flex-1 py-4 text-base text-white"
              placeholder="Enter your email"
              placeholderTextColor="#777777"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
        </View>


        <View className="mt-5 w-full">
          <Text className="mb-2 ml-1 text-sm font-semibold text-gray-300">
            Password
          </Text>

          <View className="flex-row items-center rounded-xl border-2 border-[#DA6F1C] bg-[#111111] px-4">
            <Ionicons
              name="lock-closed-outline"
              size={22}
              color="#DA6F1C"
            />

            <TextInput
              className="ml-3 flex-1 py-4 text-base text-white"
              placeholder="Enter your password"
              placeholderTextColor="#777777"
              secureTextEntry
            />

            <Ionicons
              name="eye-outline"
              size={22}
              color="#777777"
            />
          </View>
        </View>


        <Pressable className="mt-5 self-end active:opacity-60">
          <Text className="text-base font-bold text-[#DA6F1C]">
            Forgot Password?
          </Text>
        </Pressable>

      </View>


      <View className="px-6 pb-10">

        <Pressable
          className="flex-row items-center justify-center rounded-xl bg-[#DA6F1C] py-4 active:opacity-80"
          onPress={() => router.push('/home')}
        >
          <Text className="mr-3 text-[19px] font-bold tracking-wide text-black">
            Login
          </Text>

          <Ionicons
            name="arrow-forward"
            size={23}
            color="#000000"
          />
        </Pressable>

      </View>

    </View>
  );
}