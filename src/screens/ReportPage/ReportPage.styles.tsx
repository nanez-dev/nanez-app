import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 16,
  },
  emailInput: {
    padding: 10,
    borderRadius: 20,
    marginVertical: 20,
    backgroundColor: '#FAFAFD',
  },
  report: {
    padding: 10,
    borderRadius: 20,
    marginBottom: 20,
    backgroundColor: '#FAFAFD',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reportContent: {
    padding: 10,
    backgroundColor: '#FAFAFD',
    height: 400,
    textAlignVertical: 'top',
    borderRadius: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#EDEDED',
    marginBottom: 26,
  },
});

export default styles;
