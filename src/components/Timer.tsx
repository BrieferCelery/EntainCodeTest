import React, {ReactElement, useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {useAppDispatch} from '../redux/store';
import {removeRaceById} from '../redux/reducers/raceReducers';

interface TimerProps {
  time_remaining: number;
  race_id: string;
}

export default function Timer(props: TimerProps): ReactElement {
  const [timer, setTimer] = useState(props.time_remaining);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (timer <= -60) {
      dispatch(removeRaceById(props.race_id));
    }
  }, [timer, props.race_id, dispatch]);

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer(prevState => {
        return prevState - 1;
      });
    }, 1000); //each count lasts for a second
    //cleanup the interval on complete
    return () => clearInterval(interval);
  }, []);
  return (
    <View>
      <Text style={{color: timer < 60 ? 'red' : 'black'}}>{timer}</Text>
    </View>
  );
}
