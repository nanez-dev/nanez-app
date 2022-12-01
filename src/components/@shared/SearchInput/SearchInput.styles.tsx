import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  bannerWrapper: {
    flexDirection: 'row',
    marginTop: 12,
  },
  bigBanner: {
    width: 350,
    height: 120,
  },
  smallBannerLeft: {
    width: 168,
    height: 120,
    marginRight: 14,
  },
  smallBannerRight: {
    width: 168,
    height: 120,
  },
  searchResultContainer: {
    flexDirection: 'row',
    padding: 22,
  },
  searchThumbnail: {
    width: 52,
    height: 52,
    marginRight: 24,
  },
  searchBrand: {
    color: '#666666',
    fontSize: 11,
    fontWeight: '400',
    marginBottom: 4,
  },
  searchPerfumeEng: {
    fontSize: 16,
    fontWeight: '700',
  },
  searchPerfumeKor: {
    fontSize: 14,
    fontWeight: '400',
    color: '#333333',
  },
  searchUnderline: {
    borderBottomWidth: 1,
    borderBottomColor: '#efefef',
  },
});
