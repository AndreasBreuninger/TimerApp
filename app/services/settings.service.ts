import { Injectable } from '@angular/core';
import * as AppSettings from 'application-settings'

@Injectable()
export class SettingsService {

    constructor() {

    }

    public hasSetting(key: any) {

        return AppSettings.hasKey(key);
    }

    public getString(key: string) {
        if (this.hasSetting(key)) {
            return AppSettings.getString(key);
        }

        return "";
    }

    public getInteger(key: string) {
        if (this.hasSetting(key)) {
            return AppSettings.getNumber(key);
        }

        return -1;
    }

    public getBool(key: string) {
        if (this.hasSetting(key)) {
            return AppSettings.getBoolean(key);
        }

        return false;
    }

    public setInteger(key: string, value: number) {
        return AppSettings.setNumber(key, value);
    }

    public setString(key: string, value: string) {
        return AppSettings.setString(key, value);
    }

    public setBool(key: string, value: boolean) {
        return AppSettings.setBoolean(key, value);
    }
}