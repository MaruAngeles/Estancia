import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import IntegerActivity from '../activities/IntegerActivity';
import FractionActivity from '../activities/FractionActivity';

export default function WorldScreen({ route }: any) {

  const worldId = route?.params?.worldId;

  if (worldId === 'integers') {
    return <IntegerActivity />;
  }

  if (worldId === 'fractions') {
    return <FractionActivity />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
         Mundo en construcción
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
    fontSize:28,
    fontWeight:'bold',
    marginBottom:20
  }
});