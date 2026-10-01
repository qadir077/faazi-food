// import { NativeTabs } from 'expo-router/unstable-native-tabs';
// import { useColorScheme } from 'react-native';

// import { Colors } from '@/constants/theme';

// export default function AppTabs() {
//   const scheme = useColorScheme();
//   const colors = Colors[scheme === 'unspecified' ? 'light' : scheme];

//   return (
//     <NativeTabs
//       backgroundColor={colors.background}
//       indicatorColor={colors.backgroundElement}
//       labelStyle={{ selected: { color: colors.text } }}>
//       <NativeTabs.Trigger name="index">
//         <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
//         <NativeTabs.Trigger.Icon
//           src={require('@/assets/images/tabIcons/home.png')}
//           renderingMode="template"
//         />
//       </NativeTabs.Trigger>

//       <NativeTabs.Trigger name="explore">
//         <NativeTabs.Trigger.Label>Explore</NativeTabs.Trigger.Label>
//         <NativeTabs.Trigger.Icon
//           src={require('@/assets/images/tabIcons/explore.png')}
//           renderingMode="template"
//         />
//       </NativeTabs.Trigger>
//     </NativeTabs>
//   );
// }











import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { Ionicons } from '@expo/vector-icons';

export default function AppTabs() {
  return (
    <NativeTabs
      backgroundColor="#000000"
      indicatorColor="#DA6F1C"
      labelStyle={{
        color: '#777777',
        selected: {
          color: '#DA6F1C',
        },
      }}
    >
      {/* Home */}
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>
          Home
        </NativeTabs.Trigger.Label>

        <NativeTabs.Trigger.Icon>
          <NativeTabs.Trigger.VectorIcon
            family={Ionicons}
            name="home-outline"
          />
        </NativeTabs.Trigger.Icon>
      </NativeTabs.Trigger>

      {/* Explore */}
      <NativeTabs.Trigger name="explore">
        <NativeTabs.Trigger.Label>
          Explore
        </NativeTabs.Trigger.Label>

    

        <NativeTabs.Trigger.Icon>
          <NativeTabs.Trigger.VectorIcon
            family={Ionicons}
            name="compass-outline"
          />
        </NativeTabs.Trigger.Icon>
      </NativeTabs.Trigger>

      {/* Orders */}
      <NativeTabs.Trigger name="orders">
        <NativeTabs.Trigger.Label>
          Orders
        </NativeTabs.Trigger.Label>

        <NativeTabs.Trigger.Icon>
          <NativeTabs.Trigger.VectorIcon
            family={Ionicons}
            name="receipt-outline"
          />
        </NativeTabs.Trigger.Icon>
      </NativeTabs.Trigger>

      {/* Favorites */}
      <NativeTabs.Trigger name="favorites">
        <NativeTabs.Trigger.Label>
          Favorites
        </NativeTabs.Trigger.Label>

        <NativeTabs.Trigger.Icon>
          <NativeTabs.Trigger.VectorIcon
            family={Ionicons}
            name="heart-outline"
          />
        </NativeTabs.Trigger.Icon>
      </NativeTabs.Trigger>

      {/* Profile */}
      <NativeTabs.Trigger name="profile">
        <NativeTabs.Trigger.Label>
          Profile
        </NativeTabs.Trigger.Label>

        <NativeTabs.Trigger.Icon>
          <NativeTabs.Trigger.VectorIcon
            family={Ionicons}
            name="person-outline"
          />
        </NativeTabs.Trigger.Icon>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}