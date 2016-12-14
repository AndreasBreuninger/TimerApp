// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from 'nativescript-angular/platform';
import { AppModule } from './modules/app.module';
import app = require('application');
import { AppRoutingModule } from './modules/app-routing.module';
import { RouterExtensions } from 'nativescript-angular';


app.on(app.launchEvent, function (args: app.ApplicationEventData) {
    // on launch code
    var launchIntent = args.android;

});

app.on(app.uncaughtErrorEvent, function (args: app.ApplicationEventData) {
    if (args.android) {
        // For Android applications, args.android is an NativeScriptError.
        console.log("NativeScriptError: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is NativeScriptError.
        console.log("NativeScriptError: " + args.ios);
    }
});

platformNativeScriptDynamic().bootstrapModule(AppModule);