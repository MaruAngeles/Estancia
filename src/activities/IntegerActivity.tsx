import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useGame } from '../context/GameContext';

const generateQuestions = () => {
  let questions: any[] = [];

  for (let i = 0; i < 10; i++) {
    const num1 = Math.floor(Math.random() * 200) - 100;
    const num2 = Math.floor(Math.random() * 200) - 100;

    questions.push({
      question: `¿Cuánto es ${num1} + (${num2})?`,
      answer: num1 + num2
    });
  }

  return questions;
};

export default function IntegerActivity() {
  const navigation = useNavigation<any>();
  const { addReward, coins } = useGame();

  const [questions, setQuestions] = useState(generateQuestions());
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState('');
  const [message, setMessage] = useState('');

  const restartGame = () => {
    setQuestions(generateQuestions());
    setCurrentQuestion(0);
    setAnswer('');
    setMessage('');
  };

  const verify = () => {
    Keyboard.dismiss();

    if (Number(answer) === questions[currentQuestion].answer) {
      addReward(10, 0);
      setMessage('Correcto');

      setTimeout(() => {
        if (currentQuestion < 9) {
          setCurrentQuestion(currentQuestion + 1);
          setAnswer('');
          setMessage('');
        } else {
          setMessage('¡Completaste la Cueva!');
        }
      }, 800);
    } else {
      setMessage('Respuesta incorrecta');
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <LinearGradient colors={['#87CEEB', '#B9A7F9', '#E8C7FF']} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
          <View style={styles.card}>
            <Text style={styles.title}>Cueva de los Enteros</Text>

            <View style={styles.counterBox}>
              <Text style={styles.counter}>
                Pregunta {currentQuestion + 1}/10
              </Text>
            </View>

            <View style={styles.questionBox}>
              <Text style={styles.question}>
                {questions[currentQuestion].question}
              </Text>
            </View>

            <TextInput
              style={styles.input}
              placeholder="Escribe tu respuesta"
              placeholderTextColor="#94A3B8"
              keyboardType="numbers-and-punctuation"
              value={answer}
              onChangeText={setAnswer}
              returnKeyType="done"
              onSubmitEditing={verify}
            />

            <Pressable
              style={({ pressed }) => [
                styles.button,
                pressed && styles.pressed
              ]}
              onPress={verify}
            >
              <Text style={styles.buttonText}>Comprobar</Text>
            </Pressable>

            {!!message && (
              <Text style={styles.message}>{message}</Text>
            )}

            <Pressable
              style={({ pressed }) => [
                styles.secondaryButton,
                pressed && styles.pressed
              ]}
              onPress={restartGame}
            >
              <Text style={styles.buttonText}>Reiniciar juego</Text>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                styles.menuButton,
                pressed && styles.pressed
              ]}
              onPress={() => navigation.navigate('Map')}
            >
              <Text style={styles.buttonText}>Menú de juegos</Text>
            </Pressable>

            <View style={styles.statsContainer}>
              <View style={styles.statCard}>
                <Text style={styles.statLabel}>Monedas</Text>
                <Text style={styles.statValue}>{coins}</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
}
const styles=StyleSheet.create({

container:{

flexGrow:1,

justifyContent:'center',

padding:25

},

card:{

backgroundColor:'rgba(255,255,255,0.95)',

borderRadius:28,

padding:25,

shadowColor:'#000',

shadowOffset:{
width:0,
height:5
},

shadowOpacity:0.25,

shadowRadius:6,

elevation:6

},

title:{

fontSize:32,

fontWeight:'bold',

color:'#312E81',

textAlign:'center',

marginBottom:20,

textShadowColor:'rgba(0,0,0,0.15)',

textShadowOffset:{
width:1,
height:1
},

textShadowRadius:2

},

counterBox:{

alignSelf:'center',

backgroundColor:'#DDD6FE',

paddingHorizontal:18,

paddingVertical:8,

borderRadius:20,

marginBottom:25

},

counter:{

fontSize:17,

fontWeight:'bold',

color:'#4C1D95'

},

questionBox:{

backgroundColor:'#EEF2FF',

borderRadius:22,

padding:22,

marginBottom:25,

borderWidth:2,

borderColor:'#C4B5FD'

},

question:{

fontSize:30,

fontWeight:'bold',

textAlign:'center',

color:'#312E81'

},

input:{

backgroundColor:'white',

borderWidth:2,

borderColor:'#A78BFA',

borderRadius:18,

padding:18,

fontSize:24,

textAlign:'center',

color:'#312E81',

marginBottom:10

},

button:{

backgroundColor:'#22C55E',

padding:18,

borderRadius:18,

alignItems:'center',

marginTop:15,

shadowColor:'#000',

shadowOffset:{
width:0,
height:3
},

shadowOpacity:0.2,

shadowRadius:4,

elevation:5

},

secondaryButton:{

backgroundColor:'#3B82F6',

padding:18,

borderRadius:18,

alignItems:'center',

marginTop:15,

shadowColor:'#000',

shadowOffset:{
width:0,
height:3
},

shadowOpacity:0.2,

shadowRadius:4,

elevation:5

},

menuButton:{

backgroundColor:'#8B5CF6',

padding:18,

borderRadius:18,

alignItems:'center',

marginTop:15,

shadowColor:'#000',

shadowOffset:{
width:0,
height:3
},

shadowOpacity:0.2,

shadowRadius:4,

elevation:5

},

buttonText:{

color:'white',

fontSize:20,

fontWeight:'bold'

},

message:{

marginTop:20,

fontSize:22,

fontWeight:'bold',

textAlign:'center',

color:'#4338CA'

},

statsContainer:{

flexDirection:'row',

justifyContent:'space-between',

marginTop:30

},

statCard:{

flex:1,

backgroundColor:'#EEF2FF',

padding:18,

borderRadius:18,

alignItems:'center',

marginHorizontal:5,

borderWidth:1,

borderColor:'#C4B5FD'

},

statLabel:{

fontSize:15,

color:'#64748B',

fontWeight:'600'

},

statValue:{

fontSize:26,

fontWeight:'bold',

color:'#312E81',

marginTop:5

},

pressed:{

transform:[

{

scale:0.97

}

],

opacity:0.85

}

});