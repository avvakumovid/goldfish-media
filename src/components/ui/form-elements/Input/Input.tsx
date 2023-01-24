import { TextInput, View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import { IInput } from './input.interface';
import { Controller } from 'react-hook-form';
import { AntDesign } from '@expo/vector-icons';
const Field = <T extends Record<string, any>>({
  control,
  rules,
  name,
  title,
  ...rest
}: IInput<T>): JSX.Element => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({
        field: { onChange, value, onBlur },
        fieldState: { error, invalid },
        formState: { isValid },
      }) => {
        return (
          <View style={styles.container}>
            <Text numberOfLines={2} style={styles.title}>
              {title}
            </Text>
            <TextInput
              style={[
                styles.input,
                !invalid && !isFocus && value && styles.valid,
                error && styles.error,
                isFocus && styles.focus,
              ]}
              autoCapitalize='none'
              onChangeText={onChange}
              onBlur={() => {
                setIsFocus(false);
              }}
              onFocus={() => setIsFocus(true)}
              value={(value || '').toString()}
              {...rest}
            />
            {error && !isFocus && (
              <Text style={styles.errorMsg}>Заполните поле</Text>
            )}
            {!invalid && !isFocus && value && (
              <AntDesign
                style={styles.searchIcon}
                name='check'
                size={15}
                color='#00C56D'
              />
            )}
          </View>
        );
      }}
    />
  );
};

export default Field;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
  },
  title: {
    marginRight: 'auto',
    maxWidth: 100,
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  searchIcon: {
    position: 'absolute',
    right: 10,
  },
  input: {
    height: 48,
    paddingVertical: 14.5,
    paddingLeft: 16,
    paddingRight: 27,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#CACACC',
    backgroundColor: '#F7F7F7',
    width: 263,
  },
  focus: {
    borderColor: '#1E63EE',
    backgroundColor: '#fff',
  },
  valid: {
    borderColor: '#00C56D',
    backgroundColor: '#fff',
  },
  error: {
    borderColor: '#FA4D23',
    backgroundColor: '#fff',
  },
  errorMsg: {
    color: '#FA4D23',
    position: 'absolute',
    right: 10,
  },
});
