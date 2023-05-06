import React from 'react'
import { Text, View, Image, TouchableWithoutFeedback, Keyboard} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

import { global_flex, global_font, global_txt } from '../styles/global';
import { styles } from './Login/style';
import { IsKeyboardShown } from '../shared/Keyboard';

type ModalType = {
    children : JSX.Element
}

export default function Modal ({children} : ModalType)  {
    

      
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
            <LinearGradient colors={['#80CDF3', '#1B6BA6']} start={{y: 0, x : 0}} end={{y : 0.6, x: 0}} 
                            style={[ !IsKeyboardShown() && styles.linearBackground, global_flex.a_center, global_flex.j_center, global_flex.col_direction, {flex : 1}]}>
                {
                !IsKeyboardShown() &&
                    <View style={[styles.logo_container]}>
                         
                        <Image
                             style={[styles.logo_img]}
                             source={require("../assets/login/logo.png")}/>
                       
                    </View>
                }                
                {
                    children
                }
                <View style={{position : 'absolute' , bottom : 10}}>
                    <Text style={[global_txt.txt_white , global_font.small_text, global_txt.underline]}>Powered by Prosolutions - Technology Co.</Text>
                </View>
            </LinearGradient>
        </TouchableWithoutFeedback>
        
    )
}

