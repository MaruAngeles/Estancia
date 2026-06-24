import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';


const worlds = [
  {
    id: 'integers',
    name: 'Cueva de los Enteros',
    icon: '💎'
  },
  {
    id: 'fractions',
    name: 'Lago de las Fracciones',
    icon: '🌊'
  },
  {
    id: 'algebra',
    name: 'Castillo del Álgebra',
    icon: '🏰'
  },
  {
    id: 'detective',
    name: 'Torre del Detective',
    icon: '🔍'
  }
];


export default function MapScreen({ navigation }: any) {

  return (

    <LinearGradient
      colors={[
        '#87CEEB',
        '#B9A7F9',
        '#E8C7FF'
      ]}
      style={styles.container}
    >
      <Text style={styles.title}>
        ✨ Reino Matemático ✨
      </Text>


      <Text style={styles.subtitle}>
        Selecciona un mundo para explorar
      </Text>




      <FlatList

        data={worlds}

        keyExtractor={(item)=>item.id}


        contentContainerStyle={styles.list}


        renderItem={({item})=>(


          <Pressable

            style={({pressed})=>[
              styles.card,
              pressed && styles.pressed
            ]}


            onPress={()=>
              navigation.navigate('World',{
                worldId:item.id
              })
            }

          >


            <View style={styles.iconBox}>

              <Text style={styles.icon}>
                {item.icon}
              </Text>

            </View>



            <View style={styles.textContainer}>


              <Text style={styles.name}>
                {item.name}
              </Text>


              <Text style={styles.description}>
                Mundo matemático
              </Text>


            </View>



            <Text style={styles.arrow}>
              ➜
            </Text>



          </Pressable>


        )}

      />



    </LinearGradient>


  );
}




const styles = StyleSheet.create({


container:{

  flex:1,

  paddingTop:60,

  paddingHorizontal:20

},



title:{

  fontSize:34,

  color:'white',

  fontWeight:'bold',

  textAlign:'center',

  textShadowColor:'rgba(0,0,0,0.3)',

  textShadowOffset:{
    width:2,
    height:2
  },

  textShadowRadius:4

},



subtitle:{

  color:'white',

  fontSize:17,

  fontWeight:'600',

  textAlign:'center',

  marginTop:10,

  marginBottom:30

},

list:{

  paddingBottom:30

},

card:{

  backgroundColor:'rgba(255,255,255,0.95)',

  height:120,

  borderRadius:25,

  marginBottom:18,

  flexDirection:'row',

  alignItems:'center',

  paddingHorizontal:20,


  shadowColor:'#000',

  shadowOffset:{
    width:0,
    height:5
  },

  shadowOpacity:0.25,

  shadowRadius:6,

  elevation:6

},


iconBox:{

  width:75,

  height:75,

  borderRadius:40,

  backgroundColor:'#EEF2FF',

  justifyContent:'center',

  alignItems:'center'

},



icon:{

  fontSize:45

},



textContainer:{

  flex:1,

  marginLeft:20

},



name:{

  fontSize:20,

  fontWeight:'bold',

  color:'#312E81'

},



description:{

  marginTop:5,

  color:'#64748B',

  fontSize:14

},



arrow:{

  fontSize:30,

  color:'#8B5CF6',

  fontWeight:'bold'

},



pressed:{

  transform:[
    {
      scale:0.97
    }
  ],

  opacity:0.8

}

});