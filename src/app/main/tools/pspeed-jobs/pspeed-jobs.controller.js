(function ()
{
    'use strict';

    angular
        .module('app.tools.pspeed-jobs')
        .controller('PspeedJobsController', PspeedJobsController);

    /** @ngInject */
    function PspeedJobsController(Jobs)
    {
        var vm = this;

        // Data
        vm.jobs = Jobs.data;

        vm.dtOptions = {
            dom       : '<"top"f>rt<"bottom"<"left"<"length"l>><"right"<"info"i><"pagination"p>>>',
            pagingType: 'simple',
            autoWidth : false,
            responsive: true
        };

        // Methods

        //////////
    }

})();