import { ImageSourcePropType } from 'react-native';

interface IPerfumeData {
  id: number;
  image: ImageSourcePropType;
  name: string;
  enName?: string;
}

const perfumeData: IPerfumeData[] = [
  {
    id: 1,
    image: require('../assets/images/jomalone.png'),
    name: '조말론',
    enName: 'jomalone',
  },
  {
    id: 2,
    image: require('../assets/images/byredo.png'),
    name: '바이레도',
    enName: 'byredo',
  },
  {
    id: 3,
    image: require('../assets/images/diptyque.png'),
    name: '딥디크',
    enName: 'diptyque',
  },
  {
    id: 4,
    image: require('../assets/images/jomalone.png'),
    name: '조말론',
    enName: 'jomalone',
  },
  {
    id: 5,
    image: require('../assets/images/byredo.png'),
    name: '바이레도',
    enName: 'byredo',
  },
  {
    id: 6,
    image: require('../assets/images/diptyque.png'),
    name: '딥디크',
    enName: 'diptyque',
  },
];

export default perfumeData;
