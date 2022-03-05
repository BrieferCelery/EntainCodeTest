import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ActionSheetIOS} from 'react-native';
import {RootState} from '../store';
const racesSlice = createSlice({
  name: 'races',
  initialState: {
    next_to_go_ids: [],
    race_summaries: [],
    greyhoundRaces: true,
    horseRaces: true,
    harnessRaces: true,
  },
  reducers: {
    getAllRaces: (state, action) => {
      return {
        ...state,
        race_summaries: action.payload,
      };
    },
    toggleGreyhoundRaces: (state, action) => {
      return {
        ...state,
        greyhoundRaces: action.payload,
      };
    },
    toggleHorseRaces: (state, action) => {
      return {
        ...state,
        horseRaces: action.payload,
      };
    },
    toggleHarnessRaces: (state, action) => {
      return {
        ...state,
        harnessRaces: action.payload,
      };
    },
    removeRaceById: (state, action: PayloadAction<string>) => {
      let index = state.race_summaries.findIndex((i: any) => {
        i.race_id === action.payload;
      });
      let newRaceSummaries = [...state.race_summaries];
      if (index > -1) {
        newRaceSummaries.splice(index, 1);
      }
      return {
        ...state,
        race_summaries: newRaceSummaries,
      };
    },
  },
});

export const {
  getAllRaces,
  removeRaceById,
  toggleGreyhoundRaces,
  toggleHarnessRaces,
  toggleHorseRaces,
} = racesSlice.actions;

export const selectAllRaces = (state: RootState) => state.races.race_summaries;
export const selectGreyhounds = (state: RootState) =>
  state.races.greyhoundRaces;

export const selectNextToGoIds = (state: RootState) =>
  state.races.next_to_go_ids;

export default racesSlice.reducer;
