import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  userInfo: {
    marginTop: 20,
    alignItems: 'center',
  },
  userName: {
    fontSize: 20,
    fontWeight: '700',
  },
  userEmail: {
    color: '#666666',
    fontWeight: '400',
    fontSize: 14,
  },
  joinWrap: {
    alignItems: 'flex-end',
    marginTop: 15,
    marginRight: 20,
  },
  joinTitle: {
    backgroundColor: '#65bfc4',
    color: 'white',
    fontWeight: '700',
    padding: 10,
  },
  listCollection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 80,
    marginTop: 40,
    paddingBottom: 24,
    borderBottomWidth: 6,
    borderBottomColor: COLORS.BORDER_COLOR,
  },
  serviceCollection: {
    marginTop: 10,
    justifyContent: 'space-between',
  },
  serviceTitle: {
    fontSize: 20,
    fontWeight: '700',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
