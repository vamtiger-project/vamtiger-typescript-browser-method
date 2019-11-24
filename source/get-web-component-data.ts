import {
    IGetWebComponentData,
    MessageAction,
    DbKeyPath,
    DbStoreName,
    ScriptType
} from './types';
import isWindow from './is-window';
import isWorker from './is-worker';
import sendMessage from './send-message';
import getData from './get-indexed-db-data';
import dequeue from './dequeue';

const { getWebComponentData: action } = MessageAction;
const { parse } = JSON;

export default function (params: IGetWebComponentData) {
    const { VamtigerBrowserMethod } = self;
    const { support, workerSupport, worker } = VamtigerBrowserMethod;

    if (isWindow()) {
        if (worker && workerSupport && workerSupport.indexedDbIsAccessible) {
            return getWebComponentDataWindowWorker(params);
        } else if (support && support.indexedDbIsAccessible) {
            getWebComponentDataWindow(params);
        } else {
            getWebComponentDataHead(params);
        }
    } else if (isWorker()) {
        return getWebComponentDataWorker(params);
    }
}

export async function getWebComponentDataWindow({ key }: IGetWebComponentData) {
    const { VamtigerBrowserMethod } = self;
    const { queue: currentQueue } = VamtigerBrowserMethod;
    const data = await getWebComponentData({ key });
    const dequeueParams = data && {
        key,
        data,
        queue: currentQueue
    };

    if (dequeueParams) {
        dequeue(dequeueParams);
    }
}

async function getWebComponentDataWindowWorker({ key }: IGetWebComponentData) {
    const message = {
        action,
        params: {
            key
        }
    };

    sendMessage(message);
}

export async function getWebComponentDataWorker({ key }: IGetWebComponentData) {
    const data = await getWebComponentData({ key });
    const message = data && data.jsonLd && {
        action: MessageAction.dequeue,
        params: {
            key,
            data: {
                jsonLd: data.jsonLd,
                json: data.json
            }
        }
    };

    return message;
}

export async function getWebComponentData({ key }: IGetWebComponentData) {
    const webComponentData = await getData({
        storeName: DbStoreName.webComponent,
        keyPath: DbKeyPath.webComponent,
        key
    });

    return webComponentData;
}

function getWebComponentDataHead({ key }: IGetWebComponentData) {
    const { head } = document;
    const { VamtigerBrowserMethod } = self;
    const { queue } = VamtigerBrowserMethod;
    const jsonLdSelector = `script[data-json-ld="${key}"][type="${ScriptType.jsonld}"]`;
    const jsonSelector = `script[data-json-ld="${key}"][type="${ScriptType.json}"]`;
    const jsonLdScripts = Array.from(head.querySelectorAll<HTMLScriptElement>(jsonLdSelector));
    const jsonScript = head.querySelector<HTMLScriptElement>(jsonSelector);
    const data = jsonLdScripts.length && {
        jsonLd: jsonLdScripts.map(({innerHTML}) => innerHTML && parse(innerHTML)),
        json: jsonScript && jsonScript.innerHTML && parse(jsonScript.innerHTML) || {}
    };
    const dequeueParams = data && {
        key,
        data,
        queue
    };

    dequeueParams && dequeue(dequeueParams);
}