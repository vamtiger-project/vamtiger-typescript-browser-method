import loadScript from './load-script';
import loadScripts from './load-scripts';
import loadScriptsSequentially from './load-scripts-sequentially';
import loadShadowStylesheet from './load-shadow-stylesheet';
import defineCustomElement from './define-custom-element';
import pause from './pause';
import getElement from './get-element';
import getData from './get-data';
import getEnvironment from './get-environment';
import setupWindow from './setup-window';
import setupWorker from './setup-worker';

const envrironment = getEnvironment();
const vamtigerBrowserMethod = {
    loadScript,
    loadScripts,
    loadScriptsSequentially,
    loadShadowStylesheet,
    defineCustomElement,
    pause,
    getElement,
    getData,
    getEnvironment,
    envrironment
};
main();

function main() {
    try {
        const { VamtigerBrowserMethod } = self;

        if (!VamtigerBrowserMethod) {
            self.VamtigerBrowserMethod = vamtigerBrowserMethod;

            setupWindow();

            setupWorker();
        }
    } catch(error) {
        handleError(error);
    }
}

function handleError(error: Error) {
    console.error(error);
    throw error;
}