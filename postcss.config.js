module.exports = {
  /*plugins: {
    autoprefixer: {browsers: 'last 5 version'},
  },*/
  plugins: [
    require('autoprefixer')({
      browsers: 'last 2 versions, not ie <= 11, not ie_mob <= 11',
      grid: false,
    }),
  ],
};
