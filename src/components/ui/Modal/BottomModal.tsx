import {
  StyleSheet,
  Text,
  View,
  Modal,
  Alert,
  Pressable,
  ScrollView,
  Image,
} from 'react-native';
import React, {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useState,
} from 'react';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

interface BottomModalProps {
  isShow: boolean;
  setIsShow: Dispatch<SetStateAction<boolean>>;
  closeTitle: string;
}

const BottomModal: FC<PropsWithChildren<BottomModalProps>> = ({
  children,
  isShow,
  setIsShow,
  closeTitle,
}) => {
  return (
    <SafeAreaView>
      <Modal
        animationType='slide'
        transparent={true}
        visible={isShow}
        onRequestClose={() => {
          setIsShow(false);
        }}
      >
        <View style={styles.centeredView}>
          <Image
            style={styles.logo}
            source={require('../../../../assets/logo.png')}
          />
          <Pressable onPress={() => setIsShow(false)} style={styles.close}>
            <AntDesign name='close' size={20} color='white' />
            <Text style={styles.closeTitle}>{closeTitle}</Text>
          </Pressable>
          <View style={styles.logoWrapper} />
          <ScrollView style={styles.modalView}>
            <View style={styles.children}>{children}</View>
          </ScrollView>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default BottomModal;

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  centeredView: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  close: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingTop: 7,
    paddingHorizontal: 17,
    paddingBottom: 10,
    marginBottom: 16,
  },
  closeTitle: {
    marginLeft: 16,
    color: '#fff',
    fontSize: 18,
  },
  logo: {
    width: 60,
    height: 60,
    top: 45,
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 1,
  },
  logoWrapper: {
    height: 65,
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  children: {},
});
