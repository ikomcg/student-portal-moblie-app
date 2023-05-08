import 'react-native-gesture-handler';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigator from './routes/Main_Routes';
import LoginProvider from './context/LoginProvider';


export default function App() {
  return  (
    <LoginProvider>
      <SafeAreaProvider>
        <Navigator/>
      </SafeAreaProvider>
    </LoginProvider>
  )
}

