import {
  StyleSheet,
  Text,
  View,
  Pressable,
  PressableProps,
} from 'react-native';
import React, { FC } from 'react';

interface ButtonProps extends PressableProps {
  text: string;
  isOutline?: boolean;
}

const Button: FC<ButtonProps> = ({ text, isOutline = false, ...rest }) => {
  return (
    <Pressable style={[styles.button, isOutline && styles.outline]} {...rest}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    marginTop: 16,
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: '100%',

    borderWidth: 2,
    borderRadius: 12,
    borderColor: '#1E63EE',
    backgroundColor: '#1E63EE',
  },
  outline: {
    borderColor: '#fff',
    backgroundColor: 'transparent',
  },

  text: {
    fontSize: 17,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
  },
});
