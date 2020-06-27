import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: '#FFF',
  }
});

function App() {
  return (
    <>
      <StatusBar  barStyle="light-content" backgroundColor="#7159c1" />
      <View style={styles.container}>
        <Text style={styles.title}>Hello Rocketseat</Text>
      </View>
    </>
  );
}

export default App;
