import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {fetchRepositoryDetails} from '../api/searchRepositories';
import {useFavorites} from '../context/FavoritesContext';

import DetailScreenStyles from '../styles/DetailScreenStyles';

const DetailScreen = ({route}) => {
  const {fullName} = route.params;
  const [repoDetails, setRepoDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const {favorites, toggleFavorite} = useFavorites();

  useEffect(() => {
    fetchRepositoryDetails(fullName, setRepoDetails, setLoading);
  }, [fullName]);

  const isFavorite = repoDetails
    ? favorites.some(item => item.id === repoDetails.id)
    : false;

  return (
    <SafeAreaView style={DetailScreenStyles.container}>
      <View style={DetailScreenStyles.content}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : repoDetails ? (
          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={{uri: repoDetails.owner?.avatar_url}}
                style={DetailScreenStyles.avatar}
              />
              <Text style={DetailScreenStyles.title}>{repoDetails.name}</Text>
            </View>

            <Text style={DetailScreenStyles.owner}>
              Owner: {repoDetails.owner?.login}
            </Text>
            <Text style={DetailScreenStyles.info}>
              ⭐ Stars: {repoDetails.stargazers_count}
            </Text>
            <Text style={DetailScreenStyles.info}>
              🍴 Forks: {repoDetails.forks_count}
            </Text>
            <Text style={DetailScreenStyles.description}>
              {repoDetails.description || 'No description available'}
            </Text>

            <TouchableOpacity
              style={[
                DetailScreenStyles.favoriteButton,
                isFavorite
                  ? DetailScreenStyles.favorited
                  : DetailScreenStyles.notFavorited,
              ]}
              onPress={() => toggleFavorite(repoDetails)}>
              <Text style={DetailScreenStyles.favoriteText}>
                {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Text style={DetailScreenStyles.error}>
            Failed to load repository details.
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;
