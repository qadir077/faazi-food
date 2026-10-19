import Ionicons from '@expo/vector-icons/build/Ionicons';
import { Text, View, Pressable, ScrollView, Image } from 'react-native';
import { foodCategories } from '@/components/data/data';
import { discountBanners } from '@/components/data/data';


export default function Home() {
  return (
    <View className='main'>

      <View className='top-section bg-[#DA6F1C] h-[150px] rounded-b-[50px]  '>

        <View className='flex-row mt-10 mx-6 justify-around'>
          <View className="border border-black rounded-full p-3">
            <Ionicons
              name="person"
              size={22}
              color="black"
            />
          </View>
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

      <View className='flex-row justify-between mx-6 mt-6'>
        <Text className='text-xl font-bold text-white'>Category</Text>
        <Text className='text-lg text-white'>See all</Text>
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

     <View className="bg-black pt-4">
      <FlatList
        ref={listRef}
        data={discountBanners}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          paddingHorizontal: 16,
          gap,
        }}
        snapToInterval={bannerWidth + gap}
        decelerationRate="fast"
        onMomentumScrollEnd={handleScroll}
        getItemLayout={(_, index) => ({
          length: bannerWidth + gap,
          offset: (bannerWidth + gap) * index,
          index,
        })}
        renderItem={({ item }) => (
          <View
            style={{ width: bannerWidth, height: 150 }}
            className="overflow-hidden rounded-2xl"
          >
            <Image
              source={item.image}
              resizeMode="cover"
              className="h-full w-full"
            />
          </View>
        )}
      />

      <View className="mt-3 flex-row justify-center gap-2">
        {discountBanners.map((banner, index) => (
          <View
            key={banner.id}
            className={`h-2 rounded-full ${
              activeIndex === index
                ? 'w-6 bg-[#DA6F1C]'
                : 'w-2 bg-[#444444]'
            }`}
          />
        ))}
      </View>
    </View>

    </View>
  )
}

