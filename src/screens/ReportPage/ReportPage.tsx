import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import BottomSheet from '../../components/BottomSheet/BottomSheet';
import OpinionCategory from '../../components/OpinionCategory/OpinionCategory';
import styles from './ReportPage.styles';
import { Ionicons } from '@expo/vector-icons';

const ReportPage = () => {
  const [email, setEmail] = useState('');
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
    setEmail(text);
  };

  const handleCategoryValueClick = (name: string) => {
    setCategoryValue(name);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>신고하기</Text>
      <TextInput
        style={styles.emailInput}
        placeholder="신고할 게시물 이름"
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
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
    </View>
  );
};

export default ReportPage;
