import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import BottomSheet from '../../components/BottomSheet/BottomSheet';
import OpinionCategory from '../../components/OpinionCategory/OpinionCategory';
import styles from './ReportPage.styles';
import { Ionicons } from '@expo/vector-icons';
import NextBtn from '../../components/@shared/Button/NextBtn/NextBtn';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';

type ReportScreenProps = NativeStackScreenProps<ParamListBase, 'ReportPage'>;
const ReportPage = ({ navigation: { navigate } }: ReportScreenProps) => {
  const [reportTitle, setReportTitle] = useState('');
  const [reportValue, setReportValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [category, setCategory] = useState([
    {
      id: 1,
      name: '이용 문의',
    },
    {
      id: 2,
      name: '오류/버그 신고',
    },
    {
      id: 3,
      name: '콘텐츠 신고',
    },
    {
      id: 4,
      name: '제안',
    },
    {
      id: 5,
      name: '기타',
    },
  ]);
  const [categoryValue, setCategoryValue] = useState('신고 사유');

  const handleEmailValue = (text: string) => {
    setReportTitle(text);
  };

  const handleReportValue = (text: string) => {
    setReportValue(text);
  };

  const handleCategoryValueClick = (name: string) => {
    setCategoryValue(name);
    setModalVisible(false);
  };

  const handleReportPress = () => {
    if (reportValue.length > 0 && reportTitle.length > 0) {
      Alert.alert('신고 감사합니다. 확인 후 반영하도록 하겠습니다.');
      navigate('Home');
    } else {
      Alert.alert('내용을 모두 작성해주세요.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>신고하기</Text>
      <TextInput
        style={styles.emailInput}
        placeholder="신고할 게시물 이름"
        autoCapitalize="none"
        autoCorrect={false}
        value={reportTitle}
        onChangeText={handleEmailValue}
      />
      <TouchableOpacity style={styles.report} onPress={() => setModalVisible((prev) => !prev)}>
        <Text style={styles.title}>{categoryValue}</Text>
        <Ionicons name="chevron-down-outline" size={20} />
      </TouchableOpacity>
      <BottomSheet modalVisible={modalVisible} setModalVisible={setModalVisible} height={280}>
        <View style={{ alignItems: 'center' }}>
          {category.map((el) => {
            return (
              <OpinionCategory
                key={`opinion_${el.id}`}
                name={el.name}
                onCategoryValueClick={handleCategoryValueClick}
              />
            );
          })}
        </View>
      </BottomSheet>
      <TextInput
        value={reportValue}
        onChangeText={handleReportValue}
        style={styles.reportContent}
        placeholder="상세 사유를 작성해주세요"
        multiline={true}
      />
      <NextBtn bgColor={'#FF4D4F'} title="신고하기" onPress={handleReportPress} />
    </View>
  );
};

export default ReportPage;
