import React from 'react';
import { Text, StyleSheet, View, Image,FlatList} from 'react-native';
import Header from '../../components/Header';
import Card from '../../components/Card';
import ROTINAS from '../../data/index';




export default function Details () {
  return (
    <View style={estilo.container}>
        <Text>essa é a pagina de detalhes</Text>
      </View>     




  );
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000000',
    borderColor: 'white',
    paddingHorizontal: 20,
  }
});