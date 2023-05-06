import React from 'react'
import { Text, View, Image, TouchableWithoutFeedback, Button, TouchableOpacity, Keyboard } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { TextInput } from 'react-native-gesture-handler';

import { global_bg, global_flex, global_font , global_margin, global_padding, global_txt, global_weight } from '../../styles/global';

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
          <View style={[styles.form, global_padding.p_15]}>
            <View style={[global_flex.row_direction, global_flex.a_center, global_margin.mb_20]}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                     <AntDesign name='arrowleft' style={[global_font.body_text, global_weight.bold, global_txt.txt_blue, global_margin.mx_10]}/>
                </TouchableOpacity>
                <Text style={[global_font.body_text, global_weight.bold, global_txt.txt_blue]}>Forgot Password?</Text>

            </View>
            <Text>Please enter your email address to obtain your new password</Text>
            <TextInput style={[styles.text_input, global_margin.my_10, global_padding.p_10 ]} placeholder='Enter Email Address'/>

            <TouchableOpacity style={[styles.btn_login, global_bg.bg_primary , global_margin.my_10, global_padding.p_10]}>
                <Text style={[global_txt.txt_white, global_font.body_text]}>Send</Text>
            </TouchableOpacity>

            <View style={[global_flex.row_direction, global_flex.j_center,]}>
                <TouchableOpacity>
                    <Text style={[styles.btn_action, global_txt.underline, global_font.small_text]}>Contact Support</Text>
                </TouchableOpacity>
            </View>
          </View>
        </Modal>
        
    )
}

