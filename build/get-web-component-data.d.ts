import { IGetWebComponentData, MessageAction } from './types';
export default function (params: IGetWebComponentData): Promise<void> | Promise<0 | {
    action: MessageAction;
    params: {
        key: string;
        data: {
            jsonLd: import("./types").IAnyObject[];
            json: import("./types").IAnyObject;
        };
    };
} | undefined> | undefined;
export declare function getWebComponentDataWindow({ key }: IGetWebComponentData): Promise<void>;
export declare function getWebComponentDataWorker({ key }: IGetWebComponentData): Promise<0 | {
    action: MessageAction;
    params: {
        key: string;
        data: {
            jsonLd: import("./types").IAnyObject[];
            json: import("./types").IAnyObject;
        };
    };
} | undefined>;
export declare function getWebComponentData({ key }: IGetWebComponentData): Promise<import("./types").IWebComponentData | undefined>;