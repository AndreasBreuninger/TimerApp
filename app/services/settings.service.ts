import { Injectable, Input } from '@angular/core';
import * as AppSettings from 'application-settings'
// var appSettings = require("application-settings");

@Injectable()
export class SettingsService {

    constructor(){
        
    }

    public hasSetting(key: any){
        
        return AppSettings.hasKey(key);
        
    }




}

