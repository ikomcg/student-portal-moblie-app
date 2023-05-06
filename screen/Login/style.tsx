import { StyleSheet , Dimensions} from "react-native";

const {width , height} = Dimensions.get("window")

export const styles = StyleSheet.create({
    linearBackground : {
        flex : 1,
        gap : width > 400 ? 70 : 50,
    },
    logo_container : {
        
    },
    logo_img : {
        width : width - 120,
        height : height / 5
    },
    form : {
        backgroundColor : '#ffffff',
        borderRadius : 10,
        width : width / 1.09
    },
    btn_login : {
        color : '#ffffff',
        borderRadius : 50,
        flexDirection : 'row',
        justifyContent : 'center'
    },
    text_input : {
        borderRadius : 50,
        backgroundColor : '#dcdcdc',
     
    },
    btn_action : {
        color : '#757575',
    },
    contact : {
        padding : 10,
        borderRadius : 10,
        width : '85%'
    },
    input_description : {
        borderRadius : 10,
        backgroundColor : '#dcdcdc',
    }
})