import React, { Dispatch, SetStateAction } from 'react';
import { Alert, Modal, Text, Pressable, View } from 'react-native';
import styles from './WithdrawalModal.styles';

interface IWithdrawalModal {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  onWithDrawalApply: () => void;
}

const WithdrawalModal = ({
  modalVisible,
  setModalVisible,
  onWithDrawalApply,
}: IWithdrawalModal) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>나네를 탈퇴하시겠습니까?</Text>
            <View style={styles.buttonWrap}>
              <Pressable style={[styles.button, styles.buttonAccept]} onPress={onWithDrawalApply}>
                <Text style={styles.textStyle}>탈퇴하기</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>취소하기</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable style={styles.withDrawalWrap} onPress={() => setModalVisible(true)}>
        <Text style={styles.withDrawalTitle}>탈퇴하기</Text>
      </Pressable>
    </View>
  );
};

export default WithdrawalModal;
