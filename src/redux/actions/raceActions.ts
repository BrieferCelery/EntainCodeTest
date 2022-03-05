import {apiRoot} from '../../constants/api';
import {getInit, handleResponse} from '../../helpers/utils';
import {useAppDispatch, store} from '../store';
import {getAllRaces} from '../reducers/raceReducers';
import {RaceCategories} from '../../types';

export const getRaces = async () => {
  const init = getInit();
  try {
    let res: Response = await fetch(
      `${apiRoot}/?method=nextraces&count=10`,
      init,
    );
    const data = await handleResponse(res);
    let allRaces = Object.values(data.data.race_summaries);
    // console.log(data.data.race_summaries);
    store.dispatch(getAllRaces(allRaces));

    return allRaces;
    // store.dispatch(getNextToGoIds(data.data.next_to_go_ids))
  } catch (e) {
    console.log(e);
  }
};
