import React, { useState, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';

import { useGame } from '../context/GameContext';

const shuffle = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const generateFractions = () => {
  const questions = [];

  while (questions.length < 10) {
    const denominator = Math.floor(Math.random() * 8) + 2;
    const numerator = Math.floor(Math.random() * (denominator - 1)) + 1;

    const whole = questions.length >= 7
      ? Math.floor(Math.random() * 4)
      : 0;

    let fractionText;
    let value;

    if (whole > 0) {
      fractionText = `${whole} ${numerator}/${denominator}`;
      value = whole + numerator / denominator;
    } else {
      fractionText = `${numerator}/${denominator}`;
      value = numerator / denominator;
    }

    const id = `${numerator}-${denominator}-${whole}-${Math.random()}`;

    questions.push({
      id,
      decimal: value.toFixed(2),
      fraction: fractionText
    });
  }

  return questions;
};

export default function FractionActivity() {
  const navigation = useNavigation();
  const { addReward, coins } = useGame();

  const [questions, setQuestions] = useState(generateFractions());

  const [selectedId, setSelectedId] = useState(null);
  const [matchedIds, setMatchedIds] = useState([]);
  const [message, setMessage] = useState('');
  const [current, setCurrent] = useState(0);

  // 🔥 IMPORTANTE: SOLO SE MEZCLA UNA VEZ (NO EN RENDER)
  const [decimals] = useState(() => shuffle(questions));
  const [fractions] = useState(() =>
    shuffle(questions).map(q => ({
      id: q.id,
      text: q.fraction
    }))
  );

  const verify = (fractionText) => {
    if (!selectedId) return;

    const question = questions.find(q => q.id === selectedId);
    if (!question) return;

    if (question.fraction === fractionText) {
      addReward(10, 0);

      setMatchedIds(prev => [...prev, selectedId]);
      setMessage('Correcto');
      setCurrent(prev => prev + 1);
    } else {
      setMessage('Incorrecto');
    }

    setSelectedId(null);
  };

  const restartGame = () => {
    const newQuestions = generateFractions();

    setQuestions(newQuestions);
    setSelectedId(null);
    setMatchedIds([]);
    setMessage('');
    setCurrent(0);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.card}>

          <Text style={styles.title}>Lago de Fracciones</Text>

          <View style={styles.counterBox}>
            <Text style={styles.counter}>
              Pregunta {current + 1}/10
            </Text>
          </View>

          <Text style={styles.instruction}>
            Une el decimal con su fracción equivalente
          </Text>

          <View style={styles.columns}>

            {/* DECIMALES */}
            <View style={styles.column}>
              <Text style={styles.header}>Decimales</Text>

              {decimals.map((item) => {
                const locked = matchedIds.includes(item.id);

                return (
                  <Pressable
                    key={item.id}
                    style={[
                      styles.itemCard,
                      selectedId === item.id && styles.selected,
                      locked && styles.correct
                    ]}
                    onPress={() => !locked && setSelectedId(item.id)}
                    disabled={locked}
                  >
                    <Text style={styles.text}>{item.decimal}</Text>
                  </Pressable>
                );
              })}
            </View>

            {/* FRACCIONES */}
            <View style={styles.column}>
              <Text style={styles.header}>Fracciones</Text>

              {fractions.map((item) => {
                const locked = matchedIds.includes(item.id);

                return (
                  <Pressable
                    key={item.id}
                    style={[
                      styles.itemCard,
                      locked && styles.correct
                    ]}
                    onPress={() => !locked && verify(item.text)}
                    disabled={locked}
                  >
                    <Text style={styles.text}>{item.text}</Text>
                  </Pressable>
                );
              })}
            </View>

          </View>

          {!!message && (
            <Text style={styles.message}>{message}</Text>
          )}

          <Pressable style={styles.button} onPress={restartGame}>
            <Text style={styles.buttonText}>Reiniciar juego</Text>
          </Pressable>

          <Pressable
            style={styles.menuButton}
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
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 25,
    backgroundColor: '#E0F2FE'
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 20
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  counterBox: {
    alignSelf: 'center',
    marginVertical: 10
  },
  counter: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  instruction: {
    textAlign: 'center',
    marginBottom: 15
  },
  columns: {
    flexDirection: 'row'
  },
  column: {
    flex: 1
  },
  header: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  },
  itemCard: {
    padding: 15,
    margin: 5,
    backgroundColor: '#EEF2FF',
    borderRadius: 12,
    alignItems: 'center'
  },
  selected: {
    backgroundColor: '#FACC15'
  },
  correct: {
    backgroundColor: '#22C55E'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#22C55E',
    padding: 15,
    marginTop: 15,
    borderRadius: 12
  },
  menuButton: {
    backgroundColor: '#8B5CF6',
    padding: 15,
    marginTop: 10,
    borderRadius: 12
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  message: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16
  },
  statsContainer: {
    marginTop: 20,
    alignItems: 'center'
  },
  statCard: {
    padding: 15,
    borderRadius: 12,
    backgroundColor: '#EEF2FF'
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});