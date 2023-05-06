import AsyncStorage from '@react-native-async-storage/async-storage'
import {useEffect, useState} from 'react'
import { Alert, Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native"
import { global_bg, global_flex, global_font, global_margin, global_padding, global_txt, global_weight } from '../styles/global'
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
                <View style={[global_margin.mt_10]}>
                    <View style={[global_margin.mx_15]}>
                        <Text style={[global_txt.txt_blue , global_font.small_text , global_weight.bold]}> Hello, Good day</Text>
                        <View style={[global_flex.row_direction]}>
                            <Text style={[global_txt.txt_blue , global_font.body_text , global_weight.bold]}>{user?.content.first_name} {user?.content.last_name}</Text>
                            <MaterialCommunityIcons name='hand-wave' style={[global_font.body_text, global_weight.bold, global_txt.txt_yellow, global_margin.mx_10]}/>
                        </View>
                        <View style={[global_flex.row_direction, global_flex.j_center , global_flex.a_center, global_bg.bg_light_gray, global_margin.my_15, {borderRadius: 15}]}>
                            <TextInput 
                                style={[global_padding.p_10, {width : '90%'} ]} 
                                placeholder='Search'
                                keyboardType='default'/>
                            <EvilIcons name='search'  style={[global_font.body_text, global_weight.bold, global_txt.txt_gray]}/>
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