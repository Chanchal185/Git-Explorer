import {StyleSheet} from 'react-native';

const DetailScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 10,
    margin: 20
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop: 37
  },
  owner: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  info: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#444',
    textAlign: 'center',
    marginTop: 10,
  },
  favoriteButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  favorited: {
    backgroundColor: 'red',
  },
  notFavorited: {
    backgroundColor: 'green',
  },
  favoriteText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  error: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
});

export default DetailScreenStyles;
