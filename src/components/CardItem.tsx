import React, {ReactElement} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {unixTimeConverter} from '../helpers/utils';
import Timer from './Timer';
import {Padding} from './Padding';
import {RaceCardItemProps, AdvertisedStartType} from '../types';
import {useAppDispatch} from '../redux/store';
import {removeRaceById} from '../redux/reducers/raceReducers';

interface Props {
  meeting_name: string;
  race_name: string;
  race_id: string;
  category_id: string;
  advertised_start: AdvertisedStartType;
  setExpired: (value: boolean) => void;
}

export default function CardItem({
  meeting_name,
  race_name,
  race_id,
  advertised_start,
  category_id,
  setExpired,
}: // refetch,
Props): ReactElement {
  const dispatch = useAppDispatch();
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.topRow}>
        <Text>{meeting_name}</Text>
        <Timer
          race_id={race_id}
          advertised_time={advertised_start.seconds}
          setExpired={setExpired}
        />
      </View>
      <Padding />
      <Text style={styles.secondaryText}>{race_name}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#cdcdcd',
    justifyContent: 'space-between',
  },
  topRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  secondaryText: {
    opacity: 0.8,
  },
});
