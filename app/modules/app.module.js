"use strict";
var core_1 = require('@angular/core');
// import { FormsModule }   from '@angular/forms';
var platform_1 = require('nativescript-angular/platform');
var forms_1 = require('nativescript-angular/forms');
var app_component_1 = require('./app.component');
var timer_component_1 = require('./timer/timer.component');
var app_routing_module_1 = require('./app-routing.module');
var activation_component_1 = require('./activation/activation.component');
var sqlite_service_1 = require('../services/sqlite.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                timer_component_1.TimerComponent,
                activation_component_1.ActivationComponent
            ],
            imports: [
                platform_1.NativeScriptModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.NativeScriptFormsModule,
            ],
            providers: [
                sqlite_service_1.SqliteService,
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map