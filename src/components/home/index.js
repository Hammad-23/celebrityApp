import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Container, Content} from 'native-base';
import Options from '../option';
import Result from '../result'
function Home({navigation}) {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [result,setResult]=useState(false)
  let celeb = [
    {
      img: require('../../../assets/Afridi.jpg'),
      name: 'Afridi',
    },
    {
      img: require('../../../assets/elon.jpg'),
      name: 'Elon Musk',
    },
    {
      img: require('../../../assets/esra.jpg'),
      name: 'Esra Bilgic',
    },
    {
      img: require('../../../assets/paul.jpg'),
      name: 'Paul Walker',
    },
    {
      img: require('../../../assets/ramos.jpg'),
      name: 'S.Ramos',
    },
    {
      img: require('../../../assets/selena.jpg'),
      name: 'S.Gomez',
    },
  ];
  const current = celeb[index];
  const options = [
    {
      option1: 'Amir',
      option2: 'Yasir Shah',
      option3: 'Umer Gul',
      option4: 'Afridi',
    },
    {
      option1: 'Nikola Tesla',
      option2: 'Elon Musk',
      option3: 'Bill Gates',
      option4: 'Steve jobs',
    },
    {
      option1: 'Engin Altan',
      option2: 'Bamsi',
      option3: 'Gokce',
      option4: 'Esra Bilgic',
    },
    {
      option1: 'Paul Walker',
      option2: 'Jonh Seena',
      option3: 'Rock',
      option4: 'Steve jobs',
    },
    {
      option1: 'Messi',
      option2: 'Ronaldo',
      option3: 'S.Ramos',
      option4: 'Neymar jr',
    },
    {
      option1: 'E.Watson',
      option2: 'Mia Khalifa',
      option3: 'S.Gomez',
      option4: 'Jofra',
    },
  ];
  const currentOptions = options[index];
  const selectAnswer = (row) => {
    if (row === current.name) {
      alert('Correct!');
      setScore(score + 1);
      setTimeout(() => {
        setIndex(index + 1);
      }, 2000);
    } else {
      alert('Wrong');
      setTimeout(() => {
        setIndex(index + 1);
      }, 2000);
    }
    if (index === options.length - 1) {
setResult(true)    }
  };
  return (
    <Container style={styles.container}>
        {!result&&
        <Content>
        <View style={styles.firstHead}></View>
        <View>
           {!result&&  <Image
            resizeMode="contain"
            style={styles.imgCeleb}
            source={current.img}
          />} 
        
        </View>
        <View style={styles.firstDivQuestion}>
          <Text style={styles.question}>Q1: Guess the celebrity?</Text>
        </View>
        <View style={styles.optionsFirstRow}>
          <Options
            title={currentOptions.option1}
            onPress={() => selectAnswer(currentOptions.option1)}
          />
          <Options
            title={currentOptions.option2}
            onPress={() => selectAnswer(currentOptions.option2)}
          />
        </View>
        <View style={styles.optionsFirstRow}>
          <Options
            title={currentOptions.option3}
            onPress={() => selectAnswer(currentOptions.option3)}
          />
          <Options
            title={currentOptions.option4}
            onPress={() => selectAnswer(currentOptions.option4)}
          />
        </View>
      </Content>
}
{result&&<Result score={score}/>}
{!result&& <View style={styles.lastHead}>
          <View><Text style={{color:'white',fontSize:20}}>{`Question:${index+1}/${celeb.length}`}</Text>
          </View>
          <View><Text style={{color:'white',fontSize:20}}>{`Score:${score}`}</Text>
          </View>
      </View>}
      
     
    </Container>
  );
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#ffff',
  },
  firstHead: {
    padding: 20,
    backgroundColor: 'green',
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    alignItems: 'center',
  },
  imgCeleb: {
    height: 350,
    width: '90%',
    borderRadius: 50,
    alignSelf: 'center',
  },
  question: {
    fontSize: 20,
    marginLeft: 20,
  },
  firstDivQuestion: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  optionsFirstRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 30,
  },
  lastHead: {
    padding: 15,
    backgroundColor: 'green',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    alignItems: 'center',
    flexDirection:'row',
    justifyContent:"space-around"
  },
  scoreBox: {
    width: '90%',
    backgroundColor: 'green',
    height: 30,
    marginTop: 30,
    borderRadius: 12,
    alignSelf:'center',
  
  },
});
export default Home;
