import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import {searchRepositories} from '../api/searchRepositories';
import {useFavorites} from '../context/FavoritesContext';
import HomeScreenStyles from '../styles/HomeScreenStyles';

const HomeScreen = ({navigation}) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [repositories, setRepositories] = useState([]);
  const {favorites, toggleFavorite} = useFavorites();

  const isFavorite = currentItem => {
    return favorites.some(item => item.id === currentItem.id);
  };
  return (
    <SafeAreaView>
      <View style={HomeScreenStyles.container}>
        <TextInput
          placeholder="Search repositories..."
          value={query}
          onChangeText={setQuery}
          style={HomeScreenStyles.input}
        />
        <Button
          title="Search"
          onPress={() => searchRepositories(query, setRepositories, setLoading)}
        />

        <TouchableOpacity
          style={HomeScreenStyles.searchButton}
          onPress={() => navigation.navigate('FavoritesScreen')}>
          <Text style={HomeScreenStyles.searchButtonText}>View Favorites</Text>
        </TouchableOpacity>

        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <ScrollView>
            {repositories.length > 0 ? (
              repositories.map(item => (
                <View key={item.id} style={HomeScreenStyles.repoContainer}>
                  <Text style={HomeScreenStyles.repoName}>{item.name}</Text>

                  <View style={HomeScreenStyles.buttonContainer}>
                    <TouchableOpacity
                      style={HomeScreenStyles.detailsButton}
                      onPress={() =>
                        navigation.navigate('DetailScreen', {
                          fullName: item.full_name,
                        })
                      }>
                      <Image
                        source={require('../asset/eye.png')}
                        style={{width: 20, height: 20}}
                      />
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={HomeScreenStyles.favoriteButton}
                      onPress={() => toggleFavorite(item)}>
                      <Image
                        source={require('../asset/heart.png')}
                        style={[HomeScreenStyles.favoriteButtonImage, isFavorite(item)
                            ? HomeScreenStyles.favorited
                            : HomeScreenStyles.notFavorited,]}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              ))
            ) : (
              <Text style={HomeScreenStyles.noResultsText}>
                No repositories found.
              </Text>
            )}
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
