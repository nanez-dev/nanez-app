import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    fontSize: 16,
  },
  emailInput: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginVertical: 20,
    backgroundColor: '#FAFAFD',
  },
  report: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginBottom: 20,
    backgroundColor: '#FAFAFD',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default styles;
