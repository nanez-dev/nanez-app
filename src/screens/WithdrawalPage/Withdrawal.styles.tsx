import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  headerWrap: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '700',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 14,
    color: 'gray',
  },
  withDrawalWrap: {
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#65bfc4',
    borderRadius: 50,
  },
  withDrawalTitle: {
    fontSize: 30,
    fontWeight: '600',
    color: 'white',
  },
});

export { styles };
