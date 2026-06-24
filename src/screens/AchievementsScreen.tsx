import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AchievementsScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        🏆 Logros
      </Text>

      <Text style={styles.item}>
        🥇 Primer ejercicio completado
      </Text>

      <Text style={styles.item}>
        🪙 100 monedas obtenidas
      </Text>

      <Text style={styles.item}>
        💎 Mundo de enteros completado
      </Text>

      <Text style={styles.item}>
        🔥 10 respuestas correctas seguidas
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:30
  },

  title:{
    fontSize:32,
    fontWeight:'bold',
    marginBottom:20
  },

  item:{
    fontSize:22,
    marginBottom:15
  }
});