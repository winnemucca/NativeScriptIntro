"use strict";
var main_view_model_1 = require('./main-view-model');
var vm = new main_view_model_1.MainViewModel();
var page;
function pageLoaded(args) {
    page = args.object;
    page.bindingContext = vm;
    vm.init();
}
exports.pageLoaded = pageLoaded;
//# sourceMappingURL=main-page.js.map