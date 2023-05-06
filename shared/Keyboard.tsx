
import {useState , useEffect} from 'react'
import {Keyboard} from 'react-native';

export const IsKeyboardShown = () : boolean => {

    const [isKeyboardShown, setIsKeyboardShown] = useState(false);
    
    useEffect(() => {
        const showKeyboard = Keyboard.addListener('keyboardDidShow', () => {
          setIsKeyboardShown(true);
        }) as any;
        const hideKeyboard = Keyboard.addListener('keyboardDidHide', () => {
          setIsKeyboardShown(false);
        }) as any;
     
        return () => {
          showKeyboard.removeListener('keyboardDidShow');
          hideKeyboard.removeListener('keyboardDidHide');
        };

      }, []);

      return isKeyboardShown
}