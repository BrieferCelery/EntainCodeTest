import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Card from './components/Card';
import {Provider} from 'react-redux';
import {store} from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Card></Card>
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
