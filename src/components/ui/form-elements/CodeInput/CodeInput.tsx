import { StyleSheet, View, TextInput } from 'react-native';
import React, { useState, FC, SetStateAction, Dispatch } from 'react';

interface CodeInputProps {
  code: string[];
  setCode: Dispatch<SetStateAction<string[]>>;
}

const CodeInput: FC<CodeInputProps> = ({ code, setCode }) => {
  const onChangeText = (value: string) => {
    if (value) {
      setCode(prev => {
        let temp = [...prev];
        temp.push(value[value.length - 1]);
        return temp;
      });
    } else {
      setCode(prev => {
        let temp = [...prev];
        temp.pop();
        return temp;
      });
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChangeText}
        value={code[0]}
        maxLength={2}
        style={styles.input}
        autoFocus={code.length == 0}
        keyboardType='numeric'
      />
      <TextInput
        onChangeText={onChangeText}
        value={code[1]}
        maxLength={2}
        style={styles.input}
        keyboardType='numeric'
      />
      <TextInput
        onChangeText={onChangeText}
        value={code[2]}
        maxLength={2}
        style={styles.input}
        keyboardType='numeric'
      />
      <TextInput
        onChangeText={onChangeText}
        value={code[3]}
        maxLength={2}
        keyboardType='numeric'
        style={styles.input}
      />
      <TextInput
        onChangeText={onChangeText}
        value={code[4]}
        maxLength={2}
        style={styles.input}
        keyboardType='numeric'
      />
      <TextInput
        onChangeText={onChangeText}
        value={code[5]}
        maxLength={2}
        style={styles.input}
        keyboardType='numeric'
      />
    </View>
  );
};

export default CodeInput;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 52,
  },
  input: {
    width: 40,
    height: 48,
    borderWidth: 1,
    borderColor: '#CACACC',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 30,
  },
});
