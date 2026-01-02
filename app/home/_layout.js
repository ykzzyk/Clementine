import { Stack } from 'expo-router';
import { isLiquidGlassAvailable } from "expo-glass-effect";
import { useColorScheme } from 'react-native';
import { useIsMobile } from '@/hooks/use-is-mobile';

export default function HomeLayout() {
  const isGlassAvailable = isLiquidGlassAvailable(); // Replace with actual check for Liquid Glass availability
  const colorScheme = useColorScheme();
  const blurEffect =
    colorScheme === 'dark' ? 'systemMaterialDark' :'systemMaterialLight'
  const isMobile = useIsMobile();

  return (
    <Stack>
      <Stack.Screen name="index" options={{ 
        title: 'Clementine',
        // headerTransparent: true,
        headerShown: isMobile,
        headerLargeTitle: true,
        headerTransparent: true,
        headerTintColor: colorScheme === 'dark' ? '#fff' : '#000',
        headerLargeStyle: { backgroundColor: "transparent" },
        headerBlurEffect: isGlassAvailable ? undefined: blurEffect
      }} />
    </Stack>
  );
}
