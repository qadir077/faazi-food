import Ionicons from '@expo/vector-icons/build/Ionicons';
import { Text, View, Pressable, ScrollView, TextInput, Image } from 'react-native';
import { foodCategories } from '@/components/data/data';
import DiscountCarousel from '@/components/discount';
import FoodItems from '@/components/food-items';




export default function Home() {
  return (
    <View className='main'>

   <View className="bg-[#DA6F1C] rounded-b-[35px] px-5 pt-12 pb-5">

  {/* Top Section */}
  <View className="flex-row items-center justify-between">

    {/* Profile + User Name */}
    <View className="flex-row items-center gap-3">
      <View className="h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-black">
        <Ionicons name="person" size={25}     color="#DA6F1C" />
      </View>

      <View>
     
        <Text className="text-xl font-bold  text-black/70">
          Qadir Faziyaan
        </Text>

        <Text className="text-xs  text-black/70">
          What would you like to eat?
        </Text>
      </View>
    </View>

    {/* Notification */}
    <Pressable className="h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-black">
      <Ionicons
        name="notifications-outline"
        size={23}
        color="#DA6F1C"
      />
      <View className="absolute right-3 top-2 h-2 w-2 rounded-full bg-red-500" />
    </Pressable>
  </View>

  {/* Search Bar */}
  <View className="mt-4 h-14 flex-row items-center rounded-2xl bg-[#1A1A1A] px-4">

    <Ionicons
      name="search-outline"
      size={22}
      color="#DA6F1C"
    />

    <TextInput
      placeholder="Search food, restaurants..."
      placeholderTextColor="#888888"
      className="ml-3 flex-1 text-base text-white"
      returnKeyType="search"
    />

    <View className="mx-3 h-7 w-[1px] bg-[#444444]" />

    <Pressable
      onPress={() => {
      }}
      className="h-10 w-10 items-center justify-center rounded-xl bg-[#DA6F1C]"
    >
      <Ionicons
        name="options-outline"
        size={22}
        color="#FFFFFF"
      />
    </Pressable>

  </View>

</View>

      <View className="mt-6 flex-row items-center justify-between px-4">
        <Text className="text-xl font-bold text-white">
          Categories
        </Text>

        <Pressable>
          <Text className="text-md font-semibold text-[#DA6F1C]">
            See all
          </Text>
        </Pressable>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
        className='mt-5'
      >
        {foodCategories.map((category) => (
          <View key={category.id} className='w-20 items-center'>
            <Image
              source={{ uri: category.image }}
              className='h-20 w-20 rounded-full'
            />
            <Text className='mt-2 text-center text-sm font-medium text-white'>
              {category.title}
            </Text>
          </View>
        ))}
      </ScrollView>

      <DiscountCarousel />
      <FoodItems/>


    </View>
  )
}

