import * as React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

interface Props {
  name?: String;
  imgUrl?: any;
  email?: String;
  provider?: String;
}

const User: React.FC<Props> = ({name, imgUrl, provider, email}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: imgUrl}} style={styles.img} />
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
        }}>
        {name}
      </Text>
      <Text style={{fontSize: 16, marginVertical: 5}}>{email}</Text>
      <Text style={{color: 'grey'}}>{`Authenticated with ${provider}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 25,
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginVertical: 10,
  },
});

export default User;
