import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useGame } from '../context/GameContext';

export default function RewardScreen() {
  const { coins, xp } = useGame();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎉 Recompensas</Text>

      <Text style={styles.text}>
        Monedas: {coins}
      </Text>

      <Text style={styles.text}>
        Experiencia: {xp}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },

  title:{
    fontSize:30,
    fontWeight:'bold',
    marginBottom:20
  },

  text:{
    fontSize:22
  }
});