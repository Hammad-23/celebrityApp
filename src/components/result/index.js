import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {Container, Content} from 'native-base';
export default function Result(props){
return(<Container style={styles.main}>
     <View style={styles.firstHead}></View>
    
    
   <View style={styles.reward}>
       
       <Text style={styles.txt}>
           Congragulations!
       </Text>


       
    

   </View>

   <View style={styles.scoreCard}>
       <Text style={styles.sizeScore}>
           {`You Scored ${props.score}`}
       </Text>
   </View>
    
    
    
    </Container>)
}



const styles = StyleSheet.create({
    firstHead: {
        padding: 20,
        backgroundColor: 'green',
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        alignItems: 'center',
      },
      reward: {
          alignSelf:'center',
          marginTop:50

      },
      txt: {
          color:'green',
          fontSize:35,
          fontWeight:'bold'
      },
      main: {
          backgroundColor:'lightgrey'
      },
      scoreCard: {
          alignSelf:'center',
          marginTop:100,

      },
      sizeScore: {
          fontSize:30
      }
})