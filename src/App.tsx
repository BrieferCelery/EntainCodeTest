import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, StyleSheet, View} from 'react-native';
import Card from './components/Card';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {Padding} from './components/Padding';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        {/* <ScrollView contentInsetAdjustmentBehavior="automatic"> */}

        <View style={styles.container}>
          <Text style={styles.mainText}>Featured Races</Text>
          <Padding />
          <Card></Card>
        </View>
        {/* </ScrollView> */}
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  mainText: {
    fontSize: 25,
    textAlign: 'center',
  },
});

export default App;
