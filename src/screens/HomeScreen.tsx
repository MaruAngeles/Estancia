import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Animated,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path, Circle, Rect, Polygon } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

// Componente de estrella animada
const AnimatedStar = ({ x, y, size, delay }: { x: number; y: number; size: number; delay: number }) => {
  const opacity = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 1000 + Math.random() * 1000,
          delay,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.3,
          duration: 1000 + Math.random() * 1000,
          useNativeDriver: true,
        }),
      ])
    );
    animation.start();
    return () => animation.stop();
  }, []);

  return (
    <Animated.View style={[styles.star, { left: x, top: y, opacity }]}>
      <Svg width={size} height={size} viewBox="0 0 24 24">
        <Path
          d="M12 2L14.09 8.26L20.18 9.27L15.54 13.14L16.82 19.02L12 16.27L7.18 19.02L8.46 13.14L3.82 9.27L9.91 8.26L12 2Z"
          fill="#FFD700"
        />
      </Svg>
    </Animated.View>
  );
};

// Componente de corona SVG
const Crown = () => (
  <Svg width={100} height={80} viewBox="0 0 100 80">
    <Path
      d="M10 70 L10 35 L25 50 L50 20 L75 50 L90 35 L90 70 Z"
      fill="#FFD700"
      stroke="#DAA520"
      strokeWidth="2"
    />
    <Circle cx="25" cy="55" r="6" fill="#E53935" />
    <Circle cx="50" cy="45" r="8" fill="#43A047" />
    <Circle cx="75" cy="55" r="6" fill="#1E88E5" />
    <Circle cx="10" cy="35" r="5" fill="#FFD700" stroke="#DAA520" strokeWidth="1" />
    <Circle cx="50" cy="20" r="5" fill="#FFD700" stroke="#DAA520" strokeWidth="1" />
    <Circle cx="90" cy="35" r="5" fill="#FFD700" stroke="#DAA520" strokeWidth="1" />
  </Svg>
);

// Componente de castillo SVG
const Castle = () => (
  <Svg width={width} height={180} viewBox="0 0 400 180" style={styles.castle}>
    {/* Torres laterales */}
    <Rect x="30" y="60" width="50" height="120" fill="#D4A5A5" />
    <Rect x="320" y="60" width="50" height="120" fill="#D4A5A5" />
    
    {/* Almenas torres laterales */}
    <Rect x="25" y="45" width="15" height="20" fill="#C49393" />
    <Rect x="47" y="45" width="16" height="20" fill="#C49393" />
    <Rect x="70" y="45" width="15" height="20" fill="#C49393" />
    <Rect x="315" y="45" width="15" height="20" fill="#C49393" />
    <Rect x="337" y="45" width="16" height="20" fill="#C49393" />
    <Rect x="360" y="45" width="15" height="20" fill="#C49393" />
    
    {/* Banderas */}
    <Rect x="52" y="15" width="3" height="35" fill="#8B4513" />
    <Polygon points="55,15 55,35 75,25" fill="#E53935" />
    <Rect x="345" y="15" width="3" height="35" fill="#8B4513" />
    <Polygon points="348,15 348,35 368,25" fill="#E53935" />
    
    {/* Cuerpo principal */}
    <Rect x="80" y="80" width="240" height="100" fill="#E8C4C4" />
    
    {/* Torre central */}
    <Rect x="160" y="40" width="80" height="140" fill="#D4A5A5" />
    
    {/* Almenas torre central */}
    <Rect x="155" y="25" width="18" height="20" fill="#C49393" />
    <Rect x="180" y="25" width="18" height="20" fill="#C49393" />
    <Rect x="205" y="25" width="18" height="20" fill="#C49393" />
    <Rect x="230" y="25" width="18" height="20" fill="#C49393" />
    
    {/* Bandera central */}
    <Rect x="197" y="0" width="4" height="30" fill="#8B4513" />
    <Polygon points="201,0 201,20 225,10" fill="#FFD700" />
    
    {/* Puerta principal */}
    <Path d="M175 180 L175 120 Q200 100 225 120 L225 180 Z" fill="#5D4037" />
    <Circle cx="215" cy="150" r="4" fill="#FFD700" />
    
    {/* Ventanas */}
    <Rect x="100" y="110" width="25" height="35" rx="12" fill="#87CEEB" />
    <Rect x="275" y="110" width="25" height="35" rx="12" fill="#87CEEB" />
    <Rect x="185" y="55" width="30" height="40" rx="15" fill="#87CEEB" />
    
    {/* Detalles de ventanas */}
    <Rect x="111" y="110" width="3" height="35" fill="#5D4037" />
    <Rect x="286" y="110" width="3" height="35" fill="#5D4037" />
    <Rect x="199" y="55" width="3" height="40" fill="#5D4037" />
  </Svg>
);

