import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useGame } from '../context/GameContext';

export default function ProfileScreen() {

  const { coins, xp } = useGame();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>👤 Perfil del Jugador</Text>

      <Text style={styles.info}>
        Nombre: Aventurero Matemático
      </Text>

      <Text style={styles.info}>
        Monedas: {coins}
      </Text>

      <Text style={styles.info}>
        XP: {xp}
      </Text>

      <Text style={styles.info}>
        Nivel: {Math.floor(xp / 100) + 1}
      </Text>
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
    marginBottom:30,
    textAlign:'center'
  },

  info:{
    fontSize:22,
    marginBottom:15
  }
});