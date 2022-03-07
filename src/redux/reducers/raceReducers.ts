import {createSlice, PayloadAction, current} from '@reduxjs/toolkit';
import {ActionSheetIOS} from 'react-native';
import {RootState} from '../store';
import {
  RACING_CATEGORIES,
  RACING_IDS,
  RaceSummaryType,
  DictionaryType,
} from '../../types';
import {act} from 'react-test-renderer';

type RaceStateType = {
  race_summaries: RaceSummaryType[];
  next_to_go_ids: string[];
  greyhoundRaces: boolean;
  horseRaces: boolean;
  harnessRaces: boolean;
  isRaceExpired: boolean;
  filters: string[];
  filtered_race: [];
};

// export interface SetGlobalUiSetting {
//   setting: GlobalUiSetting;
// }
export interface SetAllRacesAction {
  allRaces: RaceSummaryType[];
}

const initialState: RaceStateType = {
  next_to_go_ids: [] as string[],
  race_summaries: [],
  greyhoundRaces: true,
  horseRaces: true,
  harnessRaces: true,
  isRaceExpired: false,
  filters: RACING_IDS,
  filtered_race: [],
};

export const racesSlice = createSlice({
  name: 'races',
  initialState,
  reducers: {
    getAllRaces: (
      state: RaceStateType,
      action: PayloadAction<SetAllRacesAction>,
    ) => {
      state.race_summaries = action.payload.allRaces;
    },
    getAllNextToGoIds: (state: RaceStateType, action) => {
      state.next_to_go_ids = action.payload;
    },
    toggleGreyhoundRaces: (
      state: RaceStateType,
      action: PayloadAction<boolean>,
    ) => {
      state.greyhoundRaces = action.payload;
    },
    toggleHorseRaces: (
      state: RaceStateType,
      action: PayloadAction<boolean>,
    ) => {
      state.horseRaces = action.payload;
    },
    toggleHarnessRaces: (
      state: RaceStateType,
      action: PayloadAction<boolean>,
    ) => {
      console.log(action.payload);
      state.harnessRaces = action.payload;
    },
    removeRaceById: (state: RaceStateType, action: PayloadAction<string>) => {
      let allRaces = current(state.race_summaries);
      let index = allRaces.findIndex((i: RaceSummaryType) => {
        return i.race_id === action.payload;
      });
      let newRaceSummaries = [...allRaces];
      if (index > -1) {
        newRaceSummaries.splice(index, 1);
      }
      console.log('new races:', newRaceSummaries);

      state.race_summaries = newRaceSummaries;
    },
    isRaceExpired: (state: RaceStateType, action: PayloadAction<boolean>) => {
      state.isRaceExpired = action.payload;
    },
  },
});

export const {
  getAllRaces,
  removeRaceById,
  toggleGreyhoundRaces,
  toggleHarnessRaces,
  toggleHorseRaces,
  getAllNextToGoIds,
  isRaceExpired,
} = racesSlice.actions;

export default racesSlice.reducer;
