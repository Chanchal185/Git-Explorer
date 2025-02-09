import { StyleSheet } from 'react-native';

const HomeScreenStyles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        borderWidth: 0.3,
        padding: 10,
        marginBottom: 10,
        color: '#000',
        backgroundColor: '#ccc',
    },
    searchButton: {
        backgroundColor: '#0D6EFD',
        padding: 10,
        marginTop: 10,
        alignItems: 'center',
        borderRadius: 5,
    },
    searchButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    repoContainer: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 5,
    },
    repoName: {
        color: '#000',
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    detailsButton: {
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 5,
        marginRight: 5,
    },
    favoriteButton: {
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 5,
    },
    favoriteButtonImage: {
        tintColor: 'red',
        width: 20,
        height: 20
    },
    favorited: {tintColor: 'red'},
    notFavorited: {tintColor: 'gray'},
    noResultsText: {
        textAlign: 'center',
        marginTop: 20,
    },
});

export default HomeScreenStyles;
