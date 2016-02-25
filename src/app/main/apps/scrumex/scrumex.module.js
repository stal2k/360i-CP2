(function ()
{
    'use strict';

    angular
        .module('app.scrumex', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.scrumex', {
                url    : '/scrumex',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/apps/scrumex/scrumex.html',
                        controller : 'ScrumexController as vm'
                    }
                },
            });

       
        // Navigation
       

        msNavigationServiceProvider.saveItem('apps.scrumex', {
            title    : 'Scrumboard External',
            icon     : 'icon-trello',
            state    : 'app.scrumex',
            weight   : 6
        });
    }
})();