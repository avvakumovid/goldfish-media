import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { FC, useState } from 'react';
import { IDropdown } from './dropdown.interface';
import { Dropdown } from 'react-native-element-dropdown';
import {
  Control,
  Controller,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';

interface IOptions {
  label: string;
  value: any;
}
interface DropdownProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  rules?: Omit<
    RegisterOptions<T, FieldPath<T>>,
    'valueAsNumber' | 'ValueAsDate' | 'setValueAs' | 'disabled'
  >;
  title: string;
  style?: ViewStyle;
  options: IOptions[];
  disable?: boolean;
}

const DropdownControl = <T extends Record<string, any>>({
  control,
  name,
  title,
  rules,
  style,
  options,
  disable = false,
}: DropdownProps<T>) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Dropdown
            disable={disable}
            style={[
              styles.dropdown,
              isFocus && { borderColor: '#1E63EE' },
              error && styles.error,
              disable && styles.disabled,
            ]}
            placeholderStyle={[
              styles.placeholderStyle,
              disable && styles.disabled,
            ]}
            selectedTextStyle={styles.selectedTextStyle}
            iconColor={disable ? '#A4A4A4' : '$000'}
            data={options}
            maxHeight={300}
            labelField='label'
            valueField='value'
            placeholder={!isFocus ? 'Выберите' : '...'}
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={onChange}
          />
        )}
      />
    </View>
  );
};
export default DropdownControl;

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
    maxWidth: 65,
  },
  wrapper: {
    display: 'flex',
  },
  dropdown: {
    height: 48,
    paddingVertical: 14.5,
    paddingLeft: 16,
    paddingRight: 27,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#CACACC',
    backgroundColor: 'transparent',
    width: 263,
  },
  disabled: {
    backgroundColor: '#F7F7F7',
    color: '#A4A4A4',
  },
  error: {
    borderColor: '#FA4D23',
  },
  placeholderStyle: {
    fontSize: 15,
  },
  selectedTextStyle: {
    fontSize: 15,
  },
});
