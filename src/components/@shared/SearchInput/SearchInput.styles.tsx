import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  },
  flexWrapper: {
    alignItems: 'center',
  },
  searchBox: {
    width: '90%',
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#cccccc',
    paddingHorizontal: 8,
    marginBottom: 22,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchTextInput: {
    fontSize: 14,
    color: '#999999',
    marginLeft: 8,
  },
});
