import { Stack } from 'expo-router';

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#000' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold', fontSize: 40 },
        contentStyle: {
          backgroundColor: '#7e7e7e',
          paddingTop: 10,
          paddingHorizontal: 10,
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="notes" options={{ headerTitle: 'Notes' }} />
    </Stack>
  );
};

export default RootLayout;
