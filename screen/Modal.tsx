import React from 'react'
import { Text, View, Image, TouchableWithoutFeedback, Button, TouchableOpacity, Keyboard, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { TextInput } from 'react-native-gesture-handler';

import { style_bg, style_flex, style_font , style_margin, style_padding, style_txt } from '../styles/global';
import { styles } from './Login/style';
import { NavigationStackProp } from 'react-navigation-stack';

type ModalType = {
    children : JSX.Element
}
const {width , height} = Dimensions.get("window")

export default function Modal ({children} : ModalType)  {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
            <LinearGradient colors={['#80CDF3', '#1B6BA6']} start={{y: 0, x : 0}} end={{y : 0.6, x: 0}} 
                            style={[styles.linearBackground, style_flex.a_center, style_flex.j_end, style_flex.col_direction]}>
                <View style={[styles.logo_container]}>
                    <Image
                        style={[styles.logo_img]}
                        source={require("../assets/login/logo.png")}/>
                </View>
                {
                    children
                }
                <View>
                    <Text style={[style_txt.txt_white , style_font.f_14, style_txt.underline]}>Powered by Prosolutions - Technology Co.</Text>
                </View>

            </LinearGradient>
        </TouchableWithoutFeedback>
        
    )
}

