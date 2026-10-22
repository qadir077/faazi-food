
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, View, Image, Pressable } from "react-native";

const menuItems = [
	{
		title: "My Orders",
		subtitle: "Track and manage your orders",
		icon: "receipt-outline",
	},
	{
		title: "Saved Addresses",
		subtitle: "Manage your delivery locations",
		icon: "location-outline",
	},
	{
		title: "Payment Methods",
		subtitle: "Manage your payment options",
		icon: "card-outline",
	},
	{
		title: "My Favorites",
		subtitle: "Your favorite meals in one place",
		icon: "heart-outline",
	},
	{
		title: "Settings",
		subtitle: "Customize your account",
		icon: "settings-outline",
	},
	{
		title: "Help & Support",
		subtitle: "We're here to help you",
		icon: "help-circle-outline",
	},
];

export default function ProfileScreen() {
	return (
		<View className="flex-1 bg-black">
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: 35 }}
			>

				{/* Profile Card */}
				<View className="mx-5 mt-10 rounded-3xl border border-[#292929] bg-[#111111] p-5">
					<View className="flex-row items-center">
						{/* Avatar */}
						<View className="h-20 w-20 items-center justify-center rounded-full border-2 border-[#DA6F1C] bg-[#252019]">
							<Ionicons
								name="person"
								size={38}
								color="#DA6F1C"
							/>
						</View>

						{/* User Details */}
						<View className="ml-4 flex-1">
							<Text className="text-xl font-bold text-white">
								Qadir Faziyaan
							</Text>
							<Text className="mt-1 text-sm text-gray-400">
								Qadir@gmail.com
							</Text>

						</View>
					</View>

					{/* Edit Profile Button */}
					<Pressable
						className="mt-5 flex-row items-center justify-center rounded-xl bg-[#DA6F1C] py-3 active:opacity-80"
						onPress={() => console.log("Edit Profile pressed")}
					>
						<Ionicons
							name="create-outline"
							size={18}
							color="#FFFFFF"
						/>
						<Text className="ml-2 font-semibold text-white">
							Edit Profile
						</Text>
					</Pressable>
				</View>

				{/* Quick Stats */}
				<View className="mx-5 mt-5 flex-row gap-3">
					<View className="flex-1 items-center rounded-2xl border border-[#292929] bg-[#111111] py-4">
						<Ionicons
							name="receipt-outline"
							size={23}
							color="#DA6F1C"
						/>
						<Text className="mt-2 text-xl font-bold text-white">
							0
						</Text>
						<Text className="mt-1 text-xs text-gray-400">
							Orders
						</Text>  
					</View>

					<View className="flex-1 items-center rounded-2xl border border-[#292929] bg-[#111111] py-4">
						<Ionicons
							name="heart-outline"
							size={23}
							color="#DA6F1C"
						/>
						<Text className="mt-2 text-xl font-bold text-white">
							0
						</Text>
						<Text className="mt-1 text-xs text-gray-400">
							Favorites
						</Text>
					</View>

					<View className="flex-1 items-center rounded-2xl border border-[#292929] bg-[#111111] py-4">
						<Ionicons
							name="location-outline"
							size={23}
							color="#DA6F1C"
						/>
						<Text className="mt-2 text-xl font-bold text-white">
							0
						</Text>
						<Text className="mt-1 text-xs text-gray-400">
							Addresses
						</Text>
					</View>
				</View>

				{/* Account Section */}
				<View className="mt-8 px-5">
					<Text className="mb-4 text-lg font-bold text-white">
						Account
					</Text>

					<View className="overflow-hidden rounded-2xl border border-[#292929] bg-[#111111] px-4">
						{menuItems.map((item, index) => (
							<Pressable
								key={item.title}
								className={`flex-row items-center py-4 active:opacity-70 ${index !== menuItems.length - 1
										? "border-b border-[#292929]"
										: ""
									}`}
								onPress={() => console.log(`${item.title} pressed`)}
							>
								<View className="h-11 w-11 items-center justify-center rounded-xl bg-[#252019]">
									<Ionicons
										name={item.icon as any}
										size={22}
										color="#DA6F1C"
									/>
								</View>

								<View className="ml-3 flex-1">
									<Text className="text-sm font-semibold text-white">
										{item.title}
									</Text>
									<Text className="mt-1 text-xs text-gray-400">
										{item.subtitle}
									</Text>
								</View>

								<Ionicons
									name="chevron-forward"
									size={19}
									color="#777777"
								/>
							</Pressable>
						))}
					</View>
				</View>

				{/* Logout */}
				<Pressable
					className="mx-5 mb-10 mt-6 flex-row items-center justify-center rounded-2xl border border-red-900/60 bg-[#170B0B] py-4 active:opacity-70"
					onPress={() => console.log("Logout pressed")}
				>
					<Ionicons
						name="log-out-outline"
						size={21}
						color="#F87171"
					/>
					<Text className="ml-2 font-semibold text-red-400">
						Log Out
					</Text>
				</Pressable>


				<Text className="mt-5 text-center text-xs text-gray-600">
					FOODIE • Version 1.0.0
				</Text>
				

			</ScrollView>
		</View>
	);
}
