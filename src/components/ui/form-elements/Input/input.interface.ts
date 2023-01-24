import { Control, FieldPath, RegisterOptions, FieldValues } from 'react-hook-form'
import { TextInputProps, ViewStyle } from 'react-native';

export interface IInput<T extends FieldValues> extends Omit<TextInputProps, 'onChange' | 'onChangeText' | 'value'> {
    control: Control<T>
    name: FieldPath<T>
    title: string,
    rules?: Omit<RegisterOptions<T, FieldPath<T>>, 'valueAsNumber' | 'ValueAsDate' | 'setValueAs' | 'disabled'>
    placeholder?: string
    style?: ViewStyle
}