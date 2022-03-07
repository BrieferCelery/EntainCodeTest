/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  ReactElement,
  useEffect,
  useState,
  useCallback,
  createContext,
} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {getRaces} from '../redux/actions/raceActions';
import {
  toggleHarnessRaces,
  toggleHorseRaces,
  toggleGreyhoundRaces,
} from '../redux/reducers/raceReducers';
import {useAppSelector, useAppDispatch} from '../redux/store';
import CardItem from './CardItem';
import CheckboxGroup from './CheckboxGroup';
import {RACING_IDS} from '../types';
// import {useColorScheme} from 'react-native';

interface Props {}

export const CardContext = createContext(() => {});

export default function Card({}: Props): ReactElement {
  const allRaces = useAppSelector(state => state.races.race_summaries);
  const greyhounds = useAppSelector(state => state.races.greyhoundRaces);
  const horses = useAppSelector(state => state.races.horseRaces);
  const harness = useAppSelector(state => state.races.harnessRaces);
  const expiredRace = useAppSelector(state => state.races.isRaceExpired);

  const [, setRefresh] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [, setRerenderTrigger] = useState<boolean>(false);
  const [raceSummary, setRaceSummary] = useState<any>(allRaces);
  const [, setFilteredRaceSummary] = useState<any>(allRaces);

  const fetchData = useCallback(async () => {
    let raceSummaries = await getRaces();
    setRaceSummary(raceSummaries);
    setFilteredRaceSummary(raceSummaries);
    // return raceSummaries;
  }, []);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (raceSummary.length === 0) {
      return;
    }
    if (horses && greyhounds && harness) {
      setRaceSummary(allRaces);
    }
    let newRaceSummary = raceSummary.filter((x: any) => {
      if (!horses && !greyhounds && !harness) {
        fetchData();
        dispatch(toggleHarnessRaces(true));
        dispatch(toggleGreyhoundRaces(true));
        dispatch(toggleHorseRaces(true));
        return true;
      }
      if (greyhounds && x.category_id === RACING_IDS[0]) {
        return true;
      }

      if (horses && x.category_id === RACING_IDS[2]) {
        return true;
      }

      if (harness === true && x.category_id === RACING_IDS[1]) {
        return true;
      }
      return false;
    });
    setRefresh(false);

    setRaceSummary(newRaceSummary);
  }, [horses, harness, greyhounds]);

  useEffect(() => {
    setLoading(true);
    try {
      fetchData();
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }, []);
  useEffect(() => {
    setRaceSummary(allRaces);
  }, [allRaces]);

  const renderItem = ({item}: any) => {
    return (
      <CardItem
        category_id={item.category_id}
        meeting_name={item.meeting_name}
        race_name={item.race_name}
        race_id={item.race_id}
        advertised_start={{seconds: item.advertised_start.seconds}}
        setExpired={setRerenderTrigger}
      />
    );
  };

  if (loading) {
    return (
      <View>
        <Text>loading....</Text>
      </View>
    );
  }
  return (
    <>
      <FlatList
        ListHeaderComponent={
          <CheckboxGroup
            onFilterChange={() => {
              fetchData();
            }}
          />
        }
        keyExtractor={item => item.race_id}
        data={raceSummary?.slice(0, 5)}
        renderItem={renderItem}
        maxToRenderPerBatch={5}
        extraData={expiredRace}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '90vh',
  },
});
