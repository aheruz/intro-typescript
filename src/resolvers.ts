export const resolvers = {
    Query: {
        featuredPlaylists: (_, __, { dataSources }) => {
            return dataSources.spotifyAPI.getFeaturedPlaylists();
        },
    }
  };