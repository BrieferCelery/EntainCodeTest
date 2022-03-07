import React, {ReactElement, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useAppSelector, store, useAppDispatch} from '../redux/store';
import {
  toggleGreyhoundRaces,
  toggleHarnessRaces,
  toggleHorseRaces,
} from '../redux/reducers/raceReducers';

import Checkbox from '@react-native-community/checkbox';
import {Padding} from './Padding';

interface Props {
  onFilterChange: any;
  filters?: Array<string>;
  horse_id?: string;
  harness_id?: string;
}

export default function CheckboxGroup(props: Props): ReactElement {
  const greyhounds = useAppSelector(state => state.races.greyhoundRaces);
  const horses = useAppSelector(state => state.races.horseRaces);
  const harness = useAppSelector(state => state.races.harnessRaces);
  const expiredRace = useAppSelector(state => state.races.isRaceExpired);

  const dispatch = useAppDispatch();

  const onToggleHarness = (value: boolean) => {
    console.log(value);
    dispatch(toggleHarnessRaces(value));
    if (value) {
      props.onFilterChange();
    }
  };
  const onToggleHorses = (value: boolean) => {
    dispatch(toggleHorseRaces(value));
    if (value) {
      props.onFilterChange();
    }
  };
  const onToggleGreyhounds = (value: boolean) => {
    dispatch(toggleGreyhoundRaces(value));
    if (value) {
      props.onFilterChange();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <Checkbox
          onCheckColor={'red'}
          onTintColor="red"
          disabled={false}
          value={horses}
          onValueChange={onToggleHorses}
        />

        <Padding />
        <Text>Horses</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <Checkbox
          onCheckColor={'red'}
          onTintColor="red"
          disabled={false}
          value={harness}
          onValueChange={onToggleHarness}
        />
        <Padding />
        <Text>Harness</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <Checkbox
          onCheckColor={'red'}
          onTintColor="red"
          disabled={false}
          value={greyhounds}
          onValueChange={onToggleGreyhounds}
        />
        <Padding />
        <Text>Greyhounds</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkboxContainer: {
    padding: 5,
    alignItems: 'center',
  },
});
