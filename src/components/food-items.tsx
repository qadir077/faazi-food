
import { foodItems } from "./data/data";
import {
  FlatList,
  Image,
  Pressable,
  Text,
  View,
} from "react-native";

export default function FoodItems() {
  return (
    <View className="flex-1 bg-black pt-5">

      {/* Section Heading */}
      <View className="mb-4 flex-row items-center justify-between px-4">
        <View>
          <Text className="text-2xl font-bold text-white">
            Cravings, Delivered 🍔
          </Text>

          <Text className="mt-1 text-sm text-gray-400">
            Discover something delicious today.
          </Text>
        </View>

        <Pressable
          onPress={() => {
            // Add See All navigation here
          }}
          className="rounded-full border border-[#DA6F1C]/40 px-3 py-2"
        >
          <Text className="text-sm font-semibold text-[#DA6F1C]">
            See all
          </Text>
        </Pressable>
      </View>

      {/* Food Cards */}
      <FlatList
        data={foodItems}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 8,
          paddingBottom: 20,
        }}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        renderItem={({ item }) => (
          <View className="mb-3 w-[48%] overflow-hidden rounded-2xl border border-[#222222] bg-[#111111]">

            {/* Food Image */}
            <View>
              <Image
                source={{ uri: item.image }}
                className="h-32 w-full"
                resizeMode="cover"
              />

              {item.discount > 0 && (
                <View className="absolute left-2 top-2 rounded-md bg-[#DA6F1C] px-2 py-1">
                  <Text className="text-xs font-bold text-black">
                    {item.discount}% OFF
                  </Text>
                </View>
              )}
            </View>

            {/* Food Details */}
            <View className="p-3">
              <Text
                className="font-bold text-white"
                numberOfLines={1}
              >
                {item.name}
              </Text>

              <Text
                className="mt-1 text-xs text-gray-400"
                numberOfLines={2}
              >
                {item.description}
              </Text>

              <View className="mt-3 flex-row items-center justify-between">
                <Text className="font-bold text-[#DA6F1C]">
                  ₹{item.price}
                </Text>

                <View className="flex-row items-center gap-1">
                  <Text className="text-xs">⭐</Text>
                  <Text className="text-xs text-white">
                    {item.rating}
                  </Text>
                </View>
              </View>

              <View className="mt-2 flex-row items-center">
                <Text className="text-xs text-gray-400">
                  🕒 {item.preparationTime} min
                </Text>

                <View className="ml-auto rounded border border-[#444444] px-1.5 py-0.5">
                  <Text className="text-[10px] text-gray-300">
                    {item.isVeg ? "VEG" : "NON-VEG"}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}
