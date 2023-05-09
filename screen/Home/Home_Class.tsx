import AsyncStorage from '@react-native-async-storage/async-storage'
import {useEffect, useState} from 'react'
import { Alert, FlatList, Text, View, StyleSheet, ScrollView } from "react-native"
import { global_bg, global_flex, global_margin, global_font, global_weight, global_txt } from '../../styles/global'
import { GetSubjectStudentApi } from '../../api/student/HomePage'
import { BaseUser } from '../../types/User'
import Assignment from './Assignment/Assignment'

type SubjectType = {
    id : string
    name : string
    code : string
  }
type ClassesTypes = {
    user : BaseUser
}

  export default function Classes ({user} : ClassesTypes) : JSX.Element {
    const [subjects, setSubjects] = useState<SubjectType[]>([])
    const bg_color_class = [global_bg.bg_gray , global_bg.bg_light_gray , global_bg.bg_light_yellow, global_bg.bg_yellow]

    useEffect(() => {
        GetSubject()
    },[])
    
      const GetSubject = async () => {
        if(!user) return
        const {apiUrl, access_token} = user.content
        const subject = await GetSubjectStudentApi({
          access_token ,
          apiUrl
        })
        if(!subject) {
          return
        }
        setSubjects(subject)
        
      }

    return (
        <View style={[global_margin.mt_10]}>
            <Text style={[global_txt.txt_blue , global_font.body_text, global_weight.bold, global_margin.mx_10]}>Classes</Text>
            <ScrollView>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                    horizontal = {true}
                    data={subjects}
                    renderItem={({item}) => {
                        const index = Math.floor(Math.random() * 3)+ 1
                        return (
                            <View key={item.id}
                                style={[{height : 125 , width : 140, margin : 8 , borderRadius : 15, paddingBottom : 10}, bg_color_class[index], global_flex.col_direction, global_flex.a_center, global_flex.j_end]}>
                                <Text style={[global_font.small_text, global_weight.bold, global_txt.txt_blue, {textAlign : 'center'}]}>
                                    {item.name}
                                </Text>
                                <Text style={[global_font.extra_small_text, global_txt.txt_blue]}>
                                  Teacher name
                                </Text>
                            </View>
                    )
                    }}      
                />
                <Assignment/>
            </ScrollView>
        </View>
    )
}
