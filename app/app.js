

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-webpack'
import 'app.css';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import AppComponent from './app.component';
import Home from './home';
import User from './user'

import Listing from './models/listing';
import User_2 from './models/user'

const root = angular
  .module('eyirbiyenbiApp', [
    Home,
    User_1,
    uiRouter,
    Listing,
    User_2
  ])
  .config(($locationProvider, $urlRouterProvider) => {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    $urlRouterProvider.otherwise('/');
  })
  .constant('API_URL', 'http://localhost:3000')
  .component('app', AppComponent)
  .name;

export default root;
