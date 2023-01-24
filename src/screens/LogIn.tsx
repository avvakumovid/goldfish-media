import Layout from '../components/Layout/Layout';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import BottomModal from '../components/ui/Modal/BottomModal';
import SingUpForm from '../components/ui/SinUpForm/SingUpForm';
import Button from '../components/ui/Button/Button';
const LogIn = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Layout>
      <Image
        style={{ marginTop: 167 }}
        source={require('../../assets/logo.png')}
      />
      <Text style={styles.heading}>Программа поддержки пациентов и врачей</Text>
      <Pressable onPress={() => setModalVisible(true)} style={styles.register}>
        <Text style={styles.registerText}>Регистрация</Text>
      </Pressable>
      <Button onPress={() => setModalVisible(true)} isOutline text='Врач' />

      <BottomModal
        closeTitle='Регистрация в кабинете врача'
        isShow={modalVisible}
        setIsShow={setModalVisible}
      >
        <SingUpForm />
      </BottomModal>
    </Layout>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  heading: {
    marginTop: 16,
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
  register: {
    marginTop: 136,
  },
  registerText: {
    fontSize: 21,
    color: '#fff',
    fontWeight: '600',
  },
  entrance: {
    marginTop: 16,
    paddingVertical: 15,
    paddingHorizontal: 150,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 12,
  },
  entranceText: {
    fontSize: 17,
    color: '#fff',
    fontWeight: '600',
  },
});
