import { View, Text, Pressable } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen() {
  const handleBack = () => {
    router.back();
  };

  return (
    <View className="px-6 pt-6">
      <Pressable
        onPress={handleBack}
        className="h-11 w-11 items-center flex justify-center rounded-full bg-[#1A1A1A]"
      >
        <Ionicons
          name="arrow-back"
          size={22}
          color="#FFFFFF"
        />

      </Pressable>
    </View>
  );
}