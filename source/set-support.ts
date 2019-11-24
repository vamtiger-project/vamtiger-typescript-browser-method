import {
    ISupport,
    MessageAction,
    DbStoreName,
    DbKeyPath,
    TimeoutDuration,
    Environment
} from './types';
import isWorker from './is-worker';
import isWindow from './is-window';
import isServiceWorker from './is-service-worker';
import sendMessage from './send-message';
import getData from './get-indexed-db-data';
import saveSupport from './save-support';
import getCache from './get-cache';

const { support: keyPath } = DbKeyPath;
const { support: storeName } = DbStoreName

export default async function () {
    const {
        VamtigerBrowserMethod,
        localStorage,
        indexedDB,
    } = self;
    const [indexedDbIsAccessible, cache] = await Promise.all([
        indexDbAccessible(),
        getCache()
    ]);
    const support: ISupport = {
        environment: isWindow() && Environment.window
            || isWorker() && Environment.worker
            || isServiceWorker() && Environment.serviceWorker
            || Environment.unknown,
        cache: Boolean(cache),
        localStorage: Boolean(localStorage),
        indexedDb: Boolean(indexedDB),
        indexedDbIsAccessible,
        worker: self.hasOwnProperty('Worker'),
        sharedWorker: self.hasOwnProperty('SharedWorker'),
        textEncoder: self.hasOwnProperty('TextEncoder'),
        textDecoder: self.hasOwnProperty('TextDecoder')
    };

    VamtigerBrowserMethod.support = support;

    if (isWindow()) {
        saveSupport(support);
    } else {
        sendWorkerSupport();
    }
}

export function indexDbAccessible() {return new Promise(async (resolve: (indexDbAccessible: boolean) => void, reject) => {
    let indexedDbIsAccessible = false;
    let resolved = false;
    const environment = Environment.worker;
    const timeout = setTimeout(() => !resolved && resolve(indexedDbIsAccessible), TimeoutDuration.indexDbIsAccessible);

    await getData({
        storeName,
        keyPath,
        key: environment
    });

    indexedDbIsAccessible = true;
    resolved = true;

    resolve(indexedDbIsAccessible);
})}

export async function setWorkerSupport(currentSupport: ISupport) {
    const { VamtigerBrowserMethod } = self;
    const { environment } = currentSupport;

    if (environment === Environment.worker) {
        VamtigerBrowserMethod.workerSupport = currentSupport;
    } else if (environment === Environment.serviceWorker) {
        VamtigerBrowserMethod.serviceWorkerSupport = currentSupport;
    }

    saveSupport(currentSupport);
}

function sendWorkerSupport() {
    const { VamtigerBrowserMethod } = self;
    const message = {
        action: MessageAction.setWorkerSupport,
        params: VamtigerBrowserMethod.support || {}
    };

    sendMessage(message);
}