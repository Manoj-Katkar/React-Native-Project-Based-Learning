import { StatusBar } from 'expo-status-bar';
import { Text, View, /* @tutinfo Import <CODE>StyleSheet</CODE> to define styles. */ StyleSheet  , Image} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';

import tw from 'twrnc';

const logoImage = require("../../assets/images/react-logo.png");

export default function Index() {
  return (
    <View style={tw`flex-1 flex-col-reverse justify-center items-center bg-black`}>
      <TouchableOpacity style={tw`bg-teal-500 p-3 rounded-lg`}>
      <Text style={tw`text-white text-3xl font-bold`}>Hi Manisha How Are You</Text>

      {/* understanding how the images works in react native  */}
      <Image source={logoImage}/>
 
      </TouchableOpacity>
      <StatusBar style='light'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /* @tutinfo Add the value of <CODE>backgroundColor</CODE> property with <CODE>'#25292e'</CODE>.*/
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});
