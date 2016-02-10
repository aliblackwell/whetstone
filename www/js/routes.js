angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



    .state('tabsController.allHolidays', {
      url: '/holidays',
      views: {
        'tab1': {
          templateUrl: 'templates/allHolidays.html',
          controller: 'allHolidaysCtrl'
        }
      }
    })





    .state('tabsController.myHolidays', {
      url: '/my-holidays',
      views: {
        'tab2': {
          templateUrl: 'templates/myHolidays.html',
          controller: 'myHolidaysCtrl'
        }
      }
    })





    .state('tabsController.requests', {
      url: '/requests',
      views: {
        'tab3': {
          templateUrl: 'templates/requests.html',
          controller: 'requestsCtrl'
        }
      }
    })




    .state('tabsController', {
      url: '',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })




    .state('tabsController.newRequest', {
      url: '/new-request',
      views: {
        'tab2': {
          templateUrl: 'templates/newRequest.html',
          controller: 'newRequestCtrl'
        }
      }
    })


    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/holidays');

});