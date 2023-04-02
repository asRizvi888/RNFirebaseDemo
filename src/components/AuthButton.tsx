import * as React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ColorValue,
  GestureResponderEvent,
  Dimensions,
} from 'react-native';

interface Props {
  color?: ColorValue;
  name?: String;
  onPress?: (event: GestureResponderEvent) => void;
}

const {width, height} = Dimensions.get('screen');

const AuthButton: React.FC<Props> = ({color, name, onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.btn, {backgroundColor: color}]}
      onPress={onPress}>
      <Text style={styles.txt}>{`Sign in with ${name}`}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    height: height * 0.06,
    width: width * 0.9,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  txt: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AuthButton;
