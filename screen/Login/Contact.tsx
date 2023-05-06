import React from 'react'
import { Text, View, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

import { style_bg, style_flex, style_font , style_margin, style_padding, style_txt } from '../../styles/global';
import { styles } from './style';

import AntDesign from 'react-native-vector-icons/AntDesign'

type LoginType = {
    contactVisible : boolean
    setContactVisibel: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Contact ({contactVisible, setContactVisibel} : LoginType)  {
    return (
        <Modal transparent visible={contactVisible}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                
                <View style={[style_flex.flex_1, style_flex.a_center, style_flex.j_center, style_flex.col_direction , style_bg.bg_op_black]}>
                    <View style={[styles.contact, style_bg.bg_white]}>
                        <View style={[style_flex.row_direction, style_flex.j_end]}>
                            <TouchableOpacity onPress={() => setContactVisibel(false)}>
                                <AntDesign name='close' style={[style_font.f_24, style_font.bold, style_txt.txt_blue]}/>
                            </TouchableOpacity>
                        </View>
                        
                        <Text style={[style_font.f_24, style_font.bold , style_txt.txt_blue, style_txt.txt_center]}>Contact Support</Text>
                        <View>
                            <TextInput style={[styles.text_input, style_margin.my_5, style_padding.p_10 ]} placeholder='Topic'/>
                            <TextInput style={[styles.text_input, style_margin.my_5, style_padding.p_10 ]} placeholder='Email'/>
                            <TextInput 
                                    style={[styles.input_description, style_margin.my_5 , style_padding.p_10] } 
                                    editable
                                    multiline={true}
                                    numberOfLines={10}
                                    placeholder='Description....'
                                    />
                        </View>
                        <TouchableOpacity style={[styles.btn_login, style_bg.bg_primary, style_margin.my_10, style_padding.p_10]}>
                            <Text style={[style_txt.txt_white, style_font.f_18]}>Send</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
        
    )
}

