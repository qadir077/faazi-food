import { foodItems } from "./data/data";
import { Image, Text, View } from "react-native";

export default function FoodItems() {
    return (
        <View className="mt-6 bg-black px-2">
            <View className="px-2 pb-2">
                <Text className="text-2xl font-bold text-white">
                    Popular Near You
                </Text>

            </View>

            <View className="flex-row flex-wrap justify-between">
                {foodItems.map((item) => (
                    <View key={item.id} className="mb-4 w-[48%] overflow-hidden rounded-2xl bg-[#111111]">
                        <Image
                            source={{ uri: item.image }}
                            className="h-32 w-full bg-[#222222]"
                            resizeMode="cover"
                        />

                        <View className="p-3">
                            <Text className="font-bold text-white" numberOfLines={1}>
                                {item.name}
                            </Text>

                            <Text className="mt-1 text-xs text-gray-400" numberOfLines={2}>
                                {item.description}
                            </Text>

                            <View className="mt-2 flex-row items-center justify-between">
                                <Text className="font-bold text-[#DA6F1C]">
                                    ₹{item.price}
                                </Text>

                                <Text className="text-xs text-white">
                                    ⭐ {item.rating}
                                </Text>
                            </View>

                            <Text className="mt-1 text-xs text-gray-400">
                                {item.preparationTime} min
                            </Text>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
}