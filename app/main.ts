// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from 'nativescript-angular/platform';
import { AppModule } from './modules/app.module';
import app = require('application');

app.on(app.launchEvent, function (args: app.ApplicationEventData) {
    // on launch code
    console.log(args);
});


platformNativeScriptDynamic().bootstrapModule(AppModule);
