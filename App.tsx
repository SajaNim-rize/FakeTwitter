<<<<<<< HEAD
import React, { useEffect } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export default function App() {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
    });
  }, []);

  const onGoogleButtonPress = async () => {
    try {
      // Google 로그인 시도
      const userInfo = await GoogleSignin.signIn();
      const idToken = userInfo.data?.idToken || userInfo.data?.idToken;

      if (!idToken) {
        console.error('Google 로그인 실패: idToken이 없습니다.');
        return;
      }

      // Firebase 인증 자격 생성
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);

      console.log('✅ Firebase 로그인 성공');
    } catch (error) {
      console.error('로그인 오류:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Google 로그인 테스트</Text>
      <Button title="Google 로그인" onPress={onGoogleButtonPress} />
=======
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <NewAppScreen
        templateFileName="App.tsx"
        safeAreaInsets={safeAreaInsets}
      />
>>>>>>> 4d02a9435da824bce90b35f4c06a38f35a1201c4
    </View>
  );
}

const styles = StyleSheet.create({
<<<<<<< HEAD
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, marginBottom: 20 },
});
=======
  container: {
    flex: 1,
  },
});

export default App;
>>>>>>> 4d02a9435da824bce90b35f4c06a38f35a1201c4
