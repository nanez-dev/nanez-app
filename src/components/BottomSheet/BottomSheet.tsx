import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import {
  View,
  Modal,
  Animated,
  Dimensions,
  PanResponder,
  Pressable,
  ScrollView,
  Text,
} from 'react-native';
import { styles } from './BottomSheet.styles';

interface IBottomSheet {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  height: number;
  children: React.ReactNode;
}

const BottomSheet = ({ modalVisible, setModalVisible, height, children }: IBottomSheet) => {
  const screenHeight = Dimensions.get('screen').height;
  const panY = useRef(new Animated.Value(screenHeight)).current;

  const translateY = panY.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 0, 1],
  });

  const resetBottomSheet = Animated.timing(panY, {
    toValue: 0,
    duration: 300,
    useNativeDriver: true,
  });

  const closeBottomSheet = Animated.timing(panY, {
    toValue: screenHeight,
    duration: 300,
    useNativeDriver: true,
  });

  const panResponders = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => false,
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        panY.setValue(gestureState.dy);
      },
      onPanResponderRelease: (event, gestureState) => {
        if (gestureState.dy > 0 && gestureState.vy > 1.5) {
          closeModal();
        } else {
          resetBottomSheet.start();
        }
      },
    })
  ).current;

  useEffect(() => {
    if (modalVisible) {
      resetBottomSheet.start();
    }
  }, [modalVisible, resetBottomSheet]);

  const closeModal = () => {
    closeBottomSheet.start(() => {
      setModalVisible(false);
    });
  };

  const closeTouchModal = (e: any) => {
    const overlayHeight = screenHeight - height;
    const touchY = e.nativeEvent.pageY;
    const overLayTouch = overlayHeight > touchY ? true : false;

    if (overLayTouch) {
      closeBottomSheet.start(() => {
        setModalVisible(false);
      });
    }
  };

  return (
    <Modal visible={modalVisible} animationType={'fade'} transparent statusBarTranslucent>
      <Pressable onPress={closeTouchModal} style={styles.overlay}>
        <Animated.View
          style={{
            ...styles.bottomSheetContainer,
            height: height,
            transform: [{ translateY: translateY }],
          }}
          {...panResponders.panHandlers}
        >
          <View style={{ alignItems: 'center' }}>
            <View style={styles.etcs} />
            <Text>{''}</Text>
          </View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            style={styles.bottomSheetContainer}
          >
            {children}
          </ScrollView>
        </Animated.View>
      </Pressable>
    </Modal>
  );
};

export default BottomSheet;
