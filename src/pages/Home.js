import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView, TextInput} from 'react-native-gesture-handler'
import {Feather} from '@expo/vector-icons';

export default function Home() {
  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
    style={{backgroundColor: "#fff"}}
    >

    <View style={styles.header}>
      <View style={styles.inputArea}>
        <Feather name = "search" size ={24} color="#333" />
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
  width: '100%',
  backgroundColor:"#fff",
  elevation: 2,
  paddingHorizontal: 10,
  height: 37,
  borderRadius:10,
},
input:{
  fontFamily: 'Montserrat_500Medium',
  paddingHorizontal: 10,
  fontSize: 13,
  width: '100%',
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
});

