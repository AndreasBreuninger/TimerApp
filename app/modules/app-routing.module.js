"use strict";
var core_1 = require('@angular/core');
var router_1 = require('nativescript-angular/router');
var timer_component_1 = require('./timer/timer.component');
var activation_component_1 = require('./activation/activation.component');
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.NativeScriptRouterModule.forRoot([
                    { path: '', pathMatch: 'full', component: timer_component_1.TimerComponent },
                    { path: 'launch', pathMatch: 'full', component: activation_component_1.ActivationComponent },
                ])
            ],
            exports: [router_1.NativeScriptRouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map