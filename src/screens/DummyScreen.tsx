import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

const DummyScreen = () => {
  const routes = useRoute();

  return (
    <View style={styles.container}>
      <Text>{routes.name}</Text>
    </View>
  );
};

export default DummyScreen;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
