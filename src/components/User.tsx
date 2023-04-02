import * as React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

interface Props {
  name?: String;
  imgUrl?: any;
  provider?: String;
}

const User: React.FC<Props> = ({name, imgUrl, provider}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: imgUrl}} style={styles.img} />
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: 'black',
        }}>
        {name}
      </Text>
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
    height: 80,
    width: 80,
    borderRadius: 40,
    marginVertical: 10,
  },
});

export default User;
