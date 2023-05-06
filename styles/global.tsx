import { StyleSheet , Dimensions} from "react-native";

const {width, height} = Dimensions.get('window')

export const global_txt = StyleSheet.create(({
  txt_blue: {
    color : '#1B6BA6'
  },
  txt_yellow : {
    color : '#fdd665'
  },
  txt_light_gray : {
    color : '#dce3e8'
  },
  txt_gray : {
    color : '#9eabb4'
  },
  txt_light_yellow : {
    color : '#ffefa7  '
  },
  txt_white : {
    color : '#ffffff'
  },
  underline : {
    textDecorationLine : 'underline'
  },
  txt_center : {
    textAlign : 'center'
  }
}))

export const global_font = StyleSheet.create({
  heading : {
    fontSize : width > 400 ? 36 : 28
  },
  sub_heading : {
    fontSize : width > 400 ? 28 : 22
  },
  body_text : {
    fontSize : width > 400 ? 22 : 16
  },
  small_text : {
    fontSize : width > 400 ? 14 : 12
  },
  extra_small_text : {
    fontSize : width > 400 ? 12 : 10
  }
})

export const global_weight = StyleSheet.create({
  bold : {
    fontWeight : '900'
  },
  semibold : {
    fontWeight : '600'
  },
  normal : {
    fontWeight : '400'
  },
  small : {
    fontWeight : '100'
  }
})

export const global_bg = StyleSheet.create(({
  bg_primary : {
    backgroundColor : '#1B6BA6'
   },
   bg_white : {
    backgroundColor : '#ffffff'
   },
   bg_op_black : {
    backgroundColor : 'rgba(0,0,0,.5)'
   },
   bg_yellow : {
    backgroundColor : '#fdd665'
  },
  bg_light_gray : {
    backgroundColor : '#dce3e8'
  },
  bg_gray : {
    backgroundColor : '#9eabb4'
  },
  bg_light_yellow : {
    backgroundColor : '#ffefa7'
  },
}))

export const global_flex = StyleSheet.create(({
  flex_1 : {
    flex : 1
  },
  flex_row_center : {
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center'
  },
  row_direction : {
    flexDirection : 'row'
  },
  col_direction : {
    flexDirection : 'column'
  },
  j_center : {
    justifyContent : 'center'
  },
  j_between : {
    justifyContent : 'space-between',
  },
  a_center : {
    alignItems :'center'
  },
  j_end : {
    justifyContent : "flex-end"
  }
}))

export const global_border = StyleSheet.create({
  brd_red : {
    borderColor : 'red'
  },
  brd_none : {
    borderColor : 'transparent'
  }
})

export const global_margin = StyleSheet.create (( {
  m_5 : {
    margin : width > 400 ? 5 : 3
  },
  m_10 : {
    margin : width > 400 ? 10 : 5
  },
  m_15 : {
    margin : width > 400 ? 15 : 10
  },
  m_20 : {
    margin : width > 400 ? 20 : 10
  },

  my_5 : {
    marginVertical :  width > 400 ? 5 : 3
  },
  my_10 : {
    marginVertical :  width > 400 ? 10 : 5 
  },
  my_15 : {
    marginVertical :  width > 400 ? 15 : 10 
  },
  my_20 : {
    marginVertical :  width > 400 ? 20 : 15 
  },

  
  mx_5 : {
    marginHorizontal :  width > 400 ? 5 : 3
  },
  mx_10 : {
    marginHorizontal : width > 400 ? 10 : 5 
  },
  mx_15 : {
    marginHorizontal : width > 400 ? 15 : 10 
  },
  mx_20 : {
    marginHorizontal : width > 400 ? 25 : 15 
  },

  mt_5 : {
    marginTop :  width > 400 ? 5 : 3
  },
  mt_10 : {
    marginTop : width > 400 ? 10 : 5 
  },
  mt_15 : {
    marginTop : width > 400 ? 15 : 10 
  },
  mt_20 : {
    marginTop : width > 400 ? 25 : 15 
  },
  mt_150 : {
    marginTop : width > 400 ? 15 : 10 
  },

  mb_5 : {
    marginBottom :  width > 400 ? 5 : 3
  },
  mb_10 : {
    marginBottom : width > 400 ? 10 : 5 
  },
  mb_15 : {
    marginBottom : width > 400 ? 15 : 10 
  },
  mb_20 : {
    marginBottom : width > 400 ? 25 : 15 
  },
  
}))

export const global_padding = StyleSheet.create (( {
  p_5 : {
    padding :  width > 400 ? 5 : 3
  },
  p_10 : {
    padding : width > 400 ? 10 : 5 
  },
  p_15 : {
    padding : width > 400 ? 15 : 10 
  },
  p_20 : {
    padding : width > 400 ? 25 : 15 
  },

  py_5 : {
    paddingVertical :  width > 400 ? 5 : 3
  },
  py_10 : {
    paddingVertical : width > 400 ? 10 : 5 
  },
  py_15 : {
    paddingVertical : width > 400 ? 15 : 10 
  },
  py_20 : {
    paddingVertical : width > 400 ? 25 : 15 
  },

  
  px_5 : {
    paddingHorizontal :  width > 400 ? 5 : 3
  },
  px_10 : {
    paddingHorizontal : width > 400 ? 10 : 5 
  },
  px_15 : {
    paddingHorizontal : width > 400 ? 15 : 10 
  },
  px_20 : {
    paddingHorizontal : width > 400 ? 25 : 15 
  },

  pt_5 : {
    paddingTop :  width > 400 ? 5 : 3
  },
  pt_10 : {
    paddingTop : width > 400 ? 10 : 5 
  },
  pt_15 : {
    paddingTop : width > 400 ? 15 : 10 
  },
  pt_20 : {
    paddingTop : width > 400 ? 25 : 15 
  }
  
}))
