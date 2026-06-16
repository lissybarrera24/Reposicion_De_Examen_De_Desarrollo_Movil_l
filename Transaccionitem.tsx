import React from 'react';
import {
  Text,
  StyleSheet
} from 'react-native';

interface Props {
  texto: string;
}

export default function TransaccionItem({
  texto
}: Props) {
  return (
    <Text style={styles.item}>
      {texto}
    </Text>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1
  }
});
