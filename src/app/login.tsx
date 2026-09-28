import { View, Text } from 'react-native';

export default function LoginScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#0B0B0B',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ color: '#FFFFFF', fontSize: 30, fontWeight: '700' }}>
        Login
      </Text>
    </View>
  );
}