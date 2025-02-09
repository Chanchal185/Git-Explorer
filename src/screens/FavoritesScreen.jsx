import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useFavorites } from '../context/FavoritesContext';

import FavoritesScreenStyles from '../styles/FavoritesScreenStyles';

const FavoritesScreen = ({ navigation }) => {
    const { favorites, toggleFavorite } = useFavorites();

    return (
        <View style={FavoritesScreenStyles.container}>
            <Text style={FavoritesScreenStyles.header}>Favorite Repositories</Text>
            
            {favorites.length === 0 ? (
                <Text style={FavoritesScreenStyles.emptyText}>No favorites added yet.</Text>
            ) : (
                <FlatList
                    data={favorites}
                    keyExtractor={(item) => item.node_id}
                    renderItem={({ item }) => (
                        <View style={FavoritesScreenStyles.repoContainer}>
                            <Text style={FavoritesScreenStyles.repoName}>{item.name}</Text>
                            
                            <View style={FavoritesScreenStyles.buttons}>
                                <TouchableOpacity
                                    style={FavoritesScreenStyles.detailButton}
                                    onPress={() => navigation.navigate('DetailScreen', { repo: item })}
                                >
                                    <Text style={FavoritesScreenStyles.buttonText}>View Details</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={FavoritesScreenStyles.removeButton}
                                    onPress={() => toggleFavorite(item)}
                                >
                                    <Text style={FavoritesScreenStyles.buttonText}>Remove</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                />
            )}
        </View>
    );
};


export default FavoritesScreen;
