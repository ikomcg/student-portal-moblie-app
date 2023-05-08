import React from 'react'
import { Text, View, Image, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

import { global_flex, global_font, global_txt } from '../styles/global';
import { styles } from './Login/style';

type ModalType = {
    children : JSX.Element
}

export default function Modal ({children} : ModalType)  {
    

      
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
            <KeyboardAvoidingView style={{flex : 1}}  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <LinearGradient colors={['#80CDF3', '#1B6BA6']} start={{y: 0, x : 0}} end={{y : 0.6, x: 0}} 
                            style={[ styles.linearBackground, global_flex.a_center,  global_flex.col_direction, {paddingTop : 100}]}>
                    {
               
                        <View style={[styles.logo_container]}>
                         
                        <Image
                             style={[styles.logo_img]}
                             source={require("../assets/login/logo.png")}/>
                       
                        </View>
                    }                
                    {
                        children
                    }
                    <View >
                        <Text style={[global_txt.txt_white , global_font.small_text, global_txt.underline]}>Powered by Prosolutions - Technology Co.</Text>
                    </View>
                </LinearGradient>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
        
        
    )
}

