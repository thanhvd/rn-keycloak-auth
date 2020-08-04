/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {SafeAreaView, StatusBar, Button} from 'react-native';

import {Header} from 'react-native/Libraries/NewAppScreen';

import {authorize} from 'react-native-app-auth';

// base config
const config = {
  issuer: 'https://dce96660fa2f.ngrok.io/auth/realms/phenikaa',
  clientId: 'account',
  redirectUrl: 'io.identityserver.demo:/callback',
  scopes: ['openid', 'profile', 'email', 'offline_access'],
  clientSecret: 'd07af59f-6343-4021-bc4b-6c5019b47197',
};

declare const global: {HermesInternal: null | {}};

const App = () => {
  const [a, setA] = useState();
  const handleA = async () => {
    try {
      const b = await authorize(config); // result includes accessToken, accessTokenExpirationDate and refreshToken
      setA(b);
    } catch (error) {
      console.log(error);
    }
  };
  // use the client to make the auth request and receive the authState
  useEffect(() => {
    console.log(a);
  });

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Header />
        <Button onPress={handleA} title="ok" />
      </SafeAreaView>
    </>
  );
};

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

export default App;
