import AsyncStorage from '@react-native-async-storage/async-storage'
import {useEffect, useState} from 'react'
import { Alert, FlatList, Text, View } from "react-native"
import { style_bg, style_flex, style_font, style_margin, style_txt } from '../../styles/global'
import { GetSubjectStudentApi } from '../../api/student/HomePage'
import { BaseUser } from '../../types/User'

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
    const bg_color_class = [style_bg.bg_gray , style_bg.bg_light_gray , style_bg.bg_light_yellow, style_bg.bg_yellow]

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
        <View style={[style_margin.mt_10]}>
            <Text style={[style_txt.txt_blue , style_font.bold, style_font.f_22, style_margin.mx_10]}>Classes</Text>
            <View>
                <FlatList
                    horizontal = {true}
                    data={subjects}
                    renderItem={({item}) => {
                        const index = Math.floor(Math.random() * 3)+ 1
                        return (
                            <View key={item.id}
                                style={[{height : 125 , width : 140, margin : 8 , borderRadius : 15, paddingBottom : 10}, bg_color_class[index], style_flex.col_direction, style_flex.a_center, style_flex.j_end]}>
                                <Text style={[style_font.bold, style_font.f_14, style_txt.txt_blue, {textAlign : 'center'}]}>
                                    {item.name}
                                </Text>
                                <Text style={[style_font.f_12, style_txt.txt_blue]}>
                                  Teacher name
                                </Text>
                            </View>
                    )
                    }}      
                />
            </View>
        </View>
    )
}
