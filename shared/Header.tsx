import { Button, ImageBackground, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native"
import Entypo from 'react-native-vector-icons/Entypo'
import {useNavigation,} from '@react-navigation/native'
import {style_bg, style_flex, style_font, style_padding, style_txt } from "../styles/global"
import LinearGradient from "react-native-linear-gradient"


const Header = () => {
    const navigation = useNavigation<any>()
  return (
    <View style={{height : 150}}>
            {/* <ImageBackground source={require("../assets/home/header_img.png")} style={{height: '100%'}} resizeMode="stretch">
                
               
            </ImageBackground> */}
            <LinearGradient colors={['#80CDF3', '#1B6BA6']} start={{y: 0, x : 0}} end={{y : 0.6, x: 0}} >
                <View style={[style_flex.row_direction , style_flex.j_between, style_flex.a_center, styleHeader.header_style, style_padding.px_10]}>
                    <TouchableOpacity onPress={() => navigation.getParent('LeftDrawer').openDrawer()}>
                        <Entypo name='menu' style={[style_font.f_36, style_font.bold, style_txt.txt_white]}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.getParent('RightDrawer').openDrawer()}>
                        <Entypo name='dots-three-vertical' style={[style_font.f_36, style_font.bold, style_txt.txt_white]}/>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
            
    </View>    
  )
}

export default Header

const styleHeader = StyleSheet.create({

    header_style : {
        height : '100%',
        
    }
}) 