import * as tslib from '../node_modules/tslib/tslib';
import { TsLibKey } from './types';

const tsLibKeys = Object.keys(tslib) as TsLibKey[];

tsLibKeys.forEach(key => {
    if (!self[key]) {
        self[key] = tslib[key];
    }
});