import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HelpScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        📘 Ayuda del Juego
      </Text>

      <Text style={styles.item}>
        ➕ Suma (+): Si los signos son iguales, se suman y se mantiene el signo.
      </Text>

      <Text style={styles.item}>
        ➖ Resta (-): Si los signos son diferentes, se restan y se toma el signo del número mayor.
      </Text>

      <Text style={styles.item}>
        ✖️ Multiplicación: signos iguales = positivo, signos diferentes = negativo.
      </Text>

      <Text style={styles.item}>
        ➗ División: mismas reglas que la multiplicación.
      </Text>

      <Text style={styles.item}>
        💡 Tip: Siempre revisa primero los signos antes de resolver.
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:30,
    backgroundColor:'#fff'
  },

  title:{
    fontSize:28,
    fontWeight:'bold',
    marginBottom:20
  },

  item:{
    fontSize:18,
    marginBottom:15,
    lineHeight:24
  }
});