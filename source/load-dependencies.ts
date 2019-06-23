import {
    dependencies
} from './config';
import loadScript from './load-script';
import isWindow from './is-window';

export default async function () {
    isWindow() && await loadDependencies();
}

async function loadDependencies() {
    await Promise.all(dependencies.map(src => loadScript({name: src, src})));
}