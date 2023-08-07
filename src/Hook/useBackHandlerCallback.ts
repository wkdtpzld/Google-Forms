import {useCallback, useEffect} from "react";
import {BackHandler} from "react-native";

/**
 * useBackHandlerCallback
 * @param disableBackHandler true 일 경우 뒤로가기 무시
 * @param callback disableBackHandler 가 true 일때 callback 수행
 */
const useBackHandlerCallback = (disableBackHandler: boolean, callback:() => void):void => {
    const handler = useCallback(() => {
        if(disableBackHandler) {
            callback && callback();
        }
        return disableBackHandler;
    },[disableBackHandler])

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handler);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', handler);
        }
    }, [disableBackHandler]);
}
export default useBackHandlerCallback;
