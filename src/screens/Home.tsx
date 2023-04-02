import * as React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Button} from 'react-native';
import AuthButton from '../components/AuthButton';
import auth from '@react-native-firebase/auth';
import {onGoogleButtonPress, signOut} from '../api/authentication';
import User from '../components/User';

const Home: React.FC = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = React.useState(true);
  const [user, setUser] = React.useState();

  // Handle user state changes
  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  console.log('Logged User:', user);
  console.log('Provider:', user?.providerData);

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <SafeAreaView style={[styles.container, {justifyContent: 'space-between'}]}>
      {user && (
        <User
          name={user?.displayName}
          imgUrl={user?.photoURL}
          provider={user?.providerData[0].providerId}
        />
      )}
      <View style={[styles.container, {justifyContent: 'center'}]}>
        <Text style={styles.header}>Firebase Authentication 🔥</Text>
        <AuthButton name={'Apple'} color={'black'} />
        <AuthButton
          name={'Google'}
          color={'red'}
          onPress={onGoogleButtonPress}
        />
        <AuthButton name={'Facebook'} color={'blue'} />
      </View>
      {user && <Button title="Sign Out" onPress={signOut} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
});

export default Home;
