import { StyleSheet, Text, View, ViewStyle, Pressable } from 'react-native';
import {
  Control,
  Controller,
  FieldPath,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';
import { AntDesign } from '@expo/vector-icons';
interface CheckBoxProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  rules?: Omit<
    RegisterOptions<T, FieldPath<T>>,
    'valueAsNumber' | 'ValueAsDate' | 'setValueAs' | 'disabled'
  >;
  title: string;
  subTitle?: string;
  style?: ViewStyle;
}

const CheckBox = <T extends Record<string, any>>({
  title,
  subTitle,
  style,
  control,
  rules,
  name,
}: CheckBoxProps<T>) => {
  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <View style={[styles.container, style]}>
          <Pressable
            onPress={() => {
              onChange(!value);
            }}
            style={[styles.checkbox, value && styles.checked]}
          >
            {value && <AntDesign name='check' size={16} color='#FFFFFF' />}
          </Pressable>
          <View>
            <Text numberOfLines={1} style={styles.title}>
              {title}
            </Text>
            {subTitle && (
              <Text numberOfLines={1} style={styles.subTitle}>
                {subTitle}
              </Text>
            )}
          </View>
        </View>
      )}
    />
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkbox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#BCC3D0',
    borderRadius: 4,
    marginRight: 16,
  },
  checked: {
    backgroundColor: '#00C56D',
    borderColor: '#00C56D',
  },
  title: {
    maxWidth: 307,
    fontSize: 13,
    color: '#1E63EE',
    textDecorationLine: 'underline',
  },
  subTitle: {
    maxWidth: 320,
    fontSize: 13,
    color: '#000',
  },
});
