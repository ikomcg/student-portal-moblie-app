import React from 'react'
import { Text, View, Image, TouchableWithoutFeedback, Button, TouchableOpacity, Keyboard } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { TextInput } from 'react-native-gesture-handler';

import { style_bg, style_flex, style_font , style_margin, style_padding, style_txt } from '../../styles/global';

import { styles } from './style';
import { NavigationStackProp } from 'react-navigation-stack';
import Modal from '../Modal';

import AntDesign from 'react-native-vector-icons/AntDesign'
type LoginType = {
    
    navigation :  NavigationStackProp<any>
}

export default function Forgot ({navigation} : LoginType)  {
    return (
        <Modal>
          <View style={[styles.form, style_padding.p_15]}>
            <View style={[style_flex.row_direction, style_flex.a_center, style_margin.mb_20]}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                     <AntDesign name='arrowleft' style={[style_font.f_24, style_font.bold, style_txt.txt_blue, style_margin.mx_10]}/>
                </TouchableOpacity>
                <Text style={[style_font.f_24, style_font.bold, style_txt.txt_blue]}>Forgot Password?</Text>

            </View>
            <Text>Please enter your email address to obtain your new password</Text>
            <TextInput style={[styles.text_input, style_margin.my_10, style_padding.p_10 ]} placeholder='Enter Email Address'/>

            <TouchableOpacity style={[styles.btn_login, style_bg.bg_primary , style_margin.my_10, style_padding.p_10]}>
                <Text style={[style_txt.txt_white, style_font.f_18]}>Send</Text>
            </TouchableOpacity>

            <View style={[style_flex.row_direction, style_flex.j_center,]}>
                <TouchableOpacity>
                    <Text style={[styles.btn_action, style_txt.underline, style_font.f_14]}>Contact Support</Text>
                </TouchableOpacity>
            </View>
          </View>
        </Modal>
        
    )
}

