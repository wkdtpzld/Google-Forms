import {SafeAreaView, Text, View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootParam} from "@/navigation";

type Props = NativeStackScreenProps<RootParam, "">

const Home = ({route, navigation}: Props) => {


    return (
        <SafeAreaView style={{flex: 1}}>
        </SafeAreaView>
    );
};

export default Home;