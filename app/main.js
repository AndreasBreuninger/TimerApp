"use strict";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_1 = require('nativescript-angular/platform');
var app_module_1 = require('./modules/app.module');
var app = require('application');
app.on(app.launchEvent, function (args) {
    // on launch code
    var launchIntent = args.android;
});
app.on(app.uncaughtErrorEvent, function (args) {
    if (args.android) {
        // For Android applications, args.android is an NativeScriptError.
        console.log("NativeScriptError: " + args.android);
    }
    else if (args.ios) {
        // For iOS applications, args.ios is NativeScriptError.
        console.log("NativeScriptError: " + args.ios);
    }
});
platform_1.platformNativeScriptDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map