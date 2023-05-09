import React from 'react'
import {View , Text, Dimensions} from 'react-native'
import { global_bg, global_flex, global_font, global_margin, global_padding, global_txt, global_weight } from '../../../styles/global'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const {width} = Dimensions.get('window')
const Assignment = () => {
  return (
    <View>
        <View style={[global_flex.row_direction, global_flex.j_between, global_flex.a_center, global_padding.p_10, global_margin.mb_15]}>
            <Text style={[global_txt.txt_blue , global_font.body_text, global_weight.bold]}>On-going Assignment</Text>
            <TouchableOpacity>
                <Text style={[global_txt.underline, global_txt.txt_blue]}>See all</Text>
            </TouchableOpacity>
        </View>
        <View style={[global_flex.col_direction, global_flex.a_center, {gap : 15, marginBottom : 10}]}>
           <AssignmentCard title='Problem Solving' bg={global_bg.bg_light_gray}/>
           <AssignmentCard title='Vocabolary' bg={global_bg.bg_gray}/>
           <AssignmentCard title='Experiment no.' bg={global_bg.bg_light_yellow}/>
           <AssignmentCard title='Sewing' bg={global_bg.bg_yellow}/>
        </View>
         
    </View>
  )
}

export default Assignment

type AssignmentCardType = {
    title : string
    bg : any
}
const AssignmentCard = ({title, bg} : AssignmentCardType) => {

    return (
        <View style={[global_flex.col_direction, bg , global_padding.px_15, global_padding.py_10, {width : width / 1.08, borderRadius : 5}]}>
            <Text style={[global_txt.txt_blue, global_font.body_text, global_weight.bold, global_margin.mb_10]}>{title}</Text>
            <View style={[global_flex.row_direction, global_flex.a_center, {gap : 15}]}>
                <MaterialCommunityIcons name='clock'/>
                <Text style={[global_txt.txt_blue]}>Deadling</Text>
                <Text style={[global_txt.txt_blue]}>May 31, 2024</Text>
            </View>
        </View>
    )
}