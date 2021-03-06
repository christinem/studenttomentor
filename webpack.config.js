
/* Adapted from https://www.codementor.io/tamizhvendan/tutorials/beginner-
   guide-setup-reactjs-environment-npm-babel-6-webpack-du107r9zr */
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public/javascripts/react_bundles');
var APP_DIR = path.resolve(__dirname, 'public/javascripts/react_components');

var config = {
  entry: {
    login_components: APP_DIR + '/login_components.jsx',
    register_components: APP_DIR + '/register_components.jsx',
    homepage_components: APP_DIR + '/homepage_components.jsx', 
    profile_page_components: APP_DIR + '/profile_page_components.jsx',
    edit_profile_page_components: APP_DIR + '/edit_profile_page_components.jsx',
    application_page_components: APP_DIR + '/application_page_components.jsx',
    view_application_components: APP_DIR + '/view_application_components.jsx',
    search_page_components: APP_DIR + '/search_components.jsx',
    view_all_page_components: APP_DIR + '/view_all_page_components.jsx'},
  output: {
    path: BUILD_DIR,
    filename: '[name].js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  }
};

module.exports = config;