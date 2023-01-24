import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../form-elements/Input/Input';
import Button from '../Button/Button';
import UploadInput from '../form-elements/UploadInput/UploadInput';
import CheckBoxControl from '../form-elements/CheckBox/CheckBox';
import CodeInput from '../form-elements/CodeInput/CodeInput';
import Dropdown from '../form-elements/Dropdown/Dropdown';

interface ISingUpForm {
  lastName: string;
  fistName: string;
  middleName: string;
  phone: number;
  email: string;
  city: string;
  diploma: any;
  specialization?: string;
  isPersonalData: boolean;
  isPromotions?: boolean;
  isGallery?: boolean;
  promo?: string;
}

const SingUpForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ISingUpForm>();
  const [isDataFetching, setIsDataFetching] = useState<boolean>(false);

  const [code, setCode] = useState<string[]>([]);
  const onSubmit = (data: ISingUpForm) => {
    console.log(data);
    setIsDataFetching(true);
  };
  return (
    <View style={styles.container}>
      {!isDataFetching ? (
        <>
          <Text>{errors.specialization?.message}</Text>
          <Input<ISingUpForm>
            control={control}
            name='lastName'
            key='lastName'
            title='Фамилия'
            placeholder='Фамилия'
            rules={{
              required: 'Заполните поле',
            }}
          />
          <Input<ISingUpForm>
            control={control}
            name='fistName'
            key='fistName'
            title='Имя'
            placeholder='Имя'
            rules={{
              required: 'Заполните поле',
            }}
          />
          <Input<ISingUpForm>
            control={control}
            name='middleName'
            key='middleName'
            title='Отчество'
            placeholder='Отчество'
            rules={{
              required: 'Заполните поле',
            }}
          />
          <Input<ISingUpForm>
            control={control}
            name='phone'
            key='phone'
            title='Телефон'
            placeholder='+7 (___)___-__-__'
            textContentType='telephoneNumber'
            dataDetectorTypes='phoneNumber'
            keyboardType='phone-pad'
            maxLength={11}
            placeholderTextColor='black'
            rules={{
              required: 'Заполните поле',
              maxLength: 11,
              minLength: 11,
            }}
          />
          <Input<ISingUpForm>
            control={control}
            name='email'
            key='email'
            title='EmailEmailEmailEmail'
            placeholder='Email'
            rules={{
              required: 'Заполните поле',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid email address',
              },
            }}
          />
          <Dropdown
            title='Город'
            options={[
              {
                label: 'Москва',
                value: 'moscow',
              },
              {
                label: 'Санкт-Петербург',
                value: 'saint-petersburg',
              },
              {
                label: 'Владивосток',
                value: 'vladivostok',
              },
            ]}
            control={control}
            name='city'
          />
          <UploadInput
            removeValue={() => {
              setValue('diploma', null);
            }}
            control={control}
            rules={{ required: 'Заполните поле' }}
            name='diploma'
            title='Диплом'
          />
          <Dropdown
            disable
            options={[
              {
                label: 'Cтоматолог',
                value: 'dentist',
              },
              {
                label: 'Xирург',
                value: 'surgeon',
              },
              {
                label: 'Окулист',
                value: 'optometrist',
              },
            ]}
            title='Специализация'
            control={control}
            name='specialization'
          />
          <CheckBoxControl
            style={{
              marginTop: 25,
            }}
            control={control}
            name='isPersonalData'
            title='Согласие на обработку персональных данных Согласие на обработку персональных данных'
          />
          <CheckBoxControl
            style={{
              marginTop: 11,
            }}
            control={control}
            name='isPromotions'
            title='Согласие на участие в акциях'
            subTitle='по продвижению приложения'
          />
          <CheckBoxControl
            style={{
              marginTop: 11,
              marginBottom: 25,
            }}
            control={control}
            name='isGallery'
            title='Согласие на участие в галерее'
            subTitle='рекомендованных врачей'
          />
          <Input<ISingUpForm>
            control={control}
            name='promo'
            key='promo'
            title='Введите промокод'
            placeholder='Промокод'
          />

          <Button onPress={handleSubmit(onSubmit)} text='Продолжить' />
        </>
      ) : (
        <View style={styles.auth}>
          <Text style={styles.authTitle}>Введите код авторизации</Text>
          <CodeInput code={code} setCode={setCode} />
          <Text style={styles.requestTitle}>Запросить код авторизации</Text>
          <Button
            onPress={() => {
              console.log(code);
            }}
            text='Продолжить'
          />
        </View>
      )}
    </View>
  );
};

export default SingUpForm;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 17,
    paddingBottom: 17,
    display: 'flex',
  },
  auth: {
    display: 'flex',
    flexDirection: 'column',
  },
  authTitle: {
    marginBottom: 14,
    fontSize: 21,
    fontWeight: '600',
    textAlign: 'center',
  },
  requestTitle: {
    marginTop: 16,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    color: '#1E63EE',
  },
});
