import React, { useState,useEffect } from 'react'
import { Text, View, TouchableOpacity, Alert, Button, Keyboard, Dimensions} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { style_bg, style_border, style_flex, style_font , style_margin, style_padding, style_txt,  } from '../../styles/global';
import { styles } from './style';
import { NavigationStackProp } from 'react-navigation-stack';
import LoginModal from '../Modal';
import Contact from './Contact';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LoginAuth} from '../../api/auth/AuthAPI'
import Spinner from 'react-native-loading-spinner-overlay';
import { Formik } from 'formik';
import * as yup from 'yup'
import { NativeSyntheticEvent } from 'react-native';
import { TextInputFocusEventData } from 'react-native';

type LoginType = {
    navigation :  NavigationStackProp<any>
}
type LoginuserType = {
    username : string
    password : string

}
export default function Login ({navigation} : LoginType)  {
    const [contactVisible , setContactVisibel] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const LoginHandler = async (values : LoginuserType) => {
        const {username , password} = values
       console.log(username, password)
        setIsLoading(true)
        const data = await LoginAuth(username, password)
        setIsLoading(false)
        if(data.code === 200) { 
            const storeData = JSON.stringify(data)
            try{
                await AsyncStorage.setItem("user" , storeData)
                navigation.navigate("Home")
                
            }catch(e){
                Alert.alert("Something wrong")
            }
        }
        else if(data.code === 400){
            Alert.alert("Invalid Account")
        }
        else{
            Alert.alert("Something wrong!")
        }
    }
    return (
        <>
            <Spinner
            visible={isLoading}
            textContent={'Loading...'}
            textStyle={{color : '#fff'}}
            />
            <LoginModal>
                <View style={[styles.form, style_padding.p_15]}>

                <Text style={[style_font.f_24, style_font.bold, style_txt.txt_blue, style_margin.mb_20]} >Login to your Account</Text>
                <Formik
                    initialValues={{username : '', password : ''}}
                    validationSchema={reviewSchema}
                    onSubmit={(values, action) => {
                         LoginHandler(values)
                         //action.resetForm()
                    }}
                >
                    {
                        (props) => {
                            return (
                                <View>
                                   <FormInput 
                                    value={props.values.username}
                                    placeholder='USERNAME'
                                    onChangeText={props.handleChange('username')}
                                    onBlur={props.handleBlur('username')}
                                    onError={props.touched.username && props.errors.username !== undefined}
                                   />
                                    <FormInput 
                                    value={props.values.password}
                                    placeholder='PASSWORD'
                                    onChangeText={props.handleChange('password')}
                                    onBlur={props.handleBlur('password')}
                                    onError={props.touched.password && props.errors.password !== undefined}
                                   />
                                    <TouchableOpacity style={[styles.btn_login, style_bg.bg_primary , style_margin.my_10, style_padding.p_10]} 
                                        onPress={() => props.handleSubmit()}>
                                        <Text style={[style_txt.txt_white, style_font.f_18]}>Log in</Text>
                                    </TouchableOpacity>
                                    
                                </View>
                            )
                        }
                    }

                </Formik>

                <View style= {[style_flex.row_direction, style_flex.j_between, style_margin.m_5]}>
                    <TouchableOpacity onPress={() => navigation.navigate("Forgot")} >
                        <Text style={[styles.btn_action, style_txt.underline, style_font.f_14]}>Forgot Password</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity onPress={() => setContactVisibel(true)}>
                        <Text style={[styles.btn_action, style_txt.underline, style_font.f_14]}>Contact Support</Text>
                    </TouchableOpacity> 
                </View> 
                {
                    !Keyboard &&
                    <View style={[style_flex.row_direction, style_flex.j_center]}>
                        <TouchableOpacity>
                            <Text style={[style_txt.txt_blue , style_margin.m_10, style_txt.underline, style_font.bold, style_font.f_16]}>Active your Account</Text>
                        </TouchableOpacity>
                    </View>
                }
                </View>
            </LoginModal>
            <Contact 
                contactVisible={contactVisible}
                setContactVisibel={setContactVisibel}/>
        </>
       
        
    )
}
const reviewSchema = yup.object({
    username : yup.string()
                .required(),
    password : yup.string()
               .required()
})
type FormInputType = {
    value : string
    placeholder : string
    onChangeText : ((text: string) => void) | undefined
    onBlur :  ((e: NativeSyntheticEvent <TextInputFocusEventData>) => void) | undefined
    onError : boolean | undefined
}
const FormInput = ({value,placeholder,onChangeText,onBlur,onError}: FormInputType) => {

    return(
        <TextInput 
        value={value}
        style={[styles.text_input, style_margin.my_10, style_padding.p_10, onError ? style_border.brd_red : style_border.brd_none, {borderWidth : .7}]} 
        placeholder={placeholder} 
        keyboardType='default'
        onChangeText={onChangeText}
        onBlur={onBlur}/>
    )
}
