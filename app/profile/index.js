import angular from 'angular'
import uiRouter from 'angular-ui-router'
import ProfileComponent from './profile.component'

const profile = angular
  .module('profile', [
    uiRouter
  ])
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('profile', {
        url: '/profile',
        template: '<profile />'
      });
    $urlRouterProvider.otherwise('/');
  })
  .component('profile', ProfileComponent)
  .name;

export default profile;
