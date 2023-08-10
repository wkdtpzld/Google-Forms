import {DeviceEventEmitter} from "react-native";

export type DeviceEventType = keyof typeof DeviceEvent.type;

class DeviceEvent {
    static type = {
        bottomSheet: 'bottomSheet'
    } as const;

    static addListener(type:DeviceEventType, listener: (data: any) => void, context?: any) {
        const subscription = DeviceEventEmitter.addListener(type, listener, context);
        return subscription;
    }

    static emit(eventType: DeviceEventType, ...params: any[]) {
        DeviceEventEmitter.emit(eventType, ...params);
    }
}

export default DeviceEvent;