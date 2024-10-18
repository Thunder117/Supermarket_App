import React, { useCallback, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Tabs from "../components/Tabs";
import * as SplashScreen from 'expo-splash-screen';  // Import expo-splash-screen for splash handling
import { useFonts } from 'expo-font';

// Prevent the splash screen from auto-hiding before the fonts are loaded
SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded] = useFonts({
    'OpenSans-Regular': require('../assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-SemiBold': require('../assets/fonts/OpenSans-SemiBold.ttf'),
  });

  // Hide the splash screen once fonts are loaded
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();  // Hide splash screen once fonts are loaded
    }
  }, [fontsLoaded]);

  useEffect(() => {
    // Optionally, you could perform other setup tasks here
  }, []);

  // Return null while fonts are loading to avoid rendering the UI
  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
