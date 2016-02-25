(function ()
{
    'use strict';

    angular
        .module('app.datorama', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.datorama', {
                url    : '/datorama',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/datorama/datorama.html',
                       //  controller : 'DatoramaController as vm'
                    }
                },
                
            });

       
        // Navigation
        msNavigationServiceProvider.saveItem('360iCP', {
            title : 'CLIENT DASHBOARDS',
            group : true,
            weight: 1
        });

        msNavigationServiceProvider.saveItem('datorama', {
            title    : 'Jameson Dash (Datorama)',
            icon     : 'icon-tile-four',
            state    : 'app.datorama',
            /*stateParams: {
                'param1': 'page'
             },*/
            weight   : 1
        });
    }
})();