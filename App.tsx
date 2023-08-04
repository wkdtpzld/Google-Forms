import {StyleSheet, Text, View} from 'react-native';
import {RootNavigator} from "@/navigation";
import {Provider} from "react-redux";
import store from "@/redux/store/store";

export default function App() {
  return (
      <Provider store={store} >
        <View style={{flex: 1}}>
            <RootNavigator />
        </View>
      </Provider>
  );
}
