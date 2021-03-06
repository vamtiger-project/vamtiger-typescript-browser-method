import * as tslib from '../node_modules/tslib/tslib';
import { requestIdleCallback } from 'requestidlecallback';
import * as lodash from 'lodash';
export declare enum Environment {
    window = "window",
    worker = "worker",
    serviceWorker = "serviceWorker",
    unknown = "unknown"
}
export declare enum CacheName {
    vamtigerBrowserMethod = "vamtiger-browser-method"
}
export declare enum EventName {
    vamtigerBrowserMethodReady = "vamtigerBrowserMethodReady"
}
export declare enum TimeoutDuration {
    webComponent = 5000,
    indexDbIsAccessible = 100
}
export declare enum MessageQueueName {
    webComponent = "webComponent"
}
export declare enum Prefix {
    vamtigerBrowserMethod = "vamtiger-browser-method",
    db = "vamtiger-browser-method",
    messageIdWindow = "vamtiger-browser-method-window",
    messageIdWorker = "vamtiger-browser-method-worker",
    messageIdServiceWorker = "vamtiger-browser-method-service-worker",
    messageIdUnknownEnvironment = "vamtiger-browser-method-unknown-environment"
}
export declare enum ElementId {
    metaElement = "vamtiger-browser-method"
}
export declare enum Origin {
    nowhere = "",
    everyWhere = "*"
}
export declare enum HostName {
    localHost = "localhost"
}
export declare enum LocalHostRelativePath {
    vamtigerBrowserMethod = "vamtiger-browser-method.js"
}
export declare enum ScriptType {
    js = "text/javascript",
    babel = "text/babel",
    json = "application/json",
    jsonld = "application/ld+json"
}
export declare enum ScriptAttribute {
    type = "type"
}
export declare enum DataAttribute {
    vamtigerElementQuery = "vamtigerLoadElementQueryCss",
    elementQueryCssLoaded = "elementQueryCssLoaded",
    customElementName = "customElementName",
    visible = "visible"
}
export declare enum ErrorMessage {
    failedToLoadScript = "Failed to load script",
    windowPropertyNotSet = "Window property not set",
    unsupportedFeature = "Unsupported feature",
    customElementAreadyDefined = "Custom element already defined",
    noElementName = "No Element Name",
    noTemplateUrl = "No Template URL",
    noElementSelector = "No Template Selector",
    noTemplateForUrl = "No Template for URL",
    noTemplate = "No Template",
    noElementForSelector = "No Element for Selector",
    noJsonLdParameter = "No \"jsonLd\" property set",
    scriptLoadedButMethodNameNotFound = "Failed to load method: Script loaded, but method name not found",
    crossOriginMethodsNotAllowed = "Cross-Origin methods are not allowed"
}
export declare enum StringConstant {
    nothing = "",
    slash = "/",
    dash = "-",
    pipe = "|",
    comma = ",",
    backTick = "`",
    doubleQuote = "\"",
    commaSpace = ", ",
    space = " ",
    period = ".",
    newline = "\n",
    semiColon = ";"
}
export declare enum TagName {
    div = "div",
    template = "template"
}
export declare enum LinkRel {
    stylesheet = "stylesheet"
}
export declare enum LoadScriptElement {
    script = "script",
    link = "link",
    style = "style"
}
export declare enum Selector {
    lastStylesheet = "style:last-of-type",
    lastMetaElement = "head > meta:last-of-type",
    webcomponentsjs = "script[src*=\"@webcomponents/webcomponentsjs\"]",
    style = "style",
    stylesheet = " link[rel=\"stylesheet\"]",
    vamtigerBrowserMethodJs = "[src$=\"vamtiger-browser-method.js\"], [data-name$=\"vamtiger-browser-method.js\"]",
    vamtigerBrowserMethodJsonJs = "[src$=\"vamtiger-browser-method.js.json.js\"]",
    worker = "[src$=\"js.json.js\"][data-worker]",
    workderDependency = "script[data-worker-dependency]",
    vamtigerBrowserMethodJson = "[data-name$=\"vamtiger-browser-method.js.json\"]",
    vamtigerBrowserMethod = "[src$=\"vamtiger-browser-method.js\"]",
    script = "script",
    jsonScript = "script[type=\"application/json\"]",
    jsonLdScript = "script[type=\"application/ld+json\"]",
    a = "a",
    linkedDataCaption = "[data-linked-data-caption]",
    linkedDataCaptionElement = "[data-linked-data-caption-element]",
    jsonLdViewer = "vamtiger-json-ld-viewer",
    transpiledJs = "[data-transpiled-js]",
    htmlTextMode = "html[data-vamtiger-text-mode]",
    customElementNameMetaElement = "meta[data-custom-element-name]",
    dependencyUrlMetaElement = "meta[data-dependency]",
    urlMetaElement = "meta[data-url]"
}
export declare enum TextModeElementName {
    vamtigerJsonLdViewer = "vamtiger-json-ld-viewer"
}
export declare enum MetaElementName {
    loadElementQueryCss = "vamtiger-load-element-query-css"
}
export declare enum WorkerType {
    all = "all",
    worker = "worker",
    serviceWorker = "serviceWorker"
}
export declare enum ScriptNameSuffix {
    style = "style",
    stylesheet = "stylesheet"
}
export declare enum ScriptName {
    textMode = "vamtiger-text-mode"
}
export declare enum MessageAction {
    ignore = "ignore",
    removeRedundantScripts = "removeRedundantScripts",
    setWorkerSupport = "setWorkerSupport",
    saveWebComponentData = "saveWebComponentData",
    getWebComponentData = "getWebComponentData",
    dequeue = "dequeue",
    loadWebComponentData = "loadWebComponentData",
    saveSupport = "saveSupport",
    saveCustomElementName = "saveCustomElementName",
    getTextModeCss = "getTextModeCss",
    loadScript = "loadScript",
    loadMethod = "loadMethod",
    updateMethod = "updateMethod",
    getMethodResult = "getMethodResult",
    importDependencies = "importDependencies",
    removeDependencyUrl = "removeDependencyUrl"
}
export declare enum CustomEventName {
    vamtigerBrowserMethod = "vamtiger-browser-method"
}
export declare enum HandleJsonLdAction {
    handleJsonLdLoaded = "vamtiger-browser-method-handle-json-ld-loaded"
}
export declare enum DbName {
    vamtigerBrowserSupport = "vamtiger-browser-support"
}
export declare enum DbStoreName {
    support = "support",
    webComponent = "web-component",
    customElementName = "custom-element-name"
}
export declare enum DbMode {
    readonly = "readonly",
    readwrite = "readwrite",
    versionchange = "versionchange"
}
export declare enum DbKeyPath {
    webComponent = "url",
    support = "environment",
    customElementName = "name"
}
export declare enum Dependency {
    lodash = "https://cdn.jsdelivr.net/npm/lodash@4.17.11",
    jsonLdViewer = "https://vamtiger-project.github.io/vamtiger-json-ld-viewer/build/vamtiger-json-ld-viewer.js"
}
export interface IDequeue {
    key: string;
    match?: boolean;
    data: IAnyObject;
    queue: Map<string, Set<IQueueEntry>>;
}
export interface IGetDbParams {
    storeName: DbStoreName;
    keyPath: DbKeyPath;
    mode: DbMode;
}
export interface IGetDbParamsHandleUpgradeNeeded extends Pick<IDbParams, 'db'> {
}
export interface IDbParams {
    db: IDBDatabase;
    transaction: IDBTransaction;
    store: IDBObjectStore;
}
export interface ILoadRemoteScriptParams {
    src: string;
}
export interface IRemoveDepencyUrl {
    url: string;
}
export interface ILoadRemoteStylesheetScriptParams {
    href: string;
}
export interface IIsJsonScript {
    script: HTMLScriptElement;
}
export interface ILoadLocalScriptParams {
    name: string;
    removeExisting?: boolean;
    removeFromDom?: boolean;
    workerDependency?: boolean;
}
export interface ILoadScriptParams {
    js: string;
    jsonld?: boolean;
    jsonLd?: boolean;
}
export interface ISaveCustomeElementName {
    name: string;
}
export interface ILoadJsonScriptParams extends ILoadLocalScriptParams {
    json: string;
}
export interface ILoadStylesheetScriptParams {
    css: string;
}
export interface IAnyObject {
    [key: string]: any;
}
export interface IJsonData {
    jsonLd: IAnyObject[];
    json?: IAnyObject;
}
export interface IJsonJsonLd {
    index: number;
    fields: {
        [key: string]: string[];
    };
}
export interface IImportDependencies {
    urls?: string[];
}
export interface ILoadScript {
    params: LocalScriptParams | LocalStylesheetScriptParams | ILoadRemoteScriptParams | ILoadRemoteStylesheetScriptParams | ILoadJsonScriptParams;
    reject: (error: Error) => void;
}
export interface IUpdateMthod {
    name: string;
}
export interface IGetMethodResult {
    messageId?: string;
    name: string;
    params: IAnyObject;
}
export interface IGetMethodResultWindow extends IGetMethodResult {
    resolve: (result: any) => void;
    reject: (error: Error) => void;
}
export interface IUpdateMthodWrapNamedMethod {
    method: Function;
}
export interface ILoadScriptLoadJsJsonJs {
    src: string;
    workerDependency?: boolean;
}
export interface ILoadShadowStylesheet {
    css: string;
    element: HTMLElement;
}
export interface IJsonScriptData {
    name: string;
    text: string;
}
export interface IDefineCustomElement {
    name: string;
    constructor: {
        new (): HTMLElement;
        prototype: HTMLElement;
    };
    ignore?: boolean;
}
export interface IPause {
    milliseconds: number;
}
export interface IGetElementBase {
    name: string;
    loadStylesheets?: boolean;
}
export interface IGetElementTemplate extends IGetElementBase {
    template: string;
    selector?: string;
}
export interface IGetElementUrl extends IGetElementBase {
    url: string;
    selector: string;
}
export interface ILoadElementQueryCss {
    css: string;
    stylesheetName?: string;
    hostName?: string;
}
export interface IGetJsonLdArray {
    jsonLd: IAnyObject;
}
export interface IGetJsonLdArrayGetEntry {
    key: string;
    value: string | IAnyObject | IAnyObject[];
}
export interface IGetMetaElement {
    selector?: string;
    properties?: {
        id?: string;
    };
    attributes?: {
        [key: string]: string;
    };
    dataset?: DOMStringMap;
}
export interface IDispatchEvent {
    eventName: EventName;
    detail?: IAnyObject;
}
export interface IGetBabelJs {
    url?: string;
    js?: string;
}
export interface ILoadContainerStylesheets {
    name: string;
    container: HTMLTemplateElement;
}
export interface IGetData {
    json?: string;
    jsonLd?: string;
    textMode?: boolean;
    dependency?: boolean;
}
export interface IGetJson {
    json: string;
    dependency?: boolean;
}
export interface IGetJsonFromUrl {
    json: string;
    resolve: (json?: IJsonDataFromUrl) => void;
    reject: (error: Error) => void;
}
export interface IGetJsonData {
    url: string;
    json?: IJsonDataFromUrl;
    dependency?: boolean;
}
export interface IGetJsonDataWindow extends IGetJsonData {
    resolve: (data: IJsonDataFromUrl) => void;
    reject: (error: Error) => void;
}
export interface IJsonDataFromUrl {
    jsonLd: IAnyObject;
    json: IAnyObject;
}
export interface IGetJsonDataWindow extends IGetJsonData {
    resolve: (json: IJsonDataFromUrl) => void;
    reject: (error: Error) => void;
}
export interface IGetDataResolve extends IGetData {
    data: IJsonData;
    jsonLd: string;
    resolve: (data: IJsonData) => void;
}
export interface IGetJsonLd {
    jsonLd: string;
    textMode?: boolean;
    loadJsonJsonLd?: boolean;
}
export interface IViewJsonLd {
    jsonLd: string;
}
export interface IJosnLdImageObject {
    "@context": string;
    '@type': string;
    name: string;
    description: string;
    author: {
        '@type': string;
        givenName: string;
        familyName: string;
        email: string;
    };
    datePublished: string;
    contentUrl: string;
}
export interface IMessageAction {
    action: MessageAction;
    params: IAnyObject & {
        messageId?: string;
        ports?: MessagePort[];
    };
    workerType?: WorkerType;
}
export interface IRemoveRedundantScripts {
    selector: string;
}
export interface IRemoveRedundantScriptsRemoveScripts extends IRemoveRedundantScripts {
    parent: HTMLElement;
}
export interface IRemoveRedundantScriptsRemoveScriptsFromParent extends IRemoveRedundantScriptsRemoveScripts {
    resolve?: () => void;
    reject?: (error: Error) => void;
}
export interface ISupport {
    environment: Environment;
    cache: boolean;
    localStorage: boolean;
    indexedDb: boolean;
    indexedDbIsAccessible: boolean;
    worker: boolean;
    sharedWorker: boolean;
    textEncoder: boolean;
    textDecoder: boolean;
}
export interface ILoadMethod {
    name: string;
    url: string;
}
export interface ILoadMethodWindow extends ILoadMethod {
    resolve: () => void;
    reject: (error: Error) => void;
}
export interface ICustomElementName {
    name: string;
}
export interface ISaveSupport extends ISupport {
}
export interface ISaveWebComponentData extends IWebComponentData {
}
export interface ISaveJsonLd {
    url: string;
    data: IJsonDataFromUrl;
    dependency?: boolean;
}
export interface ISaveJsonLdWindow extends ISaveJsonLd {
    resolve: () => void;
    reject: (error: Error) => void;
}
export interface IGetWebComponentData {
    key: string;
}
export interface IGetDbName {
    dbName: DbName;
}
export interface ISaveIndexedDbData {
    storeName: DbStoreName;
    keyPath: DbKeyPath;
    messageId?: string;
    data: IndexDbData;
    successAction?: MessageAction;
}
export interface IGetIndexedDbData {
    storeName: DbStoreName;
    keyPath: DbKeyPath;
    key?: string;
    messageId?: string;
}
export interface ISaveIndexedDbDataHandleSuccess {
    messageId?: string;
    key: string;
    action?: MessageAction;
    data: IndexDbData;
}
export interface IWebComponentData {
    url: string;
    created?: number;
    messageId?: string;
    jsonLd: IAnyObject | IAnyObject[];
    json: IAnyObject;
}
export interface ISaveWebComponentDataWorker extends ISaveWebComponentData {
}
export interface IQueueEntry {
    resolve: (result: any) => void;
    reject: (reason: Error) => void;
}
export interface IQueue extends NonNullable<Pick<IQueueEntry, 'resolve' | 'reject'>> {
    key: string;
    queue: Map<string, Set<IQueueEntry>>;
}
export interface IQueueHandleExpiredQueueEntry {
    key: string;
    queue: IQueue['queue'];
    queueEntry: IQueueEntry;
}
export interface ILoadData {
    url: string;
    loadJsonJsonLd?: boolean;
}
export interface ILoadDataGetFeldData {
    key: string;
    urls: string[];
}
export interface ILoadDataGetJsonJsonLd extends IJsonJsonLd {
}
export interface IGetMicrodataCaption {
    imageData: IAnyObject;
    fieldKey: string;
}
export interface IGetTemplate {
    selector: Selector;
    attributes?: IAttributes;
    properties?: IProperties;
}
export interface IProperties {
    name?: string;
    src?: string;
    alt?: string;
    innerHTML?: string;
}
export interface IGetTabLink {
    href: string;
    text: string;
}
export interface IGetEmailLink {
    href: string;
    text: string;
}
export interface IVamtigerBrowserMethodLoadMethod {
    [key: string]: Function;
}
export interface ISetDependencyUrl {
    script: HTMLScriptElement;
}
export interface ISetDependencyUrlWindow {
    js: string;
}
export interface IHandleJsonLd extends CustomEvent {
    detail: IHandleJsonLdDetail;
}
export interface IHandleJsonLdDetail {
    action: HandleJsonLdAction;
    params: IJsonDataFromUrl & {
        key: string;
    };
}
export interface IGetUrlFromQueue {
    url: string;
}
export declare type WebComponentDataResolve = (webComponent: IJsonData | undefined) => void;
export declare type ErrorResolve = (error: Error) => void;
export declare type MessageResponse = IMessageAction | undefined | null | false;
export declare type TsLibType = typeof tslib;
export declare type TsLibKey = keyof TsLibType;
export declare type TsLib = {
    [K in TsLibKey]: TsLibType[K];
};
export declare type LocalScriptParams = ILoadLocalScriptParams & ILoadScriptParams;
export declare type LocalStylesheetScriptParams = ILoadLocalScriptParams & ILoadStylesheetScriptParams;
export declare type LoadScriptParams = LocalScriptParams | LocalStylesheetScriptParams | ILoadRemoteScriptParams | ILoadRemoteStylesheetScriptParams;
export declare type LoadScriptsParams = LoadScriptParams[];
export declare type LoadScriptsSequentiallyParams = LoadScriptsParams[];
export declare type DependencyKey = keyof typeof Dependency;
export declare type LoadedScript<P extends ILoadScript['params']> = P extends ILoadScriptParams ? HTMLScriptElement : P extends ILoadStylesheetScriptParams ? HTMLStyleElement : P extends ILoadRemoteScriptParams ? HTMLScriptElement : P extends ILoadRemoteStylesheetScriptParams ? HTMLLinkElement : never;
export declare type LoadedScripts<P extends LoadScriptsParams> = P extends ILoadScriptParams[] ? HTMLScriptElement[] : P extends ILoadStylesheetScriptParams[] ? HTMLStyleElement[] : P extends ILoadRemoteScriptParams[] ? HTMLScriptElement[] : P extends ILoadRemoteStylesheetScriptParams[] ? HTMLLinkElement[] : never;
export declare type LoadedScriptsSequentially<P extends LoadScriptsSequentiallyParams> = P extends ILoadScriptParams[][] ? HTMLScriptElement[] : P extends ILoadStylesheetScriptParams[][] ? HTMLStyleElement[] : P extends ILoadRemoteScriptParams[][] ? HTMLScriptElement[] : P extends ILoadRemoteStylesheetScriptParams[][] ? HTMLLinkElement[] : never;
export declare type GetElementParams = IGetElementTemplate | IGetElementUrl;
export declare type VamtigerBrowserMethod = {
    origin?: string;
    metaElement?: HTMLMetaElement;
    loadScript: <P extends LocalScriptParams | LocalStylesheetScriptParams | ILoadRemoteScriptParams | ILoadRemoteStylesheetScriptParams>(params: P) => Promise<LoadedScript<P>>;
    loadScripts: <P extends LoadScriptParams[]>(params: P) => Promise<LoadedScripts<P>>;
    loadScriptsSequentially: <P extends LoadScriptParams[][]>(params: P) => Promise<LoadedScriptsSequentially<P>>;
    loadMethod: (params: ILoadMethod) => Promise<boolean>;
    loadShadowStylesheet: ({ css, element }: ILoadShadowStylesheet) => void;
    defineCustomElement: ({ name, constructor, ignore }: IDefineCustomElement) => void;
    pause: ({ milliseconds }: IPause) => Promise<unknown>;
    getElement: <P extends GetElementParams>(params: P) => Promise<HTMLElement>;
    getData: <P extends IGetData>(params: P) => Promise<GetDataResult<P>>;
    getEnvironment: () => Environment;
    environment: Environment;
    getMicrodataCaption: (params: IGetMicrodataCaption) => HTMLElement | null | undefined;
    queue: Map<string, Set<IQueueEntry>>;
    messageQueue: Map<string, Set<IQueueEntry>>;
    worker?: Worker;
    serviceWorker?: ServiceWorker;
    serviceWorkerRegistration?: ServiceWorkerRegistration;
    support?: ISupport;
    workerSupport?: ISupport;
    serviceWorkerSupport?: ISupport;
    getJsonLdArray: ({ jsonLd }: IGetJsonLdArray) => Promise<string[][]>;
    textMode?: boolean;
    intersectionObserver?: IntersectionObserver;
    messageChannel?: MessageChannel;
    method: IVamtigerBrowserMethodLoadMethod;
};
export interface IAttributes {
    id?: string;
    for?: string;
    slot?: string;
    'data-image-figure'?: string;
    'data-json-ld'?: string;
    itemprop?: string;
}
export interface IGetServiceWorkerClients {
    type: ClientTypes;
}
export interface ISendMessageFromServiceWorker {
    message: string | Uint8Array;
    clients?: ServiceWorkerClient;
}
export interface FetchEvent extends Event {
    request: Request;
    respondWith(response: Promise<Response> | Response): Promise<Response>;
}
export interface IUpdateRequestCache {
    request: Request;
}
export interface IHandleJsonLdLoaded extends IHandleJsonLdDetail {
}
export declare type JsonLdActionParams<A extends HandleJsonLdAction> = A extends HandleJsonLdAction.handleJsonLdLoaded ? IHandleJsonLdLoaded : unknown;
export declare type JsonLdActionMethod<A extends HandleJsonLdAction> = A extends HandleJsonLdAction.handleJsonLdLoaded ? (params: IHandleJsonLdLoaded) => void : unknown;
export declare type ServiceWorkerClient = 'window' | 'worker' | 'sharedworker' | 'all';
export declare type JsonDataResolve = (data: IJsonData) => void;
export declare type WorkerPostMessage = (message: string | Uint8Array) => void;
export declare type IndexDbData = IWebComponentData | ISupport | ICustomElementName;
export declare type GetIndexedDbData<P extends IGetIndexedDbData> = P['keyPath'] extends DbKeyPath.webComponent ? IWebComponentData | undefined : P['keyPath'] extends DbKeyPath.support ? ISaveSupport : P['keyPath'] extends DbKeyPath.customElementName ? ICustomElementName[] : never;
export declare type GetDataResult<P extends IGetData> = P['json'] extends string ? IJsonDataFromUrl : P['jsonLd'] extends string ? IJsonData : unknown;
export declare type DbKeyPathName = keyof typeof DbKeyPath;
export declare type DbStoreNameKey = keyof typeof DbStoreName;
export declare type AttributesKey = keyof IAttributes;
export declare type HandleJsonLdActionKey = keyof typeof HandleJsonLdAction;
export declare type GetTemplate<P extends IGetTemplate> = P['selector'] extends Selector.a ? HTMLAnchorElement : P['selector'] extends Selector.linkedDataCaptionElement ? HTMLSpanElement : P['selector'] extends Selector.linkedDataCaption ? HTMLElement : null;
declare global {
    interface Window extends TsLib {
        VamtigerBrowserMethod: VamtigerBrowserMethod;
        Babel: any;
        EQCSS: IAnyObject;
        requestIdleCallback?: typeof requestIdleCallback;
        _: typeof lodash;
        IntersectionObserver: typeof IntersectionObserver;
        importScripts?: (url: string) => void;
        'vamtiger-browser-method': HTMLMetaElement;
    }
    namespace NodeJS {
        interface Global {
            VamtigerBrowserMethod: Window['VamtigerBrowserMethod'];
        }
    }
}
export declare const regex: {
    showRootHost: RegExp;
    dash: RegExp;
    space: RegExp;
    nonWord: RegExp;
    backTicks: RegExp;
    remoteUrl: RegExp;
    jsJsonJs: RegExp;
    jsonJs: RegExp;
    trailingJs: RegExp;
    uppercase: RegExp;
    leadingAt: RegExp;
    email: RegExp;
    trailingHtml: RegExp;
    textModeElement: RegExp;
};
export declare const selector: {
    redundantScripts: string;
    vamtigerBrowserMethod: string;
};
export declare const sendMessageFromWorker: WorkerPostMessage | undefined;
export declare const ignore: () => void;
