import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function StoryScreen({ navigation }: any) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        👑 Bienvenido al Reino Matemático
      </Text>

      <Text style={styles.story}>
        El Rey Pitágoras necesita ayuda.
        Los monstruos matemáticos han robado los
        cristales del conocimiento.
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Map')}
      >
        <Text style={styles.buttonText}>
          Comenzar aventura
        </Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    padding:30
  },

  title:{
    fontSize:32,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:20
  },

  story:{
    fontSize:20,
    textAlign:'center',
    marginBottom:30
  },

  button:{
    backgroundColor:'#8B5CF6',
    padding:15,
    borderRadius:12
  },

  buttonText:{
    color:'white',
    textAlign:'center',
    fontSize:18,
    fontWeight:'bold'
  }
});