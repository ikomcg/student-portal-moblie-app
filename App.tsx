import 'react-native-gesture-handler';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigator from './routes/Login';


export default function App() {
  return  (
    <SafeAreaProvider>
      <Navigator/>
    </SafeAreaProvider>
  
  )
}

