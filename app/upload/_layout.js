import { Stack } from 'expo-router';

export default function UploadLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Upload' }} />
    </Stack>
  );
}
