import React from 'react'
import { Text, View, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

import { global_bg, global_flex, global_font , global_margin, global_padding, global_txt, global_weight } from '../../styles/global';
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
                
                <View style={[global_flex.flex_1, global_flex.a_center, global_flex.j_center, global_flex.col_direction , global_bg.bg_op_black]}>
                    <View style={[styles.contact, global_bg.bg_white]}>
                        <View style={[global_flex.row_direction, global_flex.j_end]}>
                            <TouchableOpacity onPress={() => setContactVisibel(false)}>
                                <AntDesign name='close' style={[global_font.body_text, global_weight.bold, global_txt.txt_blue]}/>
                            </TouchableOpacity>
                        </View>
                        
                        <Text style={[global_font.body_text, global_weight.bold, , global_txt.txt_blue, global_txt.txt_center]}>Contact Support</Text>
                        <View>
                            <TextInput style={[styles.text_input, global_margin.my_5, global_padding.p_10 ]} placeholder='Topic'/>
                            <TextInput style={[styles.text_input, global_margin.my_5, global_padding.p_10 ]} placeholder='Email'/>
                            <TextInput 
                                    style={[styles.input_description, global_margin.my_5 , global_padding.p_10] } 
                                    editable
                                    multiline={true}
                                    numberOfLines={5}
                                    
                                    placeholder='Description....'
                                    />
                        </View>
                        <TouchableOpacity style={[styles.btn_login, global_bg.bg_primary, global_margin.my_10, global_padding.p_10]}>
                            <Text style={[global_txt.txt_white, global_font.small_text]}>Send</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
        
    )
}

