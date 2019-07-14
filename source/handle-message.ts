import {
    MessageAction,
    MessageResponse
} from './types';
import getMessageData from './get-message-data';
import removeRedundantScripts from './remove-redundant-scripts';
import { setWorkerSupport } from './set-support';
import saveWebComponentData from './save-web-component-data';
import sendMessage from './send-message';
import ignoreMessage from './ignore-message';
import getWebComponentData from './get-web-component-data';
import dequeue from './dequeue';
import loadWebComponentData from './load-web-component-data';
import saveSupport from './save-support';
import saveCustomElementName from './save-custom-element-name';
import getTextModeCss from './get-text-mode-css';
import loadScript from './handle-load-script';
import loadMethod from './load-method';
import updateMethod from './update-method';
import getMethodResult from './get-method-result';

const action = {
    [MessageAction.ignore]: ignoreMessage,
    [MessageAction.removeRedundantScripts]: removeRedundantScripts,
    [MessageAction.setWorkerSupport]: setWorkerSupport,
    [MessageAction.saveWebComponentData]: saveWebComponentData,
    [MessageAction.getWebComponentData]: getWebComponentData,
    [MessageAction.dequeue]: dequeue,
    [MessageAction.loadWebComponentData]: loadWebComponentData,
    [MessageAction.saveSupport]: saveSupport,
    [MessageAction.saveCustomElementName]: saveCustomElementName,
    [MessageAction.getTextModeCss]: getTextModeCss,
    [MessageAction.loadScript]: loadScript,
    [MessageAction.loadMethod]: loadMethod,
    [MessageAction.updateMethod]: updateMethod,
    [MessageAction.getMethodResult]: getMethodResult
}

export default async function (event: MessageEvent) {
    const { action: actionName, params } = getMessageData(event) || { action: MessageAction.ignore, params: {}};
    const currentAction = action[actionName];
    const response = await currentAction(params) as MessageResponse;

    response && sendMessage(response);
}