import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useState } from 'react';
import * as DocumentPicker from 'expo-document-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import {
  Control,
  Controller,
  FieldPath,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';

interface UploadInputControl<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  rules?: Omit<
    RegisterOptions<T, FieldPath<T>>,
    'valueAsNumber' | 'ValueAsDate' | 'setValueAs' | 'disabled'
  >;
  title: string;
  removeValue: () => void;
}

const UploadInput = <T extends Record<string, any>>({
  control,
  name,
  rules,
  title,
  removeValue,
}: UploadInputControl<T>) => {
  const [file, setFile] = useState<string | null>();

  const pickImage = async (onChange: (...event: any[]) => void) => {
    let result = await DocumentPicker.getDocumentAsync({});

    if (result) {
      //@ts-ignore
      onChange(result.uri);
      //@ts-ignore
      setFile(result.name);
    }
  };
  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({ field: { onChange }, fieldState: { error } }) => (
        <>
          <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.wrapper}>
              <Pressable
                style={styles.upload}
                onPress={() => {
                  pickImage(onChange);
                }}
              >
                <MaterialCommunityIcons
                  name='paperclip'
                  size={18}
                  color='#1E63EE'
                />
                <Text style={styles.text}>Прикрепить файл</Text>
              </Pressable>
              {error && <Text style={styles.error}>{error.message}</Text>}
              {file && (
                <View style={styles.file}>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode='tail'
                    style={styles.fileText}
                  >
                    {file}
                  </Text>
                  <Pressable
                    onPress={() => {
                      setFile(null);
                      removeValue();
                    }}
                  >
                    <AntDesign name='close' size={16} color='#1E63EE' />
                  </Pressable>
                </View>
              )}
            </View>
          </View>
        </>
      )}
    />
  );
};

export default UploadInput;
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
    alignSelf: 'flex-start',
    marginTop: 14,
  },
  wrapper: {
    display: 'flex',
  },
  upload: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
    alignItems: 'center',
    height: 48,
    borderWidth: 1.2,
    borderStyle: 'dashed',
    borderRadius: 8,
    borderColor: '#1E63EE',
    backgroundColor: 'transparent',
    width: 263,
  },
  text: {
    color: '#1E63EE',
    marginLeft: 10,
  },
  file: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 18,
    backgroundColor: '#E9F0FE',
    width: 'auto',
    alignSelf: 'flex-start',
    maxWidth: 263,
  },
  fileText: {
    fontSize: 13,
    color: '#1E63EE',
    marginRight: 6,
  },
  error: {
    color: '#FA4D23',
    marginTop: 8,
  },
});
