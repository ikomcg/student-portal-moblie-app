import AsyncStorage from '@react-native-async-storage/async-storage'
import {useEffect, useState} from 'react'
import { Alert, Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native"
import { style_bg, style_flex, style_font, style_margin, style_padding, style_txt } from '../styles/global'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { BaseUser } from '../types/User'
import Classes from './Classes/Home_Class'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
const Dashboard = () => {
    const [user, setUser] = useState<BaseUser | null>(null)
    useEffect(() => {
        GetDataStorage()
    },[])
    const GetDataStorage = async () => {
        try{
            const userValue = await AsyncStorage.getItem('user')
            if(!userValue) return
            
            setUser(JSON.parse(userValue))
        }
        catch(e){
            Alert.alert("Something wrong!")
        }
    }
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
            <ScrollView>
                <View style={[style_margin.mt_10]}>
                    <View style={[style_margin.mx_15]}>
                        <Text style={[style_txt.txt_blue , style_font.f_16 , style_font.bold]}> Hello, Good day</Text>
                        <View style={[style_flex.row_direction]}>
                            <Text style={[style_txt.txt_blue , style_font.f_24 , style_font.bold]}>{user?.content.first_name} {user?.content.last_name}</Text>
                            <MaterialCommunityIcons name='hand-wave' style={[style_font.f_24, style_font.bold, style_txt.txt_yellow, style_margin.mx_10]}/>
                        </View>
                        <View style={[style_flex.row_direction, style_flex.j_center , style_flex.a_center, style_bg.bg_light_gray, style_margin.my_15, {borderRadius: 15}]}>
                            <TextInput 
                                style={[style_padding.p_10, {width : '90%'} ]} 
                                placeholder='Search'
                                keyboardType='default'/>
                            <EvilIcons name='search'  style={[style_font.f_24, style_font.bold, style_txt.txt_gray]}/>
                        </View>
                        
                    </View>
                    {
                        user && <Classes user={user}/>
                    }
                    
                </View>
            </ScrollView>
        </TouchableWithoutFeedback>
        
    )
}
export default Dashboard

const styles = StyleSheet.create({
    text_input : {
        borderRadius : 10,
        paddingLeft : 10
        
    }
})