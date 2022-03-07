import React, {ReactElement, useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {timeFormatter, unixTimeConverter} from '../helpers/utils';
import {removeRaceById} from '../redux/reducers/raceReducers';
import {useAppDispatch} from '../redux/store';

interface TimerProps {
  advertised_time: number;
  race_id: string;
  // refetch: any;
  setExpired: (value: boolean) => void;
}

export default function Timer(props: TimerProps): ReactElement {
  const [currentTime, setCurrentTime] = useState(new Date().getTime());

  const dispatch = useAppDispatch();

  useEffect(() => {
    let interval = setInterval(() => {
      setCurrentTime(new Date().getTime() / 1000);
      if (unixTimeConverter(props.advertised_time) < -60) {
        props.setExpired(true);
        dispatch(removeRaceById(props.race_id));
      }
    }, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.race_id, dispatch]);

  let newtimer = unixTimeConverter(props.advertised_time);
  return (
    <View>
      <Text style={{color: newtimer < 60 ? 'red' : 'black'}}>
        {timeFormatter(newtimer)}
      </Text>
    </View>
  );
}
