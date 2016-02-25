(function ()
{
    'use strict';

    /**
     * Main modules 
     */
    angular
        .module('360iCP', [

            // Core
            'app.core',
			
			//login
			// 'app.login',

            // Navigation
            'app.navigation',

            // Toolbar
            'app.toolbar',

            // Quick panel
            'app.quick-panel',

            // 360i Home
            'app.datorama',
			// 'app.home',
			'app.seopulse',
			
			// Apps
            // 'app.dashboards',
            'app.calendar',
            'app.file-manager',
            'app.scrumboard',
			'app.gantt-chart',
            // 'app.scrumex',
            
            // Tools
            'app.tools',
        
            
        ]);
})();