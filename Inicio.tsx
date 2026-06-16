import React,
{
  useContext
} from 'react';

import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet
} from 'react-native';

import { BancoContext } from '../context/BancoContext';
import TransaccionItem from '../components/TransaccionItem';

export default function Inicio() {

  const {
    saldo,
    depositarSaldo,
    transacciones
  } = useContext(BancoContext);

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Bienvenido Usuario
      </Text>

      <Text style={styles.saldo}>
        Saldo Actual: L.{saldo}
      </Text>

      <Button
        title="Depositar Saldo"
        onPress={depositarSaldo}
      />

      <Text style={styles.subtitulo}>
        Últimas 5 Transacciones
      </Text>

      <FlatList
        data={transacciones
          .slice(-5)
          .reverse()}
        keyExtractor={(
          item,
          index
        ) => index.toString()}
        renderItem={({ item }) => (
          <TransaccionItem
            texto={item}
          />
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20
  },

  titulo: {
    fontSize: 24,
    marginBottom: 20
  },

  saldo: {
    fontSize: 20,
    marginBottom: 20
  },

  subtitulo: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10
  }

});
