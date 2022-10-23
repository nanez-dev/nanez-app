import { TouchableOpacity } from 'react-native';

interface IProps {
  children: JSX.Element;
  onPress: (index: number, questionIndex: number) => void;
  index: number;
  questionIndex: number;
}

const TouchableOpacityOnPressOptimized = ({ children, onPress, index, questionIndex }: IProps) => {
  return (
    <TouchableOpacity onPress={() => onPress(index, questionIndex)}>{children}</TouchableOpacity>
  );
};

export default TouchableOpacityOnPressOptimized;
