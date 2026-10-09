import Ionicons from '@expo/vector-icons/build/Ionicons';
import { Text, View, Pressable } from 'react-native';

export default function Home() {
  return (
    <View className='main'>

      <View className='top-section bg-[#DA6F1C] h-40 rounded-b-3xl mx-4 '>

        <View className='flex-row mt-10 ml-6 '>
          <Ionicons
            name="person"
            size={22}
            color="black"
          />
          <Text className='text-white text-2xl ml-3'>Welcome back!</Text>


          <Pressable className="h-12 w-12 items-center justify-center rounded-full bg-[#1A1A1A]">
            <Ionicons
              name="notifications-outline"
              size={22}
              color="#DA6F1C"
            />
          </Pressable>

        </View>

      </View>

      <View className='serch-bar'>
        <Text></Text>

      </View>

      <View className='category'>

      </View>

    </View>
  )
}

