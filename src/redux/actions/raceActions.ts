import {apiRoot} from '../../constants/api';
import {getInit, handleResponse} from '../../helpers/utils';
import {useAppDispatch, store} from '../store';
import {
  getAllRaces,
  getAllNextToGoIds,
  racesSlice,
} from '../reducers/raceReducers';
import {DictionaryType, RaceSummaryType} from '../../types';

export const getRaces = async () => {
  const init = getInit();
  try {
    let res: Response = await fetch(
      `${apiRoot}/?method=nextraces&count=10`,
      init,
    );
    const data = await handleResponse(res);
    let allRaces: Array<RaceSummaryType> = Object.values(
      data.data.race_summaries,
    );
    let sortedRaces = allRaces.sort((a, b) => {
      return a.advertised_start.seconds - b.advertised_start.seconds;
    });
    let nextToGoIds = data.data.next_to_go_ids;
    store.dispatch(getAllNextToGoIds(nextToGoIds));
    store.dispatch(racesSlice.actions.getAllRaces({allRaces: sortedRaces}));

    return sortedRaces;
  } catch (e) {
    console.log(e);
  }
};
