import COLORS from '../../constants/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  productImage: {
    width: 350,
    height: 350,
  },
  productInfo: {
    backgroundColor: 'white',
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderBottomColor: '#eee',
    borderBottomWidth: 5,
    width: '100%',
    height: 150,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  accordInfo: {
    backgroundColor: 'white',
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  accordImage: {
    width: 100,
    height: 100,
    border: 1,
    borderStyle: 'solid',
    borderColor: COLORS.BORDER_COLOR,
    borderRadius: 8,
  },
  noteInfo: {
    backgroundColor: 'white',
    paddingVertical: 24,
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  noteImage: {
    width: 100,
    height: 100,
    border: 1,
    borderStyle: 'solid',
    borderColor: COLORS.BORDER_COLOR,
    borderRadius: 8,
    marginBottom: 10,
  },
  noteTitle: {
    width: 100,
    overflow: 'hidden',
    whiteSpace: 'no-wrap',
    textOverflow: 'ellipsis',
  },
});
