(function ()
{
    'use strict';

    angular
        .module('app.dashboards', [
            'app.dashboards.analytics',
			'app.dashboards.project',
            'app.dashboards.server'
            
        ])
        .config(config);

    /** @ngInject */
    function config(msNavigationServiceProvider)
    {
        
        // Navigation
        msNavigationServiceProvider.saveItem('apps', {
            title : 'Project Management',
            group : true,
            weight: 1
        }); 

        msNavigationServiceProvider.saveItem('apps.dashboards', {
            title : 'Dashboards',
            icon  : 'icon-tile-four',
            weight: 1
        });

        msNavigationServiceProvider.saveItem('apps.dashboards.analytics', {
            title: 'Analytics Dash',
            state: 'app.dashboards_analytics'
        });
		
		msNavigationServiceProvider.saveItem('apps.dashboards.project', {
            title: 'JIRA / PM ',
            state: 'app.dashboards_project'
        });

        msNavigationServiceProvider.saveItem('apps.dashboards.server', {
            title: 'Technical Dash',
            state: 'app.dashboards_server'
        });

        
    }

})();