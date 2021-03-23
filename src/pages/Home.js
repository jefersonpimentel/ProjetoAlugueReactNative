import React from 'react';
import { View, Text, StyleSheet, TextInputBase } from 'react-native';
import { ScrollView, TextInput} from 'react-native-gesture-handler';
import { Feather} from '@expo/vector-icons';
import { useNavigation} from '@react-navigation/native';

import New from '../components/New';
import House from '../components/House';

export default function Home() {
  const navigation = useNavigation();

  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
    style={{backgroundColor: "#fff"}}
    >

    <View style={styles.header}>
      <View style={styles.inputArea}>
        <Feather name = "search" size ={24} color="#000" />
        <TextInput
        placeholder="O que está procurando?"  
        style={styles.input}
        />
      </View>
    </View>

    <View style={styles.contentNew}>
      <Text style={styles.title}>
        Novidades
      </Text>
    </View>

    <ScrollView horizontal showsHorizontalScrollIndicator = {false} style={{paddingHorizontal:15,}}>
      <New
      cover={require('../assets/house1.jpg')}
      name='Casa de Praia'
      description='Casa nova, uma quadra do mar, lugar seguro e monitorado 24 horas'
      onPress={() => navigation.navigate('detail')}
      />

      <New
      cover={require('../assets/house2.jpg')}
      name='Casa Floripa'
      description='Casa nova, uma quadra do mar, lugar seguro e monitorado 24 horas'
      onPress={() => navigation.navigate('detail')}
      />

      <New
      cover={require('../assets/house3.jpg')}
      name='Casa de Luxo'
      description='Casa nova, uma quadra do mar, lugar seguro e monitorado 24 horas'
      onPress={() => navigation.navigate('detail')}
      />

    </ScrollView>

    <View style={styles.close}>
      <Text style={[styles.title, {marginTop:20}]}>Proximo de você</Text>
    </View>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal:15,}}>
      <House
      cover={require('../assets/house5.jpg')}
      />
      <House
      cover={require('../assets/house6.jpg')}
      />
      <House
      cover={require('../assets/house1.jpg')}
      />
    </ScrollView>

    <Text style={[styles.title, {marginTop:20}]}>
      Dica do dia
    </Text>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
header:{
  paddingHorizontal: 15,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  marginVertical: 20,
},
inputArea:{
  paddingHorizontal: 15,
  flexDirection: 'row',
  alignItems: 'center',
  width: '98%',
  backgroundColor:"#fff",
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1.5 },
  shadowOpacity: 0.3,
  shadowRadius: 2,
  elevation: 2,
  paddingHorizontal: 10,
  height: 37,
  borderRadius: 10,
},
input:{
  fontFamily: 'Montserrat_500Medium',
  paddingHorizontal: 10,
  fontSize: 13,
  width: '90%',
},
contentNew:{
  flexDirection: 'row',
  width:'100%',
  alignItems: 'center',
},
title:{
  paddingHorizontal: 15,
  fontFamily:'Montserrat_700Bold',
  fontSize: 18,
  color:'#4f4a4a',
},
close:{
  flexDirection:'row',
  marginBottom: 10,
  alignItems: 'center'
}
});

