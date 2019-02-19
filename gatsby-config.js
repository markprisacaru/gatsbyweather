module.exports = {
  siteMetadata: {
    title: `Gatsby Weather App`,
  },
  plugins: [

    {
      resolve: 'gatsby-source-openweathermap',
      options: {
        apikey: 'de4191a622f2664e717eda95cd2abcaa',
        location: 'Moscow',
        units: 'imperial',
        type: 'weather'
      },
    },

    {
      resolve: 'gatsby-source-darksky',
      options: {
        key: '45fb6f3273632c9588737bbc2304987d',
        latitude: '55.75',
        longitude: '37.61',
        exclude: ['minutely']
      },
    }

  ]
}; 