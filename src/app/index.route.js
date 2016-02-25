(function ()
{
    'use strict';

    angular
        .module('360iCP')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider, $locationProvider)
    {
        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/datorama');

        
        // State definitions
$stateProvider
    .state('app', {
        abstract: true,
        views   : {
            'main@'         : {
                templateUrl: 'app/core/layouts/vertical-navigation.html',  //Replaced it with "main" from above
                controller : 'MainController as vm'
            },
            'toolbar@app'   : {
                templateUrl: 'app/toolbar/layouts/vertical-navigation/toolbar.html', //Replaced it with "toolbar" from above
                controller : 'ToolbarController as vm'
            },
            'navigation@app': {
                templateUrl: 'app/navigation/layouts/vertical-navigation/navigation.html', //Replaced it with "navigation" from above
                controller : 'NavigationController as vm'
            },
            'quickPanel@app': {
                templateUrl: 'app/quick-panel/quick-panel.html',
                controller : 'QuickPanelController as vm'
            }
        }
    });
    }

})();