const searchRepositories = async (query, setRepositories, setLoading) => {
    setLoading(true);
    try {
        const response = await fetch(`https://api.github.com/search/repositories?q=${query}`);
        const result = await response.json();
        setRepositories(result.items || []);
    } catch (error) {
        console.error('Error fetching repositories:', error);
    } finally {
        setLoading(false);
    }
};

const fetchRepositoryDetails = async (repoFullName, setRepoDetails, setLoading) => {
    setLoading(true);
    try {
        const response = await fetch(`https://api.github.com/repos/${repoFullName}`);
        const result = await response.json();
        setRepoDetails(result);
    } catch (error) {
        console.error('Error fetching repository details:', error);
    } finally {
        setLoading(false);
    }
};

export { searchRepositories, fetchRepositoryDetails };
