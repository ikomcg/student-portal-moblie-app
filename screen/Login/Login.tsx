import React, { useState, useContext } from 'react'
import { Text, View, TouchableOpacity, Alert, Button, Keyboard,  NativeSyntheticEvent, TextInputFocusEventData, Animated} from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { global_bg, global_border, global_flex, global_font , global_margin, global_padding, global_txt, global_weight,  } from '../../styles/global';
import { styles } from './style';
import { NavigationStackProp } from 'react-navigation-stack';
import LoginModal from '../Modal';
import Contact from './Contact';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LoginAuth} from '../../api/auth/AuthAPI'
import Spinner from 'react-native-loading-spinner-overlay';
import { Formik } from 'formik';
import * as yup from 'yup'
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { UserContext } from '../../context/LoginProvider';

type LoginuserType = {
    username : string
    password : string

}

export default function Login ()  {
    const navigation = useNavigation<NavigationStackProp>()
   const {toggleIsLogged} = useContext(UserContext)

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
                toggleIsLogged(true)
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
            textStyle={{color : '#fff'}}
            />
            <LoginModal>
                <View style={[styles.form, global_padding.p_15]}>

                <Text style={[global_font.sub_heading, global_weight.bold, global_txt.txt_blue, global_margin.mb_20]} >Login to your Account</Text>
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
                                    <TouchableOpacity style={[styles.btn_login, global_bg.bg_primary , global_margin.my_10, global_padding.p_10]} 
                                        onPress={() => props.handleSubmit()}>
                                        <Text style={[global_txt.txt_white, global_font.small_text, global_padding.p_5]}>Log in</Text>
                                    </TouchableOpacity>
                                    
                                </View>
                            )
                        }
                    }

                </Formik>

                <View style= {[global_flex.row_direction, global_flex.j_between, global_margin.m_5]}>
                    <TouchableOpacity onPress={() => navigation.navigate("Forgot")} >
                        <Text style={[styles.btn_action, global_txt.underline, global_font.small_text]}>Forgot Password</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity onPress={() => setContactVisibel(true)}>
                        <Text style={[styles.btn_action, global_txt.underline, global_font.small_text]}>Contact Support</Text>
                    </TouchableOpacity> 
                </View> 
                {
                    !Keyboard &&
                    <View style={[global_flex.row_direction, global_flex.j_center]}>
                        <TouchableOpacity>
                            <Text style={[global_txt.txt_blue , global_margin.m_10, global_txt.underline, global_weight.bold, global_font.body_text]}>Active your Account</Text>
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
        style={[styles.text_input, global_font.small_text, global_padding.px_20, global_margin.my_10, global_padding.p_10, onError ? global_border.brd_red : global_border.brd_none, {borderWidth : .7}]} 
        placeholder={placeholder} 
        keyboardType='default'
        onChangeText={onChangeText}
        onBlur={onBlur}/>
    )
}
