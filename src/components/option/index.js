import React from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native'



export default function Options(props){
    return(
     <TouchableOpacity {...props} style={styles.optionBtn}>
       <Text style={styles.btnTextColor}>
           {props.title}
       </Text>
     </TouchableOpacity>


    )
}

const styles=StyleSheet.create({
    optionBtn: {
     alignItems:'center',
     backgroundColor: 'green',
     borderRadius:50,
     width:120,
     height:50,
     justifyContent:'center'
     

    },
    btnTextColor: {
        fontSize:20,
        color:'white'
    }
})