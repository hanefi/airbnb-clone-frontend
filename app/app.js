import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-webpack'
import 'app.css';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import ngAnimate from 'angular-animate';

import AppComponent from './app.component';
import Home from './home';
import Profile from './profile'

import Listing from './models/listing';
import User from './models/user'

const root = angular
  .module('eyirbiyenbiApp', [
    Home,
    Profile,
    uiRouter,
    uiBootstrap,
    // ui.bootstrap,
    ngAnimate,
    Listing,
    User
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
