"use strict";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_1 = require('nativescript-angular/platform');
var app_module_1 = require('./modules/app.module');
var app = require('application');
app.on(app.launchEvent, function (args) {
    // on launch code
    console.log("launched");
    var launchIntent = args.android;
    var extra = launchIntent.getStringExtra("params");
    console.log(launchIntent);
    if (extra) {
    }
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
console.log("start bootstrap");
platform_1.platformNativeScriptDynamic().bootstrapModule(app_module_1.AppModule);
console.log("End bootstrap");
//# sourceMappingURL=main.js.map