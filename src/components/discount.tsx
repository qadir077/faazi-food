
import { useEffect, useRef, useState } from 'react';
import {
    View,
    Image,
    Text,
    FlatList,
    useWindowDimensions,
    NativeScrollEvent,
    NativeSyntheticEvent,
    Pressable,
} from 'react-native';

import { discountBanners } from '../components/data/data';

export default function DiscountCarousel() {
    const { width } = useWindowDimensions();
    const listRef = useRef<FlatList>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const bannerWidth = width - 32;
    const gap = 12;

    useEffect(() => {
        if (discountBanners.length <= 1) return;

        const timer = setInterval(() => {
            setActiveIndex((current) => {
                const next = (current + 1) % discountBanners.length;

                listRef.current?.scrollToIndex({
                    index: next,
                    animated: true,
                });

                return next;
            });
        }, 2000);

        return () => clearInterval(timer);
    }, []);

    const handleScroll = (
        event: NativeSyntheticEvent<NativeScrollEvent>
    ) => {
        const index = Math.round(
            event.nativeEvent.contentOffset.x / (bannerWidth + gap)
        );

        setActiveIndex(
            Math.max(0, Math.min(index, discountBanners.length - 1))
        );
    };

    return (
        <View className="bg-black pt-4">
            {/* Section Header */}
            <View className="mb-4 flex-row items-center justify-between px-4">
                <Text className="text-xl font-bold text-white">
                    Special Offers
                </Text>

                <Pressable>
                    <Text className="text-md font-semibold text-[#DA6F1C]">
                        See all
                    </Text>
                </Pressable>
            </View>

            {/* Horizontal Banner Carousel */}
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
                        style={{ width: bannerWidth, height: 160 }}
                        className="overflow-hidden rounded-3xl"
                    >
                        <Image
                            source={item.image}
                            resizeMode="cover"
                            className="h-full w-full"
                        />
                    </View>
                )}
            />

        </View>
    );
}
