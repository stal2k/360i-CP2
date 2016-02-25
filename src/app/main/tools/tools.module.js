(function ()
{
    'use strict';

    angular
        .module('app.tools', [
           'app.tools.pspeed-jobs',
            ])
        .config(config);

    /** @ngInject */
    function config(msNavigationServiceProvider)
    {
        // Navigation
        msNavigationServiceProvider.saveItem('tools', {
            title : '360i Client Tools',
            group : true,
            weight: 2
        });
		
		msNavigationServiceProvider.saveItem('tools.pspeed-jobs', {
            title : 'Page Speed Jobs',
			icon : 'icon-table-large',
            state: 'app.tools_pspeed_jobs'
        });
		
		
    }
})();