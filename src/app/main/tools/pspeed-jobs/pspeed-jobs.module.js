(function ()
{
    'use strict';

    angular
        .module('app.tools.pspeed-jobs', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.tools_pspeed_jobs', {
            url    : '/tools/pspeed-jobs',
            views  : {
                'content@app': {
                    templateUrl: 'app/main/tools/pspeed-jobs/pspeed-jobs.html',
                    controller : 'PspeedJobsController as vm'
                }
            },
            resolve: {
                Jobs: function (apiResolver)
                {
                    return apiResolver.resolve('pspeedjobs.pspeedjobs@get');
                }
            }
        });
    }

})();