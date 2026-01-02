import { Platform } from 'react-native';
import { NativeTabs, Icon, Label, VectorIcon } from 'expo-router/unstable-native-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { SplashScreen } from 'expo-router';
import { useEffect } from 'react';
import {
  useFonts,
  SpaceGrotesk_400Regular,
  SpaceGrotesk_600SemiBold,
  SpaceGrotesk_700Bold,
} from '@expo-google-fonts/space-grotesk';
import {
  IBM_Plex_Serif_400Regular,
  IBM_Plex_Serif_500Medium,
} from '@expo-google-fonts/ibm-plex-serif';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    SpaceGrotesk_400Regular,
    SpaceGrotesk_600SemiBold,
    SpaceGrotesk_700Bold,
    IBM_Plex_Serif_400Regular,
    IBM_Plex_Serif_500Medium,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <StatusBar style="dark" />
      <NativeTabs minimizeBehavior="onScrollDown">
        <NativeTabs.Trigger name="home">
          <Label>Home</Label>
          {Platform.select({
            ios: <Icon sf={{ default: 'house', selected: 'house.fill' }} />,
            android: (
              <Icon
                src={
                  <VectorIcon family={Ionicons} name="home" />
                }
              />
            ),
            default: <Icon sf="house" />,
          })}
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="inbox">
          <Label>Inbox</Label>
          {Platform.select({
            ios: <Icon sf={{ default: 'bubble.left', selected: 'bubble.left.fill' }} />,
            android: (
              <Icon
                src={
                  <VectorIcon family={Ionicons} name="chatbubble-ellipses" />
                }
              />
            ),
            default: <Icon sf="bubble.left" />,
          })}
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="upload">
          <Label>Upload</Label>
          {Platform.select({
            ios: <Icon sf={{ default: 'plus.circle', selected: 'plus.circle.fill' }} />,
            android: (
              <Icon src={<VectorIcon family={Ionicons} name="add-circle" />} />
            ),
            default: <Icon sf="plus.circle" />,
          })}
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="explore">
          <Label>Explore</Label>
          {Platform.select({
            ios: <Icon sf={{ default: 'safari', selected: 'safari.fill' }} />,
            android: (
              <Icon src={<VectorIcon family={Ionicons} name="compass" />} />
            ),
            default: <Icon sf="safari" />,
          })}
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="profile">
          <Label>Profile</Label>
          {Platform.select({
            ios: <Icon sf={{ default: 'person', selected: 'person.fill' }} />,
            android: (
              <Icon src={<VectorIcon family={Ionicons} name="person" />} />
            ),
            default: <Icon sf="person" />,
          })}
        </NativeTabs.Trigger>
      </NativeTabs>
    </>
  );
}