// Generar posiciones de estrellas
const stars = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  x: Math.random() * (width - 20),
  y: Math.random() * (height * 0.6),
  size: 8 + Math.random() * 12,
  delay: Math.random() * 2000,
}));

export default function HomeScreen({ navigation }: any) {
  const floatAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, {
          toValue: -10,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(floatAnim, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        colors={['#87CEEB', '#A78BFA', '#DDA0DD', '#F0B6C8']}
        locations={[0, 0.35, 0.7, 1]}
        style={styles.gradient}
      >
        {/* Estrellas animadas */}
        {stars.map((star) => (
          <AnimatedStar
            key={star.id}
            x={star.x}
            y={star.y}
            size={star.size}
            delay={star.delay}
          />
        ))}

        <ScrollView
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>La Aventura del</Text>
          <Text style={styles.subtitle}>Reino Matemático</Text>

          <Animated.View style={{ transform: [{ translateY: floatAnim }] }}>
            <Crown />
          </Animated.View>

          <View style={styles.buttonsContainer}>
            <Pressable
              style={({ pressed }) => [
                styles.playButton,
                pressed && styles.buttonPressed,
              ]}
              onPress={() => navigation.navigate('Map')}
            >
              <Svg width={24} height={24} viewBox="0 0 24 24" style={styles.buttonIcon}>
                <Path d="M8 5v14l11-7z" fill="white" />
              </Svg>
              <Text style={styles.buttonText}>Jugar</Text>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                styles.secondaryButton,
                pressed && styles.buttonPressed,
              ]}
              onPress={() => navigation.navigate('Profile')}
            >
              <Svg width={24} height={24} viewBox="0 0 24 24" style={styles.buttonIcon}>
                <Circle cx="12" cy="8" r="4" fill="white" />
                <Path d="M12 14c-4 0-8 2-8 4v2h16v-2c0-2-4-4-8-4z" fill="white" />
              </Svg>
              <Text style={styles.buttonText}>Perfil</Text>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                styles.secondaryButton,
                { backgroundColor: '#F59E0B' },
                pressed && styles.buttonPressed,
              ]}
              onPress={() => navigation.navigate('Achievements')}
            >
              <Svg width={24} height={24} viewBox="0 0 24 24" style={styles.buttonIcon}>
                <Path d="M12 2L15 8.5L22 9.5L17 14.5L18 21.5L12 18L6 21.5L7 14.5L2 9.5L9 8.5L12 2Z" fill="white" />
              </Svg>
              <Text style={styles.buttonText}>Logros</Text>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                styles.secondaryButton,
                { backgroundColor: '#EC4899' },
                pressed && styles.buttonPressed,
              ]}
              onPress={() => navigation.navigate('Shop')}
            >
              <Svg width={24} height={24} viewBox="0 0 24 24" style={styles.buttonIcon}>
                <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 17a1.25 1.25 0 110-2.5A1.25 1.25 0 0112 19zm1.4-6.6c-.6.4-.9.7-.9 1.6h-1.8v-.4c0-1.2.5-2 1.3-2.6.7-.5 1.3-.9 1.3-1.8 0-.9-.7-1.5-1.7-1.5-1 0-1.7.6-1.9 1.5l-1.8-.7C8.7 6.8 10.1 6 12 6c2.3 0 3.8 1.4 3.8 3.4 0 1.6-.9 2.4-2.4 3z" fill="white"/>
              </Svg>
              <Text style={styles.buttonText}>Ayuda</Text>
            </Pressable>
          </View>

          <Text style={styles.tagline}>¡Salva el reino resolviendo desafíos matemáticos!</Text>
        </ScrollView>

        {/* Castillo en la parte inferior */}
        <Castle />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 200,
  },
  title: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 36,
    color: '#FFD700',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  buttonsContainer: {
    marginTop: 30,
    width: '100%',
    alignItems: 'center',
  },
  playButton: {
    backgroundColor: '#22C55E',
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 25,
    width: 220,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  secondaryButton: {
    backgroundColor: '#3B82F6',
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 25,
    width: 220,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  buttonPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.97 }],
  },
  buttonIcon: {
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  tagline: {
    color: 'white',
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  star: {
    position: 'absolute',
  },
  castle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
