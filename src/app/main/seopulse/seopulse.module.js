(function ()
{
    'use strict';

    angular
        .module('app.seopulse', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.seopulse', {
                url    : '/seopulse',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/seopulse/seopulse.html',
                        controller : 'SeopulseController as vm'
                    }
                },
                
            });

       
        // Navigation
       

        msNavigationServiceProvider.saveItem('seopulse', {
            title    : 'SEO Pulse',
            icon     : 'icon-tile-four',
            state    : 'app.seopulse',
            /*stateParams: {
                'param1': 'page'
             },*/
            weight   : 1
        });
    }
})();