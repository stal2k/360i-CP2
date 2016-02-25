(function ()
{
    'use strict';

    angular
        .module('app.home', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.home', {
                url    : '/360i-client-portal',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/home/home.html',
                        // controller : 'HomeController as vm'
                    }
                },
                /* resolve: {
                    HomeData: function (apiResolver)
                    {
                        return apiResolver.resolve('home@get');
                    }
                } */
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/home');

        // Navigation
        

        msNavigationServiceProvider.saveItem('home', {
            title    : '360i DNS',
            icon     : 'icon-tile-four',
            state    : 'app.home',
            /*stateParams: {
                'param1': 'page'
             },*/
            weight   : 1
        });
    }
})();